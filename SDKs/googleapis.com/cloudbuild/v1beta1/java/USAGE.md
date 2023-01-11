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

            CloudbuildProjectsLocationsOperationsCancelRequest req = new CloudbuildProjectsLocationsOperationsCancelRequest() {{
                security = new CloudbuildProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudbuildProjectsLocationsOperationsCancelPathParams() {{
                    name = "voluptates";
                }};
                queryParams = new CloudbuildProjectsLocationsOperationsCancelQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "alias";
                    alt = "json";
                    callback = "cupiditate";
                    fields = "vero";
                    key = "in";
                    oauthToken = "libero";
                    prettyPrint = false;
                    quotaUser = "voluptatem";
                    uploadType = "inventore";
                    uploadProtocol = "voluptas";
                }};
                request = new java.util.HashMap<String, Object>() {{
                    put("dicta", "inventore");
                    put("eum", "nesciunt");
                }};
            }};

            CloudbuildProjectsLocationsOperationsCancelResponse res = sdk.projects.cloudbuildProjectsLocationsOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->