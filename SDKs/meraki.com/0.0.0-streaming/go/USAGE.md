<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: shared.SchemeMerakiAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetOrganizationAPIRequestsRequest{
        PathParams: operations.GetOrganizationAPIRequestsPathParams{
            OrganizationID: "unde",
        },
        QueryParams: operations.GetOrganizationAPIRequestsQueryParams{
            AdminID: "deserunt",
            EndingBefore: "porro",
            Method: "nulla",
            Path: "id",
            PerPage: 857946,
            ResponseCode: 544883,
            SourceIP: "nulla",
            StartingAfter: "nihil",
            T0: "fuga",
            T1: "facilis",
            Timespan: 3843.82,
        },
    }

    ctx := context.Background()
    res, err := s.APIUsage.GetOrganizationAPIRequests(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAPIRequests200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->