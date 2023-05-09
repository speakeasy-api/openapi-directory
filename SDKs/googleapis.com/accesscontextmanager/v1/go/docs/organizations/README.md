# Organizations

### Available Operations

* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate](#accesscontextmanagerorganizationsgcpuseraccessbindingscreate) - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete](#accesscontextmanagerorganizationsgcpuseraccessbindingsdelete) - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet](#accesscontextmanagerorganizationsgcpuseraccessbindingsget) - Gets the GcpUserAccessBinding with the given name.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsList](#accesscontextmanagerorganizationsgcpuseraccessbindingslist) - Lists all GcpUserAccessBindings for a Google Cloud organization.
* [AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch](#accesscontextmanagerorganizationsgcpuseraccessbindingspatch) - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

## AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate

Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.

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
    res, err := s.Organizations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate(ctx, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GcpUserAccessBinding: &shared.GcpUserAccessBinding{
            AccessLevels: []string{
                "delectus",
            },
            DryRunAccessLevels: []string{
                "cum",
                "ipsum",
                "adipisci",
                "saepe",
            },
            GroupKey: sdk.String("deserunt"),
            Name: sdk.String("Beatrice Hartmann V"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("non"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("itaque"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete

Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.

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
    res, err := s.Organizations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete(ctx, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("amet"),
        Key: sdk.String("exercitationem"),
        Name: "Thelma Purdy",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet

Gets the GcpUserAccessBinding with the given name.

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
    res, err := s.Organizations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet(ctx, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("minus"),
        Filter: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnumCel.ToPointer(),
        Key: sdk.String("facilis"),
        Name: "Erin Wiza",
        OauthToken: sdk.String("debitis"),
        PageSize: sdk.Int64(290841),
        PageToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GcpUserAccessBinding != nil {
        // handle response
    }
}
```

## AccesscontextmanagerOrganizationsGcpUserAccessBindingsList

Lists all GcpUserAccessBindings for a Google Cloud organization.

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
    res, err := s.Organizations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsList(ctx, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("unde"),
        PageSize: sdk.Int64(889448),
        PageToken: sdk.String("ducimus"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("porro"),
    }, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGcpUserAccessBindingsResponse != nil {
        // handle response
    }
}
```

## AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch

Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

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
    res, err := s.Organizations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch(ctx, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GcpUserAccessBinding: &shared.GcpUserAccessBinding{
            AccessLevels: []string{
                "esse",
                "fugiat",
            },
            DryRunAccessLevels: []string{
                "aspernatur",
                "enim",
            },
            GroupKey: sdk.String("delectus"),
            Name: sdk.String("Mr. Marian Renner"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("eos"),
        Name: "Amos Kilback",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UpdateMask: sdk.String("sequi"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
