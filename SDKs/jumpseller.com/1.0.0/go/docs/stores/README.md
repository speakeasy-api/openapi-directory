# Stores

### Available Operations

* [GetStoreInfoJSON](#getstoreinfojson) - Retrieve Store Information.
* [GetStoreLanguagesJSON](#getstorelanguagesjson) - Retrieve Store Languages.

## GetStoreInfoJSON

Retrieve Store Information.

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
    res, err := s.Stores.GetStoreInfoJSON(ctx, operations.GetStoreInfoJSONRequest{
        Authtoken: "quidem",
        Login: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Store != nil {
        // handle response
    }
}
```

## GetStoreLanguagesJSON

Retrieve Store Languages.

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
    res, err := s.Stores.GetStoreLanguagesJSON(ctx, operations.GetStoreLanguagesJSONRequest{
        Authtoken: "et",
        Login: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Languages != nil {
        // handle response
    }
}
```
