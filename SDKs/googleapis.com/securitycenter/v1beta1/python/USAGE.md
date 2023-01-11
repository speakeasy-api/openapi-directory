<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SecuritycenterOrganizationsAssetsGroupRequest(
    security=operations.SecuritycenterOrganizationsAssetsGroupSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.SecuritycenterOrganizationsAssetsGroupPathParams(
        parent="dolorum",
    ),
    query_params=operations.SecuritycenterOrganizationsAssetsGroupQueryParams(
        dollar_xgafv="2",
        access_token="qui",
        alt="media",
        callback="et",
        fields="aspernatur",
        key="sint",
        oauth_token="voluptatum",
        pretty_print=True,
        quota_user="porro",
        upload_type="consequatur",
        upload_protocol="est",
    ),
    request=shared.GroupAssetsRequest(
        compare_duration="quasi",
        filter="quaerat",
        group_by="sint",
        page_size=1731799868784527392,
        page_token="dolor",
        read_time="ratione",
    ),
)
    
res = s.organizations.securitycenter_organizations_assets_group(req)

if res.group_assets_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->