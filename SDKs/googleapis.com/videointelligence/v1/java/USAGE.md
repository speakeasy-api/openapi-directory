<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.VideointelligenceOperationsProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VideointelligenceOperationsProjectsLocationsOperationsCancelRequest req = new VideointelligenceOperationsProjectsLocationsOperationsCancelRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                name = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            VideointelligenceOperationsProjectsLocationsOperationsCancelResponse res = sdk.operations.videointelligenceOperationsProjectsLocationsOperationsCancel(req, new VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->