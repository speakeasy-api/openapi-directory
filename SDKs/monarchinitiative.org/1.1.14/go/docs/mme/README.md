# Mme

## Overview

Match patients with similar diseases and non-human genes based on their phenotypes

### Available Operations

* [PostDiseaseMme](#postdiseasemme) - Match a patient to diseases based on their phenotypes
* [PostFlyMme](#postflymme) - Match a patient to fruit fly genes based on similar phenotypes
* [PostMouseMme](#postmousemme) - Match a patient to mouse genes based on similar phenotypes
* [PostNematodeMme](#postnematodemme) - Match a patient to nematode genes based on similar phenotypes
* [PostZebrafishMme](#postzebrafishmme) - Match a patient to zebrafish genes based on similar phenotypes

## PostDiseaseMme

Match a patient to diseases based on their phenotypes

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
    res, err := s.Mme.PostDiseaseMme(ctx, map[string]interface{}{
        "dolor": "est",
        "reiciendis": "possimus",
        "odit": "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostFlyMme

Match a patient to fruit fly genes based on similar phenotypes

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
    res, err := s.Mme.PostFlyMme(ctx, map[string]interface{}{
        "minima": "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostMouseMme

Match a patient to mouse genes based on similar phenotypes

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
    res, err := s.Mme.PostMouseMme(ctx, map[string]interface{}{
        "deserunt": "nisi",
        "ipsam": "voluptatem",
        "illo": "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostNematodeMme

Match a patient to nematode genes based on similar phenotypes

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
    res, err := s.Mme.PostNematodeMme(ctx, map[string]interface{}{
        "eveniet": "quae",
        "ea": "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostZebrafishMme

Match a patient to zebrafish genes based on similar phenotypes

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
    res, err := s.Mme.PostZebrafishMme(ctx, map[string]interface{}{
        "quidem": "asperiores",
        "eum": "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
