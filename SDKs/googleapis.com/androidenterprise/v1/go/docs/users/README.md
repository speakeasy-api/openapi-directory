# Users

### Available Operations

* [AndroidenterpriseUsersDelete](#androidenterpriseusersdelete) - Deleted an EMM-managed user.
* [AndroidenterpriseUsersGenerateAuthenticationToken](#androidenterpriseusersgenerateauthenticationtoken) - Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
* [AndroidenterpriseUsersGet](#androidenterpriseusersget) - Retrieves a user's details.
* [AndroidenterpriseUsersGetAvailableProductSet](#androidenterpriseusersgetavailableproductset) - Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [AndroidenterpriseUsersInsert](#androidenterpriseusersinsert) - Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
* [AndroidenterpriseUsersList](#androidenterpriseuserslist) - Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
* [AndroidenterpriseUsersRevokeDeviceAccess](#androidenterpriseusersrevokedeviceaccess) - Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
* [AndroidenterpriseUsersSetAvailableProductSet](#androidenterpriseuserssetavailableproductset) - Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
* [AndroidenterpriseUsersUpdate](#androidenterpriseusersupdate) - Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

## AndroidenterpriseUsersDelete

Deleted an EMM-managed user.

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
    res, err := s.Users.AndroidenterpriseUsersDelete(ctx, operations.AndroidenterpriseUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        EnterpriseID: "architecto",
        Fields: sdk.String("fuga"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("deleniti"),
        UserID: "earum",
    }, operations.AndroidenterpriseUsersDeleteSecurity{
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

## AndroidenterpriseUsersGenerateAuthenticationToken

Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.

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
    res, err := s.Users.AndroidenterpriseUsersGenerateAuthenticationToken(ctx, operations.AndroidenterpriseUsersGenerateAuthenticationTokenRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        EnterpriseID: "nemo",
        Fields: sdk.String("asperiores"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("totam"),
        UserID: "impedit",
    }, operations.AndroidenterpriseUsersGenerateAuthenticationTokenSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthenticationToken != nil {
        // handle response
    }
}
```

## AndroidenterpriseUsersGet

Retrieves a user's details.

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
    res, err := s.Users.AndroidenterpriseUsersGet(ctx, operations.AndroidenterpriseUsersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        EnterpriseID: "dolor",
        Fields: sdk.String("aliquam"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("dolor"),
        UserID: "consequatur",
    }, operations.AndroidenterpriseUsersGetSecurity{
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

## AndroidenterpriseUsersGetAvailableProductSet

Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Users.AndroidenterpriseUsersGetAvailableProductSet(ctx, operations.AndroidenterpriseUsersGetAvailableProductSetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        EnterpriseID: "ab",
        Fields: sdk.String("laudantium"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("consequuntur"),
        UserID: "ipsa",
    }, operations.AndroidenterpriseUsersGetAvailableProductSetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSet != nil {
        // handle response
    }
}
```

## AndroidenterpriseUsersInsert

Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.

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
    res, err := s.Users.AndroidenterpriseUsersInsert(ctx, operations.AndroidenterpriseUsersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        User: &shared.User{
            AccountIdentifier: sdk.String("eveniet"),
            AccountType: shared.UserAccountTypeEnumUserAccount.ToPointer(),
            DisplayName: sdk.String("officiis"),
            ID: sdk.String("7e253b66-8451-4c6c-ae20-5e16deab3fec"),
            ManagementType: shared.UserManagementTypeEnumEmmManaged.ToPointer(),
            PrimaryEmail: sdk.String("nemo"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officia"),
        EnterpriseID: "voluptas",
        Fields: sdk.String("numquam"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.AndroidenterpriseUsersInsertSecurity{
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

## AndroidenterpriseUsersList

Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.

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
    res, err := s.Users.AndroidenterpriseUsersList(ctx, operations.AndroidenterpriseUsersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("incidunt"),
        Email: "Judge39@gmail.com",
        EnterpriseID: "consequuntur",
        Fields: sdk.String("consectetur"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("alias"),
    }, operations.AndroidenterpriseUsersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersListResponse != nil {
        // handle response
    }
}
```

## AndroidenterpriseUsersRevokeDeviceAccess

Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.

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
    res, err := s.Users.AndroidenterpriseUsersRevokeDeviceAccess(ctx, operations.AndroidenterpriseUsersRevokeDeviceAccessRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        EnterpriseID: "magni",
        Fields: sdk.String("inventore"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("omnis"),
        UserID: "delectus",
    }, operations.AndroidenterpriseUsersRevokeDeviceAccessSecurity{
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

## AndroidenterpriseUsersSetAvailableProductSet

Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

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
    res, err := s.Users.AndroidenterpriseUsersSetAvailableProductSet(ctx, operations.AndroidenterpriseUsersSetAvailableProductSetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProductSet: &shared.ProductSet{
            ProductID: []string{
                "maxime",
                "magnam",
                "temporibus",
            },
            ProductSetBehavior: shared.ProductSetProductSetBehaviorEnumIncludeAll.ToPointer(),
            ProductVisibility: []shared.ProductVisibility{
                shared.ProductVisibility{
                    ProductID: sdk.String("itaque"),
                    TrackIds: []string{
                        "totam",
                        "earum",
                    },
                    Tracks: []shared.ProductVisibilityTracksEnum{
                        shared.ProductVisibilityTracksEnumBeta,
                        shared.ProductVisibilityTracksEnumAlpha,
                    },
                },
                shared.ProductVisibility{
                    ProductID: sdk.String("voluptatem"),
                    TrackIds: []string{
                        "vel",
                        "alias",
                    },
                    Tracks: []shared.ProductVisibilityTracksEnum{
                        shared.ProductVisibilityTracksEnumAppTrackUnspecified,
                    },
                },
            },
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        EnterpriseID: "nulla",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("quis"),
        UserID: "sint",
    }, operations.AndroidenterpriseUsersSetAvailableProductSetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSet != nil {
        // handle response
    }
}
```

## AndroidenterpriseUsersUpdate

Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

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
    res, err := s.Users.AndroidenterpriseUsersUpdate(ctx, operations.AndroidenterpriseUsersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        User: &shared.User{
            AccountIdentifier: sdk.String("impedit"),
            AccountType: shared.UserAccountTypeEnumUserAccount.ToPointer(),
            DisplayName: sdk.String("necessitatibus"),
            ID: sdk.String("f66ef1ca-a338-43c2-beb4-77373c8d72f6"),
            ManagementType: shared.UserManagementTypeEnumGoogleManaged.ToPointer(),
            PrimaryEmail: sdk.String("quibusdam"),
        },
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        EnterpriseID: "architecto",
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("quia"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("illo"),
        UserID: "accusantium",
    }, operations.AndroidenterpriseUsersUpdateSecurity{
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
