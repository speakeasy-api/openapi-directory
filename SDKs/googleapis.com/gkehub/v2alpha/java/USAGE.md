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
                    name = "officia";
                }};
                queryParams = new GkehubProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "qui";
                    alt = "json";
                    callback = "nihil";
                    fields = "optio";
                    filter = "ut";
                    key = "est";
                    oauthToken = "est";
                    pageSize = 5005477383170731806;
                    pageToken = "in";
                    prettyPrint = true;
                    quotaUser = "suscipit";
                    uploadType = "ut";
                    uploadProtocol = "molestias";
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