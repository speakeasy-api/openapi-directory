# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/lambdatest.com/1.0.1/go
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
    res, err := s.GetDevices.Devices(ctx, operations.DevicesRequest{
        Os: sdk.String("corrupti"),
    }, operations.DevicesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OsDevices != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [GetDevices](docs/getdevices/README.md)

* [Devices](docs/getdevices/README.md#devices) - Fetch all available device combinations.

### [GetLocations](docs/getlocations/README.md)

* [Locations](docs/getlocations/README.md#locations) - Fetch Locations

### [GetOSBrowsers](docs/getosbrowsers/README.md)

* [OsBrowsers](docs/getosbrowsers/README.md#osbrowsers) - Fetch all available os-browser combinations.

### [GetProfiles](docs/getprofiles/README.md)

* [Profiles](docs/getprofiles/README.md#profiles) - Fetch login profiles

### [GetResolutions](docs/getresolutions/README.md)

* [Resolutions](docs/getresolutions/README.md#resolutions) - Fetch all available resolution on different OS

### [GetScreenshots](docs/getscreenshots/README.md)

* [Screenshots](docs/getscreenshots/README.md#screenshots) - Fetch specified screenshot details

### [GetZippedScreenshots](docs/getzippedscreenshots/README.md)

* [ZippedScreenshots](docs/getzippedscreenshots/README.md#zippedscreenshots) - Fetch Zipped Screenshots

### [StartScreenshotTest](docs/startscreenshottest/README.md)

* [StartScreenshotTest](docs/startscreenshottest/README.md#startscreenshottest) - Start Screenshot Test

### [StopScreenshotTest](docs/stopscreenshottest/README.md)

* [StopScreenshotsTest](docs/stopscreenshottest/README.md#stopscreenshotstest) - Stop specified screenshot test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
