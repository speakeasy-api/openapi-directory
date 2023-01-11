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
    
req = operations.AddImageWatermarkV1Request(
    request=operations.AddImageWatermarkV1RequestBody(
        file=operations.AddImageWatermarkV1RequestBodyFile(
            content="illum".encode(),
            file="deleniti",
        ),
        image=operations.AddImageWatermarkV1RequestBodyImage(
            content="eius".encode(),
            image="sed",
        ),
        margin=58.200001,
        transparency=830999398038749909,
    ),
)
    
res = s.add_image_watermark_v1(req)

if res.add_image_watermark_v1_200_application_pdf_binary_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->