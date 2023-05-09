# StaticFiles

## Overview

This folder contains a list of static files stored in Home.

### Available Operations

* [ChromecastIcon](#chromecasticon) - Chromecast Icon
* [LegalNotice](#legalnotice) - Legal Notice

## ChromecastIcon

**Update:** This no longer exists. It's not useful, anyway.

A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`

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
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StaticFiles.ChromecastIcon(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LegalNotice

All licenses of programs used by Home.

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
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StaticFiles.LegalNotice(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LegalNotice200TextPlainString != nil {
        // handle response
    }
}
```
