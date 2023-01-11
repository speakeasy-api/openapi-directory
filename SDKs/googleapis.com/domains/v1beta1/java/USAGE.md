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

            DomainsProjectsLocationsListRequest req = new DomainsProjectsLocationsListRequest() {{
                security = new DomainsProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DomainsProjectsLocationsListPathParams() {{
                    name = "modi";
                }};
                queryParams = new DomainsProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "beatae";
                    alt = "media";
                    callback = "et";
                    fields = "eum";
                    filter = "aspernatur";
                    key = "molestiae";
                    oauthToken = "minima";
                    pageSize = 5160718804235916024;
                    pageToken = "quo";
                    prettyPrint = false;
                    quotaUser = "porro";
                    uploadType = "provident";
                    uploadProtocol = "sequi";
                }};
            }};

            DomainsProjectsLocationsListResponse res = sdk.projects.domainsProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->