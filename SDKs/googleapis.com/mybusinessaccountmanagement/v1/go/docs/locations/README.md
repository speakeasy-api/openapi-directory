# Locations

### Available Operations

* [MybusinessaccountmanagementLocationsAdminsCreate](#mybusinessaccountmanagementlocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [MybusinessaccountmanagementLocationsAdminsDelete](#mybusinessaccountmanagementlocationsadminsdelete) - Removes the specified admin as a manager of the specified location.
* [MybusinessaccountmanagementLocationsAdminsList](#mybusinessaccountmanagementlocationsadminslist) - Lists all of the admins for the specified location.
* [MybusinessaccountmanagementLocationsAdminsPatch](#mybusinessaccountmanagementlocationsadminspatch) - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* [MybusinessaccountmanagementLocationsTransfer](#mybusinessaccountmanagementlocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

## MybusinessaccountmanagementLocationsAdminsCreate

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

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
    res, err := s.Locations.MybusinessaccountmanagementLocationsAdminsCreate(ctx, operations.MybusinessaccountmanagementLocationsAdminsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdminInput: &shared.AdminInput{
            Account: sdk.String("molestias"),
            Admin: sdk.String("excepturi"),
            Name: sdk.String("Joel Lang"),
            Role: shared.AdminRoleEnumAdminRoleUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("enim"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Admin != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementLocationsAdminsDelete

Removes the specified admin as a manager of the specified location.

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
    res, err := s.Locations.MybusinessaccountmanagementLocationsAdminsDelete(ctx, operations.MybusinessaccountmanagementLocationsAdminsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        Name: "Mr. Shelly Lueilwitz",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementLocationsAdminsList

Lists all of the admins for the specified location.

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
    res, err := s.Locations.MybusinessaccountmanagementLocationsAdminsList(ctx, operations.MybusinessaccountmanagementLocationsAdminsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("eum"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationAdminsResponse != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementLocationsAdminsPatch

Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.

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
    res, err := s.Locations.MybusinessaccountmanagementLocationsAdminsPatch(ctx, operations.MybusinessaccountmanagementLocationsAdminsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdminInput: &shared.AdminInput{
            Account: sdk.String("necessitatibus"),
            Admin: sdk.String("sint"),
            Name: sdk.String("Curtis Toy"),
            Role: shared.AdminRoleEnumOwner.ToPointer(),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("dicta"),
        Name: "Blanca Schulist",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UpdateMask: sdk.String("non"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
        ValidateOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Admin != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementLocationsTransfer

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

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
    res, err := s.Locations.MybusinessaccountmanagementLocationsTransfer(ctx, operations.MybusinessaccountmanagementLocationsTransferRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TransferLocationRequest: &shared.TransferLocationRequest{
            DestinationAccount: sdk.String("delectus"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("id"),
        Key: sdk.String("blanditiis"),
        Name: "Timmy Feeney",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
