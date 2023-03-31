<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETUserContentByDateJSONRequest(
    date_="corrupti",
)
    
res = s.get_user_content_by_date_json(req, operations.GETUserContentByDateJSONSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_user_content_by_date_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->