# owlOntology

## Overview

OWL-level operations on an ontology

### Available Operations

* [getDlQuery](#getdlquery) - Placeholder - use OWLery for now
* [getSparqlQuery](#getsparqlquery) - Placeholder - use direct SPARQL endpoint for now

## getDlQuery

Placeholder - use OWLery for now

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDlQueryRequest;
import org.openapis.openapi.models.operations.GetDlQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDlQueryRequest req = new GetDlQueryRequest("nam");            

            GetDlQueryResponse res = sdk.owlOntology.getDlQuery(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSparqlQuery

Placeholder - use direct SPARQL endpoint for now

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSparqlQueryRequest;
import org.openapis.openapi.models.operations.GetSparqlQueryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSparqlQueryRequest req = new GetSparqlQueryRequest("dolore");            

            GetSparqlQueryResponse res = sdk.owlOntology.getSparqlQuery(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
