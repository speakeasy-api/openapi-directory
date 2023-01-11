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
                    name = "aliquam";
                }};
                queryParams = new OndemandscanningProjectsLocationsOperationsCancelQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quis";
                    alt = "json";
                    callback = "magni";
                    fields = "officia";
                    key = "et";
                    oauthToken = "velit";
                    prettyPrint = false;
                    quotaUser = "repellat";
                    uploadType = "nam";
                    uploadProtocol = "quod";
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