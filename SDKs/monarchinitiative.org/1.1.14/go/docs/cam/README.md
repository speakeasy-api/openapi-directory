# Cam

## Overview

Operations on GO Causal Activity Models (GO-CAMs)

### Available Operations

* [GetActivityCollection](#getactivitycollection) - Returns list of models
* [GetInstanceObject](#getinstanceobject) - Returns list of matches
* [GetModelCollection](#getmodelcollection) - Returns list of ALL models
* [GetModelContributors](#getmodelcontributors) - Returns list of all contributors across all models
* [GetModelInstances](#getmodelinstances) - Returns list of all instances
* [GetModelObject](#getmodelobject) - Returns a complete model
* [GetModelProperties](#getmodelproperties) - Returns list of all properties used across all models
* [GetModelPropertyValues](#getmodelpropertyvalues) - Returns list property-values for all models
* [GetModelQuery](#getmodelquery) - Returns list of models matching query
* [GetPhysicalInteraction](#getphysicalinteraction) - Returns list of models

## GetActivityCollection

Returns list of models

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
    res, err := s.Cam.GetActivityCollection(ctx, operations.GetActivityCollectionRequest{
        Contributor: sdk.String("deserunt"),
        Title: sdk.String("Dr."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInstanceObject

Returns list of matches

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
    res, err := s.Cam.GetInstanceObject(ctx, operations.GetInstanceObjectRequest{
        Contributor: sdk.String("distinctio"),
        ID: "7799d22e-8c1f-4849-b825-fdc42c876c2c",
        Title: sdk.String("Mr."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetModelCollection

Returns list of ALL models

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
    res, err := s.Cam.GetModelCollection(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetModelContributors

Returns list of all contributors across all models

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
    res, err := s.Cam.GetModelContributors(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetModelInstances

Returns list of all instances

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
    res, err := s.Cam.GetModelInstances(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetModelObject

Returns a complete model

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
    res, err := s.Cam.GetModelObject(ctx, operations.GetModelObjectRequest{
        ID: "dfb4cfc1-c762-430f-841f-b1bd23fdb14d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetModelProperties

Returns list of all properties used across all models

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
    res, err := s.Cam.GetModelProperties(ctx, operations.GetModelPropertiesRequest{
        Contributor: sdk.String("expedita"),
        Title: sdk.String("Ms."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetModelPropertyValues

Returns list property-values for all models

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
    res, err := s.Cam.GetModelPropertyValues(ctx, operations.GetModelPropertyValuesRequest{
        Contributor: sdk.String("tempore"),
        Title: sdk.String("Dr."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetModelQuery

Returns list of models matching query

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
    res, err := s.Cam.GetModelQuery(ctx, operations.GetModelQueryRequest{
        Contributor: sdk.String("nostrum"),
        Title: sdk.String("Miss"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPhysicalInteraction

Returns list of models

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
    res, err := s.Cam.GetPhysicalInteraction(ctx, operations.GetPhysicalInteractionRequest{
        Contributor: sdk.String("voluptas"),
        Title: sdk.String("Ms."),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
