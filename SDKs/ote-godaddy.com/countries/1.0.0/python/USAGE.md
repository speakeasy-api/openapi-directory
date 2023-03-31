<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCountriesRequest(
    market_id="corrupti",
    order="descending",
    region_name="distinctio",
    region_type_id=844266,
    sort="label",
)
    
res = s.v1.get_countries(req)

if res.array_of_country_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->