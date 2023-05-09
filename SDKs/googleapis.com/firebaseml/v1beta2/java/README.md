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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firebasemlProjectsModelsCreate](docs/projects/README.md#firebasemlprojectsmodelscreate) - Creates a model in Firebase ML. The longrunning operation will eventually return a Model
* [firebasemlProjectsModelsDelete](docs/projects/README.md#firebasemlprojectsmodelsdelete) - Deletes a model
* [firebasemlProjectsModelsDownload](docs/projects/README.md#firebasemlprojectsmodelsdownload) - Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
* [firebasemlProjectsModelsList](docs/projects/README.md#firebasemlprojectsmodelslist) - Lists the models
* [firebasemlProjectsModelsPatch](docs/projects/README.md#firebasemlprojectsmodelspatch) - Updates a model. The longrunning operation will eventually return a Model.
* [firebasemlProjectsOperationsGet](docs/projects/README.md#firebasemlprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
