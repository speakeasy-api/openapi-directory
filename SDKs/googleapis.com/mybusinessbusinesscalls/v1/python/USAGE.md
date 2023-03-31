<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    oauth_token="illum",
    page_size=423655,
    page_token="error",
    parent="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.locations.mybusinessbusinesscalls_locations_businesscallsinsights_list(req)

if res.list_business_calls_insights_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->