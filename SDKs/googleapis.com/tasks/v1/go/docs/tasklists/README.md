# Tasklists

### Available Operations

* [TasksTasklistsDelete](#taskstasklistsdelete) - Deletes the authenticated user's specified task list.
* [TasksTasklistsGet](#taskstasklistsget) - Returns the authenticated user's specified task list.
* [TasksTasklistsInsert](#taskstasklistsinsert) - Creates a new task list and adds it to the authenticated user's task lists.
* [TasksTasklistsList](#taskstasklistslist) - Returns all the authenticated user's task lists.
* [TasksTasklistsPatch](#taskstasklistspatch) - Updates the authenticated user's specified task list. This method supports patch semantics.
* [TasksTasklistsUpdate](#taskstasklistsupdate) - Updates the authenticated user's specified task list.

## TasksTasklistsDelete

Deletes the authenticated user's specified task list.

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
    res, err := s.Tasklists.TasksTasklistsDelete(ctx, operations.TasksTasklistsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        Tasklist: "molestiae",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.TasksTasklistsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TasksTasklistsGet

Returns the authenticated user's specified task list.

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
    res, err := s.Tasklists.TasksTasklistsGet(ctx, operations.TasksTasklistsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        Tasklist: "veritatis",
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.TasksTasklistsGetSecurity{
        Option1: &operations.TasksTasklistsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskList != nil {
        // handle response
    }
}
```

## TasksTasklistsInsert

Creates a new task list and adds it to the authenticated user's task lists.

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
    res, err := s.Tasklists.TasksTasklistsInsert(ctx, operations.TasksTasklistsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TaskList: &shared.TaskList{
            Etag: sdk.String("repellendus"),
            ID: sdk.String("fc2ddf7c-c78c-4a1b-a928-fc816742cb73"),
            Kind: sdk.String("excepturi"),
            SelfLink: sdk.String("aspernatur"),
            Title: sdk.String("Mr."),
            Updated: sdk.String("ad"),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.TasksTasklistsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskList != nil {
        // handle response
    }
}
```

## TasksTasklistsList

Returns all the authenticated user's task lists.

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
    res, err := s.Tasklists.TasksTasklistsList(ctx, operations.TasksTasklistsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        MaxResults: sdk.Int64(99280),
        OauthToken: sdk.String("ipsa"),
        PageToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.TasksTasklistsListSecurity{
        Option1: &operations.TasksTasklistsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskLists != nil {
        // handle response
    }
}
```

## TasksTasklistsPatch

Updates the authenticated user's specified task list. This method supports patch semantics.

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
    res, err := s.Tasklists.TasksTasklistsPatch(ctx, operations.TasksTasklistsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TaskList: &shared.TaskList{
            Etag: sdk.String("dolorem"),
            ID: sdk.String("52c59559-07af-4f1a-ba2f-a9467739251a"),
            Kind: sdk.String("animi"),
            SelfLink: sdk.String("enim"),
            Title: sdk.String("Mr."),
            Updated: sdk.String("quo"),
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        Tasklist: "error",
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.TasksTasklistsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskList != nil {
        // handle response
    }
}
```

## TasksTasklistsUpdate

Updates the authenticated user's specified task list.

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
    res, err := s.Tasklists.TasksTasklistsUpdate(ctx, operations.TasksTasklistsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TaskList: &shared.TaskList{
            Etag: sdk.String("reiciendis"),
            ID: sdk.String("fe78f097-b007-44f1-9471-b5e6e13b99d4"),
            Kind: sdk.String("praesentium"),
            SelfLink: sdk.String("rem"),
            Title: sdk.String("Dr."),
            Updated: sdk.String("quasi"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        Tasklist: "est",
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.TasksTasklistsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TaskList != nil {
        // handle response
    }
}
```
