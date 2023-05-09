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
import org.openapis.openapi.models.operations.CleanScanPageRequest;
import org.openapis.openapi.models.operations.CleanScanPageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CleanScanPageRequest req = new CleanScanPageRequest(548814L);            

            CleanScanPageResponse res = sdk.patrowlEngine.cleanScanPage(req);

            if (res.apiResponse != null) {
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


### [patrowlEngine](docs/patrowlengine/README.md)

* [cleanScanPage](docs/patrowlengine/README.md#cleanscanpage) - Clean scan
* [cleanScansPage](docs/patrowlengine/README.md#cleanscanspage) - Clean all scans
* [getFindingPage](docs/patrowlengine/README.md#getfindingpage) - Get findings on finished scans
* [startScanPage](docs/patrowlengine/README.md#startscanpage) - Start a new scan
* [statusScanPage](docs/patrowlengine/README.md#statusscanpage) - Status of a scan
* [statusScansPage](docs/patrowlengine/README.md#statusscanspage) - Status on all scans
* [stopScanPage](docs/patrowlengine/README.md#stopscanpage) - Stop a scan
* [stopScansPage](docs/patrowlengine/README.md#stopscanspage) - Stop all scans
* [getDefaultPage](docs/patrowlengine/README.md#getdefaultpage) - Index page
* [getInfoPage](docs/patrowlengine/README.md#getinfopage) - Engine info page
* [getLivenessPage](docs/patrowlengine/README.md#getlivenesspage) - Liveness page
* [getReadinessPage](docs/patrowlengine/README.md#getreadinesspage) - Readiness page
* [getTestPage](docs/patrowlengine/README.md#gettestpage) - Test page
* [reloadConfigurationPage](docs/patrowlengine/README.md#reloadconfigurationpage) - Configuration reloading page
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
