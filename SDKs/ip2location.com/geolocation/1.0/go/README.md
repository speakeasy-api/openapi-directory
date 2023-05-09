# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ip2location.com/geolocation/1.0/go
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
    res, err := s.Get(ctx, operations.GetRequest{
        Addon: []GetAddonEnum{
            operations.GetAddonEnumGeotargeting,
            operations.GetAddonEnumCountryGroupings,
            operations.GetAddonEnumCountryGroupings,
        },
        Format: operations.GetFormatEnumXML.ToPointer(),
        IP: "8.8.8.8",
        Key: "nulla",
        Lang: operations.GetLangEnumJa.ToPointer(),
        Package: operations.GetPackageEnumWs22.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [Get](docs/sdk/README.md#get) - Get geolocation information via IP address
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
