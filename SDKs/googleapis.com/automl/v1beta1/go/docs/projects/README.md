# Projects

### Available Operations

* [AutomlProjectsLocationsDatasetsCreate](#automlprojectslocationsdatasetscreate) - Creates a dataset.
* [AutomlProjectsLocationsDatasetsExportData](#automlprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsDatasetsImportData](#automlprojectslocationsdatasetsimportdata) - Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsDatasetsList](#automlprojectslocationsdatasetslist) - Lists datasets in a project.
* [AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsList](#automlprojectslocationsdatasetstablespecscolumnspecslist) - Lists column specs in a table spec.
* [AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch](#automlprojectslocationsdatasetstablespecscolumnspecspatch) - Updates a column spec.
* [AutomlProjectsLocationsDatasetsTableSpecsList](#automlprojectslocationsdatasetstablespecslist) - Lists table specs in a dataset.
* [AutomlProjectsLocationsList](#automlprojectslocationslist) - Lists information about the supported locations for this service.
* [AutomlProjectsLocationsModelsBatchPredict](#automlprojectslocationsmodelsbatchpredict) - Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables
* [AutomlProjectsLocationsModelsCreate](#automlprojectslocationsmodelscreate) - Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.
* [AutomlProjectsLocationsModelsDeploy](#automlprojectslocationsmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsModelsExport](#automlprojectslocationsmodelsexport) - Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsModelsExportEvaluatedExamples](#automlprojectslocationsmodelsexportevaluatedexamples) - Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsModelsGetIamPolicy](#automlprojectslocationsmodelsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [AutomlProjectsLocationsModelsList](#automlprojectslocationsmodelslist) - Lists models.
* [AutomlProjectsLocationsModelsModelEvaluationsList](#automlprojectslocationsmodelsmodelevaluationslist) - Lists model evaluations.
* [AutomlProjectsLocationsModelsPredict](#automlprojectslocationsmodelspredict) - Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.
* [AutomlProjectsLocationsModelsSetIamPolicy](#automlprojectslocationsmodelssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [AutomlProjectsLocationsModelsUndeploy](#automlprojectslocationsmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.
* [AutomlProjectsLocationsOperationsCancel](#automlprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [AutomlProjectsLocationsOperationsDelete](#automlprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [AutomlProjectsLocationsOperationsGet](#automlprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AutomlProjectsLocationsOperationsList](#automlprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [AutomlProjectsLocationsOperationsWait](#automlprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [AutomlProjectsLocationsTestIamPermissions](#automlprojectslocationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## AutomlProjectsLocationsDatasetsCreate

Creates a dataset.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsCreate(ctx, operations.AutomlProjectsLocationsDatasetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Dataset: &shared.Dataset{
            CreateTime: sdk.String("laboriosam"),
            Description: sdk.String("hic"),
            DisplayName: sdk.String("saepe"),
            Etag: sdk.String("fuga"),
            ExampleCount: sdk.Int(449950),
            ImageClassificationDatasetMetadata: &shared.ImageClassificationDatasetMetadata{
                ClassificationType: shared.ImageClassificationDatasetMetadataClassificationTypeEnumMulticlass.ToPointer(),
            },
            ImageObjectDetectionDatasetMetadata: map[string]interface{}{
                "iure": "saepe",
                "quidem": "architecto",
                "ipsa": "reiciendis",
            },
            Name: sdk.String("Shaun Osinski"),
            TablesDatasetMetadata: &shared.TablesDatasetMetadata{
                MlUseColumnSpecID: sdk.String("corporis"),
                PrimaryTableSpecID: sdk.String("explicabo"),
                StatsUpdateTime: sdk.String("nobis"),
                TargetColumnCorrelations: map[string]shared.CorrelationStats{
                    "omnis": shared.CorrelationStats{
                        CramersV: sdk.Float64(3637.11),
                    },
                    "minima": shared.CorrelationStats{
                        CramersV: sdk.Float64(5701.97),
                    },
                },
                TargetColumnSpecID: sdk.String("accusantium"),
                WeightColumnSpecID: sdk.String("iure"),
            },
            TextClassificationDatasetMetadata: &shared.TextClassificationDatasetMetadata{
                ClassificationType: shared.TextClassificationDatasetMetadataClassificationTypeEnumMulticlass.ToPointer(),
            },
            TextExtractionDatasetMetadata: map[string]interface{}{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
            TextSentimentDatasetMetadata: &shared.TextSentimentDatasetMetadata{
                SentimentMax: sdk.Int(581850),
            },
            TranslationDatasetMetadata: &shared.TranslationDatasetMetadata{
                SourceLanguageCode: sdk.String("numquam"),
                TargetLanguageCode: sdk.String("commodi"),
            },
            VideoClassificationDatasetMetadata: map[string]interface{}{
                "molestiae": "velit",
                "error": "quia",
            },
            VideoObjectTrackingDatasetMetadata: map[string]interface{}{
                "vitae": "laborum",
                "animi": "enim",
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("id"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("error"),
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

## AutomlProjectsLocationsDatasetsExportData

Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsExportData(ctx, operations.AutomlProjectsLocationsDatasetsExportDataRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExportDataRequest: &shared.ExportDataRequest{
            OutputConfig: &shared.OutputConfig{
                BigqueryDestination: &shared.BigQueryDestination{
                    OutputURI: sdk.String("laborum"),
                },
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("quasi"),
                },
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        Name: "Jose Moen",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ut"),
    }, operations.AutomlProjectsLocationsDatasetsExportDataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsDatasetsImportData

Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsImportData(ctx, operations.AutomlProjectsLocationsDatasetsImportDataRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportDataRequest: &shared.ImportDataRequest{
            InputConfig: &shared.InputConfig{
                BigquerySource: &shared.BigQuerySource{
                    InputURI: sdk.String("dicta"),
                },
                GcsSource: &shared.GcsSource{
                    InputUris: []string{
                        "dolore",
                        "iusto",
                    },
                },
                Params: map[string]string{
                    "harum": "enim",
                },
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        Name: "Virgil Mante",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AutomlProjectsLocationsDatasetsImportDataSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsDatasetsList

Lists datasets in a project.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsList(ctx, operations.AutomlProjectsLocationsDatasetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("incidunt"),
        Filter: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(842342),
        PageToken: sdk.String("explicabo"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
    }, operations.AutomlProjectsLocationsDatasetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsList

Lists column specs in a table spec.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsList(ctx, operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        FieldMask: sdk.String("quos"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("magni"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(4695),
        PageToken: sdk.String("fugit"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListColumnSpecsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch

Updates a column spec.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatch(ctx, operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ColumnSpec: &shared.ColumnSpec{
            DataStats: &shared.DataStats{
                ArrayStats: &shared.ArrayStats{
                    MemberStats: &shared.DataStats{},
                },
                CategoryStats: &shared.CategoryStats{
                    TopCategoryStats: []shared.SingleCategoryStats{
                        shared.SingleCategoryStats{
                            Count: sdk.String("delectus"),
                            Value: sdk.String("eum"),
                        },
                        shared.SingleCategoryStats{
                            Count: sdk.String("non"),
                            Value: sdk.String("eligendi"),
                        },
                    },
                },
                DistinctValueCount: sdk.String("sint"),
                Float64Stats: &shared.Float64Stats{
                    HistogramBuckets: []shared.HistogramBucket{
                        shared.HistogramBucket{
                            Count: sdk.String("provident"),
                            Max: sdk.Float64(8960.39),
                            Min: sdk.Float64(5722.52),
                        },
                        shared.HistogramBucket{
                            Count: sdk.String("officia"),
                            Max: sdk.Float64(2230.81),
                            Min: sdk.Float64(8915.55),
                        },
                    },
                    Mean: sdk.Float64(9527.49),
                    Quantiles: []float64{
                        4471.25,
                        4491.98,
                        8464.09,
                    },
                    StandardDeviation: sdk.Float64(9785.71),
                },
                NullValueCount: sdk.String("rerum"),
                StringStats: &shared.StringStats{
                    TopUnigramStats: []shared.UnigramStats{
                        shared.UnigramStats{
                            Count: sdk.String("magnam"),
                            Value: sdk.String("cumque"),
                        },
                    },
                },
                StructStats: &shared.StructStats{
                    FieldStats: map[string]shared.DataStats{
                        "ea": shared.DataStats{},
                        "aliquid": shared.DataStats{},
                        "laborum": shared.DataStats{},
                        "accusamus": shared.DataStats{},
                    },
                },
                TimestampStats: &shared.TimestampStats{
                    GranularStats: map[string]shared.GranularStats{
                        "occaecati": shared.GranularStats{
                            Buckets: map[string]string{
                                "accusamus": "delectus",
                                "quidem": "provident",
                            },
                        },
                    },
                },
                ValidValueCount: sdk.String("nam"),
            },
            DataType: &shared.DataType{
                ListElementType: &shared.DataType{},
                Nullable: sdk.Bool(false),
                StructType: &shared.StructType{
                    Fields: map[string]shared.DataType{
                        "blanditiis": shared.DataType{},
                        "deleniti": shared.DataType{},
                        "sapiente": shared.DataType{},
                    },
                },
                TimeFormat: sdk.String("amet"),
                TypeCode: shared.DataTypeTypeCodeEnumArray.ToPointer(),
            },
            DisplayName: sdk.String("nisi"),
            Etag: sdk.String("vel"),
            Name: sdk.String("Ms. Arturo Krajcik"),
            TopCorrelatedColumns: []shared.CorrelatedColumn{
                shared.CorrelatedColumn{
                    ColumnSpecID: sdk.String("id"),
                    CorrelationStats: &shared.CorrelationStats{
                        CramersV: sdk.Float64(2879.91),
                    },
                },
                shared.CorrelatedColumn{
                    ColumnSpecID: sdk.String("labore"),
                    CorrelationStats: &shared.CorrelationStats{
                        CramersV: sdk.Float64(3834.62),
                    },
                },
                shared.CorrelatedColumn{
                    ColumnSpecID: sdk.String("natus"),
                    CorrelationStats: &shared.CorrelationStats{
                        CramersV: sdk.Float64(7491.7),
                    },
                },
            },
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        Name: "Miriam Hermann",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UpdateMask: sdk.String("mollitia"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ColumnSpec != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsDatasetsTableSpecsList

Lists table specs in a dataset.

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
    res, err := s.Projects.AutomlProjectsLocationsDatasetsTableSpecsList(ctx, operations.AutomlProjectsLocationsDatasetsTableSpecsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        FieldMask: sdk.String("odit"),
        Fields: sdk.String("nemo"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("doloribus"),
        PageSize: sdk.Int64(891924),
        PageToken: sdk.String("eius"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("in"),
    }, operations.AutomlProjectsLocationsDatasetsTableSpecsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTableSpecsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.AutomlProjectsLocationsList(ctx, operations.AutomlProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Filter: sdk.String("nihil"),
        Key: sdk.String("repellat"),
        Name: "Louis Turner Sr.",
        OauthToken: sdk.String("praesentium"),
        PageSize: sdk.Int64(615560),
        PageToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
    }, operations.AutomlProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsBatchPredict

Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables

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
    res, err := s.Projects.AutomlProjectsLocationsModelsBatchPredict(ctx, operations.AutomlProjectsLocationsModelsBatchPredictRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchPredictRequest: &shared.BatchPredictRequest{
            InputConfig: &shared.BatchPredictInputConfig{
                BigquerySource: &shared.BigQuerySource{
                    InputURI: sdk.String("maxime"),
                },
                GcsSource: &shared.GcsSource{
                    InputUris: []string{
                        "excepturi",
                        "odit",
                    },
                },
            },
            OutputConfig: &shared.BatchPredictOutputConfig{
                BigqueryDestination: &shared.BigQueryDestination{
                    OutputURI: sdk.String("ea"),
                },
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("accusantium"),
                },
            },
            Params: map[string]string{
                "maiores": "quidem",
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("nam"),
        Key: sdk.String("eaque"),
        Name: "Dr. Herman Wolf",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AutomlProjectsLocationsModelsBatchPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsCreate

Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsCreate(ctx, operations.AutomlProjectsLocationsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ModelInput: &shared.ModelInput{
            CreateTime: sdk.String("nobis"),
            DatasetID: sdk.String("dolores"),
            DeploymentState: shared.ModelDeploymentStateEnumDeployed.ToPointer(),
            DisplayName: sdk.String("totam"),
            ImageClassificationModelMetadata: &shared.ImageClassificationModelMetadata{
                BaseModelID: sdk.String("dignissimos"),
                ModelType: sdk.String("eaque"),
                NodeCount: sdk.String("quis"),
                NodeQPS: sdk.Float64(1999.96),
                StopReason: sdk.String("eos"),
                TrainBudget: sdk.String("perferendis"),
                TrainCost: sdk.String("dolores"),
            },
            ImageObjectDetectionModelMetadata: &shared.ImageObjectDetectionModelMetadata{
                ModelType: sdk.String("minus"),
                NodeCount: sdk.String("quam"),
                NodeQPS: sdk.Float64(2239.24),
                StopReason: sdk.String("vero"),
                TrainBudgetMilliNodeHours: sdk.String("nostrum"),
                TrainCostMilliNodeHours: sdk.String("hic"),
            },
            Name: sdk.String("Alejandro Purdy DDS"),
            TablesModelMetadata: &shared.TablesModelMetadata{
                DisableEarlyStopping: sdk.Bool(false),
                InputFeatureColumnSpecs: []shared.ColumnSpec{
                    shared.ColumnSpec{
                        DataStats: &shared.DataStats{
                            ArrayStats: &shared.ArrayStats{
                                MemberStats: &shared.DataStats{},
                            },
                            CategoryStats: &shared.CategoryStats{
                                TopCategoryStats: []shared.SingleCategoryStats{
                                    shared.SingleCategoryStats{
                                        Count: sdk.String("error"),
                                        Value: sdk.String("eaque"),
                                    },
                                    shared.SingleCategoryStats{
                                        Count: sdk.String("occaecati"),
                                        Value: sdk.String("rerum"),
                                    },
                                    shared.SingleCategoryStats{
                                        Count: sdk.String("adipisci"),
                                        Value: sdk.String("asperiores"),
                                    },
                                },
                            },
                            DistinctValueCount: sdk.String("earum"),
                            Float64Stats: &shared.Float64Stats{
                                HistogramBuckets: []shared.HistogramBucket{
                                    shared.HistogramBucket{
                                        Count: sdk.String("iste"),
                                        Max: sdk.Float64(6790.91),
                                        Min: sdk.Float64(5356.33),
                                    },
                                    shared.HistogramBucket{
                                        Count: sdk.String("pariatur"),
                                        Max: sdk.Float64(5899.1),
                                        Min: sdk.Float64(7508.44),
                                    },
                                },
                                Mean: sdk.Float64(7301.22),
                                Quantiles: []float64{
                                    3119.45,
                                    5542.42,
                                    3982.21,
                                    2123.9,
                                },
                                StandardDeviation: sdk.Float64(2098.43),
                            },
                            NullValueCount: sdk.String("dolor"),
                            StringStats: &shared.StringStats{
                                TopUnigramStats: []shared.UnigramStats{
                                    shared.UnigramStats{
                                        Count: sdk.String("ipsum"),
                                        Value: sdk.String("hic"),
                                    },
                                },
                            },
                            StructStats: &shared.StructStats{
                                FieldStats: map[string]shared.DataStats{
                                    "cum": shared.DataStats{},
                                    "voluptate": shared.DataStats{},
                                    "dignissimos": shared.DataStats{},
                                },
                            },
                            TimestampStats: &shared.TimestampStats{
                                GranularStats: map[string]shared.GranularStats{
                                    "amet": shared.GranularStats{
                                        Buckets: map[string]string{
                                            "numquam": "veritatis",
                                            "ipsa": "ipsa",
                                            "iure": "odio",
                                        },
                                    },
                                    "quaerat": shared.GranularStats{
                                        Buckets: map[string]string{
                                            "quidem": "voluptatibus",
                                            "voluptas": "natus",
                                            "eos": "atque",
                                            "sit": "fugiat",
                                        },
                                    },
                                    "ab": shared.GranularStats{
                                        Buckets: map[string]string{
                                            "dolorum": "iusto",
                                            "voluptate": "dolorum",
                                            "deleniti": "omnis",
                                        },
                                    },
                                    "necessitatibus": shared.GranularStats{
                                        Buckets: map[string]string{
                                            "asperiores": "nihil",
                                            "ipsum": "voluptate",
                                            "id": "saepe",
                                        },
                                    },
                                },
                            },
                            ValidValueCount: sdk.String("eius"),
                        },
                        DataType: &shared.DataType{
                            ListElementType: &shared.DataType{},
                            Nullable: sdk.Bool(false),
                            StructType: &shared.StructType{
                                Fields: map[string]shared.DataType{
                                    "perferendis": shared.DataType{},
                                },
                            },
                            TimeFormat: sdk.String("amet"),
                            TypeCode: shared.DataTypeTypeCodeEnumStruct.ToPointer(),
                        },
                        DisplayName: sdk.String("accusamus"),
                        Etag: sdk.String("ad"),
                        Name: sdk.String("Sam Oberbrunner"),
                        TopCorrelatedColumns: []shared.CorrelatedColumn{
                            shared.CorrelatedColumn{
                                ColumnSpecID: sdk.String("totam"),
                                CorrelationStats: &shared.CorrelationStats{
                                    CramersV: sdk.Float64(6289.82),
                                },
                            },
                            shared.CorrelatedColumn{
                                ColumnSpecID: sdk.String("alias"),
                                CorrelationStats: &shared.CorrelationStats{
                                    CramersV: sdk.Float64(8726.51),
                                },
                            },
                            shared.CorrelatedColumn{
                                ColumnSpecID: sdk.String("quaerat"),
                                CorrelationStats: &shared.CorrelationStats{
                                    CramersV: sdk.Float64(2735.42),
                                },
                            },
                            shared.CorrelatedColumn{
                                ColumnSpecID: sdk.String("vel"),
                                CorrelationStats: &shared.CorrelationStats{
                                    CramersV: sdk.Float64(7980.47),
                                },
                            },
                        },
                    },
                },
                OptimizationObjective: sdk.String("officiis"),
                OptimizationObjectivePrecisionValue: sdk.Float32(1856.36),
                OptimizationObjectiveRecallValue: sdk.Float32(6798.8),
                TablesModelColumnInfo: []shared.TablesModelColumnInfo{
                    shared.TablesModelColumnInfo{
                        ColumnDisplayName: sdk.String("esse"),
                        ColumnSpecName: sdk.String("harum"),
                        FeatureImportance: sdk.Float32(4834.09),
                    },
                    shared.TablesModelColumnInfo{
                        ColumnDisplayName: sdk.String("ipsum"),
                        ColumnSpecName: sdk.String("quisquam"),
                        FeatureImportance: sdk.Float32(9473.71),
                    },
                    shared.TablesModelColumnInfo{
                        ColumnDisplayName: sdk.String("amet"),
                        ColumnSpecName: sdk.String("tempore"),
                        FeatureImportance: sdk.Float32(8802.98),
                    },
                    shared.TablesModelColumnInfo{
                        ColumnDisplayName: sdk.String("numquam"),
                        ColumnSpecName: sdk.String("enim"),
                        FeatureImportance: sdk.Float32(2133.12),
                    },
                },
                TargetColumnSpec: &shared.ColumnSpec{
                    DataStats: &shared.DataStats{
                        ArrayStats: &shared.ArrayStats{
                            MemberStats: &shared.DataStats{},
                        },
                        CategoryStats: &shared.CategoryStats{
                            TopCategoryStats: []shared.SingleCategoryStats{
                                shared.SingleCategoryStats{
                                    Count: sdk.String("totam"),
                                    Value: sdk.String("nihil"),
                                },
                                shared.SingleCategoryStats{
                                    Count: sdk.String("sit"),
                                    Value: sdk.String("expedita"),
                                },
                                shared.SingleCategoryStats{
                                    Count: sdk.String("neque"),
                                    Value: sdk.String("sed"),
                                },
                                shared.SingleCategoryStats{
                                    Count: sdk.String("vel"),
                                    Value: sdk.String("libero"),
                                },
                            },
                        },
                        DistinctValueCount: sdk.String("voluptas"),
                        Float64Stats: &shared.Float64Stats{
                            HistogramBuckets: []shared.HistogramBucket{
                                shared.HistogramBucket{
                                    Count: sdk.String("quam"),
                                    Max: sdk.Float64(2148.8),
                                    Min: sdk.Float64(2776.28),
                                },
                                shared.HistogramBucket{
                                    Count: sdk.String("qui"),
                                    Max: sdk.Float64(5867.84),
                                    Min: sdk.Float64(8075.81),
                                },
                                shared.HistogramBucket{
                                    Count: sdk.String("pariatur"),
                                    Max: sdk.Float64(7470.8),
                                    Min: sdk.Float64(1175.31),
                                },
                            },
                            Mean: sdk.Float64(6748.48),
                            Quantiles: []float64{
                                2768.94,
                                1320.68,
                                1749.09,
                            },
                            StandardDeviation: sdk.Float64(7168.6),
                        },
                        NullValueCount: sdk.String("facilis"),
                        StringStats: &shared.StringStats{
                            TopUnigramStats: []shared.UnigramStats{
                                shared.UnigramStats{
                                    Count: sdk.String("quam"),
                                    Value: sdk.String("molestias"),
                                },
                                shared.UnigramStats{
                                    Count: sdk.String("temporibus"),
                                    Value: sdk.String("qui"),
                                },
                            },
                        },
                        StructStats: &shared.StructStats{
                            FieldStats: map[string]shared.DataStats{
                                "fugit": shared.DataStats{},
                            },
                        },
                        TimestampStats: &shared.TimestampStats{
                            GranularStats: map[string]shared.GranularStats{
                                "odio": shared.GranularStats{
                                    Buckets: map[string]string{
                                        "ullam": "nam",
                                    },
                                },
                            },
                        },
                        ValidValueCount: sdk.String("hic"),
                    },
                    DataType: &shared.DataType{
                        ListElementType: &shared.DataType{},
                        Nullable: sdk.Bool(false),
                        StructType: &shared.StructType{
                            Fields: map[string]shared.DataType{
                                "cumque": shared.DataType{},
                            },
                        },
                        TimeFormat: sdk.String("soluta"),
                        TypeCode: shared.DataTypeTypeCodeEnumStruct.ToPointer(),
                    },
                    DisplayName: sdk.String("et"),
                    Etag: sdk.String("saepe"),
                    Name: sdk.String("Carolyn Rohan"),
                    TopCorrelatedColumns: []shared.CorrelatedColumn{
                        shared.CorrelatedColumn{
                            ColumnSpecID: sdk.String("aperiam"),
                            CorrelationStats: &shared.CorrelationStats{
                                CramersV: sdk.Float64(9619.37),
                            },
                        },
                        shared.CorrelatedColumn{
                            ColumnSpecID: sdk.String("dolorem"),
                            CorrelationStats: &shared.CorrelationStats{
                                CramersV: sdk.Float64(2921.47),
                            },
                        },
                        shared.CorrelatedColumn{
                            ColumnSpecID: sdk.String("labore"),
                            CorrelationStats: &shared.CorrelationStats{
                                CramersV: sdk.Float64(2408.29),
                            },
                        },
                    },
                },
                TrainBudgetMilliNodeHours: sdk.String("dolorum"),
                TrainCostMilliNodeHours: sdk.String("architecto"),
            },
            TextClassificationModelMetadata: &shared.TextClassificationModelMetadata{
                ClassificationType: shared.TextClassificationModelMetadataClassificationTypeEnumClassificationTypeUnspecified.ToPointer(),
            },
            TextExtractionModelMetadata: &shared.TextExtractionModelMetadata{
                ModelHint: sdk.String("aut"),
            },
            TextSentimentModelMetadata: map[string]interface{}{
                "itaque": "consequatur",
                "est": "repellendus",
                "porro": "doloribus",
            },
            TranslationModelMetadata: &shared.TranslationModelMetadata{
                BaseModel: sdk.String("ut"),
                SourceLanguageCode: sdk.String("facilis"),
                TargetLanguageCode: sdk.String("cupiditate"),
            },
            UpdateTime: sdk.String("qui"),
            VideoClassificationModelMetadata: map[string]interface{}{
                "laudantium": "odio",
            },
            VideoObjectTrackingModelMetadata: map[string]interface{}{
                "voluptatibus": "quisquam",
                "vero": "omnis",
                "quis": "ipsum",
            },
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("vero"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("dignissimos"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("odio"),
    }, operations.AutomlProjectsLocationsModelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsDeploy

Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsDeploy(ctx, operations.AutomlProjectsLocationsModelsDeployRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DeployModelRequest: &shared.DeployModelRequest{
            ImageClassificationModelDeploymentMetadata: &shared.ImageClassificationModelDeploymentMetadata{
                NodeCount: sdk.String("facilis"),
            },
            ImageObjectDetectionModelDeploymentMetadata: &shared.ImageObjectDetectionModelDeploymentMetadata{
                NodeCount: sdk.String("vero"),
            },
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("illum"),
        Key: sdk.String("sequi"),
        Name: "Edmund Ankunding",
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.AutomlProjectsLocationsModelsDeploySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsExport

Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsExport(ctx, operations.AutomlProjectsLocationsModelsExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExportModelRequest: &shared.ExportModelRequest{
            OutputConfig: &shared.ModelExportOutputConfig{
                GcrDestination: &shared.GcrDestination{
                    OutputURI: sdk.String("iusto"),
                },
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("eligendi"),
                },
                ModelFormat: sdk.String("ducimus"),
                Params: map[string]string{
                    "officia": "tempora",
                },
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("vel"),
        Key: sdk.String("possimus"),
        Name: "Paula Jacobs I",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.AutomlProjectsLocationsModelsExportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsExportEvaluatedExamples

Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsExportEvaluatedExamples(ctx, operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExportEvaluatedExamplesRequest: &shared.ExportEvaluatedExamplesRequest{
            OutputConfig: &shared.ExportEvaluatedExamplesOutputConfig{
                BigqueryDestination: &shared.BigQueryDestination{
                    OutputURI: sdk.String("voluptatibus"),
                },
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("ea"),
        Name: "Lewis Hartmann II",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.AutomlProjectsLocationsModelsExportEvaluatedExamplesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsGetIamPolicy(ctx, operations.AutomlProjectsLocationsModelsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("libero"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("aut"),
        OptionsRequestedPolicyVersion: sdk.Int64(533466),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        Resource: "aliquam",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.AutomlProjectsLocationsModelsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsList

Lists models.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsList(ctx, operations.AutomlProjectsLocationsModelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("laborum"),
        Filter: sdk.String("placeat"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("eum"),
        PageSize: sdk.Int64(420539),
        PageToken: sdk.String("nobis"),
        Parent: "quas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.AutomlProjectsLocationsModelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsModelEvaluationsList

Lists model evaluations.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsModelEvaluationsList(ctx, operations.AutomlProjectsLocationsModelsModelEvaluationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("explicabo"),
        Filter: sdk.String("provident"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(301598),
        PageToken: sdk.String("odio"),
        Parent: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("rem"),
    }, operations.AutomlProjectsLocationsModelsModelEvaluationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelEvaluationsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsPredict

Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsPredict(ctx, operations.AutomlProjectsLocationsModelsPredictRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PredictRequest: &shared.PredictRequest{
            Params: map[string]string{
                "quidem": "fugiat",
                "ut": "eum",
            },
            Payload: &shared.ExamplePayload{
                Document: &shared.Document{
                    DocumentDimensions: &shared.DocumentDimensions{
                        Height: sdk.Float32(3799.27),
                        Unit: shared.DocumentDimensionsUnitEnumPoint.ToPointer(),
                        Width: sdk.Float32(1811.51),
                    },
                    DocumentText: &shared.TextSnippet{
                        Content: sdk.String("praesentium"),
                        ContentURI: sdk.String("quisquam"),
                        MimeType: sdk.String("veritatis"),
                    },
                    InputConfig: &shared.DocumentInputConfig{
                        GcsSource: &shared.GcsSource{
                            InputUris: []string{
                                "id",
                            },
                        },
                    },
                    Layout: []shared.Layout{
                        shared.Layout{
                            BoundingPoly: &shared.BoundingPoly{
                                NormalizedVertices: []shared.NormalizedVertex{
                                    shared.NormalizedVertex{
                                        X: sdk.Float32(7786.96),
                                        Y: sdk.Float32(8472.76),
                                    },
                                },
                            },
                            PageNumber: sdk.Int(777408),
                            TextSegment: &shared.TextSegment{
                                Content: sdk.String("fuga"),
                                EndOffset: sdk.String("eius"),
                                StartOffset: sdk.String("eos"),
                            },
                            TextSegmentType: shared.LayoutTextSegmentTypeEnumFormField.ToPointer(),
                        },
                        shared.Layout{
                            BoundingPoly: &shared.BoundingPoly{
                                NormalizedVertices: []shared.NormalizedVertex{
                                    shared.NormalizedVertex{
                                        X: sdk.Float32(5876),
                                        Y: sdk.Float32(96.88),
                                    },
                                },
                            },
                            PageNumber: sdk.Int(272822),
                            TextSegment: &shared.TextSegment{
                                Content: sdk.String("debitis"),
                                EndOffset: sdk.String("ipsam"),
                                StartOffset: sdk.String("aspernatur"),
                            },
                            TextSegmentType: shared.LayoutTextSegmentTypeEnumToken.ToPointer(),
                        },
                        shared.Layout{
                            BoundingPoly: &shared.BoundingPoly{
                                NormalizedVertices: []shared.NormalizedVertex{
                                    shared.NormalizedVertex{
                                        X: sdk.Float32(4598.56),
                                        Y: sdk.Float32(9251.64),
                                    },
                                    shared.NormalizedVertex{
                                        X: sdk.Float32(446.12),
                                        Y: sdk.Float32(7151.79),
                                    },
                                    shared.NormalizedVertex{
                                        X: sdk.Float32(7997.96),
                                        Y: sdk.Float32(4908.19),
                                    },
                                    shared.NormalizedVertex{
                                        X: sdk.Float32(769.56),
                                        Y: sdk.Float32(4694.98),
                                    },
                                },
                            },
                            PageNumber: sdk.Int(518835),
                            TextSegment: &shared.TextSegment{
                                Content: sdk.String("accusamus"),
                                EndOffset: sdk.String("aliquam"),
                                StartOffset: sdk.String("odio"),
                            },
                            TextSegmentType: shared.LayoutTextSegmentTypeEnumFormFieldContents.ToPointer(),
                        },
                    },
                    PageCount: sdk.Int(414567),
                },
                Image: &shared.Image{
                    ImageBytes: sdk.String("sapiente"),
                    InputConfig: &shared.InputConfig{
                        BigquerySource: &shared.BigQuerySource{
                            InputURI: sdk.String("dolores"),
                        },
                        GcsSource: &shared.GcsSource{
                            InputUris: []string{
                                "molestiae",
                                "accusantium",
                                "porro",
                            },
                        },
                        Params: map[string]string{
                            "quas": "praesentium",
                            "consequuntur": "deleniti",
                        },
                    },
                    ThumbnailURI: sdk.String("fugit"),
                },
                Row: &shared.Row{
                    ColumnSpecIds: []string{
                        "mollitia",
                        "incidunt",
                        "atque",
                    },
                    Values: []interface{}{
                        "minima",
                    },
                },
                TextSnippet: &shared.TextSnippet{
                    Content: sdk.String("nisi"),
                    ContentURI: sdk.String("fugit"),
                    MimeType: sdk.String("sapiente"),
                },
            },
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("occaecati"),
        Name: "Carl Koch",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AutomlProjectsLocationsModelsPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsSetIamPolicy(ctx, operations.AutomlProjectsLocationsModelsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quasi"),
                            Expression: sdk.String("saepe"),
                            Location: sdk.String("vel"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "rerum",
                            "occaecati",
                        },
                        Role: sdk.String("minima"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("distinctio"),
                            Expression: sdk.String("eligendi"),
                            Location: sdk.String("sit"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "adipisci",
                            "cumque",
                            "consequuntur",
                        },
                        Role: sdk.String("consequatur"),
                    },
                },
                Etag: sdk.String("minus"),
                Version: sdk.Int(308286),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        Resource: "quas",
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.AutomlProjectsLocationsModelsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsModelsUndeploy

Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

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
    res, err := s.Projects.AutomlProjectsLocationsModelsUndeploy(ctx, operations.AutomlProjectsLocationsModelsUndeployRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "sint": "pariatur",
            "possimus": "quia",
            "eveniet": "asperiores",
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("similique"),
        Name: "Dr. Gene Wiegand",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("illum"),
    }, operations.AutomlProjectsLocationsModelsUndeploySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsOperationsCancel

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
    res, err := s.Projects.AutomlProjectsLocationsOperationsCancel(ctx, operations.AutomlProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "aliquam": "sapiente",
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("nisi"),
        Name: "Nora Denesik",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.AutomlProjectsLocationsOperationsCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsOperationsDelete

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
    res, err := s.Projects.AutomlProjectsLocationsOperationsDelete(ctx, operations.AutomlProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("et"),
        Key: sdk.String("voluptate"),
        Name: "Joann Bogan",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("rem"),
    }, operations.AutomlProjectsLocationsOperationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsOperationsGet

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
    res, err := s.Projects.AutomlProjectsLocationsOperationsGet(ctx, operations.AutomlProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        FieldMask: sdk.String("ab"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("non"),
        Name: "Carmen McClure",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.AutomlProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsOperationsList

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
    res, err := s.Projects.AutomlProjectsLocationsOperationsList(ctx, operations.AutomlProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("voluptas"),
        Key: sdk.String("asperiores"),
        Name: "Eileen Hagenes",
        OauthToken: sdk.String("officia"),
        PageSize: sdk.Int64(807023),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.AutomlProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

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
    res, err := s.Projects.AutomlProjectsLocationsOperationsWait(ctx, operations.AutomlProjectsLocationsOperationsWaitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WaitOperationRequest: &shared.WaitOperationRequest{
            Timeout: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("ab"),
        Key: sdk.String("adipisci"),
        Name: "Orlando Homenick",
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.AutomlProjectsLocationsOperationsWaitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AutomlProjectsLocationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.AutomlProjectsLocationsTestIamPermissions(ctx, operations.AutomlProjectsLocationsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quos",
                "vel",
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("cum"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        Resource: "reiciendis",
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.AutomlProjectsLocationsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```
