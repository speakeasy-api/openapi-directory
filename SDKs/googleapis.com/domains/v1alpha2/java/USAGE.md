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
                    name = "et";
                }};
                queryParams = new DomainsProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "accusamus";
                    alt = "json";
                    callback = "ea";
                    fields = "veritatis";
                    filter = "et";
                    key = "ullam";
                    oauthToken = "molestiae";
                    pageSize = 670725502018494698;
                    pageToken = "vel";
                    prettyPrint = true;
                    quotaUser = "qui";
                    uploadType = "qui";
                    uploadProtocol = "nulla";
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