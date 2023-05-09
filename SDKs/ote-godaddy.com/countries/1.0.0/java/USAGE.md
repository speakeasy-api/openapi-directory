<!-- Start SDK Example Usage -->
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

            GetCountriesRequest req = new GetCountriesRequest("corrupti") {{
                order = GetCountriesOrderEnum.DESCENDING;
                regionName = "distinctio";
                regionTypeId = 844266L;
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
<!-- End SDK Example Usage -->