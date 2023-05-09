# countries

### Available Operations

* [getCountriesJson](#getcountriesjson) - Retrieve all Countries.
* [getCountriesCountryCodeJson](#getcountriescountrycodejson) - Retrieve a single Country information.
* [getCountriesCountryCodeRegionsJson](#getcountriescountrycoderegionsjson) - Retrieve all Regions from a single Country.
* [getCountriesCountryCodeRegionsRegionCodeJson](#getcountriescountrycoderegionsregioncodejson) - Retrieve a single Region information object.

## getCountriesJson

Retrieve all Countries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountriesJsonRequest;
import org.openapis.openapi.models.operations.GetCountriesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesJsonRequest req = new GetCountriesJsonRequest("hic", "saepe");            

            GetCountriesJsonResponse res = sdk.countries.getCountriesJson(req);

            if (res.countries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCountriesCountryCodeJson

Retrieve a single Country information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountriesCountryCodeJsonRequest;
import org.openapis.openapi.models.operations.GetCountriesCountryCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesCountryCodeJsonRequest req = new GetCountriesCountryCodeJsonRequest("fuga", "in", "corporis");            

            GetCountriesCountryCodeJsonResponse res = sdk.countries.getCountriesCountryCodeJson(req);

            if (res.country != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            GetCountriesCountryCodeRegionsJsonRequest req = new GetCountriesCountryCodeRegionsJsonRequest("iste", "iure", "saepe");            

            GetCountriesCountryCodeRegionsJsonResponse res = sdk.countries.getCountriesCountryCodeRegionsJson(req);

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

            GetCountriesCountryCodeRegionsRegionCodeJsonRequest req = new GetCountriesCountryCodeRegionsRegionCodeJsonRequest("quidem", "architecto", "ipsa", "reiciendis");            

            GetCountriesCountryCodeRegionsRegionCodeJsonResponse res = sdk.countries.getCountriesCountryCodeRegionsRegionCodeJson(req);

            if (res.region != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
