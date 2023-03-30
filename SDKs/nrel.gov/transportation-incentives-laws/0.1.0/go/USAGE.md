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
            APIKey: "deserunt",
            Expired: false,
            IncentiveType: "porro",
            Jurisdiction: "nulla",
            Keyword: "id",
            LawType: "vero",
            Limit: 544883,
            Local: false,
            Poc: false,
            Recent: false,
            RegulationType: "nulla",
            Technology: "nihil",
            UserType: "fuga",
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