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
        parent="cumque",
    ),
    query_params=operations.TpuProjectsLocationsAcceleratorTypesListQueryParams(
        dollar_xgafv="2",
        access_token="dolor",
        alt="json",
        callback="nihil",
        fields="a",
        filter="aliquid",
        key="repudiandae",
        oauth_token="aperiam",
        order_by="tempora",
        page_size=3192688218102539939,
        page_token="cum",
        pretty_print=True,
        quota_user="et",
        upload_type="in",
        upload_protocol="libero",
    ),
)
    
res = s.projects.tpu_projects_locations_accelerator_types_list(req)

if res.list_accelerator_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->