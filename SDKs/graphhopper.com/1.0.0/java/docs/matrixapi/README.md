# matrixAPI

## Overview


### Introduction

![Matrix Example](./img/matrix-example.png)

The Matrix API is part of the [GraphHopper Directions API](https://graphhopper.com/#directions-api) and with
it you can calculate many-to-many distances and times a lot more efficient than calling the
Routing API multiple times.

In the [Routing API](#tag/Routing-API) we support multiple points, so called 'via points', which results in one
route being calculated. The Matrix API results in NxM routes, or more precise NxM distances or times being calculated
but [is a lot faster](https://www.graphhopper.com/blog/2019/06/04/incredibly-fast-distance-matrix-calculations-with-graphhopper/)
compared to NxM single requests.

The most simple example is a tourist trying to decide
which pizza is close to her instead of using beeline distance she can calculate a 1x4 matrix. Or a delivery service
often in the need of big NxN matrices to solve vehicle routing problems. For example the [GraphHopper Route Optimization API](#tag/Route-Optimization-API)
uses the Matrix API under the hood to achieve this.

Some other use cases for the Matrix API:

* Logistic problems often pick up many items from and deliver them to many locations.
* Calculating detours with many possible points in-between and selecting the best e.g. interesting for ridesharing or taxi applications. For this 1-to-many requests are necessary.
* Finding the best tour for a tourist in the need to visit as many points of interests as possible.
* ...

### API Clients and Examples

See the [clients](#section/API-Clients) section in the main document and [live examples](https://graphhopper.com/api/1/examples/#matrix).

### Description

The Matrix API calculates the well known distance-matrix for a set of points, i.e. it calculates all the distances
between every point combination. But we do not stop there, we also offer a time-, weight- and route-matrix.
The weight-matrix can be used as raw input for e.g. a vehicle routing problem ([VRP](http://en.wikipedia.org/wiki/Vehicle_routing_problem))
and is more precise than a time- or distance-matrix. E.g. for bike routes the actual weight of a route (e.g. the "beauty")
is what you want to decide if a route is 'better' and not always the taken time or distance.

A simple illustration for a 3x3 matrix with identical from and to points:

-          |to_point1|to_point2|to_point3
:-----------|:--------|:--------|:--------
from_point1 |0        |1->2     | 1->3
from_point2 |2->1     |0        | 2->3
from_point3 |3->1     |3->2     | 0

A simple illustration for a 1x3 matrix with different start- and end-points:

-          | to_point1  | to_point2 | t_point3
:-----------|:-----------|:----------|:--------
from_pointA |A->1        |A->2       |A->3


For every route 1->2, 1-3, ... or A->1,A->2,A->3 you can return only the weight, the time and the distance.
To calculate full routes you can use the [Routing API](#tag/Routing-API).

### Limits and Counts

The cost for one request depends on the number of locations and is documented [here](https://support.graphhopper.com/support/solutions/44000303787#what-is-one-credit).

One request should not exceed the Matrix API location limit, which depends on the subscription, see the
pricing tab in our dashboard.


### Available Operations

* [calculateMatrix](#calculatematrix) - Batch Matrix Endpoint
* [getMatrix](#getmatrix) - GET Matrix Endpoint
* [getMatrixSolution](#getmatrixsolution) - GET Batch Matrix Endpoint
* [postMatrix](#postmatrix) - POST Matrix Endpoint

## calculateMatrix

Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.

The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
 * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
 * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`

Here are some full examples via curl:
```bash
$ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
{"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
```

Pick the returned `job_id` and use it in the next GET requests:
```bash
$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
{"status":"waiting"}
```

When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
```bash
$ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
{"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
```

Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
```json
{"message":"Cannot find from_points: 1"}
```
And the optional `hints` array.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CalculateMatrixResponse;
import org.openapis.openapi.models.shared.MatrixRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SymmetricalMatrixRequest;
import org.openapis.openapi.models.shared.VehicleProfileIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new MatrixRequest() {{
                failFast = false;
                fromCurbsides = new String[]{{
                    add("veritatis"),
                    add("deserunt"),
                }};
                fromPointHints = new String[]{{
                    add("ipsam"),
                }};
                fromPoints = new Double[][]{{
                    add(new Double[]{{
                        add(7781.57),
                        add(1403.5),
                        add(8700.13),
                        add(8700.88),
                    }}),
                    add(new Double[]{{
                        add(4736.08),
                        add(7991.59),
                        add(8009.11),
                        add(4614.79),
                    }}),
                    add(new Double[]{{
                        add(7805.29),
                        add(6788.8),
                        add(1182.74),
                    }}),
                    add(new Double[]{{
                        add(6399.21),
                        add(5820.2),
                        add(1433.53),
                    }}),
                }};
                outArrays = new String[]{{
                    add("hic"),
                    add("optio"),
                    add("totam"),
                }};
                snapPreventions = new String[]{{
                    add("commodi"),
                }};
                toCurbsides = new String[]{{
                    add("modi"),
                    add("qui"),
                }};
                toPointHints = new String[]{{
                    add("cum"),
                    add("esse"),
                    add("ipsum"),
                    add("excepturi"),
                }};
                toPoints = new Double[][]{{
                    add(new Double[]{{
                        add(3241.41),
                    }}),
                }};
                turnCosts = false;
                vehicle = VehicleProfileIdEnum.RACINGBIKE;
            }}            

            CalculateMatrixResponse res = sdk.matrixAPI.calculateMatrix(req);

            if (res.jobId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatrix

With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
as it works out-of-the-box in the browser. If possible you should
prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
and can also gzip the **request**. (Note, that all endpoints return gzipped responses).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatrixCurbsideEnum;
import org.openapis.openapi.models.operations.GetMatrixFromCurbsideEnum;
import org.openapis.openapi.models.operations.GetMatrixRequest;
import org.openapis.openapi.models.operations.GetMatrixResponse;
import org.openapis.openapi.models.operations.GetMatrixToCurbsideEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VehicleProfileIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMatrixRequest req = new GetMatrixRequest() {{
                curbside = new org.openapis.openapi.models.operations.GetMatrixCurbsideEnum[]{{
                    add(GetMatrixCurbsideEnum.ANY),
                    add(GetMatrixCurbsideEnum.RIGHT),
                    add(GetMatrixCurbsideEnum.RIGHT),
                }};
                failFast = false;
                fromCurbside = new org.openapis.openapi.models.operations.GetMatrixFromCurbsideEnum[]{{
                    add(GetMatrixFromCurbsideEnum.LEFT),
                    add(GetMatrixFromCurbsideEnum.LEFT),
                    add(GetMatrixFromCurbsideEnum.RIGHT),
                    add(GetMatrixFromCurbsideEnum.RIGHT),
                }};
                fromPoint = new String[]{{
                    add("iure"),
                    add("saepe"),
                    add("quidem"),
                }};
                fromPointHint = new String[]{{
                    add("ipsa"),
                }};
                outArray = new String[]{{
                    add("est"),
                    add("mollitia"),
                    add("laborum"),
                    add("dolores"),
                }};
                point = new String[]{{
                    add("corporis"),
                }};
                pointHint = new String[]{{
                    add("nobis"),
                }};
                snapPrevention = new String[]{{
                    add("omnis"),
                    add("nemo"),
                }};
                toCurbside = new org.openapis.openapi.models.operations.GetMatrixToCurbsideEnum[]{{
                    add(GetMatrixToCurbsideEnum.RIGHT),
                    add(GetMatrixToCurbsideEnum.ANY),
                }};
                toPoint = new String[]{{
                    add("culpa"),
                    add("doloribus"),
                }};
                toPointHint = new String[]{{
                    add("architecto"),
                    add("mollitia"),
                    add("dolorem"),
                    add("culpa"),
                }};
                turnCosts = false;
                vehicle = VehicleProfileIdEnum.BIKE;
            }};            

            GetMatrixResponse res = sdk.matrixAPI.getMatrix(req);

            if (res.matrixResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatrixSolution

This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatrixSolutionRequest;
import org.openapis.openapi.models.operations.GetMatrixSolutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMatrixSolutionRequest req = new GetMatrixSolutionRequest("mollitia");            

            GetMatrixSolutionResponse res = sdk.matrixAPI.getMatrixSolution(req);

            if (res.matrixResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMatrix


The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
please refer to the [guide of the GET endpoint](#operation/getMatrix).

**Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.

For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
```json
{ "points": [[11,10], [22,20]], "vehicle": "car" }
```

A complete curl Example:
```bash
curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMatrixResponse;
import org.openapis.openapi.models.shared.MatrixRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SymmetricalMatrixRequest;
import org.openapis.openapi.models.shared.VehicleProfileIdEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new MatrixRequest() {{
                failFast = false;
                fromCurbsides = new String[]{{
                    add("quam"),
                    add("molestiae"),
                }};
                fromPointHints = new String[]{{
                    add("error"),
                }};
                fromPoints = new Double[][]{{
                    add(new Double[]{{
                        add(1103.75),
                        add(6747.52),
                    }}),
                }};
                outArrays = new String[]{{
                    add("enim"),
                    add("odit"),
                    add("quo"),
                }};
                snapPreventions = new String[]{{
                    add("tenetur"),
                }};
                toCurbsides = new String[]{{
                    add("id"),
                    add("possimus"),
                }};
                toPointHints = new String[]{{
                    add("quasi"),
                }};
                toPoints = new Double[][]{{
                    add(new Double[]{{
                        add(6736.6),
                        add(960.98),
                        add(9719.45),
                        add(9764.6),
                    }}),
                    add(new Double[]{{
                        add(4686.51),
                        add(5096.24),
                        add(9767.62),
                        add(557.14),
                    }}),
                    add(new Double[]{{
                        add(4511.59),
                        add(7392.64),
                        add(199.87),
                    }}),
                }};
                turnCosts = false;
                vehicle = VehicleProfileIdEnum.CAR;
            }}            

            PostMatrixResponse res = sdk.matrixAPI.postMatrix(req);

            if (res.matrixResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
