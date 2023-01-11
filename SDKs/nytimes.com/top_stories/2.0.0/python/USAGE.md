<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetSectionFormatRequest(
    path_params=operations.GetSectionFormatPathParams(
        format="json",
        section="national",
    ),
    query_params=operations.GetSectionFormatQueryParams(
        callback="consequatur",
    ),
)
    
res = s.stories.get_section_format_(req)

if res.get_section_format_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->