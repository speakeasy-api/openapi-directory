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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("optio"),
        ID: "53bc11ca-03db-48be-98a3-b3171fc54c99",
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quaerat",
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("perferendis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("nam"),
        ID: "75d5da8b-9d36-41c1-a164-356d6e325bf9",
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("et"),
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
            AccountID: sdk.String("consequuntur"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("pariatur"),
            Kind: sdk.String("nostrum"),
            Name: sdk.String("Mr. Nathaniel Lockman MD"),
            ParentUserRoleID: sdk.String("quasi"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumNotAvailableByDefault.ToPointer(),
                    ID: sdk.String("velit"),
                    Kind: sdk.String("itaque"),
                    Name: sdk.String("Manuel Kerluke"),
                    PermissionGroupID: sdk.String("illo"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountByDefault.ToPointer(),
                    ID: sdk.String("repellendus"),
                    Kind: sdk.String("eveniet"),
                    Name: sdk.String("Lester Jacobs"),
                    PermissionGroupID: sdk.String("aliquam"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumUserProfileOnly.ToPointer(),
                    ID: sdk.String("nemo"),
                    Kind: sdk.String("fugit"),
                    Name: sdk.String("Maureen Harvey"),
                    PermissionGroupID: sdk.String("deserunt"),
                },
            },
            SubaccountID: sdk.String("assumenda"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ut",
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("sequi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        AccountUserRoleOnly: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("eaque"),
        Ids: []string{
            "dolor",
            "optio",
            "reprehenderit",
            "reprehenderit",
        },
        Key: sdk.String("molestiae"),
        MaxResults: sdk.Int64(331896),
        OauthToken: sdk.String("voluptate"),
        PageToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatum",
        QuotaUser: sdk.String("alias"),
        SearchString: sdk.String("autem"),
        SortField: operations.DfareportingUserRolesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingUserRolesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("sapiente"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("a"),
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
            AccountID: sdk.String("quidem"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("possimus"),
            Kind: sdk.String("maxime"),
            Name: sdk.String("Ms. Randal Lind"),
            ParentUserRoleID: sdk.String("iusto"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountAlways.ToPointer(),
                    ID: sdk.String("optio"),
                    Kind: sdk.String("praesentium"),
                    Name: sdk.String("Randall Rowe"),
                    PermissionGroupID: sdk.String("voluptatibus"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountAlways.ToPointer(),
                    ID: sdk.String("voluptatibus"),
                    Kind: sdk.String("consequuntur"),
                    Name: sdk.String("Paulette Spencer"),
                    PermissionGroupID: sdk.String("minus"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountAlways.ToPointer(),
                    ID: sdk.String("neque"),
                    Kind: sdk.String("eveniet"),
                    Name: sdk.String("Lana Littel"),
                    PermissionGroupID: sdk.String("itaque"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumUserProfileOnly.ToPointer(),
                    ID: sdk.String("laboriosam"),
                    Kind: sdk.String("aspernatur"),
                    Name: sdk.String("Marion Littel"),
                    PermissionGroupID: sdk.String("beatae"),
                },
            },
            SubaccountID: sdk.String("enim"),
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("ex"),
        ID: "0a1de583-fed6-4dbf-90cf-0c107f2d8659",
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quisquam",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("similique"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserRole: &shared.UserRole{
            AccountID: sdk.String("ipsa"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("magnam"),
            Kind: sdk.String("aliquid"),
            Name: sdk.String("Melody Schultz"),
            ParentUserRoleID: sdk.String("vitae"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumNotAvailableByDefault.ToPointer(),
                    ID: sdk.String("laborum"),
                    Kind: sdk.String("ab"),
                    Name: sdk.String("Erick Boehm"),
                    PermissionGroupID: sdk.String("possimus"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountByDefault.ToPointer(),
                    ID: sdk.String("vero"),
                    Kind: sdk.String("ad"),
                    Name: sdk.String("Vera Towne"),
                    PermissionGroupID: sdk.String("sequi"),
                },
            },
            SubaccountID: sdk.String("at"),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magnam",
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("dicta"),
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
