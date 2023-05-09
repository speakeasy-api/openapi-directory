# geocodingAPI

## Overview

Everything about geocoding

### Available Operations

* [getGeocode](#getgeocode) - Geocoding Endpoint

## getGeocode


### Introduction

![Geocoding Example](./img/geocoding-example.png)

_Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
For example the conversion from `Berlin` to `52.5170365,13.3888599`.

_Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGeocodeRequest;
import org.openapis.openapi.models.operations.GetGeocodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGeocodeRequest req = new GetGeocodeRequest() {{
                debug = false;
                limit = 437587;
                locale = "magnam";
                point = "debitis";
                provider = "ipsa";
                q = "delectus";
                reverse = false;
            }};            

            GetGeocodeResponse res = sdk.geocodingAPI.getGeocode(req);

            if (res.geocodingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
