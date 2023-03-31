# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/redhat.local/patchman-engine/v1.15.3/go
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

    req := operations.LatestPackageRequest{
        PackageName: "corrupti",
    }

    ctx := context.Background()
    res, err := s.LatestPackage(ctx, req, operations.LatestPackageSecurity{
        RhIdentity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ControllersPackageDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `LatestPackage` - Show me metadata of selected package
* `Deletesystem` - Delete system by inventory id
* `DetailAdvisory` - Show me details an advisory by given advisory name
* `DetailSystem` - Show me details about a system by given inventory id
* `ExportAdvisories` - Export applicable advisories for all my systems
* `ExportAdvisorySystems` - Export systems for my account
* `ExportPackageSystems` - Show me all my systems which have a package installed
* `ExportPackages` - Show me all installed packages across my systems
* `ExportSystemAdvisories` - Export applicable advisories for all my systems
* `ExportSystemPackages` - Show me details about a system packages by given inventory id
* `ExportSystems` - Export systems for my account
* `ListAdvisories` - Show me all applicable advisories for all my systems
* `ListAdvisorySystems` - Show me systems on which the given advisory is applicable
* `ListPackages` - Show me all installed packages across my systems
* `ListSystemAdvisories` - Show me advisories for a system by given inventory id
* `ListSystems` - Show me all my systems
* `PackageSystems` - Show me all my systems which have a package installed
* `PackageVersions` - Show me all package versions installed on some system
* `SystemPackages` - Show me details about a system packages by given inventory id
* `ViewAdvisoriesSystems` - View advisory-system pairs for selected systems and advisories
* `ViewSystemsAdvisories` - View system-advisory pairs for selected systems and advisories
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
