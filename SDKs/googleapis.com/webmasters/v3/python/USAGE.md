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
        site_url="non",
    ),
    query_params=operations.WebmastersSearchanalyticsQueryQueryParams(
        alt="json",
        fields="eos",
        key="aut",
        oauth_token="dolores",
        pretty_print=True,
        quota_user="beatae",
        user_ip="aliquid",
    ),
    request=shared.SearchAnalyticsQueryRequest(
        aggregation_type="adipisci",
        data_state="nostrum",
        dimension_filter_groups=[
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="aut",
                        expression="cumque",
                        operator="et",
                    ),
                ],
                group_type="atque",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="nobis",
                        expression="doloribus",
                        operator="veniam",
                    ),
                    shared.APIDimensionFilter(
                        dimension="rem",
                        expression="pariatur",
                        operator="totam",
                    ),
                    shared.APIDimensionFilter(
                        dimension="error",
                        expression="et",
                        operator="dolore",
                    ),
                ],
                group_type="corporis",
            ),
        ],
        dimensions=[
            "blanditiis",
            "vitae",
        ],
        end_date="ullam",
        row_limit=5161140233781953582,
        search_type="dolorem",
        start_date="ea",
        start_row=940405060983898307,
    ),
)
    
res = s.searchanalytics.webmasters_searchanalytics_query(req)

if res.search_analytics_query_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->