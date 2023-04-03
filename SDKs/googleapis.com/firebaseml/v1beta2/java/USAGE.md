<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateSecurity;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModelInput;
import org.openapis.openapi.models.shared.TfLiteModelInput;
import org.openapis.openapi.models.shared.ModelState;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsModelsCreateRequest req = new FirebasemlProjectsModelsCreateRequest() {{
                dollarXgafv = "2";
                modelInput = new ModelInput() {{
                    displayName = "provident";
                    name = "distinctio";
                    state = new ModelState() {{
                        published = false;
                        validationError = new Status() {{
                            code = 844266;
                            details = new java.util.HashMap<String, Object>[]{{
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
                            message = "ab";
                        }};
                    }};
                    tags = new String[]{{
                        add("veritatis"),
                        add("deserunt"),
                    }};
                    tfliteModel = new TfLiteModelInput() {{
                        automlModel = "perferendis";
                        gcsTfliteUri = "ipsam";
                    }};
                }};
                accessToken = "repellendus";
                alt = "proto";
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                parent = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }}            

            FirebasemlProjectsModelsCreateResponse res = sdk.projects.firebasemlProjectsModelsCreate(req, new FirebasemlProjectsModelsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->