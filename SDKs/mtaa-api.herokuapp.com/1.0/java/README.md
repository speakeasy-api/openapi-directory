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

import org.openapis.openapi.models.operations.DistrictsInARegionRequest;
import org.openapis.openapi.models.operations.DistrictsInARegionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistrictsInARegionRequest req = new DistrictsInARegionRequest() {{
                country = "Malta";
                region = "provident";
            }}            

            DistrictsInARegionResponse res = sdk.districtsInRegion.districtsInARegion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### districtsInRegion

* `districtsInARegion` - Returns all districts in region

### streetsInAWard

* `streetsInAWard` - Returns all streets in a ward

### tanzaniaRegions

* `tanzaniaRegions` - Returns all regions present in Tanzania

### wardsInADistrict

* `wardsInADistrict` - Returns all wards in a district

### neighborhoodInAStreet

* `neighborhoodInAStreet` - Returns all neighborhood in a street
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
