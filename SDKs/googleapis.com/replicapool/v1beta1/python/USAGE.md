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