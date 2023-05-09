# RootCloudUtilization

## Overview

Cloud utilization.

### Available Operations

* [DoCloudOutForecast](#docloudoutforecast) - Forecast of the cloud utilization for CloudOut

## DoCloudOutForecast

Forecast of the cloud storage and compute utilization on cloud archival location according to the SLA Domain parameters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootCloudUtilization.DoCloudOutForecast(ctx, shared.CloudOutForecastRequest{
        ConsolidationFilter: shared.ForecastConsolidationFilterEnumForecastWithAndWithoutConsolidation,
        ForecastPeriodInGranularityUnit: 164694,
        Granularity: shared.ForecastGranularityEnumYear,
        SLAParameters: shared.CloudOutForecastSLAParameters{
            AdvancedUIConfig: []shared.AdvancedUIConfigAttributes{
                shared.AdvancedUIConfigAttributes{
                    RetentionType: shared.SLATimeUnitEnumMinute,
                    TimeUnit: shared.SLATimeUnitEnumMonthly,
                },
                shared.AdvancedUIConfigAttributes{
                    RetentionType: shared.SLATimeUnitEnumMonthly,
                    TimeUnit: shared.SLATimeUnitEnumHourly,
                },
                shared.AdvancedUIConfigAttributes{
                    RetentionType: shared.SLATimeUnitEnumYearly,
                    TimeUnit: shared.SLATimeUnitEnumYearly,
                },
            },
            ArchivalSpecs: &shared.ArchivalSpecV2{
                ArchivalThreshold: 267262,
                ArchivalTieringSpec: &shared.ArchivalTieringSpec{
                    ColdStorageClass: shared.CloudStorageColdTierEnumGlacier.ToPointer(),
                    IsInstantTieringEnabled: false,
                    MinAccessibleDurationInSeconds: sdk.Int64(679091),
                    ShouldTierExistingSnapshots: sdk.Bool(false),
                },
                IsPassthroughSupported: sdk.Bool(false),
                LocationID: sdk.String("deleniti"),
                LocationName: sdk.String("pariatur"),
                PolarisManagedID: sdk.String("provident"),
            },
            Frequencies: shared.SLAFrequencyV2{
                Daily: &shared.FrequencyConfig{
                    Frequency: 750844,
                    Retention: 730122,
                },
                Hourly: &shared.FrequencyConfig{
                    Frequency: 964490,
                    Retention: 311945,
                },
                Minute: &shared.FrequencyConfig{
                    Frequency: 554242,
                    Retention: 398221,
                },
                Monthly: &shared.MonthlyConfig{
                    DayOfMonth: shared.SLADayOfMonthEnumFirstDay,
                    Frequency: 209843,
                    Retention: 222443,
                },
                Quarterly: &shared.QuarterlyConfig{
                    DayOfQuarter: shared.SLADayOfQuarterEnumFirstDay,
                    FirstQuarterStartMonth: shared.SLAMonthEnumMarch,
                    Frequency: 944373,
                    Retention: 569574,
                },
                Weekly: &shared.WeeklyConfig{
                    DayOfWeek: shared.SLADayOfWeekEnumSaturday,
                    Frequency: 452109,
                    Retention: 490459,
                },
                Yearly: &shared.YearlyConfig{
                    DayOfYear: shared.SLADayOfYearEnumLastDay,
                    Frequency: 227414,
                    Retention: 680545,
                    YearStartMonth: shared.SLAMonthEnumApril,
                },
            },
            MaxLocalRetentionLimit: sdk.Int64(85295),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CloudOutForecastSummary != nil {
        // handle response
    }
}
```
