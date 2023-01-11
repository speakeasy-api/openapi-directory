<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest req = new BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest() {{
                pathParams = new BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams() {{
                    name = "sit";
                }};
                queryParams = new BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    dailyMetric = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS";
                    dailyRangeEndDateDay = 1774932891286980153;
                    dailyRangeEndDateMonth = 6044372234677422456;
                    dailyRangeEndDateYear = 8274930044578894929;
                    dailyRangeStartDateDay = 1543572285742637646;
                    dailyRangeStartDateMonth = 2661732831099943416;
                    dailyRangeStartDateYear = 8325060299420976708;
                    dailySubEntityTypeDayOfWeek = "WEDNESDAY";
                    dailySubEntityTypeTimeOfDayHours = 2518412263346885298;
                    dailySubEntityTypeTimeOfDayMinutes = 5617773211005988520;
                    dailySubEntityTypeTimeOfDayNanos = 2339563716805116249;
                    dailySubEntityTypeTimeOfDaySeconds = 7144924247938981575;
                    fields = "dolorem";
                    key = "et";
                    oauthToken = "voluptate";
                    prettyPrint = true;
                    quotaUser = "vitae";
                    uploadType = "totam";
                    uploadProtocol = "dolores";
                }};
            }};

            BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse res = sdk.locations.businessprofileperformanceLocationsGetDailyMetricsTimeSeries(req);

            if (res.getDailyMetricsTimeSeriesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->