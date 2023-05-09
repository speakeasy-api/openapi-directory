# Metrics

## Overview

Operations related to metrics

### Available Operations

* [GetAggregatedInvocationsStats](#getaggregatedinvocationsstats) - Get aggregated invocation statistics for a day
* [GetConformanceMetricsAggregation](#getconformancemetricsaggregation) - Get aggregation of conformance metrics
* [GetInvocationStatsByService](#getinvocationstatsbyservice) - Get invocation statistics for Service
* [GetLatestAggregatedInvocationsStats](#getlatestaggregatedinvocationsstats) - Get aggregated invocations statistics for latest days
* [GetLatestTestResults](#getlatesttestresults) - Get latest tests results
* [GetServiceTestConformanceMetric](#getservicetestconformancemetric) - Get conformance metrics for a Service
* [GetTopIvnocationsStatsByDay](#gettopivnocationsstatsbyday) - Get top invocation statistics for a day

## GetAggregatedInvocationsStats

Get aggregated invocation statistics for a day

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetAggregatedInvocationsStats(ctx, operations.GetAggregatedInvocationsStatsRequest{
        Day: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DailyInvocationStatistic != nil {
        // handle response
    }
}
```

## GetConformanceMetricsAggregation

Get aggregation of conformance metrics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetConformanceMetricsAggregation(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WeightedMetricValues != nil {
        // handle response
    }
}
```

## GetInvocationStatsByService

Get invocation statistics for Service

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetInvocationStatsByService(ctx, operations.GetInvocationStatsByServiceRequest{
        Day: sdk.String("repellendus"),
        ServiceName: "porro",
        ServiceVersion: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DailyInvocationStatistic != nil {
        // handle response
    }
}
```

## GetLatestAggregatedInvocationsStats

Get aggregated invocations statistics for latest days

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetLatestAggregatedInvocationsStats(ctx, operations.GetLatestAggregatedInvocationsStatsRequest{
        Limit: sdk.Int64(281730),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CounterMap != nil {
        // handle response
    }
}
```

## GetLatestTestResults

Get latest tests results

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetLatestTestResults(ctx, operations.GetLatestTestResultsRequest{
        Limit: sdk.Int64(703495),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestResultSummaries != nil {
        // handle response
    }
}
```

## GetServiceTestConformanceMetric

Get conformance metrics for a Service

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetServiceTestConformanceMetric(ctx, operations.GetServiceTestConformanceMetricRequest{
        ServiceID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestConformanceMetric != nil {
        // handle response
    }
}
```

## GetTopIvnocationsStatsByDay

Get top invocation statistics for a day

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Metrics.GetTopIvnocationsStatsByDay(ctx, operations.GetTopIvnocationsStatsByDayRequest{
        Day: sdk.String("qui"),
        Limit: sdk.Int64(63955),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DailyInvocationStatistics != nil {
        // handle response
    }
}
```
