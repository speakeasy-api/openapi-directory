# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/replicapool/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ReplicapoolPoolsDeleteRequest(
    pools_delete_request=shared.PoolsDeleteRequest(
        abandon_instances=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    alt="json",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pool_name="illum",
    pretty_print=False,
    project_name="vel",
    quota_user="error",
    user_ip="deserunt",
    zone="suscipit",
)
    
res = s.pools.replicapool_pools_delete(req, operations.ReplicapoolPoolsDeleteSecurity(
    option1=operations.ReplicapoolPoolsDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pools

* `replicapool_pools_delete` - Deletes a replica pool.
* `replicapool_pools_get` - Gets information about a single replica pool.
* `replicapool_pools_insert` - Inserts a new replica pool.
* `replicapool_pools_list` - List all replica pools.
* `replicapool_pools_resize` - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* `replicapool_pools_updatetemplate` - Update the template used by the pool.

### replicas

* `replicapool_replicas_delete` - Deletes a replica from the pool.
* `replicapool_replicas_get` - Gets information about a specific replica.
* `replicapool_replicas_list` - Lists all replicas in a pool.
* `replicapool_replicas_restart` - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
