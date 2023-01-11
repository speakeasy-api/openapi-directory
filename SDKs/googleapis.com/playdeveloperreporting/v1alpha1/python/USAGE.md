<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PlaydeveloperreportingAnomaliesListRequest(
    path_params=operations.PlaydeveloperreportingAnomaliesListPathParams(
        parent="nostrum",
    ),
    query_params=operations.PlaydeveloperreportingAnomaliesListQueryParams(
        dollar_xgafv="1",
        access_token="quo",
        alt="proto",
        callback="atque",
        fields="aut",
        filter="laborum",
        key="deserunt",
        oauth_token="ullam",
        page_size=7721199028839594214,
        page_token="dolores",
        pretty_print=False,
        quota_user="cupiditate",
        upload_type="sit",
        upload_protocol="est",
    ),
)
    
res = s.anomalies.playdeveloperreporting_anomalies_list(req)

if res.google_play_developer_reporting_v1alpha1_list_anomalies_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->