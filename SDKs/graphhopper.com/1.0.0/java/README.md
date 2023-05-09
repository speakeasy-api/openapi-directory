# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AsyncClusteringProblemResponse;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterConfigurationClustering;
import org.openapis.openapi.models.shared.ClusterConfigurationRouting;
import org.openapis.openapi.models.shared.ClusterCustomer;
import org.openapis.openapi.models.shared.ClusterCustomerAddress;
import org.openapis.openapi.models.shared.ClusterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ClusterRequest req = new ClusterRequest() {{
                configuration = new ClusterConfiguration() {{
                    clustering = new ClusterConfigurationClustering() {{
                        maxQuantity = 50;
                        minQuantity = 30;
                        numClusters = 10;
                    }};;
                    responseType = "json";
                    routing = new ClusterConfigurationRouting() {{
                        costPerMeter = 5928.45;
                        costPerSecond = 1;
                        profile = "car";
                    }};;
                }};;
                customers = new org.openapis.openapi.models.shared.ClusterCustomer[]{{
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                    add(new ClusterCustomer() {{
                        address = new ClusterCustomerAddress() {{
                            lat = 48.118434;
                            lon = 11.53941;
                            streetHint = "Lindenschmitstraße 52";
                        }};
                        id = "GraphHopper GmbH";
                        quantity = 10;
                    }}),
                }};
            }};            

            AsyncClusteringProblemResponse res = sdk.clusterAPI.asyncClusteringProblem(req);

            if (res.jobId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [clusterAPI](docs/clusterapi/README.md)

* [asyncClusteringProblem](docs/clusterapi/README.md#asyncclusteringproblem) - Batch Cluster Endpoint
* [getClusterSolution](docs/clusterapi/README.md#getclustersolution) - GET Batch Solution Endpoint
* [solveClusteringProblem](docs/clusterapi/README.md#solveclusteringproblem) - POST Cluster Endpoint

### [geocodingAPI](docs/geocodingapi/README.md)

* [getGeocode](docs/geocodingapi/README.md#getgeocode) - Geocoding Endpoint

### [isochroneAPI](docs/isochroneapi/README.md)

* [getIsochrone](docs/isochroneapi/README.md#getisochrone) - Isochrone Endpoint

### [mapMatchingAPI](docs/mapmatchingapi/README.md)

* [postGPX](docs/mapmatchingapi/README.md#postgpx) - Map-match a GPX file

### [matrixAPI](docs/matrixapi/README.md)

* [calculateMatrix](docs/matrixapi/README.md#calculatematrix) - Batch Matrix Endpoint
* [getMatrix](docs/matrixapi/README.md#getmatrix) - GET Matrix Endpoint
* [getMatrixSolution](docs/matrixapi/README.md#getmatrixsolution) - GET Batch Matrix Endpoint
* [postMatrix](docs/matrixapi/README.md#postmatrix) - POST Matrix Endpoint

### [routeOptimizationAPI](docs/routeoptimizationapi/README.md)

* [asyncVRP](docs/routeoptimizationapi/README.md#asyncvrp) - POST route optimization problem (batch mode)
* [getSolution](docs/routeoptimizationapi/README.md#getsolution) - GET the solution (batch mode)
* [solveVRP](docs/routeoptimizationapi/README.md#solvevrp) - POST route optimization problem

### [routingAPI](docs/routingapi/README.md)

* [getRoute](docs/routingapi/README.md#getroute) - GET Route Endpoint
* [getRouteInfo](docs/routingapi/README.md#getrouteinfo) - Coverage information
* [postRoute](docs/routingapi/README.md#postroute) - POST Route Endpoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
