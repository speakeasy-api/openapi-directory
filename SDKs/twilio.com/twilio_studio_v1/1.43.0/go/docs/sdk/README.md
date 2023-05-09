# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateEngagement](#createengagement) - Triggers a new Engagement for the Flow
* [CreateExecution](#createexecution) - Triggers a new Execution for the Flow
* [DeleteEngagement](#deleteengagement) - Delete this Engagement and all Steps relating to it.
* [DeleteExecution](#deleteexecution) - Delete the Execution and all Steps relating to it.
* [DeleteFlow](#deleteflow) - Delete a specific Flow.
* [FetchEngagement](#fetchengagement) - Retrieve an Engagement
* [FetchEngagementContext](#fetchengagementcontext) - Retrieve the most recent context for an Engagement.
* [FetchExecution](#fetchexecution) - Retrieve an Execution
* [FetchExecutionContext](#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [FetchExecutionStep](#fetchexecutionstep) - Retrieve a Step.
* [FetchExecutionStepContext](#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [FetchFlow](#fetchflow) - Retrieve a specific Flow.
* [FetchStep](#fetchstep) - Retrieve a Step.
* [FetchStepContext](#fetchstepcontext) - Retrieve the context for an Engagement Step.
* [ListEngagement](#listengagement) - Retrieve a list of all Engagements for the Flow.
* [ListExecution](#listexecution) - Retrieve a list of all Executions for the Flow.
* [ListExecutionStep](#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [ListFlow](#listflow) - Retrieve a list of all Flows.
* [ListStep](#liststep) - Retrieve a list of all Steps for an Engagement.
* [UpdateExecution](#updateexecution) - Update the status of an Execution to `ended`.

## CreateEngagement

Triggers a new Engagement for the Flow

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
    res, err := s.SDK.CreateEngagement(ctx, operations.CreateEngagementRequest{
        FlowSid: "unde",
        RequestBody: &operations.CreateEngagementCreateEngagementRequest{
            From: "nulla",
            Parameters: sdk.String("corrupti"),
            To: "illum",
        },
    }, operations.CreateEngagementSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagement != nil {
        // handle response
    }
}
```

## CreateExecution

Triggers a new Execution for the Flow

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
    res, err := s.SDK.CreateExecution(ctx, operations.CreateExecutionRequest{
        FlowSid: "vel",
        RequestBody: &operations.CreateExecutionCreateExecutionRequest{
            From: "error",
            Parameters: sdk.String("deserunt"),
            To: "suscipit",
        },
    }, operations.CreateExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowExecution != nil {
        // handle response
    }
}
```

## DeleteEngagement

Delete this Engagement and all Steps relating to it.

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
    res, err := s.SDK.DeleteEngagement(ctx, operations.DeleteEngagementRequest{
        FlowSid: "iure",
        Sid: "magnam",
    }, operations.DeleteEngagementSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteExecution

Delete the Execution and all Steps relating to it.

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
    res, err := s.SDK.DeleteExecution(ctx, operations.DeleteExecutionRequest{
        FlowSid: "debitis",
        Sid: "ipsa",
    }, operations.DeleteExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFlow

Delete a specific Flow.

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
    res, err := s.SDK.DeleteFlow(ctx, operations.DeleteFlowRequest{
        Sid: "delectus",
    }, operations.DeleteFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchEngagement

Retrieve an Engagement

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
    res, err := s.SDK.FetchEngagement(ctx, operations.FetchEngagementRequest{
        FlowSid: "tempora",
        Sid: "suscipit",
    }, operations.FetchEngagementSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagement != nil {
        // handle response
    }
}
```

## FetchEngagementContext

Retrieve the most recent context for an Engagement.

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
    res, err := s.SDK.FetchEngagementContext(ctx, operations.FetchEngagementContextRequest{
        EngagementSid: "molestiae",
        FlowSid: "minus",
    }, operations.FetchEngagementContextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagementEngagementContext != nil {
        // handle response
    }
}
```

## FetchExecution

Retrieve an Execution

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
    res, err := s.SDK.FetchExecution(ctx, operations.FetchExecutionRequest{
        FlowSid: "placeat",
        Sid: "voluptatum",
    }, operations.FetchExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowExecution != nil {
        // handle response
    }
}
```

## FetchExecutionContext

Retrieve the most recent context for an Execution.

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
    res, err := s.SDK.FetchExecutionContext(ctx, operations.FetchExecutionContextRequest{
        ExecutionSid: "iusto",
        FlowSid: "excepturi",
    }, operations.FetchExecutionContextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowExecutionExecutionContext != nil {
        // handle response
    }
}
```

## FetchExecutionStep

Retrieve a Step.

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
    res, err := s.SDK.FetchExecutionStep(ctx, operations.FetchExecutionStepRequest{
        ExecutionSid: "nisi",
        FlowSid: "recusandae",
        Sid: "temporibus",
    }, operations.FetchExecutionStepSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowExecutionExecutionStep != nil {
        // handle response
    }
}
```

## FetchExecutionStepContext

Retrieve the context for an Execution Step.

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
    res, err := s.SDK.FetchExecutionStepContext(ctx, operations.FetchExecutionStepContextRequest{
        ExecutionSid: "ab",
        FlowSid: "quis",
        StepSid: "veritatis",
    }, operations.FetchExecutionStepContextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowExecutionExecutionStepExecutionStepContext != nil {
        // handle response
    }
}
```

## FetchFlow

Retrieve a specific Flow.

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
    res, err := s.SDK.FetchFlow(ctx, operations.FetchFlowRequest{
        Sid: "deserunt",
    }, operations.FetchFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1Flow != nil {
        // handle response
    }
}
```

## FetchStep

Retrieve a Step.

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
    res, err := s.SDK.FetchStep(ctx, operations.FetchStepRequest{
        EngagementSid: "perferendis",
        FlowSid: "ipsam",
        Sid: "repellendus",
    }, operations.FetchStepSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagementStep != nil {
        // handle response
    }
}
```

## FetchStepContext

Retrieve the context for an Engagement Step.

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
    res, err := s.SDK.FetchStepContext(ctx, operations.FetchStepContextRequest{
        EngagementSid: "sapiente",
        FlowSid: "quo",
        StepSid: "odit",
    }, operations.FetchStepContextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowEngagementStepStepContext != nil {
        // handle response
    }
}
```

## ListEngagement

Retrieve a list of all Engagements for the Flow.

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
    res, err := s.SDK.ListEngagement(ctx, operations.ListEngagementRequest{
        FlowSid: "at",
        Page: sdk.Int64(870088),
        PageSize: sdk.Int64(978619),
        PageToken: sdk.String("molestiae"),
    }, operations.ListEngagementSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEngagementResponse != nil {
        // handle response
    }
}
```

## ListExecution

Retrieve a list of all Executions for the Flow.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListExecution(ctx, operations.ListExecutionRequest{
        DateCreatedFrom: types.MustTimeFromString("2020-08-07T00:03:55.328Z"),
        DateCreatedTo: types.MustTimeFromString("2022-06-25T00:37:01.696Z"),
        FlowSid: "porro",
        Page: sdk.Int64(678880),
        PageSize: sdk.Int64(118274),
        PageToken: sdk.String("nam"),
    }, operations.ListExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionResponse != nil {
        // handle response
    }
}
```

## ListExecutionStep

Retrieve a list of all Steps for an Execution.

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
    res, err := s.SDK.ListExecutionStep(ctx, operations.ListExecutionStepRequest{
        ExecutionSid: "officia",
        FlowSid: "occaecati",
        Page: sdk.Int64(143353),
        PageSize: sdk.Int64(537373),
        PageToken: sdk.String("hic"),
    }, operations.ListExecutionStepSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionStepResponse != nil {
        // handle response
    }
}
```

## ListFlow

Retrieve a list of all Flows.

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
    res, err := s.SDK.ListFlow(ctx, operations.ListFlowRequest{
        Page: sdk.Int64(758616),
        PageSize: sdk.Int64(521848),
        PageToken: sdk.String("beatae"),
    }, operations.ListFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlowResponse != nil {
        // handle response
    }
}
```

## ListStep

Retrieve a list of all Steps for an Engagement.

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
    res, err := s.SDK.ListStep(ctx, operations.ListStepRequest{
        EngagementSid: "commodi",
        FlowSid: "molestiae",
        Page: sdk.Int64(264555),
        PageSize: sdk.Int64(186332),
        PageToken: sdk.String("impedit"),
    }, operations.ListStepSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStepResponse != nil {
        // handle response
    }
}
```

## UpdateExecution

Update the status of an Execution to `ended`.

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
    res, err := s.SDK.UpdateExecution(ctx, operations.UpdateExecutionRequest{
        FlowSid: "cum",
        RequestBody: &operations.UpdateExecutionUpdateExecutionRequest{
            Status: shared.ExecutionEnumStatusEnumActive,
        },
        Sid: "ipsum",
    }, operations.UpdateExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV1FlowExecution != nil {
        // handle response
    }
}
```
