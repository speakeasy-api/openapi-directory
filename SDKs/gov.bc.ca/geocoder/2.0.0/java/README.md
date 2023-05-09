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
import org.openapis.openapi.models.operations.GetAddressesOutputFormatInterpolationEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatResponse;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatStreetDirectionEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatUnitDesignatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest(GetAddressesOutputFormatOutputFormatEnum.GML) {{
                addressString = "distinctio";
                autoComplete = false;
                bbox = "quibusdam";
                brief = false;
                centre = "unde";
                civicNumber = "nulla";
                civicNumberSuffix = "corrupti";
                echo = false;
                extrapolate = false;
                interpolation = GetAddressesOutputFormatInterpolationEnum.NONE;
                localities = "vel";
                localityName = "error";
                locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum.PARCEL_POINT;
                matchPrecision = "suscipit";
                matchPrecisionNot = "iure";
                maxDistance = 2975.34;
                maxResults = 891773L;
                minScore = 56713L;
                notLocalities = "delectus";
                outputSRS = GetAddressesOutputFormatOutputSrsEnum.THREE_THOUSAND_AND_FIVE;
                parcelPoint = "suscipit";
                provinceCode = "molestiae";
                setBack = 791725L;
                siteName = "placeat";
                streetDirection = GetAddressesOutputFormatStreetDirectionEnum.NE;
                streetName = "iusto";
                streetQualifier = "excepturi";
                streetType = "nisi";
                unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum.UNIT;
                unitNumber = "temporibus";
                unitNumberSuffix = "ab";
            }};            

            GetAddressesOutputFormatResponse res = sdk.intersections.getAddressesOutputFormat(req);

            if (res.statusCode == 200) {
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


### [intersections](docs/intersections/README.md)

* [getAddressesOutputFormat](docs/intersections/README.md#getaddressesoutputformat) - Geocode an address
* [getIntersectionsNearOutputFormat](docs/intersections/README.md#getintersectionsnearoutputformat) - Find intersections near to a geographic point
* [getIntersectionsNearestOutputFormat](docs/intersections/README.md#getintersectionsnearestoutputformat) - Find nearest intersection to a geographic point
* [getIntersectionsWithinOutputFormat](docs/intersections/README.md#getintersectionswithinoutputformat) - Find intersections in a geographic area
* [getIntersectionsIntersectionIDOutputFormat](docs/intersections/README.md#getintersectionsintersectionidoutputformat) - Get an intersection by its unique ID

### [occupants](docs/occupants/README.md)

* [getOccupantsAddressesOutputFormat](docs/occupants/README.md#getoccupantsaddressesoutputformat) - Geocode an address and identify site occupants
* [getOccupantsNearOutputFormat](docs/occupants/README.md#getoccupantsnearoutputformat) - Find occupants of sites near to a geographic point
* [getOccupantsNearestOutputFormat](docs/occupants/README.md#getoccupantsnearestoutputformat) - Find occupants of the site nearest to a geographic point
* [getOccupantsWithinOutputFormat](docs/occupants/README.md#getoccupantswithinoutputformat) - Find occupants of sites in a geographic area
* [getOccupantsOccupantIDOutputFormat](docs/occupants/README.md#getoccupantsoccupantidoutputformat) - Get an occupant (of a site) by its unique ID

### [parcels](docs/parcels/README.md)

* [getParcelsPidsSiteIDOutputFormat](docs/parcels/README.md#getparcelspidssiteidoutputformat) - Get a comma-separated string of all pids for a given site

### [sites](docs/sites/README.md)

* [getAddressesOutputFormat](docs/sites/README.md#getaddressesoutputformat) - Geocode an address
* [getSitesNearOutputFormat](docs/sites/README.md#getsitesnearoutputformat) - Find sites near to a geographic point
* [getSitesNearestOutputFormat](docs/sites/README.md#getsitesnearestoutputformat) - Find the site nearest to a geographic point
* [getSitesWithinOutputFormat](docs/sites/README.md#getsiteswithinoutputformat) - Find sites in a geographic area
* [getSitesSiteIDOutputFormat](docs/sites/README.md#getsitessiteidoutputformat) - Get a site by its unique ID
* [getSitesSiteIDSubsitesOutputFormat](docs/sites/README.md#getsitessiteidsubsitesoutputformat) - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
