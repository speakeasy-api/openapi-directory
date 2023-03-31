# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/graphhopper.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.ClusterRequest(
    configuration=shared.ClusterConfiguration(
        clustering=shared.ClusterConfigurationClustering(
            max_quantity=50,
            min_quantity=30,
            num_clusters=10,
        ),
        response_type="json",
        routing=shared.ClusterConfigurationRouting(
            cost_per_meter=5488.14,
            cost_per_second=1,
            profile="car",
        ),
    ),
    customers=[
        shared.ClusterCustomer(
            address=shared.ClusterCustomerAddress(
                lat=48.118434,
                lon=11.53941,
                street_hint="Lindenschmitstraße 52",
            ),
            id="GraphHopper GmbH",
            quantity=10,
        ),
        shared.ClusterCustomer(
            address=shared.ClusterCustomerAddress(
                lat=48.118434,
                lon=11.53941,
                street_hint="Lindenschmitstraße 52",
            ),
            id="GraphHopper GmbH",
            quantity=10,
        ),
        shared.ClusterCustomer(
            address=shared.ClusterCustomerAddress(
                lat=48.118434,
                lon=11.53941,
                street_hint="Lindenschmitstraße 52",
            ),
            id="GraphHopper GmbH",
            quantity=10,
        ),
    ],
)
    
res = s.cluster_api.async_clustering_problem(req)

if res.job_id is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cluster_api

* `async_clustering_problem` - Batch Cluster Endpoint
* `get_cluster_solution` - GET Batch Solution Endpoint
* `solve_clustering_problem` - POST Cluster Endpoint

### geocoding_api

* `get_geocode` - Geocoding Endpoint

### isochrone_api

* `get_isochrone` - Isochrone Endpoint

### map_matching_api

* `post_gpx` - Map-match a GPX file

### matrix_api

* `calculate_matrix` - Batch Matrix Endpoint
* `get_matrix` - GET Matrix Endpoint
* `get_matrix_solution` - GET Batch Matrix Endpoint
* `post_matrix` - POST Matrix Endpoint

### route_optimization_api

* `async_vrp` - POST route optimization problem (batch mode)
* `get_solution` - GET the solution (batch mode)
* `solve_vrp` - POST route optimization problem

### routing_api

* `get_route` - GET Route Endpoint
* `get_route_info` - Coverage information
* `post_route` - POST Route Endpoint
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
