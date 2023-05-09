# Projects

### Available Operations

* [ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrust](#managedidentitiesprojectslocationsglobaldomainsattachtrust) - Adds an AD trust to a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreate](#managedidentitiesprojectslocationsglobaldomainsbackupscreate) - Creates a Backup for a domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsBackupsList](#managedidentitiesprojectslocationsglobaldomainsbackupslist) - Lists Backup in a given project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsCreate](#managedidentitiesprojectslocationsglobaldomainscreate) - Creates a Microsoft AD domain.
* [ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrust](#managedidentitiesprojectslocationsglobaldomainsdetachtrust) - Removes an AD trust.
* [ManagedidentitiesProjectsLocationsGlobalDomainsDomainJoinMachine](#managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine) - DomainJoinMachine API joins a Compute Engine VM to the domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchema](#managedidentitiesprojectslocationsglobaldomainsextendschema) - Extend Schema for Domain
* [ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettings](#managedidentitiesprojectslocationsglobaldomainsgetldapssettings) - Gets the domain ldaps settings.
* [ManagedidentitiesProjectsLocationsGlobalDomainsList](#managedidentitiesprojectslocationsglobaldomainslist) - Lists domains in a project.
* [ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrust](#managedidentitiesprojectslocationsglobaldomainsreconfiguretrust) - Updates the DNS conditional forwarder.
* [ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPassword](#managedidentitiesprojectslocationsglobaldomainsresetadminpassword) - Resets a domain's administrator password.
* [ManagedidentitiesProjectsLocationsGlobalDomainsRestore](#managedidentitiesprojectslocationsglobaldomainsrestore) - RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
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
            Labels: map[string]string{
                "dicta": "nam",
                "officia": "occaecati",
                "fugit": "deleniti",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        BackupID: sdk.String("totam"),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("esse"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Filter: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        OrderBy: sdk.String("dolor"),
        PageSize: sdk.Int64(616934),
        PageToken: sdk.String("laboriosam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DomainInput: &shared.DomainInput{
            Admin: sdk.String("iste"),
            AuditLogsEnabled: sdk.Bool(false),
            AuthorizedNetworks: []string{
                "saepe",
                "quidem",
            },
            Labels: map[string]string{
                "ipsa": "reiciendis",
            },
            Locations: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            Name: sdk.String("Stacy Champlin"),
            ReservedIPRange: sdk.String("omnis"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        DomainName: sdk.String("accusantium"),
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DetachTrustRequestInput: &shared.DetachTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: sdk.Bool(false),
                TargetDNSIPAddresses: []string{
                    "repellat",
                },
                TargetDomainName: sdk.String("mollitia"),
                TrustDirection: shared.TrustTrustDirectionEnumOutbound.ToPointer(),
                TrustHandshakeSecret: sdk.String("numquam"),
                TrustType: shared.TrustTrustTypeEnumForest.ToPointer(),
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("error"),
        Key: sdk.String("quia"),
        Name: "Gloria Padberg",
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("tenetur"),
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
            OuName: sdk.String("id"),
            VMIDToken: sdk.String("possimus"),
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Domain: "temporibus",
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("nihil"),
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
            Description: sdk.String("voluptatibus"),
            FileContents: sdk.String("ipsa"),
            GcsPath: sdk.String("omnis"),
        },
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Domain: "doloremque",
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
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
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Name: "Eric Emmerich",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
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
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("sint"),
        Filter: sdk.String("veritatis"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("incidunt"),
        OrderBy: sdk.String("enim"),
        PageSize: sdk.Int64(9356),
        PageToken: sdk.String("est"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("distinctio"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReconfigureTrustRequest: &shared.ReconfigureTrustRequest{
            TargetDNSIPAddresses: []string{
                "modi",
                "qui",
            },
            TargetDomainName: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("magni"),
        Key: sdk.String("assumenda"),
        Name: "Linda Corkery",
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
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
            "non": "eligendi",
            "sint": "aliquid",
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        Name: "Randal Parisian",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("dicta"),
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
            BackupID: sdk.String("cumque"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        Name: "Toni Haley",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("id"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("nisi"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("natus"),
        OrderBy: sdk.String("omnis"),
        PageSize: sdk.Int64(474867),
        PageToken: sdk.String("perferendis"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("id"),
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
                ExpireTime: sdk.String("labore"),
                IssuingCertificate: &shared.Certificate{},
                Subject: sdk.String("suscipit"),
                SubjectAlternativeName: []string{
                    "nobis",
                    "eum",
                    "vero",
                },
                Thumbprint: sdk.String("aspernatur"),
            },
            CertificatePassword: sdk.String("architecto"),
            CertificatePfx: sdk.String("magnam"),
            Name: sdk.String("Miriam Hermann"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        Name: "Natalie Ernser",
        OauthToken: sdk.String("nemo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UpdateMask: sdk.String("iure"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ValidateTrustRequestInput: &shared.ValidateTrustRequestInput{
            Trust: &shared.TrustInput{
                SelectiveAuthentication: sdk.Bool(false),
                TargetDNSIPAddresses: []string{
                    "deleniti",
                    "facilis",
                    "in",
                    "architecto",
                },
                TargetDomainName: sdk.String("architecto"),
                TrustDirection: shared.TrustTrustDirectionEnumBidirectional.ToPointer(),
                TrustHandshakeSecret: sdk.String("ullam"),
                TrustType: shared.TrustTrustTypeEnumExternal.ToPointer(),
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("sed"),
        Key: sdk.String("saepe"),
        Name: "Edward Crooks",
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("illum"),
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
            "ea": "excepturi",
            "odit": "ea",
            "accusantium": "ab",
            "maiores": "quidem",
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("nam"),
        Key: sdk.String("eaque"),
        Name: "Dr. Herman Wolf",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("hic"),
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
            AuthorizedNetwork: sdk.String("nobis"),
            DomainResource: sdk.String("dolores"),
            Labels: map[string]string{
                "totam": "dignissimos",
                "eaque": "quis",
            },
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("quam"),
        Parent: "dolor",
        PeeringID: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("recusandae"),
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
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("porro"),
        Key: sdk.String("consequuntur"),
        Name: "Jeremiah Beatty",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("modi"),
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
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("provident"),
        Filter: sdk.String("nobis"),
        Key: sdk.String("libero"),
        Name: "Alex Luettgen",
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(222443),
        PageToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
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
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("amet"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("numquam"),
        OptionsRequestedPolicyVersion: sdk.Int64(85295),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        Resource: "ipsa",
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("odio"),
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
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("voluptas"),
        Filter: sdk.String("natus"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("atque"),
        OrderBy: sdk.String("sit"),
        PageSize: sdk.Int64(854614),
        PageToken: sdk.String("ab"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("voluptate"),
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
            AuthorizedNetwork: sdk.String("deleniti"),
            DomainResource: sdk.String("omnis"),
            Labels: map[string]string{
                "distinctio": "asperiores",
                "nihil": "ipsum",
                "voluptate": "id",
                "saepe": "eius",
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("optio"),
        Key: sdk.String("accusamus"),
        Name: "Jenna Hoppe",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UpdateMask: sdk.String("totam"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("alias"),
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
                            Description: sdk.String("tempora"),
                            Expression: sdk.String("vel"),
                            Location: sdk.String("quod"),
                            Title: sdk.String("Dr."),
                        },
                        Members: []string{
                            "dolorum",
                        },
                        Role: sdk.String("a"),
                    },
                    shared.Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("esse"),
                            Expression: sdk.String("harum"),
                            Location: sdk.String("iusto"),
                            Title: sdk.String("Mrs."),
                        },
                        Members: []string{
                            "tenetur",
                            "amet",
                            "tempore",
                            "accusamus",
                        },
                        Role: sdk.String("numquam"),
                    },
                },
                Etag: sdk.String("enim"),
                Version: sdk.Int(213312),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("sit"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        Resource: "vel",
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("voluptas"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TestIamPermissionsRequest: &shared.TestIamPermissionsRequest{
            Permissions: []string{
                "ipsum",
                "incidunt",
            },
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        Resource: "totam",
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("aspernatur"),
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
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("quam"),
        Filter: sdk.String("molestias"),
        Key: sdk.String("temporibus"),
        Name: "Gladys Considine",
        OauthToken: sdk.String("sunt"),
        PageSize: sdk.Int64(355613),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("cumque"),
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
