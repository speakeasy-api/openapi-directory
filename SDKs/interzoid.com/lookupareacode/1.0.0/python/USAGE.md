<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetareacodeRequest(
    query_params=operations.GetareacodeQueryParams(
        areacode="minima",
        license="in",
    ),
)
    
res = s.area_code_information.getareacode(req)

if res.getareacode_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->