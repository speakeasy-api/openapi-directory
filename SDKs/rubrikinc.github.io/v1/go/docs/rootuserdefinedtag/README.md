# RootUserDefinedTag

## Overview

User-defined resource tag management.

### Available Operations

* [CreateUserDefinedTag](#createuserdefinedtag) - Create a user-defined resource tag for tagging cloud compute resources
* [DeleteUserDefinedTag](#deleteuserdefinedtag) - Delete a user-defined resource tag
* [DeleteUserDefinedTagBulk](#deleteuserdefinedtagbulk) - Delete a list of user-defined resource tags
* [GetUserDefinedTag](#getuserdefinedtag) - Get user-defined tag
* [QueryUserDefinedTag](#queryuserdefinedtag) - Get user-defined resource tags
* [UpdateUserDefinedTag](#updateuserdefinedtag) - Update the value of a user-defined resource tag

## CreateUserDefinedTag

Create a user-defined resource tag for tagging cloud compute resources created by CloudOn and CloutOut.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
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
    res, err := s.RootUserDefinedTag.CreateUserDefinedTag(ctx, shared.ResourceTagDefinition{
        Key: "odit",
        ScopeRefID: "quibusdam",
        Value: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceTagDetail != nil {
        // handle response
    }
}
```

## DeleteUserDefinedTag

Delete a user-defined resource tag.

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
    res, err := s.RootUserDefinedTag.DeleteUserDefinedTag(ctx, operations.DeleteUserDefinedTagRequest{
        ID: "bc0f9408-7d9c-4aae-842d-d7caac9b4caa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserDefinedTagBulk

Delete a list of user-defined resource tags in one delete operation.


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
    res, err := s.RootUserDefinedTag.DeleteUserDefinedTagBulk(ctx, operations.DeleteUserDefinedTagBulkRequest{
        Ids: []string{
            "quod",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceTagDeleteResponse != nil {
        // handle response
    }
}
```

## GetUserDefinedTag

Retrieve details of a user-defined resource tag.

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
    res, err := s.RootUserDefinedTag.GetUserDefinedTag(ctx, operations.GetUserDefinedTagRequest{
        ID: "fe9e15df-9039-407f-b783-1983d42e54a8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceTagDetail != nil {
        // handle response
    }
}
```

## QueryUserDefinedTag

Get user-defined resource tags for the cloud compute resources created by CloudOn and CloudOut.


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
    res, err := s.RootUserDefinedTag.QueryUserDefinedTag(ctx, operations.QueryUserDefinedTagRequest{
        Key: sdk.String("corporis"),
        ScopeRefID: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceTagGetResponse != nil {
        // handle response
    }
}
```

## UpdateUserDefinedTag

Update the value of a user-defined resource tag.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootUserDefinedTag.UpdateUserDefinedTag(ctx, operations.UpdateUserDefinedTagRequest{
        ResourceTagUpdate: shared.ResourceTagUpdate{
            Value: "commodi",
        },
        ID: "6597c502-33c1-4471-951a-aa6ddf5abd64",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceTagDetail != nil {
        // handle response
    }
}
```
