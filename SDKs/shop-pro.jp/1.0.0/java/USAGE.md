<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateUsageChargeSecurity;
import org.openapis.openapi.models.operations.CreateUsageChargePathParams;
import org.openapis.openapi.models.operations.CreateUsageChargeHeaders;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBodyUsageCharge;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBody;
import org.openapis.openapi.models.operations.CreateUsageChargeRequest;
import org.openapis.openapi.models.operations.CreateUsageChargeResponse;
import org.openapis.openapi.models.shared.SchemeOAuth2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsageChargeRequest req = new CreateUsageChargeRequest() {{
                security = new CreateUsageChargeSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateUsageChargePathParams() {{
                    recurringApplicationChargeId = "corrupti";
                }};
                headers = new CreateUsageChargeHeaders() {{
                    xAppstoreUsageChargeToken = "provident";
                }};
                request = new CreateUsageChargeRequestBody() {{
                    usageCharge = new CreateUsageChargeRequestBodyUsageCharge() {{
                        description = "2019/4 メール送信分";
                        point = 100;
                    }};
                }};
            }};            

            CreateUsageChargeResponse res = sdk.applicationCharge.createUsageCharge(req);

            if (res.createUsageCharge201ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->