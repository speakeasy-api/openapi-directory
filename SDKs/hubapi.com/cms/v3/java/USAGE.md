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
                    after = "sit";
                    archived = false;
                    createdAfter = "1978-05-13T03:50:47Z";
                    createdAt = "2019-04-21T07:38:14Z";
                    createdBefore = "1997-12-26T13:41:25Z";
                    limit = 2669985732393126063;
                    sort = new String[]() {{
                        add("voluptas"),
                        add("fugit"),
                    }};
                    updatedAfter = "2011-08-12T10:11:12Z";
                    updatedAt = "2003-05-13T04:57:12Z";
                    updatedBefore = "2004-06-02T10:14:12Z";
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