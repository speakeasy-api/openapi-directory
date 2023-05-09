# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/patrowl.local/1.0.0/go
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
    res, err := s.PatrowlEngine.CleanScanPage(ctx, operations.CleanScanPageRequest{
        ScanID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PatrowlEngine](docs/patrowlengine/README.md)

* [CleanScanPage](docs/patrowlengine/README.md#cleanscanpage) - Clean scan
* [CleanScansPage](docs/patrowlengine/README.md#cleanscanspage) - Clean all scans
* [GetFindingPage](docs/patrowlengine/README.md#getfindingpage) - Get findings on finished scans
* [StartScanPage](docs/patrowlengine/README.md#startscanpage) - Start a new scan
* [StatusScanPage](docs/patrowlengine/README.md#statusscanpage) - Status of a scan
* [StatusScansPage](docs/patrowlengine/README.md#statusscanspage) - Status on all scans
* [StopScanPage](docs/patrowlengine/README.md#stopscanpage) - Stop a scan
* [StopScansPage](docs/patrowlengine/README.md#stopscanspage) - Stop all scans
* [GetDefaultPage](docs/patrowlengine/README.md#getdefaultpage) - Index page
* [GetInfoPage](docs/patrowlengine/README.md#getinfopage) - Engine info page
* [GetLivenessPage](docs/patrowlengine/README.md#getlivenesspage) - Liveness page
* [GetReadinessPage](docs/patrowlengine/README.md#getreadinesspage) - Readiness page
* [GetTestPage](docs/patrowlengine/README.md#gettestpage) - Test page
* [ReloadConfigurationPage](docs/patrowlengine/README.md#reloadconfigurationpage) - Configuration reloading page
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
