<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateSecurity;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreatePathParams;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateQueryParams;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsCreateResponse;
import org.openapis.openapi.models.shared.ModelInput;
import org.openapis.openapi.models.shared.TfLiteModelInput;
import org.openapis.openapi.models.shared.ModelState;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsModelsCreateRequest req = new FirebasemlProjectsModelsCreateRequest() {{
                security = new FirebasemlProjectsModelsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new FirebasemlProjectsModelsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new FirebasemlProjectsModelsCreateQueryParams() {{
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
                request = new ModelInput() {{
                    displayName = "suscipit";
                    name = "iure";
                    state = new ModelState() {{
                        published = false;
                        validationError = new Status() {{
                            code = 297534;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("delectus", "tempora");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("excepturi", "nisi");
                                    put("recusandae", "temporibus");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("quis", "veritatis");
                                }}),
                            }};
                            message = "deserunt";
                        }};
                    }};
                    tags = new String[]{{
                        add("ipsam"),
                    }};
                    tfliteModel = new TfLiteModelInput() {{
                        automlModel = "repellendus";
                        gcsTfliteUri = "sapiente";
                    }};
                }};
            }};            

            FirebasemlProjectsModelsCreateResponse res = sdk.projects.firebasemlProjectsModelsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->