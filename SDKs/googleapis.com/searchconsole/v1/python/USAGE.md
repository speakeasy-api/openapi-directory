<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.WebmastersSearchanalyticsQueryRequest(
    security=operations.WebmastersSearchanalyticsQuerySecurity(
        option1=operations.WebmastersSearchanalyticsQuerySecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.WebmastersSearchanalyticsQueryPathParams(
        site_url="adipisci",
    ),
    query_params=operations.WebmastersSearchanalyticsQueryQueryParams(
        dollar_xgafv="2",
        access_token="sequi",
        alt="media",
        callback="et",
        fields="id",
        key="impedit",
        oauth_token="et",
        pretty_print=True,
        quota_user="consequuntur",
        upload_type="fugit",
        upload_protocol="aut",
    ),
    request=shared.SearchAnalyticsQueryRequest(
        aggregation_type="AUTO",
        data_state="ALL",
        dimension_filter_groups=[
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="PAGE",
                        expression="delectus",
                        operator="CONTAINS",
                    ),
                ],
                group_type="AND",
            ),
        ],
        dimensions=[
            "DATE",
            "SEARCH_APPEARANCE",
            "QUERY",
        ],
        end_date="assumenda",
        row_limit=7714857476425061931,
        search_type="VIDEO",
        start_date="delectus",
        start_row=7876677448085170865,
        type="NEWS",
    ),
)
    
res = s.searchanalytics.webmasters_searchanalytics_query(req)

if res.search_analytics_query_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->