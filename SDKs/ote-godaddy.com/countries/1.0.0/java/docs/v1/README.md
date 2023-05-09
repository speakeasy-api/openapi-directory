# v1

### Available Operations

* [getCountries](#getcountries) - Retrieves summary country information for the provided marketId and filters
* [getCountry](#getcountry) - Retrieves country and summary state information for provided countryKey

## getCountries

Authorization is not required

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountriesOrderEnum;
import org.openapis.openapi.models.operations.GetCountriesRequest;
import org.openapis.openapi.models.operations.GetCountriesResponse;
import org.openapis.openapi.models.operations.GetCountriesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesRequest req = new GetCountriesRequest("nulla") {{
                order = GetCountriesOrderEnum.DESCENDING;
                regionName = "illum";
                regionTypeId = 423655L;
                sort = GetCountriesSortEnum.LABEL;
            }};            

            GetCountriesResponse res = sdk.v1.getCountries(req);

            if (res.arrayOfCountrySummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCountry

Authorization is not required

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCountryOrderEnum;
import org.openapis.openapi.models.operations.GetCountryRequest;
import org.openapis.openapi.models.operations.GetCountryResponse;
import org.openapis.openapi.models.operations.GetCountrySortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountryRequest req = new GetCountryRequest("deserunt", "suscipit") {{
                order = GetCountryOrderEnum.ASCENDING;
                sort = GetCountrySortEnum.KEY;
            }};            

            GetCountryResponse res = sdk.v1.getCountry(req);

            if (res.arrayOfCountry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
