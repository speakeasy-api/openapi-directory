# Application

### Available Operations

* [DeleteApplicationSecret](#deleteapplicationsecret) - Deletes Application secret
* [GetApplicationSecret](#getapplicationsecret) - Get Application secret
* [GetApplicationSecrets](#getapplicationsecrets) - Get all Application secret links
* [PostApplicationSecret](#postapplicationsecret) - Create a new Application secret
* [PutApplicationSecret](#putapplicationsecret) - Create a new Application secret

## DeleteApplicationSecret

Deletes an Application secret from the given resource location

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
    res, err := s.Application.DeleteApplicationSecret(ctx, operations.DeleteApplicationSecretRequest{
        APIVersion: "aspernatur",
        Authorization: "perferendis",
        SecretID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetApplicationSecret

Get the public visible Application secret object

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
    res, err := s.Application.GetApplicationSecret(ctx, operations.GetApplicationSecretRequest{
        APIVersion: "natus",
        Authorization: "sed",
        SecretID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSecret != nil {
        // handle response
    }
}
```

## GetApplicationSecrets

Get all the Application secret links

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
    res, err := s.Application.GetApplicationSecrets(ctx, operations.GetApplicationSecretsRequest{
        APIVersion: "dolor",
        Authorization: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostApplicationSecret

Create new Application secret using auto generated resource location key

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
    res, err := s.Application.PostApplicationSecret(ctx, operations.PostApplicationSecretRequest{
        APIVersion: "laboriosam",
        Authorization: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutApplicationSecret

Create / update an Application secret at the given resource location

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
    res, err := s.Application.PutApplicationSecret(ctx, operations.PutApplicationSecretRequest{
        APIVersion: "saepe",
        Authorization: "fuga",
        SecretID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSecret != nil {
        // handle response
    }
}
```
