<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetCountriesRequest req = new GetCountriesRequest() {{
                queryParams = new GetCountriesQueryParams() {{
                    marketId = "maxime";
                    order = "ascending";
                    regionName = "nihil";
                    regionTypeId = 7342218420644743213;
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