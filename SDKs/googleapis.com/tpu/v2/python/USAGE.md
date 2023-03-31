<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TpuProjectsLocationsAcceleratorTypesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    oauth_token="illum",
    order_by="vel",
    page_size=623564,
    page_token="deserunt",
    parent="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.projects.tpu_projects_locations_accelerator_types_list(req, operations.TpuProjectsLocationsAcceleratorTypesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_accelerator_types_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->