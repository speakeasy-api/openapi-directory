# userMediaLists

## Overview

Get media from user generated lists.

### Available Operations

* [getResourcesUserMediaListsIdJson](#getresourcesusermedialistsidjson) - Get UserMediaList by ID

## getResourcesUserMediaListsIdJson

Get a specific user media list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesUserMediaListsIdJsonRequest;
import org.openapis.openapi.models.operations.GetResourcesUserMediaListsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesUserMediaListsIdJsonRequest req = new GetResourcesUserMediaListsIdJsonRequest(565189L) {{
                displayMethod = "excepturi";
            }};            

            GetResourcesUserMediaListsIdJsonResponse res = sdk.userMediaLists.getResourcesUserMediaListsIdJson(req);

            if (res.mediaItemWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
