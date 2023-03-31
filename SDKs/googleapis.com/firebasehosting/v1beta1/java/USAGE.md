<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreatePathParams;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateQueryParams;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateResponse;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest() {{
                security = new FirebasehostingProjectsSitesCreateSecurity() {{
                    option1 = new FirebasehostingProjectsSitesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasehostingProjectsSitesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new FirebasehostingProjectsSitesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    siteId = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new SiteInput() {{
                    appId = "iure";
                    labels = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                }};
            }};            

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req);

            if (res.site.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->