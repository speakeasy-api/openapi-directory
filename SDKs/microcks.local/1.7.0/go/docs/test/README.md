# Test

## Overview

Operations related to API and Services tests

### Available Operations

* [CreateTest](#createtest) - Create a new Test
* [GetEventsByTestCase](#geteventsbytestcase) - Get events for TestCase
* [GetMessagesByTestCase](#getmessagesbytestcase) - Get messages for TestCase
* [GetTestResult](#gettestresult) - Get TestResult
* [GetTestResultsByService](#gettestresultsbyservice) - Get TestResults by Service
* [GetTestResultsByServiceCounter](#gettestresultsbyservicecounter) - Get the TestResults for Service counter
* [ReportTestCaseResult](#reporttestcaseresult) - Report and create a new TestCaseResult

## CreateTest

Create a new Test

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.CreateTest(ctx, shared.TestRequest{
        FilteredOperations: []string{
            "fugit",
            "sapiente",
        },
        OperationHeaders: map[string][]shared.HeaderDTO{
            "ratione": []shared.HeaderDTO{
                shared.HeaderDTO{
                    Name: "Ms. Marion Little",
                    Values: "accusamus",
                },
            },
        },
        RunnerType: shared.TestRunnerTypeEnumHTTP,
        SecretName: sdk.String("esse"),
        ServiceID: "quod",
        TestEndpoint: "nam",
        Timeout: 877131,
    }, operations.CreateTestSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestResult != nil {
        // handle response
    }
}
```

## GetEventsByTestCase

Get events for TestCase

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
    res, err := s.Test.GetEventsByTestCase(ctx, operations.GetEventsByTestCaseRequest{
        ID: "61e6b7b9-5bc0-4ab3-820c-4f3789fd871f",
        TestCaseID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnidirectionalEvents != nil {
        // handle response
    }
}
```

## GetMessagesByTestCase

Get messages for TestCase

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.GetMessagesByTestCase(ctx, operations.GetMessagesByTestCaseRequest{
        ID: "9dd2efd1-21aa-46f1-a674-bdb04f157560",
        TestCaseID: "voluptatum",
    }, operations.GetMessagesByTestCaseSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestResponsePairs != nil {
        // handle response
    }
}
```

## GetTestResult

Get TestResult

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.GetTestResult(ctx, operations.GetTestResultRequest{
        ID: "2d68ea19-f1d1-4705-9339-d08086a18403",
    }, operations.GetTestResultSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestResult != nil {
        // handle response
    }
}
```

## GetTestResultsByService

Get TestResults by Service

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.GetTestResultsByService(ctx, operations.GetTestResultsByServiceRequest{
        ServiceID: "occaecati",
    }, operations.GetTestResultsByServiceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestResults != nil {
        // handle response
    }
}
```

## GetTestResultsByServiceCounter

Get the TestResults for Service counter

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Test.GetTestResultsByServiceCounter(ctx, operations.GetTestResultsByServiceCounterRequest{
        ServiceID: "numquam",
    }, operations.GetTestResultsByServiceCounterSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Counter != nil {
        // handle response
    }
}
```

## ReportTestCaseResult

Report a TestCaseResult (typically used by a Test runner)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Test.ReportTestCaseResult(ctx, operations.ReportTestCaseResultRequest{
        TestCaseReturnDTO: shared.TestCaseReturnDTO{
            OperationName: "impedit",
        },
        ID: "26071f93-f5f0-4642-9ac7-af515cc413aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestCaseResult != nil {
        // handle response
    }
}
```
