# SDK

## Overview

The [Okta User API](/docs/api/rest/users.html) provides operations to manage users in your organization.

### Available Operations

* [ClearUserSessions](#clearusersessions) - Clear User Sessions
* [FindUser](#finduser) - Find User
* [GetAssignedAppLinks](#getassignedapplinks) - Get Assigned App Links
* [GetCurrentUser](#getcurrentuser) - Get Current User
* [GetGroupsForUser](#getgroupsforuser) - Get Groups for User
* [GetUser](#getuser) - Get User
* [ResetFactors](#resetfactors) - Reset Factors

## ClearUserSessions

Clear User Sessions

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
    res, err := s.SDK.ClearUserSessions(ctx, operations.ClearUserSessionsRequest{
        RequestBody: []byte("distinctio"),
        UserID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindUser

Find User

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
    res, err := s.SDK.FindUser(ctx, operations.FindUserRequest{
        RequestBody: []byte("unde"),
        Q: sdk.String("user"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAssignedAppLinks

Get Assigned App Links

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
    res, err := s.SDK.GetAssignedAppLinks(ctx, operations.GetAssignedAppLinksRequest{
        RequestBody: []byte("nulla"),
        UserID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCurrentUser

Get Current User

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetCurrentUser(ctx, []byte("illum"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGroupsForUser

Get Groups for User

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
    res, err := s.SDK.GetGroupsForUser(ctx, operations.GetGroupsForUserRequest{
        RequestBody: []byte("vel"),
        UserID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUser

Get User

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
    res, err := s.SDK.GetUser(ctx, operations.GetUserRequest{
        RequestBody: []byte("deserunt"),
        UserID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetFactors

Reset Factors

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
    res, err := s.SDK.ResetFactors(ctx, operations.ResetFactorsRequest{
        RequestBody: []byte("iure"),
        UserID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
