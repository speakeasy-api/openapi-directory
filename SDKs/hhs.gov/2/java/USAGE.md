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

            GetResourcesCampaignsJsonRequest req = new GetResourcesCampaignsJsonRequest() {{
                queryParams = new GetResourcesCampaignsJsonQueryParams() {{
                    max = 5199076868301280758;
                    offset = 5012710144942661761;
                    sort = "exercitationem";
                }};
            }};

            GetResourcesCampaignsJsonResponse res = sdk.campaigns.getResourcesCampaignsJson(req);

            if (res.campaignWrapped.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->