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
        parent="dolor",
    ),
    query_params=operations.TpuProjectsLocationsAcceleratorTypesListQueryParams(
        dollar_xgafv="2",
        access_token="modi",
        alt="json",
        callback="odio",
        fields="aperiam",
        filter="et",
        key="aut",
        oauth_token="cupiditate",
        order_by="ut",
        page_size=2749852010196039350,
        page_token="voluptatum",
        pretty_print=True,
        quota_user="vero",
        upload_type="provident",
        upload_protocol="eos",
    ),
)
    
res = s.projects.tpu_projects_locations_accelerator_types_list(req)

if res.list_accelerator_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->