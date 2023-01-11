<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest(
    security=operations.SecuritycenterOrganizationsAssetsRunDiscoverySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SecuritycenterOrganizationsAssetsRunDiscoveryPathParams(
        parent="officiis",
    ),
    query_params=operations.SecuritycenterOrganizationsAssetsRunDiscoveryQueryParams(
        dollar_xgafv="1",
        access_token="omnis",
        alt="media",
        callback="ullam",
        fields="molestiae",
        key="facere",
        oauth_token="non",
        pretty_print=True,
        quota_user="quis",
        upload_type="iure",
        upload_protocol="neque",
    ),
    request={
        "aspernatur": "sed",
        "temporibus": "culpa",
        "soluta": "dolor",
    },
)
    
res = s.organizations.securitycenter_organizations_assets_run_discovery(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->