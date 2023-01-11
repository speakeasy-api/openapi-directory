<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetUserContentByDateJSONRequest(
    security=operations.GetUserContentByDateJSONSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.GetUserContentByDateJSONQueryParams(
        date_="sed",
    ),
)
    
res = s.get_user_content_by_date_json(req)

if res.get_user_content_by_date_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->