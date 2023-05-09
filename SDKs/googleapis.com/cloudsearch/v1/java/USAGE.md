<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugDatasourcesItemsCheckAccessRequest req = new CloudsearchDebugDatasourcesItemsCheckAccessRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                principal = new Principal() {{
                    groupResourceName = "distinctio";
                    gsuitePrincipal = new GSuitePrincipal() {{
                        gsuiteDomain = false;
                        gsuiteGroupEmail = "quibusdam";
                        gsuiteUserEmail = "unde";
                    }};;
                    userResourceName = "nulla";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                debugOptionsEnableDebugging = false;
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            CloudsearchDebugDatasourcesItemsCheckAccessResponse res = sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req, new CloudsearchDebugDatasourcesItemsCheckAccessSecurity() {{
                option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1("ipsa", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->