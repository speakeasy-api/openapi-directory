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

            EventarcProjectsLocationsListRequest req = new EventarcProjectsLocationsListRequest() {{
                security = new EventarcProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new EventarcProjectsLocationsListPathParams() {{
                    name = "et";
                }};
                queryParams = new EventarcProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptates";
                    alt = "proto";
                    callback = "tempora";
                    fields = "quaerat";
                    filter = "explicabo";
                    key = "quisquam";
                    oauthToken = "enim";
                    pageSize = 4313323389964407203;
                    pageToken = "reiciendis";
                    prettyPrint = false;
                    quotaUser = "rerum";
                    uploadType = "illo";
                    uploadProtocol = "voluptas";
                }};
            }};

            EventarcProjectsLocationsListResponse res = sdk.projects.eventarcProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->