# Apps

### Available Operations

* [DeleteJsappsCodeJSON](#deletejsappscodejson) - Delete an existing JSApp.
* [GetJsappsJSON](#getjsappsjson) - Retrieve all the Store's JSApps.
* [GetJsappsCodeJSON](#getjsappscodejson) - Retrieve a JSApp.
* [PostJsappsJSON](#postjsappsjson) - Create a Store JSApp.

## DeleteJsappsCodeJSON

Delete an existing JSApp.

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
    res, err := s.Apps.DeleteJsappsCodeJSON(ctx, operations.DeleteJsappsCodeJSONRequest{
        Authtoken: "quibusdam",
        Code: "unde",
        Login: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteJsappsCodeJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetJsappsJSON

Retrieve all the Store's JSApps.

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
    res, err := s.Apps.GetJsappsJSON(ctx, operations.GetJsappsJSONRequest{
        Authtoken: "corrupti",
        Login: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.App != nil {
        // handle response
    }
}
```

## GetJsappsCodeJSON

Retrieve a JSApp.

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
    res, err := s.Apps.GetJsappsCodeJSON(ctx, operations.GetJsappsCodeJSONRequest{
        Authtoken: "vel",
        Code: "error",
        Login: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JSApp != nil {
        // handle response
    }
}
```

## PostJsappsJSON

Create a Store JSApp.

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
    res, err := s.Apps.PostJsappsJSON(ctx, operations.PostJsappsJSONRequest{
        JSAppEdit: shared.JSAppEdit{
            App: &shared.JSApp{
                Element: sdk.String("suscipit"),
                Template: sdk.String("iure"),
                URL: sdk.String("magnam"),
            },
        },
        Authtoken: "debitis",
        Login: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JSApp != nil {
        // handle response
    }
}
```
