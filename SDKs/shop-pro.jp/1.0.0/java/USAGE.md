<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateUsageChargeSecurity;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBodyUsageCharge;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBody;
import org.openapis.openapi.models.operations.CreateUsageChargeRequest;
import org.openapis.openapi.models.operations.CreateUsageChargeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsageChargeRequest req = new CreateUsageChargeRequest() {{
                requestBody = new CreateUsageChargeRequestBody() {{
                    usageCharge = new CreateUsageChargeRequestBodyUsageCharge() {{
                        description = "2019/4 メール送信分";
                        point = 100;
                    }};
                }};
                xAppstoreUsageChargeToken = "corrupti";
                recurringApplicationChargeId = "provident";
            }}            

            CreateUsageChargeResponse res = sdk.applicationCharge.createUsageCharge(req, new CreateUsageChargeSecurity() {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createUsageCharge201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->