# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/readerrevenuesubscriptionlinking/v1/go
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

    req := operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Force: false,
        Key: "nulla",
        Name: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Publications.ReaderrevenuesubscriptionlinkingPublicationsReadersDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReaderResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Publications

* `ReaderrevenuesubscriptionlinkingPublicationsReadersDelete` - Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
* `ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlements` - Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
* `ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements` - Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
