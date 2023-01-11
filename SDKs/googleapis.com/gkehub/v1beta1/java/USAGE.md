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

            GkehubProjectsLocationsListRequest req = new GkehubProjectsLocationsListRequest() {{
                security = new GkehubProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GkehubProjectsLocationsListPathParams() {{
                    name = "enim";
                }};
                queryParams = new GkehubProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "modi";
                    alt = "proto";
                    callback = "soluta";
                    fields = "sapiente";
                    filter = "consectetur";
                    key = "distinctio";
                    oauthToken = "explicabo";
                    pageSize = 890423983519550527;
                    pageToken = "est";
                    prettyPrint = true;
                    quotaUser = "facere";
                    uploadType = "voluptatem";
                    uploadProtocol = "consequatur";
                }};
            }};

            GkehubProjectsLocationsListResponse res = sdk.projects.gkehubProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->