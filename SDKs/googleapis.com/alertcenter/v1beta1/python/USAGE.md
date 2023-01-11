<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AlertcenterAlertsBatchDeleteRequest(
    security=operations.AlertcenterAlertsBatchDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.AlertcenterAlertsBatchDeleteQueryParams(
        dollar_xgafv="1",
        access_token="nisi",
        alt="json",
        callback="modi",
        fields="qui",
        key="quae",
        oauth_token="nemo",
        pretty_print=False,
        quota_user="commodi",
        upload_type="nulla",
        upload_protocol="culpa",
    ),
    request=shared.BatchDeleteAlertsRequest(
        alert_id=[
            "id",
        ],
        customer_id="odit",
    ),
)
    
res = s.alerts.alertcenter_alerts_batch_delete(req)

if res.batch_delete_alerts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->