<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MlProjectsExplainRequest;
import org.openapis.openapi.models.operations.MlProjectsExplainResponse;
import org.openapis.openapi.models.operations.MlProjectsExplainSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleApiHttpBody;
import org.openapis.openapi.models.shared.GoogleCloudMlV1ExplainRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MlProjectsExplainRequest req = new MlProjectsExplainRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudMlV1ExplainRequest = new GoogleCloudMlV1ExplainRequest() {{
                    httpBody = new GoogleApiHttpBody() {{
                        contentType = "distinctio";
                        data = "quibusdam";
                        extensions = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("corrupti", "illum");
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                            }}),
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
                    }};;
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            MlProjectsExplainResponse res = sdk.projects.mlProjectsExplain(req, new MlProjectsExplainSecurity("odit", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->