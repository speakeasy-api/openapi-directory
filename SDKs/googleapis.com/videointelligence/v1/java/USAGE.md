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

            VideointelligenceOperationsProjectsLocationsOperationsCancelRequest req = new VideointelligenceOperationsProjectsLocationsOperationsCancelRequest() {{
                security = new VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams() {{
                    name = "velit";
                }};
                queryParams = new VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "necessitatibus";
                    alt = "media";
                    callback = "quaerat";
                    fields = "sint";
                    key = "aut";
                    oauthToken = "deserunt";
                    prettyPrint = true;
                    quotaUser = "suscipit";
                    uploadType = "eum";
                    uploadProtocol = "dicta";
                }};
            }};

            VideointelligenceOperationsProjectsLocationsOperationsCancelResponse res = sdk.operations.videointelligenceOperationsProjectsLocationsOperationsCancel(req);

            if (res.googleProtobufEmpty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->