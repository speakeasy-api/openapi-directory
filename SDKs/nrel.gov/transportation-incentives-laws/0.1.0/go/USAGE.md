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
    s := sdk.New()

    req := operations.TransportationIncentivesLawsAllRequest{
        APIKey: "corrupti",
        Expired: false,
        IncentiveType: "provident",
        Jurisdiction: "distinctio",
        Keyword: "quibusdam",
        LawType: "unde",
        Limit: 857946,
        Local: false,
        OutputFormat: "xml",
        Poc: false,
        Recent: false,
        RegulationType: "illum",
        Technology: "vel",
        UserType: "error",
    }

    ctx := context.Background()
    res, err := s.TransportationIncentivesLawsAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->