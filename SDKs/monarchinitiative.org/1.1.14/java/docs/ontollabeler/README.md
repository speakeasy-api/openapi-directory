# ontolLabeler

## Overview

Assign labels to IDs

### Available Operations

* [getOntolLabelerResource](#getontollabelerresource) - Fetches a map from CURIEs/IDs to labels

## getOntolLabelerResource

Fetches a map from CURIEs/IDs to labels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOntolLabelerResourceRequest;
import org.openapis.openapi.models.operations.GetOntolLabelerResourceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOntolLabelerResourceRequest req = new GetOntolLabelerResourceRequest(                new String[]{{
                                add("debitis"),
                                add("delectus"),
                            }});            

            GetOntolLabelerResourceResponse res = sdk.ontolLabeler.getOntolLabelerResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
