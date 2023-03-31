<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = [
    shared.MeasureUnitDTO(
        id=592845,
        name="distinctio",
        type="quibusdam",
    ),
    shared.MeasureUnitDTO(
        id=602763,
        name="nulla",
        type="corrupti",
    ),
    shared.MeasureUnitDTO(
        id=847252,
        name="vel",
        type="error",
    ),
]
    
res = s.article.article_add_measure_unit(req)

if res.default_response_dto_of_status_dto is not None:
    # handle response
```
<!-- End SDK Example Usage -->