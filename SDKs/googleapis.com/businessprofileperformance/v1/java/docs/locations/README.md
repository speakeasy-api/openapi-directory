# locations

### Available Operations

* [businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries](#businessprofileperformancelocationsfetchmultidailymetricstimeseries) -  Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [businessprofileperformanceLocationsGetDailyMetricsTimeSeries](#businessprofileperformancelocationsgetdailymetricstimeseries) -  Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList](#businessprofileperformancelocationssearchkeywordsimpressionsmonthlylist) - Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

## businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries

 Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example Usage

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

            BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest req = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                dailyMetrics = new org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum[]{{
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.DAILY_METRIC_UNKNOWN),
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BUSINESS_IMPRESSIONS_MOBILE_SEARCH),
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.BUSINESS_IMPRESSIONS_DESKTOP_MAPS),
                    add(BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum.CALL_CLICKS),
                }};
                dailyRangeEndDateDay = 20218L;
                dailyRangeEndDateMonth = 368241L;
                dailyRangeEndDateYear = 832620L;
                dailyRangeStartDateDay = 957156L;
                dailyRangeStartDateMonth = 778157L;
                dailyRangeStartDateYear = 140350L;
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
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

## businessprofileperformanceLocationsGetDailyMetricsTimeSeries

 Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest req = new BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                dailyMetric = BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum.WEBSITE_CLICKS;
                dailyRangeEndDateDay = 639921L;
                dailyRangeEndDateMonth = 582020L;
                dailyRangeEndDateYear = 143353L;
                dailyRangeStartDateDay = 537373L;
                dailyRangeStartDateMonth = 944669L;
                dailyRangeStartDateYear = 758616L;
                dailySubEntityTypeDayOfWeek = BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum.THURSDAY;
                dailySubEntityTypeTimeOfDayHours = 105907L;
                dailySubEntityTypeTimeOfDayMinutes = 414662L;
                dailySubEntityTypeTimeOfDayNanos = 473600L;
                dailySubEntityTypeTimeOfDaySeconds = 264555L;
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse res = sdk.locations.businessprofileperformanceLocationsGetDailyMetricsTimeSeries(req);

            if (res.getDailyMetricsTimeSeriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList

Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest;
import org.openapis.openapi.models.operations.BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest req = new BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "iste";
                key = "dolor";
                monthlyRangeEndMonthDay = 616934L;
                monthlyRangeEndMonthMonth = 386489L;
                monthlyRangeEndMonthYear = 943749L;
                monthlyRangeStartMonthDay = 902599L;
                monthlyRangeStartMonthMonth = 681820L;
                monthlyRangeStartMonthYear = 449950L;
                oauthToken = "corporis";
                pageSize = 613064L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse res = sdk.locations.businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList(req);

            if (res.listSearchKeywordImpressionsMonthlyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
