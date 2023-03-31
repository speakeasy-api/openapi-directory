<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetSectionFormatRequest(
    callback="corrupti",
    format="jsonp",
    section="tmagazine",
)
    
res = s.stories.get_section_format_(req)

if res.get_section_format_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->