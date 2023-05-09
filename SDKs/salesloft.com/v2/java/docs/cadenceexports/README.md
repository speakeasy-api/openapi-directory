# cadenceExports

## Overview

Cadence Exports

### Available Operations

* [getV2CadenceExportsIdJson](#getv2cadenceexportsidjson) - Export a cadence

## getV2CadenceExportsIdJson

Exports a cadence as JSON.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CadenceExportsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CadenceExportsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CadenceExportsIdJsonRequest req = new GetV2CadenceExportsIdJsonRequest("sed");            

            GetV2CadenceExportsIdJsonResponse res = sdk.cadenceExports.getV2CadenceExportsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
