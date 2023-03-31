<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest req = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest() {{
                security = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity() {{
                    option1 = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse res = sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req);

            if (res.checkValidCredsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->