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
                    name = "inventore";
                }};
                queryParams = new SecretmanagerProjectsLocationsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "proto";
                    callback = "quia";
                    fields = "eos";
                    filter = "tempora";
                    key = "ipsa";
                    oauthToken = "tenetur";
                    pageSize = 1972599758688118725;
                    pageToken = "sunt";
                    prettyPrint = false;
                    quotaUser = "facere";
                    uploadType = "deserunt";
                    uploadProtocol = "recusandae";
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