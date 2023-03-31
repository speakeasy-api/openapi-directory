<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRequest(
    format="xml",
    ip="provident",
    key="distinctio",
    package="quibusdam",
)
    
res = s.get_(req)

if res.get_200_text_html_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->