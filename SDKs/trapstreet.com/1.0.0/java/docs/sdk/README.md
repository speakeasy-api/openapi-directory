# SDK

## Overview

The TrapStreet API finds trap streets in Google Maps, Bing Maps and OpenStreetMap data.

### Available Operations

* [getAddress](#getaddress)

## getAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressRequest;
import org.openapis.openapi.models.operations.GetAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAddressRequest req = new GetAddressRequest("provident");            

            GetAddressResponse res = sdk.sdk.getAddress(req);

            if (res.getAddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
