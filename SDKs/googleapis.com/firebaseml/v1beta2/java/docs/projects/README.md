# projects

### Available Operations

* [firebasemlProjectsModelsCreate](#firebasemlprojectsmodelscreate) - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* [firebasemlProjectsModelsDelete](#firebasemlprojectsmodelsdelete) - Deletes a model
* [firebasemlProjectsModelsDownload](#firebasemlprojectsmodelsdownload) - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* [firebasemlProjectsModelsList](#firebasemlprojectsmodelslist) - Lists the models
* [firebasemlProjectsModelsPatch](#firebasemlprojectsmodelspatch) - Updates a model. The longrunning operation will eventually return a Model.
* [firebasemlProjectsOperationsGet](#firebasemlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## firebasemlProjectsModelsCreate

Creates a model in Firebase ML. The longrunning operation will eventually return a Model

### Example Usage

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

            FirebasemlProjectsModelsCreateRequest req = new FirebasemlProjectsModelsCreateRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                modelInput = new ModelInput() {{
                    displayName = "dolorum";
                    name = "Antoinette Nikolaus";
                    state = new ModelState() {{
                        published = false;
                        validationError = new Status() {{
                            code = 537373;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("ipsum", "excepturi");
                                    put("aspernatur", "perferendis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("natus", "sed");
                                    put("iste", "dolor");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                }}),
                            }};
                            message = "iste";
                        }};;
                    }};;
                    tags = new String[]{{
                        add("saepe"),
                        add("quidem"),
                    }};
                    tfliteModel = new TfLiteModelInput() {{
                        automlModel = "architecto";
                        gcsTfliteUri = "ipsa";
                    }};;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "explicabo";
                uploadProtocol = "nobis";
            }};            

            FirebasemlProjectsModelsCreateResponse res = sdk.projects.firebasemlProjectsModelsCreate(req, new FirebasemlProjectsModelsCreateSecurity("enim", "omnis") {{
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

## firebasemlProjectsModelsDelete

Deletes a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsDeleteRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsDeleteResponse;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsModelsDeleteRequest req = new FirebasemlProjectsModelsDeleteRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            FirebasemlProjectsModelsDeleteResponse res = sdk.projects.firebasemlProjectsModelsDelete(req, new FirebasemlProjectsModelsDeleteSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasemlProjectsModelsDownload

Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsDownloadRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsDownloadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsModelsDownloadRequest req = new FirebasemlProjectsModelsDownloadRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            FirebasemlProjectsModelsDownloadResponse res = sdk.projects.firebasemlProjectsModelsDownload(req);

            if (res.downloadModelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasemlProjectsModelsList

Lists the models

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsListRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsListResponse;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsModelsListRequest req = new FirebasemlProjectsModelsListRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                filter = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                pageSize = 662527L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            FirebasemlProjectsModelsListResponse res = sdk.projects.firebasemlProjectsModelsList(req, new FirebasemlProjectsModelsListSecurity("temporibus", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasemlProjectsModelsPatch

Updates a model. The longrunning operation will eventually return a Model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsPatchRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsPatchResponse;
import org.openapis.openapi.models.operations.FirebasemlProjectsModelsPatchSecurity;
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

            FirebasemlProjectsModelsPatchRequest req = new FirebasemlProjectsModelsPatchRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                modelInput = new ModelInput() {{
                    displayName = "voluptatibus";
                    name = "Jessie Langosh V";
                    state = new ModelState() {{
                        published = false;
                        validationError = new Status() {{
                            code = 451159;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("doloremque", "reprehenderit");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("maiores", "dicta");
                                    put("corporis", "dolore");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("dicta", "harum");
                                    put("enim", "accusamus");
                                }}),
                            }};
                            message = "commodi";
                        }};;
                    }};;
                    tags = new String[]{{
                        add("quae"),
                        add("ipsum"),
                        add("quidem"),
                        add("molestias"),
                    }};
                    tfliteModel = new TfLiteModelInput() {{
                        automlModel = "excepturi";
                        gcsTfliteUri = "pariatur";
                    }};;
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                updateMask = "veritatis";
                uploadType = "itaque";
                uploadProtocol = "incidunt";
            }};            

            FirebasemlProjectsModelsPatchResponse res = sdk.projects.firebasemlProjectsModelsPatch(req, new FirebasemlProjectsModelsPatchSecurity("enim", "consequatur") {{
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

## firebasemlProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasemlProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.FirebasemlProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.FirebasemlProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasemlProjectsOperationsGetRequest req = new FirebasemlProjectsOperationsGetRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "aliquid";
                uploadProtocol = "cupiditate";
            }};            

            FirebasemlProjectsOperationsGetResponse res = sdk.projects.firebasemlProjectsOperationsGet(req, new FirebasemlProjectsOperationsGetSecurity("quos", "perferendis") {{
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
