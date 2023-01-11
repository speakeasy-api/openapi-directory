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
                    name = "fuga";
                }};
                queryParams = new BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptatem";
                    alt = "proto";
                    callback = "excepturi";
                    dailyMetric = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS";
                    dailyRangeEndDateDay = 1925468869967025721;
                    dailyRangeEndDateMonth = 4494486465198322799;
                    dailyRangeEndDateYear = 2528456292400099089;
                    dailyRangeStartDateDay = 4387282148749707661;
                    dailyRangeStartDateMonth = 3412598359462351198;
                    dailyRangeStartDateYear = 208768941612829988;
                    dailySubEntityTypeDayOfWeek = "WEDNESDAY";
                    dailySubEntityTypeTimeOfDayHours = 1760266138700174655;
                    dailySubEntityTypeTimeOfDayMinutes = 1681031887050583978;
                    dailySubEntityTypeTimeOfDayNanos = 6621512119733687545;
                    dailySubEntityTypeTimeOfDaySeconds = 2883435266515432834;
                    fields = "dolor";
                    key = "animi";
                    oauthToken = "rerum";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "minima";
                    uploadProtocol = "eos";
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