# pairSim

## Overview

pairwise similarity between two entities

### Available Operations

* [getPairSimJaccardResource](#getpairsimjaccardresource) - Get pairwise similarity

## getPairSimJaccardResource

Get pairwise similarity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPairSimJaccardResourceRequest;
import org.openapis.openapi.models.operations.GetPairSimJaccardResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPairSimJaccardResourceRequest req = new GetPairSimJaccardResourceRequest("iusto", "voluptate") {{
                objectCategory = "sequi";
            }};            

            GetPairSimJaccardResourceResponse res = sdk.pairSim.getPairSimJaccardResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
