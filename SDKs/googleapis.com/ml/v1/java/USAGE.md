<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MlProjectsExplainSecurity;
import org.openapis.openapi.models.operations.MlProjectsExplainPathParams;
import org.openapis.openapi.models.operations.MlProjectsExplainQueryParams;
import org.openapis.openapi.models.operations.MlProjectsExplainRequest;
import org.openapis.openapi.models.operations.MlProjectsExplainResponse;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplainRequest;
import org.openapis.openapi.models.shared.GoogleApiHttpBody;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsExplainRequest req = new MlProjectsExplainRequest() {{
                security = new MlProjectsExplainSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new MlProjectsExplainPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new MlProjectsExplainQueryParams() {{
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
                request = new GoogleCloudMlV1ExplainRequest() {{
                    httpBody = new GoogleApiHttpBody() {{
                        contentType = "suscipit";
                        data = "iure";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsa", "delectus");
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("excepturi", "nisi");
                                put("recusandae", "temporibus");
                            }}),
                        }};
                    }};
                }};
            }};            

            MlProjectsExplainResponse res = sdk.projects.mlProjectsExplain(req);

            if (res.googleApiHttpBody.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->