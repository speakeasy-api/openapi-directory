<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetResourcesCampaignsJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesCampaignsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesCampaignsJsonRequest req = new GetResourcesCampaignsJsonRequest() {{
                max = 548814;
                offset = 592845;
                sort = "distinctio";
            }}            

            GetResourcesCampaignsJsonResponse res = sdk.campaigns.getResourcesCampaignsJson(req);

            if (res.campaignWrapped.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->