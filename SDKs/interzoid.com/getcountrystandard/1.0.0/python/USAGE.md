<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetcountrystandardRequest(
    query_params=operations.GetcountrystandardQueryParams(
        country="sunt",
        license="aut",
    ),
)
    
res = s.country_name_standardization.getcountrystandard(req)

if res.getcountrystandard_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->