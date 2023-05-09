# Vitals

### Available Operations

* [PlaydeveloperreportingVitalsErrorsIssuesSearch](#playdeveloperreportingvitalserrorsissuessearch) - Searches all error issues in which reports have been grouped.
* [PlaydeveloperreportingVitalsErrorsReportsSearch](#playdeveloperreportingvitalserrorsreportssearch) - Searches all error reports received for an app.
* [PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet](#playdeveloperreportingvitalsstuckbackgroundwakelockrateget) - Describes the properties of the metric set.
* [PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery](#playdeveloperreportingvitalsstuckbackgroundwakelockratequery) - Queries the metrics in the metric set.

## PlaydeveloperreportingVitalsErrorsIssuesSearch

Searches all error issues in which reports have been grouped.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Vitals.PlaydeveloperreportingVitalsErrorsIssuesSearch(ctx, operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Filter: sdk.String("ipsam"),
        IntervalEndTimeDay: sdk.Int64(832620),
        IntervalEndTimeHours: sdk.Int64(957156),
        IntervalEndTimeMinutes: sdk.Int64(778157),
        IntervalEndTimeMonth: sdk.Int64(140350),
        IntervalEndTimeNanos: sdk.Int64(870013),
        IntervalEndTimeSeconds: sdk.Int64(870088),
        IntervalEndTimeTimeZoneID: sdk.String("maiores"),
        IntervalEndTimeTimeZoneVersion: sdk.String("molestiae"),
        IntervalEndTimeUtcOffset: sdk.String("quod"),
        IntervalEndTimeYear: sdk.Int64(800911),
        IntervalStartTimeDay: sdk.Int64(461479),
        IntervalStartTimeHours: sdk.Int64(520478),
        IntervalStartTimeMinutes: sdk.Int64(780529),
        IntervalStartTimeMonth: sdk.Int64(678880),
        IntervalStartTimeNanos: sdk.Int64(118274),
        IntervalStartTimeSeconds: sdk.Int64(720633),
        IntervalStartTimeTimeZoneID: sdk.String("officia"),
        IntervalStartTimeTimeZoneVersion: sdk.String("occaecati"),
        IntervalStartTimeUtcOffset: sdk.String("fugit"),
        IntervalStartTimeYear: sdk.Int64(537373),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        PageSize: sdk.Int64(521848),
        PageToken: sdk.String("beatae"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    }, operations.PlaydeveloperreportingVitalsErrorsIssuesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1beta1SearchErrorIssuesResponse != nil {
        // handle response
    }
}
```

## PlaydeveloperreportingVitalsErrorsReportsSearch

Searches all error reports received for an app.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Vitals.PlaydeveloperreportingVitalsErrorsReportsSearch(ctx, operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Filter: sdk.String("aspernatur"),
        IntervalEndTimeDay: sdk.Int64(18789),
        IntervalEndTimeHours: sdk.Int64(324141),
        IntervalEndTimeMinutes: sdk.Int64(617636),
        IntervalEndTimeMonth: sdk.Int64(149675),
        IntervalEndTimeNanos: sdk.Int64(612096),
        IntervalEndTimeSeconds: sdk.Int64(222321),
        IntervalEndTimeTimeZoneID: sdk.String("natus"),
        IntervalEndTimeTimeZoneVersion: sdk.String("laboriosam"),
        IntervalEndTimeUtcOffset: sdk.String("hic"),
        IntervalEndTimeYear: sdk.Int64(902599),
        IntervalStartTimeDay: sdk.Int64(681820),
        IntervalStartTimeHours: sdk.Int64(449950),
        IntervalStartTimeMinutes: sdk.Int64(359508),
        IntervalStartTimeMonth: sdk.Int64(613064),
        IntervalStartTimeNanos: sdk.Int64(437032),
        IntervalStartTimeSeconds: sdk.Int64(902349),
        IntervalStartTimeTimeZoneID: sdk.String("quidem"),
        IntervalStartTimeTimeZoneVersion: sdk.String("architecto"),
        IntervalStartTimeUtcOffset: sdk.String("ipsa"),
        IntervalStartTimeYear: sdk.Int64(969810),
        Key: sdk.String("est"),
        OauthToken: sdk.String("mollitia"),
        PageSize: sdk.Int64(670638),
        PageToken: sdk.String("dolores"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.PlaydeveloperreportingVitalsErrorsReportsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1beta1SearchErrorReportsResponse != nil {
        // handle response
    }
}
```

## PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet

Describes the properties of the metric set.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Vitals.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGet(ctx, operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet != nil {
        // handle response
    }
}
```

## PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery

Queries the metrics in the metric set.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Vitals.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuery(ctx, operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest: &shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest{
            Dimensions: []string{
                "numquam",
                "commodi",
                "quam",
            },
            Filter: sdk.String("molestiae"),
            Metrics: []string{
                "error",
            },
            PageSize: sdk.Int(158969),
            PageToken: sdk.String("quis"),
            TimelineSpec: &shared.GooglePlayDeveloperReportingV1beta1TimelineSpec{
                AggregationPeriod: shared.GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnumAggregationPeriodUnspecified.ToPointer(),
                EndTime: &shared.GoogleTypeDateTime{
                    Day: sdk.Int(674752),
                    Hours: sdk.Int(656330),
                    Minutes: sdk.Int(317202),
                    Month: sdk.Int(138183),
                    Nanos: sdk.Int(778346),
                    Seconds: sdk.Int(196582),
                    TimeZone: &shared.GoogleTypeTimeZone{
                        ID: sdk.String("f5ad019d-a1ff-4e78-b097-b0074f15471b"),
                        Version: sdk.String("enim"),
                    },
                    UtcOffset: sdk.String("accusamus"),
                    Year: sdk.Int(414263),
                },
                StartTime: &shared.GoogleTypeDateTime{
                    Day: sdk.Int(918236),
                    Hours: sdk.Int(64147),
                    Minutes: sdk.Int(216822),
                    Month: sdk.Int(692472),
                    Nanos: sdk.Int(565189),
                    Seconds: sdk.Int(566602),
                    TimeZone: &shared.GoogleTypeTimeZone{
                        ID: sdk.String("d488e1e9-1e45-40ad-aabd-44269802d502"),
                        Version: sdk.String("dolorum"),
                    },
                    UtcOffset: sdk.String("excepturi"),
                    Year: sdk.Int(270008),
                },
            },
            UserCohort: shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestUserCohortEnumOsBeta.ToPointer(),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("eum"),
        Key: sdk.String("non"),
        Name: "Sergio Hyatt",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse != nil {
        // handle response
    }
}
```
