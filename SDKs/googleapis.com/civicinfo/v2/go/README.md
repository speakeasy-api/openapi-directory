# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/civicinfo/v2/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Divisions.CivicinfoDivisionsSearch(ctx, operations.CivicinfoDivisionsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("illum"),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DivisionSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Divisions](docs/divisions/README.md)

* [CivicinfoDivisionsSearch](docs/divisions/README.md#civicinfodivisionssearch) - Searches for political divisions by their natural name or OCD ID.

### [Elections](docs/elections/README.md)

* [CivicinfoElectionsElectionQuery](docs/elections/README.md#civicinfoelectionselectionquery) - List of available elections to query.
* [CivicinfoElectionsVoterInfoQuery](docs/elections/README.md#civicinfoelectionsvoterinfoquery) - Looks up information relevant to a voter based on the voter's registered address.

### [Representatives](docs/representatives/README.md)

* [CivicinfoRepresentativesRepresentativeInfoByAddress](docs/representatives/README.md#civicinforepresentativesrepresentativeinfobyaddress) - Looks up political geography and representative information for a single address.
* [CivicinfoRepresentativesRepresentativeInfoByDivision](docs/representatives/README.md#civicinforepresentativesrepresentativeinfobydivision) - Looks up representative information for a single geographic division.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
