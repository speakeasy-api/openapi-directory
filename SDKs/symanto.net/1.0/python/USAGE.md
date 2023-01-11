<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CommunicationRequest(
    query_params=operations.CommunicationQueryParams(
        all=True,
    ),
    request=[
        shared.Post(
            id="atque",
            language="tenetur",
            text="sed",
        ),
        shared.Post(
            id="non",
            language="saepe",
            text="eum",
        ),
    ],
)
    
res = s.text_analysis.communication(req)

if res.prediction_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->