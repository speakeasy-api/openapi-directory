# ontology

## Overview

Operations on Ontology Terms and Subsets

### Available Operations

* [getOntologySubset](#getontologysubset) - Returns meta data of an ontology subset (slim)
* [getOntologyTerm](#getontologyterm) - Returns meta data of an ontology term
* [getOntologyTermGraph](#getontologytermgraph) - Returns graph of an ontology term
* [getOntologyTermSubgraph](#getontologytermsubgraph) - Extract a subgraph from an ontology term
* [getOntologyTermSubsets](#getontologytermsubsets) - Returns subsets (slims) associated to an ontology term
* [getOntologyTermsSharedAncestor](#getontologytermssharedancestor) - Returns the ancestor ontology terms shared by two ontology terms

## getOntologySubset

Returns meta data of an ontology subset (slim)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntologySubsetRequest;
import org.openapis.openapi.models.operations.GetOntologySubsetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntologySubsetRequest req = new GetOntologySubsetRequest("quae");            

            GetOntologySubsetResponse res = sdk.ontology.getOntologySubset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOntologyTerm

Returns meta data of an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntologyTermRequest;
import org.openapis.openapi.models.operations.GetOntologyTermResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntologyTermRequest req = new GetOntologyTermRequest("minus");            

            GetOntologyTermResponse res = sdk.ontology.getOntologyTerm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOntologyTermGraph

Returns graph of an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntologyTermGraphGraphTypeEnum;
import org.openapis.openapi.models.operations.GetOntologyTermGraphRequest;
import org.openapis.openapi.models.operations.GetOntologyTermGraphResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntologyTermGraphRequest req = new GetOntologyTermGraphRequest("fuga") {{
                graphType = GetOntologyTermGraphGraphTypeEnum.NEIGHBORHOOD_GRAPH;
            }};            

            GetOntologyTermGraphResponse res = sdk.ontology.getOntologyTermGraph(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOntologyTermSubgraph

Extract a subgraph from an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntologyTermSubgraphRequest;
import org.openapis.openapi.models.operations.GetOntologyTermSubgraphResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntologyTermSubgraphRequest req = new GetOntologyTermSubgraphRequest("consectetur") {{
                cnode = new String[]{{
                    add("atque"),
                }};
                includeAncestors = false;
                includeDescendants = false;
                includeMeta = false;
                relation = new String[]{{
                    add("impedit"),
                }};
            }};            

            GetOntologyTermSubgraphResponse res = sdk.ontology.getOntologyTermSubgraph(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOntologyTermSubsets

Returns subsets (slims) associated to an ontology term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntologyTermSubsetsRequest;
import org.openapis.openapi.models.operations.GetOntologyTermSubsetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntologyTermSubsetsRequest req = new GetOntologyTermSubsetsRequest("magni");            

            GetOntologyTermSubsetsResponse res = sdk.ontology.getOntologyTermSubsets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOntologyTermsSharedAncestor

Returns the ancestor ontology terms shared by two ontology terms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntologyTermsSharedAncestorRequest;
import org.openapis.openapi.models.operations.GetOntologyTermsSharedAncestorResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntologyTermsSharedAncestorRequest req = new GetOntologyTermsSharedAncestorRequest("soluta", "repudiandae");            

            GetOntologyTermsSharedAncestorResponse res = sdk.ontology.getOntologyTermsSharedAncestor(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
