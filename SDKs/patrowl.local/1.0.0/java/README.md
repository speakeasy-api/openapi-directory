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

            CleanScanPageRequest req = new CleanScanPageRequest() {{
                scanId = 548814;
            }}            

            CleanScanPageResponse res = sdk.patrowlEngine.cleanScanPage(req);

            if (res.apiResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### patrowlEngine

* `cleanScanPage` - Clean scan
* `cleanScansPage` - Clean all scans
* `getFindingPage` - Get findings on finished scans
* `startScanPage` - Start a new scan
* `statusScanPage` - Status of a scan
* `statusScansPage` - Status on all scans
* `stopScanPage` - Stop a scan
* `stopScansPage` - Stop all scans
* `getDefaultPage` - Index page
* `getInfoPage` - Engine info page
* `getLivenessPage` - Liveness page
* `getReadinessPage` - Readiness page
* `getTestPage` - Test page
* `reloadConfigurationPage` - Configuration reloading page
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
