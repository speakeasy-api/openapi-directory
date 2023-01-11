<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest(
    query_params=operations.AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams(
        dollar_xgafv="1",
        access_token="voluptatem",
        alt="proto",
        callback="dolores",
        fields="quis",
        key="facere",
        oauth_token="doloremque",
        pretty_print=True,
        quota_user="aut",
        upload_type="reiciendis",
        upload_protocol="cum",
    ),
    request=shared.BatchGetAmpUrlsRequest(
        lookup_strategy="IN_INDEX_DOC",
        urls=[
            "sapiente",
        ],
    ),
)
    
res = s.amp_urls.acceleratedmobilepageurl_amp_urls_batch_get(req)

if res.batch_get_amp_urls_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->