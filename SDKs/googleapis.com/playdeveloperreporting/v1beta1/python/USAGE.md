<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PlaydeveloperreportingAnomaliesListRequest(
    path_params=operations.PlaydeveloperreportingAnomaliesListPathParams(
        parent="quasi",
    ),
    query_params=operations.PlaydeveloperreportingAnomaliesListQueryParams(
        dollar_xgafv="1",
        access_token="recusandae",
        alt="media",
        callback="eos",
        fields="ut",
        filter="est",
        key="aut",
        oauth_token="voluptatem",
        page_size=4790505383503673118,
        page_token="voluptatibus",
        pretty_print=True,
        quota_user="quod",
        upload_type="nihil",
        upload_protocol="maxime",
    ),
)
    
res = s.anomalies.playdeveloperreporting_anomalies_list(req)

if res.google_play_developer_reporting_v1beta1_list_anomalies_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->