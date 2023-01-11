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
        name="dolores",
    ),
    query_params=operations.MemcacheProjectsLocationsInstancesApplyParametersQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="media",
        callback="dolore",
        fields="eos",
        key="autem",
        oauth_token="ut",
        pretty_print=False,
        quota_user="odio",
        upload_type="quia",
        upload_protocol="voluptas",
    ),
    request=shared.ApplyParametersRequest(
        apply_all=False,
        node_ids=[
            "et",
            "dolor",
            "nulla",
        ],
    ),
)
    
res = s.projects.memcache_projects_locations_instances_apply_parameters(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->