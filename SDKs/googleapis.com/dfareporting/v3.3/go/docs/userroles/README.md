# UserRoles

### Available Operations

* [DfareportingUserRolesDelete](#dfareportinguserrolesdelete) - Deletes an existing user role.
* [DfareportingUserRolesGet](#dfareportinguserrolesget) - Gets one user role by ID.
* [DfareportingUserRolesInsert](#dfareportinguserrolesinsert) - Inserts a new user role.
* [DfareportingUserRolesList](#dfareportinguserroleslist) - Retrieves a list of user roles, possibly filtered. This method supports paging.
* [DfareportingUserRolesPatch](#dfareportinguserrolespatch) - Updates an existing user role. This method supports patch semantics.
* [DfareportingUserRolesUpdate](#dfareportinguserrolesupdate) - Updates an existing user role.

## DfareportingUserRolesDelete

Deletes an existing user role.

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
    res, err := s.UserRoles.DfareportingUserRolesDelete(ctx, operations.DfareportingUserRolesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("dolor"),
        ID: "1c8d6222-a86e-4a96-8df9-ccaa75766c20",
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestiae",
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.DfareportingUserRolesDeleteSecurity{
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

## DfareportingUserRolesGet

Gets one user role by ID.

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
    res, err := s.UserRoles.DfareportingUserRolesGet(ctx, operations.DfareportingUserRolesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("tempore"),
        ID: "feed63c6-43e7-4ffb-b5ff-10262868b3d6",
        Key: sdk.String("totam"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugiat",
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.DfareportingUserRolesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRole != nil {
        // handle response
    }
}
```

## DfareportingUserRolesInsert

Inserts a new user role.

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
    res, err := s.UserRoles.DfareportingUserRolesInsert(ctx, operations.DfareportingUserRolesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserRole: &shared.UserRole{
            AccountID: sdk.String("perferendis"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("magni"),
            Kind: sdk.String("laborum"),
            Name: sdk.String("Josephine Zboncak"),
            ParentUserRoleID: sdk.String("suscipit"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountAlways.ToPointer(),
                    ID: sdk.String("asperiores"),
                    Kind: sdk.String("dolor"),
                    Name: sdk.String("Sonya Hane"),
                    PermissionGroupID: sdk.String("veniam"),
                },
            },
            SubaccountID: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repellendus",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DfareportingUserRolesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRole != nil {
        // handle response
    }
}
```

## DfareportingUserRolesList

Retrieves a list of user roles, possibly filtered. This method supports paging.

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
    res, err := s.UserRoles.DfareportingUserRolesList(ctx, operations.DfareportingUserRolesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        AccountUserRoleOnly: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("voluptatibus"),
        Ids: []string{
            "iure",
        },
        Key: sdk.String("doloremque"),
        MaxResults: sdk.Int64(249728),
        OauthToken: sdk.String("vero"),
        PageToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "veritatis",
        QuotaUser: sdk.String("accusamus"),
        SearchString: sdk.String("consequuntur"),
        SortField: operations.DfareportingUserRolesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingUserRolesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("cum"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("veniam"),
    }, operations.DfareportingUserRolesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRolesListResponse != nil {
        // handle response
    }
}
```

## DfareportingUserRolesPatch

Updates an existing user role. This method supports patch semantics.

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
    res, err := s.UserRoles.DfareportingUserRolesPatch(ctx, operations.DfareportingUserRolesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserRole: &shared.UserRole{
            AccountID: sdk.String("nulla"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("cum"),
            Kind: sdk.String("velit"),
            Name: sdk.String("Toni Carroll"),
            ParentUserRoleID: sdk.String("accusamus"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumNotAvailableByDefault.ToPointer(),
                    ID: sdk.String("tempora"),
                    Kind: sdk.String("deserunt"),
                    Name: sdk.String("Cindy Gottlieb"),
                    PermissionGroupID: sdk.String("qui"),
                },
            },
            SubaccountID: sdk.String("dicta"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("dicta"),
        ID: "b180849c-309d-4474-a773-99e412ee767f",
        Key: sdk.String("natus"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vero",
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DfareportingUserRolesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRole != nil {
        // handle response
    }
}
```

## DfareportingUserRolesUpdate

Updates an existing user role.

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
    res, err := s.UserRoles.DfareportingUserRolesUpdate(ctx, operations.DfareportingUserRolesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserRole: &shared.UserRole{
            AccountID: sdk.String("temporibus"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("dicta"),
            Kind: sdk.String("corporis"),
            Name: sdk.String("Dallas Luettgen"),
            ParentUserRoleID: sdk.String("magnam"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountAlways.ToPointer(),
                    ID: sdk.String("cumque"),
                    Kind: sdk.String("illo"),
                    Name: sdk.String("Eula Kertzmann"),
                    PermissionGroupID: sdk.String("minima"),
                },
            },
            SubaccountID: sdk.String("itaque"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DfareportingUserRolesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRole != nil {
        // handle response
    }
}
```
