# vitals

### Available Operations

* [playdeveloperreportingVitalsErrorsIssuesSearch](#playdeveloperreportingvitalserrorsissuessearch) - Searches all error issues in which reports have been grouped.
* [playdeveloperreportingVitalsErrorsReportsSearch](#playdeveloperreportingvitalserrorsreportssearch) - Searches all error reports received for an app.
* [playdeveloperreportingVitalsStuckbackgroundwakelockrateGet](#playdeveloperreportingvitalsstuckbackgroundwakelockrateget) - Describes the properties of the metric set.
* [playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery](#playdeveloperreportingvitalsstuckbackgroundwakelockratequery) - Queries the metrics in the metric set.

## playdeveloperreportingVitalsErrorsIssuesSearch

Searches all error issues in which reports have been grouped.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaydeveloperreportingVitalsErrorsIssuesSearchRequest req = new PlaydeveloperreportingVitalsErrorsIssuesSearchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                filter = "at";
                intervalEndTimeDay = 870088L;
                intervalEndTimeHours = 978619L;
                intervalEndTimeMinutes = 473608L;
                intervalEndTimeMonth = 799159L;
                intervalEndTimeNanos = 800911L;
                intervalEndTimeSeconds = 461479L;
                intervalEndTimeTimeZoneId = "totam";
                intervalEndTimeTimeZoneVersion = "porro";
                intervalEndTimeUtcOffset = "dolorum";
                intervalEndTimeYear = 118274L;
                intervalStartTimeDay = 720633L;
                intervalStartTimeHours = 639921L;
                intervalStartTimeMinutes = 582020L;
                intervalStartTimeMonth = 143353L;
                intervalStartTimeNanos = 537373L;
                intervalStartTimeSeconds = 944669L;
                intervalStartTimeTimeZoneId = "optio";
                intervalStartTimeTimeZoneVersion = "totam";
                intervalStartTimeUtcOffset = "beatae";
                intervalStartTimeYear = 414662L;
                key = "molestiae";
                oauthToken = "modi";
                pageSize = 186332L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            PlaydeveloperreportingVitalsErrorsIssuesSearchResponse res = sdk.vitals.playdeveloperreportingVitalsErrorsIssuesSearch(req, new PlaydeveloperreportingVitalsErrorsIssuesSearchSecurity("excepturi", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googlePlayDeveloperReportingV1beta1SearchErrorIssuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playdeveloperreportingVitalsErrorsReportsSearch

Searches all error reports received for an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaydeveloperreportingVitalsErrorsReportsSearchRequest req = new PlaydeveloperreportingVitalsErrorsReportsSearchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolor";
                filter = "natus";
                intervalEndTimeDay = 386489L;
                intervalEndTimeHours = 943749L;
                intervalEndTimeMinutes = 902599L;
                intervalEndTimeMonth = 681820L;
                intervalEndTimeNanos = 449950L;
                intervalEndTimeSeconds = 359508L;
                intervalEndTimeTimeZoneId = "iste";
                intervalEndTimeTimeZoneVersion = "iure";
                intervalEndTimeUtcOffset = "saepe";
                intervalEndTimeYear = 697631L;
                intervalStartTimeDay = 99280L;
                intervalStartTimeHours = 60225L;
                intervalStartTimeMinutes = 969810L;
                intervalStartTimeMonth = 666767L;
                intervalStartTimeNanos = 653140L;
                intervalStartTimeSeconds = 670638L;
                intervalStartTimeTimeZoneId = "dolores";
                intervalStartTimeTimeZoneVersion = "dolorem";
                intervalStartTimeUtcOffset = "corporis";
                intervalStartTimeYear = 128926L;
                key = "nobis";
                oauthToken = "enim";
                pageSize = 607831L;
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            PlaydeveloperreportingVitalsErrorsReportsSearchResponse res = sdk.vitals.playdeveloperreportingVitalsErrorsReportsSearch(req, new PlaydeveloperreportingVitalsErrorsReportsSearchSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googlePlayDeveloperReportingV1beta1SearchErrorReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playdeveloperreportingVitalsStuckbackgroundwakelockrateGet

Describes the properties of the metric set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest req = new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse res = sdk.vitals.playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(req, new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetSecurity("commodi", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery

Queries the metrics in the metric set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse;
import org.openapis.openapi.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest;
import org.openapis.openapi.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestUserCohortEnum;
import org.openapis.openapi.models.shared.GooglePlayDeveloperReportingV1beta1TimelineSpec;
import org.openapis.openapi.models.shared.GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum;
import org.openapis.openapi.models.shared.GoogleTypeDateTime;
import org.openapis.openapi.models.shared.GoogleTypeTimeZone;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest req = new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest = new GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest() {{
                    dimensions = new String[]{{
                        add("quia"),
                        add("quis"),
                        add("vitae"),
                    }};
                    filter = "laborum";
                    metrics = new String[]{{
                        add("enim"),
                        add("odit"),
                        add("quo"),
                    }};
                    pageSize = 196582;
                    pageToken = "tenetur";
                    timelineSpec = new GooglePlayDeveloperReportingV1beta1TimelineSpec() {{
                        aggregationPeriod = GooglePlayDeveloperReportingV1beta1TimelineSpecAggregationPeriodEnum.HOURLY;
                        endTime = new GoogleTypeDateTime() {{
                            day = 662527;
                            hours = 820994;
                            minutes = 13571;
                            month = 97101;
                            nanos = 622846;
                            seconds = 837945;
                            timeZone = new GoogleTypeTimeZone() {{
                                id = "a1ffe78f-097b-4007-8f15-471b5e6e13b9";
                                version = "excepturi";
                            }};;
                            utcOffset = "pariatur";
                            year = 265389;
                        }};;
                        startTime = new GoogleTypeDateTime() {{
                            day = 508969;
                            hours = 523248;
                            minutes = 916723;
                            month = 93940;
                            nanos = 921158;
                            seconds = 575947;
                            timeZone = new GoogleTypeTimeZone() {{
                                id = "1e450ad2-abd4-4426-9802-d502a94bb4f6";
                                version = "non";
                            }};;
                            utcOffset = "eligendi";
                            year = 576157;
                        }};;
                    }};;
                    userCohort = GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequestUserCohortEnum.OS_PUBLIC;
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "officia";
                key = "dolor";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "dolorum";
                uploadProtocol = "in";
            }};            

            PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse res = sdk.vitals.playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(req, new PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQuerySecurity("in", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
