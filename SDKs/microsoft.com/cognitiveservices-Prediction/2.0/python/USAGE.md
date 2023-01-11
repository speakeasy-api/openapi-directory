<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PredictImageRequest(
    path_params=operations.PredictImagePathParams(
        project_id="quae",
    ),
    query_params=operations.PredictImageQueryParams(
        application="assumenda",
        iteration_id="consequatur",
    ),
    headers=operations.PredictImageHeaders(
        prediction_key="nostrum",
    ),
    request=operations.PredictImageRequestBody(
        image_data=operations.PredictImageRequestBodyImageData(
            content="aut".encode(),
            image_data="quia",
        ),
    ),
)
    
res = s.image_prediction_api.predict_image(req)

if res.image_prediction is not None:
    # handle response
```
<!-- End SDK Example Usage -->