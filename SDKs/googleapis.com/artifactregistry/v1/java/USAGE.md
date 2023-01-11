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

            ArtifactregistryProjectsLocationsListRequest req = new ArtifactregistryProjectsLocationsListRequest() {{
                security = new ArtifactregistryProjectsLocationsListSecurity() {{
                    option1 = new ArtifactregistryProjectsLocationsListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ArtifactregistryProjectsLocationsListPathParams() {{
                    name = "rerum";
                }};
                queryParams = new ArtifactregistryProjectsLocationsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "nostrum";
                    alt = "json";
                    callback = "earum";
                    fields = "eum";
                    filter = "impedit";
                    key = "est";
                    oauthToken = "dolor";
                    pageSize = 8966615302516847732;
                    pageToken = "ut";
                    prettyPrint = false;
                    quotaUser = "voluptatibus";
                    uploadType = "at";
                    uploadProtocol = "cupiditate";
                }};
            }};

            ArtifactregistryProjectsLocationsListResponse res = sdk.projects.artifactregistryProjectsLocationsList(req);

            if (res.listLocationsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->