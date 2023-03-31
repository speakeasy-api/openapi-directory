<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest(
    dollar_xgafv="2",
    principal=shared.Principal(
        group_resource_name="provident",
        gsuite_principal=shared.GSuitePrincipal(
            gsuite_domain=False,
            gsuite_group_email="distinctio",
            gsuite_user_email="quibusdam",
        ),
        user_resource_name="unde",
    ),
    access_token="nulla",
    alt="media",
    callback="illum",
    debug_options_enable_debugging=False,
    fields_="vel",
    key="error",
    name="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.debug.cloudsearch_debug_datasources_items_check_access(req, operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity(
    option1=operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.check_access_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->