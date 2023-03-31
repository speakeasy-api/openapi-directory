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

import org.openapis.openapi.models.operations.LatestPackageSecurity;
import org.openapis.openapi.models.operations.LatestPackagePathParams;
import org.openapis.openapi.models.operations.LatestPackageRequest;
import org.openapis.openapi.models.operations.LatestPackageResponse;
import org.openapis.openapi.models.shared.SchemeRhIdentity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestPackageRequest req = new LatestPackageRequest() {{
                security = new LatestPackageSecurity() {{
                    rhIdentity = new SchemeRhIdentity() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new LatestPackagePathParams() {{
                    packageName = "corrupti";
                }};
            }};            

            LatestPackageResponse res = sdk.latestPackage(req);

            if (res.controllersPackageDetailResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `latestPackage` - Show me metadata of selected package
* `deletesystem` - Delete system by inventory id
* `detailAdvisory` - Show me details an advisory by given advisory name
* `detailSystem` - Show me details about a system by given inventory id
* `exportAdvisories` - Export applicable advisories for all my systems
* `exportAdvisorySystems` - Export systems for my account
* `exportPackageSystems` - Show me all my systems which have a package installed
* `exportPackages` - Show me all installed packages across my systems
* `exportSystemAdvisories` - Export applicable advisories for all my systems
* `exportSystemPackages` - Show me details about a system packages by given inventory id
* `exportSystems` - Export systems for my account
* `listAdvisories` - Show me all applicable advisories for all my systems
* `listAdvisorySystems` - Show me systems on which the given advisory is applicable
* `listPackages` - Show me all installed packages across my systems
* `listSystemAdvisories` - Show me advisories for a system by given inventory id
* `listSystems` - Show me all my systems
* `packageSystems` - Show me all my systems which have a package installed
* `packageVersions` - Show me all package versions installed on some system
* `systemPackages` - Show me details about a system packages by given inventory id
* `viewAdvisoriesSystems` - View advisory-system pairs for selected systems and advisories
* `viewSystemsAdvisories` - View system-advisory pairs for selected systems and advisories
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
