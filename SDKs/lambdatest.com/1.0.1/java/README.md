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
import org.openapis.openapi.models.operations.DevicesRequest;
import org.openapis.openapi.models.operations.DevicesResponse;
import org.openapis.openapi.models.operations.DevicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DevicesRequest req = new DevicesRequest() {{
                os = "corrupti";
            }};            

            DevicesResponse res = sdk.getDevices.devices(req, new DevicesSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.osDevices != null) {
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


### [getDevices](docs/getdevices/README.md)

* [devices](docs/getdevices/README.md#devices) - Fetch all available device combinations.

### [getLocations](docs/getlocations/README.md)

* [locations](docs/getlocations/README.md#locations) - Fetch Locations

### [getOSBrowsers](docs/getosbrowsers/README.md)

* [osBrowsers](docs/getosbrowsers/README.md#osbrowsers) - Fetch all available os-browser combinations.

### [getProfiles](docs/getprofiles/README.md)

* [profiles](docs/getprofiles/README.md#profiles) - Fetch login profiles

### [getResolutions](docs/getresolutions/README.md)

* [resolutions](docs/getresolutions/README.md#resolutions) - Fetch all available resolution on different OS

### [getScreenshots](docs/getscreenshots/README.md)

* [screenshots](docs/getscreenshots/README.md#screenshots) - Fetch specified screenshot details

### [getZippedScreenshots](docs/getzippedscreenshots/README.md)

* [zippedScreenshots](docs/getzippedscreenshots/README.md#zippedscreenshots) - Fetch Zipped Screenshots

### [startScreenshotTest](docs/startscreenshottest/README.md)

* [startScreenshotTest](docs/startscreenshottest/README.md#startscreenshottest) - Start Screenshot Test

### [stopScreenshotTest](docs/stopscreenshottest/README.md)

* [stopScreenshotsTest](docs/stopscreenshottest/README.md#stopscreenshotstest) - Stop specified screenshot test
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
