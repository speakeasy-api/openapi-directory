<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_auth="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetProductInfoRequest(
    code="corrupti",
)
    
res = s.product.get_product_info(req)

if res.get_product_info_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->