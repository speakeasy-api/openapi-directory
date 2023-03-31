<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetV2AccountStagesJSONRequest(
    ids=[
        592845,
        715190,
        844266,
    ],
    include_paging_counts=False,
    limit_paging_counts=False,
    page=602763,
    per_page=857946,
    sort_by="corrupti",
    sort_direction="illum",
    updated_at=[
        "error",
        "deserunt",
    ],
)
    
res = s.account_stages.get_v2_account_stages_json(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->