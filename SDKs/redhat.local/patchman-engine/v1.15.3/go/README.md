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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LatestPackage(ctx, operations.LatestPackageRequest{
        PackageName: "corrupti",
    }, operations.LatestPackageSecurity{
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

### [SDK](docs/sdk/README.md)

* [LatestPackage](docs/sdk/README.md#latestpackage) - Show me metadata of selected package
* [Deletesystem](docs/sdk/README.md#deletesystem) - Delete system by inventory id
* [DetailAdvisory](docs/sdk/README.md#detailadvisory) - Show me details an advisory by given advisory name
* [DetailSystem](docs/sdk/README.md#detailsystem) - Show me details about a system by given inventory id
* [ExportAdvisories](docs/sdk/README.md#exportadvisories) - Export applicable advisories for all my systems
* [ExportAdvisorySystems](docs/sdk/README.md#exportadvisorysystems) - Export systems for my account
* [ExportPackageSystems](docs/sdk/README.md#exportpackagesystems) - Show me all my systems which have a package installed
* [ExportPackages](docs/sdk/README.md#exportpackages) - Show me all installed packages across my systems
* [ExportSystemAdvisories](docs/sdk/README.md#exportsystemadvisories) - Export applicable advisories for all my systems
* [ExportSystemPackages](docs/sdk/README.md#exportsystempackages) - Show me details about a system packages by given inventory id
* [ExportSystems](docs/sdk/README.md#exportsystems) - Export systems for my account
* [ListAdvisories](docs/sdk/README.md#listadvisories) - Show me all applicable advisories for all my systems
* [ListAdvisorySystems](docs/sdk/README.md#listadvisorysystems) - Show me systems on which the given advisory is applicable
* [ListPackages](docs/sdk/README.md#listpackages) - Show me all installed packages across my systems
* [ListSystemAdvisories](docs/sdk/README.md#listsystemadvisories) - Show me advisories for a system by given inventory id
* [ListSystems](docs/sdk/README.md#listsystems) - Show me all my systems
* [PackageSystems](docs/sdk/README.md#packagesystems) - Show me all my systems which have a package installed
* [PackageVersions](docs/sdk/README.md#packageversions) - Show me all package versions installed on some system
* [SystemPackages](docs/sdk/README.md#systempackages) - Show me details about a system packages by given inventory id
* [ViewAdvisoriesSystems](docs/sdk/README.md#viewadvisoriessystems) - View advisory-system pairs for selected systems and advisories
* [ViewSystemsAdvisories](docs/sdk/README.md#viewsystemsadvisories) - View system-advisory pairs for selected systems and advisories
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
