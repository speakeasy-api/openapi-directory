# Users

### Available Operations

* [SQLUsersDelete](#sqlusersdelete) - Deletes a user from a Cloud SQL instance.
* [SQLUsersGet](#sqlusersget) - Retrieves a resource containing information about a user.
* [SQLUsersInsert](#sqlusersinsert) - Creates a new user in a Cloud SQL instance.
* [SQLUsersList](#sqluserslist) - Lists users in the specified Cloud SQL instance.
* [SQLUsersUpdate](#sqlusersupdate) - Updates an existing user in a Cloud SQL instance.

## SQLUsersDelete

Deletes a user from a Cloud SQL instance.

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
    res, err := s.Users.SQLUsersDelete(ctx, operations.SQLUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("deleniti"),
        Host: sdk.String("veritatis"),
        Instance: "tempora",
        Key: sdk.String("dolor"),
        Name: sdk.String("Alice Bailey"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        Project: "laudantium",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.SQLUsersDeleteSecurity{
        Option1: &operations.SQLUsersDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLUsersGet

Retrieves a resource containing information about a user.

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
    res, err := s.Users.SQLUsersGet(ctx, operations.SQLUsersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("eveniet"),
        Host: sdk.String("impedit"),
        Instance: "officiis",
        Key: sdk.String("esse"),
        Name: "Aaron Hartmann",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        Project: "vel",
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.SQLUsersGetSecurity{
        Option1: &operations.SQLUsersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## SQLUsersInsert

Creates a new user in a Cloud SQL instance.

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
    res, err := s.Users.SQLUsersInsert(ctx, operations.SQLUsersInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        User: &shared.User{
            DualPasswordType: shared.UserDualPasswordTypeEnumDualPassword.ToPointer(),
            Etag: sdk.String("autem"),
            Host: sdk.String("nobis"),
            Instance: sdk.String("laboriosam"),
            Kind: sdk.String("recusandae"),
            Name: sdk.String("Helen Heller III"),
            Password: sdk.String("at"),
            PasswordPolicy: &shared.UserPasswordValidationPolicy{
                AllowedFailedAttempts: sdk.Int(878373),
                EnableFailedAttemptsCheck: sdk.Bool(false),
                EnablePasswordVerification: sdk.Bool(false),
                PasswordExpirationDuration: sdk.String("est"),
                Status: &shared.PasswordStatus{
                    Locked: sdk.Bool(false),
                    PasswordExpirationTime: sdk.String("harum"),
                },
            },
            Project: sdk.String("sequi"),
            SqlserverUserDetails: &shared.SQLServerUserDetails{
                Disabled: sdk.Bool(false),
                ServerRoles: []string{
                    "repudiandae",
                    "optio",
                    "occaecati",
                    "nemo",
                },
            },
            Type: shared.UserTypeEnumCloudIamUser.ToPointer(),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("numquam"),
        Instance: "nemo",
        Key: sdk.String("quos"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        Project: "aspernatur",
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.SQLUsersInsertSecurity{
        Option1: &operations.SQLUsersInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## SQLUsersList

Lists users in the specified Cloud SQL instance.

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
    res, err := s.Users.SQLUsersList(ctx, operations.SQLUsersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("fugiat"),
        Instance: "dicta",
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        Project: "consectetur",
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.SQLUsersListSecurity{
        Option1: &operations.SQLUsersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersListResponse != nil {
        // handle response
    }
}
```

## SQLUsersUpdate

Updates an existing user in a Cloud SQL instance.

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
    res, err := s.Users.SQLUsersUpdate(ctx, operations.SQLUsersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        User: &shared.User{
            DualPasswordType: shared.UserDualPasswordTypeEnumDualPasswordTypeUnspecified.ToPointer(),
            Etag: sdk.String("omnis"),
            Host: sdk.String("eos"),
            Instance: sdk.String("occaecati"),
            Kind: sdk.String("iste"),
            Name: sdk.String("Stephanie Pfannerstill"),
            Password: sdk.String("distinctio"),
            PasswordPolicy: &shared.UserPasswordValidationPolicy{
                AllowedFailedAttempts: sdk.Int(608593),
                EnableFailedAttemptsCheck: sdk.Bool(false),
                EnablePasswordVerification: sdk.Bool(false),
                PasswordExpirationDuration: sdk.String("delectus"),
                Status: &shared.PasswordStatus{
                    Locked: sdk.Bool(false),
                    PasswordExpirationTime: sdk.String("minima"),
                },
            },
            Project: sdk.String("praesentium"),
            SqlserverUserDetails: &shared.SQLServerUserDetails{
                Disabled: sdk.Bool(false),
                ServerRoles: []string{
                    "magnam",
                    "temporibus",
                    "quos",
                    "commodi",
                },
            },
            Type: shared.UserTypeEnumCloudIamServiceAccount.ToPointer(),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("modi"),
        Host: sdk.String("nam"),
        Instance: "vero",
        Key: sdk.String("voluptatem"),
        Name: sdk.String("Mrs. Gina Abbott"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        Project: "sint",
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("esse"),
    }, operations.SQLUsersUpdateSecurity{
        Option1: &operations.SQLUsersUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
