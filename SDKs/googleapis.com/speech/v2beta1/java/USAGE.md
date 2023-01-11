<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    name = "eum";
                }};
                queryParams = new SpeechProjectsLocationsOperationsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "aut";
                    alt = "proto";
                    callback = "amet";
                    fields = "ut";
                    key = "ut";
                    oauthToken = "ullam";
                    prettyPrint = false;
                    quotaUser = "aut";
                    uploadType = "quo";
                    uploadProtocol = "animi";
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