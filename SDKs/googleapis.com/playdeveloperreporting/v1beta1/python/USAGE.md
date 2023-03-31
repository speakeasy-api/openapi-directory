<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PlaydeveloperreportingAnomaliesListRequest(
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
    
res = s.anomalies.playdeveloperreporting_anomalies_list(req, operations.PlaydeveloperreportingAnomaliesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_play_developer_reporting_v1beta1_list_anomalies_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->