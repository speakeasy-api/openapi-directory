# ValidationAuthorities

## Overview

Everything about Otoroshi validation authorities

### Available Operations

* [CreateClientValidator](#createclientvalidator) - Create one validation authorities
* [DeleteClientValidator](#deleteclientvalidator) - Delete one validation authorities by id
* [FindAllClientValidators](#findallclientvalidators) - Get all validation authoritiess
* [FindClientValidatorByID](#findclientvalidatorbyid) - Get one validation authorities by id
* [PatchClientValidator](#patchclientvalidator) - Update one validation authorities by id
* [UpdateClientValidator](#updateclientvalidator) - Update one validation authorities by id

## CreateClientValidator

Create one validation authorities

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
    res, err := s.ValidationAuthorities.CreateClientValidator(ctx, shared.ValidationAuthority{
        AlwaysValid: true,
        BadTTL: 123,
        Description: "a string value",
        GoodTTL: 123,
        Headers: map[string]string{
            "animi": "necessitatibus",
        },
        Host: "a string value",
        ID: "a string value",
        Method: "a string value",
        Name: "a string value",
        NoCache: true,
        Path: "a string value",
        Timeout: 123,
        URL: "a string value",
    }, operations.CreateClientValidatorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationAuthority != nil {
        // handle response
    }
}
```

## DeleteClientValidator

Delete one validation authorities by id

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
    res, err := s.ValidationAuthorities.DeleteClientValidator(ctx, operations.DeleteClientValidatorRequest{
        ID: "d0117996-312f-4de0-8771-778ff61d0174",
    }, operations.DeleteClientValidatorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleted != nil {
        // handle response
    }
}
```

## FindAllClientValidators

Get all validation authoritiess

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
    res, err := s.ValidationAuthorities.FindAllClientValidators(ctx, operations.FindAllClientValidatorsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationAuthorities != nil {
        // handle response
    }
}
```

## FindClientValidatorByID

Get one validation authorities by id

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
    res, err := s.ValidationAuthorities.FindClientValidatorByID(ctx, operations.FindClientValidatorByIDRequest{
        ID: "76360a15-db6a-4660-a59a-1adeaab5851d",
    }, operations.FindClientValidatorByIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationAuthority != nil {
        // handle response
    }
}
```

## PatchClientValidator

Update one validation authorities by id

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
    res, err := s.ValidationAuthorities.PatchClientValidator(ctx, operations.PatchClientValidatorRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("ex"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumReplace,
                Path: "a string value",
                Value: sdk.String("ad"),
            },
        },
        ID: "b08b6189-1baa-40fe-9ade-008e6f8c5f35",
    }, operations.PatchClientValidatorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationAuthority != nil {
        // handle response
    }
}
```

## UpdateClientValidator

Update one validation authorities by id

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
    res, err := s.ValidationAuthorities.UpdateClientValidator(ctx, operations.UpdateClientValidatorRequest{
        ValidationAuthority: &shared.ValidationAuthority{
            AlwaysValid: true,
            BadTTL: 123,
            Description: "a string value",
            GoodTTL: 123,
            Headers: map[string]string{
                "illum": "totam",
            },
            Host: "a string value",
            ID: "a string value",
            Method: "a string value",
            Name: "a string value",
            NoCache: true,
            Path: "a string value",
            Timeout: 123,
            URL: "a string value",
        },
        ID: "cdb5a341-8143-4010-8218-13d5208ece7e",
    }, operations.UpdateClientValidatorSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationAuthority != nil {
        // handle response
    }
}
```
