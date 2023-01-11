<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PredictImageRequest(
    path_params=operations.PredictImagePathParams(
        project_id="officiis",
    ),
    query_params=operations.PredictImageQueryParams(
        application="accusamus",
        iteration_id="veniam",
    ),
    headers=operations.PredictImageHeaders(
        prediction_key="autem",
    ),
    request=operations.PredictImageRequestBody(
        image_data=operations.PredictImageRequestBodyImageData(
            content="eum".encode(),
            image_data="assumenda",
        ),
    ),
)
    
res = s.image_prediction_api.predict_image(req)

if res.image_prediction_result_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->