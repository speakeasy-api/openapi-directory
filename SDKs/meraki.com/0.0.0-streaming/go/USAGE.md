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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetOrganizationAPIRequestsRequest{
        AdminID: "corrupti",
        EndingBefore: "provident",
        Method: "distinctio",
        OrganizationID: "quibusdam",
        Path: "unde",
        PerPage: 857946,
        ResponseCode: 544883,
        SourceIP: "illum",
        StartingAfter: "vel",
        T0: "error",
        T1: "deserunt",
        Timespan: 3843.82,
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