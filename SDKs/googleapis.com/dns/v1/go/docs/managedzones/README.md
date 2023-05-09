# ManagedZones

### Available Operations

* [DNSManagedZonesCreate](#dnsmanagedzonescreate) - Creates a new ManagedZone.
* [DNSManagedZonesDelete](#dnsmanagedzonesdelete) - Deletes a previously created ManagedZone.
* [DNSManagedZonesGet](#dnsmanagedzonesget) - Fetches the representation of an existing ManagedZone.
* [DNSManagedZonesGetIamPolicy](#dnsmanagedzonesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [DNSManagedZonesList](#dnsmanagedzoneslist) - Enumerates ManagedZones that have been created but not yet deleted.
* [DNSManagedZonesPatch](#dnsmanagedzonespatch) - Applies a partial update to an existing ManagedZone.
* [DNSManagedZonesSetIamPolicy](#dnsmanagedzonessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [DNSManagedZonesTestIamPermissions](#dnsmanagedzonestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [DNSManagedZonesUpdate](#dnsmanagedzonesupdate) - Updates an existing ManagedZone.

## DNSManagedZonesCreate

Creates a new ManagedZone.

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
    res, err := s.ManagedZones.DNSManagedZonesCreate(ctx, operations.DNSManagedZonesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ManagedZone: &shared.ManagedZone{
            CloudLoggingConfig: &shared.ManagedZoneCloudLoggingConfig{
                EnableLogging: sdk.Bool(false),
                Kind: sdk.String("maiores"),
            },
            CreationTime: sdk.String("laudantium"),
            Description: sdk.String("velit"),
            DNSName: sdk.String("reiciendis"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(57470),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("tenetur"),
                    },
                },
                Kind: sdk.String("quas"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumOn.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("asperiores"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("perspiciatis"),
                        Ipv6Address: sdk.String("accusantium"),
                        Kind: sdk.String("dicta"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("commodi"),
                        Ipv6Address: sdk.String("eveniet"),
                        Kind: sdk.String("porro"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("quidem"),
                        Ipv6Address: sdk.String("modi"),
                        Kind: sdk.String("voluptates"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("eius"),
                        Ipv6Address: sdk.String("sequi"),
                        Kind: sdk.String("eligendi"),
                    },
                },
            },
            ID: sdk.String("asperiores"),
            Kind: sdk.String("esse"),
            Labels: map[string]string{
                "sint": "repellat",
                "a": "animi",
                "maiores": "itaque",
            },
            Name: sdk.String("Gerard Herzog"),
            NameServerSet: sdk.String("enim"),
            NameServers: []string{
                "saepe",
                "eum",
                "repudiandae",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("accusantium"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("officia"),
                    Kind: sdk.String("impedit"),
                    NetworkURL: sdk.String("quasi"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("eius"),
                        Kind: sdk.String("quisquam"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("eos"),
                        Kind: sdk.String("nobis"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("natus"),
                        Kind: sdk.String("minus"),
                    },
                },
                Kind: sdk.String("quia"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("reprehenderit"),
                        NetworkURL: sdk.String("quod"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("quos"),
                        NetworkURL: sdk.String("corrupti"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("amet"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("molestiae"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("amet"),
                    Kind: sdk.String("laborum"),
                    NamespaceURL: sdk.String("modi"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPublic.ToPointer(),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestias"),
        ClientOperationID: sdk.String("dolore"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        Project: "odit",
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DNSManagedZonesCreateSecurity{
        Option1: &operations.DNSManagedZonesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedZone != nil {
        // handle response
    }
}
```

## DNSManagedZonesDelete

Deletes a previously created ManagedZone.

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
    res, err := s.ManagedZones.DNSManagedZonesDelete(ctx, operations.DNSManagedZonesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nihil"),
        ClientOperationID: sdk.String("ad"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("tenetur"),
        ManagedZone: "quis",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        Project: "nemo",
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("sit"),
    }, operations.DNSManagedZonesDeleteSecurity{
        Option1: &operations.DNSManagedZonesDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DNSManagedZonesGet

Fetches the representation of an existing ManagedZone.

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
    res, err := s.ManagedZones.DNSManagedZonesGet(ctx, operations.DNSManagedZonesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        ClientOperationID: sdk.String("sapiente"),
        Fields: sdk.String("sed"),
        Key: sdk.String("possimus"),
        ManagedZone: "repellat",
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        Project: "architecto",
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("harum"),
    }, operations.DNSManagedZonesGetSecurity{
        Option1: &operations.DNSManagedZonesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedZone != nil {
        // handle response
    }
}
```

## DNSManagedZonesGetIamPolicy

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
    res, err := s.ManagedZones.DNSManagedZonesGetIamPolicy(ctx, operations.DNSManagedZonesGetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1GetIamPolicyRequest: &shared.GoogleIamV1GetIamPolicyRequest{
            Options: &shared.GoogleIamV1GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(976762),
            },
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        Resource: "praesentium",
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("non"),
    }, operations.DNSManagedZonesGetIamPolicySecurity{
        Option1: &operations.DNSManagedZonesGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## DNSManagedZonesList

Enumerates ManagedZones that have been created but not yet deleted.

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
    res, err := s.ManagedZones.DNSManagedZonesList(ctx, operations.DNSManagedZonesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("harum"),
        DNSName: sdk.String("cumque"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("expedita"),
        MaxResults: sdk.Int64(549237),
        OauthToken: sdk.String("eaque"),
        PageToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        Project: "aliquid",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DNSManagedZonesListSecurity{
        Option1: &operations.DNSManagedZonesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManagedZonesListResponse != nil {
        // handle response
    }
}
```

## DNSManagedZonesPatch

Applies a partial update to an existing ManagedZone.

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
    res, err := s.ManagedZones.DNSManagedZonesPatch(ctx, operations.DNSManagedZonesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ManagedZone1: &shared.ManagedZone{
            CloudLoggingConfig: &shared.ManagedZoneCloudLoggingConfig{
                EnableLogging: sdk.Bool(false),
                Kind: sdk.String("dolor"),
            },
            CreationTime: sdk.String("rerum"),
            Description: sdk.String("sed"),
            DNSName: sdk.String("accusamus"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap384sha384.ToPointer(),
                        KeyLength: sdk.Int64(792719),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("quos"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap384sha384.ToPointer(),
                        KeyLength: sdk.Int64(532326),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("corporis"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha1.ToPointer(),
                        KeyLength: sdk.Int64(75850),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("doloribus"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(869848),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("neque"),
                    },
                },
                Kind: sdk.String("pariatur"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumTransfer.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("mollitia"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("aperiam"),
                        Ipv6Address: sdk.String("non"),
                        Kind: sdk.String("voluptates"),
                    },
                },
            },
            ID: sdk.String("ad"),
            Kind: sdk.String("aliquam"),
            Labels: map[string]string{
                "quas": "consequuntur",
                "maiores": "inventore",
                "aliquid": "laudantium",
                "est": "dolor",
            },
            Name: sdk.String("Edith Runte"),
            NameServerSet: sdk.String("ducimus"),
            NameServers: []string{
                "recusandae",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("tempora"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("blanditiis"),
                    Kind: sdk.String("numquam"),
                    NetworkURL: sdk.String("sequi"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("sit"),
                        Kind: sdk.String("rerum"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("veritatis"),
                        Kind: sdk.String("tenetur"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("autem"),
                        Kind: sdk.String("quidem"),
                    },
                },
                Kind: sdk.String("totam"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("deserunt"),
                        NetworkURL: sdk.String("magni"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("nihil"),
                        NetworkURL: sdk.String("voluptas"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("animi"),
                        NetworkURL: sdk.String("commodi"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("alias"),
                        NetworkURL: sdk.String("fuga"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("aut"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("dolore"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("maxime"),
                    Kind: sdk.String("aliquam"),
                    NamespaceURL: sdk.String("iste"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPublic.ToPointer(),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        ClientOperationID: sdk.String("occaecati"),
        Fields: sdk.String("unde"),
        Key: sdk.String("illo"),
        ManagedZonePathParameter: "nihil",
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        Project: "libero",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DNSManagedZonesPatchSecurity{
        Option1: &operations.DNSManagedZonesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## DNSManagedZonesSetIamPolicy

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
    res, err := s.ManagedZones.DNSManagedZonesSetIamPolicy(ctx, operations.DNSManagedZonesSetIamPolicyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1SetIamPolicyRequest: &shared.GoogleIamV1SetIamPolicyRequest{
            Policy: &shared.GoogleIamV1Policy{
                AuditConfigs: []shared.GoogleIamV1AuditConfig{
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "beatae",
                                    "cumque",
                                    "delectus",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "corrupti",
                                    "rem",
                                    "atque",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "pariatur",
                                    "sapiente",
                                    "quo",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "minus",
                                    "porro",
                                    "id",
                                    "excepturi",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("libero"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "hic",
                                    "maxime",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "fugit",
                                    "pariatur",
                                    "eligendi",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aut",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "dolor",
                                    "voluptates",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("magni"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "voluptatem",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "eum",
                                    "reprehenderit",
                                    "voluptatum",
                                    "blanditiis",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "rerum",
                                    "deserunt",
                                    "atque",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("atque"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("est"),
                            Expression: sdk.String("enim"),
                            Location: sdk.String("rem"),
                            Title: sdk.String("Mr."),
                        },
                        Members: []string{
                            "quas",
                        },
                        Role: sdk.String("placeat"),
                    },
                },
                Etag: sdk.String("enim"),
                Version: sdk.Int(286453),
            },
            UpdateMask: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("natus"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        Resource: "doloribus",
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.DNSManagedZonesSetIamPolicySecurity{
        Option1: &operations.DNSManagedZonesSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1Policy != nil {
        // handle response
    }
}
```

## DNSManagedZonesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
    res, err := s.ManagedZones.DNSManagedZonesTestIamPermissions(ctx, operations.DNSManagedZonesTestIamPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "quis",
                "enim",
                "eum",
                "nemo",
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("odio"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        Resource: "voluptates",
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DNSManagedZonesTestIamPermissionsSecurity{
        Option1: &operations.DNSManagedZonesTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleIamV1TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## DNSManagedZonesUpdate

Updates an existing ManagedZone.

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
    res, err := s.ManagedZones.DNSManagedZonesUpdate(ctx, operations.DNSManagedZonesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ManagedZone1: &shared.ManagedZone{
            CloudLoggingConfig: &shared.ManagedZoneCloudLoggingConfig{
                EnableLogging: sdk.Bool(false),
                Kind: sdk.String("sit"),
            },
            CreationTime: sdk.String("aliquid"),
            Description: sdk.String("necessitatibus"),
            DNSName: sdk.String("sed"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha1.ToPointer(),
                        KeyLength: sdk.Int64(200190),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("laborum"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(644223),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("sunt"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256sha256.ToPointer(),
                        KeyLength: sdk.Int64(259600),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("ipsa"),
                    },
                },
                Kind: sdk.String("at"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumTransfer.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("aspernatur"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("fugit"),
                        Ipv6Address: sdk.String("fuga"),
                        Kind: sdk.String("hic"),
                    },
                },
            },
            ID: sdk.String("eaque"),
            Kind: sdk.String("dolorem"),
            Labels: map[string]string{
                "aperiam": "aspernatur",
            },
            Name: sdk.String("Bill Bins"),
            NameServerSet: sdk.String("numquam"),
            NameServers: []string{
                "nobis",
                "ex",
                "repellat",
                "quae",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("deleniti"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("expedita"),
                    Kind: sdk.String("hic"),
                    NetworkURL: sdk.String("excepturi"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("sed"),
                        Kind: sdk.String("beatae"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("similique"),
                        Kind: sdk.String("ea"),
                    },
                },
                Kind: sdk.String("animi"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("tenetur"),
                        NetworkURL: sdk.String("dignissimos"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("esse"),
                        NetworkURL: sdk.String("animi"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("laudantium"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("esse"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("eveniet"),
                    Kind: sdk.String("earum"),
                    NamespaceURL: sdk.String("velit"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPrivate.ToPointer(),
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("itaque"),
        ClientOperationID: sdk.String("dignissimos"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("explicabo"),
        ManagedZonePathParameter: "impedit",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        Project: "quis",
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("ut"),
    }, operations.DNSManagedZonesUpdateSecurity{
        Option1: &operations.DNSManagedZonesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
