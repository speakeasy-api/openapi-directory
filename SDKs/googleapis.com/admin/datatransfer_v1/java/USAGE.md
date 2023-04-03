<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetSecurity;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetRequest;
import org.openapis.openapi.models.operations.DatatransferApplicationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatatransferApplicationsGetRequest req = new DatatransferApplicationsGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                applicationId = "quibusdam";
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            DatatransferApplicationsGetResponse res = sdk.applications.datatransferApplicationsGet(req, new DatatransferApplicationsGetSecurity() {{
                option1 = new DatatransferApplicationsGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.application.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->