# SDK

## Overview

The Verify API helps you to implement 2FA (two-factor authentication) in your applications. This is useful for:

* Protecting against spam, by preventing spammers from creating multiple accounts
* Monitoring suspicious activity, by forcing an account user to verify ownership of a number
* Ensuring that you can reach your users at any time because you have their correct phone number
More information is available at <https://developer.nexmo.com/verify>

More information on the Verify product on our Developer Portal
<https://developer.nexmo.com/verify>
### Available Operations

* [verifyCheck](#verifycheck) - Verify Check
* [verifyControl](#verifycontrol) - Verify Control
* [verifyRequestWithPsd2](#verifyrequestwithpsd2) - PSD2 (Payment Services Directive 2) Request
* [verifySearch](#verifysearch) - Verify Search

## verifyCheck

Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.

1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.

*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyCheckRequest;
import org.openapis.openapi.models.operations.VerifyCheckResponse;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyCheckRequest req = new VerifyCheckRequest(                new CheckRequest("abcd1234", "Sup3rS3cr3t!!", "1234", "abcdef0123456789abcdef0123456789") {{
                                ipAddress = "123.0.0.255";
                            }};, FormatEnum.XML);            

            VerifyCheckResponse res = sdk.sdk.verifyCheck(req);

            if (res.verifyCheck200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifyControl

Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:


1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.

2. Check the `status` in the response.


*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyControlRequest;
import org.openapis.openapi.models.operations.VerifyControlResponse;
import org.openapis.openapi.models.shared.ControlRequest;
import org.openapis.openapi.models.shared.ControlRequestCmdEnum;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyControlRequest req = new VerifyControlRequest(                new ControlRequest("abcd1234", "Sup3rS3cr3t!!", ControlRequestCmdEnum.CANCEL, "abcdef0123456789abcdef0123456789");, FormatEnum.XML);            

            VerifyControlResponse res = sdk.sdk.verifyControl(req);

            if (res.verifyControl200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifyRequestWithPsd2

Use Verify request to generate and send a PIN to your user to authorize a payment:
1. Create a request to send a verification code to your user.
2. Check the `status` field in the response to ensure that your request was successful (zero is success).
3. Use the `request_id` field in the response for the Verify check.
(Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyRequestWithPsd2Request;
import org.openapis.openapi.models.operations.VerifyRequestWithPsd2Response;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.Psd2Request;
import org.openapis.openapi.models.shared.Psd2RequestCodeLengthEnum;
import org.openapis.openapi.models.shared.Psd2RequestLgEnum;
import org.openapis.openapi.models.shared.Psd2RequestWorkflowIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyRequestWithPsd2Request req = new VerifyRequestWithPsd2Request(FormatEnum.XML,                 new Psd2Request(48.00, "abcd1234", "Sup3rS3cr3t!!", "447700900000", "Acme Inc") {{
                                codeLength = Psd2RequestCodeLengthEnum.SIX;
                                country = "GB";
                                lg = Psd2RequestLgEnum.ES_ES;
                                nextEventWait = 120L;
                                pinExpiry = 240L;
                                workflowId = Psd2RequestWorkflowIdEnum.SEVEN;
                            }};);            

            VerifyRequestWithPsd2Response res = sdk.sdk.verifyRequestWithPsd2(req);

            if (res.verifyRequestWithPsd2200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifySearch

Use Verify search to check the status of past or current verification requests:

1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.

*Note that this endpoint is available by `POST` request as well as `GET`.*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifySearchRequest;
import org.openapis.openapi.models.operations.VerifySearchResponse;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifySearchRequest req = new VerifySearchRequest("abcd1234", "Sup3rS3cr3t!!", FormatEnum.XML, "illum") {{
                requestIds = new String[]{{
                    add("abcdef0123456789abcdef0123456789"),
                    add("abcdef0123456789abcdef0123456789"),
                }};
            }};            

            VerifySearchResponse res = sdk.sdk.verifySearch(req);

            if (res.verifySearch200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
