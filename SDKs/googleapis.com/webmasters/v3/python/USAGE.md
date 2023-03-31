<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebmastersSearchanalyticsQueryRequest(
    search_analytics_query_request=shared.SearchAnalyticsQueryRequest(
        aggregation_type="corrupti",
        data_state="provident",
        dimension_filter_groups=[
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="unde",
                        expression="nulla",
                        operator="corrupti",
                    ),
                    shared.APIDimensionFilter(
                        dimension="illum",
                        expression="vel",
                        operator="error",
                    ),
                    shared.APIDimensionFilter(
                        dimension="deserunt",
                        expression="suscipit",
                        operator="iure",
                    ),
                    shared.APIDimensionFilter(
                        dimension="magnam",
                        expression="debitis",
                        operator="ipsa",
                    ),
                ],
                group_type="delectus",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="suscipit",
                        expression="molestiae",
                        operator="minus",
                    ),
                    shared.APIDimensionFilter(
                        dimension="placeat",
                        expression="voluptatum",
                        operator="iusto",
                    ),
                ],
                group_type="excepturi",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="recusandae",
                        expression="temporibus",
                        operator="ab",
                    ),
                    shared.APIDimensionFilter(
                        dimension="quis",
                        expression="veritatis",
                        operator="deserunt",
                    ),
                ],
                group_type="perferendis",
            ),
        ],
        dimensions=[
            "repellendus",
            "sapiente",
        ],
        end_date="quo",
        row_limit=140350,
        search_type="at",
        start_date="at",
        start_row=978619,
    ),
    alt="json",
    fields_="molestiae",
    key="quod",
    oauth_token="quod",
    pretty_print=False,
    quota_user="esse",
    site_url="totam",
    user_ip="porro",
)
    
res = s.searchanalytics.webmasters_searchanalytics_query(req, operations.WebmastersSearchanalyticsQuerySecurity(
    option1=operations.WebmastersSearchanalyticsQuerySecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.search_analytics_query_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->