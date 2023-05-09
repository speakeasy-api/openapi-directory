# evidenceGraph

## Overview

Operations on evidence graphs

### Available Operations

* [getEvidenceGraphObject](#getevidencegraphobject) - Returns evidence graph object for a given association
* [getEvidenceGraphTable](#getevidencegraphtable) - Returns evidence as a association_results object given an association

## getEvidenceGraphObject

Note that every association is assumed to have a unique ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceGraphObjectRequest;
import org.openapis.openapi.models.operations.GetEvidenceGraphObjectResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEvidenceGraphObjectRequest req = new GetEvidenceGraphObjectRequest("quibusdam");            

            GetEvidenceGraphObjectResponse res = sdk.evidenceGraph.getEvidenceGraphObject(req);

            if (res.graphs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceGraphTable

Note that every association is assumed to have a unique ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceGraphTableRequest;
import org.openapis.openapi.models.operations.GetEvidenceGraphTableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEvidenceGraphTableRequest req = new GetEvidenceGraphTableRequest("nam") {{
                isPublication = false;
            }};            

            GetEvidenceGraphTableResponse res = sdk.evidenceGraph.getEvidenceGraphTable(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
