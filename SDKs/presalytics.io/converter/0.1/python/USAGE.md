<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SvgconvertFileToConvert(
    file=operations.SvgconvertFileToConvertFile(
        content="corrupti".encode(),
        file="provident",
    ),
)
    
res = s.svgconvert(req)

if res.file_url is not None:
    # handle response
```
<!-- End SDK Example Usage -->