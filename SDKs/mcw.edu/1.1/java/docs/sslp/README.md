# sslp

## Overview

SSLP Web Service

### Available Operations

* [getMappedSSLPByPositionUsingGET](#getmappedsslpbypositionusingget) - Returns a list SSLP for given position and assembly map

## getMappedSSLPByPositionUsingGET

Returns a list SSLP for given position and assembly map

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMappedSSLPByPositionUsingGETRequest;
import org.openapis.openapi.models.operations.GETMappedSSLPByPositionUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMappedSSLPByPositionUsingGETRequest req = new GETMappedSSLPByPositionUsingGETRequest("dolore", 480894, 118727L, 688661L);            

            GETMappedSSLPByPositionUsingGETResponse res = sdk.sslp.getMappedSSLPByPositionUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
