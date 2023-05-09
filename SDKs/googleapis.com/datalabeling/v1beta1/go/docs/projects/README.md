# Projects

### Available Operations

* [DatalabelingProjectsAnnotationSpecSetsCreate](#datalabelingprojectsannotationspecsetscreate) - Creates an annotation spec set by providing a set of labels.
* [DatalabelingProjectsAnnotationSpecSetsList](#datalabelingprojectsannotationspecsetslist) - Lists annotation spec sets for a project. Pagination is supported.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesList](#datalabelingprojectsdatasetsannotateddatasetsexampleslist) - Lists examples in an annotated dataset. Pagination is supported.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate) - Create a FeedbackMessage object.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist) - List FeedbackMessages with pagination.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList](#datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist) - List FeedbackThreads with pagination.
* [DatalabelingProjectsDatasetsAnnotatedDatasetsList](#datalabelingprojectsdatasetsannotateddatasetslist) - Lists annotated datasets for a dataset. Pagination is supported.
* [DatalabelingProjectsDatasetsCreate](#datalabelingprojectsdatasetscreate) - Creates dataset. If success return a Dataset resource.
* [DatalabelingProjectsDatasetsDataItemsList](#datalabelingprojectsdatasetsdataitemslist) - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
* [DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch](#datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch) - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
* [DatalabelingProjectsDatasetsExportData](#datalabelingprojectsdatasetsexportdata) - Exports data and annotations from dataset.
* [DatalabelingProjectsDatasetsImageLabel](#datalabelingprojectsdatasetsimagelabel) - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
* [DatalabelingProjectsDatasetsImportData](#datalabelingprojectsdatasetsimportdata) - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
* [DatalabelingProjectsDatasetsList](#datalabelingprojectsdatasetslist) - Lists datasets under a project. Pagination is supported.
* [DatalabelingProjectsDatasetsTextLabel](#datalabelingprojectsdatasetstextlabel) - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
* [DatalabelingProjectsDatasetsVideoLabel](#datalabelingprojectsdatasetsvideolabel) - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
* [DatalabelingProjectsEvaluationJobsCreate](#datalabelingprojectsevaluationjobscreate) - Creates an evaluation job.
* [DatalabelingProjectsEvaluationJobsList](#datalabelingprojectsevaluationjobslist) - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
* [DatalabelingProjectsEvaluationJobsPatch](#datalabelingprojectsevaluationjobspatch) - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
* [DatalabelingProjectsEvaluationJobsPause](#datalabelingprojectsevaluationjobspause) - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
* [DatalabelingProjectsEvaluationJobsResume](#datalabelingprojectsevaluationjobsresume) - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
* [DatalabelingProjectsEvaluationsSearch](#datalabelingprojectsevaluationssearch) - Searches evaluations within a project.
* [DatalabelingProjectsInstructionsCreate](#datalabelingprojectsinstructionscreate) - Creates an instruction for how data should be labeled.
* [DatalabelingProjectsInstructionsList](#datalabelingprojectsinstructionslist) - Lists instructions for a project. Pagination is supported.
* [DatalabelingProjectsOperationsCancel](#datalabelingprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatalabelingProjectsOperationsDelete](#datalabelingprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [DatalabelingProjectsOperationsGet](#datalabelingprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DatalabelingProjectsOperationsList](#datalabelingprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## DatalabelingProjectsAnnotationSpecSetsCreate

Creates an annotation spec set by providing a set of labels.

### Example Usage

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
                        Description: sdk.String("ipsam"),
                        DisplayName: sdk.String("repellendus"),
                        Index: sdk.Int(957156),
                    },
                },
                BlockingResources: []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
                Description: sdk.String("molestiae"),
                DisplayName: sdk.String("quod"),
                Name: sdk.String("Erik Lebsack"),
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("deleniti"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
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

## DatalabelingProjectsAnnotationSpecSetsList

Lists annotation spec sets for a project. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsAnnotationSpecSetsList(ctx, operations.DatalabelingProjectsAnnotationSpecSetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("impedit"),
        Filter: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(568434),
        PageToken: sdk.String("aspernatur"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DatalabelingProjectsAnnotationSpecSetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesList

Lists examples in an annotated dataset. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesList(ctx, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(359508),
        PageToken: sdk.String("iste"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListExamplesResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate

Create a FeedbackMessage object.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate(ctx, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1FeedbackMessage: &shared.GoogleCloudDatalabelingV1beta1FeedbackMessage{
            Body: sdk.String("reiciendis"),
            CreateTime: sdk.String("est"),
            Image: sdk.String("mollitia"),
            Name: sdk.String("Ernest Ebert"),
            OperatorFeedbackMetadata: map[string]interface{}{
                "enim": "omnis",
                "nemo": "minima",
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            RequesterFeedbackMetadata: map[string]interface{}{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("quam"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("velit"),
        Parent: "error",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList

List FeedbackMessages with pagination.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList(ctx, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        PageSize: sdk.Int64(368725),
        PageToken: sdk.String("id"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("error"),
    }, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList

List FeedbackThreads with pagination.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList(ctx, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("nihil"),
        PageSize: sdk.Int64(509624),
        PageToken: sdk.String("voluptatibus"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("cum"),
    }, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsAnnotatedDatasetsList

Lists annotated datasets for a dataset. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsAnnotatedDatasetsList(ctx, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("maiores"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("dolore"),
        PageSize: sdk.Int64(480894),
        PageToken: sdk.String("dicta"),
        Parent: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsCreate

Creates dataset. If success return a Dataset resource.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsCreate(ctx, operations.DatalabelingProjectsDatasetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatalabelingV1beta1CreateDatasetRequest: &shared.GoogleCloudDatalabelingV1beta1CreateDatasetRequest{
            Dataset: &shared.GoogleCloudDatalabelingV1beta1Dataset{
                BlockingResources: []string{
                    "ipsum",
                },
                CreateTime: sdk.String("quidem"),
                DataItemCount: sdk.String("molestias"),
                Description: sdk.String("excepturi"),
                DisplayName: sdk.String("pariatur"),
                InputConfigs: []shared.GoogleCloudDatalabelingV1beta1InputConfig{
                    shared.GoogleCloudDatalabelingV1beta1InputConfig{
                        AnnotationType: shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoShotsClassificationAnnotation.ToPointer(),
                        BigquerySource: &shared.GoogleCloudDatalabelingV1beta1BigQuerySource{
                            InputURI: sdk.String("rem"),
                        },
                        ClassificationMetadata: &shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata{
                            IsMultiLabel: sdk.Bool(false),
                        },
                        DataType: shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumGeneralData.ToPointer(),
                        GcsSource: &shared.GoogleCloudDatalabelingV1beta1GcsSource{
                            InputURI: sdk.String("quasi"),
                            MimeType: sdk.String("repudiandae"),
                        },
                        TextMetadata: &shared.GoogleCloudDatalabelingV1beta1TextMetadata{
                            LanguageCode: sdk.String("sint"),
                        },
                    },
                    shared.GoogleCloudDatalabelingV1beta1InputConfig{
                        AnnotationType: shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumImageClassificationAnnotation.ToPointer(),
                        BigquerySource: &shared.GoogleCloudDatalabelingV1beta1BigQuerySource{
                            InputURI: sdk.String("itaque"),
                        },
                        ClassificationMetadata: &shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata{
                            IsMultiLabel: sdk.Bool(false),
                        },
                        DataType: shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumImage.ToPointer(),
                        GcsSource: &shared.GoogleCloudDatalabelingV1beta1GcsSource{
                            InputURI: sdk.String("enim"),
                            MimeType: sdk.String("consequatur"),
                        },
                        TextMetadata: &shared.GoogleCloudDatalabelingV1beta1TextMetadata{
                            LanguageCode: sdk.String("est"),
                        },
                    },
                },
                LastMigrateTime: sdk.String("quibusdam"),
                Name: sdk.String("Joanna Rau"),
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DatalabelingProjectsDatasetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1Dataset != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsDataItemsList

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsDataItemsList(ctx, operations.DatalabelingProjectsDatasetsDataItemsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Filter: sdk.String("tempore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(433288),
        PageToken: sdk.String("non"),
        Parent: "eligendi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("provident"),
    }, operations.DatalabelingProjectsDatasetsDataItemsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListDataItemsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch

Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch(ctx, operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest: &shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest{
            PageSize: sdk.Int(572252),
            PageToken: sdk.String("officia"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("in"),
        Parent: "illum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsExportData

Exports data and annotations from dataset.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsExportData(ctx, operations.DatalabelingProjectsDatasetsExportDataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1ExportDataRequest: &shared.GoogleCloudDatalabelingV1beta1ExportDataRequest{
            AnnotatedDataset: sdk.String("cumque"),
            Filter: sdk.String("facere"),
            OutputConfig: &shared.GoogleCloudDatalabelingV1beta1OutputConfig{
                GcsDestination: &shared.GoogleCloudDatalabelingV1beta1GcsDestination{
                    MimeType: sdk.String("ea"),
                    OutputURI: sdk.String("aliquid"),
                },
                GcsFolderDestination: &shared.GoogleCloudDatalabelingV1beta1GcsFolderDestination{
                    OutputFolderURI: sdk.String("laborum"),
                },
            },
            UserEmailAddress: sdk.String("accusamus"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("delectus"),
        Name: "Rene Reinger",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DatalabelingProjectsDatasetsExportDataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsImageLabel

Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsImageLabel(ctx, operations.DatalabelingProjectsDatasetsImageLabelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1LabelImageRequest: &shared.GoogleCloudDatalabelingV1beta1LabelImageRequest{
            BasicConfig: &shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig{
                AnnotatedDatasetDescription: sdk.String("vel"),
                AnnotatedDatasetDisplayName: sdk.String("natus"),
                ContributorEmails: []string{
                    "molestiae",
                    "perferendis",
                    "nihil",
                },
                Instruction: sdk.String("magnam"),
                LabelGroup: sdk.String("distinctio"),
                LanguageCode: sdk.String("id"),
                QuestionDuration: sdk.String("labore"),
                ReplicaCount: sdk.Int(290077),
                UserEmailAddress: sdk.String("suscipit"),
            },
            BoundingPolyConfig: &shared.GoogleCloudDatalabelingV1beta1BoundingPolyConfig{
                AnnotationSpecSet: sdk.String("natus"),
                InstructionMessage: sdk.String("nobis"),
            },
            Feature: shared.GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnumOrientedBoundingBox.ToPointer(),
            ImageClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfig{
                AllowMultiLabel: sdk.Bool(false),
                AnnotationSpecSet: sdk.String("vero"),
                AnswerAggregationType: shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumStringAggregationTypeUnspecified.ToPointer(),
            },
            PolylineConfig: &shared.GoogleCloudDatalabelingV1beta1PolylineConfig{
                AnnotationSpecSet: sdk.String("architecto"),
                InstructionMessage: sdk.String("magnam"),
            },
            SegmentationConfig: &shared.GoogleCloudDatalabelingV1beta1SegmentationConfig{
                AnnotationSpecSet: sdk.String("et"),
                InstructionMessage: sdk.String("excepturi"),
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sint"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("mollitia"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
    }, operations.DatalabelingProjectsDatasetsImageLabelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsImportData

Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsImportData(ctx, operations.DatalabelingProjectsDatasetsImportDataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1ImportDataRequest: &shared.GoogleCloudDatalabelingV1beta1ImportDataRequest{
            InputConfig: &shared.GoogleCloudDatalabelingV1beta1InputConfig{
                AnnotationType: shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumTextEntityExtractionAnnotation.ToPointer(),
                BigquerySource: &shared.GoogleCloudDatalabelingV1beta1BigQuerySource{
                    InputURI: sdk.String("odit"),
                },
                ClassificationMetadata: &shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata{
                    IsMultiLabel: sdk.Bool(false),
                },
                DataType: shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumImage.ToPointer(),
                GcsSource: &shared.GoogleCloudDatalabelingV1beta1GcsSource{
                    InputURI: sdk.String("quasi"),
                    MimeType: sdk.String("iure"),
                },
                TextMetadata: &shared.GoogleCloudDatalabelingV1beta1TextMetadata{
                    LanguageCode: sdk.String("doloribus"),
                },
            },
            UserEmailAddress: sdk.String("debitis"),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("in"),
        Name: "Diane VonRueden",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DatalabelingProjectsDatasetsImportDataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsList

Lists datasets under a project. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsList(ctx, operations.DatalabelingProjectsDatasetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Filter: sdk.String("natus"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("sunt"),
        PageSize: sdk.Int64(779051),
        PageToken: sdk.String("illum"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.DatalabelingProjectsDatasetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListDatasetsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsTextLabel

Starts a labeling task for text. The type of text labeling task is configured by feature in the request.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsTextLabel(ctx, operations.DatalabelingProjectsDatasetsTextLabelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1LabelTextRequest: &shared.GoogleCloudDatalabelingV1beta1LabelTextRequest{
            BasicConfig: &shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig{
                AnnotatedDatasetDescription: sdk.String("ea"),
                AnnotatedDatasetDisplayName: sdk.String("accusantium"),
                ContributorEmails: []string{
                    "maiores",
                },
                Instruction: sdk.String("quidem"),
                LabelGroup: sdk.String("ipsam"),
                LanguageCode: sdk.String("voluptate"),
                QuestionDuration: sdk.String("autem"),
                ReplicaCount: sdk.Int(722056),
                UserEmailAddress: sdk.String("eaque"),
            },
            Feature: shared.GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnumTextEntityExtraction.ToPointer(),
            TextClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1TextClassificationConfig{
                AllowMultiLabel: sdk.Bool(false),
                AnnotationSpecSet: sdk.String("nemo"),
                SentimentConfig: &shared.GoogleCloudDatalabelingV1beta1SentimentConfig{
                    EnableLabelSentimentSelection: sdk.Bool(false),
                },
            },
            TextEntityExtractionConfig: &shared.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig{
                AnnotationSpecSet: sdk.String("voluptatibus"),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("aut"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("corporis"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.DatalabelingProjectsDatasetsTextLabelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsDatasetsVideoLabel

Starts a labeling task for video. The type of video labeling task is configured by feature in the request.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsDatasetsVideoLabel(ctx, operations.DatalabelingProjectsDatasetsVideoLabelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1LabelVideoRequest: &shared.GoogleCloudDatalabelingV1beta1LabelVideoRequest{
            BasicConfig: &shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig{
                AnnotatedDatasetDescription: sdk.String("totam"),
                AnnotatedDatasetDisplayName: sdk.String("dignissimos"),
                ContributorEmails: []string{
                    "quis",
                },
                Instruction: sdk.String("nesciunt"),
                LabelGroup: sdk.String("eos"),
                LanguageCode: sdk.String("perferendis"),
                QuestionDuration: sdk.String("dolores"),
                ReplicaCount: sdk.Int(793698),
                UserEmailAddress: sdk.String("quam"),
            },
            EventConfig: &shared.GoogleCloudDatalabelingV1beta1EventConfig{
                AnnotationSpecSets: []string{
                    "vero",
                },
                ClipLength: sdk.Int(345352),
                OverlapLength: sdk.Int(944120),
            },
            Feature: shared.GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnumEvent.ToPointer(),
            ObjectDetectionConfig: &shared.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig{
                AnnotationSpecSet: sdk.String("omnis"),
                ExtractionFrameRate: sdk.Float64(7044.15),
            },
            ObjectTrackingConfig: &shared.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig{
                AnnotationSpecSet: sdk.String("perspiciatis"),
                ClipLength: sdk.Int(31838),
                OverlapLength: sdk.Int(783645),
            },
            VideoClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1VideoClassificationConfig{
                AnnotationSpecSetConfigs: []shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig{
                    shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig{
                        AllowMultiLabel: sdk.Bool(false),
                        AnnotationSpecSet: sdk.String("blanditiis"),
                    },
                },
                ApplyShotDetection: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("asperiores"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.DatalabelingProjectsDatasetsVideoLabelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsEvaluationJobsCreate

Creates an evaluation job.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsEvaluationJobsCreate(ctx, operations.DatalabelingProjectsEvaluationJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest: &shared.GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest{
            Job: &shared.GoogleCloudDatalabelingV1beta1EvaluationJob{
                AnnotationSpecSet: sdk.String("pariatur"),
                Attempts: []shared.GoogleCloudDatalabelingV1beta1Attempt{
                    shared.GoogleCloudDatalabelingV1beta1Attempt{
                        AttemptTime: sdk.String("nobis"),
                        PartialFailures: []shared.GoogleRPCStatus{
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(964490),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "aliquid": "dolorem",
                                        "dolorem": "dolor",
                                        "qui": "ipsum",
                                    },
                                    map[string]interface{}{
                                        "excepturi": "cum",
                                        "voluptate": "dignissimos",
                                        "reiciendis": "amet",
                                        "dolorum": "numquam",
                                    },
                                },
                                Message: sdk.String("veritatis"),
                            },
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(58029),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "odio": "quaerat",
                                        "accusamus": "quidem",
                                    },
                                },
                                Message: sdk.String("voluptatibus"),
                            },
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(377752),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "atque": "sit",
                                    },
                                    map[string]interface{}{
                                        "ab": "soluta",
                                        "dolorum": "iusto",
                                        "voluptate": "dolorum",
                                        "deleniti": "omnis",
                                    },
                                    map[string]interface{}{
                                        "distinctio": "asperiores",
                                        "nihil": "ipsum",
                                        "voluptate": "id",
                                        "saepe": "eius",
                                    },
                                },
                                Message: sdk.String("aspernatur"),
                            },
                        },
                    },
                    shared.GoogleCloudDatalabelingV1beta1Attempt{
                        AttemptTime: sdk.String("perferendis"),
                        PartialFailures: []shared.GoogleRPCStatus{
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(758379),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "saepe": "suscipit",
                                        "deserunt": "provident",
                                    },
                                    map[string]interface{}{
                                        "repellendus": "totam",
                                        "similique": "alias",
                                    },
                                    map[string]interface{}{
                                        "quaerat": "tempora",
                                        "vel": "quod",
                                        "officiis": "qui",
                                        "dolorum": "a",
                                    },
                                    map[string]interface{}{
                                        "harum": "iusto",
                                        "ipsum": "quisquam",
                                    },
                                },
                                Message: sdk.String("tenetur"),
                            },
                        },
                    },
                    shared.GoogleCloudDatalabelingV1beta1Attempt{
                        AttemptTime: sdk.String("amet"),
                        PartialFailures: []shared.GoogleRPCStatus{
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(880298),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "dolorem": "sapiente",
                                        "totam": "nihil",
                                    },
                                    map[string]interface{}{
                                        "expedita": "neque",
                                    },
                                },
                                Message: sdk.String("sed"),
                            },
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(424685),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "deserunt": "quam",
                                        "ipsum": "incidunt",
                                    },
                                    map[string]interface{}{
                                        "cupiditate": "maxime",
                                    },
                                    map[string]interface{}{
                                        "soluta": "dicta",
                                        "laborum": "totam",
                                        "incidunt": "aspernatur",
                                        "dolores": "distinctio",
                                    },
                                },
                                Message: sdk.String("facilis"),
                            },
                            shared.GoogleRPCStatus{
                                Code: sdk.Int(396060),
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "temporibus": "qui",
                                        "neque": "fugit",
                                        "magni": "odio",
                                    },
                                    map[string]interface{}{
                                        "ullam": "nam",
                                    },
                                },
                                Message: sdk.String("hic"),
                            },
                        },
                    },
                },
                CreateTime: sdk.String("voluptatem"),
                Description: sdk.String("cumque"),
                EvaluationJobConfig: &shared.GoogleCloudDatalabelingV1beta1EvaluationJobConfig{
                    BigqueryImportKeys: map[string]string{
                        "nobis": "et",
                        "saepe": "ipsum",
                        "veritatis": "nobis",
                    },
                    BoundingPolyConfig: &shared.GoogleCloudDatalabelingV1beta1BoundingPolyConfig{
                        AnnotationSpecSet: sdk.String("quos"),
                        InstructionMessage: sdk.String("tempore"),
                    },
                    EvaluationConfig: &shared.GoogleCloudDatalabelingV1beta1EvaluationConfig{
                        BoundingBoxEvaluationOptions: &shared.GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions{
                            IouThreshold: sdk.Float32(5844.76),
                        },
                    },
                    EvaluationJobAlertConfig: &shared.GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig{
                        Email: sdk.String("Vidal28@gmail.com"),
                        MinAcceptableMeanAveragePrecision: sdk.Float64(2408.29),
                    },
                    ExampleCount: sdk.Int(677263),
                    ExampleSamplePercentage: sdk.Float64(1002.94),
                    HumanAnnotationConfig: &shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig{
                        AnnotatedDatasetDescription: sdk.String("quae"),
                        AnnotatedDatasetDisplayName: sdk.String("aut"),
                        ContributorEmails: []string{
                            "itaque",
                            "consequatur",
                            "est",
                        },
                        Instruction: sdk.String("repellendus"),
                        LabelGroup: sdk.String("porro"),
                        LanguageCode: sdk.String("doloribus"),
                        QuestionDuration: sdk.String("ut"),
                        ReplicaCount: sdk.Int(703495),
                        UserEmailAddress: sdk.String("cupiditate"),
                    },
                    ImageClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfig{
                        AllowMultiLabel: sdk.Bool(false),
                        AnnotationSpecSet: sdk.String("qui"),
                        AnswerAggregationType: shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumStringAggregationTypeUnspecified.ToPointer(),
                    },
                    InputConfig: &shared.GoogleCloudDatalabelingV1beta1InputConfig{
                        AnnotationType: shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoShotsClassificationAnnotation.ToPointer(),
                        BigquerySource: &shared.GoogleCloudDatalabelingV1beta1BigQuerySource{
                            InputURI: sdk.String("odio"),
                        },
                        ClassificationMetadata: &shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata{
                            IsMultiLabel: sdk.Bool(false),
                        },
                        DataType: shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumVideo.ToPointer(),
                        GcsSource: &shared.GoogleCloudDatalabelingV1beta1GcsSource{
                            InputURI: sdk.String("voluptatibus"),
                            MimeType: sdk.String("quisquam"),
                        },
                        TextMetadata: &shared.GoogleCloudDatalabelingV1beta1TextMetadata{
                            LanguageCode: sdk.String("vero"),
                        },
                    },
                    TextClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1TextClassificationConfig{
                        AllowMultiLabel: sdk.Bool(false),
                        AnnotationSpecSet: sdk.String("omnis"),
                        SentimentConfig: &shared.GoogleCloudDatalabelingV1beta1SentimentConfig{
                            EnableLabelSentimentSelection: sdk.Bool(false),
                        },
                    },
                },
                LabelMissingGroundTruth: sdk.Bool(false),
                ModelVersion: sdk.String("quis"),
                Name: sdk.String("Dixie Klocko"),
                Schedule: sdk.String("tenetur"),
                State: shared.GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumRunning.ToPointer(),
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("odio"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("facilis"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.DatalabelingProjectsEvaluationJobsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1EvaluationJob != nil {
        // handle response
    }
}
```

## DatalabelingProjectsEvaluationJobsList

Lists all evaluation jobs within a project with possible filters. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsEvaluationJobsList(ctx, operations.DatalabelingProjectsEvaluationJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("aut"),
        Filter: sdk.String("voluptatibus"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("nulla"),
        PageSize: sdk.Int64(148141),
        PageToken: sdk.String("porro"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DatalabelingProjectsEvaluationJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsEvaluationJobsPatch

Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsEvaluationJobsPatch(ctx, operations.DatalabelingProjectsEvaluationJobsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1EvaluationJob: &shared.GoogleCloudDatalabelingV1beta1EvaluationJob{
            AnnotationSpecSet: sdk.String("alias"),
            Attempts: []shared.GoogleCloudDatalabelingV1beta1Attempt{
                shared.GoogleCloudDatalabelingV1beta1Attempt{
                    AttemptTime: sdk.String("tempora"),
                    PartialFailures: []shared.GoogleRPCStatus{
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(410492),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "possimus": "magnam",
                                    "ratione": "ex",
                                },
                            },
                            Message: sdk.String("laudantium"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(120657),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "quasi": "ex",
                                    "nulla": "excepturi",
                                    "voluptatibus": "nostrum",
                                    "sapiente": "quisquam",
                                },
                            },
                            Message: sdk.String("saepe"),
                        },
                    },
                },
                shared.GoogleCloudDatalabelingV1beta1Attempt{
                    AttemptTime: sdk.String("ea"),
                    PartialFailures: []shared.GoogleRPCStatus{
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(359271),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "inventore": "magnam",
                                    "ea": "quo",
                                },
                                map[string]interface{}{
                                    "recusandae": "aspernatur",
                                },
                            },
                            Message: sdk.String("minima"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(53427),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "aut": "aut",
                                    "deleniti": "impedit",
                                    "aliquam": "fugit",
                                },
                                map[string]interface{}{
                                    "inventore": "non",
                                    "et": "dolorum",
                                    "laborum": "placeat",
                                    "velit": "eum",
                                },
                                map[string]interface{}{
                                    "nobis": "quas",
                                    "assumenda": "nulla",
                                },
                                map[string]interface{}{
                                    "libero": "quasi",
                                    "tempora": "numquam",
                                },
                            },
                            Message: sdk.String("explicabo"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(591935),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "magnam": "odio",
                                    "eius": "esse",
                                },
                            },
                            Message: sdk.String("esse"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(524593),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "quidem": "fugiat",
                                    "ut": "eum",
                                },
                                map[string]interface{}{
                                    "assumenda": "eos",
                                    "praesentium": "quisquam",
                                },
                                map[string]interface{}{
                                    "ipsa": "id",
                                },
                            },
                            Message: sdk.String("quidem"),
                        },
                    },
                },
                shared.GoogleCloudDatalabelingV1beta1Attempt{
                    AttemptTime: sdk.String("neque"),
                    PartialFailures: []shared.GoogleRPCStatus{
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(847276),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "eius": "eos",
                                    "voluptas": "ab",
                                    "cupiditate": "consequatur",
                                },
                                map[string]interface{}{
                                    "debitis": "ipsam",
                                    "aspernatur": "sequi",
                                },
                                map[string]interface{}{
                                    "esse": "recusandae",
                                    "aperiam": "distinctio",
                                    "quod": "dignissimos",
                                    "inventore": "nihil",
                                },
                                map[string]interface{}{
                                    "accusamus": "aliquam",
                                    "odio": "occaecati",
                                    "commodi": "sapiente",
                                },
                            },
                            Message: sdk.String("dolores"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(645570),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "porro": "eum",
                                },
                                map[string]interface{}{
                                    "praesentium": "consequuntur",
                                    "deleniti": "fugit",
                                    "fuga": "mollitia",
                                },
                            },
                            Message: sdk.String("incidunt"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(539224),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "nisi": "fugit",
                                    "sapiente": "consequuntur",
                                },
                            },
                            Message: sdk.String("ratione"),
                        },
                        shared.GoogleRPCStatus{
                            Code: sdk.Int(129412),
                            Details: []map[string]interface{}{
                                map[string]interface{}{
                                    "atque": "et",
                                    "esse": "eveniet",
                                    "accusamus": "veritatis",
                                },
                                map[string]interface{}{
                                    "quod": "nam",
                                    "vero": "aliquid",
                                },
                                map[string]interface{}{
                                    "saepe": "vel",
                                },
                                map[string]interface{}{
                                    "molestiae": "rerum",
                                    "occaecati": "minima",
                                    "distinctio": "eligendi",
                                },
                            },
                            Message: sdk.String("sit"),
                        },
                    },
                },
            },
            CreateTime: sdk.String("culpa"),
            Description: sdk.String("tempore"),
            EvaluationJobConfig: &shared.GoogleCloudDatalabelingV1beta1EvaluationJobConfig{
                BigqueryImportKeys: map[string]string{
                    "cumque": "consequuntur",
                },
                BoundingPolyConfig: &shared.GoogleCloudDatalabelingV1beta1BoundingPolyConfig{
                    AnnotationSpecSet: sdk.String("consequatur"),
                    InstructionMessage: sdk.String("minus"),
                },
                EvaluationConfig: &shared.GoogleCloudDatalabelingV1beta1EvaluationConfig{
                    BoundingBoxEvaluationOptions: &shared.GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions{
                        IouThreshold: sdk.Float32(3082.86),
                    },
                },
                EvaluationJobAlertConfig: &shared.GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig{
                    Email: sdk.String("Darlene_Koch@hotmail.com"),
                    MinAcceptableMeanAveragePrecision: sdk.Float64(9537.22),
                },
                ExampleCount: sdk.Int(857723),
                ExampleSamplePercentage: sdk.Float64(5578.11),
                HumanAnnotationConfig: &shared.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig{
                    AnnotatedDatasetDescription: sdk.String("esse"),
                    AnnotatedDatasetDisplayName: sdk.String("quasi"),
                    ContributorEmails: []string{
                        "error",
                        "sint",
                        "pariatur",
                        "possimus",
                    },
                    Instruction: sdk.String("quia"),
                    LabelGroup: sdk.String("eveniet"),
                    LanguageCode: sdk.String("asperiores"),
                    QuestionDuration: sdk.String("facere"),
                    ReplicaCount: sdk.Int(85001),
                    UserEmailAddress: sdk.String("consequuntur"),
                },
                ImageClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfig{
                    AllowMultiLabel: sdk.Bool(false),
                    AnnotationSpecSet: sdk.String("quasi"),
                    AnswerAggregationType: shared.GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnumUnanimousVote.ToPointer(),
                },
                InputConfig: &shared.GoogleCloudDatalabelingV1beta1InputConfig{
                    AnnotationType: shared.GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnumVideoObjectTrackingAnnotation.ToPointer(),
                    BigquerySource: &shared.GoogleCloudDatalabelingV1beta1BigQuerySource{
                        InputURI: sdk.String("aliquid"),
                    },
                    ClassificationMetadata: &shared.GoogleCloudDatalabelingV1beta1ClassificationMetadata{
                        IsMultiLabel: sdk.Bool(false),
                    },
                    DataType: shared.GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnumGeneralData.ToPointer(),
                    GcsSource: &shared.GoogleCloudDatalabelingV1beta1GcsSource{
                        InputURI: sdk.String("quae"),
                        MimeType: sdk.String("earum"),
                    },
                    TextMetadata: &shared.GoogleCloudDatalabelingV1beta1TextMetadata{
                        LanguageCode: sdk.String("vel"),
                    },
                },
                TextClassificationConfig: &shared.GoogleCloudDatalabelingV1beta1TextClassificationConfig{
                    AllowMultiLabel: sdk.Bool(false),
                    AnnotationSpecSet: sdk.String("in"),
                    SentimentConfig: &shared.GoogleCloudDatalabelingV1beta1SentimentConfig{
                        EnableLabelSentimentSelection: sdk.Bool(false),
                    },
                },
            },
            LabelMissingGroundTruth: sdk.Bool(false),
            ModelVersion: sdk.String("eius"),
            Name: sdk.String("Mrs. Gilberto Roberts"),
            Schedule: sdk.String("dicta"),
            State: shared.GoogleCloudDatalabelingV1beta1EvaluationJobStateEnumScheduled.ToPointer(),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("aut"),
        Key: sdk.String("voluptatum"),
        Name: "Rosemarie Jacobs",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UpdateMask: sdk.String("omnis"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DatalabelingProjectsEvaluationJobsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1EvaluationJob != nil {
        // handle response
    }
}
```

## DatalabelingProjectsEvaluationJobsPause

Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsEvaluationJobsPause(ctx, operations.DatalabelingProjectsEvaluationJobsPauseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptate": "ipsa",
        },
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("iste"),
        Name: "Ms. Kenneth Ledner",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("non"),
    }, operations.DatalabelingProjectsEvaluationJobsPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DatalabelingProjectsEvaluationJobsResume

Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsEvaluationJobsResume(ctx, operations.DatalabelingProjectsEvaluationJobsResumeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "occaecati": "numquam",
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("aut"),
        Key: sdk.String("dignissimos"),
        Name: "Elisa Mosciski",
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("ea"),
    }, operations.DatalabelingProjectsEvaluationJobsResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DatalabelingProjectsEvaluationsSearch

Searches evaluations within a project.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsEvaluationsSearch(ctx, operations.DatalabelingProjectsEvaluationsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("maxime"),
        Filter: sdk.String("dignissimos"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("asperiores"),
        PageSize: sdk.Int64(368102),
        PageToken: sdk.String("quae"),
        Parent: "quaerat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("labore"),
    }, operations.DatalabelingProjectsEvaluationsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsInstructionsCreate

Creates an instruction for how data should be labeled.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsInstructionsCreate(ctx, operations.DatalabelingProjectsInstructionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatalabelingV1beta1CreateInstructionRequest: &shared.GoogleCloudDatalabelingV1beta1CreateInstructionRequest{
            Instruction: &shared.GoogleCloudDatalabelingV1beta1Instruction{
                BlockingResources: []string{
                    "fuga",
                },
                CreateTime: sdk.String("id"),
                CsvInstruction: &shared.GoogleCloudDatalabelingV1beta1CsvInstruction{
                    GcsFileURI: sdk.String("suscipit"),
                },
                DataType: shared.GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumImage.ToPointer(),
                Description: sdk.String("culpa"),
                DisplayName: sdk.String("est"),
                Name: sdk.String("Felix Stehr"),
                PdfInstruction: &shared.GoogleCloudDatalabelingV1beta1PdfInstruction{
                    GcsFileURI: sdk.String("quos"),
                },
                UpdateTime: sdk.String("vel"),
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("cum"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("in"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.DatalabelingProjectsInstructionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsInstructionsList

Lists instructions for a project. Pagination is supported.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsInstructionsList(ctx, operations.DatalabelingProjectsInstructionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("consectetur"),
        Filter: sdk.String("in"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("earum"),
        PageSize: sdk.Int64(814967),
        PageToken: sdk.String("numquam"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.DatalabelingProjectsInstructionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatalabelingV1beta1ListInstructionsResponse != nil {
        // handle response
    }
}
```

## DatalabelingProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsOperationsCancel(ctx, operations.DatalabelingProjectsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("adipisci"),
        Name: "Wendy Breitenberg",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("harum"),
    }, operations.DatalabelingProjectsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DatalabelingProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsOperationsDelete(ctx, operations.DatalabelingProjectsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("accusamus"),
        Name: "Ricky Cole",
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.DatalabelingProjectsOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DatalabelingProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsOperationsGet(ctx, operations.DatalabelingProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("in"),
        Filter: sdk.String("dolore"),
        Key: sdk.String("aliquam"),
        Name: "Lionel Herman",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DatalabelingProjectsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DatalabelingProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

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
    res, err := s.Projects.DatalabelingProjectsOperationsList(ctx, operations.DatalabelingProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("hic"),
        Filter: sdk.String("exercitationem"),
        Key: sdk.String("nobis"),
        Name: "Luz Cormier",
        OauthToken: sdk.String("asperiores"),
        PageSize: sdk.Int64(707918),
        PageToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("iste"),
    }, operations.DatalabelingProjectsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
