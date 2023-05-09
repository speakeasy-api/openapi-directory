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
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateRequest;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateResponse;
import org.openapis.openapi.models.operations.AutomlProjectsLocationsDatasetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CorrelationStats;
import org.openapis.openapi.models.shared.Dataset;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.ImageClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TablesDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadata;
import org.openapis.openapi.models.shared.TextClassificationDatasetMetadataClassificationTypeEnum;
import org.openapis.openapi.models.shared.TextSentimentDatasetMetadata;
import org.openapis.openapi.models.shared.TranslationDatasetMetadata;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomlProjectsLocationsDatasetsCreateRequest req = new AutomlProjectsLocationsDatasetsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                dataset = new Dataset() {{
                    createTime = "distinctio";
                    description = "quibusdam";
                    displayName = "unde";
                    etag = "nulla";
                    exampleCount = 544883;
                    imageClassificationDatasetMetadata = new ImageClassificationDatasetMetadata() {{
                        classificationType = ImageClassificationDatasetMetadataClassificationTypeEnum.MULTILABEL;
                    }};;
                    imageObjectDetectionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    name = "Raquel Bednar";
                    tablesDatasetMetadata = new TablesDatasetMetadata() {{
                        mlUseColumnSpecId = "suscipit";
                        primaryTableSpecId = "molestiae";
                        statsUpdateTime = "minus";
                        targetColumnCorrelations = new java.util.HashMap<String, org.openapis.openapi.models.shared.CorrelationStats>() {{
                            put("voluptatum", new CorrelationStats() {{
                                cramersV = 4799.77;
                            }});
                            put("excepturi", new CorrelationStats() {{
                                cramersV = 3927.85;
                            }});
                            put("recusandae", new CorrelationStats() {{
                                cramersV = 8360.79;
                            }});
                            put("ab", new CorrelationStats() {{
                                cramersV = 3373.96;
                            }});
                        }};
                        targetColumnSpecId = "veritatis";
                        weightColumnSpecId = "deserunt";
                    }};;
                    textClassificationDatasetMetadata = new TextClassificationDatasetMetadata() {{
                        classificationType = TextClassificationDatasetMetadataClassificationTypeEnum.CLASSIFICATION_TYPE_UNSPECIFIED;
                    }};;
                    textExtractionDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("repellendus", "sapiente");
                        put("quo", "odit");
                    }};
                    textSentimentDatasetMetadata = new TextSentimentDatasetMetadata() {{
                        sentimentMax = 870013;
                    }};;
                    translationDatasetMetadata = new TranslationDatasetMetadata() {{
                        sourceLanguageCode = "at";
                        targetLanguageCode = "maiores";
                    }};;
                    videoClassificationDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("quod", "quod");
                        put("esse", "totam");
                    }};
                    videoObjectTrackingDatasetMetadata = new java.util.HashMap<String, Object>() {{
                        put("dolorum", "dicta");
                        put("nam", "officia");
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                    }};
                }};;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            AutomlProjectsLocationsDatasetsCreateResponse res = sdk.projects.automlProjectsLocationsDatasetsCreate(req, new AutomlProjectsLocationsDatasetsCreateSecurity("esse", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dataset != null) {
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

* [automlProjectsLocationsDatasetsCreate](docs/projects/README.md#automlprojectslocationsdatasetscreate) - Creates a dataset.
* [automlProjectsLocationsDatasetsExportData](docs/projects/README.md#automlprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsDatasetsImportData](docs/projects/README.md#automlprojectslocationsdatasetsimportdata) - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsDatasetsList](docs/projects/README.md#automlprojectslocationsdatasetslist) - Lists datasets in a project.
* [automlProjectsLocationsDatasetsTableSpecsColumnSpecsList](docs/projects/README.md#automlprojectslocationsdatasetstablespecscolumnspecslist) - Lists column specs in a table spec.
* [automlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch](docs/projects/README.md#automlprojectslocationsdatasetstablespecscolumnspecspatch) - Updates a column spec.
* [automlProjectsLocationsDatasetsTableSpecsList](docs/projects/README.md#automlprojectslocationsdatasetstablespecslist) - Lists table specs in a dataset.
* [automlProjectsLocationsList](docs/projects/README.md#automlprojectslocationslist) - Lists information about the supported locations for this service.
* [automlProjectsLocationsModelsBatchPredict](docs/projects/README.md#automlprojectslocationsmodelsbatchpredict) - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* [automlProjectsLocationsModelsCreate](docs/projects/README.md#automlprojectslocationsmodelscreate) - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* [automlProjectsLocationsModelsDeploy](docs/projects/README.md#automlprojectslocationsmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsExport](docs/projects/README.md#automlprojectslocationsmodelsexport) - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsExportEvaluatedExamples](docs/projects/README.md#automlprojectslocationsmodelsexportevaluatedexamples) - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsModelsGetIamPolicy](docs/projects/README.md#automlprojectslocationsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [automlProjectsLocationsModelsList](docs/projects/README.md#automlprojectslocationsmodelslist) - Lists models.
* [automlProjectsLocationsModelsModelEvaluationsList](docs/projects/README.md#automlprojectslocationsmodelsmodelevaluationslist) - Lists model evaluations.
* [automlProjectsLocationsModelsPredict](docs/projects/README.md#automlprojectslocationsmodelspredict) - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* [automlProjectsLocationsModelsSetIamPolicy](docs/projects/README.md#automlprojectslocationsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [automlProjectsLocationsModelsUndeploy](docs/projects/README.md#automlprojectslocationsmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [automlProjectsLocationsOperationsCancel](docs/projects/README.md#automlprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [automlProjectsLocationsOperationsDelete](docs/projects/README.md#automlprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [automlProjectsLocationsOperationsGet](docs/projects/README.md#automlprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [automlProjectsLocationsOperationsList](docs/projects/README.md#automlprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [automlProjectsLocationsOperationsWait](docs/projects/README.md#automlprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [automlProjectsLocationsTestIamPermissions](docs/projects/README.md#automlprojectslocationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
