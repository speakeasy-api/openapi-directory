<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KgsearchEntitiesSearchRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    ids=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
    indent=False,
    key="deserunt",
    languages=[
        "iure",
        "magnam",
    ],
    limit=891773,
    oauth_token="ipsa",
    prefix=False,
    pretty_print=False,
    query="delectus",
    quota_user="tempora",
    types=[
        "molestiae",
        "minus",
    ],
    upload_type="placeat",
    upload_protocol="voluptatum",
)
    
res = s.entities.kgsearch_entities_search(req)

if res.search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->