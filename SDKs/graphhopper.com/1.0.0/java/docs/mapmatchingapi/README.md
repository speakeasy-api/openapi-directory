# mapMatchingAPI

## Overview

Everything about map matching aka "snap to road"

### Available Operations

* [postGPX](#postgpx) - Map-match a GPX file

## postGPX

### Example
You get an example response for a GPX via:

```
curl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx
```

A minimal working GPX file looks like
```gpx
<gpx>
 <trk>
  <trkseg>
   <trkpt lat="51.343657" lon="12.360708"></trkpt>
   <trkpt lat="51.343796" lon="12.361337"></trkpt>
   <trkpt lat="51.342784" lon="12.361882"></trkpt>
  </trkseg>
 </trk>
</gpx>
```

### Introduction
![Map Matching screenshot](./img/map-matching-example.gif)

The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.

In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.

Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).

### Limits and Counts
The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).

One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGPXRequest;
import org.openapis.openapi.models.operations.PostGPXResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostGPXRequest req = new PostGPXRequest() {{
                gpsAccuracy = 392785L;
                vehicle = "recusandae";
            }};            

            PostGPXResponse res = sdk.mapMatchingAPI.postGPX(req);

            if (res.routeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
