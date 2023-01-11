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

            GetCmsV3DomainsGetPageRequest req = new GetCmsV3DomainsGetPageRequest() {{
                security = new GetCmsV3DomainsGetPageSecurity() {{
                    privateAppsLegacy = new SchemePrivateAppsLegacy() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetCmsV3DomainsGetPageQueryParams() {{
                    after = "et";
                    archived = true;
                    createdAfter = "1992-01-04T07:26:48Z";
                    createdAt = "2002-02-04T23:29:43Z";
                    createdBefore = "1995-06-28T16:10:30Z";
                    limit = 8746540360787621978;
                    sort = new String[]() {{
                        add("alias"),
                    }};
                    updatedAfter = "1970-11-13T08:30:12Z";
                    updatedAt = "1989-07-19T02:41:41Z";
                    updatedBefore = "1973-04-04T12:13:31Z";
                }};
            }};

            GetCmsV3DomainsGetPageResponse res = sdk.domains.getCmsV3DomainsGetPage(req);

            if (res.collectionResponseWithTotalDomainForwardPaging.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->