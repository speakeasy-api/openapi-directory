<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServiceusageOperationsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    name="illum",
    oauth_token="vel",
    page_size=623564,
    page_token="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.operations.serviceusage_operations_list(req, operations.ServiceusageOperationsListSecurity(
    option1=operations.ServiceusageOperationsListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.list_operations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->