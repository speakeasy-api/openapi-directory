# Members

### Available Operations

* [DirectoryMembersDelete](#directorymembersdelete) - Removes a member from a group.
* [DirectoryMembersGet](#directorymembersget) - Retrieves a group member's properties.
* [DirectoryMembersHasMember](#directorymembershasmember) - Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.
* [DirectoryMembersInsert](#directorymembersinsert) - Adds a user to the specified group.
* [DirectoryMembersList](#directorymemberslist) - Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).
* [DirectoryMembersPatch](#directorymemberspatch) - Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryMembersUpdate](#directorymembersupdate) - Updates the membership of a user in the specified group.

## DirectoryMembersDelete

Removes a member from a group.

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
    res, err := s.Members.DirectoryMembersDelete(ctx, operations.DirectoryMembersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("optio"),
        GroupKey: "necessitatibus",
        Key: sdk.String("corporis"),
        MemberKey: "qui",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("minima"),
    }, operations.DirectoryMembersDeleteSecurity{
        Option1: &operations.DirectoryMembersDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryMembersGet

Retrieves a group member's properties.

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
    res, err := s.Members.DirectoryMembersGet(ctx, operations.DirectoryMembersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("minus"),
        GroupKey: "eum",
        Key: sdk.String("modi"),
        MemberKey: "corporis",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DirectoryMembersGetSecurity{
        Option1: &operations.DirectoryMembersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Member != nil {
        // handle response
    }
}
```

## DirectoryMembersHasMember

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

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
    res, err := s.Members.DirectoryMembersHasMember(ctx, operations.DirectoryMembersHasMemberRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("totam"),
        GroupKey: "occaecati",
        Key: sdk.String("voluptas"),
        MemberKey: "quo",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.DirectoryMembersHasMemberSecurity{
        Option1: &operations.DirectoryMembersHasMemberSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MembersHasMember != nil {
        // handle response
    }
}
```

## DirectoryMembersInsert

Adds a user to the specified group.

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
    res, err := s.Members.DirectoryMembersInsert(ctx, operations.DirectoryMembersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Member: &shared.Member{
            DeliverySettings: sdk.String("impedit"),
            Email: sdk.String("Myah99@hotmail.com"),
            Etag: sdk.String("pariatur"),
            ID: sdk.String("57075779-2917-47de-ac64-6ecb573409e3"),
            Kind: sdk.String("repudiandae"),
            Role: sdk.String("cum"),
            Status: sdk.String("dicta"),
            Type: sdk.String("earum"),
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("nam"),
        GroupKey: "dicta",
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.DirectoryMembersInsertSecurity{
        Option1: &operations.DirectoryMembersInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Member != nil {
        // handle response
    }
}
```

## DirectoryMembersList

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).

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
    res, err := s.Members.DirectoryMembersList(ctx, operations.DirectoryMembersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("pariatur"),
        GroupKey: "libero",
        IncludeDerivedMembership: sdk.Bool(false),
        Key: sdk.String("excepturi"),
        MaxResults: sdk.Int64(578210),
        OauthToken: sdk.String("nemo"),
        PageToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        Roles: sdk.String("doloribus"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sint"),
    }, operations.DirectoryMembersListSecurity{
        Option1: &operations.DirectoryMembersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Members != nil {
        // handle response
    }
}
```

## DirectoryMembersPatch

Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

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
    res, err := s.Members.DirectoryMembersPatch(ctx, operations.DirectoryMembersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Member: &shared.Member{
            DeliverySettings: sdk.String("hic"),
            Email: sdk.String("Keira.Larson@yahoo.com"),
            Etag: sdk.String("eaque"),
            ID: sdk.String("e189dbb3-0fcb-433e-a055-b197cd44e2f5"),
            Kind: sdk.String("consequuntur"),
            Role: sdk.String("facere"),
            Status: sdk.String("laudantium"),
            Type: sdk.String("odit"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("ab"),
        GroupKey: "velit",
        Key: sdk.String("facilis"),
        MemberKey: "tempore",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DirectoryMembersPatchSecurity{
        Option1: &operations.DirectoryMembersPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Member != nil {
        // handle response
    }
}
```

## DirectoryMembersUpdate

Updates the membership of a user in the specified group.

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
    res, err := s.Members.DirectoryMembersUpdate(ctx, operations.DirectoryMembersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Member: &shared.Member{
            DeliverySettings: sdk.String("nisi"),
            Email: sdk.String("Giuseppe_Rempel70@yahoo.com"),
            Etag: sdk.String("ipsum"),
            ID: sdk.String("5ff2e4b2-7537-4a8c-99e7-319c177d525f"),
            Kind: sdk.String("iusto"),
            Role: sdk.String("dignissimos"),
            Status: sdk.String("libero"),
            Type: sdk.String("illo"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("saepe"),
        GroupKey: "tempore",
        Key: sdk.String("veniam"),
        MemberKey: "eos",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DirectoryMembersUpdateSecurity{
        Option1: &operations.DirectoryMembersUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Member != nil {
        // handle response
    }
}
```
