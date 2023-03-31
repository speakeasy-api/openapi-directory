<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinesslodgingLocationsGetLodgingRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    read_mask="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.locations.mybusinesslodging_locations_get_lodging(req)

if res.lodging is not None:
    # handle response
```
<!-- End SDK Example Usage -->