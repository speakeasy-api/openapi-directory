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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AsyncClusteringProblemResponse;
import org.openapis.openapi.models.shared.ClusterRequest;
import org.openapis.openapi.models.shared.ClusterCustomer;
import org.openapis.openapi.models.shared.ClusterCustomerAddress;
import org.openapis.openapi.models.shared.ClusterConfiguration;
import org.openapis.openapi.models.shared.ClusterConfigurationRouting;
import org.openapis.openapi.models.shared.ClusterConfigurationClustering;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ClusterRequest req = new ClusterRequest() {{
                configuration = new ClusterConfiguration() {{
                    clustering = new ClusterConfigurationClustering() {{
                        maxQuantity = 50;
                        minQuantity = 30;
                        numClusters = 10;
                    }};
                    responseType = "json";
                    routing = new ClusterConfigurationRouting() {{
                        costPerMeter = 5488.14;
                        costPerSecond = 1;
                        profile = "car";
                    }};
                }};
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
            }}            

            AsyncClusteringProblemResponse res = sdk.clusterAPI.asyncClusteringProblem(req);

            if (res.jobId.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### clusterAPI

* `asyncClusteringProblem` - Batch Cluster Endpoint
* `getClusterSolution` - GET Batch Solution Endpoint
* `solveClusteringProblem` - POST Cluster Endpoint

### geocodingAPI

* `getGeocode` - Geocoding Endpoint

### isochroneAPI

* `getIsochrone` - Isochrone Endpoint

### mapMatchingAPI

* `postGPX` - Map-match a GPX file

### matrixAPI

* `calculateMatrix` - Batch Matrix Endpoint
* `getMatrix` - GET Matrix Endpoint
* `getMatrixSolution` - GET Batch Matrix Endpoint
* `postMatrix` - POST Matrix Endpoint

### routeOptimizationAPI

* `asyncVRP` - POST route optimization problem (batch mode)
* `getSolution` - GET the solution (batch mode)
* `solveVRP` - POST route optimization problem

### routingAPI

* `getRoute` - GET Route Endpoint
* `getRouteInfo` - Coverage information
* `postRoute` - POST Route Endpoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
