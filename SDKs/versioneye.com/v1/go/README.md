# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/versioneye.com/v1/go
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
    res, err := s.Scans.GetAPIV1Scans(ctx, operations.GetAPIV1ScansRequest{
        Name: sdk.String("Terrence Rau"),
        PerPage: sdk.String("nulla"),
    }, operations.GetAPIV1ScansSecurity{
        APIKey: "YOUR_API_KEY_HERE",
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


### [Scans](docs/scans/README.md)

* [GetAPIV1Scans](docs/scans/README.md#getapiv1scans) - Retrieves all scans
* [GetAPIV1ScansID](docs/scans/README.md#getapiv1scansid) - Retrieves a project scan result
* [GetAPIV1ScansIDFilesFileID](docs/scans/README.md#getapiv1scansidfilesfileid) - Retrieves a file object, containing information about dependencies in the file
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
