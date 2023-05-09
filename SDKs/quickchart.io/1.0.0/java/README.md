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
import org.openapis.openapi.models.operations.GetChartRequest;
import org.openapis.openapi.models.operations.GetChartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChartRequest req = new GetChartRequest() {{
                backgroundColor = "corrupti";
                chart = "provident";
                format = "distinctio";
                height = 844266L;
                width = 602763L;
            }};            

            GetChartResponse res = sdk.getChart(req);

            if (res.getChart200ImageJpegBinaryString != null) {
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

* [getChart](docs/sdk/README.md#getchart) - Generate a chart (GET)
* [getQr](docs/sdk/README.md#getqr) - Generate a QR code (GET)
* [postChart](docs/sdk/README.md#postchart) - Generate a chart (POST)
* [postQr](docs/sdk/README.md#postqr) - Generate a QR code (POST)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
