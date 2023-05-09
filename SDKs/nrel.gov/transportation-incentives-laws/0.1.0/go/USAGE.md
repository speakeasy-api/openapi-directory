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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TransportationIncentivesLawsAll(ctx, operations.TransportationIncentivesLawsAllRequest{
        APIKey: "corrupti",
        Expired: sdk.Bool(false),
        IncentiveType: sdk.String("provident"),
        Jurisdiction: sdk.String("distinctio"),
        Keyword: sdk.String("quibusdam"),
        LawType: sdk.String("unde"),
        Limit: sdk.Int64(857946),
        Local: sdk.Bool(false),
        OutputFormat: operations.TransportationIncentivesLawsAllOutputFormatEnumXML,
        Poc: sdk.Bool(false),
        Recent: sdk.Bool(false),
        RegulationType: sdk.String("illum"),
        Technology: sdk.String("vel"),
        UserType: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->