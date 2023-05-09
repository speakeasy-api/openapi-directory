# Hooks

## Overview

Hooks allows configuring Truora Platform to notify via requests to your service (or another third-party service) whenever an event occurs in Truora Platform. They are the easiest way to get a warning when something happens in another system, in this case, Truora platform. This service allows sending notifications via requests to your service or another third-party service whenever certain events occur.

### Available Operations

* [CreateHook](#createhook) - Creates a hook subscription
* [DeletHook](#delethook) - Deletes hook
* [ListHook](#listhook) - Lists all hooks
* [UpdateHook](#updatehook) - Updates hook

## CreateHook

Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:

```
{
    "events": [
        {
            "event_action": "created",
            "event_type": "check",
            "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
            "object": {
                "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
                "country": "CO",
                "creation_date": "2020-04-01T23:00:30.581232281Z",
                "homonym_score": 0,
                "id_score": 0,
                "national_id": "1151959906",
                "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
                "score": -1,
                "status": "not_started",
                "type": "person",
                "update_date": "2020-04-01T23:00:30.680937413Z"
            },
            "timestamp": "2020-04-01T23:00:30Z",
            "version": "1.0"
        }
    ],
    "iat": 1585782031,
    "iss": "Truora"
}
```

Keep in mind that the object attribute varies depending on the event_type.

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
    res, err := s.Hooks.CreateHook(ctx, shared.CreateHookInput{
        Actions: []string{
            "molestiae",
            "velit",
        },
        EventType: shared.CreateHookInputEventTypeEnumCheck,
        Status: shared.CreateHookInputStatusEnumEnabled.ToPointer(),
        SubscriberAddress: sdk.String("quis"),
        SubscriberLanguage: shared.CreateHookInputSubscriberLanguageEnumCs.ToPointer(),
        SubscriberName: sdk.String("laborum"),
        SubscriberType: shared.CreateHookInputSubscriberTypeEnumEmail,
        SubscriberURL: sdk.String("enim"),
    }, operations.CreateHookSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Hook != nil {
        // handle response
    }
}
```

## DeletHook

Deletes hook configuration.

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
    res, err := s.Hooks.DeletHook(ctx, operations.DeletHookRequest{
        HookID: "odit",
    }, operations.DeletHookSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletHook200ApplicationJSONString != nil {
        // handle response
    }
}
```

## ListHook

Lists all the configured hooks in your account.

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
    res, err := s.Hooks.ListHook(ctx, operations.ListHookSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HookOutput != nil {
        // handle response
    }
}
```

## UpdateHook

Updates a hook configuration.

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
    res, err := s.Hooks.UpdateHook(ctx, operations.UpdateHookRequest{
        CreateHookInput: shared.CreateHookInput{
            Actions: []string{
                "sequi",
                "tenetur",
                "ipsam",
                "id",
            },
            EventType: shared.CreateHookInputEventTypeEnumContinuousCheck,
            Status: shared.CreateHookInputStatusEnumEnabled.ToPointer(),
            SubscriberAddress: sdk.String("quasi"),
            SubscriberLanguage: shared.CreateHookInputSubscriberLanguageEnumNl.ToPointer(),
            SubscriberName: sdk.String("temporibus"),
            SubscriberType: shared.CreateHookInputSubscriberTypeEnumEmail,
            SubscriberURL: sdk.String("quasi"),
        },
        HookID: "reiciendis",
    }, operations.UpdateHookSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
