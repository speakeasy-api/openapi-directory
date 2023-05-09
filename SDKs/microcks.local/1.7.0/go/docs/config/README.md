# Config

## Overview

Operations related to configuration

### Available Operations

* [CreateSecret](#createsecret) - Create a new Secret
* [DeleteSecret](#deletesecret) - Delete Secret
* [GetFeaturesConfiguration](#getfeaturesconfiguration) - Get features configuration
* [GetKeycloakConfig](#getkeycloakconfig) - Get authentification configuration
* [GetSecret](#getsecret) - Get Secret
* [GetSecrets](#getsecrets) - Get Secrets
* [GetSecretsCounter](#getsecretscounter) - Get the Secrets counter
* [UpdateSecret](#updatesecret) - Update Secret

## CreateSecret

Create a new Secret

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
    res, err := s.Config.CreateSecret(ctx, shared.Secret{
        CaCertPem: sdk.String("suscipit"),
        Description: "iure",
        ID: sdk.String("4e0f467c-c879-46ed-951a-05dfc2ddf7cc"),
        Name: "Deanna Sauer MD",
        Password: sdk.String("officia"),
        Token: sdk.String("occaecati"),
        TokenHeader: sdk.String("fugit"),
        Username: sdk.String("Kale_Welch10"),
    }, operations.CreateSecretSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Secret != nil {
        // handle response
    }
}
```

## DeleteSecret

Delete a Secret

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
    res, err := s.Config.DeleteSecret(ctx, operations.DeleteSecretRequest{
        ID: "6742cb73-9205-4929-b96f-ea7596eb10fa",
    }, operations.DeleteSecretSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFeaturesConfiguration

Get features configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Config.GetFeaturesConfiguration(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetKeycloakConfig

Get authentification configuration

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Config.GetKeycloakConfig(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeycloakConfig != nil {
        // handle response
    }
}
```

## GetSecret

Retrieve a Secret

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
    res, err := s.Config.GetSecret(ctx, operations.GetSecretRequest{
        ID: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
    }, operations.GetSecretSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Secret != nil {
        // handle response
    }
}
```

## GetSecrets

Get Secrets

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
    res, err := s.Config.GetSecrets(ctx, operations.GetSecretsRequest{
        Page: sdk.Int64(158969),
        Size: sdk.Int64(338007),
    }, operations.GetSecretsSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Secrets != nil {
        // handle response
    }
}
```

## GetSecretsCounter

Get the Secrets counter

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
    res, err := s.Config.GetSecretsCounter(ctx, operations.GetSecretsCounterSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Counter != nil {
        // handle response
    }
}
```

## UpdateSecret

Update a Secret

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
    res, err := s.Config.UpdateSecret(ctx, operations.UpdateSecretRequest{
        ID: "1aa52c3f-5ad0-419d-a1ff-e78f097b0074",
    }, operations.UpdateSecretSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
