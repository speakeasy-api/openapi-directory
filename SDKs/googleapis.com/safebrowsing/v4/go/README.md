# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/safebrowsing/v4/go
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
    res, err := s.EncodedFullHashes.SafebrowsingEncodedFullHashesGet(ctx, operations.SafebrowsingEncodedFullHashesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        ClientID: sdk.String("unde"),
        ClientVersion: sdk.String("nulla"),
        EncodedRequest: "corrupti",
        Fields: sdk.String("illum"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSecuritySafebrowsingV4FindFullHashesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [EncodedFullHashes](docs/encodedfullhashes/README.md)

* [SafebrowsingEncodedFullHashesGet](docs/encodedfullhashes/README.md#safebrowsingencodedfullhashesget)

### [EncodedUpdates](docs/encodedupdates/README.md)

* [SafebrowsingEncodedUpdatesGet](docs/encodedupdates/README.md#safebrowsingencodedupdatesget)

### [FullHashes](docs/fullhashes/README.md)

* [SafebrowsingFullHashesFind](docs/fullhashes/README.md#safebrowsingfullhashesfind) - Finds the full hashes that match the requested hash prefixes.

### [ThreatHits](docs/threathits/README.md)

* [SafebrowsingThreatHitsCreate](docs/threathits/README.md#safebrowsingthreathitscreate) - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### [ThreatListUpdates](docs/threatlistupdates/README.md)

* [SafebrowsingThreatListUpdatesFetch](docs/threatlistupdates/README.md#safebrowsingthreatlistupdatesfetch) - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### [ThreatLists](docs/threatlists/README.md)

* [SafebrowsingThreatListsList](docs/threatlists/README.md#safebrowsingthreatlistslist) - Lists the Safe Browsing threat lists available for download.

### [ThreatMatches](docs/threatmatches/README.md)

* [SafebrowsingThreatMatchesFind](docs/threatmatches/README.md#safebrowsingthreatmatchesfind) - Finds the threat entries that match the Safe Browsing lists.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
