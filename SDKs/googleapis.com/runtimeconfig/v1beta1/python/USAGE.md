<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RuntimeconfigProjectsConfigsCreateRequest(
    security=operations.RuntimeconfigProjectsConfigsCreateSecurity(
        option1=operations.RuntimeconfigProjectsConfigsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.RuntimeconfigProjectsConfigsCreatePathParams(
        parent="consequatur",
    ),
    query_params=operations.RuntimeconfigProjectsConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="aut",
        alt="proto",
        callback="hic",
        fields="nostrum",
        key="ex",
        oauth_token="sint",
        pretty_print=True,
        quota_user="atque",
        request_id="eos",
        upload_type="sed",
        upload_protocol="molestiae",
    ),
    request=shared.RuntimeConfig(
        description="impedit",
        name="accusantium",
    ),
)
    
res = s.projects.runtimeconfig_projects_configs_create(req)

if res.runtime_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->