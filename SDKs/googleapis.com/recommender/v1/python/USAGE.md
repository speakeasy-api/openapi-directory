<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest(
    security=operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RecommenderProjectsLocationsInsightTypesInsightsListPathParams(
        parent="autem",
    ),
    query_params=operations.RecommenderProjectsLocationsInsightTypesInsightsListQueryParams(
        dollar_xgafv="2",
        access_token="et",
        alt="json",
        callback="repudiandae",
        fields="non",
        filter="aut",
        key="ut",
        oauth_token="ea",
        page_size=4697312711795634432,
        page_token="necessitatibus",
        pretty_print=True,
        quota_user="ut",
        upload_type="voluptas",
        upload_protocol="voluptatem",
    ),
)
    
res = s.projects.recommender_projects_locations_insight_types_insights_list(req)

if res.google_cloud_recommender_v1_list_insights_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->