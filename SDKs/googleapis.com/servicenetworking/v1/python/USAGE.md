<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ServicenetworkingOperationsCancelRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.operations.servicenetworking_operations_cancel(req, operations.ServicenetworkingOperationsCancelSecurity(
    option1=operations.ServicenetworkingOperationsCancelSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->