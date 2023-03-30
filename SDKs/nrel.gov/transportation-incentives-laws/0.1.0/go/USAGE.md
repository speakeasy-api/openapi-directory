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
        PathParams: operations.TransportationIncentivesLawsAllPathParams{
            OutputFormat: "xml",
        },
        QueryParams: operations.TransportationIncentivesLawsAllQueryParams{
            APIKey: "provident",
            Expired: false,
            IncentiveType: "distinctio",
            Jurisdiction: "quibusdam",
            Keyword: "unde",
            LawType: "nulla",
            Limit: 544883,
            Local: false,
            Poc: false,
            Recent: false,
            RegulationType: "illum",
            Technology: "vel",
            UserType: "error",
        },
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