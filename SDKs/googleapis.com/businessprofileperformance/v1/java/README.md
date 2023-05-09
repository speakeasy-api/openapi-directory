# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries](docs/locations/README.md#businessprofileperformancelocationsfetchmultidailymetricstimeseries) -  Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [businessprofileperformanceLocationsGetDailyMetricsTimeSeries](docs/locations/README.md#businessprofileperformancelocationsgetdailymetricstimeseries) -  Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`
* [businessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyList](docs/locations/README.md#businessprofileperformancelocationssearchkeywordsimpressionsmonthlylist) - Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
