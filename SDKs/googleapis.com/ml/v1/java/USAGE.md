<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MlProjectsExplainSecurity;
import org.openapis.openapi.models.operations.MlProjectsExplainRequest;
import org.openapis.openapi.models.operations.MlProjectsExplainResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplainRequest;
import org.openapis.openapi.models.shared.GoogleApiHttpBody;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsExplainRequest req = new MlProjectsExplainRequest() {{
                dollarXgafv = "2";
                googleCloudMlV1ExplainRequest = new GoogleCloudMlV1ExplainRequest() {{
                    httpBody = new GoogleApiHttpBody() {{
                        contentType = "provident";
                        data = "distinctio";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("nulla", "corrupti");
                                put("illum", "vel");
                                put("error", "deserunt");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }}),
                        }};
                    }};
                }};
                accessToken = "veritatis";
                alt = "media";
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                name = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }}            

            MlProjectsExplainResponse res = sdk.projects.mlProjectsExplain(req, new MlProjectsExplainSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->