<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugDatasourcesItemsCheckAccessRequest req = new CloudsearchDebugDatasourcesItemsCheckAccessRequest() {{
                dollarXgafv = "2";
                principal = new Principal() {{
                    groupResourceName = "provident";
                    gsuitePrincipal = new GSuitePrincipal() {{
                        gsuiteDomain = false;
                        gsuiteGroupEmail = "distinctio";
                        gsuiteUserEmail = "quibusdam";
                    }};
                    userResourceName = "unde";
                }};
                accessToken = "nulla";
                alt = "media";
                callback = "illum";
                debugOptionsEnableDebugging = false;
                fields = "vel";
                key = "error";
                name = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }}            

            CloudsearchDebugDatasourcesItemsCheckAccessResponse res = sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req, new CloudsearchDebugDatasourcesItemsCheckAccessSecurity() {{
                option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkAccessResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->