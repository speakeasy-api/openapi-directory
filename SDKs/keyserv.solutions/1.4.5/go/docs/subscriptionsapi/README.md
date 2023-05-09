# SubscriptionsAPI

### Available Operations

* [SubscriptionsAPICount](#subscriptionsapicount)
* [SubscriptionsAPIDeleteSubscription](#subscriptionsapideletesubscription)
* [SubscriptionsAPIDeleteSubscription2](#subscriptionsapideletesubscription2)
* [SubscriptionsAPIDisable](#subscriptionsapidisable)
* [SubscriptionsAPIDisable2](#subscriptionsapidisable2)
* [SubscriptionsAPIEnable](#subscriptionsapienable)
* [SubscriptionsAPIEnable2](#subscriptionsapienable2)
* [SubscriptionsAPIFind](#subscriptionsapifind)
* [SubscriptionsAPIList](#subscriptionsapilist)
* [SubscriptionsAPIPutSubscription](#subscriptionsapiputsubscription)
* [SubscriptionsAPIPutSubscription2](#subscriptionsapiputsubscription2)
* [SubscriptionsAPISave](#subscriptionsapisave)

## SubscriptionsAPICount

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPICount(ctx, operations.SubscriptionsAPICountRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionsAPICount200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## SubscriptionsAPIDeleteSubscription

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIDeleteSubscription(ctx, operations.SubscriptionsAPIDeleteSubscriptionRequest{
        XAPIKey: "suscipit",
        Keep: false,
        Serial: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIDeleteSubscription2

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIDeleteSubscription2(ctx, operations.SubscriptionsAPIDeleteSubscription2Request{
        XAPIKey: "magnam",
        Keep: false,
        Serial: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIDisable

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIDisable(ctx, operations.SubscriptionsAPIDisableRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIDisable2

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIDisable2(ctx, operations.SubscriptionsAPIDisable2RequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIEnable

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIEnable(ctx, operations.SubscriptionsAPIEnableRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIEnable2

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIEnable2(ctx, operations.SubscriptionsAPIEnable2RequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIFind

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIFind(ctx, operations.SubscriptionsAPIFindRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionsAPIFind200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## SubscriptionsAPIList

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIList(ctx, operations.SubscriptionsAPIListRequest{
        RequestBody: operations.SubscriptionsAPIListRequestBody{},
        Page: sdk.Int(56713),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionViews != nil {
        // handle response
    }
}
```

## SubscriptionsAPIPutSubscription

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIPutSubscription(ctx, operations.SubscriptionsAPIPutSubscriptionRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPIPutSubscription2

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPIPutSubscription2(ctx, operations.SubscriptionsAPIPutSubscription2RequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscriptionsAPISave

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
    res, err := s.SubscriptionsAPI.SubscriptionsAPISave(ctx, operations.SubscriptionsAPISaveRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionsAPISave201ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
