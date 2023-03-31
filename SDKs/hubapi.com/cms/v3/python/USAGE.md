<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCmsV3DomainsGetPageRequest(
    after="corrupti",
    archived=False,
    created_after="2021-07-27T21:52:56.087Z",
    created_at="2021-03-11T23:22:42.658Z",
    created_before="2021-05-14T08:28:11.899Z",
    limit=847252,
    sort=[
        "error",
        "deserunt",
    ],
    updated_after="2022-07-25T06:44:09.184Z",
    updated_at="2022-02-09T12:04:06.508Z",
    updated_before="2022-01-14T06:18:51.036Z",
)
    
res = s.domains.get_cms_v3_domains_get_page(req, operations.GetCmsV3DomainsGetPageSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.collection_response_with_total_domain_forward_paging is not None:
    # handle response
```
<!-- End SDK Example Usage -->