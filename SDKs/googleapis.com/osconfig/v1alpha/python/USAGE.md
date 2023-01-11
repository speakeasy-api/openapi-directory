<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest(
    security=operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListPathParams(
        parent="corrupti",
    ),
    query_params=operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListQueryParams(
        dollar_xgafv="1",
        access_token="aut",
        alt="json",
        callback="iure",
        fields="dignissimos",
        filter="occaecati",
        key="adipisci",
        oauth_token="occaecati",
        page_size=2000460280673630150,
        page_token="enim",
        pretty_print=False,
        quota_user="impedit",
        upload_type="et",
        upload_protocol="voluptatem",
    ),
)
    
res = s.projects.osconfig_projects_locations_instance_os_policies_compliances_list(req)

if res.list_instance_os_policies_compliances_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->