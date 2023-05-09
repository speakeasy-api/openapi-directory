# requests

## Overview

Verify Requests

### Available Operations

* [verifyRequest](#verifyrequest) - Request a Verification

## verifyRequest

Use Verify request to generate and send a PIN to your user:

1. Create a request to send a verification code to your user.

2. Check the `status` field in the response to ensure that your request was successful (zero is success).

3. Use the `request_id` field in the response for the Verify check.

*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyRequestRequest;
import org.openapis.openapi.models.operations.VerifyRequestResponse;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.VerifyRequest;
import org.openapis.openapi.models.shared.VerifyRequestCodeLengthEnum;
import org.openapis.openapi.models.shared.VerifyRequestLgEnum;
import org.openapis.openapi.models.shared.VerifyRequestWorkflowIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyRequestRequest req = new VerifyRequestRequest(FormatEnum.XML,                 new VerifyRequest("abcd1234", "Sup3rS3cr3t!!", "Acme Inc", "447700900000") {{
                                codeLength = VerifyRequestCodeLengthEnum.SIX;
                                country = "GB";
                                lg = VerifyRequestLgEnum.EN_US;
                                nextEventWait = 120L;
                                pinCode = "AKFG-3424";
                                pinExpiry = 240L;
                                senderId = "ACME";
                                workflowId = VerifyRequestWorkflowIdEnum.THREE;
                            }};);            

            VerifyRequestResponse res = sdk.requests.verifyRequest(req);

            if (res.verifyRequest200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
