# Platforms

### Available Operations

* [PlatformsList](#platformslist) - Get a list of video game platforms.
* [PlatformsListsParentsList](#platformslistsparentslist) - Get a list of parent platforms.
* [PlatformsRead](#platformsread) - Get details of the platform.

## PlatformsList

Get a list of video game platforms.

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
    res, err := s.Platforms.PlatformsList(ctx, operations.PlatformsListRequest{
        Ordering: sdk.String("sed"),
        Page: sdk.Int64(904648),
        PageSize: sdk.Int64(868126),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlatformsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PlatformsListsParentsList

For instance, for PS2 and PS4 the “parent platform” is PlayStation.

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
    res, err := s.Platforms.PlatformsListsParentsList(ctx, operations.PlatformsListsParentsListRequest{
        Ordering: sdk.String("accusantium"),
        Page: sdk.Int64(162493),
        PageSize: sdk.Int64(508315),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlatformsListsParentsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PlatformsRead

Get details of the platform.

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
    res, err := s.Platforms.PlatformsRead(ctx, operations.PlatformsReadRequest{
        ID: 615560,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlatformSingle != nil {
        // handle response
    }
}
```
