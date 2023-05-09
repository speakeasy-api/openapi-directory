# searchanalytics

### Available Operations

* [webmastersSearchanalyticsQuery](#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

## webmastersSearchanalyticsQuery

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryRequest;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQueryResponse;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurity;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSearchanalyticsQuerySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilter;
import org.openapis.openapi.models.shared.ApiDimensionFilterDimensionEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.ApiDimensionFilterGroupGroupTypeEnum;
import org.openapis.openapi.models.shared.ApiDimensionFilterOperatorEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestAggregationTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDataStateEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestSearchTypeEnum;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest() {{
                    aggregationType = SearchAnalyticsQueryRequestAggregationTypeEnum.BY_PROPERTY;
                    dataState = SearchAnalyticsQueryRequestDataStateEnum.ALL;
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.QUERY;
                                    expression = "commodi";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.PAGE;
                                    expression = "qui";
                                    operator = ApiDimensionFilterOperatorEnum.INCLUDING_REGEX;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.DEVICE;
                                    expression = "esse";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_EQUALS;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.QUERY;
                                    expression = "perferendis";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_EQUALS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.DEVICE;
                                    expression = "sed";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_CONTAINS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.PAGE;
                                    expression = "natus";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.SEARCH_APPEARANCE;
                                    expression = "fuga";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.PAGE;
                                    expression = "iste";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.SEARCH_APPEARANCE;
                                    expression = "quidem";
                                    operator = ApiDimensionFilterOperatorEnum.EQUALS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.QUERY;
                                    expression = "reiciendis";
                                    operator = ApiDimensionFilterOperatorEnum.INCLUDING_REGEX;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.DEVICE;
                                    expression = "dolores";
                                    operator = ApiDimensionFilterOperatorEnum.NOT_EQUALS;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.PAGE;
                                    expression = "explicabo";
                                    operator = ApiDimensionFilterOperatorEnum.INCLUDING_REGEX;
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = ApiDimensionFilterDimensionEnum.PAGE;
                                    expression = "omnis";
                                    operator = ApiDimensionFilterOperatorEnum.CONTAINS;
                                }}),
                            }};
                            groupType = ApiDimensionFilterGroupGroupTypeEnum.AND;
                        }}),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.SearchAnalyticsQueryRequestDimensionsEnum[]{{
                        add(SearchAnalyticsQueryRequestDimensionsEnum.COUNTRY),
                        add(SearchAnalyticsQueryRequestDimensionsEnum.DATE),
                    }};
                    endDate = "iure";
                    rowLimit = 634274;
                    searchType = SearchAnalyticsQueryRequestSearchTypeEnum.GOOGLE_NEWS;
                    startDate = "sapiente";
                    startRow = 102044;
                    type = SearchAnalyticsQueryRequestTypeEnum.NEWS;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            WebmastersSearchanalyticsQueryResponse res = sdk.searchanalytics.webmastersSearchanalyticsQuery(req, new WebmastersSearchanalyticsQuerySecurity() {{
                option1 = new WebmastersSearchanalyticsQuerySecurityOption1("molestiae", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchAnalyticsQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
