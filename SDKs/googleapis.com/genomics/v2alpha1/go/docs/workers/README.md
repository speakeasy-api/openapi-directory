# Workers

### Available Operations

* [GenomicsWorkersCheckIn](#genomicsworkerscheckin) - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

## GenomicsWorkersCheckIn

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
    res, err := s.Workers.GenomicsWorkersCheckIn(ctx, operations.GenomicsWorkersCheckInRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CheckInRequest: &shared.CheckInRequest{
            DeadlineExpired: map[string]interface{}{
                "illum": "sequi",
                "natus": "impedit",
                "aut": "voluptatibus",
                "exercitationem": "nulla",
            },
            Event: map[string]interface{}{
                "porro": "maiores",
            },
            Events: []shared.TimestampedEvent{
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "eligendi": "ducimus",
                        "alias": "officia",
                    },
                    Timestamp: sdk.String("tempora"),
                },
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "ea": "aspernatur",
                        "vel": "possimus",
                    },
                    Timestamp: sdk.String("magnam"),
                },
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "ex": "laudantium",
                    },
                    Timestamp: sdk.String("dicta"),
                },
                shared.TimestampedEvent{
                    Data: map[string]interface{}{
                        "maiores": "quasi",
                    },
                    Timestamp: sdk.String("ex"),
                },
            },
            Result: &shared.Status{
                Code: sdk.Int(862192),
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "nostrum": "sapiente",
                        "quisquam": "saepe",
                        "ea": "impedit",
                        "corporis": "veniam",
                    },
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
            SosReport: sdk.String("eaque"),
            WorkerStatus: &shared.WorkerStatus{
                AttachedDisks: map[string]shared.DiskStatus{
                    "libero": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("aut"),
                        TotalSpaceBytes: sdk.String("aut"),
                    },
                    "deleniti": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("impedit"),
                        TotalSpaceBytes: sdk.String("aliquam"),
                    },
                    "fugit": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("accusamus"),
                        TotalSpaceBytes: sdk.String("inventore"),
                    },
                    "non": shared.DiskStatus{
                        FreeSpaceBytes: sdk.String("et"),
                        TotalSpaceBytes: sdk.String("dolorum"),
                    },
                },
                BootDisk: &shared.DiskStatus{
                    FreeSpaceBytes: sdk.String("laborum"),
                    TotalSpaceBytes: sdk.String("placeat"),
                },
                FreeRAMBytes: sdk.String("velit"),
                TotalRAMBytes: sdk.String("eum"),
                UptimeSeconds: sdk.String("autem"),
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("nulla"),
        ID: "6b144290-7474-4778-a7bd-466d28c10ab3",
        Key: sdk.String("quo"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("eius"),
    }, operations.GenomicsWorkersCheckInSecurity{
        Option1: &operations.GenomicsWorkersCheckInSecurityOption1{
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
