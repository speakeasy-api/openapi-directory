# Users

### Available Operations

* [AndroidpublisherUsersCreate](#androidpublisheruserscreate) - Grant access for a user to the given developer account.
* [AndroidpublisherUsersDelete](#androidpublisherusersdelete) - Removes all access for the user to the given developer account.
* [AndroidpublisherUsersList](#androidpublisheruserslist) - Lists all users with access to a developer account.
* [AndroidpublisherUsersPatch](#androidpublisheruserspatch) - Updates access for the user to the developer account.

## AndroidpublisherUsersCreate

Grant access for a user to the given developer account.

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
    res, err := s.Users.AndroidpublisherUsersCreate(ctx, operations.AndroidpublisherUsersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserInput: &shared.UserInput{
            DeveloperAccountPermissions: []shared.UserDeveloperAccountPermissionsEnum{
                shared.UserDeveloperAccountPermissionsEnumCanViewFinancialDataGlobal,
                shared.UserDeveloperAccountPermissionsEnumCanSeeAllApps,
                shared.UserDeveloperAccountPermissionsEnumCanManagePermissionsGlobal,
                shared.UserDeveloperAccountPermissionsEnumCanViewFinancialDataGlobal,
            },
            Email: sdk.String("Tyler10@hotmail.com"),
            ExpirationTime: sdk.String("aperiam"),
            Name: sdk.String("Mrs. Christie Halvorson"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("ex"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("quae"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.AndroidpublisherUsersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AndroidpublisherUsersDelete

Removes all access for the user to the given developer account.

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
    res, err := s.Users.AndroidpublisherUsersDelete(ctx, operations.AndroidpublisherUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("ea"),
        Key: sdk.String("animi"),
        Name: "Mindy Kunde",
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("earum"),
    }, operations.AndroidpublisherUsersDeleteSecurity{
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

## AndroidpublisherUsersList

Lists all users with access to a developer account.

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
    res, err := s.Users.AndroidpublisherUsersList(ctx, operations.AndroidpublisherUsersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(131687),
        PageToken: sdk.String("impedit"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("ipsum"),
    }, operations.AndroidpublisherUsersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersResponse != nil {
        // handle response
    }
}
```

## AndroidpublisherUsersPatch

Updates access for the user to the developer account.

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
    res, err := s.Users.AndroidpublisherUsersPatch(ctx, operations.AndroidpublisherUsersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserInput: &shared.UserInput{
            DeveloperAccountPermissions: []shared.UserDeveloperAccountPermissionsEnum{
                shared.UserDeveloperAccountPermissionsEnumCanSeeAllApps,
                shared.UserDeveloperAccountPermissionsEnumCanManageTrackApksGlobal,
            },
            Email: sdk.String("Dalton_Quitzon7@hotmail.com"),
            ExpirationTime: sdk.String("minus"),
            Name: sdk.String("Gustavo Mayer"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("tempora"),
        Name: "Guadalupe Stanton",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UpdateMask: sdk.String("earum"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.AndroidpublisherUsersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
