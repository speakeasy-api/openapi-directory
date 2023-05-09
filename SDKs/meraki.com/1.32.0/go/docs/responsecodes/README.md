# ResponseCodes

### Available Operations

* [GetOrganizationAPIRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period

## GetOrganizationAPIRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ResponseCodes.GetOrganizationAPIRequestsOverviewResponseCodesByInterval(ctx, operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalRequest{
        AdminIds: []string{
            "corporis",
            "nulla",
            "vero",
            "facere",
        },
        Interval: sdk.Int64(566925),
        OperationIds: []string{
            "accusantium",
            "voluptatem",
            "temporibus",
            "impedit",
        },
        OrganizationID: "consequuntur",
        SourceIps: []string{
            "voluptas",
            "vitae",
        },
        T0: sdk.String("veritatis"),
        T1: sdk.String("repellat"),
        Timespan: sdk.Float32(9312.1),
        UserAgent: sdk.String("animi"),
        Version: operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalVersionEnumZero.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
