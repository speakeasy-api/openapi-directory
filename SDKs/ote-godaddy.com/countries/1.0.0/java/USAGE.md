<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCountriesOrderEnum;
import org.openapis.openapi.models.operations.GetCountriesSortEnum;
import org.openapis.openapi.models.operations.GetCountriesQueryParams;
import org.openapis.openapi.models.operations.GetCountriesRequest;
import org.openapis.openapi.models.operations.GetCountriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCountriesRequest req = new GetCountriesRequest() {{
                queryParams = new GetCountriesQueryParams() {{
                    marketId = "corrupti";
                    order = "descending";
                    regionName = "distinctio";
                    regionTypeId = 844266;
                    sort = "label";
                }};
            }};            

            GetCountriesResponse res = sdk.v1.getCountries(req);

            if (res.arrayOfCountrySummary.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->