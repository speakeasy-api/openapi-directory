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
                    parent = "sit";
                }};
                queryParams = new FirebasemlProjectsModelsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new ModelInput() {{
                    displayName = "dicta";
                    name = "debitis";
                    state = new ModelState() {{
                        published = true;
                        validationError = new Status() {{
                            code = 2339563716805116249;
                            details = new java.util.HashMap<String, Object>[]() {{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("et", "voluptate");
                                    put("iste", "vitae");
                                    put("totam", "dolores");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("debitis", "vel");
                                    put("odio", "dolore");
                                    put("id", "aspernatur");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("totam", "commodi");
                                    put("quis", "est");
                                    put("aut", "odit");
                                }}),
                            }};
                            message = "non";
                        }};
                    }};
                    tags = new String[]() {{
                        add("omnis"),
                    }};
                    tfliteModel = new TfLiteModelInput() {{
                        automlModel = "aut";
                        gcsTfliteUri = "illo";
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