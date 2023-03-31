# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `firebasemlProjectsModelsCreate` - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* `firebasemlProjectsModelsDelete` - Deletes a model
* `firebasemlProjectsModelsDownload` - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* `firebasemlProjectsModelsList` - Lists the models
* `firebasemlProjectsModelsPatch` - Updates a model. The longrunning operation will eventually return a Model.
* `firebasemlProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
