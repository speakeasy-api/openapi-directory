# Projects

### Available Operations

* [WorkloadmanagerProjectsLocationsEvaluationsCreate](#workloadmanagerprojectslocationsevaluationscreate) - Creates a new Evaluation in a given project and location.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsList](#workloadmanagerprojectslocationsevaluationsexecutionslist) - Lists Executions in a given project and location.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsList](#workloadmanagerprojectslocationsevaluationsexecutionsresultslist) - List the running result of a single Execution.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsRun](#workloadmanagerprojectslocationsevaluationsexecutionsrun) - Creates a new Execution in a given project and location.
* [WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList](#workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist) - List all scanned resources for a single Execution.
* [WorkloadmanagerProjectsLocationsEvaluationsList](#workloadmanagerprojectslocationsevaluationslist) - Lists Evaluations in a given project and location.
* [WorkloadmanagerProjectsLocationsInsightsWriteInsight](#workloadmanagerprojectslocationsinsightswriteinsight) - Write the data insights to workload manager data warehouse.
* [WorkloadmanagerProjectsLocationsList](#workloadmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [WorkloadmanagerProjectsLocationsOperationsCancel](#workloadmanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [WorkloadmanagerProjectsLocationsOperationsDelete](#workloadmanagerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [WorkloadmanagerProjectsLocationsOperationsGet](#workloadmanagerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [WorkloadmanagerProjectsLocationsOperationsList](#workloadmanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [WorkloadmanagerProjectsLocationsRulesList](#workloadmanagerprojectslocationsruleslist) - Lists rules in a given project.

## WorkloadmanagerProjectsLocationsEvaluationsCreate

Creates a new Evaluation in a given project and location.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsCreate(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EvaluationInput: &shared.EvaluationInput{
            Description: sdk.String("officia"),
            Labels: map[string]string{
                "fugit": "deleniti",
                "hic": "optio",
                "totam": "beatae",
            },
            Name: sdk.String("Tanya Gleason"),
            ResourceFilter: &shared.ResourceFilter{
                GceInstanceFilter: &shared.GceInstanceFilter{
                    ServiceAccounts: []string{
                        "esse",
                        "ipsum",
                        "excepturi",
                    },
                },
                InclusionLabels: map[string]string{
                    "perferendis": "ad",
                },
                ResourceIDPatterns: []string{
                    "sed",
                    "iste",
                    "dolor",
                },
                Scopes: []string{
                    "laboriosam",
                    "hic",
                    "saepe",
                },
            },
            ResourceStatus: &shared.ResourceStatus{
                RulesNewerVersions: []string{
                    "in",
                    "corporis",
                    "iste",
                },
                State: shared.ResourceStatusStateEnumCreating.ToPointer(),
            },
            RuleNames: []string{
                "quidem",
                "architecto",
                "ipsa",
                "reiciendis",
            },
            Schedule: sdk.String("est"),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        EvaluationID: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        RequestID: sdk.String("nemo"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity{
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

## WorkloadmanagerProjectsLocationsEvaluationsExecutionsList

Lists Executions in a given project and location.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsExecutionsList(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("sapiente"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("dolorem"),
        OrderBy: sdk.String("culpa"),
        PageSize: sdk.Int64(161309),
        PageToken: sdk.String("repellat"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsResponse != nil {
        // handle response
    }
}
```

## WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsList

List the running result of a single Execution.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsList(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Filter: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(656330),
        PageToken: sdk.String("enim"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionResultsResponse != nil {
        // handle response
    }
}
```

## WorkloadmanagerProjectsLocationsEvaluationsExecutionsRun

Creates a new Execution in a given project and location.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsExecutionsRun(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RunEvaluationRequestInput: &shared.RunEvaluationRequestInput{
            Execution: &shared.ExecutionInput{
                Labels: map[string]string{
                    "possimus": "aut",
                    "quasi": "error",
                    "temporibus": "laborum",
                },
                Name: sdk.String("Johanna Wolf"),
                RunType: shared.ExecutionRunTypeEnumOneTime.ToPointer(),
            },
            ExecutionID: sdk.String("voluptatibus"),
            RequestID: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        Name: "Mrs. April Wuckert",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunSecurity{
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

## WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList

List all scanned resources for a single Execution.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        OrderBy: sdk.String("pariatur"),
        PageSize: sdk.Int64(265389),
        PageToken: sdk.String("praesentium"),
        Parent: "rem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        Rule: sdk.String("quasi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScannedResourcesResponse != nil {
        // handle response
    }
}
```

## WorkloadmanagerProjectsLocationsEvaluationsList

Lists Evaluations in a given project and location.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsEvaluationsList(ctx, operations.WorkloadmanagerProjectsLocationsEvaluationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Filter: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("explicabo"),
        OrderBy: sdk.String("deserunt"),
        PageSize: sdk.Int64(716327),
        PageToken: sdk.String("quibusdam"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.WorkloadmanagerProjectsLocationsEvaluationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEvaluationsResponse != nil {
        // handle response
    }
}
```

## WorkloadmanagerProjectsLocationsInsightsWriteInsight

Write the data insights to workload manager data warehouse.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsInsightsWriteInsight(ctx, operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WriteInsightRequestInput: &shared.WriteInsightRequestInput{
            Insight: &shared.InsightInput{
                SapDiscovery: &shared.SapDiscovery{
                    ApplicationLayer: &shared.SapDiscoveryComponent{
                        ApplicationType: sdk.String("quos"),
                        DatabaseType: sdk.String("perferendis"),
                        HostProject: sdk.String("magni"),
                        Resources: []shared.SapDiscoveryResource{
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "alias",
                                    "fugit",
                                },
                                ResourceKind: sdk.String("dolorum"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumRemoved.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumCompute.ToPointer(),
                                ResourceURI: sdk.String("facilis"),
                                UpdateTime: sdk.String("tempore"),
                            },
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "delectus",
                                    "eum",
                                },
                                ResourceKind: sdk.String("non"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumReplaced.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumStorage.ToPointer(),
                                ResourceURI: sdk.String("aliquid"),
                                UpdateTime: sdk.String("provident"),
                            },
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "sint",
                                    "officia",
                                    "dolor",
                                    "debitis",
                                },
                                ResourceKind: sdk.String("a"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumReplaced.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumCompute.ToPointer(),
                                ResourceURI: sdk.String("in"),
                                UpdateTime: sdk.String("illum"),
                            },
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "rerum",
                                    "dicta",
                                    "magnam",
                                    "cumque",
                                },
                                ResourceKind: sdk.String("facere"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumUpdated.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumCompute.ToPointer(),
                                ResourceURI: sdk.String("laborum"),
                                UpdateTime: sdk.String("accusamus"),
                            },
                        },
                        Sid: sdk.String("non"),
                    },
                    DatabaseLayer: &shared.SapDiscoveryComponent{
                        ApplicationType: sdk.String("occaecati"),
                        DatabaseType: sdk.String("enim"),
                        HostProject: sdk.String("accusamus"),
                        Resources: []shared.SapDiscoveryResource{
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "provident",
                                    "nam",
                                    "id",
                                },
                                ResourceKind: sdk.String("blanditiis"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumRemoved.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumNetwork.ToPointer(),
                                ResourceURI: sdk.String("amet"),
                                UpdateTime: sdk.String("deserunt"),
                            },
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "vel",
                                    "natus",
                                },
                                ResourceKind: sdk.String("omnis"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumUpdated.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumResourceTypeUnspecified.ToPointer(),
                                ResourceURI: sdk.String("nihil"),
                                UpdateTime: sdk.String("magnam"),
                            },
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "id",
                                    "labore",
                                    "labore",
                                },
                                ResourceKind: sdk.String("suscipit"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumRemoved.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumStorage.ToPointer(),
                                ResourceURI: sdk.String("eum"),
                                UpdateTime: sdk.String("vero"),
                            },
                            shared.SapDiscoveryResource{
                                RelatedResources: []string{
                                    "architecto",
                                },
                                ResourceKind: sdk.String("magnam"),
                                ResourceState: shared.SapDiscoveryResourceResourceStateEnumResourceStateUnspecified.ToPointer(),
                                ResourceType: shared.SapDiscoveryResourceResourceTypeEnumStorage.ToPointer(),
                                ResourceURI: sdk.String("ullam"),
                                UpdateTime: sdk.String("provident"),
                            },
                        },
                        Sid: sdk.String("quos"),
                    },
                    Metadata: &shared.SapDiscoveryMetadata{
                        CustomerRegion: sdk.String("sint"),
                        DefinedSystem: sdk.String("accusantium"),
                        EnvironmentType: sdk.String("mollitia"),
                        SapProduct: sdk.String("reiciendis"),
                    },
                    SystemID: sdk.String("mollitia"),
                    UpdateTime: sdk.String("ad"),
                },
                SapValidation: &shared.SapValidation{
                    ValidationDetails: []shared.SapValidationValidationDetail{
                        shared.SapValidationValidationDetail{
                            Details: map[string]string{
                                "necessitatibus": "odit",
                            },
                            SapValidationType: shared.SapValidationValidationDetailSapValidationTypeEnumCorosync.ToPointer(),
                        },
                        shared.SapValidationValidationDetail{
                            Details: map[string]string{
                                "iure": "doloribus",
                            },
                            SapValidationType: shared.SapValidationValidationDetailSapValidationTypeEnumNetweaver.ToPointer(),
                        },
                    },
                },
            },
            RequestID: sdk.String("eius"),
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        Location: "architecto",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WriteInsightResponse != nil {
        // handle response
    }
}
```

## WorkloadmanagerProjectsLocationsList

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsList(ctx, operations.WorkloadmanagerProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("pariatur"),
        Filter: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        Name: "Miss Nick Cummerata",
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(807319),
        PageToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ea"),
    }, operations.WorkloadmanagerProjectsLocationsListSecurity{
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

## WorkloadmanagerProjectsLocationsOperationsCancel

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsOperationsCancel(ctx, operations.WorkloadmanagerProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "maiores": "quidem",
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
    }, operations.WorkloadmanagerProjectsLocationsOperationsCancelSecurity{
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

## WorkloadmanagerProjectsLocationsOperationsDelete

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsOperationsDelete(ctx, operations.WorkloadmanagerProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("totam"),
        Key: sdk.String("dignissimos"),
        Name: "Beatrice Dooley Sr.",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("vero"),
    }, operations.WorkloadmanagerProjectsLocationsOperationsDeleteSecurity{
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

## WorkloadmanagerProjectsLocationsOperationsGet

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsOperationsGet(ctx, operations.WorkloadmanagerProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("perspiciatis"),
        Name: "Robyn Cruickshank",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.WorkloadmanagerProjectsLocationsOperationsGetSecurity{
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

## WorkloadmanagerProjectsLocationsOperationsList

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsOperationsList(ctx, operations.WorkloadmanagerProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("deleniti"),
        Key: sdk.String("pariatur"),
        Name: "Loren Renner",
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(398221),
        PageToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("qui"),
    }, operations.WorkloadmanagerProjectsLocationsOperationsListSecurity{
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

## WorkloadmanagerProjectsLocationsRulesList

Lists rules in a given project.

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
    res, err := s.Projects.WorkloadmanagerProjectsLocationsRulesList(ctx, operations.WorkloadmanagerProjectsLocationsRulesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("voluptate"),
        Filter: sdk.String("dignissimos"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("amet"),
        PageSize: sdk.Int64(680545),
        PageToken: sdk.String("numquam"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("iure"),
    }, operations.WorkloadmanagerProjectsLocationsRulesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRulesResponse != nil {
        // handle response
    }
}
```
