<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apim_key=shared.SchemeApimKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.ClassifyImageRequest(
    path_params=operations.ClassifyImagePathParams(
        project_id="temporibus",
        published_name="est",
    ),
    query_params=operations.ClassifyImageQueryParams(
        application="ut",
    ),
    request=operations.ClassifyImageRequestBody(
        image_data=operations.ClassifyImageRequestBodyImageData(
            content="quisquam".encode(),
            image_data="quas",
        ),
    ),
)
    
res = s.image_prediction_api.classify_image(req)

if res.image_prediction is not None:
    # handle response
```
<!-- End SDK Example Usage -->