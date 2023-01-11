<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetApodRequest(
    security=operations.GetApodSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetApodQueryParams(
        date_="dignissimos",
        hd=True,
    ),
)
    
res = s.request_tag.get_apod(req)

if res.get_apod_200_application_json_anies is not None:
    # handle response
```
<!-- End SDK Example Usage -->