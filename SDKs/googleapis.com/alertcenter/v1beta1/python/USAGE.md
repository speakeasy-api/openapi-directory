<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AlertcenterAlertsBatchDeleteRequest(
    dollar_xgafv="2",
    batch_delete_alerts_request=shared.BatchDeleteAlertsRequest(
        alert_id=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        customer_id="nulla",
    ),
    access_token="corrupti",
    alt="proto",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.alerts.alertcenter_alerts_batch_delete(req, operations.AlertcenterAlertsBatchDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.batch_delete_alerts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->