# Roles

### Available Operations

* [DirectoryRolesDelete](#directoryrolesdelete) - Deletes a role.
* [DirectoryRolesGet](#directoryrolesget) - Retrieves a role.
* [DirectoryRolesInsert](#directoryrolesinsert) - Creates a role.
* [DirectoryRolesList](#directoryroleslist) - Retrieves a paginated list of all the roles in a domain.
* [DirectoryRolesPatch](#directoryrolespatch) - Patches a role.
* [DirectoryRolesUpdate](#directoryrolesupdate) - Updates a role.

## DirectoryRolesDelete

Deletes a role.

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
    res, err := s.Roles.DirectoryRolesDelete(ctx, operations.DirectoryRolesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Customer: "corrupti",
        Fields: sdk.String("amet"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        RoleID: "modi",
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DirectoryRolesDeleteSecurity{
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

## DirectoryRolesGet

Retrieves a role.

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
    res, err := s.Roles.DirectoryRolesGet(ctx, operations.DirectoryRolesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Customer: "maiores",
        Fields: sdk.String("neque"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        RoleID: "ipsam",
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.DirectoryRolesGetSecurity{
        Option1: &operations.DirectoryRolesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Role != nil {
        // handle response
    }
}
```

## DirectoryRolesInsert

Creates a role.

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
    res, err := s.Roles.DirectoryRolesInsert(ctx, operations.DirectoryRolesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Role: &shared.Role{
            Etag: sdk.String("nihil"),
            IsSuperAdminRole: sdk.Bool(false),
            IsSystemRole: sdk.Bool(false),
            Kind: sdk.String("ad"),
            RoleDescription: sdk.String("nisi"),
            RoleID: sdk.String("tenetur"),
            RoleName: sdk.String("quis"),
            RolePrivileges: []shared.RoleRolePrivileges{
                shared.RoleRolePrivileges{
                    PrivilegeName: sdk.String("nemo"),
                    ServiceID: sdk.String("suscipit"),
                },
                shared.RoleRolePrivileges{
                    PrivilegeName: sdk.String("pariatur"),
                    ServiceID: sdk.String("sit"),
                },
                shared.RoleRolePrivileges{
                    PrivilegeName: sdk.String("quidem"),
                    ServiceID: sdk.String("repellendus"),
                },
                shared.RoleRolePrivileges{
                    PrivilegeName: sdk.String("perferendis"),
                    ServiceID: sdk.String("id"),
                },
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        Customer: "repellat",
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.DirectoryRolesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Role != nil {
        // handle response
    }
}
```

## DirectoryRolesList

Retrieves a paginated list of all the roles in a domain.

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
    res, err := s.Roles.DirectoryRolesList(ctx, operations.DirectoryRolesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        Customer: "soluta",
        Fields: sdk.String("dolorum"),
        Key: sdk.String("velit"),
        MaxResults: sdk.Int64(937865),
        OauthToken: sdk.String("praesentium"),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DirectoryRolesListSecurity{
        Option1: &operations.DirectoryRolesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Roles != nil {
        // handle response
    }
}
```

## DirectoryRolesPatch

Patches a role.

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
    res, err := s.Roles.DirectoryRolesPatch(ctx, operations.DirectoryRolesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Role: &shared.Role{
            Etag: sdk.String("harum"),
            IsSuperAdminRole: sdk.Bool(false),
            IsSystemRole: sdk.Bool(false),
            Kind: sdk.String("cumque"),
            RoleDescription: sdk.String("doloremque"),
            RoleID: sdk.String("expedita"),
            RoleName: sdk.String("corrupti"),
            RolePrivileges: []shared.RoleRolePrivileges{
                shared.RoleRolePrivileges{
                    PrivilegeName: sdk.String("deserunt"),
                    ServiceID: sdk.String("aliquid"),
                },
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Customer: "possimus",
        Fields: sdk.String("dolor"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        RoleID: "optio",
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("minus"),
    }, operations.DirectoryRolesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Role != nil {
        // handle response
    }
}
```

## DirectoryRolesUpdate

Updates a role.

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
    res, err := s.Roles.DirectoryRolesUpdate(ctx, operations.DirectoryRolesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Role: &shared.Role{
            Etag: sdk.String("quos"),
            IsSuperAdminRole: sdk.Bool(false),
            IsSystemRole: sdk.Bool(false),
            Kind: sdk.String("asperiores"),
            RoleDescription: sdk.String("voluptatum"),
            RoleID: sdk.String("iste"),
            RoleName: sdk.String("corporis"),
            RolePrivileges: []shared.RoleRolePrivileges{
                shared.RoleRolePrivileges{
                    PrivilegeName: sdk.String("illo"),
                    ServiceID: sdk.String("aut"),
                },
            },
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("at"),
        Customer: "possimus",
        Fields: sdk.String("neque"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        RoleID: "mollitia",
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DirectoryRolesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Role != nil {
        // handle response
    }
}
```
