<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.PostAssetsCorrelationMatrixRequest(
    request="aperiam",
)
    
res = s.assets_correlation_matrix.post_assets_correlation_matrix(req)

if res.post_assets_correlation_matrix_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->