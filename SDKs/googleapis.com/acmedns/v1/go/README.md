# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/acmedns/v1/go
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
    res, err := s.AcmeChallengeSets.AcmednsAcmeChallengeSetsGet(ctx, operations.AcmednsAcmeChallengeSetsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        RootDomain: "vel",
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcmeChallengeSet != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AcmeChallengeSets](docs/acmechallengesets/README.md)

* [AcmednsAcmeChallengeSetsGet](docs/acmechallengesets/README.md#acmednsacmechallengesetsget) - Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
* [AcmednsAcmeChallengeSetsRotateChallenges](docs/acmechallengesets/README.md#acmednsacmechallengesetsrotatechallenges) - Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
