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
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("facere"),
        ID: "4c4a72ea-1668-4068-b90b-2f689d09cd3e",
        Key: sdk.String("illo"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quidem",
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("illum"),
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
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("quas"),
        ID: "28d8299b-c676-4378-adc4-c347040cadf0",
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "exercitationem",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("alias"),
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
            AccountID: sdk.String("corporis"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("officia"),
            Kind: sdk.String("accusantium"),
            Name: sdk.String("Louise Schroeder"),
            ParentUserRoleID: sdk.String("quibusdam"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumUserProfileOnly.ToPointer(),
                    ID: sdk.String("fuga"),
                    Kind: sdk.String("corrupti"),
                    Name: sdk.String("Merle Haag"),
                    PermissionGroupID: sdk.String("quaerat"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountByDefault.ToPointer(),
                    ID: sdk.String("quod"),
                    Kind: sdk.String("rem"),
                    Name: sdk.String("Mr. Leroy Langworth Jr."),
                    PermissionGroupID: sdk.String("nemo"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountAlways.ToPointer(),
                    ID: sdk.String("aut"),
                    Kind: sdk.String("qui"),
                    Name: sdk.String("Santiago Leffler"),
                    PermissionGroupID: sdk.String("velit"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumUserProfileOnly.ToPointer(),
                    ID: sdk.String("quae"),
                    Kind: sdk.String("tempore"),
                    Name: sdk.String("Alex Jakubowski"),
                    PermissionGroupID: sdk.String("quas"),
                },
            },
            SubaccountID: sdk.String("vel"),
        },
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("est"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quas",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("hic"),
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
        AccessToken: sdk.String("sapiente"),
        AccountUserRoleOnly: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("ad"),
        Ids: []string{
            "non",
            "molestias",
            "alias",
        },
        Key: sdk.String("maxime"),
        MaxResults: sdk.Int64(58999),
        OauthToken: sdk.String("culpa"),
        PageToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("corrupti"),
        SearchString: sdk.String("facilis"),
        SortField: operations.DfareportingUserRolesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingUserRolesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("unde"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserRole: &shared.UserRole{
            AccountID: sdk.String("atque"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("doloremque"),
            Kind: sdk.String("optio"),
            Name: sdk.String("Joseph Harber"),
            ParentUserRoleID: sdk.String("fuga"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumNotAvailableByDefault.ToPointer(),
                    ID: sdk.String("debitis"),
                    Kind: sdk.String("enim"),
                    Name: sdk.String("Craig Hauck"),
                    PermissionGroupID: sdk.String("assumenda"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountAlways.ToPointer(),
                    ID: sdk.String("temporibus"),
                    Kind: sdk.String("tempore"),
                    Name: sdk.String("Irene Pfeffer"),
                    PermissionGroupID: sdk.String("eum"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountByDefault.ToPointer(),
                    ID: sdk.String("est"),
                    Kind: sdk.String("adipisci"),
                    Name: sdk.String("Miss Erika Grimes"),
                    PermissionGroupID: sdk.String("qui"),
                },
            },
            SubaccountID: sdk.String("est"),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("voluptatibus"),
        ID: "db59d8ca-fcb2-4783-9bbd-9da7f37a5a62",
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sint",
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("repudiandae"),
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
            AccountID: sdk.String("consequuntur"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("perspiciatis"),
            Kind: sdk.String("quam"),
            Name: sdk.String("Ms. Paulette Turcotte"),
            ParentUserRoleID: sdk.String("distinctio"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountByDefault.ToPointer(),
                    ID: sdk.String("facere"),
                    Kind: sdk.String("et"),
                    Name: sdk.String("Mrs. Elbert Kemmer"),
                    PermissionGroupID: sdk.String("facilis"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountAlways.ToPointer(),
                    ID: sdk.String("illo"),
                    Kind: sdk.String("sapiente"),
                    Name: sdk.String("Martin Rutherford"),
                    PermissionGroupID: sdk.String("quam"),
                },
            },
            SubaccountID: sdk.String("laudantium"),
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("eos"),
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
