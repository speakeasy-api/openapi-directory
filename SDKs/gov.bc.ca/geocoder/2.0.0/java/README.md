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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatInterpolationEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatStreetDirectionEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatUnitDesignatorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest() {{
                addressString = "corrupti";
                autoComplete = false;
                bbox = "provident";
                brief = false;
                centre = "distinctio";
                civicNumber = "quibusdam";
                civicNumberSuffix = "unde";
                echo = false;
                extrapolate = false;
                interpolation = "none";
                localities = "corrupti";
                localityName = "illum";
                locationDescriptor = "frontDoorPoint";
                matchPrecision = "error";
                matchPrecisionNot = "deserunt";
                maxDistance = 3843.82;
                maxResults = 437587;
                minScore = 297534;
                notLocalities = "debitis";
                outputFormat = "json";
                outputSRS = "26911";
                parcelPoint = "tempora";
                provinceCode = "suscipit";
                setBack = 477665;
                siteName = "minus";
                streetDirection = "SE";
                streetName = "voluptatum";
                streetQualifier = "iusto";
                streetType = "excepturi";
                unitDesignator = "PAD";
                unitNumber = "recusandae";
                unitNumberSuffix = "temporibus";
            }}            

            GetAddressesOutputFormatResponse res = sdk.intersections.getAddressesOutputFormat(req);

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


### intersections

* `getAddressesOutputFormat` - Geocode an address
* `getIntersectionsNearOutputFormat` - Find intersections near to a geographic point
* `getIntersectionsNearestOutputFormat` - Find nearest intersection to a geographic point
* `getIntersectionsWithinOutputFormat` - Find intersections in a geographic area
* `getIntersectionsIntersectionIDOutputFormat` - Get an intersection by its unique ID

### occupants

* `getOccupantsAddressesOutputFormat` - Geocode an address and identify site occupants
* `getOccupantsNearOutputFormat` - Find occupants of sites near to a geographic point
* `getOccupantsNearestOutputFormat` - Find occupants of the site nearest to a geographic point
* `getOccupantsWithinOutputFormat` - Find occupants of sites in a geographic area
* `getOccupantsOccupantIDOutputFormat` - Get an occupant (of a site) by its unique ID

### parcels

* `getParcelsPidsSiteIDOutputFormat` - Get a comma-separated string of all pids for a given site

### sites

* `getAddressesOutputFormat` - Geocode an address
* `getSitesNearOutputFormat` - Find sites near to a geographic point
* `getSitesNearestOutputFormat` - Find the site nearest to a geographic point
* `getSitesWithinOutputFormat` - Find sites in a geographic area
* `getSitesSiteIDOutputFormat` - Get a site by its unique ID
* `getSitesSiteIDSubsitesOutputFormat` - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
