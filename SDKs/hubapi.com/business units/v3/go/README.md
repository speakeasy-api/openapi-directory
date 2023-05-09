# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/business units/v3/go
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
    res, err := s.BusinessUnit.GetBusinessUnitsV3BusinessUnitsUserUserID(ctx, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDRequest{
        Name: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        Properties: []string{
            "nulla",
            "corrupti",
            "illum",
        },
        UserID: "vel",
    }, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponsePublicBusinessUnitNoPaging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BusinessUnit](docs/businessunit/README.md)

* [GetBusinessUnitsV3BusinessUnitsUserUserID](docs/businessunit/README.md#getbusinessunitsv3businessunitsuseruserid) - Get Business Units for a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
