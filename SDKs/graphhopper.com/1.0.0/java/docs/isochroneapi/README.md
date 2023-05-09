# isochroneAPI

## Overview

Everything about isochrones

### Available Operations

* [getIsochrone](#getisochrone) - Isochrone Endpoint

## getIsochrone

### Example
You can get an example response via:

```
curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
```

Don't forget to replace the placeholder with your own key.

### Introduction
![Isochrone screenshot](./img/isochrone-example.png)

An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.

### Use Cases
Some possible areas in which this API may be useful to you:

- real estate analysis
- realtors
- vehicle scheduling
- geomarketing
- reach of electric vehicles
- transport planning
- logistics (distribution and retail network planning)

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIsochroneRequest;
import org.openapis.openapi.models.operations.GetIsochroneResponse;
import org.openapis.openapi.models.operations.GetIsochroneWeightingEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VehicleProfileIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetIsochroneRequest req = new GetIsochroneRequest("suscipit") {{
                buckets = 477665;
                distanceLimit = 791725;
                reverseFlow = false;
                timeLimit = 812169;
                vehicle = VehicleProfileIdEnum.MTB;
                weighting = GetIsochroneWeightingEnum.FASTEST;
            }};            

            GetIsochroneResponse res = sdk.isochroneAPI.getIsochrone(req);

            if (res.isochroneResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
