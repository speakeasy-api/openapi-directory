# Continuous

## Overview

Allows creating recurring checks with customizable frequency that notify whenever there are changes in check scores.

### Available Operations

* [GetContinuousCheck](#getcontinuouscheck) - Lists history associated with a Check. It can be paginated
* [ListContinuousChecks](#listcontinuouschecks) - Lists all continuous checks
* [UpdateContinuousCheck](#updatecontinuouscheck) - Updates a continuous check
* [CreateContinuousCheck](#createcontinuouscheck) - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* [GetV1ContinuousChecksContinuousCheckIDHistory](#getv1continuouscheckscontinuouscheckidhistory) - Lists background check logs. It can be paginated


## GetContinuousCheck

Lists history associated with a Check. It can be paginated

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
    res, err := s.Continuous.GetContinuousCheck(ctx, operations.GetContinuousCheckRequest{
        ContinuousCheckID: 3864.89,
    }, operations.GetContinuousCheckSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousCheck != nil {
        // handle response
    }
}
```

## ListContinuousChecks

Lists all continuous checks

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Continuous.ListContinuousChecks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListContinuousChecksOutput != nil {
        // handle response
    }
}
```

## UpdateContinuousCheck

Updates a continuous check

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
    res, err := s.Continuous.UpdateContinuousCheck(ctx, operations.UpdateContinuousCheckRequest{
        UpdateContinuousCheckInput: shared.UpdateContinuousCheckInput{
            Frequency: "hic",
            Status: shared.UpdateContinuousCheckInputStatusEnumDisabled,
        },
        ContinuousCheckID: 6818.2,
    }, operations.UpdateContinuousCheckSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousCheck != nil {
        // handle response
    }
}
```

## CreateContinuousCheck

Creates a continuous check that will run background checks recurrently according to the frequency provided.

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
    res, err := s.Continuous.CreateContinuousCheck(ctx, shared.CreateContinuousCheckInput{
        CheckID: sdk.String("in"),
        Frequency: sdk.String("corporis"),
        Status: sdk.String("iste"),
    }, operations.CreateContinuousCheckSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousCheck != nil {
        // handle response
    }
}
```

## GetV1ContinuousChecksContinuousCheckIDHistory

Lists background check logs. It can be paginated


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
    res, err := s.Continuous.GetV1ContinuousChecksContinuousCheckIDHistory(ctx, operations.GetV1ContinuousChecksContinuousCheckIDHistoryRequest{
        ContinuousCheckID: "iure",
    }, operations.GetV1ContinuousChecksContinuousCheckIDHistorySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContiuousCheckHistoryOutput != nil {
        // handle response
    }
}
```
