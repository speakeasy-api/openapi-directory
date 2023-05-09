# ontol

## Overview

extract a subgraph from an ontology

### Available Operations

* [getExtractOntologySubgraphResource](#getextractontologysubgraphresource) - Extract a subgraph from an ontology
* [getInformationContentResource](#getinformationcontentresource) - Returns information content (IC) for a set of relevant ontology classes
* [postExtractOntologySubgraphResource](#postextractontologysubgraphresource) - Extract a subgraph from an ontology

## getExtractOntologySubgraphResource

Extract a subgraph from an ontology

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExtractOntologySubgraphResourceRequest;
import org.openapis.openapi.models.operations.GetExtractOntologySubgraphResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExtractOntologySubgraphResourceRequest req = new GetExtractOntologySubgraphResourceRequest("commodi", "itaque") {{
                cnode = new String[]{{
                    add("totam"),
                    add("earum"),
                }};
                includeAncestors = false;
                includeDescendants = false;
                includeMeta = false;
                relation = new String[]{{
                    add("nam"),
                    add("vero"),
                }};
            }};            

            GetExtractOntologySubgraphResourceResponse res = sdk.ontol.getExtractOntologySubgraphResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInformationContentResource

```
IC = -log2( freq(t) / popSize )
```

Here the frequency and population is calculated for a particular dataset:
e.g. all human disease-phenotype associations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInformationContentResourceRequest;
import org.openapis.openapi.models.operations.GetInformationContentResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInformationContentResourceRequest req = new GetInformationContentResourceRequest("voluptatem", "ipsam", "vel") {{
                evidence = "alias";
            }};            

            GetInformationContentResourceResponse res = sdk.ontol.getInformationContentResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExtractOntologySubgraphResource

Extract a subgraph from an ontology

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExtractOntologySubgraphResourceRequest;
import org.openapis.openapi.models.operations.PostExtractOntologySubgraphResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostExtractOntologySubgraphResourceRequest req = new PostExtractOntologySubgraphResourceRequest("quasi", "non") {{
                cnode = new String[]{{
                    add("enim"),
                    add("sint"),
                    add("nulla"),
                    add("deserunt"),
                }};
                includeAncestors = false;
                includeDescendants = false;
                includeMeta = false;
                relation = new String[]{{
                    add("nemo"),
                    add("reprehenderit"),
                }};
            }};            

            PostExtractOntologySubgraphResourceResponse res = sdk.ontol.postExtractOntologySubgraphResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
