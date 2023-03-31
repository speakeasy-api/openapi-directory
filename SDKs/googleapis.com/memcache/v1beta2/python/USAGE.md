<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MemcacheProjectsLocationsInstancesApplyParametersRequest(
    dollar_xgafv="2",
    apply_parameters_request=shared.ApplyParametersRequest(
        apply_all=False,
        node_ids=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
    ),
    access_token="nulla",
    alt="media",
    callback="illum",
    fields_="vel",
    key="error",
    name="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.projects.memcache_projects_locations_instances_apply_parameters(req, operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->