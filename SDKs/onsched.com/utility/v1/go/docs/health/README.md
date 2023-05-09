# Health

### Available Operations

* [GetUtilityV1HealthHeartbeat](#getutilityv1healthheartbeat)
* [GetUtilityV1HealthThreadinfo](#getutilityv1healththreadinfo)

## GetUtilityV1HealthHeartbeat

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Health.GetUtilityV1HealthHeartbeat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUtilityV1HealthHeartbeat200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetUtilityV1HealthThreadinfo

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Health.GetUtilityV1HealthThreadinfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ThreadPoolInfo != nil {
        // handle response
    }
}
```
