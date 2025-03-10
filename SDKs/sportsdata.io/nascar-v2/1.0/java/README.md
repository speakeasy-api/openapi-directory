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
import org.openapis.openapi.models.operations.DriverDetailsFormatEnum;
import org.openapis.openapi.models.operations.DriverDetailsRequest;
import org.openapis.openapi.models.operations.DriverDetailsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DriverDetailsRequest req = new DriverDetailsRequest("corrupti", DriverDetailsFormatEnum.JSON);            

            DriverDetailsResponse res = sdk.driverDetails(req);

            if (res.driver != null) {
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

* [driverDetails](docs/sdk/README.md#driverdetails) - Driver Details
* [driverRaceProjectionsEntryList](docs/sdk/README.md#driverraceprojectionsentrylist) - Driver Race Projections (Entry List)
* [drivers](docs/sdk/README.md#drivers) - Drivers
* [raceResults](docs/sdk/README.md#raceresults) - Race Results
* [racesSchedule](docs/sdk/README.md#racesschedule) - Races / Schedule
* [series](docs/sdk/README.md#series) - Series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
