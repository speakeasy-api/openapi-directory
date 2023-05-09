# mediaTypes

## Overview

Information about media types

### Available Operations

* [getResourcesMediaTypesFormat](#getresourcesmediatypesformat) - Get MediaTypes

## getResourcesMediaTypesFormat

Information about media types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcesMediaTypesFormatRequest;
import org.openapis.openapi.models.operations.GetResourcesMediaTypesFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourcesMediaTypesFormatRequest req = new GetResourcesMediaTypesFormatRequest("sequi");            

            GetResourcesMediaTypesFormatResponse res = sdk.mediaTypes.getResourcesMediaTypesFormat(req);

            if (res.mediaTypeHolderWrappeds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
