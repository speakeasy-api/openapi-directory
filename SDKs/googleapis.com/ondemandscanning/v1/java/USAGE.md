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

            OndemandscanningProjectsLocationsOperationsCancelRequest req = new OndemandscanningProjectsLocationsOperationsCancelRequest() {{
                security = new OndemandscanningProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new OndemandscanningProjectsLocationsOperationsCancelPathParams() {{
                    name = "distinctio";
                }};
                queryParams = new OndemandscanningProjectsLocationsOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ipsa";
                    alt = "media";
                    callback = "officiis";
                    fields = "sed";
                    key = "nisi";
                    oauthToken = "quasi";
                    prettyPrint = false;
                    quotaUser = "sequi";
                    uploadType = "dolore";
                    uploadProtocol = "ut";
                }};
            }};

            OndemandscanningProjectsLocationsOperationsCancelResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsCancel(req);

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->