# rootCloudUtilization

## Overview

Cloud utilization.

### Available Operations

* [doCloudOutForecast](#docloudoutforecast) - Forecast of the cloud utilization for CloudOut

## doCloudOutForecast

Forecast of the cloud storage and compute utilization on cloud archival location according to the SLA Domain parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoCloudOutForecastResponse;
import org.openapis.openapi.models.shared.AdvancedUiConfigAttributes;
import org.openapis.openapi.models.shared.ArchivalSpecV2;
import org.openapis.openapi.models.shared.ArchivalTieringSpec;
import org.openapis.openapi.models.shared.CloudOutForecastRequest;
import org.openapis.openapi.models.shared.CloudOutForecastSlaParameters;
import org.openapis.openapi.models.shared.CloudStorageColdTierEnum;
import org.openapis.openapi.models.shared.ForecastConsolidationFilterEnum;
import org.openapis.openapi.models.shared.ForecastGranularityEnum;
import org.openapis.openapi.models.shared.FrequencyConfig;
import org.openapis.openapi.models.shared.MonthlyConfig;
import org.openapis.openapi.models.shared.QuarterlyConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SlaDayOfMonthEnum;
import org.openapis.openapi.models.shared.SlaDayOfQuarterEnum;
import org.openapis.openapi.models.shared.SlaDayOfWeekEnum;
import org.openapis.openapi.models.shared.SlaDayOfYearEnum;
import org.openapis.openapi.models.shared.SlaFrequencyV2;
import org.openapis.openapi.models.shared.SlaMonthEnum;
import org.openapis.openapi.models.shared.SlaTimeUnitEnum;
import org.openapis.openapi.models.shared.WeeklyConfig;
import org.openapis.openapi.models.shared.YearlyConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("mollitia", "dolorem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.CloudOutForecastRequest req = new CloudOutForecastRequest(ForecastConsolidationFilterEnum.FORECAST_WITHOUT_CONSOLIDATION, 161309, ForecastGranularityEnum.YEAR,                 new CloudOutForecastSlaParameters(                new SlaFrequencyV2() {{
                                                daily = new FrequencyConfig(653108, 581850);;
                                                hourly = new FrequencyConfig(253291, 414369);;
                                                minute = new FrequencyConfig(466311, 474697);;
                                                monthly = new MonthlyConfig(SlaDayOfMonthEnum.FIRST_DAY, 623510, 158969);;
                                                quarterly = new QuarterlyConfig(SlaDayOfQuarterEnum.FIRST_DAY, SlaMonthEnum.FEBRUARY, 674752, 656330);;
                                                weekly = new WeeklyConfig(SlaDayOfWeekEnum.WEDNESDAY, 138183, 778346);;
                                                yearly = new YearlyConfig(SlaDayOfYearEnum.FIRST_DAY, 949572, 368725, SlaMonthEnum.AUGUST);;
                                            }};) {{
                                advancedUiConfig = new org.openapis.openapi.models.shared.AdvancedUiConfigAttributes[]{{
                                    add(new AdvancedUiConfigAttributes(SlaTimeUnitEnum.MONTHLY, SlaTimeUnitEnum.QUARTERLY) {{
                                        retentionType = SlaTimeUnitEnum.MINUTE;
                                        timeUnit = SlaTimeUnitEnum.MINUTE;
                                    }}),
                                    add(new AdvancedUiConfigAttributes(SlaTimeUnitEnum.YEARLY, SlaTimeUnitEnum.YEARLY) {{
                                        retentionType = SlaTimeUnitEnum.MONTHLY;
                                        timeUnit = SlaTimeUnitEnum.MINUTE;
                                    }}),
                                    add(new AdvancedUiConfigAttributes(SlaTimeUnitEnum.WEEKLY, SlaTimeUnitEnum.YEARLY) {{
                                        retentionType = SlaTimeUnitEnum.YEARLY;
                                        timeUnit = SlaTimeUnitEnum.WEEKLY;
                                    }}),
                                    add(new AdvancedUiConfigAttributes(SlaTimeUnitEnum.WEEKLY, SlaTimeUnitEnum.QUARTERLY) {{
                                        retentionType = SlaTimeUnitEnum.MINUTE;
                                        timeUnit = SlaTimeUnitEnum.MONTHLY;
                                    }}),
                                }};
                                archivalSpecs = new ArchivalSpecV2(19987L) {{
                                    archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                        coldStorageClass = CloudStorageColdTierEnum.AZURE_ARCHIVE;
                                        minAccessibleDurationInSeconds = 441711L;
                                        shouldTierExistingSnapshots = false;
                                    }};;
                                    isPassthroughSupported = false;
                                    locationId = "ut";
                                    locationName = "maiores";
                                    polarisManagedId = "dicta";
                                }};;
                                maxLocalRetentionLimit = 359444L;
                            }};);            

            DoCloudOutForecastResponse res = sdk.rootCloudUtilization.doCloudOutForecast(req);

            if (res.cloudOutForecastSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
