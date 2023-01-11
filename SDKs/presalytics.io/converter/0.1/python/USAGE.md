<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SvgconvertRequest(
    request=operations.SvgconvertFileToConvert(
        file=operations.SvgconvertFileToConvertFile(
            content="assumenda".encode(),
            file="sit",
        ),
    ),
)
    
res = s.svgconvert(req)

if res.file_url is not None:
    # handle response
```
<!-- End SDK Example Usage -->