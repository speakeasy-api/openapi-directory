<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateUsageChargeRequest req = new CreateUsageChargeRequest() {{
                security = new CreateUsageChargeSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateUsageChargePathParams() {{
                    recurringApplicationChargeId = "qui";
                }};
                headers = new CreateUsageChargeHeaders() {{
                    xAppstoreUsageChargeToken = "modi";
                }};
                request = new CreateUsageChargeRequestBody() {{
                    usageCharge = new CreateUsageChargeRequestBodyUsageCharge() {{
                        description = "nihil";
                        point = 1011676084465510524;
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