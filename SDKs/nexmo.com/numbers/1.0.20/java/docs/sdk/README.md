# SDK

## Overview

The Numbers API enables you to manage your existing numbers and buy new virtual numbers for use with the Vonage APIs. Further information is here: <https://developer.nexmo.com/numbers/overview>

Numbers product documentation on the Vonage Developer Portal
<https://developer.nexmo.com/numbers/overview>
### Available Operations

* [buyANumber](#buyanumber) - Buy a number
* [cancelANumber](#cancelanumber) - Cancel a number
* [getAvailableNumbers](#getavailablenumbers) - Search available numbers
* [getOwnedNumbers](#getownednumbers) - List the numbers you own
* [updateANumber](#updateanumber) - Update a number

## buyANumber

Request to purchase a specific inbound number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BuyANumberResponse;
import org.openapis.openapi.models.shared.NumberDetails;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NumberDetails req = new NumberDetails("GB", "447700900000") {{
                targetApiKey = "1a2345b7";
            }};            

            BuyANumberResponse res = sdk.sdk.buyANumber(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelANumber

Cancel your subscription for a specific inbound number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelANumberResponse;
import org.openapis.openapi.models.shared.NumberDetails;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NumberDetails req = new NumberDetails("GB", "447700900000") {{
                targetApiKey = "1a2345b7";
            }};            

            CancelANumberResponse res = sdk.sdk.cancelANumber(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAvailableNumbers

Retrieve inbound numbers that are available for the specified country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableNumbersFeaturesEnum;
import org.openapis.openapi.models.operations.GetAvailableNumbersRequest;
import org.openapis.openapi.models.operations.GetAvailableNumbersResponse;
import org.openapis.openapi.models.shared.SearchPatternEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAvailableNumbersRequest req = new GetAvailableNumbersRequest("GB") {{
                features = GetAvailableNumbersFeaturesEnum.SMS_VOICE;
                index = 623564L;
                pattern = "deserunt";
                searchPattern = SearchPatternEnum.ONE;
                size = 437587L;
                type = TypeEnum.LANDLINE;
            }};            

            GetAvailableNumbersResponse res = sdk.sdk.getAvailableNumbers(req);

            if (res.availableNumbers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOwnedNumbers

Retrieve all the inbound numbers associated with your Vonage account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOwnedNumbersRequest;
import org.openapis.openapi.models.operations.GetOwnedNumbersResponse;
import org.openapis.openapi.models.shared.SearchPatternEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis", "ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOwnedNumbersRequest req = new GetOwnedNumbersRequest() {{
                applicationId = "delectus";
                country = "GB";
                hasApplication = false;
                index = 272656L;
                pattern = "suscipit";
                searchPattern = SearchPatternEnum.ONE;
                size = 791725L;
            }};            

            GetOwnedNumbersResponse res = sdk.sdk.getOwnedNumbers(req);

            if (res.inboundNumbers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateANumber

Change the behaviour of a number that you own.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateANumberResponse;
import org.openapis.openapi.models.shared.NumberDetailsUpdate;
import org.openapis.openapi.models.shared.NumberDetailsUpdateMessagesCallbackTypeEnum;
import org.openapis.openapi.models.shared.NumberDetailsUpdateVoiceCallbackTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat", "voluptatum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    apiSecret = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NumberDetailsUpdate req = new NumberDetailsUpdate("GB", "447700900000") {{
                appId = "aaaaaaaa-bbbb-cccc-dddd-0123456789abc";
                messagesCallbackType = NumberDetailsUpdateMessagesCallbackTypeEnum.APP;
                messagesCallbackValue = "aaaaaaaa-bbbb-cccc-dddd-0123456789ab";
                moHttpUrl = "https://example.com/webhooks/inbound-sms";
                moSmppSysType = "inbound";
                voiceCallbackType = NumberDetailsUpdateVoiceCallbackTypeEnum.TEL;
                voiceCallbackValue = "447700900000";
                voiceStatusCallback = "https://example.com/webhooks/status";
            }};            

            UpdateANumberResponse res = sdk.sdk.updateANumber(req);

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
