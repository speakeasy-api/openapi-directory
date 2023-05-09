<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest req = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                dailyMetrics = new org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum[]{{
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BUSINESS_DIRECTION_REQUESTS),
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BUSINESS_FOOD_ORDERS),
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BUSINESS_CONVERSATIONS),
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.CALL_CLICKS),
                }};
                dailyRangeEndDateDay = 645894L;
                dailyRangeEndDateMonth = 384382L;
                dailyRangeEndDateYear = 437587L;
                dailyRangeStartDateDay = 297534L;
                dailyRangeStartDateMonth = 891773L;
                dailyRangeStartDateYear = 56713L;
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesResponse res = sdk.locations.businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries(req);

            if (res.fetchMultiDailyMetricsTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->