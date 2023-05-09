# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestPackageRequest;
import org.openapis.openapi.models.operations.LatestPackageResponse;
import org.openapis.openapi.models.operations.LatestPackageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestPackageRequest req = new LatestPackageRequest("corrupti");            

            LatestPackageResponse res = sdk.latestPackage(req, new LatestPackageSecurity("provident") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [latestPackage](docs/sdk/README.md#latestpackage) - Show me metadata of selected package
* [deletesystem](docs/sdk/README.md#deletesystem) - Delete system by inventory id
* [detailAdvisory](docs/sdk/README.md#detailadvisory) - Show me details an advisory by given advisory name
* [detailSystem](docs/sdk/README.md#detailsystem) - Show me details about a system by given inventory id
* [exportAdvisories](docs/sdk/README.md#exportadvisories) - Export applicable advisories for all my systems
* [exportAdvisorySystems](docs/sdk/README.md#exportadvisorysystems) - Export systems for my account
* [exportPackageSystems](docs/sdk/README.md#exportpackagesystems) - Show me all my systems which have a package installed
* [exportPackages](docs/sdk/README.md#exportpackages) - Show me all installed packages across my systems
* [exportSystemAdvisories](docs/sdk/README.md#exportsystemadvisories) - Export applicable advisories for all my systems
* [exportSystemPackages](docs/sdk/README.md#exportsystempackages) - Show me details about a system packages by given inventory id
* [exportSystems](docs/sdk/README.md#exportsystems) - Export systems for my account
* [listAdvisories](docs/sdk/README.md#listadvisories) - Show me all applicable advisories for all my systems
* [listAdvisorySystems](docs/sdk/README.md#listadvisorysystems) - Show me systems on which the given advisory is applicable
* [listPackages](docs/sdk/README.md#listpackages) - Show me all installed packages across my systems
* [listSystemAdvisories](docs/sdk/README.md#listsystemadvisories) - Show me advisories for a system by given inventory id
* [listSystems](docs/sdk/README.md#listsystems) - Show me all my systems
* [packageSystems](docs/sdk/README.md#packagesystems) - Show me all my systems which have a package installed
* [packageVersions](docs/sdk/README.md#packageversions) - Show me all package versions installed on some system
* [systemPackages](docs/sdk/README.md#systempackages) - Show me details about a system packages by given inventory id
* [viewAdvisoriesSystems](docs/sdk/README.md#viewadvisoriessystems) - View advisory-system pairs for selected systems and advisories
* [viewSystemsAdvisories](docs/sdk/README.md#viewsystemsadvisories) - View system-advisory pairs for selected systems and advisories
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
