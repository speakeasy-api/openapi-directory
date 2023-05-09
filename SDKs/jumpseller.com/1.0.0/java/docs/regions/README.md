# regions

### Available Operations

* [getCountriesCountryCodeRegionsJson](#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [getCountriesCountryCodeRegionsRegionCodeJson](#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

## getCountriesCountryCodeRegionsJson

Retrieve all Regions from a single Country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountriesCountryCodeRegionsJsonRequest;
import org.openapis.openapi.models.operations.GetCountriesCountryCodeRegionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesCountryCodeRegionsJsonRequest req = new GetCountriesCountryCodeRegionsJsonRequest("tempora", "voluptate", "reiciendis");            

            GetCountriesCountryCodeRegionsJsonResponse res = sdk.regions.getCountriesCountryCodeRegionsJson(req);

            if (res.regions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCountriesCountryCodeRegionsRegionCodeJson

Retrieve a single Region information object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountriesCountryCodeRegionsRegionCodeJsonRequest;
import org.openapis.openapi.models.operations.GetCountriesCountryCodeRegionsRegionCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesCountryCodeRegionsRegionCodeJsonRequest req = new GetCountriesCountryCodeRegionsRegionCodeJsonRequest("ex", "sit", "non", "officiis");            

            GetCountriesCountryCodeRegionsRegionCodeJsonResponse res = sdk.regions.getCountriesCountryCodeRegionsRegionCodeJson(req);

            if (res.region != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
