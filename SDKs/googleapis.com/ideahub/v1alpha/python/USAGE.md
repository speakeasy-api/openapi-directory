<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.IdeahubIdeasListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    oauth_token="illum",
    order_by="vel",
    page_size=623564,
    page_token="deserunt",
    parent="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.ideas.ideahub_ideas_list(req)

if res.google_search_ideahub_v1alpha_list_ideas_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->