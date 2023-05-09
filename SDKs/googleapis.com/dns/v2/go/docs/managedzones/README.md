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
                Kind: sdk.String("adipisci"),
            },
            CreationTime: sdk.String("libero"),
            Description: sdk.String("in"),
            DNSName: sdk.String("minima"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256Sha256.ToPointer(),
                        KeyLength: sdk.Int64(68880),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("hic"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(786954),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("ducimus"),
                    },
                },
                Kind: sdk.String("fuga"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumOff.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("qui"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("incidunt"),
                        Ipv6Address: sdk.String("adipisci"),
                        Kind: sdk.String("praesentium"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("exercitationem"),
                        Ipv6Address: sdk.String("expedita"),
                        Kind: sdk.String("facilis"),
                    },
                },
            },
            ID: sdk.String("impedit"),
            Kind: sdk.String("sit"),
            Labels: map[string]string{
                "culpa": "consequuntur",
                "amet": "deserunt",
            },
            Name: sdk.String("Sally Schmidt"),
            NameServerSet: sdk.String("quisquam"),
            NameServers: []string{
                "doloribus",
                "assumenda",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("officiis"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("architecto"),
                    Kind: sdk.String("alias"),
                    NetworkURL: sdk.String("culpa"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("nobis"),
                        Kind: sdk.String("necessitatibus"),
                    },
                },
                Kind: sdk.String("quia"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("vel"),
                        NetworkURL: sdk.String("perspiciatis"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("debitis"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("ullam"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("architecto"),
                    Kind: sdk.String("accusantium"),
                    NamespaceURL: sdk.String("perferendis"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPublic.ToPointer(),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        ClientOperationID: sdk.String("quibusdam"),
        Fields: sdk.String("quod"),
        Key: sdk.String("nemo"),
        Location: "recusandae",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        Project: "magnam",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("sed"),
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
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        ClientOperationID: sdk.String("doloribus"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("quidem"),
        Location: "itaque",
        ManagedZone: "laboriosam",
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        Project: "modi",
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("cum"),
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
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        ClientOperationID: sdk.String("recusandae"),
        Fields: sdk.String("quod"),
        Key: sdk.String("id"),
        Location: "saepe",
        ManagedZone: "autem",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        Project: "nesciunt",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("illum"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleIamV1GetIamPolicyRequest: &shared.GoogleIamV1GetIamPolicyRequest{
            Options: &shared.GoogleIamV1GetPolicyOptions{
                RequestedPolicyVersion: sdk.Int(247618),
            },
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        Resource: "laborum",
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("laborum"),
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
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        DNSName: sdk.String("suscipit"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("molestias"),
        Location: "laborum",
        MaxResults: sdk.Int64(668218),
        OauthToken: sdk.String("occaecati"),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        Project: "quo",
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("aliquid"),
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
                Kind: sdk.String("quaerat"),
            },
            CreationTime: sdk.String("eligendi"),
            Description: sdk.String("hic"),
            DNSName: sdk.String("nostrum"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256Sha256.ToPointer(),
                        KeyLength: sdk.Int64(860311),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("mollitia"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumRsasha256.ToPointer(),
                        KeyLength: sdk.Int64(344289),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("corrupti"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256Sha256.ToPointer(),
                        KeyLength: sdk.Int64(815225),
                        KeyType: shared.DNSKeySpecKeyTypeEnumZoneSigning.ToPointer(),
                        Kind: sdk.String("quasi"),
                    },
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256Sha256.ToPointer(),
                        KeyLength: sdk.Int64(801075),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("doloremque"),
                    },
                },
                Kind: sdk.String("voluptatem"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec3.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumTransfer.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("maxime"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("architecto"),
                        Ipv6Address: sdk.String("similique"),
                        Kind: sdk.String("porro"),
                    },
                },
            },
            ID: sdk.String("blanditiis"),
            Kind: sdk.String("quae"),
            Labels: map[string]string{
                "officiis": "sed",
            },
            Name: sdk.String("Edmund Bednar"),
            NameServerSet: sdk.String("maiores"),
            NameServers: []string{
                "maiores",
                "alias",
                "asperiores",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("rem"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("dicta"),
                    Kind: sdk.String("suscipit"),
                    NetworkURL: sdk.String("earum"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("velit"),
                        Kind: sdk.String("eius"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("esse"),
                        Kind: sdk.String("in"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("eligendi"),
                        Kind: sdk.String("quasi"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("neque"),
                        Kind: sdk.String("vero"),
                    },
                },
                Kind: sdk.String("excepturi"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("qui"),
                        NetworkURL: sdk.String("impedit"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("beatae"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("incidunt"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("dicta"),
                    Kind: sdk.String("odit"),
                    NamespaceURL: sdk.String("corporis"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPrivate.ToPointer(),
        },
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        ClientOperationID: sdk.String("accusantium"),
        Fields: sdk.String("id"),
        Key: sdk.String("laboriosam"),
        Location: "ex",
        ManagedZonePathParameter: "quas",
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        Project: "ullam",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("incidunt"),
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
                                    "omnis",
                                    "sed",
                                    "nesciunt",
                                    "maxime",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumAdminRead.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "aliquam",
                                    "excepturi",
                                    "maiores",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumDataWrite.ToPointer(),
                            },
                            shared.GoogleIamV1AuditLogConfig{
                                ExemptedMembers: []string{
                                    "reiciendis",
                                },
                                LogType: shared.GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified.ToPointer(),
                            },
                        },
                        Service: sdk.String("nemo"),
                    },
                },
                Bindings: []shared.GoogleIamV1Binding{
                    shared.GoogleIamV1Binding{
                        Condition: &shared.Expr{
                            Description: sdk.String("quisquam"),
                            Expression: sdk.String("tenetur"),
                            Location: sdk.String("quas"),
                            Title: sdk.String("Ms."),
                        },
                        Members: []string{
                            "asperiores",
                            "a",
                        },
                        Role: sdk.String("nobis"),
                    },
                },
                Etag: sdk.String("perspiciatis"),
                Version: sdk.Int(34245),
            },
            UpdateMask: sdk.String("dicta"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("porro"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        Resource: "voluptates",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("eius"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleIamV1TestIamPermissionsRequest: &shared.GoogleIamV1TestIamPermissionsRequest{
            Permissions: []string{
                "asperiores",
                "esse",
                "blanditiis",
                "sint",
            },
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        Resource: "corporis",
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("officiis"),
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
                Kind: sdk.String("officia"),
            },
            CreationTime: sdk.String("saepe"),
            Description: sdk.String("eum"),
            DNSName: sdk.String("repudiandae"),
            DnssecConfig: &shared.ManagedZoneDNSSecConfig{
                DefaultKeySpecs: []shared.DNSKeySpec{
                    shared.DNSKeySpec{
                        Algorithm: shared.DNSKeySpecAlgorithmEnumEcdsap256Sha256.ToPointer(),
                        KeyLength: sdk.Int64(770128),
                        KeyType: shared.DNSKeySpecKeyTypeEnumKeySigning.ToPointer(),
                        Kind: sdk.String("blanditiis"),
                    },
                },
                Kind: sdk.String("eius"),
                NonExistence: shared.ManagedZoneDNSSecConfigNonExistenceEnumNsec3.ToPointer(),
                State: shared.ManagedZoneDNSSecConfigStateEnumOff.ToPointer(),
            },
            ForwardingConfig: &shared.ManagedZoneForwardingConfig{
                Kind: sdk.String("nobis"),
                TargetNameServers: []shared.ManagedZoneForwardingConfigNameServerTarget{
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("quia"),
                        Ipv6Address: sdk.String("magnam"),
                        Kind: sdk.String("reprehenderit"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumPrivate.ToPointer(),
                        Ipv4Address: sdk.String("quos"),
                        Ipv6Address: sdk.String("corrupti"),
                        Kind: sdk.String("amet"),
                    },
                    shared.ManagedZoneForwardingConfigNameServerTarget{
                        ForwardingPath: shared.ManagedZoneForwardingConfigNameServerTargetForwardingPathEnumDefault.ToPointer(),
                        Ipv4Address: sdk.String("amet"),
                        Ipv6Address: sdk.String("laborum"),
                        Kind: sdk.String("modi"),
                    },
                },
            },
            ID: sdk.String("perferendis"),
            Kind: sdk.String("necessitatibus"),
            Labels: map[string]string{
                "molestias": "dolore",
            },
            Name: sdk.String("Ebony Doyle"),
            NameServerSet: sdk.String("veniam"),
            NameServers: []string{
                "eaque",
                "exercitationem",
            },
            PeeringConfig: &shared.ManagedZonePeeringConfig{
                Kind: sdk.String("veniam"),
                TargetNetwork: &shared.ManagedZonePeeringConfigTargetNetwork{
                    DeactivateTime: sdk.String("nihil"),
                    Kind: sdk.String("ad"),
                    NetworkURL: sdk.String("nisi"),
                },
            },
            PrivateVisibilityConfig: &shared.ManagedZonePrivateVisibilityConfig{
                GkeClusters: []shared.ManagedZonePrivateVisibilityConfigGKECluster{
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("quis"),
                        Kind: sdk.String("quibusdam"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("nemo"),
                        Kind: sdk.String("suscipit"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("pariatur"),
                        Kind: sdk.String("sit"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigGKECluster{
                        GkeClusterName: sdk.String("quidem"),
                        Kind: sdk.String("repellendus"),
                    },
                },
                Kind: sdk.String("perferendis"),
                Networks: []shared.ManagedZonePrivateVisibilityConfigNetwork{
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("sapiente"),
                        NetworkURL: sdk.String("sed"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("possimus"),
                        NetworkURL: sdk.String("repellat"),
                    },
                    shared.ManagedZonePrivateVisibilityConfigNetwork{
                        Kind: sdk.String("repudiandae"),
                        NetworkURL: sdk.String("architecto"),
                    },
                },
            },
            ReverseLookupConfig: &shared.ManagedZoneReverseLookupConfig{
                Kind: sdk.String("adipisci"),
            },
            ServiceDirectoryConfig: &shared.ManagedZoneServiceDirectoryConfig{
                Kind: sdk.String("pariatur"),
                Namespace: &shared.ManagedZoneServiceDirectoryConfigNamespace{
                    DeletionTime: sdk.String("harum"),
                    Kind: sdk.String("dolore"),
                    NamespaceURL: sdk.String("voluptatibus"),
                },
            },
            Visibility: shared.ManagedZoneVisibilityEnumPublic.ToPointer(),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        ClientOperationID: sdk.String("dolorum"),
        Fields: sdk.String("velit"),
        Key: sdk.String("earum"),
        Location: "praesentium",
        ManagedZonePathParameter: "error",
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        Project: "quasi",
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("harum"),
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
