<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateResponse;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModelInput;
import org.openapis.openapi.models.shared.ModelState;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.TfLiteModelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsModelsCreateRequest req = new FirebasemlProjectsModelsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                modelInput = new ModelInput() {{
                    displayName = "distinctio";
                    name = "Stuart Stiedemann";
                    state = new ModelState() {{
                        published = false;
                        validationError = new Status() {{
                            code = 423655;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("suscipit", "iure");
                                    put("magnam", "debitis");
                                    put("ipsa", "delectus");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("suscipit", "molestiae");
                                    put("minus", "placeat");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("iusto", "excepturi");
                                    put("nisi", "recusandae");
                                    put("temporibus", "ab");
                                }}),
                            }};
                            message = "quis";
                        }};;
                    }};;
                    tags = new String[]{{
                        add("deserunt"),
                    }};
                    tfliteModel = new TfLiteModelInput() {{
                        automlModel = "perferendis";
                        gcsTfliteUri = "ipsam";
                    }};;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            FirebasemlProjectsModelsCreateResponse res = sdk.projects.firebasemlProjectsModelsCreate(req, new FirebasemlProjectsModelsCreateSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->