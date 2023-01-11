<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RunNamespacesAuthorizeddomainsListRequest(
    security=operations.RunNamespacesAuthorizeddomainsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RunNamespacesAuthorizeddomainsListPathParams(
        parent="iusto",
    ),
    query_params=operations.RunNamespacesAuthorizeddomainsListQueryParams(
        dollar_xgafv="2",
        access_token="aliquam",
        alt="media",
        callback="veniam",
        fields="corrupti",
        key="numquam",
        oauth_token="corporis",
        page_size=3474863021808018737,
        page_token="sint",
        pretty_print=False,
        quota_user="in",
        upload_type="dolorum",
        upload_protocol="maiores",
    ),
)
    
res = s.namespaces.run_namespaces_authorizeddomains_list(req)

if res.list_authorized_domains_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->