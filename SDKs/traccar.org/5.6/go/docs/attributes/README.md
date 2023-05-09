# Attributes

## Overview

Computed attributes management

### Available Operations

* [DeleteAttributesComputedID](#deleteattributescomputedid) - Delete an Attribute
* [GetAttributesComputed](#getattributescomputed) - Fetch a list of Attributes
* [PostAttributesComputed](#postattributescomputed) - Create an Attribute
* [PutAttributesComputedID](#putattributescomputedid) - Update an Attribute

## DeleteAttributesComputedID

Delete an Attribute

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attributes.DeleteAttributesComputedID(ctx, operations.DeleteAttributesComputedIDRequest{
        ID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAttributesComputed

Without params, it returns a list of Attributes the user has access to

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attributes.GetAttributesComputed(ctx, operations.GetAttributesComputedRequest{
        All: sdk.Bool(false),
        DeviceID: sdk.Int64(715190),
        GroupID: sdk.Int64(844266),
        Refresh: sdk.Bool(false),
        UserID: sdk.Int64(602763),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attributes != nil {
        // handle response
    }
}
```

## PostAttributesComputed

Create an Attribute

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attributes.PostAttributesComputed(ctx, shared.Attribute{
        Attribute: sdk.String("nulla"),
        Description: sdk.String("corrupti"),
        Expression: sdk.String("illum"),
        ID: sdk.Int64(423655),
        Type: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attribute != nil {
        // handle response
    }
}
```

## PutAttributesComputedID

Update an Attribute

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attributes.PutAttributesComputedID(ctx, operations.PutAttributesComputedIDRequest{
        Attribute: shared.Attribute{
            Attribute: sdk.String("deserunt"),
            Description: sdk.String("suscipit"),
            Expression: sdk.String("iure"),
            ID: sdk.Int64(297534),
            Type: sdk.String("debitis"),
        },
        ID: 56713,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attribute != nil {
        // handle response
    }
}
```
