<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest(
    security=operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams(
        parent="placeat",
    ),
    query_params=operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams(
        dollar_xgafv="1",
        access_token="modi",
        alt="json",
        callback="facere",
        fields="ut",
        filter="doloremque",
        key="perferendis",
        oauth_token="ut",
        page_size=8880236891396588061,
        page_token="reiciendis",
        pretty_print=False,
        quota_user="nihil",
        upload_type="minima",
        upload_protocol="eaque",
    ),
)
    
res = s.projects.policyanalyzer_projects_locations_activity_types_activities_query(req)

if res.google_cloud_policyanalyzer_v1beta1_query_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->