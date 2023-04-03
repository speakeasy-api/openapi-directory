<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest req = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest() {{
                dollarXgafv = "2";
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
                accessToken = "vel";
                alt = "media";
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                name = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }}            

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse res = sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req, new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity() {{
                option1 = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkValidCredsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->