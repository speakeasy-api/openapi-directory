# occupants

### Available Operations

* [getOccupantsAddressesOutputFormat](#getoccupantsaddressesoutputformat) - Geocode an address and identify site occupants
* [getOccupantsNearOutputFormat](#getoccupantsnearoutputformat) - Find occupants of sites near to a geographic point
* [getOccupantsNearestOutputFormat](#getoccupantsnearestoutputformat) - Find occupants of the site nearest to a geographic point
* [getOccupantsWithinOutputFormat](#getoccupantswithinoutputformat) - Find occupants of sites in a geographic area
* [getOccupantsOccupantIDOutputFormat](#getoccupantsoccupantidoutputformat) - Get an occupant (of a site) by its unique ID

## getOccupantsAddressesOutputFormat

Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatInterpolationEnum;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatResponse;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatStreetDirectionEnum;
import org.openapis.openapi.models.operations.GetOccupantsAddressesOutputFormatUnitDesignatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOccupantsAddressesOutputFormatRequest req = new GetOccupantsAddressesOutputFormatRequest(GetOccupantsAddressesOutputFormatOutputFormatEnum.JSON) {{
                addressString = "ipsa";
                autoComplete = false;
                bbox = "reiciendis";
                brief = false;
                centre = "est";
                civicNumber = "mollitia";
                civicNumberSuffix = "laborum";
                echo = false;
                extrapolate = false;
                interpolation = GetOccupantsAddressesOutputFormatInterpolationEnum.ADAPTIVE;
                localities = "dolorem";
                localityName = "corporis";
                locationDescriptor = GetOccupantsAddressesOutputFormatLocationDescriptorEnum.ANY;
                matchPrecision = "nobis";
                matchPrecisionNot = "enim";
                maxDistance = 6078.31;
                maxResults = 363711L;
                minScore = 325047L;
                notLocalities = "excepturi";
                outputSRS = GetOccupantsAddressesOutputFormatOutputSrsEnum.FOUR_THOUSAND_THREE_HUNDRED_AND_TWENTY_SIX;
                parcelPoint = "iure";
                provinceCode = "culpa";
                setBack = 988374L;
                siteName = "sapiente";
                streetDirection = GetOccupantsAddressesOutputFormatStreetDirectionEnum.S;
                streetName = "mollitia";
                streetQualifier = "dolorem";
                streetType = "culpa";
                tags = "consequuntur";
                unitDesignator = GetOccupantsAddressesOutputFormatUnitDesignatorEnum.UPPR;
                unitNumber = "mollitia";
                unitNumberSuffix = "occaecati";
            }};            

            GetOccupantsAddressesOutputFormatResponse res = sdk.occupants.getOccupantsAddressesOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOccupantsNearOutputFormat

Represents occupants near a given point in order of closest to farthest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOccupantsNearOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetOccupantsNearOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOccupantsNearOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOccupantsNearOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOccupantsNearOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOccupantsNearOutputFormatRequest req = new GetOccupantsNearOutputFormatRequest(GetOccupantsNearOutputFormatOutputFormatEnum.XHTML, "quam") {{
                brief = false;
                locationDescriptor = GetOccupantsNearOutputFormatLocationDescriptorEnum.FRONT_DOOR_POINT;
                maxDistance = 244425L;
                maxResults = 623510L;
                outputSRS = GetOccupantsNearOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                setBack = 338007L;
                tags = "vitae";
            }};            

            GetOccupantsNearOutputFormatResponse res = sdk.occupants.getOccupantsNearOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOccupantsNearestOutputFormat

Represents the closest occupant to a given point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOccupantsNearestOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetOccupantsNearestOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOccupantsNearestOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOccupantsNearestOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOccupantsNearestOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOccupantsNearestOutputFormatRequest req = new GetOccupantsNearestOutputFormatRequest(GetOccupantsNearestOutputFormatOutputFormatEnum.GML, "enim") {{
                brief = false;
                locationDescriptor = GetOccupantsNearestOutputFormatLocationDescriptorEnum.ANY;
                maxDistance = 778346L;
                outputSRS = GetOccupantsNearestOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                setBack = 949572L;
                tags = "ipsam";
            }};            

            GetOccupantsNearestOutputFormatResponse res = sdk.occupants.getOccupantsNearestOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOccupantsWithinOutputFormat

Represents all occupants within a given area

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOccupantsWithinOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetOccupantsWithinOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOccupantsWithinOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOccupantsWithinOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOccupantsWithinOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOccupantsWithinOutputFormatRequest req = new GetOccupantsWithinOutputFormatRequest("possimus", GetOccupantsWithinOutputFormatOutputFormatEnum.JSON) {{
                brief = false;
                locationDescriptor = GetOccupantsWithinOutputFormatLocationDescriptorEnum.ANY;
                maxResults = 622846L;
                outputSRS = GetOccupantsWithinOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                setBack = 673660L;
                tags = "quasi";
            }};            

            GetOccupantsWithinOutputFormatResponse res = sdk.occupants.getOccupantsWithinOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOccupantsOccupantIDOutputFormat

Represents an individual occupant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetOccupantsOccupantIDOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetOccupantsOccupantIDOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetOccupantsOccupantIDOutputFormatRequest;
import org.openapis.openapi.models.operations.GetOccupantsOccupantIDOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOccupantsOccupantIDOutputFormatRequest req = new GetOccupantsOccupantIDOutputFormatRequest("voluptatibus", GetOccupantsOccupantIDOutputFormatOutputFormatEnum.SHPZ) {{
                brief = false;
                locationDescriptor = GetOccupantsOccupantIDOutputFormatLocationDescriptorEnum.FRONT_DOOR_POINT;
                outputSRS = GetOccupantsOccupantIDOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
                setBack = 976762L;
            }};            

            GetOccupantsOccupantIDOutputFormatResponse res = sdk.occupants.getOccupantsOccupantIDOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
