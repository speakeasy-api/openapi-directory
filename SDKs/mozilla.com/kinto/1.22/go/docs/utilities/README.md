# Utilities

### Available Operations

* [Heartbeat](#heartbeat)
* [Lbheartbeat](#lbheartbeat)
* [Version](#version)
* [Contribute](#contribute)
* [GetOpenapiSpec](#getopenapispec)
* [ServerInfo](#serverinfo)

## Heartbeat

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utilities.Heartbeat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SchemaNode != nil {
        // handle response
    }
}
```

## Lbheartbeat

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utilities.Lbheartbeat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SchemaNode != nil {
        // handle response
    }
}
```

## Version

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utilities.Version(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SchemaNode != nil {
        // handle response
    }
}
```

## Contribute

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utilities.Contribute(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SchemaNode != nil {
        // handle response
    }
}
```

## GetOpenapiSpec

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utilities.GetOpenapiSpec(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SchemaNode != nil {
        // handle response
    }
}
```

## ServerInfo

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Utilities.ServerInfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SchemaNode != nil {
        // handle response
    }
}
```
