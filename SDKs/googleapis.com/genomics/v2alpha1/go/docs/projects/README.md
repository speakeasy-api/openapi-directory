# Projects

### Available Operations

* [GenomicsProjectsOperationsCancel](#genomicsprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* [GenomicsProjectsOperationsList](#genomicsprojectsoperationslist) - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* [GenomicsProjectsWorkersCheckIn](#genomicsprojectsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

## GenomicsProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`

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
    res, err := s.Projects.GenomicsProjectsOperationsCancel(ctx, operations.GenomicsProjectsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "natus": "eos",
            "atque": "sit",
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        Name: "Sonya Leuschke",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.GenomicsProjectsOperationsCancelSecurity{
        Option1: &operations.GenomicsProjectsOperationsCancelSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GenomicsProjectsOperationsList

Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`

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
    res, err := s.Projects.GenomicsProjectsOperationsList(ctx, operations.GenomicsProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("perferendis"),
        Key: sdk.String("amet"),
        Name: "Tomas Hammes",
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(588317),
        PageToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("similique"),
    }, operations.GenomicsProjectsOperationsListSecurity{
        Option1: &operations.GenomicsProjectsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## GenomicsProjectsWorkersCheckIn

The worker uses this method to retrieve the assigned operation and provide periodic status updates.

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
    res, err := s.Projects.GenomicsProjectsWorkersCheckIn(ctx, operations.GenomicsProjectsWorkersCheckInRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CheckInRequest: &shared.CheckInRequest{
            DeadlineExpired: map[string]interface{}{
                "quaerat": "tempora",
                "vel": "quod",
                "officiis": "qui",
                "dolorum": "a",
            },
            Event: map[string]interface{}{
                "harum": "iusto",
                "ipsum": "quisquam",
            },
            Events: []shared.TimestampedEvent{
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "tempore": "accusamus",
                    },
                    Timestamp: sdk.String("numquam"),
                },
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "dolorem": "sapiente",
                        "totam": "nihil",
                    },
                    Timestamp: sdk.String("sit"),
                },
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "neque": "sed",
                        "vel": "libero",
                        "voluptas": "deserunt",
                    },
                    Timestamp: sdk.String("quam"),
                },
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "incidunt": "qui",
                    },
                    Timestamp: sdk.String("cupiditate"),
                },
            },
            Result: &shared.Status{
                Code: sdk.Int(807581),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "dicta": "laborum",
                        "totam": "incidunt",
                        "aspernatur": "dolores",
                    },
                    map[string]interface{}{
                        "facilis": "aliquid",
                        "quam": "molestias",
                        "temporibus": "qui",
                    },
                    map[string]interface{}{
                        "fugit": "magni",
                    },
                    map[string]interface{}{
                        "sunt": "ullam",
                        "nam": "hic",
                    },
                },
                Message: sdk.String("voluptatem"),
            },
            SosReport: sdk.String("cumque"),
            WorkerStatus: &shared.WorkerStatus{
                AttachedDisks: map[string]shared.DiskStatus{
                    "nobis": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("et"),
                        TotalSpaceBytes: sdk.String("saepe"),
                    },
                    "ipsum": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("veritatis"),
                        TotalSpaceBytes: sdk.String("nobis"),
                    },
                    "quos": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("tempore"),
                        TotalSpaceBytes: sdk.String("cupiditate"),
                    },
                },
                BootDisk: &shared.DiskStatus{
                    FreeSpaceBytes: sdk.String("aperiam"),
                    TotalSpaceBytes: sdk.String("delectus"),
                },
                FreeRAMBytes: sdk.String("dolorem"),
                TotalRAMBytes: sdk.String("dolore"),
                UptimeSeconds: sdk.String("labore"),
            },
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("quae"),
        ID: "08e0adcf-4b92-4187-9fce-953f73ef7fbc",
        Key: sdk.String("odio"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.GenomicsProjectsWorkersCheckInSecurity{
        Option1: &operations.GenomicsProjectsWorkersCheckInSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckInResponse != nil {
        // handle response
    }
}
```
