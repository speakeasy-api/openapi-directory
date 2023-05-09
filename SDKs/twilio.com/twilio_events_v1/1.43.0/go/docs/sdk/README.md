# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateSink](#createsink) - Create a new Sink
* [CreateSinkTest](#createsinktest) - Create a new Sink Test Event for the given Sink.
* [CreateSinkValidate](#createsinkvalidate) - Validate that a test event for a Sink was received.
* [CreateSubscribedEvent](#createsubscribedevent) - Create a new Subscribed Event type for the subscription
* [CreateSubscription](#createsubscription) - Create a new Subscription.
* [DeleteSink](#deletesink) - Delete a specific Sink.
* [DeleteSubscribedEvent](#deletesubscribedevent) - Remove an event type from a subscription.
* [DeleteSubscription](#deletesubscription) - Delete a specific Subscription.
* [FetchEventType](#fetcheventtype) - Fetch a specific Event Type.
* [FetchSchema](#fetchschema) - Fetch a specific schema with its nested versions.
* [FetchSchemaVersion](#fetchschemaversion) - Fetch a specific schema and version.
* [FetchSink](#fetchsink) - Fetch a specific Sink.
* [FetchSubscribedEvent](#fetchsubscribedevent) - Read an Event for a Subscription.
* [FetchSubscription](#fetchsubscription) - Fetch a specific Subscription.
* [ListEventType](#listeventtype) - Retrieve a paginated list of all the available Event Types.
* [ListSchemaVersion](#listschemaversion) - Retrieve a paginated list of versions of the schema.
* [ListSink](#listsink) - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* [ListSubscribedEvent](#listsubscribedevent) - Retrieve a list of all Subscribed Event types for a Subscription.
* [ListSubscription](#listsubscription) - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* [UpdateSink](#updatesink) - Update a specific Sink
* [UpdateSubscribedEvent](#updatesubscribedevent) - Update an Event for a Subscription.
* [UpdateSubscription](#updatesubscription) - Update a Subscription.

## CreateSink

Create a new Sink

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
    res, err := s.SDK.CreateSink(ctx, operations.CreateSinkCreateSinkRequest{
        Description: "quibusdam",
        SinkConfiguration: "unde",
        SinkType: shared.SinkEnumSinkTypeEnumSegment,
    }, operations.CreateSinkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
}
```

## CreateSinkTest

Create a new Sink Test Event for the given Sink.

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
    res, err := s.SDK.CreateSinkTest(ctx, operations.CreateSinkTestRequest{
        Sid: "corrupti",
    }, operations.CreateSinkTestSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1SinkSinkTest != nil {
        // handle response
    }
}
```

## CreateSinkValidate

Validate that a test event for a Sink was received.

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
    res, err := s.SDK.CreateSinkValidate(ctx, operations.CreateSinkValidateRequest{
        RequestBody: &operations.CreateSinkValidateCreateSinkValidateRequest{
            TestID: "illum",
        },
        Sid: "vel",
    }, operations.CreateSinkValidateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1SinkSinkValidate != nil {
        // handle response
    }
}
```

## CreateSubscribedEvent

Create a new Subscribed Event type for the subscription

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
    res, err := s.SDK.CreateSubscribedEvent(ctx, operations.CreateSubscribedEventRequest{
        RequestBody: &operations.CreateSubscribedEventCreateSubscribedEventRequest{
            SchemaVersion: sdk.Int64(623564),
            Type: "deserunt",
        },
        SubscriptionSid: "suscipit",
    }, operations.CreateSubscribedEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1SubscriptionSubscribedEvent != nil {
        // handle response
    }
}
```

## CreateSubscription

Create a new Subscription.

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
    res, err := s.SDK.CreateSubscription(ctx, operations.CreateSubscriptionCreateSubscriptionRequest{
        Description: "iure",
        SinkSid: "magnam",
        Types: []interface{}{
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
        },
    }, operations.CreateSubscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Subscription != nil {
        // handle response
    }
}
```

## DeleteSink

Delete a specific Sink.

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
    res, err := s.SDK.DeleteSink(ctx, operations.DeleteSinkRequest{
        Sid: "molestiae",
    }, operations.DeleteSinkSecurity{
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

## DeleteSubscribedEvent

Remove an event type from a subscription.

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
    res, err := s.SDK.DeleteSubscribedEvent(ctx, operations.DeleteSubscribedEventRequest{
        SubscriptionSid: "minus",
        Type: "placeat",
    }, operations.DeleteSubscribedEventSecurity{
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

## DeleteSubscription

Delete a specific Subscription.

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
    res, err := s.SDK.DeleteSubscription(ctx, operations.DeleteSubscriptionRequest{
        Sid: "voluptatum",
    }, operations.DeleteSubscriptionSecurity{
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

## FetchEventType

Fetch a specific Event Type.

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
    res, err := s.SDK.FetchEventType(ctx, operations.FetchEventTypeRequest{
        Type: "iusto",
    }, operations.FetchEventTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1EventType != nil {
        // handle response
    }
}
```

## FetchSchema

Fetch a specific schema with its nested versions.

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
    res, err := s.SDK.FetchSchema(ctx, operations.FetchSchemaRequest{
        ID: "96ed151a-05df-4c2d-9f7c-c78ca1ba928f",
    }, operations.FetchSchemaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Schema != nil {
        // handle response
    }
}
```

## FetchSchemaVersion

Fetch a specific schema and version.

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
    res, err := s.SDK.FetchSchemaVersion(ctx, operations.FetchSchemaVersionRequest{
        ID: "c816742c-b739-4205-9293-96fea7596eb1",
        SchemaVersion: 60225,
    }, operations.FetchSchemaVersionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1SchemaSchemaVersion != nil {
        // handle response
    }
}
```

## FetchSink

Fetch a specific Sink.

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
    res, err := s.SDK.FetchSink(ctx, operations.FetchSinkRequest{
        Sid: "reiciendis",
    }, operations.FetchSinkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
}
```

## FetchSubscribedEvent

Read an Event for a Subscription.

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
    res, err := s.SDK.FetchSubscribedEvent(ctx, operations.FetchSubscribedEventRequest{
        SubscriptionSid: "est",
        Type: "mollitia",
    }, operations.FetchSubscribedEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1SubscriptionSubscribedEvent != nil {
        // handle response
    }
}
```

## FetchSubscription

Fetch a specific Subscription.

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
    res, err := s.SDK.FetchSubscription(ctx, operations.FetchSubscriptionRequest{
        Sid: "laborum",
    }, operations.FetchSubscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Subscription != nil {
        // handle response
    }
}
```

## ListEventType

Retrieve a paginated list of all the available Event Types.

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
    res, err := s.SDK.ListEventType(ctx, operations.ListEventTypeRequest{
        Page: sdk.Int64(170909),
        PageSize: sdk.Int64(210382),
        PageToken: sdk.String("corporis"),
        SchemaID: sdk.String("explicabo"),
    }, operations.ListEventTypeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventTypeResponse != nil {
        // handle response
    }
}
```

## ListSchemaVersion

Retrieve a paginated list of versions of the schema.

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
    res, err := s.SDK.ListSchemaVersion(ctx, operations.ListSchemaVersionRequest{
        ID: "c5955907-aff1-4a3a-afa9-467739251aa5",
        Page: sdk.Int64(138183),
        PageSize: sdk.Int64(778346),
        PageToken: sdk.String("sequi"),
    }, operations.ListSchemaVersionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchemaVersionResponse != nil {
        // handle response
    }
}
```

## ListSink

Retrieve a paginated list of Sinks belonging to the account used to make the request.

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
    res, err := s.SDK.ListSink(ctx, operations.ListSinkRequest{
        InUse: sdk.Bool(false),
        Page: sdk.Int64(949572),
        PageSize: sdk.Int64(368725),
        PageToken: sdk.String("id"),
        Status: sdk.String("possimus"),
    }, operations.ListSinkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSinkResponse != nil {
        // handle response
    }
}
```

## ListSubscribedEvent

Retrieve a list of all Subscribed Event types for a Subscription.

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
    res, err := s.SDK.ListSubscribedEvent(ctx, operations.ListSubscribedEventRequest{
        Page: sdk.Int64(13571),
        PageSize: sdk.Int64(97101),
        PageToken: sdk.String("error"),
        SubscriptionSid: "temporibus",
    }, operations.ListSubscribedEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscribedEventResponse != nil {
        // handle response
    }
}
```

## ListSubscription

Retrieve a paginated list of Subscriptions belonging to the account used to make the request.

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
    res, err := s.SDK.ListSubscription(ctx, operations.ListSubscriptionRequest{
        Page: sdk.Int64(673660),
        PageSize: sdk.Int64(96098),
        PageToken: sdk.String("reiciendis"),
        SinkSid: sdk.String("voluptatibus"),
    }, operations.ListSubscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscriptionResponse != nil {
        // handle response
    }
}
```

## UpdateSink

Update a specific Sink

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
    res, err := s.SDK.UpdateSink(ctx, operations.UpdateSinkRequest{
        RequestBody: &operations.UpdateSinkUpdateSinkRequest{
            Description: "vero",
        },
        Sid: "nihil",
    }, operations.UpdateSinkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
}
```

## UpdateSubscribedEvent

Update an Event for a Subscription.

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
    res, err := s.SDK.UpdateSubscribedEvent(ctx, operations.UpdateSubscribedEventRequest{
        RequestBody: &operations.UpdateSubscribedEventUpdateSubscribedEventRequest{
            SchemaVersion: sdk.Int64(509624),
        },
        SubscriptionSid: "voluptatibus",
        Type: "ipsa",
    }, operations.UpdateSubscribedEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1SubscriptionSubscribedEvent != nil {
        // handle response
    }
}
```

## UpdateSubscription

Update a Subscription.

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
    res, err := s.SDK.UpdateSubscription(ctx, operations.UpdateSubscriptionRequest{
        RequestBody: &operations.UpdateSubscriptionUpdateSubscriptionRequest{
            Description: sdk.String("omnis"),
            SinkSid: sdk.String("voluptate"),
        },
        Sid: "cum",
    }, operations.UpdateSubscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Subscription != nil {
        // handle response
    }
}
```
