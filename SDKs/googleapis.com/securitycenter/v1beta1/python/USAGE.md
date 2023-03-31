<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SecuritycenterOrganizationsAssetsGroupRequest(
    dollar_xgafv="2",
    group_assets_request=shared.GroupAssetsRequest(
        compare_duration="provident",
        filter="distinctio",
        group_by="quibusdam",
        page_size=602763,
        page_token="nulla",
        read_time="corrupti",
    ),
    access_token="illum",
    alt="media",
    callback="error",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    parent="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.organizations.securitycenter_organizations_assets_group(req, operations.SecuritycenterOrganizationsAssetsGroupSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.group_assets_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->