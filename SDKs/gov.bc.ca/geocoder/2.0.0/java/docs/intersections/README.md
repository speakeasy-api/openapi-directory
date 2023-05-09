# intersections

### Available Operations

* [getAddressesOutputFormat](#getaddressesoutputformat) - Geocode an address
* [getIntersectionsNearOutputFormat](#getintersectionsnearoutputformat) - Find intersections near to a geographic point
* [getIntersectionsNearestOutputFormat](#getintersectionsnearestoutputformat) - Find nearest intersection to a geographic point
* [getIntersectionsWithinOutputFormat](#getintersectionswithinoutputformat) - Find intersections in a geographic area
* [getIntersectionsIntersectionIDOutputFormat](#getintersectionsintersectionidoutputformat) - Get an intersection by its unique ID

## getAddressesOutputFormat

Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.

### Example Usage

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
                .setSecurity(new Security("quis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest(GetAddressesOutputFormatOutputFormatEnum.JSON) {{
                addressString = "deserunt";
                autoComplete = false;
                bbox = "perferendis";
                brief = false;
                centre = "ipsam";
                civicNumber = "repellendus";
                civicNumberSuffix = "sapiente";
                echo = false;
                extrapolate = false;
                interpolation = GetAddressesOutputFormatInterpolationEnum.NONE;
                localities = "odit";
                localityName = "at";
                locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum.ROUTING_POINT;
                matchPrecision = "maiores";
                matchPrecisionNot = "molestiae";
                maxDistance = 7991.59;
                maxResults = 800911L;
                minScore = 461479L;
                notLocalities = "totam";
                outputSRS = GetAddressesOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                parcelPoint = "dolorum";
                provinceCode = "dicta";
                setBack = 720633L;
                siteName = "officia";
                streetDirection = GetAddressesOutputFormatStreetDirectionEnum.NO;
                streetName = "fugit";
                streetQualifier = "deleniti";
                streetType = "hic";
                unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum.SUITE;
                unitNumber = "totam";
                unitNumberSuffix = "beatae";
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

## getIntersectionsNearOutputFormat

Represents intersections near a given point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntersectionsNearOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetIntersectionsNearOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetIntersectionsNearOutputFormatRequest;
import org.openapis.openapi.models.operations.GetIntersectionsNearOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntersectionsNearOutputFormatRequest req = new GetIntersectionsNearOutputFormatRequest(GetIntersectionsNearOutputFormatOutputFormatEnum.KML, GetIntersectionsNearOutputFormatOutputSrsEnum.THREE_THOUSAND_AND_FIVE, "qui") {{
                maxDegree = 774234L;
                maxDistance = 736918L;
                maxResults = 456150L;
                minDegree = 216550L;
            }};            

            GetIntersectionsNearOutputFormatResponse res = sdk.intersections.getIntersectionsNearOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntersectionsNearestOutputFormat

Represents the closest intersection to a given point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntersectionsNearestOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetIntersectionsNearestOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetIntersectionsNearestOutputFormatRequest;
import org.openapis.openapi.models.operations.GetIntersectionsNearestOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntersectionsNearestOutputFormatRequest req = new GetIntersectionsNearestOutputFormatRequest(GetIntersectionsNearestOutputFormatOutputFormatEnum.JSON, "perferendis") {{
                maxDegree = 324141L;
                maxDistance = 617636L;
                minDegree = 149675L;
                outputSRS = GetIntersectionsNearestOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
            }};            

            GetIntersectionsNearestOutputFormatResponse res = sdk.intersections.getIntersectionsNearestOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntersectionsWithinOutputFormat

Represents all intersections within a given area

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntersectionsWithinOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetIntersectionsWithinOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetIntersectionsWithinOutputFormatRequest;
import org.openapis.openapi.models.operations.GetIntersectionsWithinOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntersectionsWithinOutputFormatRequest req = new GetIntersectionsWithinOutputFormatRequest("natus", GetIntersectionsWithinOutputFormatOutputFormatEnum.XHTML) {{
                maxDegree = 943749L;
                maxResults = 902599L;
                minDegree = 681820L;
                outputSRS = GetIntersectionsWithinOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
            }};            

            GetIntersectionsWithinOutputFormatResponse res = sdk.intersections.getIntersectionsWithinOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIntersectionsIntersectionIDOutputFormat

Represents a individual intersection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetIntersectionsIntersectionIDOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetIntersectionsIntersectionIDOutputFormatRequest;
import org.openapis.openapi.models.operations.GetIntersectionsIntersectionIDOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIntersectionsIntersectionIDOutputFormatRequest req = new GetIntersectionsIntersectionIDOutputFormatRequest("iste", GetIntersectionsIntersectionIDOutputFormatOutputFormatEnum.KML) {{
                outputSRS = GetIntersectionsIntersectionIDOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_ELEVEN;
            }};            

            GetIntersectionsIntersectionIDOutputFormatResponse res = sdk.intersections.getIntersectionsIntersectionIDOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
