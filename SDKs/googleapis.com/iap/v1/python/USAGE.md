<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IapProjectsBrandsCreateRequest(
    security=operations.IapProjectsBrandsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.IapProjectsBrandsCreatePathParams(
        parent="et",
    ),
    query_params=operations.IapProjectsBrandsCreateQueryParams(
        dollar_xgafv="2",
        access_token="voluptatem",
        alt="json",
        callback="quibusdam",
        fields="velit",
        key="rerum",
        oauth_token="blanditiis",
        pretty_print=False,
        quota_user="et",
        upload_type="accusamus",
        upload_protocol="occaecati",
    ),
    request=shared.BrandInput(
        application_title="accusamus",
        support_email="maiores",
    ),
)
    
res = s.projects.iap_projects_brands_create(req)

if res.brand is not None:
    # handle response
```
<!-- End SDK Example Usage -->