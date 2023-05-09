# Users

### Available Operations

* [DirectoryUsersAliasesDelete](#directoryusersaliasesdelete) - Removes an alias.
* [DirectoryUsersAliasesInsert](#directoryusersaliasesinsert) - Adds an alias.
* [DirectoryUsersAliasesList](#directoryusersaliaseslist) - Lists all aliases for a user.
* [DirectoryUsersAliasesWatch](#directoryusersaliaseswatch) - Watches for changes in users list.
* [DirectoryUsersDelete](#directoryusersdelete) - Deletes a user.
* [DirectoryUsersGet](#directoryusersget) - Retrieves a user.
* [DirectoryUsersInsert](#directoryusersinsert) - Creates a user.
* [DirectoryUsersList](#directoryuserslist) - Retrieves a paginated list of either deleted users or all users in a domain.
* [DirectoryUsersMakeAdmin](#directoryusersmakeadmin) - Makes a user a super administrator.
* [DirectoryUsersPatch](#directoryuserspatch) - Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.
* [DirectoryUsersPhotosDelete](#directoryusersphotosdelete) - Removes the user's photo.
* [DirectoryUsersPhotosGet](#directoryusersphotosget) - Retrieves the user's photo.
* [DirectoryUsersPhotosPatch](#directoryusersphotospatch) - Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryUsersPhotosUpdate](#directoryusersphotosupdate) - Adds a photo for the user.
* [DirectoryUsersSignOut](#directoryuserssignout) - Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.
* [DirectoryUsersUndelete](#directoryusersundelete) - Undeletes a deleted user.
* [DirectoryUsersUpdate](#directoryusersupdate) - Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.
* [DirectoryUsersWatch](#directoryuserswatch) - Watches for changes in users list.

## DirectoryUsersAliasesDelete

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
    res, err := s.Users.DirectoryUsersAliasesDelete(ctx, operations.DirectoryUsersAliasesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alias: "enim",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("repellat"),
        UserKey: "quae",
    }, operations.DirectoryUsersAliasesDeleteSecurity{
        Option1: &operations.DirectoryUsersAliasesDeleteSecurityOption1{
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

## DirectoryUsersAliasesInsert

Adds an alias.

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
    res, err := s.Users.DirectoryUsersAliasesInsert(ctx, operations.DirectoryUsersAliasesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Alias: &shared.Alias{
            Alias: sdk.String("expedita"),
            Etag: sdk.String("hic"),
            ID: sdk.String("9621a6a4-f77a-487e-a3e4-be752c65b344"),
            Kind: sdk.String("architecto"),
            PrimaryEmail: sdk.String("praesentium"),
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("libero"),
        Key: sdk.String("iste"),
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("temporibus"),
        UserKey: "sint",
    }, operations.DirectoryUsersAliasesInsertSecurity{
        Option1: &operations.DirectoryUsersAliasesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Alias != nil {
        // handle response
    }
}
```

## DirectoryUsersAliasesList

Lists all aliases for a user.

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
    res, err := s.Users.DirectoryUsersAliasesList(ctx, operations.DirectoryUsersAliasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Event: operations.DirectoryUsersAliasesListEventEnumDelete.ToPointer(),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("rem"),
        UserKey: "tenetur",
    }, operations.DirectoryUsersAliasesListSecurity{
        Option1: &operations.DirectoryUsersAliasesListSecurityOption1{
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

## DirectoryUsersAliasesWatch

Watches for changes in users list.

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
    res, err := s.Users.DirectoryUsersAliasesWatch(ctx, operations.DirectoryUsersAliasesWatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Channel: &shared.Channel{
            Address: sdk.String("91329 Stephon Avenue"),
            Expiration: sdk.String("esse"),
            ID: sdk.String("edcc4aa5-f3ca-4bd9-85a9-72e056728227"),
            Kind: sdk.String("expedita"),
            Params: map[string]string{
                "repellendus": "nesciunt",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("ipsa"),
            ResourceURI: sdk.String("sint"),
            Token: sdk.String("dolore"),
            Type: sdk.String("esse"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Event: operations.DirectoryUsersAliasesWatchEventEnumAdd.ToPointer(),
        Fields: sdk.String("est"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
        UserKey: "quod",
    }, operations.DirectoryUsersAliasesWatchSecurity{
        Option1: &operations.DirectoryUsersAliasesWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```

## DirectoryUsersDelete

Deletes a user.

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
    res, err := s.Users.DirectoryUsersDelete(ctx, operations.DirectoryUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("corporis"),
        UserKey: "non",
    }, operations.DirectoryUsersDeleteSecurity{
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

## DirectoryUsersGet

Retrieves a user.

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
    res, err := s.Users.DirectoryUsersGet(ctx, operations.DirectoryUsersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        CustomFieldMask: sdk.String("voluptatem"),
        Fields: sdk.String("optio"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryUsersGetProjectionEnumBasic.ToPointer(),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("sed"),
        UserKey: "amet",
        ViewType: operations.DirectoryUsersGetViewTypeEnumDomainPublic.ToPointer(),
    }, operations.DirectoryUsersGetSecurity{
        Option1: &operations.DirectoryUsersGetSecurityOption1{
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

## DirectoryUsersInsert

Creates a user.

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
    res, err := s.Users.DirectoryUsersInsert(ctx, operations.DirectoryUsersInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserInput: &shared.UserInput{
            Addresses: sdk.String("nostrum"),
            Archived: sdk.Bool(false),
            ChangePasswordAtNextLogin: sdk.Bool(false),
            CustomSchemas: map[string]map[string]interface{}{
                "ratione": map[string]interface{}{
                    "nisi": "dignissimos",
                },
                "reiciendis": map[string]interface{}{
                    "vitae": "est",
                    "accusantium": "quod",
                    "minus": "quos",
                    "possimus": "maiores",
                },
                "odio": map[string]interface{}{
                    "sapiente": "aperiam",
                    "similique": "nesciunt",
                    "provident": "ex",
                },
                "repellendus": map[string]interface{}{
                    "alias": "impedit",
                    "sequi": "commodi",
                    "labore": "expedita",
                },
            },
            Emails: sdk.String("in"),
            ExternalIds: sdk.String("quisquam"),
            Gender: sdk.String("sunt"),
            HashFunction: sdk.String("enim"),
            ID: sdk.String("dfbace18-8b1c-44ee-ac8c-6ce611feeb1c"),
            Ims: sdk.String("dignissimos"),
            IncludeInGlobalAddressList: sdk.Bool(false),
            IPWhitelisted: sdk.Bool(false),
            Keywords: sdk.String("minus"),
            Languages: sdk.String("distinctio"),
            Locations: sdk.String("possimus"),
            Name: &shared.UserName{
                DisplayName: sdk.String("cum"),
                FamilyName: sdk.String("suscipit"),
                FullName: sdk.String("saepe"),
                GivenName: sdk.String("earum"),
            },
            Notes: sdk.String("quod"),
            OrgUnitPath: sdk.String("nihil"),
            Organizations: sdk.String("quaerat"),
            Password: sdk.String("ipsum"),
            Phones: sdk.String("ducimus"),
            PosixAccounts: sdk.String("laudantium"),
            PrimaryEmail: sdk.String("rerum"),
            RecoveryEmail: sdk.String("deserunt"),
            RecoveryPhone: sdk.String("odit"),
            Relations: sdk.String("ad"),
            SSHPublicKeys: sdk.String("sequi"),
            Suspended: sdk.Bool(false),
            Websites: sdk.String("beatae"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("odio"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.DirectoryUsersInsertSecurity{
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

## DirectoryUsersList

Retrieves a paginated list of either deleted users or all users in a domain.

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
    res, err := s.Users.DirectoryUsersList(ctx, operations.DirectoryUsersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        CustomFieldMask: sdk.String("dolorum"),
        Customer: sdk.String("repellat"),
        Domain: sdk.String("nostrum"),
        Event: operations.DirectoryUsersListEventEnumUpdate.ToPointer(),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("commodi"),
        MaxResults: sdk.Int64(456371),
        OauthToken: sdk.String("explicabo"),
        OrderBy: operations.DirectoryUsersListOrderByEnumEmail.ToPointer(),
        PageToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryUsersListProjectionEnumFull.ToPointer(),
        Query: sdk.String("ipsa"),
        QuotaUser: sdk.String("maiores"),
        ShowDeleted: sdk.String("exercitationem"),
        SortOrder: operations.DirectoryUsersListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("aspernatur"),
        ViewType: operations.DirectoryUsersListViewTypeEnumDomainPublic.ToPointer(),
    }, operations.DirectoryUsersListSecurity{
        Option1: &operations.DirectoryUsersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Users != nil {
        // handle response
    }
}
```

## DirectoryUsersMakeAdmin

Makes a user a super administrator.

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
    res, err := s.Users.DirectoryUsersMakeAdmin(ctx, operations.DirectoryUsersMakeAdminRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserMakeAdmin: &shared.UserMakeAdmin{
            Status: sdk.Bool(false),
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("corrupti"),
        UserKey: "molestiae",
    }, operations.DirectoryUsersMakeAdminSecurity{
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

## DirectoryUsersPatch

Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.

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
    res, err := s.Users.DirectoryUsersPatch(ctx, operations.DirectoryUsersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserInput: &shared.UserInput{
            Addresses: sdk.String("iure"),
            Archived: sdk.Bool(false),
            ChangePasswordAtNextLogin: sdk.Bool(false),
            CustomSchemas: map[string]map[string]interface{}{
                "quaerat": map[string]interface{}{
                    "sapiente": "corporis",
                },
            },
            Emails: sdk.String("est"),
            ExternalIds: sdk.String("iure"),
            Gender: sdk.String("quisquam"),
            HashFunction: sdk.String("provident"),
            ID: sdk.String("8b555540-80d4-40bc-acc6-cbd6b5f3ec90"),
            Ims: sdk.String("provident"),
            IncludeInGlobalAddressList: sdk.Bool(false),
            IPWhitelisted: sdk.Bool(false),
            Keywords: sdk.String("adipisci"),
            Languages: sdk.String("accusantium"),
            Locations: sdk.String("magnam"),
            Name: &shared.UserName{
                DisplayName: sdk.String("repellat"),
                FamilyName: sdk.String("omnis"),
                FullName: sdk.String("explicabo"),
                GivenName: sdk.String("vel"),
            },
            Notes: sdk.String("cum"),
            OrgUnitPath: sdk.String("id"),
            Organizations: sdk.String("possimus"),
            Password: sdk.String("fugit"),
            Phones: sdk.String("ipsam"),
            PosixAccounts: sdk.String("nostrum"),
            PrimaryEmail: sdk.String("sequi"),
            RecoveryEmail: sdk.String("voluptatum"),
            RecoveryPhone: sdk.String("quasi"),
            Relations: sdk.String("error"),
            SSHPublicKeys: sdk.String("nobis"),
            Suspended: sdk.Bool(false),
            Websites: sdk.String("tempora"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("repudiandae"),
        UserKey: "corporis",
    }, operations.DirectoryUsersPatchSecurity{
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

## DirectoryUsersPhotosDelete

Removes the user's photo.

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
    res, err := s.Users.DirectoryUsersPhotosDelete(ctx, operations.DirectoryUsersPhotosDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("cupiditate"),
        UserKey: "animi",
    }, operations.DirectoryUsersPhotosDeleteSecurity{
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

## DirectoryUsersPhotosGet

Retrieves the user's photo.

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
    res, err := s.Users.DirectoryUsersPhotosGet(ctx, operations.DirectoryUsersPhotosGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("nam"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("commodi"),
        UserKey: "fugit",
    }, operations.DirectoryUsersPhotosGetSecurity{
        Option1: &operations.DirectoryUsersPhotosGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPhoto != nil {
        // handle response
    }
}
```

## DirectoryUsersPhotosPatch

Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

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
    res, err := s.Users.DirectoryUsersPhotosPatch(ctx, operations.DirectoryUsersPhotosPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserPhoto: &shared.UserPhoto{
            Etag: sdk.String("voluptate"),
            Height: sdk.Int(393122),
            ID: sdk.String("696e1ec0-0221-4b33-9d89-acb3ecfda8d0"),
            Kind: sdk.String("quo"),
            MimeType: sdk.String("veniam"),
            PhotoData: sdk.String("aliquam"),
            PrimaryEmail: sdk.String("provident"),
            Width: sdk.Int(875693),
        },
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("alias"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("atque"),
        UserKey: "officia",
    }, operations.DirectoryUsersPhotosPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPhoto != nil {
        // handle response
    }
}
```

## DirectoryUsersPhotosUpdate

Adds a photo for the user.

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
    res, err := s.Users.DirectoryUsersPhotosUpdate(ctx, operations.DirectoryUsersPhotosUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserPhoto: &shared.UserPhoto{
            Etag: sdk.String("architecto"),
            Height: sdk.Int(953564),
            ID: sdk.String("a1cf2068-8f77-4c1f-bc71-dca163f2a3c8"),
            Kind: sdk.String("perferendis"),
            MimeType: sdk.String("laborum"),
            PhotoData: sdk.String("omnis"),
            PrimaryEmail: sdk.String("nihil"),
            Width: sdk.Int(945190),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("non"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("molestias"),
        UserKey: "ipsam",
    }, operations.DirectoryUsersPhotosUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPhoto != nil {
        // handle response
    }
}
```

## DirectoryUsersSignOut

Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.

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
    res, err := s.Users.DirectoryUsersSignOut(ctx, operations.DirectoryUsersSignOutRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("eum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("porro"),
        UserKey: "aliquid",
    }, operations.DirectoryUsersSignOutSecurity{
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

## DirectoryUsersUndelete

Undeletes a deleted user.

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
    res, err := s.Users.DirectoryUsersUndelete(ctx, operations.DirectoryUsersUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserUndelete: &shared.UserUndelete{
            OrgUnitPath: sdk.String("quidem"),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("magni"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("unde"),
        UserKey: "ut",
    }, operations.DirectoryUsersUndeleteSecurity{
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

## DirectoryUsersUpdate

Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.

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
    res, err := s.Users.DirectoryUsersUpdate(ctx, operations.DirectoryUsersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserInput: &shared.UserInput{
            Addresses: sdk.String("voluptas"),
            Archived: sdk.Bool(false),
            ChangePasswordAtNextLogin: sdk.Bool(false),
            CustomSchemas: map[string]map[string]interface{}{
                "recusandae": map[string]interface{}{
                    "facere": "dignissimos",
                    "iste": "provident",
                    "dolor": "sint",
                    "aperiam": "eaque",
                },
                "eum": map[string]interface{}{
                    "laborum": "autem",
                    "assumenda": "explicabo",
                },
                "fugiat": map[string]interface{}{
                    "voluptatem": "alias",
                },
                "velit": map[string]interface{}{
                    "quis": "velit",
                    "ratione": "quas",
                },
            },
            Emails: sdk.String("maxime"),
            ExternalIds: sdk.String("recusandae"),
            Gender: sdk.String("cumque"),
            HashFunction: sdk.String("doloremque"),
            ID: sdk.String("86fa21e9-152c-4b31-9916-7b8e3c8db034"),
            Ims: sdk.String("consequatur"),
            IncludeInGlobalAddressList: sdk.Bool(false),
            IPWhitelisted: sdk.Bool(false),
            Keywords: sdk.String("laudantium"),
            Languages: sdk.String("repellendus"),
            Locations: sdk.String("commodi"),
            Name: &shared.UserName{
                DisplayName: sdk.String("quibusdam"),
                FamilyName: sdk.String("consectetur"),
                FullName: sdk.String("voluptas"),
                GivenName: sdk.String("quaerat"),
            },
            Notes: sdk.String("earum"),
            OrgUnitPath: sdk.String("tenetur"),
            Organizations: sdk.String("assumenda"),
            Password: sdk.String("dolore"),
            Phones: sdk.String("enim"),
            PosixAccounts: sdk.String("ullam"),
            PrimaryEmail: sdk.String("perspiciatis"),
            RecoveryEmail: sdk.String("alias"),
            RecoveryPhone: sdk.String("ex"),
            Relations: sdk.String("quibusdam"),
            SSHPublicKeys: sdk.String("dicta"),
            Suspended: sdk.Bool(false),
            Websites: sdk.String("quia"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("corporis"),
        UserKey: "quod",
    }, operations.DirectoryUsersUpdateSecurity{
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

## DirectoryUsersWatch

Watches for changes in users list.

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
    res, err := s.Users.DirectoryUsersWatch(ctx, operations.DirectoryUsersWatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Channel: &shared.Channel{
            Address: sdk.String("595 Verlie Extension"),
            Expiration: sdk.String("consequatur"),
            ID: sdk.String("be3e4320-2d72-4165-b650-6641870d9d21"),
            Kind: sdk.String("voluptatibus"),
            Params: map[string]string{
                "deserunt": "repellendus",
                "consequatur": "adipisci",
                "doloremque": "optio",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("tempora"),
            ResourceURI: sdk.String("debitis"),
            Token: sdk.String("cumque"),
            Type: sdk.String("maxime"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        CustomFieldMask: sdk.String("consequatur"),
        Customer: sdk.String("quos"),
        Domain: sdk.String("ratione"),
        Event: operations.DirectoryUsersWatchEventEnumMakeAdmin.ToPointer(),
        Fields: sdk.String("tempora"),
        Key: sdk.String("eos"),
        MaxResults: sdk.Int64(616183),
        OauthToken: sdk.String("voluptatem"),
        OrderBy: operations.DirectoryUsersWatchOrderByEnumFamilyName.ToPointer(),
        PageToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryUsersWatchProjectionEnumFull.ToPointer(),
        Query: sdk.String("laudantium"),
        QuotaUser: sdk.String("ullam"),
        ShowDeleted: sdk.String("aut"),
        SortOrder: operations.DirectoryUsersWatchSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("quaerat"),
        ViewType: operations.DirectoryUsersWatchViewTypeEnumAdminView.ToPointer(),
    }, operations.DirectoryUsersWatchSecurity{
        Option1: &operations.DirectoryUsersWatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
