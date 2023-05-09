# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/opendatanetwork.com/1.0.0/go
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
    res, err := s.CreateAMap(ctx, operations.CreateAMapRequest{
        XAppToken: sdk.String("corrupti"),
        AppToken: sdk.String("provident"),
        Constraint: sdk.String("distinctio"),
        EntityID: "quibusdam",
        Variable: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAMap](docs/sdk/README.md#createamap) - Create a map
* [FindAllAvailableDataForSomeEntities](docs/sdk/README.md#findallavailabledataforsomeentities) - Find all available data for some entities
* [FindTheRelativesOfAnEntity](docs/sdk/README.md#findtherelativesofanentity) - Find the relatives of an entity
* [GetEntities](docs/sdk/README.md#getentities) - Get Entities
* [GetConstraintPermutationsForEntities](docs/sdk/README.md#getconstraintpermutationsforentities) - Get constraint permutations for entities
* [GetDatasets](docs/sdk/README.md#getdatasets) - Get datasets
* [GetQuestions](docs/sdk/README.md#getquestions) - Get questions
* [GetSuggestions](docs/sdk/README.md#getsuggestions) - Get suggestions
* [GetValuesForVariables](docs/sdk/README.md#getvaluesforvariables) - Get values for variables
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
