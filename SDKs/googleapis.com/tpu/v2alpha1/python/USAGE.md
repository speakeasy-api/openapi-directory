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
        parent="laborum",
    ),
    query_params=operations.TpuProjectsLocationsAcceleratorTypesListQueryParams(
        dollar_xgafv="2",
        access_token="accusantium",
        alt="proto",
        callback="ducimus",
        fields="voluptas",
        filter="voluptatem",
        key="aliquam",
        oauth_token="numquam",
        order_by="est",
        page_size=7249263831846361274,
        page_token="rem",
        pretty_print=True,
        quota_user="hic",
        upload_type="asperiores",
        upload_protocol="omnis",
    ),
)
    
res = s.projects.tpu_projects_locations_accelerator_types_list(req)

if res.list_accelerator_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->