# geocoding

### Available Operations

* [getSearchVersionNumberGeocodeQueryExt](#getsearchversionnumbergeocodequeryext) - Geocode
* [getSearchVersionNumberStructuredGeocodeExt](#getsearchversionnumberstructuredgeocodeext) - Structured Geocode

## getSearchVersionNumberGeocodeQueryExt

Geocode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberGeocodeQueryExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberGeocodeQueryExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ViewEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberGeocodeQueryExtRequest req = new GetSearchVersionNumberGeocodeQueryExtRequest(ExtEnum.JS, "dolor", VersionNumberEnum.TWO) {{
                btmRight = "natus";
                countrySet = "laboriosam";
                extendedPostalCodesFor = "hic";
                language = "saepe";
                lat = 6818.2;
                limit = 449950L;
                lon = 3595.08;
                ofs = 613064L;
                radius = 437032L;
                storeResult = false;
                topLeft = "saepe";
                typeahead = false;
                view = ViewEnum.IL;
            }};            

            GetSearchVersionNumberGeocodeQueryExtResponse res = sdk.geocoding.getSearchVersionNumberGeocodeQueryExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSearchVersionNumberStructuredGeocodeExt

Structured Geocode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSearchVersionNumberStructuredGeocodeExtRequest;
import org.openapis.openapi.models.operations.GetSearchVersionNumberStructuredGeocodeExtResponse;
import org.openapis.openapi.models.shared.ExtEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VersionNumberEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSearchVersionNumberStructuredGeocodeExtRequest req = new GetSearchVersionNumberStructuredGeocodeExtRequest("ipsa", ExtEnum.XML, VersionNumberEnum.TWO) {{
                countrySecondarySubdivision = "est";
                countrySubdivision = "mollitia";
                countryTertiarySubdivision = "laborum";
                crossStreet = "dolores";
                extendedPostalCodesFor = "dolorem";
                language = "corporis";
                limit = 128926L;
                municipality = "nobis";
                municipalitySubdivision = "enim";
                ofs = 607831L;
                postalCode = "35046";
                streetName = "doloribus";
                streetNumber = "sapiente";
            }};            

            GetSearchVersionNumberStructuredGeocodeExtResponse res = sdk.geocoding.getSearchVersionNumberStructuredGeocodeExt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
