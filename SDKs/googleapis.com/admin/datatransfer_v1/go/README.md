# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/admin/datatransfer_v1/go
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

    req := operations.DatatransferApplicationsGetRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        ApplicationID: "quibusdam",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Applications.DatatransferApplicationsGet(ctx, req, operations.DatatransferApplicationsGetSecurity{
        Option1: &operations.DatatransferApplicationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Applications

* `DatatransferApplicationsGet` - Retrieves information about an application for the given application ID.
* `DatatransferApplicationsList` - Lists the applications available for data transfer for a customer.

### Transfers

* `DatatransferTransfersGet` - Retrieves a data transfer request by its resource ID.
* `DatatransferTransfersInsert` - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
* `DatatransferTransfersList` - Lists the transfers for a customer by source user, destination user, or status.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
