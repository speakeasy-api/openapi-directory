# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/graphhopper.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ClusterAPI.AsyncClusteringProblem(ctx, shared.ClusterRequest{
        Configuration: &shared.ClusterConfiguration{
            Clustering: &shared.ClusterConfigurationClustering{
                MaxQuantity: sdk.Float64(50),
                MinQuantity: sdk.Float64(30),
                NumClusters: sdk.Float64(10),
            },
            ResponseType: sdk.String("json"),
            Routing: &shared.ClusterConfigurationRouting{
                CostPerMeter: sdk.Float64(5488.14),
                CostPerSecond: sdk.Float64(1),
                Profile: sdk.String("car"),
            },
        },
        Customers: []shared.ClusterCustomer{
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
            shared.ClusterCustomer{
                Address: &shared.ClusterCustomerAddress{
                    Lat: sdk.Float64(48.118434),
                    Lon: sdk.Float64(11.53941),
                    StreetHint: sdk.String("Lindenschmitstraße 52"),
                },
                ID: sdk.String("GraphHopper GmbH"),
                Quantity: sdk.Float64(10),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JobID != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [ClusterAPI](docs/clusterapi/README.md)

* [AsyncClusteringProblem](docs/clusterapi/README.md#asyncclusteringproblem) - Batch Cluster Endpoint
* [GetClusterSolution](docs/clusterapi/README.md#getclustersolution) - GET Batch Solution Endpoint
* [SolveClusteringProblem](docs/clusterapi/README.md#solveclusteringproblem) - POST Cluster Endpoint

### [GeocodingAPI](docs/geocodingapi/README.md)

* [GetGeocode](docs/geocodingapi/README.md#getgeocode) - Geocoding Endpoint

### [IsochroneAPI](docs/isochroneapi/README.md)

* [GetIsochrone](docs/isochroneapi/README.md#getisochrone) - Isochrone Endpoint

### [MapMatchingAPI](docs/mapmatchingapi/README.md)

* [PostGPX](docs/mapmatchingapi/README.md#postgpx) - Map-match a GPX file

### [MatrixAPI](docs/matrixapi/README.md)

* [CalculateMatrix](docs/matrixapi/README.md#calculatematrix) - Batch Matrix Endpoint
* [GetMatrix](docs/matrixapi/README.md#getmatrix) - GET Matrix Endpoint
* [GetMatrixSolution](docs/matrixapi/README.md#getmatrixsolution) - GET Batch Matrix Endpoint
* [PostMatrix](docs/matrixapi/README.md#postmatrix) - POST Matrix Endpoint

### [RouteOptimizationAPI](docs/routeoptimizationapi/README.md)

* [AsyncVRP](docs/routeoptimizationapi/README.md#asyncvrp) - POST route optimization problem (batch mode)
* [GetSolution](docs/routeoptimizationapi/README.md#getsolution) - GET the solution (batch mode)
* [SolveVRP](docs/routeoptimizationapi/README.md#solvevrp) - POST route optimization problem

### [RoutingAPI](docs/routingapi/README.md)

* [GetRoute](docs/routingapi/README.md#getroute) - GET Route Endpoint
* [GetRouteInfo](docs/routingapi/README.md#getrouteinfo) - Coverage information
* [PostRoute](docs/routingapi/README.md#postroute) - POST Route Endpoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
