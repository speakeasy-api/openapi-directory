# Www

### Available Operations

* [BrowserBot](#browserbot) - Browser Bot
* [HTMLClean](#htmlclean) - HTML Clean
* [URLInfo](#urlinfo) - URL Info

## BrowserBot

Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Www.BrowserBot(ctx, operations.BrowserBotRequestBody{
        Delay: sdk.Int(96098),
        Exec: []string{
            "voluptatibus",
            "vero",
            "nihil",
            "praesentium",
        },
        IgnoreCertificateErrors: sdk.Bool(false),
        Selector: sdk.String("voluptatibus"),
        Timeout: sdk.Int(55714),
        URL: "omnis",
        UserAgent: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BrowserBotResponse != nil {
        // handle response
    }
}
```

## HTMLClean

Clean and sanitize untrusted HTML

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Www.HTMLClean(ctx, operations.HTMLCleanRequestBody{
        Content: "cum",
        OutputType: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HTMLClean200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## URLInfo

Parse, analyze and retrieve content from the supplied URL

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
            APIKey: "YOUR_API_KEY_HERE",
            UserID: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Www.URLInfo(ctx, operations.URLInfoRequest{
        FetchContent: sdk.Bool(false),
        IgnoreCertificateErrors: sdk.Bool(false),
        Retry: sdk.Int(39187),
        Timeout: sdk.Int(441711),
        URL: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLInfoResponse != nil {
        // handle response
    }
}
```
