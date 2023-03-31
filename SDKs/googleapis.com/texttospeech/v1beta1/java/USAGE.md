<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetPathParams;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetQueryParams;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.TexttospeechProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TexttospeechProjectsLocationsOperationsGetRequest req = new TexttospeechProjectsLocationsOperationsGetRequest() {{
                security = new TexttospeechProjectsLocationsOperationsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TexttospeechProjectsLocationsOperationsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new TexttospeechProjectsLocationsOperationsGetQueryParams() {{
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

            TexttospeechProjectsLocationsOperationsGetResponse res = sdk.projects.texttospeechProjectsLocationsOperationsGet(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->