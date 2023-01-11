<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ConvertRequest(
    request=operations.ConvertRequestBody(
        filename="aut",
        source="beatae",
        validate="on",
    ),
)
    
res = s.conversion.convert(req)

if res.convert_200_application_json_any is not None:
    # handle response
```
<!-- End SDK Example Usage -->