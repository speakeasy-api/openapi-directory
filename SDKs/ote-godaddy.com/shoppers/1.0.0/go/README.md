# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ote-godaddy.com/shoppers/1.0.0/go
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

    req := operations.ChangePasswordRequest{
        Secret: shared.Secret{
            Secret: "P@55w0rd+",
        },
        ShopperID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.V1.ChangePassword(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShopperID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### V1

* `ChangePassword` - Set subaccount's password
* `CreateSubaccountJSON` - Create a Subaccount owned by the authenticated Reseller
* `CreateSubaccountRaw` - Create a Subaccount owned by the authenticated Reseller
* `Delete` - Request the deletion of a shopper profile
* `Get` - Get details for the specified Shopper
* `GetStatus` - Get details for the specified Shopper
* `UpdateJSON` - Update details for the specified Shopper
* `UpdateRaw` - Update details for the specified Shopper
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
