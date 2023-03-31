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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CivicinfoDivisionsSearchRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PrettyPrint: false,
        Query: "illum",
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Divisions.CivicinfoDivisionsSearch(ctx, req)
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


### Divisions

* `CivicinfoDivisionsSearch` - Searches for political divisions by their natural name or OCD ID.

### Elections

* `CivicinfoElectionsElectionQuery` - List of available elections to query.
* `CivicinfoElectionsVoterInfoQuery` - Looks up information relevant to a voter based on the voter's registered address.

### Representatives

* `CivicinfoRepresentativesRepresentativeInfoByAddress` - Looks up political geography and representative information for a single address.
* `CivicinfoRepresentativesRepresentativeInfoByDivision` - Looks up representative information for a single geographic division.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
