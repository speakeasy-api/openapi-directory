# Snowmonkey

## Overview

Everything about Otoroshi Snow Monkey

### Available Operations

* [GetSnowMonkeyConfig](#getsnowmonkeyconfig) - Get current Snow Monkey config
* [GetSnowMonkeyOutages](#getsnowmonkeyoutages) - Get all current Snow Monkey ourages
* [PatchSnowMonkey](#patchsnowmonkey) - Update current Snow Monkey config
* [ResetSnowMonkey](#resetsnowmonkey) - Reset Snow Monkey Outages for the day
* [StartSnowMonkey](#startsnowmonkey) - Start the Snow Monkey
* [StopSnowMonkey](#stopsnowmonkey) - Stop the Snow Monkey
* [UpdateSnowMonkey](#updatesnowmonkey) - Update current Snow Monkey config

## GetSnowMonkeyConfig

Get current Snow Monkey config

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
    res, err := s.Snowmonkey.GetSnowMonkeyConfig(ctx, operations.GetSnowMonkeyConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnowMonkeyConfig != nil {
        // handle response
    }
}
```

## GetSnowMonkeyOutages

Get all current Snow Monkey ourages

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
    res, err := s.Snowmonkey.GetSnowMonkeyOutages(ctx, operations.GetSnowMonkeyOutagesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Outages != nil {
        // handle response
    }
}
```

## PatchSnowMonkey

Update current Snow Monkey config

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
    res, err := s.Snowmonkey.PatchSnowMonkey(ctx, shared.Group{
        Description: sdk.String("a string value"),
        ID: "a string value",
        Name: "a string value",
    }, operations.PatchSnowMonkeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnowMonkeyConfig != nil {
        // handle response
    }
}
```

## ResetSnowMonkey

Reset Snow Monkey Outages for the day

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
    res, err := s.Snowmonkey.ResetSnowMonkey(ctx, operations.ResetSnowMonkeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Done != nil {
        // handle response
    }
}
```

## StartSnowMonkey

Start the Snow Monkey

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
    res, err := s.Snowmonkey.StartSnowMonkey(ctx, operations.StartSnowMonkeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Done != nil {
        // handle response
    }
}
```

## StopSnowMonkey

Stop the Snow Monkey

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
    res, err := s.Snowmonkey.StopSnowMonkey(ctx, operations.StopSnowMonkeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Done != nil {
        // handle response
    }
}
```

## UpdateSnowMonkey

Update current Snow Monkey config

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
    res, err := s.Snowmonkey.UpdateSnowMonkey(ctx, shared.Group{
        Description: sdk.String("a string value"),
        ID: "a string value",
        Name: "a string value",
    }, operations.UpdateSnowMonkeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SnowMonkeyConfig != nil {
        // handle response
    }
}
```
