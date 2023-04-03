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

import org.openapis.openapi.models.operations.GetAllFacilitiesSecurity;
import org.openapis.openapi.models.operations.GetAllFacilitiesAcceptEnum;
import org.openapis.openapi.models.operations.GetAllFacilitiesRequest;
import org.openapis.openapi.models.operations.GetAllFacilitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllFacilitiesRequest req = new GetAllFacilitiesRequest() {{
                accept = "application/vnd.geo+json";
            }}            

            GetAllFacilitiesResponse res = sdk.facilities.getAllFacilities(req, new GetAllFacilitiesSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.geoFacilitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### facilities

* `getAllFacilities` - Bulk download information for all facilities
* `getFacilitiesByLocation` - Query facilities by location or IDs, with optional filters
* `getFacilityById` - Retrieve a specific facility by ID
* `getFacilityIds` - Bulk download of all facility IDs
* `getNearbyFacilities` - Retrieve all VA health facilities reachable by driving within the specified time period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
