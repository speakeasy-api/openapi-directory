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
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsCreate(ctx, operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest: &shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest{
            AnnotationSpecSet: &shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet{
                AnnotationSpecs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: sdk.String("distinctio"),
                        DisplayName: sdk.String("quibusdam"),
                        Index: sdk.Int(602763),
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: sdk.String("nulla"),
                        DisplayName: sdk.String("corrupti"),
                        Index: sdk.Int(847252),
                    },
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpec{
                        Description: sdk.String("vel"),
                        DisplayName: sdk.String("error"),
                        Index: sdk.Int(645894),
                    },
                },
                BlockingResources: []string{
                    "iure",
                    "magnam",
                },
                Description: sdk.String("debitis"),
                DisplayName: sdk.String("ipsa"),
                Name: sdk.String("Ricky Hoppe"),
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [DatalabelingProjectsAnnotationSpecSetsCreate](docs/projects/README.md#datalabelingprojectsannotationspecsetscreate) - Creates an annotation spec set by providing a set of labels.
* [DatalabelingProjectsAnnotationSpecSetsList](docs/projects/README.md#datalabelingprojectsannotationspecsetslist) - Lists annotation spec sets for a project. Pagination is supported.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsexampleslist) - Lists examples in an annotated dataset. Pagination is supported.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate) - Create a FeedbackMessage object.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist) - List FeedbackMessages with pagination.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist) - List FeedbackThreads with pagination.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsList](docs/projects/README.md#datalabelingprojectsdatasetsannotateddatasetslist) - Lists annotated datasets for a dataset. Pagination is supported.
* [DatalabelingProjectsDatasetsCreate](docs/projects/README.md#datalabelingprojectsdatasetscreate) - Creates dataset. If success return a Dataset resource.
* [DatalabelingProjectsDatasetsDataItemsList](docs/projects/README.md#datalabelingprojectsdatasetsdataitemslist) - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* [DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch](docs/projects/README.md#datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch) - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* [DatalabelingProjectsDatasetsExportData](docs/projects/README.md#datalabelingprojectsdatasetsexportdata) - Exports data and annotations from dataset.
* [DatalabelingProjectsDatasetsImageLabel](docs/projects/README.md#datalabelingprojectsdatasetsimagelabel) - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* [DatalabelingProjectsDatasetsImportData](docs/projects/README.md#datalabelingprojectsdatasetsimportdata) - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* [DatalabelingProjectsDatasetsList](docs/projects/README.md#datalabelingprojectsdatasetslist) - Lists datasets under a project. Pagination is supported.
* [DatalabelingProjectsDatasetsTextLabel](docs/projects/README.md#datalabelingprojectsdatasetstextlabel) - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* [DatalabelingProjectsDatasetsVideoLabel](docs/projects/README.md#datalabelingprojectsdatasetsvideolabel) - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* [DatalabelingProjectsEvaluationJobsCreate](docs/projects/README.md#datalabelingprojectsevaluationjobscreate) - Creates an evaluation job.
* [DatalabelingProjectsEvaluationJobsList](docs/projects/README.md#datalabelingprojectsevaluationjobslist) - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* [DatalabelingProjectsEvaluationJobsPatch](docs/projects/README.md#datalabelingprojectsevaluationjobspatch) - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* [DatalabelingProjectsEvaluationJobsPause](docs/projects/README.md#datalabelingprojectsevaluationjobspause) - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* [DatalabelingProjectsEvaluationJobsResume](docs/projects/README.md#datalabelingprojectsevaluationjobsresume) - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* [DatalabelingProjectsEvaluationsSearch](docs/projects/README.md#datalabelingprojectsevaluationssearch) - Searches evaluations within a project.
* [DatalabelingProjectsInstructionsCreate](docs/projects/README.md#datalabelingprojectsinstructionscreate) - Creates an instruction for how data should be labeled.
* [DatalabelingProjectsInstructionsList](docs/projects/README.md#datalabelingprojectsinstructionslist) - Lists instructions for a project. Pagination is supported.
* [DatalabelingProjectsOperationsCancel](docs/projects/README.md#datalabelingprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatalabelingProjectsOperationsDelete](docs/projects/README.md#datalabelingprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatalabelingProjectsOperationsGet](docs/projects/README.md#datalabelingprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatalabelingProjectsOperationsList](docs/projects/README.md#datalabelingprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
