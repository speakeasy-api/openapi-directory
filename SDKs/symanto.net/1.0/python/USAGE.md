<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.CommunicationRequest(
    request_body=[
        shared.Post(
            id="1",
            language="en",
            text="I love the service",
        ),
        shared.Post(
            id="1",
            language="en",
            text="I love the service",
        ),
        shared.Post(
            id="1",
            language="en",
            text="I love the service",
        ),
    ],
    all=False,
)
    
res = s.text_analysis.communication(req)

if res.prediction_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->