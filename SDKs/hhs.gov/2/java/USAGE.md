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
                    max = 8717895732742165505;
                    offset = 2259404117704393152;
                    sort = "culpa";
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