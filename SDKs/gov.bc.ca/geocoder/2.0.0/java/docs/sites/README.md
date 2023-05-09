# sites

### Available Operations

* [getAddressesOutputFormat](#getaddressesoutputformat) - Geocode an address
* [getSitesNearOutputFormat](#getsitesnearoutputformat) - Find sites near to a geographic point
* [getSitesNearestOutputFormat](#getsitesnearestoutputformat) - Find the site nearest to a geographic point
* [getSitesWithinOutputFormat](#getsiteswithinoutputformat) - Find sites in a geographic area
* [getSitesSiteIDOutputFormat](#getsitessiteidoutputformat) - Get a site by its unique ID
* [getSitesSiteIDSubsitesOutputFormat](#getsitessiteidsubsitesoutputformat) - Represents all subsites of a given site

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
                .setSecurity(new Security("cum") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest(GetAddressesOutputFormatOutputFormatEnum.JSON) {{
                addressString = "doloremque";
                autoComplete = false;
                bbox = "reprehenderit";
                brief = false;
                centre = "ut";
                civicNumber = "maiores";
                civicNumberSuffix = "dicta";
                echo = false;
                extrapolate = false;
                interpolation = GetAddressesOutputFormatInterpolationEnum.LINEAR;
                localities = "dolore";
                localityName = "iusto";
                locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum.ANY;
                matchPrecision = "harum";
                matchPrecisionNot = "enim";
                maxDistance = 8804.76;
                maxResults = 414263L;
                minScore = 918236L;
                notLocalities = "quae";
                outputSRS = GetAddressesOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                parcelPoint = "quidem";
                provinceCode = "molestias";
                setBack = 566602L;
                siteName = "pariatur";
                streetDirection = GetAddressesOutputFormatStreetDirectionEnum.E;
                streetName = "praesentium";
                streetQualifier = "rem";
                streetType = "voluptates";
                unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum.BLDG;
                unitNumber = "repudiandae";
                unitNumberSuffix = "sint";
            }};            

            GetAddressesOutputFormatResponse res = sdk.sites.getAddressesOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitesNearOutputFormat

Represents sites near a given point in the order of closest to farthest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesNearOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetSitesNearOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetSitesNearOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetSitesNearOutputFormatRequest;
import org.openapis.openapi.models.operations.GetSitesNearOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitesNearOutputFormatRequest req = new GetSitesNearOutputFormatRequest(GetSitesNearOutputFormatOutputFormatEnum.SHPZ, "incidunt") {{
                brief = false;
                excludeUnits = false;
                locationDescriptor = GetSitesNearOutputFormatLocationDescriptorEnum.ACCESS_POINT;
                maxDistance = 9356L;
                maxResults = 667411L;
                onlyCivic = false;
                outputSRS = GetSitesNearOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                setBack = 131797L;
            }};            

            GetSitesNearOutputFormatResponse res = sdk.sites.getSitesNearOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitesNearestOutputFormat

Represents the site nearest a given point

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesNearestOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetSitesNearestOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetSitesNearestOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetSitesNearestOutputFormatRequest;
import org.openapis.openapi.models.operations.GetSitesNearestOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitesNearestOutputFormatRequest req = new GetSitesNearestOutputFormatRequest(GetSitesNearestOutputFormatOutputFormatEnum.CSV, "quibusdam") {{
                brief = false;
                excludeUnits = false;
                locationDescriptor = GetSitesNearestOutputFormatLocationDescriptorEnum.ACCESS_POINT;
                maxDistance = 264730L;
                onlyCivic = false;
                outputSRS = GetSitesNearestOutputFormatOutputSrsEnum.FOUR_THOUSAND_TWO_HUNDRED_AND_SIXTY_NINE;
                setBack = 397821L;
            }};            

            GetSitesNearestOutputFormatResponse res = sdk.sites.getSitesNearestOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitesWithinOutputFormat

Represents sites within a given area

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesWithinOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetSitesWithinOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetSitesWithinOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetSitesWithinOutputFormatRequest;
import org.openapis.openapi.models.operations.GetSitesWithinOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitesWithinOutputFormatRequest req = new GetSitesWithinOutputFormatRequest("quos", GetSitesWithinOutputFormatOutputFormatEnum.JSON) {{
                brief = false;
                excludeUnits = false;
                locationDescriptor = GetSitesWithinOutputFormatLocationDescriptorEnum.ANY;
                maxResults = 828940L;
                onlyCivic = false;
                outputSRS = GetSitesWithinOutputFormatOutputSrsEnum.THREE_THOUSAND_AND_FIVE;
                setBack = 4695L;
            }};            

            GetSitesWithinOutputFormatResponse res = sdk.sites.getSitesWithinOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitesSiteIDOutputFormat

Represents an individual site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesSiteIDOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetSitesSiteIDOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetSitesSiteIDOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetSitesSiteIDOutputFormatRequest;
import org.openapis.openapi.models.operations.GetSitesSiteIDOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitesSiteIDOutputFormatRequest req = new GetSitesSiteIDOutputFormatRequest(GetSitesSiteIDOutputFormatOutputFormatEnum.GML, "excepturi") {{
                brief = false;
                locationDescriptor = GetSitesSiteIDOutputFormatLocationDescriptorEnum.ACCESS_POINT;
                outputSRS = GetSitesSiteIDOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_NINE;
                setBack = 735194L;
            }};            

            GetSitesSiteIDOutputFormatResponse res = sdk.sites.getSitesSiteIDOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSitesSiteIDSubsitesOutputFormat

Represents all subsites of a given site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetSitesSiteIDSubsitesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetSitesSiteIDSubsitesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetSitesSiteIDSubsitesOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSitesSiteIDSubsitesOutputFormatRequest req = new GetSitesSiteIDSubsitesOutputFormatRequest(GetSitesSiteIDSubsitesOutputFormatOutputFormatEnum.SHPZ, "eum") {{
                brief = false;
                locationDescriptor = GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnum.ACCESS_POINT;
                outputSRS = GetSitesSiteIDSubsitesOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_TEN;
                setBack = 576157L;
            }};            

            GetSitesSiteIDSubsitesOutputFormatResponse res = sdk.sites.getSitesSiteIDSubsitesOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
