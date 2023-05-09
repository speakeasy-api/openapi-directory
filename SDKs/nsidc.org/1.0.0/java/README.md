# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [swaggerDocs](docs/swaggerdocs/README.md)

* [facets](docs/swaggerdocs/README.md#facets) - View the facet information corresponding to a search
* [id](docs/swaggerdocs/README.md#id) - Suggest search terms based on a partial query
* [openSearch](docs/swaggerdocs/README.md#opensearch) - Search documents using the OpenSearch 1.1 Specification
* [opensearchDescription](docs/swaggerdocs/README.md#opensearchdescription) - Describes the web interface of NSIDC's data search engine
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
