<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ChromeuxreportRecordsQueryHistoryRecordRequest(
    dollar_xgafv="2",
    query_history_request=shared.QueryHistoryRequest(
        form_factor="DESKTOP",
        metrics=[
            "quibusdam",
            "unde",
            "nulla",
        ],
        origin="corrupti",
        url="illum",
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.records.chromeuxreport_records_query_history_record(req)

if res.query_history_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->