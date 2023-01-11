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

            ServicedirectoryProjectsLocationsListRequest req = new ServicedirectoryProjectsLocationsListRequest() {{
                security = new ServicedirectoryProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicedirectoryProjectsLocationsListPathParams() {{
                    name = "voluptates";
                }};
                queryParams = new ServicedirectoryProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "mollitia";
                    alt = "json";
                    callback = "eveniet";
                    fields = "autem";
                    filter = "sapiente";
                    key = "maxime";
                    oauthToken = "tempora";
                    pageSize = 8111184694678328436;
                    pageToken = "temporibus";
                    prettyPrint = false;
                    quotaUser = "adipisci";
                    uploadType = "cum";
                    uploadProtocol = "ipsam";
                }};
            }};

            ServicedirectoryProjectsLocationsListResponse res = sdk.projects.servicedirectoryProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->