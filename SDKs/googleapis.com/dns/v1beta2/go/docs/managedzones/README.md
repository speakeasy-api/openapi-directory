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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ManagedZone: &shared.ManagedZone{
            CloudLoggingConfig: &shared.ManagedZoneCloudLoggingConfig{
                EnableLogging: sdk.Bool(false),
                Kind: sdk.String("earum"),
            },
            CreationTime: sdk.String("quis"),
            Description: sdk.String("dolorem"),
            DNSName: sdk.String("omnis"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256sha256.ToPointer(),
                        KeyLength: sdk.Int64(91736),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("est"),
                    },
                },
                Kind: sdk.String("quia"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumOn.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("rem"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("provident"),
                        Ipv6Address: sdk.String("sunt"),
                        Kind: sdk.String("maiores"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("ducimus"),
                        Ipv6Address: sdk.String("dolore"),
                        Kind: sdk.String("aspernatur"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("fuga"),
                        Ipv6Address: sdk.String("at"),
                        Kind: sdk.String("unde"),
                    },
                },
            },
            ID: sdk.String("laborum"),
            Kind: sdk.String("provident"),
            Labels: map[string]string{
                "corrupti": "soluta",
                "earum": "praesentium",
                "explicabo": "odit",
                "illo": "architecto",
            },
            Name: sdk.String("Erin Frami"),
            NameServerSet: sdk.String("possimus"),
            NameServers: []string{
                "blanditiis",
                "consectetur",
                "totam",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("dignissimos"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("repellat"),
                    Kind: sdk.String("iusto"),
                    NetworkURL: sdk.String("culpa"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("cupiditate"),
                        Kind: sdk.String("maxime"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("assumenda"),
                        Kind: sdk.String("nihil"),
                    },
                },
                Kind: sdk.String("sed"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("nulla"),
                        NetworkURL: sdk.String("magni"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("modi"),
                        NetworkURL: sdk.String("voluptatum"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("dolore"),
                        NetworkURL: sdk.String("possimus"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("dolorum"),
                        NetworkURL: sdk.String("eos"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("sunt"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("quam"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("eos"),
                    Kind: sdk.String("omnis"),
                    NamespaceURL: sdk.String("reiciendis"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPublic.ToPointer(),
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        ClientOperationID: sdk.String("inventore"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        Project: "nihil",
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("maiores"),
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
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        ClientOperationID: sdk.String("id"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("quasi"),
        ManagedZone: "itaque",
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        Project: "vitae",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("deserunt"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        ClientOperationID: sdk.String("neque"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("amet"),
        ManagedZone: "labore",
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        Project: "eos",
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
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
                RequestedPolicyVersion: sdk.Int(640518),
            },
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("a"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        Resource: "iste",
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("aspernatur"),
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        DNSName: sdk.String("saepe"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("in"),
        MaxResults: sdk.Int64(99163),
        OauthToken: sdk.String("sed"),
        PageToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        Project: "perspiciatis",
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("enim"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ManagedZone1: &shared.ManagedZone{
            CloudLoggingConfig: &shared.ManagedZoneCloudLoggingConfig{
                EnableLogging: sdk.Bool(false),
                Kind: sdk.String("saepe"),
            },
            CreationTime: sdk.String("unde"),
            Description: sdk.String("reiciendis"),
            DNSName: sdk.String("quis"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(866453),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("nemo"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(253607),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("perspiciatis"),
                    },
                },
                Kind: sdk.String("accusamus"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec3.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumOff.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("aspernatur"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("laboriosam"),
                        Ipv6Address: sdk.String("accusantium"),
                        Kind: sdk.String("tempora"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("dolorem"),
                        Ipv6Address: sdk.String("expedita"),
                        Kind: sdk.String("impedit"),
                    },
                },
            },
            ID: sdk.String("architecto"),
            Kind: sdk.String("minima"),
            Labels: map[string]string{
                "vitae": "quos",
                "atque": "quisquam",
            },
            Name: sdk.String("Nettie Herzog"),
            NameServerSet: sdk.String("totam"),
            NameServers: []string{
                "at",
                "culpa",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("nihil"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("laudantium"),
                    Kind: sdk.String("dolorem"),
                    NetworkURL: sdk.String("odit"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("mollitia"),
                        Kind: sdk.String("libero"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("fugiat"),
                        Kind: sdk.String("voluptas"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("et"),
                        Kind: sdk.String("odio"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("eligendi"),
                        Kind: sdk.String("nesciunt"),
                    },
                },
                Kind: sdk.String("harum"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("pariatur"),
                        NetworkURL: sdk.String("ad"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("architecto"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("culpa"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("aliquam"),
                    Kind: sdk.String("ut"),
                    NamespaceURL: sdk.String("quidem"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPrivate.ToPointer(),
        },
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempore"),
        ClientOperationID: sdk.String("deserunt"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        ManagedZonePathParameter: "voluptate",
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        Project: "iure",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("ea"),
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
                                    "maiores",
                                    "nam",
                                    "pariatur",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("modi"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "delectus",
                                    "nemo",
                                    "at",
                                    "magnam",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                        },
                        Service: sdk.String("sed"),
                    },
                    shared.GoogleIamV1AuditConfig{
                        AuditLogConfigs: []shared.GoogleIamV1AuditLogConfig{
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "labore",
                                    "doloribus",
                                    "facilis",
                                    "minima",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "amet",
                                    "quis",
                                    "fugiat",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "nisi",
                                    "consectetur",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                        },
                        Service: sdk.String("delectus"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("repudiandae"),
                            Expression: sdk.String("facere"),
                            Location: sdk.String("distinctio"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "consectetur",
                            "nemo",
                            "provident",
                        },
                        Role: sdk.String("accusamus"),
                    },
                },
                Etag: sdk.String("minus"),
                Version: sdk.Int(773479),
            },
            UpdateMask: sdk.String("minima"),
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("vel"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        Resource: "impedit",
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("ullam"),
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
                "soluta",
            },
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("quas"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        Resource: "quaerat",
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("necessitatibus"),
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
                Kind: sdk.String("quaerat"),
            },
            CreationTime: sdk.String("magnam"),
            Description: sdk.String("voluptate"),
            DNSName: sdk.String("magni"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha512.ToPointer(),
                        KeyLength: sdk.Int64(765463),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("non"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256sha256.ToPointer(),
                        KeyLength: sdk.Int64(72677),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("nulla"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(714187),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("impedit"),
                    },
                },
                Kind: sdk.String("repudiandae"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumOff.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("nihil"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("aliquid"),
                        Ipv6Address: sdk.String("blanditiis"),
                        Kind: sdk.String("labore"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("reiciendis"),
                        Ipv6Address: sdk.String("asperiores"),
                        Kind: sdk.String("exercitationem"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("beatae"),
                        Ipv6Address: sdk.String("qui"),
                        Kind: sdk.String("laboriosam"),
                    },
                },
            },
            ID: sdk.String("temporibus"),
            Kind: sdk.String("in"),
            Labels: map[string]string{
                "nobis": "voluptatibus",
            },
            Name: sdk.String("Dr. Cesar Schumm"),
            NameServerSet: sdk.String("molestiae"),
            NameServers: []string{
                "distinctio",
                "blanditiis",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("quaerat"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("odit"),
                    Kind: sdk.String("ab"),
                    NetworkURL: sdk.String("unde"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("dolorem"),
                        Kind: sdk.String("rerum"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("ut"),
                        Kind: sdk.String("tempora"),
                    },
                },
                Kind: sdk.String("quidem"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("nesciunt"),
                        NetworkURL: sdk.String("quisquam"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("labore"),
                        NetworkURL: sdk.String("sequi"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("veritatis"),
                        NetworkURL: sdk.String("veniam"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("unde"),
                        NetworkURL: sdk.String("assumenda"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("adipisci"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("velit"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("accusamus"),
                    Kind: sdk.String("veniam"),
                    NamespaceURL: sdk.String("provident"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPublic.ToPointer(),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        ClientOperationID: sdk.String("accusantium"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("illo"),
        ManagedZonePathParameter: "amet",
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        Project: "quos",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("culpa"),
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
