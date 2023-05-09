# peerDetection

## Overview

Detecting nodes to use for submitting transactions

### Available Operations

* [getPeersList](#getpeerslist) - Lists known peers sorted by block height

## getPeersList

Lists known peers sorted by block height

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPeersListRequest;
import org.openapis.openapi.models.operations.GetPeersListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPeersListRequest req = new GetPeersListRequest() {{
                closedApi = false;
                limit = 612096;
                unreachable = false;
            }};            

            GetPeersListResponse res = sdk.peerDetection.getPeersList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
