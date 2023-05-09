# genomeFeatures

## Overview

Operations to retrieve sequence features

### Available Operations

* [getFeaturesWithinResource](#getfeatureswithinresource) - Returns list of matches

## getFeaturesWithinResource

Returns list of matches

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturesWithinResourceRequest;
import org.openapis.openapi.models.operations.GetFeaturesWithinResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFeaturesWithinResourceRequest req = new GetFeaturesWithinResourceRequest("ipsam", "culpa", "dolor", "aliquam");            

            GetFeaturesWithinResourceResponse res = sdk.genomeFeatures.getFeaturesWithinResource(req);

            if (res.sequenceFeatures != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
