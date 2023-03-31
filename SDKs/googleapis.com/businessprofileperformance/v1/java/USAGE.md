<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesPathParams;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesQueryParams;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest req = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest() {{
                pathParams = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesPathParams() {{
                    location = "corrupti";
                }};
                queryParams = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    dailyMetrics = new org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum[]{{
                        add("BUSINESS_DIRECTION_REQUESTS"),
                        add("BUSINESS_FOOD_ORDERS"),
                        add("BUSINESS_CONVERSATIONS"),
                        add("CALL_CLICKS"),
                    }};
                    dailyRangeEndDateDay = 645894;
                    dailyRangeEndDateMonth = 384382;
                    dailyRangeEndDateYear = 437587;
                    dailyRangeStartDateDay = 297534;
                    dailyRangeStartDateMonth = 891773;
                    dailyRangeStartDateYear = 56713;
                    fields = "delectus";
                    key = "tempora";
                    oauthToken = "suscipit";
                    prettyPrint = false;
                    quotaUser = "molestiae";
                    uploadType = "minus";
                    uploadProtocol = "placeat";
                }};
            }};            

            BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesResponse res = sdk.locations.businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries(req);

            if (res.fetchMultiDailyMetricsTimeSeriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->