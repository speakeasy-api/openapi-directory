# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/mbus.local/0.3.5/go
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
    res, err := s.Get(ctx, operations.GetRequest{
        Address: "48",
        Baudrate: shared.BaudrateEnumTwoThousandFourHundred,
        Device: "ttyAMA0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MbusData != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [Get](docs/sdk/README.md#get) - Gets data from the slave identified by {address}
* [GetMulti](docs/sdk/README.md#getmulti) - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* [Hat](docs/sdk/README.md#hat) - Gets Raspberry Pi Hat information
* [HatOff](docs/sdk/README.md#hatoff) - Turns off power to the M-Bus
* [HatOn](docs/sdk/README.md#haton) - Turns on power to the M-Bus
* [MbusAPI](docs/sdk/README.md#mbusapi) - Returns this API specification
* [Scan](docs/sdk/README.md#scan) - Scan the specified device for slaves
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
