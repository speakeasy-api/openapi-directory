<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.OndemandscanningProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OndemandscanningProjectsLocationsOperationsCancelRequest req = new OndemandscanningProjectsLocationsOperationsCancelRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            OndemandscanningProjectsLocationsOperationsCancelResponse res = sdk.projects.ondemandscanningProjectsLocationsOperationsCancel(req, new OndemandscanningProjectsLocationsOperationsCancelSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->