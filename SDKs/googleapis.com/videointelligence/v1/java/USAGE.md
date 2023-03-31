<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams;
import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams;
import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
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