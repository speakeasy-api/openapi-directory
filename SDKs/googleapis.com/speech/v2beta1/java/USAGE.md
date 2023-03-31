<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetPathParams;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetQueryParams;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsOperationsGetRequest req = new SpeechProjectsLocationsOperationsGetRequest() {{
                security = new SpeechProjectsLocationsOperationsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SpeechProjectsLocationsOperationsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new SpeechProjectsLocationsOperationsGetQueryParams() {{
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

            SpeechProjectsLocationsOperationsGetResponse res = sdk.projects.speechProjectsLocationsOperationsGet(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->