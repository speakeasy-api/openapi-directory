# RoleAssignments

### Available Operations

* [DirectoryRoleAssignmentsDelete](#directoryroleassignmentsdelete) - Deletes a role assignment.
* [DirectoryRoleAssignmentsGet](#directoryroleassignmentsget) - Retrieves a role assignment.
* [DirectoryRoleAssignmentsInsert](#directoryroleassignmentsinsert) - Creates a role assignment.
* [DirectoryRoleAssignmentsList](#directoryroleassignmentslist) - Retrieves a paginated list of all roleAssignments.

## DirectoryRoleAssignmentsDelete

Deletes a role assignment.

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
    res, err := s.RoleAssignments.DirectoryRoleAssignmentsDelete(ctx, operations.DirectoryRoleAssignmentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quisquam"),
        Customer: "tenetur",
        Fields: sdk.String("quas"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        RoleAssignmentID: "a",
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("perspiciatis"),
    }, operations.DirectoryRoleAssignmentsDeleteSecurity{
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

## DirectoryRoleAssignmentsGet

Retrieves a role assignment.

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
    res, err := s.RoleAssignments.DirectoryRoleAssignmentsGet(ctx, operations.DirectoryRoleAssignmentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Customer: "eveniet",
        Fields: sdk.String("porro"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        RoleAssignmentID: "voluptates",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("eius"),
    }, operations.DirectoryRoleAssignmentsGetSecurity{
        Option1: &operations.DirectoryRoleAssignmentsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleAssignment != nil {
        // handle response
    }
}
```

## DirectoryRoleAssignmentsInsert

Creates a role assignment.

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
    res, err := s.RoleAssignments.DirectoryRoleAssignmentsInsert(ctx, operations.DirectoryRoleAssignmentsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RoleAssignmentInput: &shared.RoleAssignmentInput{
            AssignedTo: sdk.String("eligendi"),
            Etag: sdk.String("asperiores"),
            Kind: sdk.String("esse"),
            OrgUnitID: sdk.String("blanditiis"),
            RoleAssignmentID: sdk.String("sint"),
            RoleID: sdk.String("repellat"),
            ScopeType: sdk.String("a"),
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("itaque"),
        Customer: "nulla",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("officia"),
    }, operations.DirectoryRoleAssignmentsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleAssignment != nil {
        // handle response
    }
}
```

## DirectoryRoleAssignmentsList

Retrieves a paginated list of all roleAssignments.

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
    res, err := s.RoleAssignments.DirectoryRoleAssignmentsList(ctx, operations.DirectoryRoleAssignmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusantium"),
        Customer: "officia",
        Fields: sdk.String("impedit"),
        IncludeIndirectRoleAssignments: sdk.Bool(false),
        Key: sdk.String("quasi"),
        MaxResults: sdk.Int64(502106),
        OauthToken: sdk.String("eius"),
        PageToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        RoleID: sdk.String("nobis"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("minus"),
        UserKey: sdk.String("quia"),
    }, operations.DirectoryRoleAssignmentsListSecurity{
        Option1: &operations.DirectoryRoleAssignmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoleAssignments != nil {
        // handle response
    }
}
```
