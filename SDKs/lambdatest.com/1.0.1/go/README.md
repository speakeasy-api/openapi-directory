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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DevicesRequest{
        Os: "corrupti",
    }

    ctx := context.Background()
    res, err := s.GetDevices.Devices(ctx, req, operations.DevicesSecurity{
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


### GetDevices

* `Devices` - Fetch all available device combinations.

### GetLocations

* `Locations` - Fetch Locations

### GetOSBrowsers

* `OsBrowsers` - Fetch all available os-browser combinations.

### GetProfiles

* `Profiles` - Fetch login profiles

### GetResolutions

* `Resolutions` - Fetch all available resolution on different OS

### GetScreenshots

* `Screenshots` - Fetch specified screenshot details

### GetZippedScreenshots

* `ZippedScreenshots` - Fetch Zipped Screenshots

### StartScreenshotTest

* `StartScreenshotTest` - Start Screenshot Test

### StopScreenshotTest

* `StopScreenshotsTest` - Stop specified screenshot test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
