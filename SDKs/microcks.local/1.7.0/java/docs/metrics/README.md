# metrics

## Overview

Operations related to metrics

### Available Operations

* [getAggregatedInvocationsStats](#getaggregatedinvocationsstats) - Get aggregated invocation statistics for a day
* [getConformanceMetricsAggregation](#getconformancemetricsaggregation) - Get aggregation of conformance metrics
* [getInvocationStatsByService](#getinvocationstatsbyservice) - Get invocation statistics for Service
* [getLatestAggregatedInvocationsStats](#getlatestaggregatedinvocationsstats) - Get aggregated invocations statistics for latest days
* [getLatestTestResults](#getlatesttestresults) - Get latest tests results
* [getServiceTestConformanceMetric](#getservicetestconformancemetric) - Get conformance metrics for a Service
* [getTopIvnocationsStatsByDay](#gettopivnocationsstatsbyday) - Get top invocation statistics for a day

## getAggregatedInvocationsStats

Get aggregated invocation statistics for a day

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAggregatedInvocationsStatsRequest;
import org.openapis.openapi.models.operations.GetAggregatedInvocationsStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAggregatedInvocationsStatsRequest req = new GetAggregatedInvocationsStatsRequest() {{
                day = "nam";
            }};            

            GetAggregatedInvocationsStatsResponse res = sdk.metrics.getAggregatedInvocationsStats(req);

            if (res.dailyInvocationStatistic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConformanceMetricsAggregation

Get aggregation of conformance metrics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConformanceMetricsAggregationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConformanceMetricsAggregationResponse res = sdk.metrics.getConformanceMetricsAggregation();

            if (res.weightedMetricValues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvocationStatsByService

Get invocation statistics for Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvocationStatsByServiceRequest;
import org.openapis.openapi.models.operations.GetInvocationStatsByServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetInvocationStatsByServiceRequest req = new GetInvocationStatsByServiceRequest("deleniti", "sapiente") {{
                day = "amet";
            }};            

            GetInvocationStatsByServiceResponse res = sdk.metrics.getInvocationStatsByService(req);

            if (res.dailyInvocationStatistic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestAggregatedInvocationsStats

Get aggregated invocations statistics for latest days

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestAggregatedInvocationsStatsRequest;
import org.openapis.openapi.models.operations.GetLatestAggregatedInvocationsStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetLatestAggregatedInvocationsStatsRequest req = new GetLatestAggregatedInvocationsStatsRequest() {{
                limit = 394869L;
            }};            

            GetLatestAggregatedInvocationsStatsResponse res = sdk.metrics.getLatestAggregatedInvocationsStats(req);

            if (res.counterMap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestTestResults

Get latest tests results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestTestResultsRequest;
import org.openapis.openapi.models.operations.GetLatestTestResultsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetLatestTestResultsRequest req = new GetLatestTestResultsRequest() {{
                limit = 618809L;
            }};            

            GetLatestTestResultsResponse res = sdk.metrics.getLatestTestResults(req);

            if (res.testResultSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServiceTestConformanceMetric

Get conformance metrics for a Service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServiceTestConformanceMetricRequest;
import org.openapis.openapi.models.operations.GetServiceTestConformanceMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetServiceTestConformanceMetricRequest req = new GetServiceTestConformanceMetricRequest("molestiae");            

            GetServiceTestConformanceMetricResponse res = sdk.metrics.getServiceTestConformanceMetric(req);

            if (res.testConformanceMetric != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTopIvnocationsStatsByDay

Get top invocation statistics for a day

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTopIvnocationsStatsByDayRequest;
import org.openapis.openapi.models.operations.GetTopIvnocationsStatsByDayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTopIvnocationsStatsByDayRequest req = new GetTopIvnocationsStatsByDayRequest() {{
                day = "nihil";
                limit = 301575L;
            }};            

            GetTopIvnocationsStatsByDayResponse res = sdk.metrics.getTopIvnocationsStatsByDay(req);

            if (res.dailyInvocationStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
