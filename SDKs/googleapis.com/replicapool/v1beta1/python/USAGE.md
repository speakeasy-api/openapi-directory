<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ReplicapoolPoolsDeleteRequest(
    security=operations.ReplicapoolPoolsDeleteSecurity(
        option1=operations.ReplicapoolPoolsDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.ReplicapoolPoolsDeletePathParams(
        pool_name="error",
        project_name="sint",
        zone="commodi",
    ),
    query_params=operations.ReplicapoolPoolsDeleteQueryParams(
        alt="json",
        fields="et",
        key="veniam",
        oauth_token="necessitatibus",
        pretty_print=True,
        quota_user="sed",
        user_ip="nihil",
    ),
    request=shared.PoolsDeleteRequest(
        abandon_instances=[
            "qui",
        ],
    ),
)
    
res = s.pools.replicapool_pools_delete(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->