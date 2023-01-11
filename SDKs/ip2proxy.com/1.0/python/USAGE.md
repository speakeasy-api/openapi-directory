<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRequest(
    query_params=operations.GetQueryParams(
        format="xml",
        ip="fuga",
        key="repudiandae",
        package="quisquam",
    ),
)
    
res = s.get_(req)

if res.get_200_text_html_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->