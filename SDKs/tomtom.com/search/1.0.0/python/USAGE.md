<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetSearchVersionNumberAdditionalDataExtRequest(
    ext="json",
    geometries="corrupti",
    geometries_zoom="13",
    version_number="2",
)
    
res = s.additional_data.get_search_version_number_additional_data_ext_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->