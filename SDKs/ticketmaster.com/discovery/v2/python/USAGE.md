<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FindRequest(
    query_params=operations.FindQueryParams(
        classification_id=[
            "harum",
        ],
        classification_name=[
            "et",
        ],
        id="blanditiis",
        include_licensed_content="yes",
        include_spellcheck=" no",
        include_test=" only",
        keyword="quos",
        locale="voluptate",
        page="labore",
        size="quasi",
        sort="voluptatum",
        source=" universe",
    ),
)
    
res = s.find(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->