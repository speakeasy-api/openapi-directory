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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, operations.AutomlProjectsLocationsDatasetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Dataset: &shared.Dataset{
            CreateTime: sdk.String("provident"),
            Description: sdk.String("distinctio"),
            DisplayName: sdk.String("quibusdam"),
            Etag: sdk.String("unde"),
            ExampleCount: sdk.Int(857946),
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: shared.ImageClassificationDatasetMetadataClassificationTypeEnumMulticlass.ToPointer(),
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Name: sdk.String("Ricky Hoppe"),
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: sdk.String("placeat"),
                PrimaryTableSpecID: sdk.String("voluptatum"),
                StatsUpdateTime: sdk.String("iusto"),
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "nisi": shared.CorrelationStats{
                        CramersV: sdk.Float64(9255.97),
                    },
                    "temporibus": shared.CorrelationStats{
                        CramersV: sdk.Float64(710.36),
                    },
                    "quis": shared.CorrelationStats{
                        CramersV: sdk.Float64(871.29),
                    },
                },
                TargetColumnSpecID: sdk.String("deserunt"),
                WeightColumnSpecID: sdk.String("perferendis"),
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: shared.TextClassificationDatasetMetadataClassificationTypeEnumMulticlass.ToPointer(),
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: sdk.Int(800911),
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: sdk.String("esse"),
                TargetLanguageCode: sdk.String("totam"),
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "dolorum": "dicta",
                "nam": "officia",
                "occaecati": "fugit",
                "deleniti": "hic",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.AutomlProjectsLocationsDatasetsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [AutomlProjectsLocationsDatasetsCreate](docs/projects/README.md#automlprojectslocationsdatasetscreate) - Creates a dataset.
* [AutomlProjectsLocationsDatasetsExportData](docs/projects/README.md#automlprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsDatasetsImportData](docs/projects/README.md#automlprojectslocationsdatasetsimportdata) - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsDatasetsList](docs/projects/README.md#automlprojectslocationsdatasetslist) - Lists datasets in a project.
* [AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsList](docs/projects/README.md#automlprojectslocationsdatasetstablespecscolumnspecslist) - Lists column specs in a table spec.
* [AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch](docs/projects/README.md#automlprojectslocationsdatasetstablespecscolumnspecspatch) - Updates a column spec.
* [AutomlProjectsLocationsDatasetsTableSpecsList](docs/projects/README.md#automlprojectslocationsdatasetstablespecslist) - Lists table specs in a dataset.
* [AutomlProjectsLocationsList](docs/projects/README.md#automlprojectslocationslist) - Lists information about the supported locations for this service.
* [AutomlProjectsLocationsModelsBatchPredict](docs/projects/README.md#automlprojectslocationsmodelsbatchpredict) - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* [AutomlProjectsLocationsModelsCreate](docs/projects/README.md#automlprojectslocationsmodelscreate) - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* [AutomlProjectsLocationsModelsDeploy](docs/projects/README.md#automlprojectslocationsmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsModelsExport](docs/projects/README.md#automlprojectslocationsmodelsexport) - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsModelsExportEvaluatedExamples](docs/projects/README.md#automlprojectslocationsmodelsexportevaluatedexamples) - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsModelsGetIamPolicy](docs/projects/README.md#automlprojectslocationsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [AutomlProjectsLocationsModelsList](docs/projects/README.md#automlprojectslocationsmodelslist) - Lists models.
* [AutomlProjectsLocationsModelsModelEvaluationsList](docs/projects/README.md#automlprojectslocationsmodelsmodelevaluationslist) - Lists model evaluations.
* [AutomlProjectsLocationsModelsPredict](docs/projects/README.md#automlprojectslocationsmodelspredict) - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* [AutomlProjectsLocationsModelsSetIamPolicy](docs/projects/README.md#automlprojectslocationsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [AutomlProjectsLocationsModelsUndeploy](docs/projects/README.md#automlprojectslocationsmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsOperationsCancel](docs/projects/README.md#automlprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [AutomlProjectsLocationsOperationsDelete](docs/projects/README.md#automlprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [AutomlProjectsLocationsOperationsGet](docs/projects/README.md#automlprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AutomlProjectsLocationsOperationsList](docs/projects/README.md#automlprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [AutomlProjectsLocationsOperationsWait](docs/projects/README.md#automlprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [AutomlProjectsLocationsTestIamPermissions](docs/projects/README.md#automlprojectslocationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
