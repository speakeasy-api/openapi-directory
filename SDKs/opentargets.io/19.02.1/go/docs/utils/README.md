# Utils

## Overview

Utility methods.

### Available Operations

* [GetDataMetrics](#getdatametrics) - Get metrics about the current data release
* [GetDataStats](#getdatastats) - Get statistics about the current data release
* [GetPing](#getping) - Ping service
* [GetTherapeuticAreas](#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [GetVersion](#getversion) - Get API version

## GetDataMetrics

Returns the metrics about associations and evidences, divided by datasource, genes and so on.


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
    res, err := s.Utils.GetDataMetrics(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDataStats

Returns the number of associations and evidences, divided by datasource.


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
    res, err := s.Utils.GetDataStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPing

Check if the API is up


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
    res, err := s.Utils.GetPing(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTherapeuticAreas

Returns the list of therapeutic areas for the current data release


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
    res, err := s.Utils.GetTherapeuticAreas(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVersion

Returns current API version.


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
    res, err := s.Utils.GetVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
