<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebmastersSearchanalyticsQueryRequest(
    dollar_xgafv="2",
    search_analytics_query_request=shared.SearchAnalyticsQueryRequest(
        aggregation_type="BY_PROPERTY",
        data_state="ALL",
        dimension_filter_groups=[
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="SEARCH_APPEARANCE",
                        expression="corrupti",
                        operator="EXCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="error",
                        operator="NOT_CONTAINS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="PAGE",
                        expression="iure",
                        operator="NOT_EQUALS",
                    ),
                ],
                group_type="AND",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="QUERY",
                        expression="delectus",
                        operator="NOT_EQUALS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="PAGE",
                        expression="molestiae",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="SEARCH_APPEARANCE",
                        expression="voluptatum",
                        operator="CONTAINS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="nisi",
                        operator="EXCLUDING_REGEX",
                    ),
                ],
                group_type="AND",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="QUERY",
                        expression="quis",
                        operator="EQUALS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="DEVICE",
                        expression="perferendis",
                        operator="CONTAINS",
                    ),
                    shared.APIDimensionFilter(
                        dimension="SEARCH_APPEARANCE",
                        expression="sapiente",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="QUERY",
                        expression="at",
                        operator="EXCLUDING_REGEX",
                    ),
                ],
                group_type="AND",
            ),
            shared.APIDimensionFilterGroup(
                filters=[
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="quod",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="COUNTRY",
                        expression="totam",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="DEVICE",
                        expression="dicta",
                        operator="INCLUDING_REGEX",
                    ),
                    shared.APIDimensionFilter(
                        dimension="DEVICE",
                        expression="occaecati",
                        operator="EQUALS",
                    ),
                ],
                group_type="AND",
            ),
        ],
        dimensions=[
            "SEARCH_APPEARANCE",
            "DEVICE",
            "COUNTRY",
        ],
        end_date="beatae",
        row_limit=414662,
        search_type="VIDEO",
        start_date="modi",
        start_row=186332,
        type="DISCOVER",
    ),
    access_token="cum",
    alt="media",
    callback="ipsum",
    fields_="excepturi",
    key="aspernatur",
    oauth_token="perferendis",
    pretty_print=False,
    quota_user="ad",
    site_url="natus",
    upload_type="sed",
    upload_protocol="iste",
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