# individual

## Overview

Individual humans (including patients), or organisms

### Available Operations

* [getIndividual](#getindividual) - Returns list of matches
* [getPedigree](#getpedigree) - Returns list of matches

## getIndividual

Returns list of matches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualRequest;
import org.openapis.openapi.models.operations.GetIndividualResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualRequest req = new GetIndividualRequest("laudantium");            

            GetIndividualResponse res = sdk.individual.getIndividual(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPedigree

Returns list of matches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPedigreeRequest;
import org.openapis.openapi.models.operations.GetPedigreeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPedigreeRequest req = new GetPedigreeRequest("quae");            

            GetPedigreeResponse res = sdk.individual.getPedigree(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
