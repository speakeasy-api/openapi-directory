<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MemcacheProjectsLocationsInstancesApplyParametersRequest(
    security=operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.MemcacheProjectsLocationsInstancesApplyParametersPathParams(
        name="a",
    ),
    query_params=operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams(
        dollar_xgafv="1",
        access_token="architecto",
        alt="proto",
        callback="est",
        fields="vel",
        key="beatae",
        oauth_token="laboriosam",
        pretty_print=False,
        quota_user="nemo",
        upload_type="similique",
        upload_protocol="et",
    ),
    request=shared.ApplyParametersRequest(
        apply_all=True,
        node_ids=[
            "deleniti",
        ],
    ),
)
    
res = s.projects.memcache_projects_locations_instances_apply_parameters(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->