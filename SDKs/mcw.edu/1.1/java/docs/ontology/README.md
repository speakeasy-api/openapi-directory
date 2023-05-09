# ontology

## Overview

Ontology Web Service

### Available Operations

* [getOntDagsUsingGET](#getontdagsusingget) - Returns child and parent terms for Accession ID
* [getTermUsingGET](#gettermusingget) - Returns term for Accession ID
* [isDescendantOfUsingGET](#isdescendantofusingget) - Returns true or false for terms

## getOntDagsUsingGET

Returns child and parent terms for Accession ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETOntDagsUsingGETRequest;
import org.openapis.openapi.models.operations.GETOntDagsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETOntDagsUsingGETRequest req = new GETOntDagsUsingGETRequest("id");            

            GETOntDagsUsingGETResponse res = sdk.ontology.getOntDagsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTermUsingGET

Returns term for Accession ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETTermUsingGETRequest;
import org.openapis.openapi.models.operations.GETTermUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETTermUsingGETRequest req = new GETTermUsingGETRequest("possimus");            

            GETTermUsingGETResponse res = sdk.ontology.getTermUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## isDescendantOfUsingGET

Returns true or false for terms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IsDescendantOfUsingGETRequest;
import org.openapis.openapi.models.operations.IsDescendantOfUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IsDescendantOfUsingGETRequest req = new IsDescendantOfUsingGETRequest("aut", "quasi");            

            IsDescendantOfUsingGETResponse res = sdk.ontology.isDescendantOfUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
