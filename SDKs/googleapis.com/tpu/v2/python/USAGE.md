<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TpuProjectsLocationsAcceleratorTypesListRequest(
    security=operations.TpuProjectsLocationsAcceleratorTypesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TpuProjectsLocationsAcceleratorTypesListPathParams(
        parent="recusandae",
    ),
    query_params=operations.TpuProjectsLocationsAcceleratorTypesListQueryParams(
        dollar_xgafv="1",
        access_token="quod",
        alt="media",
        callback="sed",
        fields="fugiat",
        filter="sit",
        key="quo",
        oauth_token="repellat",
        order_by="minima",
        page_size=6554480036051648428,
        page_token="tenetur",
        pretty_print=True,
        quota_user="nostrum",
        upload_type="blanditiis",
        upload_protocol="rerum",
    ),
)
    
res = s.projects.tpu_projects_locations_accelerator_types_list(req)

if res.list_accelerator_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->