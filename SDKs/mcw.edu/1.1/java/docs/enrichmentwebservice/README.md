# enrichmentWebService

## Overview

Enrichment Web Service

### Available Operations

* [getEnrichmentDataUsingPOST](#getenrichmentdatausingpost) - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* [getEnrichmentDataUsingPOST1](#getenrichmentdatausingpost1) - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

## getEnrichmentDataUsingPOST

Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnrichmentDataUsingPOSTResponse;
import org.openapis.openapi.models.shared.EnrichmentGeneRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.EnrichmentGeneRequest req = new EnrichmentGeneRequest() {{
                accId = "rerum";
                geneSymbols = new String[]{{
                    add("magnam"),
                }};
                species = "cumque";
            }};            

            GetEnrichmentDataUsingPOSTResponse res = sdk.enrichmentWebService.getEnrichmentDataUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnrichmentDataUsingPOST1

Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnrichmentDataUsingPOST1Response;
import org.openapis.openapi.models.shared.EnrichmentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.EnrichmentRequest req = new EnrichmentRequest() {{
                aspect = "facere";
                genes = new String[]{{
                    add("aliquid"),
                    add("laborum"),
                }};
                species = "accusamus";
            }};            

            GetEnrichmentDataUsingPOST1Response res = sdk.enrichmentWebService.getEnrichmentDataUsingPOST1(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
