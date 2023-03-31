<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FacetsSortKeysEnum;
import org.openapis.openapi.models.operations.FacetsSourceEnum;
import org.openapis.openapi.models.operations.FacetsQueryParams;
import org.openapis.openapi.models.operations.FacetsRequest;
import org.openapis.openapi.models.operations.FacetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FacetsRequest req = new FacetsRequest() {{
                queryParams = new FacetsQueryParams() {{
                    count = 548814;
                    endDate = "2021-07-27";
                    facetFilters = "quibusdam";
                    searchTerms = "unde";
                    sortKeys = "updated,,desc";
                    source = "ADE";
                    spatial = "illum";
                    startDate = "2022-05-18";
                    startIndex = 645894;
                }};
            }};            

            FacetsResponse res = sdk.swaggerDocs.facets(req);

            if (res.facets200ApplicationNsidcfacetsPlusXmlString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->