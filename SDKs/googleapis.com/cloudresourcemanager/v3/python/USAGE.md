<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudresourcemanagerEffectiveTagsListRequest(
    security=operations.CloudresourcemanagerEffectiveTagsListSecurity(
        option1=operations.CloudresourcemanagerEffectiveTagsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.CloudresourcemanagerEffectiveTagsListQueryParams(
        dollar_xgafv="2",
        access_token="mollitia",
        alt="media",
        callback="non",
        fields="id",
        key="consequatur",
        oauth_token="aspernatur",
        page_size=304540307133973153,
        page_token="similique",
        parent="rerum",
        pretty_print=False,
        quota_user="ea",
        upload_type="odit",
        upload_protocol="vitae",
    ),
)
    
res = s.effective_tags.cloudresourcemanager_effective_tags_list(req)

if res.list_effective_tags_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->