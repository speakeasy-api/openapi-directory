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
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("quis"),
        ID: "88a188ae-63a0-456f-be47-eddb5eeed1f5",
        Key: sdk.String("rem"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "totam",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("praesentium"),
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
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("exercitationem"),
        ID: "778c2ac0-4eb8-416f-811f-779b44c4f9ac",
        Key: sdk.String("animi"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "recusandae",
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("blanditiis"),
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
            AccountID: sdk.String("quam"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("quibusdam"),
            Kind: sdk.String("nobis"),
            Name: sdk.String("Salvatore Feest"),
            ParentUserRoleID: sdk.String("nihil"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountAlways.ToPointer(),
                    ID: sdk.String("magnam"),
                    Kind: sdk.String("sint"),
                    Name: sdk.String("John Koch"),
                    PermissionGroupID: sdk.String("pariatur"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumNotAvailableByDefault.ToPointer(),
                    ID: sdk.String("exercitationem"),
                    Kind: sdk.String("architecto"),
                    Name: sdk.String("Dan Johnson"),
                    PermissionGroupID: sdk.String("ipsam"),
                },
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumAccountByDefault.ToPointer(),
                    ID: sdk.String("aspernatur"),
                    Kind: sdk.String("cum"),
                    Name: sdk.String("George Pfannerstill"),
                    PermissionGroupID: sdk.String("atque"),
                },
            },
            SubaccountID: sdk.String("facilis"),
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("eos"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "natus",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("maiores"),
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
        AccessToken: sdk.String("dolorem"),
        AccountUserRoleOnly: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("alias"),
        Ids: []string{
            "reiciendis",
        },
        Key: sdk.String("sint"),
        MaxResults: sdk.Int64(251944),
        OauthToken: sdk.String("laudantium"),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolorum",
        QuotaUser: sdk.String("ipsum"),
        SearchString: sdk.String("totam"),
        SortField: operations.DfareportingUserRolesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingUserRolesListSortOrderEnumAscending.ToPointer(),
        SubaccountID: sdk.String("mollitia"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("veritatis"),
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
            AccountID: sdk.String("accusamus"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("dolorem"),
            Kind: sdk.String("fuga"),
            Name: sdk.String("Eleanor Stark"),
            ParentUserRoleID: sdk.String("rerum"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountByDefault.ToPointer(),
                    ID: sdk.String("a"),
                    Kind: sdk.String("esse"),
                    Name: sdk.String("Kathryn Torp"),
                    PermissionGroupID: sdk.String("quo"),
                },
            },
            SubaccountID: sdk.String("error"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("ex"),
        ID: "a5608fbf-0758-445f-b112-f60289abe6bd",
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("id"),
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
            AccountID: sdk.String("cum"),
            DefaultUserRole: sdk.Bool(false),
            ID: sdk.String("hic"),
            Kind: sdk.String("similique"),
            Name: sdk.String("Wilbert Kirlin"),
            ParentUserRoleID: sdk.String("expedita"),
            Permissions: []shared.UserRolePermission{
                shared.UserRolePermission{
                    Availability: shared.UserRolePermissionAvailabilityEnumSubaccountAndAccountByDefault.ToPointer(),
                    ID: sdk.String("atque"),
                    Kind: sdk.String("hic"),
                    Name: sdk.String("Kim Paucek"),
                    PermissionGroupID: sdk.String("facilis"),
                },
            },
            SubaccountID: sdk.String("et"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptates",
        QuotaUser: sdk.String("nesciunt"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("ipsa"),
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
