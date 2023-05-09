# Logs

### Available Operations

* [GetOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

## GetOrganizationWebhooksLogs

Return the log of webhook POSTs sent

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
    res, err := s.Logs.GetOrganizationWebhooksLogs(ctx, operations.GetOrganizationWebhooksLogsRequest{
        EndingBefore: sdk.String("non"),
        OrganizationID: "quis",
        PerPage: sdk.Int64(289743),
        StartingAfter: sdk.String("earum"),
        T0: sdk.String("natus"),
        T1: sdk.String("blanditiis"),
        Timespan: sdk.Float32(1949.47),
        URL: sdk.String("vitae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWebhooksLogs200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
