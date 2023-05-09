# searchanalytics

### Available Operations

* [webmastersSearchanalyticsQuery](#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

## webmastersSearchanalyticsQuery

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

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
import org.openapis.openapi.models.shared.ApiDimensionFilterGroup;
import org.openapis.openapi.models.shared.SearchAnalyticsQueryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSearchanalyticsQueryRequest req = new WebmastersSearchanalyticsQueryRequest("impedit") {{
                searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest() {{
                    aggregationType = "cum";
                    dataState = "esse";
                    dimensionFilterGroups = new org.openapis.openapi.models.shared.ApiDimensionFilterGroup[]{{
                        add(new ApiDimensionFilterGroup() {{
                            filters = new org.openapis.openapi.models.shared.ApiDimensionFilter[]{{
                                add(new ApiDimensionFilter() {{
                                    dimension = "aspernatur";
                                    expression = "perferendis";
                                    operator = "ad";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "natus";
                                    expression = "sed";
                                    operator = "iste";
                                }}),
                                add(new ApiDimensionFilter() {{
                                    dimension = "dolor";
                                    expression = "natus";
                                    operator = "laboriosam";
                                }}),
                            }};
                            groupType = "hic";
                        }}),
                    }};
                    dimensions = new String[]{{
                        add("fuga"),
                        add("in"),
                        add("corporis"),
                        add("iste"),
                    }};
                    endDate = "iure";
                    rowLimit = 902349;
                    searchType = "quidem";
                    startDate = "architecto";
                    startRow = 60225;
                }};;
                alt = AltEnum.JSON;
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                userIp = "dolores";
            }};            

            WebmastersSearchanalyticsQueryResponse res = sdk.searchanalytics.webmastersSearchanalyticsQuery(req, new WebmastersSearchanalyticsQuerySecurity() {{
                option1 = new WebmastersSearchanalyticsQuerySecurityOption1("dolorem", "corporis") {{
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
