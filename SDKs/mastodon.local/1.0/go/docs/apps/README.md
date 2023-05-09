# Apps

### Available Operations

* [GetAPIV1AppsVerifyCredentials](#getapiv1appsverifycredentials) - Confirm that the app's OAuth2 credentials work.
* [PostAPIV1Apps](#postapiv1apps) - Create a new application to obtain OAuth2 credentials.

## GetAPIV1AppsVerifyCredentials

Confirm that the app's OAuth2 credentials work.

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
    res, err := s.Apps.GetAPIV1AppsVerifyCredentials(ctx, operations.GetAPIV1AppsVerifyCredentialsSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## PostAPIV1Apps

Create a new application to obtain OAuth2 credentials.

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
    res, err := s.Apps.PostAPIV1Apps(ctx, []byte("modi"))
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAPIV1Apps200ApplicationJSONObject != nil {
        // handle response
    }
}
```
