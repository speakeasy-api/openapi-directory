# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_fax_v1/1.29.1/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DeleteFax(ctx, operations.DeleteFaxRequest{
        Sid: "corrupti",
    }, operations.DeleteFaxSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DeleteFax](docs/sdk/README.md#deletefax) - Delete a specific fax and its associated media.
* [DeleteFaxMedia](docs/sdk/README.md#deletefaxmedia) - Delete a specific fax media instance.
* [FetchFax](docs/sdk/README.md#fetchfax) - Fetch a specific fax.
* [FetchFaxMedia](docs/sdk/README.md#fetchfaxmedia) - Fetch a specific fax media instance.
* [ListFax](docs/sdk/README.md#listfax) - Retrieve a list of all faxes.
* [ListFaxMedia](docs/sdk/README.md#listfaxmedia) - Retrieve a list of all fax media instances for the specified fax.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
