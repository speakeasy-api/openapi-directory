# RootAuthorization

## Overview

Authorization.

### Available Operations

* [DeleteAuthzCache](#deleteauthzcache) - Clear cached authorization information

## DeleteAuthzCache

Clears the node of cached authorization information for the current user.

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
    res, err := s.RootAuthorization.DeleteAuthzCache(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
