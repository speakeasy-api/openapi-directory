# Hosted

## Overview

Create, List, Updated and Delete Hosted VoIP Customers

### Available Operations

* [GetHosted](#gethosted) - List Hosted VoIP domains

## GetHosted

List Hosted VoIP domains

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Hosted.GetHosted(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
