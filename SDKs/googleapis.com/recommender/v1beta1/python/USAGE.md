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
        parent="et",
    ),
    query_params=operations.RecommenderProjectsLocationsInsightTypesInsightsListQueryParams(
        dollar_xgafv="1",
        access_token="odit",
        alt="proto",
        callback="omnis",
        fields="est",
        filter="iusto",
        key="voluptatibus",
        oauth_token="autem",
        page_size=5523822080997069527,
        page_token="similique",
        pretty_print=False,
        quota_user="commodi",
        upload_type="libero",
        upload_protocol="rem",
    ),
)
    
res = s.projects.recommender_projects_locations_insight_types_insights_list(req)

if res.google_cloud_recommender_v1beta1_list_insights_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->