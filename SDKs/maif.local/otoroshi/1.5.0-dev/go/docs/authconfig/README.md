# AuthConfig

## Overview

Everything about Otoroshi global auth. module config

### Available Operations

* [CreateGlobalAuthModule](#createglobalauthmodule) - Create one global auth. module config
* [DeleteGlobalAuthModule](#deleteglobalauthmodule) - Delete one global auth. module config
* [FindAllGlobalAuthModules](#findallglobalauthmodules) - Get all global auth. module configs
* [FindGlobalAuthModuleByID](#findglobalauthmodulebyid) - Get one global auth. module configs
* [PatchGlobalAuthModule](#patchglobalauthmodule) - Update one global auth. module config
* [UpdateGlobalAuthModule](#updateglobalauthmodule) - Update one global auth. module config

## CreateGlobalAuthModule

Create one global auth. module config

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
    res, err := s.AuthConfig.CreateGlobalAuthModule(ctx, operations.CreateGlobalAuthModuleRequestBody{}, operations.CreateGlobalAuthModuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGlobalAuthModule200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## DeleteGlobalAuthModule

Delete one global auth. module config

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
    res, err := s.AuthConfig.DeleteGlobalAuthModule(ctx, operations.DeleteGlobalAuthModuleRequest{
        ID: "9396fea7-596e-4b10-baaa-2352c5955907",
    }, operations.DeleteGlobalAuthModuleSecurity{
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

## FindAllGlobalAuthModules

Get all global auth. module configs

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
    res, err := s.AuthConfig.FindAllGlobalAuthModules(ctx, operations.FindAllGlobalAuthModulesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindAllGlobalAuthModules200ApplicationJSONOneoves != nil {
        // handle response
    }
}
```

## FindGlobalAuthModuleByID

Get one global auth. module configs

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
    res, err := s.AuthConfig.FindGlobalAuthModuleByID(ctx, operations.FindGlobalAuthModuleByIDRequest{
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
    }, operations.FindGlobalAuthModuleByIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FindGlobalAuthModuleByID200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## PatchGlobalAuthModule

Update one global auth. module config

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
    res, err := s.AuthConfig.PatchGlobalAuthModule(ctx, operations.PatchGlobalAuthModuleRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumCopy,
                Path: "a string value",
                Value: sdk.String("temporibus"),
            },
        },
        ID: "a1ffe78f-097b-4007-8f15-471b5e6e13b9",
    }, operations.PatchGlobalAuthModuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PatchGlobalAuthModule200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## UpdateGlobalAuthModule

Update one global auth. module config

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
    res, err := s.AuthConfig.UpdateGlobalAuthModule(ctx, operations.UpdateGlobalAuthModuleRequest{
        RequestBody: &operations.UpdateGlobalAuthModuleRequestBody{},
        ID: "9d488e1e-91e4-450a-92ab-d44269802d50",
    }, operations.UpdateGlobalAuthModuleSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGlobalAuthModule200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
