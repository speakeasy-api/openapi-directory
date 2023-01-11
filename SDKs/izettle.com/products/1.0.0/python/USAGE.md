<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCategoriesRequest(
    security=operations.CreateCategoriesSecurity(
        zettle_api_key=shared.SchemeZettleAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.CreateCategoriesPathParams(
        organization_uuid="aut",
    ),
    request=shared.CategoryRequest(
        categories=[
            shared.CategoryDto(
                name="debitis",
                uuid="ut",
            ),
        ],
    ),
)
    
res = s.categories.create_categories(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->