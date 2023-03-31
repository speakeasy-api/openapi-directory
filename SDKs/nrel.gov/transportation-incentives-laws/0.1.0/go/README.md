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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `TransportationIncentivesLawsAll` - Return a full list of laws and incentives that match your query.
* `TransportationIncentivesLawsCategories` - Return the law categories for a given category type.
* `TransportationIncentivesLawsID` - Fetch the details of a specific law given the law's ID.
* `TransportationIncentivesLawsPocs` - Get the points of contact for a given jurisdiction.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
