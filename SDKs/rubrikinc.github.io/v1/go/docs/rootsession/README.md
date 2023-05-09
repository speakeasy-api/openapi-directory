# RootSession

## Overview

User session management.

### Available Operations

* [CreateSession](#createsession) - Create user session
* [DeleteSession](#deletesession) - Delete user session

## CreateSession

Open a user session.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootSession.CreateSession(ctx, operations.CreateSessionRequest{
        OrganizationID: sdk.String("enim"),
        Realm: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionSummary != nil {
        // handle response
    }
}
```

## DeleteSession

Close a user session and invalidate the session token.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootSession.DeleteSession(ctx, operations.DeleteSessionRequest{
        ID: "507621c5-8f4d-4739-a564-c20a0711a961",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
