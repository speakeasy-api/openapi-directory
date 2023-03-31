# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/automl/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AutomlProjectsLocationsDatasetsCreateRequest{
        DollarXgafv: "2",
        Dataset: &shared.Dataset{
            CreateTime: "provident",
            Description: "distinctio",
            DisplayName: "quibusdam",
            Etag: "unde",
            ExampleCount: 857946,
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: "delectus",
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: "tempora",
                PrimaryTableSpecID: "suscipit",
                StatsUpdateTime: "molestiae",
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "placeat": shared.CorrelationStats{
                        CramersV: 5288.95,
                    },
                    "iusto": shared.CorrelationStats{
                        CramersV: 5680.45,
                    },
                    "nisi": shared.CorrelationStats{
                        CramersV: 9255.97,
                    },
                    "temporibus": shared.CorrelationStats{
                        CramersV: 710.36,
                    },
                },
                TargetColumnSpecID: "quis",
                WeightColumnSpecID: "veritatis",
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: "MULTICLASS",
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "ipsam": "repellendus",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: 957156,
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: "quo",
                TargetLanguageCode: "odit",
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
        },
        AccessToken: "hic",
        Alt: "proto",
        Callback: "totam",
        Fields: "beatae",
        Key: "commodi",
        OauthToken: "molestiae",
        Parent: "modi",
        PrettyPrint: false,
        QuotaUser: "qui",
        UploadType: "impedit",
        UploadProtocol: "cum",
    }

    ctx := context.Background()
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, req, operations.AutomlProjectsLocationsDatasetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `AutomlProjectsLocationsDatasetsCreate` - Creates a dataset.
* `AutomlProjectsLocationsDatasetsExportData` - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsDatasetsImportData` - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsDatasetsList` - Lists datasets in a project.
* `AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsList` - Lists column specs in a table spec.
* `AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch` - Updates a column spec.
* `AutomlProjectsLocationsDatasetsTableSpecsList` - Lists table specs in a dataset.
* `AutomlProjectsLocationsList` - Lists information about the supported locations for this service.
* `AutomlProjectsLocationsModelsBatchPredict` - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* `AutomlProjectsLocationsModelsCreate` - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* `AutomlProjectsLocationsModelsDeploy` - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsModelsExport` - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsModelsExportEvaluatedExamples` - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsModelsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `AutomlProjectsLocationsModelsList` - Lists models.
* `AutomlProjectsLocationsModelsModelEvaluationsList` - Lists model evaluations.
* `AutomlProjectsLocationsModelsPredict` - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* `AutomlProjectsLocationsModelsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `AutomlProjectsLocationsModelsUndeploy` - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* `AutomlProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `AutomlProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `AutomlProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `AutomlProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `AutomlProjectsLocationsOperationsWait` - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* `AutomlProjectsLocationsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
