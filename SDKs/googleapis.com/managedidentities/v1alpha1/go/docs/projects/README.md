# Projects

### Available Operations

* [ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds AD trust in a given domain. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermission](#managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission) - AuditMigration API gets the current state of DomainMigration
* [ManagedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD Domain in a given project. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes identified trust. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigration](#managedidentitiesprojectslocationsglobaldomainsdisablemigration) - Disable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigration](#managedidentitiesprojectslocationsglobaldomainsenablemigration) - Enable Domain Migration
* [ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists Domains in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the dns conditional forwarder. Operation
* [ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets managed identities admin password identified by managed_identities_admin_name
* [ManagedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
* [ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsList](#managedidentitiesprojectslocationsglobaldomainssqlintegrationslist) - Lists SQLIntegrations in a given domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettings](#managedidentitiesprojectslocationsglobaldomainsupdateldapssettings) - Patches a single ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrust](#managedidentitiesprojectslocationsglobaldomainsvalidatetrust) - Validate the trust state Operation
* [ManagedidentitiesProjectsLocationsGlobalOperationsCancel](#managedidentitiesprojectslocationsglobaloperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [ManagedidentitiesProjectsLocationsGlobalOperationsList](#managedidentitiesprojectslocationsglobaloperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
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

Adds AD trust in a given domain. Operation

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
        AttachTrustRequest: &shared.AttachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: sdk.String("veritatis"),
                LastKnownTrustConnectedHeartbeatTime: sdk.String("deserunt"),
                SelectiveAuthentication: sdk.Bool(false),
                State: shared.TrustStateEnumStateUnspecified.ToPointer(),
                StateDescription: sdk.String("ipsam"),
                TargetDNSIPAddresses: []string{
                    "sapiente",
                    "quo",
                    "odit",
                    "at",
                },
                TargetDomainName: sdk.String("at"),
                TrustDirection: shared.TrustTrustDirectionEnumBidirectional.ToPointer(),
                TrustHandshakeSecret: sdk.String("molestiae"),
                TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
                UpdateTime: sdk.String("quod"),
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        Name: "Luke McCullough",
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("beatae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BackupInput: &shared.BackupInput{
            Description: sdk.String("molestiae"),
            Labels: map[string]string{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BackupID: sdk.String("aspernatur"),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
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
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("corporis"),
        Filter: sdk.String("iste"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("saepe"),
        OrderBy: sdk.String("quidem"),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
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

AuditMigration API gets the current state of DomainMigration

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "corporis": "explicabo",
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Domain: "nemo",
        Fields: sdk.String("minima"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("doloribus"),
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

Creates a Microsoft AD Domain in a given project. Operation

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
        Domain: &shared.Domain{
            AuditLogsEnabled: sdk.Bool(false),
            AuthorizedNetworks: []string{
                "mollitia",
            },
            CreateTime: sdk.String("dolorem"),
            Fqdn: sdk.String("culpa"),
            Labels: map[string]string{
                "repellat": "mollitia",
            },
            Locations: []string{
                "numquam",
                "commodi",
                "quam",
            },
            ManagedIdentitiesAdminName: sdk.String("molestiae"),
            Name: sdk.String("Sabrina Cronin MD"),
            ReservedIPRange: sdk.String("animi"),
            State: shared.DomainStateEnumReady.ToPointer(),
            StatusMessage: sdk.String("odit"),
            Trusts: []shared.Trust{
                shared.Trust{
                    CreateTime: sdk.String("sequi"),
                    LastKnownTrustConnectedHeartbeatTime: sdk.String("tenetur"),
                    SelectiveAuthentication: sdk.Bool(false),
                    State: shared.TrustStateEnumUpdating.ToPointer(),
                    StateDescription: sdk.String("id"),
                    TargetDNSIPAddresses: []string{
                        "aut",
                        "quasi",
                        "error",
                        "temporibus",
                    },
                    TargetDomainName: sdk.String("laborum"),
                    TrustDirection: shared.TrustTrustDirectionEnumTrustDirectionUnspecified.ToPointer(),
                    TrustHandshakeSecret: sdk.String("reiciendis"),
                    TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
                    UpdateTime: sdk.String("vero"),
                },
                shared.Trust{
                    CreateTime: sdk.String("nihil"),
                    LastKnownTrustConnectedHeartbeatTime: sdk.String("praesentium"),
                    SelectiveAuthentication: sdk.Bool(false),
                    State: shared.TrustStateEnumDisconnected.ToPointer(),
                    StateDescription: sdk.String("ipsa"),
                    TargetDNSIPAddresses: []string{
                        "voluptate",
                        "cum",
                        "perferendis",
                    },
                    TargetDomainName: sdk.String("doloremque"),
                    TrustDirection: shared.TrustTrustDirectionEnumInbound.ToPointer(),
                    TrustHandshakeSecret: sdk.String("ut"),
                    TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
                    UpdateTime: sdk.String("dicta"),
                },
                shared.Trust{
                    CreateTime: sdk.String("corporis"),
                    LastKnownTrustConnectedHeartbeatTime: sdk.String("dolore"),
                    SelectiveAuthentication: sdk.Bool(false),
                    State: shared.TrustStateEnumUpdating.ToPointer(),
                    StateDescription: sdk.String("dicta"),
                    TargetDNSIPAddresses: []string{
                        "enim",
                        "accusamus",
                        "commodi",
                    },
                    TargetDomainName: sdk.String("repudiandae"),
                    TrustDirection: shared.TrustTrustDirectionEnumTrustDirectionUnspecified.ToPointer(),
                    TrustHandshakeSecret: sdk.String("ipsum"),
                    TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
                    UpdateTime: sdk.String("molestias"),
                },
                shared.Trust{
                    CreateTime: sdk.String("excepturi"),
                    LastKnownTrustConnectedHeartbeatTime: sdk.String("pariatur"),
                    SelectiveAuthentication: sdk.Bool(false),
                    State: shared.TrustStateEnumCreating.ToPointer(),
                    StateDescription: sdk.String("praesentium"),
                    TargetDNSIPAddresses: []string{
                        "voluptates",
                        "quasi",
                        "repudiandae",
                    },
                    TargetDomainName: sdk.String("sint"),
                    TrustDirection: shared.TrustTrustDirectionEnumTrustDirectionUnspecified.ToPointer(),
                    TrustHandshakeSecret: sdk.String("itaque"),
                    TrustType: shared.TrustTrustTypeEnumTrustTypeUnspecified.ToPointer(),
                    UpdateTime: sdk.String("enim"),
                },
            },
            UpdateTime: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        DomainName: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("labore"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
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

Removes identified trust. Operation

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DetachTrustRequest: &shared.DetachTrustRequest{
            Trust: &shared.Trust{
                CreateTime: sdk.String("perferendis"),
                LastKnownTrustConnectedHeartbeatTime: sdk.String("magni"),
                SelectiveAuthentication: sdk.Bool(false),
                State: shared.TrustStateEnumConnected.ToPointer(),
                StateDescription: sdk.String("ipsam"),
                TargetDNSIPAddresses: []string{
                    "fugit",
                },
                TargetDomainName: sdk.String("dolorum"),
                TrustDirection: shared.TrustTrustDirectionEnumOutbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("tempora"),
                TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
                UpdateTime: sdk.String("tempore"),
            },
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("non"),
        Key: sdk.String("eligendi"),
        Name: "Gilbert Medhurst",
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("a"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "in": "illum",
            "maiores": "rerum",
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Domain: "facere",
        Fields: sdk.String("ea"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
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
            VMIDToken: sdk.String("delectus"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Domain: "id",
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EnableMigrationRequest: &shared.EnableMigrationRequest{
            MigratingDomains: []shared.OnPremDomainDetails{
                shared.OnPremDomainDetails{
                    DisableSidFiltering: sdk.Bool(false),
                    DomainName: sdk.String("omnis"),
                },
                shared.OnPremDomainDetails{
                    DisableSidFiltering: sdk.Bool(false),
                    DomainName: sdk.String("molestiae"),
                },
                shared.OnPremDomainDetails{
                    DisableSidFiltering: sdk.Bool(false),
                    DomainName: sdk.String("perferendis"),
                },
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Domain: "id",
        Fields: sdk.String("labore"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
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
            Description: sdk.String("aspernatur"),
            FileContents: sdk.String("architecto"),
            GcsPath: sdk.String("magnam"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Domain: "provident",
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("mollitia"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("odit"),
        Key: sdk.String("nemo"),
        Name: "Vera Wyman",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("in"),
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

Lists Domains in a given project.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Filter: sdk.String("nihil"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("quibusdam"),
        OrderBy: sdk.String("sed"),
        PageSize: sdk.Int64(904648),
        PageToken: sdk.String("pariatur"),
        Parent: "accusantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
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

Updates the dns conditional forwarder. Operation

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
            Trust: &shared.Trust{
                CreateTime: sdk.String("sunt"),
                LastKnownTrustConnectedHeartbeatTime: sdk.String("quo"),
                SelectiveAuthentication: sdk.Bool(false),
                State: shared.TrustStateEnumDisconnected.ToPointer(),
                StateDescription: sdk.String("pariatur"),
                TargetDNSIPAddresses: []string{
                    "ea",
                    "excepturi",
                    "odit",
                    "ea",
                },
                TargetDomainName: sdk.String("accusantium"),
                TrustDirection: shared.TrustTrustDirectionEnumTrustDirectionUnspecified.ToPointer(),
                TrustHandshakeSecret: sdk.String("maiores"),
                TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
                UpdateTime: sdk.String("ipsam"),
            },
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("pariatur"),
        Name: "Camille Armstrong",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
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

Resets managed identities admin password identified by managed_identities_admin_name

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
            "dolores": "quis",
            "totam": "dignissimos",
            "eaque": "quis",
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("minus"),
        Name: "Rosa Swift",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("perspiciatis"),
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

RestoreDomain restores domain backup mentioned in the RestoreDomainRequest

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RestoreDomainRequest: &shared.RestoreDomainRequest{
            BackupID: sdk.String("porro"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("occaecati"),
        Name: "Travis Zemlak",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("pariatur"),
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

Lists SQLIntegrations in a given domain.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quaerat"),
        Filter: sdk.String("quos"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("dolorem"),
        OrderBy: sdk.String("dolorem"),
        PageSize: sdk.Int64(222443),
        PageToken: sdk.String("qui"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("cum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LDAPSSettingsInput: &shared.LDAPSSettingsInput{
            Certificate: &shared.Certificate{
                ExpireTime: sdk.String("dignissimos"),
                IssuingCertificate: &shared.Certificate{},
                Subject: sdk.String("reiciendis"),
                SubjectAlternativeName: []string{
                    "dolorum",
                },
                Thumbprint: sdk.String("numquam"),
            },
            CertificatePassword: sdk.String("veritatis"),
            CertificatePfx: sdk.String("ipsa"),
            Name: sdk.String("Vera Kuhlman"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("natus"),
        Key: sdk.String("eos"),
        Name: "Miss Paul Steuber",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UpdateMask: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("omnis"),
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

Validate the trust state Operation

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
        ValidateTrustRequest: &shared.ValidateTrustRequest{
            Trust: &shared.Trust{
                CreateTime: sdk.String("distinctio"),
                LastKnownTrustConnectedHeartbeatTime: sdk.String("asperiores"),
                SelectiveAuthentication: sdk.Bool(false),
                State: shared.TrustStateEnumUpdating.ToPointer(),
                StateDescription: sdk.String("ipsum"),
                TargetDNSIPAddresses: []string{
                    "id",
                    "saepe",
                },
                TargetDomainName: sdk.String("eius"),
                TrustDirection: shared.TrustTrustDirectionEnumTrustDirectionUnspecified.ToPointer(),
                TrustHandshakeSecret: sdk.String("perferendis"),
                TrustType: shared.TrustTrustTypeEnumTrustTypeUnspecified.ToPointer(),
                UpdateTime: sdk.String("optio"),
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("deserunt"),
        Name: "Derek Sipes",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("tempora"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "officiis": "qui",
            "dolorum": "a",
            "esse": "harum",
            "iusto": "ipsum",
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("accusamus"),
        Name: "Darlene Effertz",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("neque"),
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

## ManagedidentitiesProjectsLocationsGlobalOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.ManagedidentitiesProjectsLocationsGlobalOperationsList(ctx, operations.ManagedidentitiesProjectsLocationsGlobalOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("quam"),
        Key: sdk.String("ipsum"),
        Name: "Norma McGlynn",
        OauthToken: sdk.String("soluta"),
        PageSize: sdk.Int64(117531),
        PageToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.ManagedidentitiesProjectsLocationsGlobalOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PeeringInput: &shared.PeeringInput{
            AuthorizedNetwork: sdk.String("distinctio"),
            DomainResource: sdk.String("facilis"),
            Labels: map[string]string{
                "quam": "molestias",
                "temporibus": "qui",
            },
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("odio"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("ullam"),
        Parent: "nam",
        PeeringID: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("soluta"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("nobis"),
        Name: "Dr. Randolph McDermott",
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("dolorum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("consequatur"),
        Name: "Marcos Schaden",
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quae"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("omnis"),
        OptionsRequestedPolicyVersion: sdk.Int64(338159),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        Resource: "delectus",
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("consectetur"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("distinctio"),
        Filter: sdk.String("quod"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("similique"),
        OrderBy: sdk.String("facilis"),
        PageSize: sdk.Int64(874288),
        PageToken: sdk.String("ducimus"),
        Parent: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("sequi"),
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
            AuthorizedNetwork: sdk.String("impedit"),
            DomainResource: sdk.String("aut"),
            Labels: map[string]string{
                "exercitationem": "nulla",
                "fugit": "porro",
                "maiores": "doloribus",
                "iusto": "eligendi",
            },
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("ipsam"),
        Name: "Judy Keebler",
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UpdateMask: sdk.String("laudantium"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("dolor"),
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
                            Description: sdk.String("ex"),
                            Expression: sdk.String("nulla"),
                            Location: sdk.String("excepturi"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "sapiente",
                            "quisquam",
                        },
                        Role: sdk.String("saepe"),
                    },
                },
                Etag: sdk.String("ea"),
                Version: sdk.Int(774048),
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        Resource: "consectetur",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("aspernatur"),
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
                "a",
            },
        },
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        Resource: "accusamus",
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("non"),
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
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("velit"),
        Filter: sdk.String("eum"),
        Key: sdk.String("autem"),
        Name: "Clifton Simonis",
        OauthToken: sdk.String("libero"),
        PageSize: sdk.Int64(96549),
        PageToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("provident"),
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
