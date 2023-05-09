# swaggerDocs

## Overview

Dataset search

### Available Operations

* [facets](#facets) - View the facet information corresponding to a search
* [id](#id) - Suggest search terms based on a partial query
* [openSearch](#opensearch) - Search documents using the OpenSearch 1.1 Specification
* [opensearchDescription](#opensearchdescription) - Describes the web interface of NSIDC's data search engine

## facets

In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.

### Example Usage

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
                count = 384382L;
                endDate = LocalDate.parse("2022-09-14");
                facetFilters = "debitis";
                searchTerms = "ipsa";
                sortKeys = FacetsSortKeysEnum.UPDATED_DESC;
                source = FacetsSourceEnum.NSIDC;
                spatial = "suscipit";
                startDate = LocalDate.parse("2022-03-18");
                startIndex = 812169L;
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

## id

In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdRequest;
import org.openapis.openapi.models.operations.IdResponse;
import org.openapis.openapi.models.operations.IdSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdRequest req = new IdRequest("voluptatum", IdSourceEnum.NSIDC);            

            IdResponse res = sdk.swaggerDocs.id(req);

            if (res.id200ApplicationXSuggestionsPlusJsonString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## openSearch

This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpenSearchRequest;
import org.openapis.openapi.models.operations.OpenSearchResponse;
import org.openapis.openapi.models.operations.OpenSearchSortKeysEnum;
import org.openapis.openapi.models.operations.OpenSearchSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpenSearchRequest req = new OpenSearchRequest() {{
                count = 568045L;
                endDate = LocalDate.parse("2022-01-28");
                facetFilters = "temporibus";
                searchTerms = "ab";
                sortKeys = OpenSearchSortKeysEnum.SPATIAL_AREA_DESC;
                source = OpenSearchSourceEnum.NSIDC;
                spatial = "deserunt";
                startDate = LocalDate.parse("2022-08-19");
                startIndex = 832620L;
            }};            

            OpenSearchResponse res = sdk.swaggerDocs.openSearch(req);

            if (res.openSearch200ApplicationAtomPlusXmlString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## opensearchDescription

Describes the web interface of NSIDC's data search engine

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OpensearchDescriptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OpensearchDescriptionResponse res = sdk.swaggerDocs.opensearchDescription();

            if (res.opensearchDescription200ApplicationOpensearchdescriptionPlusXmlString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
