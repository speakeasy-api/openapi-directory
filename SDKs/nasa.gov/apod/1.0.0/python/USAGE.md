<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetApodRequest(
    date_="corrupti",
    hd=False,
)
    
res = s.request_tag.get_apod(req, operations.GetApodSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_apod_200_application_json_anies is not None:
    # handle response
```
<!-- End SDK Example Usage -->