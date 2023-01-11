<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetV1CategoryListOutputFormatRequest(
    path_params=operations.GetV1CategoryListOutputFormatPathParams(
        output_format="xml",
    ),
    query_params=operations.GetV1CategoryListOutputFormatQueryParams(
        api_key="beatae",
        type="user",
    ),
)
    
res = s.get_v1_category_list_output_format_(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->