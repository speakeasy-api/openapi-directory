# Calls

## Overview

Fetch, Create and Modify voice calls

### Available Operations

* [CreateCall](#createcall) - Create an outbound call
* [GetCall](#getcall) - Get detail of a specific call
* [GetCalls](#getcalls) - Get details of your calls
* [UpdateCall](#updatecall) - Modify an in progress call

## CreateCall

Create an outbound Call

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
    res, err := s.Calls.CreateCall(ctx, operations.CreateCallRequestBody{}, operations.CreateCallSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallResponse != nil {
        // handle response
    }
}
```

## GetCall

Get detail of a specific call

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
    res, err := s.Calls.GetCall(ctx, operations.GetCallRequest{
        UUID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.GetCallSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallResponse != nil {
        // handle response
    }
}
```

## GetCalls

Get details of your calls

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
    res, err := s.Calls.GetCalls(ctx, operations.GetCallsRequest{
        ConversationUUID: sdk.String("CON-f972836a-550f-45fa-956c-12a2ab5b7d22"),
        DateEnd: types.MustTimeFromString("2016-11-14T07:45:14Z"),
        DateStart: types.MustTimeFromString("2016-11-14T07:45:14Z"),
        Order: operations.GetCallsOrderEnumDesc.ToPointer(),
        PageSize: sdk.Int64(20218),
        RecordIndex: sdk.Int64(368241),
        Status: operations.GetCallsStatusEnumStarted.ToPointer(),
    }, operations.GetCallsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallsResponse != nil {
        // handle response
    }
}
```

## UpdateCall

Modify an in progress call

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
    res, err := s.Calls.UpdateCall(ctx, operations.UpdateCallRequest{
        RequestBody: operations.UpdateCallRequestBody{},
        UUID: "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7",
    }, operations.UpdateCallSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
