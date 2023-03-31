# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/alertcenter/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### alerts

* `alertcenter_alerts_batch_delete` - Performs batch delete operation on alerts.
* `alertcenter_alerts_batch_undelete` - Performs batch undelete operation on alerts.
* `alertcenter_alerts_delete` - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* `alertcenter_alerts_feedback_create` - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* `alertcenter_alerts_feedback_list` - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* `alertcenter_alerts_get` - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* `alertcenter_alerts_get_metadata` - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* `alertcenter_alerts_list` - Lists the alerts.
* `alertcenter_alerts_undelete` - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### v1beta1

* `alertcenter_get_settings` - Returns customer-level settings.
* `alertcenter_update_settings` - Updates the customer-level settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
