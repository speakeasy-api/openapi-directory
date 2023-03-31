<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCategoriesRequest(
    create_categories_request=shared.CreateCategoriesRequest(
        categories=[
            shared.CategoryDTO(
                name="provident",
                uuid="bd9d8d69-a674-4e0f-867c-c8796ed151a0",
            ),
            shared.CategoryDTO(
                name="ipsam",
                uuid="dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
            ),
            shared.CategoryDTO(
                name="ipsum",
                uuid="92059293-96fe-4a75-96eb-10faaa2352c5",
            ),
        ],
    ),
    organization_uuid="955907af-f1a3-4a2f-a946-7739251aa52c",
)
    
res = s.categories.create_categories(req, operations.CreateCategoriesSecurity(
    zettle_oauth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->