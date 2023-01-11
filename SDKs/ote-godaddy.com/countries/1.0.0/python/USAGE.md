<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCountriesRequest(
    query_params=operations.GetCountriesQueryParams(
        market_id="quia",
        order="ascending",
        region_name="aut",
        region_type_id=7557410711211766278,
        sort="key",
    ),
)
    
res = s.v1.get_countries(req)

if res.array_of_country_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->