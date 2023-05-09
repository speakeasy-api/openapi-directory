# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateExecution](#createexecution) - Triggers a new Execution for the Flow
* [CreateFlow](#createflow) - Create a Flow.
* [DeleteExecution](#deleteexecution) - Delete the Execution and all Steps relating to it.
* [DeleteFlow](#deleteflow) - Delete a specific Flow.
* [FetchExecution](#fetchexecution) - Retrieve an Execution
* [FetchExecutionContext](#fetchexecutioncontext) - Retrieve the most recent context for an Execution.
* [FetchExecutionStep](#fetchexecutionstep) - Retrieve a Step.
* [FetchExecutionStepContext](#fetchexecutionstepcontext) - Retrieve the context for an Execution Step.
* [FetchFlow](#fetchflow) - Retrieve a specific Flow.
* [FetchFlowRevision](#fetchflowrevision) - Retrieve a specific Flow revision.
* [FetchTestUser](#fetchtestuser) - Fetch flow test users
* [ListExecution](#listexecution) - Retrieve a list of all Executions for the Flow.
* [ListExecutionStep](#listexecutionstep) - Retrieve a list of all Steps for an Execution.
* [ListFlow](#listflow) - Retrieve a list of all Flows.
* [ListFlowRevision](#listflowrevision) - Retrieve a list of all Flows revisions.
* [UpdateExecution](#updateexecution) - Update the status of an Execution to `ended`.
* [UpdateFlow](#updateflow) - Update a Flow.
* [UpdateFlowValidate](#updateflowvalidate) - Validate flow JSON definition
* [UpdateTestUser](#updatetestuser) - Update flow test users

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
        FlowSid: "unde",
        RequestBody: &operations.CreateExecutionCreateExecutionRequest{
            From: "nulla",
            Parameters: sdk.String("corrupti"),
            To: "illum",
        },
    }, operations.CreateExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecution != nil {
        // handle response
    }
}
```

## CreateFlow

Create a Flow.

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
    res, err := s.SDK.CreateFlow(ctx, operations.CreateFlowCreateFlowRequest{
        CommitMessage: sdk.String("vel"),
        Definition: "error",
        FriendlyName: "deserunt",
        Status: shared.FlowEnumStatusEnumDraft,
    }, operations.CreateFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2Flow != nil {
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
        FlowSid: "iure",
        Sid: "magnam",
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
        Sid: "debitis",
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
        FlowSid: "ipsa",
        Sid: "delectus",
    }, operations.FetchExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecution != nil {
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
        ExecutionSid: "tempora",
        FlowSid: "suscipit",
    }, operations.FetchExecutionContextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecutionExecutionContext != nil {
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
        ExecutionSid: "molestiae",
        FlowSid: "minus",
        Sid: "placeat",
    }, operations.FetchExecutionStepSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecutionExecutionStep != nil {
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
        ExecutionSid: "voluptatum",
        FlowSid: "iusto",
        StepSid: "excepturi",
    }, operations.FetchExecutionStepContextSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecutionExecutionStepExecutionStepContext != nil {
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
        Sid: "nisi",
    }, operations.FetchFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2Flow != nil {
        // handle response
    }
}
```

## FetchFlowRevision

Retrieve a specific Flow revision.

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
    res, err := s.SDK.FetchFlowRevision(ctx, operations.FetchFlowRevisionRequest{
        Revision: "recusandae",
        Sid: "temporibus",
    }, operations.FetchFlowRevisionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowFlowRevision != nil {
        // handle response
    }
}
```

## FetchTestUser

Fetch flow test users

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
    res, err := s.SDK.FetchTestUser(ctx, operations.FetchTestUserRequest{
        Sid: "ab",
    }, operations.FetchTestUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowTestUser != nil {
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
        DateCreatedFrom: types.MustTimeFromString("2022-11-30T04:44:49.578Z"),
        DateCreatedTo: types.MustTimeFromString("2022-12-17T05:46:24.151Z"),
        FlowSid: "ipsam",
        Page: sdk.Int64(832620),
        PageSize: sdk.Int64(957156),
        PageToken: sdk.String("quo"),
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
        ExecutionSid: "odit",
        FlowSid: "at",
        Page: sdk.Int64(870088),
        PageSize: sdk.Int64(978619),
        PageToken: sdk.String("molestiae"),
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
        Page: sdk.Int64(799159),
        PageSize: sdk.Int64(800911),
        PageToken: sdk.String("esse"),
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

## ListFlowRevision

Retrieve a list of all Flows revisions.

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
    res, err := s.SDK.ListFlowRevision(ctx, operations.ListFlowRevisionRequest{
        Page: sdk.Int64(520478),
        PageSize: sdk.Int64(780529),
        PageToken: sdk.String("dolorum"),
        Sid: "dicta",
    }, operations.ListFlowRevisionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlowRevisionResponse != nil {
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
        FlowSid: "nam",
        RequestBody: &operations.UpdateExecutionUpdateExecutionRequest{
            Status: shared.ExecutionEnumStatusEnumEnded,
        },
        Sid: "occaecati",
    }, operations.UpdateExecutionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecution != nil {
        // handle response
    }
}
```

## UpdateFlow

Update a Flow.

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
    res, err := s.SDK.UpdateFlow(ctx, operations.UpdateFlowRequest{
        RequestBody: &operations.UpdateFlowUpdateFlowRequest{
            CommitMessage: sdk.String("fugit"),
            Definition: sdk.String("deleniti"),
            FriendlyName: sdk.String("hic"),
            Status: shared.FlowEnumStatusEnumPublished,
        },
        Sid: "totam",
    }, operations.UpdateFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2Flow != nil {
        // handle response
    }
}
```

## UpdateFlowValidate

Validate flow JSON definition

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
    res, err := s.SDK.UpdateFlowValidate(ctx, operations.UpdateFlowValidateUpdateFlowValidateRequest{
        CommitMessage: sdk.String("beatae"),
        Definition: "commodi",
        FriendlyName: "molestiae",
        Status: shared.FlowValidateEnumStatusEnumDraft,
    }, operations.UpdateFlowValidateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowValidate != nil {
        // handle response
    }
}
```

## UpdateTestUser

Update flow test users

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
    res, err := s.SDK.UpdateTestUser(ctx, operations.UpdateTestUserRequest{
        RequestBody: &operations.UpdateTestUserUpdateTestUserRequest{
            TestUsers: []string{
                "impedit",
            },
        },
        Sid: "cum",
    }, operations.UpdateTestUserSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowTestUser != nil {
        // handle response
    }
}
```
