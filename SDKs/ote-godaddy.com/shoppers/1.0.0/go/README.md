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
    res, err := s.V1.ChangePassword(ctx, operations.ChangePasswordRequest{
        Secret: shared.Secret{
            Secret: sdk.String("P@55w0rd+"),
        },
        ShopperID: "corrupti",
    })
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


### [V1](docs/v1/README.md)

* [ChangePassword](docs/v1/README.md#changepassword) - Set subaccount's password
* [CreateSubaccountJSON](docs/v1/README.md#createsubaccountjson) - Create a Subaccount owned by the authenticated Reseller
* [CreateSubaccountRaw](docs/v1/README.md#createsubaccountraw) - Create a Subaccount owned by the authenticated Reseller
* [Delete](docs/v1/README.md#delete) - Request the deletion of a shopper profile
* [Get](docs/v1/README.md#get) - Get details for the specified Shopper
* [GetStatus](docs/v1/README.md#getstatus) - Get details for the specified Shopper
* [UpdateJSON](docs/v1/README.md#updatejson) - Update details for the specified Shopper
* [UpdateRaw](docs/v1/README.md#updateraw) - Update details for the specified Shopper
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
