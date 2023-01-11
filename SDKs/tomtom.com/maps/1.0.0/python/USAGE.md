<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetMapVersionNumberCopyrightsFormatRequest(
    path_params=operations.GetMapVersionNumberCopyrightsFormatPathParams(
        format="jsonp",
        version_number=915297440270195576,
    ),
    query_params=operations.GetMapVersionNumberCopyrightsFormatQueryParams(
        callback="harum",
    ),
)
    
res = s.copyrights.get_map_version_number_copyrights_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->