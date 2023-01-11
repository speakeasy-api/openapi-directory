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

            SecretmanagerProjectsLocationsListRequest req = new SecretmanagerProjectsLocationsListRequest() {{
                security = new SecretmanagerProjectsLocationsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SecretmanagerProjectsLocationsListPathParams() {{
                    name = "sit";
                }};
                queryParams = new SecretmanagerProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "repellendus";
                    alt = "proto";
                    callback = "quis";
                    fields = "itaque";
                    filter = "nostrum";
                    key = "eaque";
                    oauthToken = "nostrum";
                    pageSize = 4043695744794401436;
                    pageToken = "molestiae";
                    prettyPrint = true;
                    quotaUser = "dolorem";
                    uploadType = "enim";
                    uploadProtocol = "earum";
                }};
            }};

            SecretmanagerProjectsLocationsListResponse res = sdk.projects.secretmanagerProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->