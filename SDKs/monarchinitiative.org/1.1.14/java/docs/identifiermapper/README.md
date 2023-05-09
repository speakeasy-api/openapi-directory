# identifierMapper

## Overview

mapping and resolution of identifiers

### Available Operations

* [getIdentifierMapper](#getidentifiermapper) - TODO maps a list of identifiers from a source to a target

## getIdentifierMapper

TODO maps a list of identifiers from a source to a target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdentifierMapperRequest;
import org.openapis.openapi.models.operations.GetIdentifierMapperResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIdentifierMapperRequest req = new GetIdentifierMapperRequest("sit", "modi");            

            GetIdentifierMapperResponse res = sdk.identifierMapper.getIdentifierMapper(req);

            if (res.associations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
