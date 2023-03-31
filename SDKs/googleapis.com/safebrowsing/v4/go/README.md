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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.SafebrowsingEncodedFullHashesGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        ClientID: "unde",
        ClientVersion: "nulla",
        EncodedRequest: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.EncodedFullHashes.SafebrowsingEncodedFullHashesGet(ctx, req)
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


### EncodedFullHashes

* `SafebrowsingEncodedFullHashesGet`

### EncodedUpdates

* `SafebrowsingEncodedUpdatesGet`

### FullHashes

* `SafebrowsingFullHashesFind` - Finds the full hashes that match the requested hash prefixes.

### ThreatHits

* `SafebrowsingThreatHitsCreate` - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### ThreatListUpdates

* `SafebrowsingThreatListUpdatesFetch` - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### ThreatLists

* `SafebrowsingThreatListsList` - Lists the Safe Browsing threat lists available for download.

### ThreatMatches

* `SafebrowsingThreatMatchesFind` - Finds the threat entries that match the Safe Browsing lists.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
