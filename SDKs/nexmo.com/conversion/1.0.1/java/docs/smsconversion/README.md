# smsConversion

## Overview

SMS Conversion Request

### Available Operations

* [smsConversion](#smsconversion) - Tell Nexmo if your SMS message was successful

## smsConversion

Send a Conversion API request with information about the SMS message identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmsConversionRequest;
import org.openapis.openapi.models.operations.SmsConversionResponse;
import org.openapis.openapi.models.shared.DeliveredEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("nulla", "corrupti") {{
                        apiKey = "YOUR_API_KEY_HERE";
                        apiSecret = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            SmsConversionRequest req = new SmsConversionRequest(DeliveredEnum.ONE, "vel", "error");            

            SmsConversionResponse res = sdk.smsConversion.smsConversion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
