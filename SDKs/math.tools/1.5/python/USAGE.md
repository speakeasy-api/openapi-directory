<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetNumbersBaseRequest(
    security=operations.GetNumbersBaseSecurity(
        x_mathtools_api_secret=shared.SchemeXMathtoolsAPISecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetNumbersBaseQueryParams(
        from_=8887604974755521055,
        number=5888790884940999119,
        to=8807121313158431121,
    ),
)
    
res = s.base_conversion.get_numbers_base(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->