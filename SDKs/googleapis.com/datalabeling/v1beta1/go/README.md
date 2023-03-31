# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/datalabeling/v1beta1/go
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

    req := operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "distinctio",
                        DisplayName: "quibusdam",
                        Index: 602763,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "nulla",
                        DisplayName: "corrupti",
                        Index: 847252,
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: "vel",
                        DisplayName: "error",
                        Index: 645894,
                    },
                },
                BlockingResources: []string{
                    "iure",
                    "magnam",
                },
                Description: "debitis",
                DisplayName: "ipsa",
                Name: "delectus",
            },
        },
        AccessToken: "tempora",
        Alt: "media",
        Callback: "molestiae",
        Fields: "minus",
        Key: "placeat",
        OauthToken: "voluptatum",
        Parent: "iusto",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        UploadType: "nisi",
        UploadProtocol: "recusandae",
    }

    ctx := context.Background()
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsCreate(ctx, req, operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1AnnotationSpecSet != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `DatalabelingProjectsAnnotationSpecSetsCreate` - Creates an annotation spec set by providing a set of labels.
* `DatalabelingProjectsAnnotationSpecSetsList` - Lists annotation spec sets for a project. Pagination is supported.
* `DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesList` - Lists examples in an annotated dataset. Pagination is supported.
* `DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate` - Create a FeedbackMessage object.
* `DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList` - List FeedbackMessages with pagination.
* `DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList` - List FeedbackThreads with pagination.
* `DatalabelingProjectsDatasetsAnnotatedDatasetsList` - Lists annotated datasets for a dataset. Pagination is supported.
* `DatalabelingProjectsDatasetsCreate` - Creates dataset. If success return a Dataset resource.
* `DatalabelingProjectsDatasetsDataItemsList` - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* `DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch` - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* `DatalabelingProjectsDatasetsExportData` - Exports data and annotations from dataset.
* `DatalabelingProjectsDatasetsImageLabel` - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* `DatalabelingProjectsDatasetsImportData` - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* `DatalabelingProjectsDatasetsList` - Lists datasets under a project. Pagination is supported.
* `DatalabelingProjectsDatasetsTextLabel` - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* `DatalabelingProjectsDatasetsVideoLabel` - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* `DatalabelingProjectsEvaluationJobsCreate` - Creates an evaluation job.
* `DatalabelingProjectsEvaluationJobsList` - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* `DatalabelingProjectsEvaluationJobsPatch` - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* `DatalabelingProjectsEvaluationJobsPause` - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* `DatalabelingProjectsEvaluationJobsResume` - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* `DatalabelingProjectsEvaluationsSearch` - Searches evaluations within a project.
* `DatalabelingProjectsInstructionsCreate` - Creates an instruction for how data should be labeled.
* `DatalabelingProjectsInstructionsList` - Lists instructions for a project. Pagination is supported.
* `DatalabelingProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatalabelingProjectsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `DatalabelingProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DatalabelingProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
