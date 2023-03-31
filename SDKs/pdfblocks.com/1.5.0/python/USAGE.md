<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddImageWatermarkV1RequestBody(
    file=operations.AddImageWatermarkV1RequestBodyFile(
        content="corrupti".encode(),
        file="provident",
    ),
    image=operations.AddImageWatermarkV1RequestBodyImage(
        content="distinctio".encode(),
        image="quibusdam",
    ),
    margin=1,
    transparency=50,
)
    
res = s.add_image_watermark_v1(req)

if res.add_image_watermark_v1_200_application_pdf_binary_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->