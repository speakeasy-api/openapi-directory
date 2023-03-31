<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest(
    dollar_xgafv="2",
    batch_get_amp_urls_request=shared.BatchGetAmpUrlsRequest(
        lookup_strategy="IN_INDEX_DOC",
        urls=[
            "quibusdam",
            "unde",
            "nulla",
        ],
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
    
res = s.amp_urls.acceleratedmobilepageurl_amp_urls_batch_get(req)

if res.batch_get_amp_urls_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->