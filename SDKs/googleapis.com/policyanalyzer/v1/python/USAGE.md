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
        parent="repellendus",
    ),
    query_params=operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams(
        dollar_xgafv="2",
        access_token="qui",
        alt="json",
        callback="voluptates",
        fields="fugiat",
        filter="qui",
        key="quidem",
        oauth_token="unde",
        page_size=106263973473526583,
        page_token="omnis",
        pretty_print=True,
        quota_user="quo",
        upload_type="est",
        upload_protocol="dolor",
    ),
)
    
res = s.projects.policyanalyzer_projects_locations_activity_types_activities_query(req)

if res.google_cloud_policyanalyzer_v1_query_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->