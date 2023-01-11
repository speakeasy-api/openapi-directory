<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ChromeuxreportRecordsQueryRecordRequest(
    query_params=operations.ChromeuxreportRecordsQueryRecordQueryParams(
        dollar_xgafv="2",
        access_token="alias",
        alt="json",
        callback="officia",
        fields="laborum",
        key="ipsum",
        oauth_token="quod",
        pretty_print=False,
        quota_user="optio",
        upload_type="praesentium",
        upload_protocol="pariatur",
    ),
    request=shared.QueryRequest(
        effective_connection_type="dolorem",
        form_factor="PHONE",
        metrics=[
            "reiciendis",
        ],
        origin="explicabo",
        url="illo",
    ),
)
    
res = s.records.chromeuxreport_records_query_record(req)

if res.query_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->