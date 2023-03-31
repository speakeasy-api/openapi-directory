<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessPathParams;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessQueryParams;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugDatasourcesItemsCheckAccessRequest req = new CloudsearchDebugDatasourcesItemsCheckAccessRequest() {{
                security = new CloudsearchDebugDatasourcesItemsCheckAccessSecurity() {{
                    option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new CloudsearchDebugDatasourcesItemsCheckAccessPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new CloudsearchDebugDatasourcesItemsCheckAccessQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    debugOptionsEnableDebugging = false;
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Principal() {{
                    groupResourceName = "suscipit";
                    gsuitePrincipal = new GSuitePrincipal() {{
                        gsuiteDomain = false;
                        gsuiteGroupEmail = "iure";
                        gsuiteUserEmail = "magnam";
                    }};
                    userResourceName = "debitis";
                }};
            }};            

            CloudsearchDebugDatasourcesItemsCheckAccessResponse res = sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req);

            if (res.checkAccessResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->