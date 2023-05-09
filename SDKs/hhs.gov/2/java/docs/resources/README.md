# resources

## Overview

Global Search

### Available Operations

* [getResourcesJson](#getresourcesjson) - Get Resources by search query

## getResourcesJson

Global search

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesJsonRequest req = new GetResourcesJsonRequest("tenetur");            

            GetResourcesJsonResponse res = sdk.resources.getResourcesJson(req);

            if (res.resourceWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
