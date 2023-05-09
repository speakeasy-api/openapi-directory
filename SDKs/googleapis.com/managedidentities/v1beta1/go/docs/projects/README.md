# Projects

### Available Operations

* [ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds an AD trust to a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - CheckMigrationPermission API gets the current state of DomainMigration
* [ManagedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes an AD trust.
* [ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration](#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration](#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists domains in a project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the DNS conditional forwarder.
* [ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets a domain's administrator password.
* [ManagedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreBackup restores domain mentioned in the RestoreBackupRequest
* [ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList](#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SqlIntegrations in a given domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust](#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.
* [ManagedidentitiesProjectsLocationsGlobalOperationsCancel](#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsCreate](#managedidentitiesprojectslocationsglobalpeeringscreate) - Creates a Peering for Managed AD instance.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsDelete](#managedidentitiesprojectslocationsglobalpeeringsdelete) - Deletes identified Peering.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsGet](#managedidentitiesprojectslocationsglobalpeeringsget) - Gets details of a single Peering.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy](#managedidentitiesprojectslocationsglobalpeeringsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsList](#managedidentitiesprojectslocationsglobalpeeringslist) - Lists Peerings in a given project.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsPatch](#managedidentitiesprojectslocationsglobalpeeringspatch) - Updates the labels for specified Peering.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy](#managedidentitiesprojectslocationsglobalpeeringssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions](#managedidentitiesprojectslocationsglobalpeeringstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [ManagedidentitiesProjectsLocationsList](#managedidentitiesprojectslocationslist) - Lists information about the supported locations for this service.

## ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust

Adds an AD trust to a domain.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AttachTrustRequestInput: &shared.AttachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: sdk.Bool(false),
                TargetDNSIPAddresses: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                TargetDomainName: sdk.String("ab"),
                TrustDirection: shared.TrustTrustDirectionEnumInbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("veritatis"),
                TrustType: shared.TrustTrustTypeEnumForest.ToPointer(),
            },
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        Name: "Teri Strosin",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate

Creates a Backup for a domain.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BackupInput: &shared.BackupInput{
            Description: sdk.String("dolorum"),
            Labels: map[string]string{
                "nam": "officia",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BackupID: sdk.String("deleniti"),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList

Lists Backup in a given project.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Filter: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        OrderBy: sdk.String("natus"),
        PageSize: sdk.Int64(149675),
        PageToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBackupsResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission

CheckMigrationPermission API gets the current state of DomainMigration

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "in": "corporis",
            "iste": "iure",
            "saepe": "quidem",
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Domain: "est",
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckMigrationPermissionResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsCreate

Creates a Microsoft AD domain.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsCreate(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DomainInput: &shared.DomainInput{
            Admin: sdk.String("enim"),
            AuditLogsEnabled: sdk.Bool(false),
            AuthorizedNetworks: []string{
                "nemo",
                "minima",
                "excepturi",
            },
            Labels: map[string]string{
                "iure": "culpa",
            },
            Locations: []string{
                "sapiente",
                "architecto",
                "mollitia",
                "dolorem",
            },
            ReservedIPRange: sdk.String("culpa"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        DomainName: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust

Removes an AD trust.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DetachTrustRequestInput: &shared.DetachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: sdk.Bool(false),
                TargetDNSIPAddresses: []string{
                    "laborum",
                },
                TargetDomainName: sdk.String("animi"),
                TrustDirection: shared.TrustTrustDirectionEnumInbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("odit"),
                TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
            },
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Key: sdk.String("possimus"),
        Name: "Joyce Mueller",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vero"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration

Disable Domain Migration

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptatibus": "ipsa",
            "omnis": "voluptate",
            "cum": "perferendis",
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Domain: "maiores",
        Fields: sdk.String("dicta"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine

DomainJoinMachine API joins a Compute Engine VM to the domain

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DomainJoinMachineRequest: &shared.DomainJoinMachineRequest{
            Force: sdk.Bool(false),
            OuName: sdk.String("accusamus"),
            VMIDToken: sdk.String("commodi"),
        },
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Domain: "quidem",
        Fields: sdk.String("molestias"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachineSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainJoinMachineResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration

Enable Domain Migration

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EnableMigrationRequest: &shared.EnableMigrationRequest{
            MigratingDomains: []shared.OnPremDomainDetails{
                shared.OnPremDomainDetails{
                    DisableSidFiltering: sdk.Bool(false),
                    DomainName: sdk.String("repudiandae"),
                },
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Domain: "incidunt",
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema

Extend Schema for Domain

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ExtendSchemaRequest: &shared.ExtendSchemaRequest{
            Description: sdk.String("quibusdam"),
            FileContents: sdk.String("labore"),
            GcsPath: sdk.String("modi"),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Domain: "quos",
        Fields: sdk.String("perferendis"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings

Gets the domain ldaps settings.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("labore"),
        Name: "Andre Franey",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("sint"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LDAPSSettings != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsList

Lists domains in a project.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsList(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("in"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("illum"),
        OrderBy: sdk.String("maiores"),
        PageSize: sdk.Int64(699479),
        PageToken: sdk.String("dicta"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("ea"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust

Updates the DNS conditional forwarder.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReconfigureTrustRequest: &shared.ReconfigureTrustRequest{
            TargetDNSIPAddresses: []string{
                "accusamus",
                "non",
                "occaecati",
            },
            TargetDomainName: sdk.String("enim"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("provident"),
        Key: sdk.String("nam"),
        Name: "Nelson Lesch",
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("natus"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword

Resets a domain's administrator password.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "perferendis": "nihil",
            "magnam": "distinctio",
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Name: "Duane Thiel II",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetAdminPasswordResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsRestore

RestoreBackup restores domain mentioned in the RestoreBackupRequest

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsRestore(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RestoreDomainRequest: &shared.RestoreDomainRequest{
            BackupID: sdk.String("sint"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("ad"),
        Name: "Carmen Treutel",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList

Lists SqlIntegrations in a given domain.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("in"),
        Filter: sdk.String("architecto"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("repudiandae"),
        OrderBy: sdk.String("ullam"),
        PageSize: sdk.Int64(714242),
        PageToken: sdk.String("nihil"),
        Parent: "repellat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSQLIntegrationsResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings

Patches a single ldaps settings.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LDAPSSettingsInput: &shared.LDAPSSettingsInput{
            Certificate: &shared.Certificate{
                ExpireTime: sdk.String("accusantium"),
                IssuingCertificate: &shared.Certificate{},
                Subject: sdk.String("consequuntur"),
                SubjectAlternativeName: []string{
                    "natus",
                    "magni",
                    "sunt",
                },
                Thumbprint: sdk.String("quo"),
            },
            CertificatePassword: sdk.String("illum"),
            CertificatePfx: sdk.String("pariatur"),
            Name: sdk.String("Nathaniel Marks"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("ipsam"),
        Name: "Dr. Stacey Reichert",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UpdateMask: sdk.String("fugiat"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("aut"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust

Validates a trust state, that the target domain is reachable, and that the target domain is able to accept incoming trust requests.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust(ctx, operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ValidateTrustRequestInput: &shared.ValidateTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: sdk.Bool(false),
                TargetDNSIPAddresses: []string{
                    "hic",
                    "libero",
                },
                TargetDomainName: sdk.String("nobis"),
                TrustDirection: shared.TrustTrustDirectionEnumTrustDirectionUnspecified.ToPointer(),
                TrustHandshakeSecret: sdk.String("quis"),
                TrustType: shared.TrustTrustTypeEnumForest.ToPointer(),
            },
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("eos"),
        Name: "Jacqueline Schimmel",
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalOperationsCancel(ctx, operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "perspiciatis": "voluptatem",
            "porro": "consequuntur",
            "blanditiis": "error",
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("asperiores"),
        Name: "Edwin Morar",
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("libero"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalPeeringsCreate

Creates a Peering for Managed AD instance.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsCreate(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PeeringInput: &shared.PeeringInput{
            AuthorizedNetwork: sdk.String("quaerat"),
            DomainResource: sdk.String("quos"),
            Labels: map[string]string{
                "dolorem": "dolorem",
                "dolor": "qui",
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("cum"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("dignissimos"),
        Parent: "reiciendis",
        PeeringID: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalPeeringsDelete

Deletes identified Peering.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsDelete(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("accusamus"),
        Name: "Jan Hodkiewicz",
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalPeeringsGet

Gets details of a single Peering.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsGet(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("deleniti"),
        Key: sdk.String("omnis"),
        Name: "Kelvin Zboncak",
        OauthToken: sdk.String("voluptate"),
        PageSize: sdk.Int64(663078),
        PageToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Peering != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicy(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("deserunt"),
        OptionsRequestedPolicyVersion: sdk.Int64(588317),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        Resource: "repellendus",
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("similique"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalPeeringsList

Lists Peerings in a given project.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsList(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("quod"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("qui"),
        OrderBy: sdk.String("dolorum"),
        PageSize: sdk.Int64(952792),
        PageToken: sdk.String("esse"),
        Parent: "harum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPeeringsResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalPeeringsPatch

Updates the labels for specified Peering.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsPatch(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PeeringInput: &shared.PeeringInput{
            AuthorizedNetwork: sdk.String("amet"),
            DomainResource: sdk.String("tempore"),
            Labels: map[string]string{
                "numquam": "enim",
                "dolorem": "sapiente",
                "totam": "nihil",
                "sit": "expedita",
            },
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("libero"),
        Key: sdk.String("voluptas"),
        Name: "Darryl Emard",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UpdateMask: sdk.String("pariatur"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchSecurity{
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

## ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicy(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetIamPolicyRequest: &shared.SetIamPolicyRequest{
            Policy: &shared.Policy{
                Bindings: []shared.Binding{
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("incidunt"),
                            Expression: sdk.String("aspernatur"),
                            Location: sdk.String("dolores"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "aliquid",
                            "quam",
                            "molestias",
                        },
                        Role: sdk.String("temporibus"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("qui"),
                            Expression: sdk.String("neque"),
                            Location: sdk.String("fugit"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "sunt",
                            "ullam",
                        },
                        Role: sdk.String("nam"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("hic"),
                            Expression: sdk.String("voluptatem"),
                            Location: sdk.String("cumque"),
                            Title: sdk.String("Miss"),
                        },
                        Members: []string{
                            "et",
                            "saepe",
                            "ipsum",
                        },
                        Role: sdk.String("veritatis"),
                    },
                },
                Etag: sdk.String("nobis"),
                Version: sdk.Int(552193),
            },
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        Resource: "adipisci",
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissions(ctx, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "quas",
            },
        },
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        Resource: "facilis",
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## ManagedidentitiesProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsList(ctx, operations.ManagedidentitiesProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("quisquam"),
        Key: sdk.String("vero"),
        Name: "Tim Erdman",
        OauthToken: sdk.String("consectetur"),
        PageSize: sdk.Int64(878870),
        PageToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.ManagedidentitiesProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
