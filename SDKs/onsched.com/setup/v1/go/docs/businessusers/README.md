# BusinessUsers

### Available Operations

* [DeleteSetupV1BusinessusersID](#deletesetupv1businessusersid) - Delete User
* [GetSetupV1Businessusers](#getsetupv1businessusers) - List Users
* [GetSetupV1BusinessusersPermissions](#getsetupv1businessuserspermissions) - List User Permissions
* [GetSetupV1BusinessusersEmailCompanies](#getsetupv1businessusersemailcompanies) - List User Companies
* [GetSetupV1BusinessusersID](#getsetupv1businessusersid) - Get User
* [PostSetupV1Businessusers](#postsetupv1businessusers) - Create User
* [PutSetupV1BusinessusersID](#putsetupv1businessusersid) - Update User

## DeleteSetupV1BusinessusersID

<p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.DeleteSetupV1BusinessusersID(ctx, operations.DeleteSetupV1BusinessusersIDRequest{
        ID: "ff1a3a2f-a946-4773-9251-aa52c3f5ad01",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSetupV1Businessusers

<p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.GetSetupV1Businessusers(ctx, operations.GetSetupV1BusinessusersRequest{
        Email: sdk.String("Rodrigo97@yahoo.com"),
        Limit: sdk.Int(976460),
        LocationID: sdk.String("vero"),
        Offset: sdk.Int(468651),
        Role: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessUserListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1BusinessusersPermissions

<p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.GetSetupV1BusinessusersPermissions(ctx, operations.GetSetupV1BusinessusersPermissionsRequest{
        Limit: sdk.Int(976762),
        Offset: sdk.Int(55714),
        Role: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessPermissionListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1BusinessusersEmailCompanies

<p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.GetSetupV1BusinessusersEmailCompanies(ctx, operations.GetSetupV1BusinessusersEmailCompaniesRequest{
        Email: "Myrtis44@yahoo.com",
        Limit: sdk.Int(282807),
        Offset: sdk.Int(979587),
        SearchText: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCompanyListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1BusinessusersID

<p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.GetSetupV1BusinessusersID(ctx, operations.GetSetupV1BusinessusersIDRequest{
        ID: "5471b5e6-e13b-499d-888e-1e91e450ad2a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessUserViewModel != nil {
        // handle response
    }
}
```

## PostSetupV1Businessusers

<p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>
<p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>
<p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
<p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.PostSetupV1Businessusers(ctx, shared.BusinessUserInputModel{
        Email: sdk.String("Ron18@hotmail.com"),
        LocationID: sdk.String("aliquid"),
        Name: sdk.String("Isaac Aufderhar"),
        ResourceID: sdk.String("ipsam"),
        Role: sdk.String("alias"),
        SendRegistrationInvite: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessUserViewModel != nil {
        // handle response
    }
}
```

## PutSetupV1BusinessusersID

<p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>
<p>
  <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BusinessUsers.PutSetupV1BusinessusersID(ctx, operations.PutSetupV1BusinessusersIDRequest{
        BusinessUserUpdateModel: &shared.BusinessUserUpdateModel{
            Email: sdk.String("Mariano70@gmail.com"),
            Name: sdk.String("Francisco Windler"),
            ResourceID: sdk.String("eligendi"),
            Role: sdk.String("sint"),
            SendRegistrationInvite: sdk.Bool(false),
        },
        ID: "69e9a3ef-a77d-4fb1-8cd6-6ae395efb9ba",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessUserViewModel != nil {
        // handle response
    }
}
```
