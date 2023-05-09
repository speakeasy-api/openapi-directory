<!-- Start SDK Example Usage -->
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
    res, err := s.APIUsage.GetOrganizationAPIRequests(ctx, operations.GetOrganizationAPIRequestsRequest{
        AdminID: sdk.String("corrupti"),
        EndingBefore: sdk.String("provident"),
        Method: sdk.String("distinctio"),
        OrganizationID: "quibusdam",
        Path: sdk.String("unde"),
        PerPage: sdk.Int64(857946),
        ResponseCode: sdk.Int64(544883),
        SourceIP: sdk.String("illum"),
        StartingAfter: sdk.String("vel"),
        T0: sdk.String("error"),
        T1: sdk.String("deserunt"),
        Timespan: sdk.Float32(3843.82),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->