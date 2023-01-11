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

            FacetsRequest req = new FacetsRequest() {{
                queryParams = new FacetsQueryParams() {{
                    count = 8717895732742165505;
                    endDate = "2006-05-01";
                    facetFilters = "culpa";
                    searchTerms = "expedita";
                    sortKeys = "updated,,desc";
                    source = "NSIDC";
                    spatial = "expedita";
                    startDate = "1978-05-28";
                    startIndex = 8274930044578894929;
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