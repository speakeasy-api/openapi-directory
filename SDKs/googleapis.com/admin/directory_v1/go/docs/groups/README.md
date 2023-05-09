# Groups

### Available Operations

* [DirectoryGroupsAliasesDelete](#directorygroupsaliasesdelete) - Removes an alias.
* [DirectoryGroupsAliasesInsert](#directorygroupsaliasesinsert) - Adds an alias for the group.
* [DirectoryGroupsAliasesList](#directorygroupsaliaseslist) - Lists all aliases for a group.
* [DirectoryGroupsDelete](#directorygroupsdelete) - Deletes a group.
* [DirectoryGroupsGet](#directorygroupsget) - Retrieves a group's properties.
* [DirectoryGroupsInsert](#directorygroupsinsert) - Creates a group.
* [DirectoryGroupsList](#directorygroupslist) - Retrieves all groups of a domain or of a user given a userKey (paginated).
* [DirectoryGroupsPatch](#directorygroupspatch) - Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryGroupsUpdate](#directorygroupsupdate) - Updates a group's properties.

## DirectoryGroupsAliasesDelete

Removes an alias.

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
    res, err := s.Groups.DirectoryGroupsAliasesDelete(ctx, operations.DirectoryGroupsAliasesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alias: "nesciunt",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("vel"),
        GroupKey: "voluptatum",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("autem"),
    }, operations.DirectoryGroupsAliasesDeleteSecurity{
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

## DirectoryGroupsAliasesInsert

Adds an alias for the group.

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
    res, err := s.Groups.DirectoryGroupsAliasesInsert(ctx, operations.DirectoryGroupsAliasesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Alias: &shared.Alias{
            Alias: sdk.String("laboriosam"),
            Etag: sdk.String("recusandae"),
            ID: sdk.String("205e16de-ab3f-4ec9-978a-64584273a841"),
            Kind: sdk.String("rem"),
            PrimaryEmail: sdk.String("fugiat"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("consectetur"),
        GroupKey: "aperiam",
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DirectoryGroupsAliasesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Alias != nil {
        // handle response
    }
}
```

## DirectoryGroupsAliasesList

Lists all aliases for a group.

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
    res, err := s.Groups.DirectoryGroupsAliasesList(ctx, operations.DirectoryGroupsAliasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("inventore"),
        GroupKey: "fuga",
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DirectoryGroupsAliasesListSecurity{
        Option1: &operations.DirectoryGroupsAliasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Aliases != nil {
        // handle response
    }
}
```

## DirectoryGroupsDelete

Deletes a group.

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
    res, err := s.Groups.DirectoryGroupsDelete(ctx, operations.DirectoryGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("temporibus"),
        GroupKey: "quos",
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("earum"),
    }, operations.DirectoryGroupsDeleteSecurity{
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

## DirectoryGroupsGet

Retrieves a group's properties.

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
    res, err := s.Groups.DirectoryGroupsGet(ctx, operations.DirectoryGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("ipsam"),
        GroupKey: "vel",
        Key: sdk.String("alias"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DirectoryGroupsGetSecurity{
        Option1: &operations.DirectoryGroupsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## DirectoryGroupsInsert

Creates a group.

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
    res, err := s.Groups.DirectoryGroupsInsert(ctx, operations.DirectoryGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Group: &shared.Group{
            AdminCreated: sdk.Bool(false),
            Aliases: []string{
                "deserunt",
                "esse",
                "nemo",
                "reprehenderit",
            },
            Description: sdk.String("est"),
            DirectMembersCount: sdk.String("quis"),
            Email: sdk.String("Shanie_Ryan99@yahoo.com"),
            Etag: sdk.String("ex"),
            ID: sdk.String("6ef1caa3-383c-42be-b477-373c8d72f64d"),
            Kind: sdk.String("inventore"),
            Name: sdk.String("Wm Brakus"),
            NonEditableAliases: []string{
                "aliquam",
                "velit",
                "illo",
                "accusantium",
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("vero"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DirectoryGroupsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## DirectoryGroupsList

Retrieves all groups of a domain or of a user given a userKey (paginated).

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
    res, err := s.Groups.DirectoryGroupsList(ctx, operations.DirectoryGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Customer: sdk.String("iste"),
        Domain: sdk.String("itaque"),
        Fields: sdk.String("alias"),
        Key: sdk.String("nisi"),
        MaxResults: sdk.Int64(931505),
        OauthToken: sdk.String("velit"),
        OrderBy: operations.DirectoryGroupsListOrderByEnumEmail.ToPointer(),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("non"),
        QuotaUser: sdk.String("dolor"),
        SortOrder: operations.DirectoryGroupsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("doloremque"),
        UserKey: sdk.String("consequatur"),
    }, operations.DirectoryGroupsListSecurity{
        Option1: &operations.DirectoryGroupsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groups != nil {
        // handle response
    }
}
```

## DirectoryGroupsPatch

Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

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
    res, err := s.Groups.DirectoryGroupsPatch(ctx, operations.DirectoryGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Group: &shared.Group{
            AdminCreated: sdk.Bool(false),
            Aliases: []string{
                "ea",
                "quidem",
                "voluptas",
                "facilis",
            },
            Description: sdk.String("placeat"),
            DirectMembersCount: sdk.String("perspiciatis"),
            Email: sdk.String("Kale.Wilkinson@hotmail.com"),
            Etag: sdk.String("unde"),
            ID: sdk.String("eac55a97-41d3-4113-9296-5bb8a7202611"),
            Kind: sdk.String("modi"),
            Name: sdk.String("Mrs. Annette Watsica"),
            NonEditableAliases: []string{
                "distinctio",
                "maxime",
                "quia",
                "quia",
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("dicta"),
        GroupKey: "id",
        Key: sdk.String("libero"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DirectoryGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```

## DirectoryGroupsUpdate

Updates a group's properties.

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
    res, err := s.Groups.DirectoryGroupsUpdate(ctx, operations.DirectoryGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Group: &shared.Group{
            AdminCreated: sdk.Bool(false),
            Aliases: []string{
                "ipsa",
                "voluptates",
            },
            Description: sdk.String("inventore"),
            DirectMembersCount: sdk.String("aperiam"),
            Email: sdk.String("Elda.Roob41@yahoo.com"),
            Etag: sdk.String("esse"),
            ID: sdk.String("2d1ad879-eeb9-4665-b85e-fbd02bae0be2"),
            Kind: sdk.String("quibusdam"),
            Name: sdk.String("Mrs. Mabel Connelly"),
            NonEditableAliases: []string{
                "adipisci",
                "recusandae",
                "similique",
                "ut",
            },
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("unde"),
        GroupKey: "molestiae",
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DirectoryGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
