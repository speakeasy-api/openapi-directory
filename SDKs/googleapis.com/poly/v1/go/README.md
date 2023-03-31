# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/poly/v1/go
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

    req := operations.PolyAssetsGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        Name: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Assets.PolyAssetsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Asset != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Assets

* `PolyAssetsGet` - Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.
* `PolyAssetsList` - Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.

### Users

* `PolyUsersAssetsList` - Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
* `PolyUsersLikedassetsList` - Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
