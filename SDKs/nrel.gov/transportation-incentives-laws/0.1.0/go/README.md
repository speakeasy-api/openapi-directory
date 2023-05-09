# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nrel.gov/transportation-incentives-laws/0.1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [TransportationIncentivesLawsAll](docs/sdk/README.md#transportationincentiveslawsall) - Return a full list of laws and incentives that match your query.
* [TransportationIncentivesLawsCategories](docs/sdk/README.md#transportationincentiveslawscategories) - Return the law categories for a given category type.
* [TransportationIncentivesLawsID](docs/sdk/README.md#transportationincentiveslawsid) - Fetch the details of a specific law given the law's ID.
* [TransportationIncentivesLawsPocs](docs/sdk/README.md#transportationincentiveslawspocs) - Get the points of contact for a given jurisdiction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
