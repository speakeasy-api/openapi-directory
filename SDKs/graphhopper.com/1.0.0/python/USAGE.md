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