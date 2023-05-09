# Projects

### Available Operations

* [DatalineageProjectsLocationsBatchSearchLinkProcesses](#datalineageprojectslocationsbatchsearchlinkprocesses) - Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
* [DatalineageProjectsLocationsOperationsCancel](#datalineageprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DatalineageProjectsLocationsOperationsList](#datalineageprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [DatalineageProjectsLocationsProcessesCreate](#datalineageprojectslocationsprocessescreate) - Creates a new process.
* [DatalineageProjectsLocationsProcessesList](#datalineageprojectslocationsprocesseslist) - List processes in the given project and location. List order is descending by insertion time.
* [DatalineageProjectsLocationsProcessesRunsCreate](#datalineageprojectslocationsprocessesrunscreate) - Creates a new run.
* [DatalineageProjectsLocationsProcessesRunsLineageEventsCreate](#datalineageprojectslocationsprocessesrunslineageeventscreate) - Creates a new lineage event.
* [DatalineageProjectsLocationsProcessesRunsLineageEventsDelete](#datalineageprojectslocationsprocessesrunslineageeventsdelete) - Deletes the lineage event with the specified name.
* [DatalineageProjectsLocationsProcessesRunsLineageEventsGet](#datalineageprojectslocationsprocessesrunslineageeventsget) - Gets details of a specified lineage event.
* [DatalineageProjectsLocationsProcessesRunsLineageEventsList](#datalineageprojectslocationsprocessesrunslineageeventslist) - Lists lineage events in the given project and location. The list order is not defined.
* [DatalineageProjectsLocationsProcessesRunsList](#datalineageprojectslocationsprocessesrunslist) - Lists runs in the given project and location. List order is descending by `start_time`.
* [DatalineageProjectsLocationsProcessesRunsPatch](#datalineageprojectslocationsprocessesrunspatch) - Updates a run.
* [DatalineageProjectsLocationsSearchLinks](#datalineageprojectslocationssearchlinks) - Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

## DatalineageProjectsLocationsBatchSearchLinkProcesses

Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

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
    res, err := s.Projects.DatalineageProjectsLocationsBatchSearchLinkProcesses(ctx, operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest: &shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest{
            Links: []string{
                "molestiae",
                "minus",
            },
            PageSize: sdk.Int(812169),
            PageToken: sdk.String("voluptatum"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsOperationsCancel

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
    res, err := s.Projects.DatalineageProjectsLocationsOperationsCancel(ctx, operations.DatalineageProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "sapiente": "quo",
            "odit": "at",
            "at": "maiores",
            "molestiae": "quod",
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        Name: "Antoinette Nikolaus",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    }, operations.DatalineageProjectsLocationsOperationsCancelSecurity{
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

## DatalineageProjectsLocationsOperationsList

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
    res, err := s.Projects.DatalineageProjectsLocationsOperationsList(ctx, operations.DatalineageProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("cum"),
        Name: "Edna Mante II",
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.DatalineageProjectsLocationsOperationsListSecurity{
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

## DatalineageProjectsLocationsProcessesCreate

Creates a new process.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesCreate(ctx, operations.DatalineageProjectsLocationsProcessesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogLineageV1Process: &shared.GoogleCloudDatacatalogLineageV1Process{
            Attributes: map[string]interface{}{
                "fuga": "in",
                "corporis": "iste",
                "iure": "saepe",
                "quidem": "architecto",
            },
            DisplayName: sdk.String("ipsa"),
            Name: sdk.String("Carlton O'Hara"),
            Origin: &shared.GoogleCloudDatacatalogLineageV1Origin{
                Name: sdk.String("Stacy Champlin"),
                SourceType: shared.GoogleCloudDatacatalogLineageV1OriginSourceTypeEnumComposer.ToPointer(),
            },
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        RequestID: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.DatalineageProjectsLocationsProcessesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1Process != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesList

List processes in the given project and location. List order is descending by insertion time.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesList(ctx, operations.DatalineageProjectsLocationsProcessesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("commodi"),
        PageSize: sdk.Int64(466311),
        PageToken: sdk.String("molestiae"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("quis"),
    }, operations.DatalineageProjectsLocationsProcessesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1ListProcessesResponse != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesRunsCreate

Creates a new run.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsCreate(ctx, operations.DatalineageProjectsLocationsProcessesRunsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogLineageV1Run: &shared.GoogleCloudDatacatalogLineageV1Run{
            Attributes: map[string]interface{}{
                "animi": "enim",
                "odit": "quo",
                "sequi": "tenetur",
            },
            DisplayName: sdk.String("ipsam"),
            EndTime: sdk.String("id"),
            Name: sdk.String("Richard Boyer"),
            StartTime: sdk.String("laborum"),
            State: shared.GoogleCloudDatacatalogLineageV1RunStateEnumUnknown.ToPointer(),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        RequestID: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DatalineageProjectsLocationsProcessesRunsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1Run != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesRunsLineageEventsCreate

Creates a new lineage event.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsLineageEventsCreate(ctx, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogLineageV1LineageEvent: &shared.GoogleCloudDatacatalogLineageV1LineageEvent{
            EndTime: sdk.String("reprehenderit"),
            Links: []shared.GoogleCloudDatacatalogLineageV1EventLink{
                shared.GoogleCloudDatacatalogLineageV1EventLink{
                    Source: &shared.GoogleCloudDatacatalogLineageV1EntityReference{
                        FullyQualifiedName: sdk.String("maiores"),
                    },
                    Target: &shared.GoogleCloudDatacatalogLineageV1EntityReference{
                        FullyQualifiedName: sdk.String("dicta"),
                    },
                },
                shared.GoogleCloudDatacatalogLineageV1EventLink{
                    Source: &shared.GoogleCloudDatacatalogLineageV1EntityReference{
                        FullyQualifiedName: sdk.String("corporis"),
                    },
                    Target: &shared.GoogleCloudDatacatalogLineageV1EntityReference{
                        FullyQualifiedName: sdk.String("dolore"),
                    },
                },
            },
            Name: sdk.String("Mildred Pfeffer"),
            StartTime: sdk.String("commodi"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("excepturi"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        RequestID: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1LineageEvent != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesRunsLineageEventsDelete

Deletes the lineage event with the specified name.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsLineageEventsDelete(ctx, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        Name: "Elizabeth Orn",
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
    }, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsDeleteSecurity{
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

## DatalineageProjectsLocationsProcessesRunsLineageEventsGet

Gets details of a specified lineage event.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsLineageEventsGet(ctx, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("quos"),
        Key: sdk.String("perferendis"),
        Name: "Mr. Nadine Hills",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1LineageEvent != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesRunsLineageEventsList

Lists lineage events in the given project and location. The list order is not defined.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsLineageEventsList(ctx, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("aliquid"),
        PageSize: sdk.Int64(592042),
        PageToken: sdk.String("necessitatibus"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DatalineageProjectsLocationsProcessesRunsLineageEventsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1ListLineageEventsResponse != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesRunsList

Lists runs in the given project and location. List order is descending by `start_time`.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsList(ctx, operations.DatalineageProjectsLocationsProcessesRunsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("rerum"),
        PageSize: sdk.Int64(116202),
        PageToken: sdk.String("magnam"),
        Parent: "cumque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DatalineageProjectsLocationsProcessesRunsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1ListRunsResponse != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsProcessesRunsPatch

Updates a run.

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
    res, err := s.Projects.DatalineageProjectsLocationsProcessesRunsPatch(ctx, operations.DatalineageProjectsLocationsProcessesRunsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogLineageV1Run: &shared.GoogleCloudDatacatalogLineageV1Run{
            Attributes: map[string]interface{}{
                "non": "occaecati",
                "enim": "accusamus",
                "delectus": "quidem",
                "provident": "nam",
            },
            DisplayName: sdk.String("id"),
            EndTime: sdk.String("blanditiis"),
            Name: sdk.String("Timmy Feeney"),
            StartTime: sdk.String("vel"),
            State: shared.GoogleCloudDatacatalogLineageV1RunStateEnumFailed.ToPointer(),
        },
        AccessToken: sdk.String("omnis"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("magnam"),
        Name: "Alfonso Green",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UpdateMask: sdk.String("eum"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.DatalineageProjectsLocationsProcessesRunsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1Run != nil {
        // handle response
    }
}
```

## DatalineageProjectsLocationsSearchLinks

Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

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
    res, err := s.Projects.DatalineageProjectsLocationsSearchLinks(ctx, operations.DatalineageProjectsLocationsSearchLinksRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDatacatalogLineageV1SearchLinksRequest: &shared.GoogleCloudDatacatalogLineageV1SearchLinksRequest{
            PageSize: sdk.Int(298282),
            PageToken: sdk.String("et"),
            Source: &shared.GoogleCloudDatacatalogLineageV1EntityReference{
                FullyQualifiedName: sdk.String("excepturi"),
            },
            Target: &shared.GoogleCloudDatacatalogLineageV1EntityReference{
                FullyQualifiedName: sdk.String("ullam"),
            },
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DatalineageProjectsLocationsSearchLinksSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogLineageV1SearchLinksResponse != nil {
        // handle response
    }
}
```
