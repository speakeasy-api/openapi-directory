# Users

### Available Operations

* [DisplayvideoUsersBulkEditAssignedUserRoles](#displayvideousersbulkeditassigneduserroles) - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [DisplayvideoUsersCreate](#displayvideouserscreate) - Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [DisplayvideoUsersDelete](#displayvideousersdelete) - Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [DisplayvideoUsersGet](#displayvideousersget) - Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [DisplayvideoUsersList](#displayvideouserslist) - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [DisplayvideoUsersPatch](#displayvideouserspatch) - Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

## DisplayvideoUsersBulkEditAssignedUserRoles

Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

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
    res, err := s.Users.DisplayvideoUsersBulkEditAssignedUserRoles(ctx, operations.DisplayvideoUsersBulkEditAssignedUserRolesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditAssignedUserRolesRequestInput: &shared.BulkEditAssignedUserRolesRequestInput{
            CreatedAssignedUserRoles: []shared.AssignedUserRoleInput{
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("doloribus"),
                    PartnerID: sdk.String("facilis"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumStandard.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("impedit"),
                    PartnerID: sdk.String("facilis"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumAdminPartnerClient.ToPointer(),
                },
            },
            DeletedAssignedUserRoles: []string{
                "fugiat",
                "beatae",
            },
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("quos"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("distinctio"),
        UserID: "ducimus",
    }, operations.DisplayvideoUsersBulkEditAssignedUserRolesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditAssignedUserRolesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoUsersCreate

Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

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
    res, err := s.Users.DisplayvideoUsersCreate(ctx, operations.DisplayvideoUsersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserInput: &shared.UserInput{
            AssignedUserRoles: []shared.AssignedUserRoleInput{
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("nemo"),
                    PartnerID: sdk.String("provident"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumCreative.ToPointer(),
                },
            },
            DisplayName: sdk.String("minus"),
            Email: sdk.String("Erika_Runolfsson42@hotmail.com"),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.DisplayvideoUsersCreateSecurity{
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

## DisplayvideoUsersDelete

Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

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
    res, err := s.Users.DisplayvideoUsersDelete(ctx, operations.DisplayvideoUsersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("necessitatibus"),
        UserID: "tempora",
    }, operations.DisplayvideoUsersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoUsersGet

Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

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
    res, err := s.Users.DisplayvideoUsersGet(ctx, operations.DisplayvideoUsersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("rerum"),
        UserID: "illo",
    }, operations.DisplayvideoUsersGetSecurity{
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

## DisplayvideoUsersList

Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

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
    res, err := s.Users.DisplayvideoUsersList(ctx, operations.DisplayvideoUsersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("libero"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("dolores"),
        OrderBy: sdk.String("ut"),
        PageSize: sdk.Int64(472444),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DisplayvideoUsersListSecurity{
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

## DisplayvideoUsersPatch

Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

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
    res, err := s.Users.DisplayvideoUsersPatch(ctx, operations.DisplayvideoUsersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserInput: &shared.UserInput{
            AssignedUserRoles: []shared.AssignedUserRoleInput{
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("reiciendis"),
                    PartnerID: sdk.String("asperiores"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumStandardPlanner.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("voluptatem"),
                    PartnerID: sdk.String("beatae"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumAdminPartnerClient.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("laboriosam"),
                    PartnerID: sdk.String("temporibus"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumStandardPlannerLimited.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("veritatis"),
                    PartnerID: sdk.String("nobis"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumCreativeAdmin.ToPointer(),
                },
            },
            DisplayName: sdk.String("tenetur"),
            Email: sdk.String("Reanna_Anderson47@hotmail.com"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UpdateMask: sdk.String("nemo"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("rerum"),
        UserID: "ut",
    }, operations.DisplayvideoUsersPatchSecurity{
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
