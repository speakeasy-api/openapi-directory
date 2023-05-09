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
                    AdvertiserID: sdk.String("itaque"),
                    PartnerID: sdk.String("cupiditate"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumUserRoleUnspecified.ToPointer(),
                },
            },
            DeletedAssignedUserRoles: []string{
                "nobis",
                "numquam",
                "consequatur",
            },
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("ratione"),
        UserID: "dolore",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UserInput: &shared.UserInput{
            AssignedUserRoles: []shared.AssignedUserRoleInput{
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("impedit"),
                    PartnerID: sdk.String("libero"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumAdminPartnerClient.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("nesciunt"),
                    PartnerID: sdk.String("vitae"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumCreative.ToPointer(),
                },
            },
            DisplayName: sdk.String("numquam"),
            Email: sdk.String("Carlotta98@yahoo.com"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("a"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("voluptatem"),
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
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("voluptatum"),
        UserID: "nulla",
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
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("officia"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("tempore"),
        UserID: "voluptate",
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
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("est"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("magni"),
        OrderBy: sdk.String("quae"),
        PageSize: sdk.Int64(309637),
        PageToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("aliquam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UserInput: &shared.UserInput{
            AssignedUserRoles: []shared.AssignedUserRoleInput{
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("excepturi"),
                    PartnerID: sdk.String("voluptatibus"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumReportingOnly.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("doloremque"),
                    PartnerID: sdk.String("officiis"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumStandardPlanner.ToPointer(),
                },
                shared.AssignedUserRoleInput{
                    AdvertiserID: sdk.String("reprehenderit"),
                    PartnerID: sdk.String("necessitatibus"),
                    UserRole: shared.AssignedUserRoleUserRoleEnumUserRoleUnspecified.ToPointer(),
                },
            },
            DisplayName: sdk.String("provident"),
            Email: sdk.String("Trycia_Schultz82@gmail.com"),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("sit"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UpdateMask: sdk.String("neque"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("velit"),
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
