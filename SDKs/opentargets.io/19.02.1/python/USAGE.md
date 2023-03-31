<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAssociationFilterRequest(
    datasource="corrupti",
    datastructure="provident",
    datatype="distinctio",
    direct=False,
    disease="quibusdam",
    facets=False,
    fields_="unde",
    format="nulla",
    from_=5448.83,
    pathway="illum",
    scorevalue_max=4236.55,
    scorevalue_min=6235.64,
    scorevalue_types="deserunt",
    search="suscipit",
    size=4375.87,
    sort="magnam",
    target="debitis",
    target_class="ipsa",
    therapeutic_area="delectus",
    uniprotkw="tempora",
)
    
res = s.filter.get_association_filter(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->