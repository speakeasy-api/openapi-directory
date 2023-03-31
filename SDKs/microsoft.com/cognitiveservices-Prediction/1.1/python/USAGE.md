<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PredictImageRequest(
    prediction_key="corrupti",
    request_body=operations.PredictImageRequestBody(
        image_data=operations.PredictImageRequestBodyImageData(
            content="provident".encode(),
            image_data="distinctio",
        ),
    ),
    application="quibusdam",
    iteration_id="9d8d69a6-74e0-4f46-bcc8-796ed151a05d",
    project_id="fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
)
    
res = s.image_prediction_api.predict_image(req)

if res.image_prediction_result_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->