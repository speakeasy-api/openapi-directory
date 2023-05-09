<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FacetsRequest;
import org.openapis.openapi.models.operations.FacetsResponse;
import org.openapis.openapi.models.operations.FacetsSortKeysEnum;
import org.openapis.openapi.models.operations.FacetsSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FacetsRequest req = new FacetsRequest() {{
                count = 548814L;
                endDate = LocalDate.parse("2021-07-27");
                facetFilters = "quibusdam";
                searchTerms = "unde";
                sortKeys = FacetsSortKeysEnum.UPDATED_DESC;
                source = FacetsSourceEnum.ADE;
                spatial = "illum";
                startDate = LocalDate.parse("2022-05-18");
                startIndex = 645894L;
            }};            

            FacetsResponse res = sdk.swaggerDocs.facets(req);

            if (res.facets200ApplicationNsidcfacetsPlusXmlString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->