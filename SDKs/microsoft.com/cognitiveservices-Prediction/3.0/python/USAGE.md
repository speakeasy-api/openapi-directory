<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apim_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.ClassifyImageRequest(
    request_body=operations.ClassifyImageRequestBody(
        image_data=operations.ClassifyImageRequestBodyImageData(
            content="corrupti".encode(),
            image_data="provident",
        ),
    ),
    application="distinctio",
    project_id="d9d8d69a-674e-40f4-a7cc-8796ed151a05",
    published_name="repellendus",
)
    
res = s.image_prediction_api.classify_image(req)

if res.image_prediction is not None:
    # handle response
```
<!-- End SDK Example Usage -->