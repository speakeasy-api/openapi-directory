# JwtVerifiers

## Overview

Everything about Otoroshi global JWT token verifiers

### Available Operations

* [CreateGlobalJwtVerifier](#createglobaljwtverifier) - Create one global JWT verifiers
* [DeleteGlobalJwtVerifier](#deleteglobaljwtverifier) - Delete one global JWT verifiers
* [FindAllGlobalJwtVerifiers](#findallglobaljwtverifiers) - Get all global JWT verifiers
* [FindGlobalJwtVerifiersByID](#findglobaljwtverifiersbyid) - Get one global JWT verifiers
* [PatchGlobalJwtVerifier](#patchglobaljwtverifier) - Update one global JWT verifiers
* [UpdateGlobalJwtVerifier](#updateglobaljwtverifier) - Update one global JWT verifiers

## CreateGlobalJwtVerifier

Create one global JWT verifiers

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
    res, err := s.JwtVerifiers.CreateGlobalJwtVerifier(ctx, shared.GlobalJwtVerifier{
        AlgoSettings: shared.GlobalJwtVerifierAlgoSettings{},
        Desc: "a string value",
        Enabled: true,
        ID: "a string value",
        Name: "a string value",
        Source: shared.GlobalJwtVerifierSource{},
        Strategy: shared.GlobalJwtVerifierStrategy{},
        Strict: true,
    }, operations.CreateGlobalJwtVerifierSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalJwtVerifier != nil {
        // handle response
    }
}
```

## DeleteGlobalJwtVerifier

Delete one global JWT verifiers

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
    res, err := s.JwtVerifiers.DeleteGlobalJwtVerifier(ctx, operations.DeleteGlobalJwtVerifierRequest{
        VerifierID: "quas",
    }, operations.DeleteGlobalJwtVerifierSecurity{
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

## FindAllGlobalJwtVerifiers

Get all global JWT verifiers

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
    res, err := s.JwtVerifiers.FindAllGlobalJwtVerifiers(ctx, operations.FindAllGlobalJwtVerifiersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalJwtVerifiers != nil {
        // handle response
    }
}
```

## FindGlobalJwtVerifiersByID

Get one global JWT verifiers

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
    res, err := s.JwtVerifiers.FindGlobalJwtVerifiersByID(ctx, operations.FindGlobalJwtVerifiersByIDRequest{
        VerifierID: "repudiandae",
    }, operations.FindGlobalJwtVerifiersByIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalJwtVerifier != nil {
        // handle response
    }
}
```

## PatchGlobalJwtVerifier

Update one global JWT verifiers

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
    res, err := s.JwtVerifiers.PatchGlobalJwtVerifier(ctx, operations.PatchGlobalJwtVerifierRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "a string value",
                Value: sdk.String("blanditiis"),
            },
            shared.Patch{
                Op: shared.PatchOpEnumRemove,
                Path: "a string value",
                Value: sdk.String("sed"),
            },
        },
        VerifierID: "sit",
    }, operations.PatchGlobalJwtVerifierSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalJwtVerifier != nil {
        // handle response
    }
}
```

## UpdateGlobalJwtVerifier

Update one global JWT verifiers

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
    res, err := s.JwtVerifiers.UpdateGlobalJwtVerifier(ctx, operations.UpdateGlobalJwtVerifierRequest{
        GlobalJwtVerifier: &shared.GlobalJwtVerifier{
            AlgoSettings: shared.GlobalJwtVerifierAlgoSettings{},
            Desc: "a string value",
            Enabled: true,
            ID: "a string value",
            Name: "a string value",
            Source: shared.GlobalJwtVerifierSource{},
            Strategy: shared.GlobalJwtVerifierStrategy{},
            Strict: true,
        },
        VerifierID: "vel",
    }, operations.UpdateGlobalJwtVerifierSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlobalJwtVerifier != nil {
        // handle response
    }
}
```
