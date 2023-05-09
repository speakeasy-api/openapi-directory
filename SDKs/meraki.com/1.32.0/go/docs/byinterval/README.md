# ByInterval

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
    res, err := s.ByInterval.GetOrganizationAPIRequestsOverviewResponseCodesByInterval(ctx, operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalRequest{
        AdminIds: []string{
            "quas",
        },
        Interval: sdk.Int64(484942),
        OperationIds: []string{
            "porro",
            "aliquid",
        },
        OrganizationID: "mollitia",
        SourceIps: []string{
            "explicabo",
            "et",
            "nulla",
        },
        T0: sdk.String("magni"),
        T1: sdk.String("natus"),
        Timespan: sdk.Float32(8511.99),
        UserAgent: sdk.String("a"),
        Version: operations.GetOrganizationAPIRequestsOverviewResponseCodesByIntervalVersionEnumOne.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
