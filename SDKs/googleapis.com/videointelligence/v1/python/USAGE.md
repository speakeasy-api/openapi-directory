<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest(
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
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.operations.videointelligence_operations_projects_locations_operations_cancel(req, operations.VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_protobuf_empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->