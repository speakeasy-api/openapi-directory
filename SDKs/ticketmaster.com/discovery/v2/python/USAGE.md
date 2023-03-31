<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FindRequest(
    classification_id=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    classification_name=[
        "nulla",
        "corrupti",
        "illum",
    ],
    id="vel",
    include_licensed_content=" no",
    include_spellcheck=" no",
    include_test=" no",
    keyword="iure",
    locale="magnam",
    page="debitis",
    size="ipsa",
    sort="delectus",
    source=" universe",
)
    
res = s.find(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->