# ResourceRecordSets

### Available Operations

* [DNSResourceRecordSetsCreate](#dnsresourcerecordsetscreate) - Creates a new ResourceRecordSet.
* [DNSResourceRecordSetsDelete](#dnsresourcerecordsetsdelete) - Deletes a previously created ResourceRecordSet.
* [DNSResourceRecordSetsGet](#dnsresourcerecordsetsget) - Fetches the representation of an existing ResourceRecordSet.
* [DNSResourceRecordSetsList](#dnsresourcerecordsetslist) - Enumerates ResourceRecordSets that you have created but not yet deleted.
* [DNSResourceRecordSetsPatch](#dnsresourcerecordsetspatch) - Applies a partial update to an existing ResourceRecordSet.

## DNSResourceRecordSetsCreate

Creates a new ResourceRecordSet.

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
    res, err := s.ResourceRecordSets.DNSResourceRecordSetsCreate(ctx, operations.DNSResourceRecordSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResourceRecordSet: &shared.ResourceRecordSet{
            Kind: sdk.String("veritatis"),
            Name: sdk.String("Dexter Terry DDS"),
            RoutingPolicy: &shared.RRSetRoutingPolicy{
                Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("distinctio"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("cum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("saepe"),
                                        Port: sdk.String("earum"),
                                        Project: sdk.String("quod"),
                                        Region: sdk.String("nihil"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quaerat"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("ducimus"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("rerum"),
                                        Port: sdk.String("deserunt"),
                                        Project: sdk.String("odit"),
                                        Region: sdk.String("ad"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sequi"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("iusto"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("magnam"),
                                        Port: sdk.String("odio"),
                                        Project: sdk.String("nulla"),
                                        Region: sdk.String("impedit"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("cupiditate"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("exercitationem"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("illum"),
                                        Port: sdk.String("fugit"),
                                        Project: sdk.String("maxime"),
                                        Region: sdk.String("dolorum"),
                                    },
                                },
                            },
                            Kind: sdk.String("repellat"),
                            Location: sdk.String("nostrum"),
                            Rrdatas: []string{
                                "quibusdam",
                                "commodi",
                                "esse",
                                "explicabo",
                            },
                            SignatureRrdatas: []string{
                                "temporibus",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ipsa"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("exercitationem"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("repudiandae"),
                                        Port: sdk.String("aspernatur"),
                                        Project: sdk.String("sapiente"),
                                        Region: sdk.String("neque"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("officia"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("harum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("doloremque"),
                                        Port: sdk.String("perferendis"),
                                        Project: sdk.String("laudantium"),
                                        Region: sdk.String("iusto"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("corrupti"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("quis"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("ab"),
                                        Port: sdk.String("quaerat"),
                                        Project: sdk.String("amet"),
                                        Region: sdk.String("sapiente"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("corporis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("iure"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("provident"),
                                        Port: sdk.String("laudantium"),
                                        Project: sdk.String("nam"),
                                        Region: sdk.String("nemo"),
                                    },
                                },
                            },
                            Kind: sdk.String("enim"),
                            Location: sdk.String("ipsam"),
                            Rrdatas: []string{
                                "tempora",
                                "perferendis",
                            },
                            SignatureRrdatas: []string{
                                "doloremque",
                                "fugiat",
                                "numquam",
                            },
                        },
                    },
                    Kind: sdk.String("doloremque"),
                },
                Kind: sdk.String("cum"),
                PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                    BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                        EnableFencing: sdk.Bool(false),
                        Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("porro"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("nisi"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("soluta"),
                                            Port: sdk.String("fugiat"),
                                            Project: sdk.String("laboriosam"),
                                            Region: sdk.String("nam"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("enim"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("consectetur"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("maxime"),
                                            Port: sdk.String("cupiditate"),
                                            Project: sdk.String("voluptatem"),
                                            Region: sdk.String("provident"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("adipisci"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("magnam"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("omnis"),
                                            Port: sdk.String("explicabo"),
                                            Project: sdk.String("vel"),
                                            Region: sdk.String("cum"),
                                        },
                                    },
                                },
                                Kind: sdk.String("id"),
                                Location: sdk.String("possimus"),
                                Rrdatas: []string{
                                    "ipsam",
                                },
                                SignatureRrdatas: []string{
                                    "sequi",
                                    "voluptatum",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("error"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("tempora"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("eius"),
                                            Port: sdk.String("expedita"),
                                            Project: sdk.String("aperiam"),
                                            Region: sdk.String("voluptates"),
                                        },
                                    },
                                },
                                Kind: sdk.String("possimus"),
                                Location: sdk.String("fugit"),
                                Rrdatas: []string{
                                    "repudiandae",
                                },
                                SignatureRrdatas: []string{
                                    "ea",
                                    "eos",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("blanditiis"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("maiores"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("autem"),
                                            Port: sdk.String("nesciunt"),
                                            Project: sdk.String("cupiditate"),
                                            Region: sdk.String("animi"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("provident"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("ipsa"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("nam"),
                                            Port: sdk.String("assumenda"),
                                            Project: sdk.String("quo"),
                                            Region: sdk.String("fuga"),
                                        },
                                    },
                                },
                                Kind: sdk.String("tempore"),
                                Location: sdk.String("commodi"),
                                Rrdatas: []string{
                                    "suscipit",
                                },
                                SignatureRrdatas: []string{
                                    "nisi",
                                    "aliquid",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("laboriosam"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("ab"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("quisquam"),
                                            Port: sdk.String("eaque"),
                                            Project: sdk.String("alias"),
                                            Region: sdk.String("qui"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consequuntur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("quidem"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("amet"),
                                            Port: sdk.String("exercitationem"),
                                            Project: sdk.String("illum"),
                                            Region: sdk.String("praesentium"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("unde"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("eligendi"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("amet"),
                                            Port: sdk.String("debitis"),
                                            Project: sdk.String("nobis"),
                                            Region: sdk.String("asperiores"),
                                        },
                                    },
                                },
                                Kind: sdk.String("temporibus"),
                                Location: sdk.String("id"),
                                Rrdatas: []string{
                                    "quibusdam",
                                    "sit",
                                    "quo",
                                },
                                SignatureRrdatas: []string{
                                    "aliquam",
                                    "provident",
                                },
                            },
                        },
                        Kind: sdk.String("vero"),
                    },
                    Kind: sdk.String("earum"),
                    PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("ipsum"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("doloremque"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("perspiciatis"),
                                Port: sdk.String("quam"),
                                Project: sdk.String("atque"),
                                Region: sdk.String("officia"),
                            },
                        },
                    },
                    TrickleTraffic: sdk.Float64(4064.93),
                },
                Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("laborum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("quod"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("qui"),
                                        Port: sdk.String("accusantium"),
                                        Project: sdk.String("commodi"),
                                        Region: sdk.String("atque"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("totam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("voluptate"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("quod"),
                                        Port: sdk.String("vitae"),
                                        Project: sdk.String("sapiente"),
                                        Region: sdk.String("reiciendis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quod"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("inventore"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("maxime"),
                                        Port: sdk.String("fuga"),
                                        Project: sdk.String("ab"),
                                        Region: sdk.String("ex"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("consectetur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("sed"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("sequi"),
                                        Port: sdk.String("eligendi"),
                                        Project: sdk.String("voluptatum"),
                                        Region: sdk.String("perferendis"),
                                    },
                                },
                            },
                            Kind: sdk.String("laborum"),
                            Rrdatas: []string{
                                "nihil",
                                "tenetur",
                                "sapiente",
                            },
                            SignatureRrdatas: []string{
                                "adipisci",
                            },
                            Weight: sdk.Float64(2502.98),
                        },
                    },
                    Kind: sdk.String("optio"),
                },
            },
            Rrdatas: []string{
                "at",
                "tenetur",
                "molestias",
                "ipsam",
            },
            SignatureRrdatas: []string{
                "laborum",
                "perspiciatis",
            },
            TTL: sdk.Int(915647),
            Type: sdk.String("eum"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        ClientOperationID: sdk.String("commodi"),
        Fields: sdk.String("porro"),
        Key: sdk.String("aliquid"),
        ManagedZone: "mollitia",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        Project: "explicabo",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DNSResourceRecordSetsCreateSecurity{
        Option1: &operations.DNSResourceRecordSetsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceRecordSet != nil {
        // handle response
    }
}
```

## DNSResourceRecordSetsDelete

Deletes a previously created ResourceRecordSet.

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
    res, err := s.ResourceRecordSets.DNSResourceRecordSetsDelete(ctx, operations.DNSResourceRecordSetsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        ClientOperationID: sdk.String("unde"),
        Fields: sdk.String("ut"),
        Key: sdk.String("facere"),
        ManagedZone: "voluptas",
        Name: "Clay Schaefer",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        Project: "provident",
        QuotaUser: sdk.String("dolor"),
        Type: "sint",
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.DNSResourceRecordSetsDeleteSecurity{
        Option1: &operations.DNSResourceRecordSetsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceRecordSetsDeleteResponse != nil {
        // handle response
    }
}
```

## DNSResourceRecordSetsGet

Fetches the representation of an existing ResourceRecordSet.

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
    res, err := s.ResourceRecordSets.DNSResourceRecordSetsGet(ctx, operations.DNSResourceRecordSetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("autem"),
        ClientOperationID: sdk.String("assumenda"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("fugiat"),
        ManagedZone: "doloremque",
        Name: "Linda Frami",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        Project: "ratione",
        QuotaUser: sdk.String("quas"),
        Type: "maxime",
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DNSResourceRecordSetsGetSecurity{
        Option1: &operations.DNSResourceRecordSetsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceRecordSet != nil {
        // handle response
    }
}
```

## DNSResourceRecordSetsList

Enumerates ResourceRecordSets that you have created but not yet deleted.

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
    res, err := s.ResourceRecordSets.DNSResourceRecordSetsList(ctx, operations.DNSResourceRecordSetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("est"),
        Key: sdk.String("fugit"),
        ManagedZone: "veritatis",
        MaxResults: sdk.Int64(899652),
        Name: sdk.String("Keith Hills"),
        OauthToken: sdk.String("quidem"),
        PageToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        Project: "beatae",
        QuotaUser: sdk.String("sunt"),
        Type: sdk.String("molestias"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("autem"),
    }, operations.DNSResourceRecordSetsListSecurity{
        Option1: &operations.DNSResourceRecordSetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceRecordSetsListResponse != nil {
        // handle response
    }
}
```

## DNSResourceRecordSetsPatch

Applies a partial update to an existing ResourceRecordSet.

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
    res, err := s.ResourceRecordSets.DNSResourceRecordSetsPatch(ctx, operations.DNSResourceRecordSetsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResourceRecordSet: &shared.ResourceRecordSet{
            Kind: sdk.String("libero"),
            Name: sdk.String("Alonzo Erdman"),
            RoutingPolicy: &shared.RRSetRoutingPolicy{
                Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptatem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("quaerat"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("laudantium"),
                                        Port: sdk.String("repellendus"),
                                        Project: sdk.String("commodi"),
                                        Region: sdk.String("quibusdam"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("consectetur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("quaerat"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("tenetur"),
                                        Port: sdk.String("assumenda"),
                                        Project: sdk.String("dolore"),
                                        Region: sdk.String("enim"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ullam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("alias"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("quibusdam"),
                                        Port: sdk.String("dicta"),
                                        Project: sdk.String("quia"),
                                        Region: sdk.String("commodi"),
                                    },
                                },
                            },
                            Kind: sdk.String("neque"),
                            Location: sdk.String("quibusdam"),
                            Rrdatas: []string{
                                "rem",
                                "officiis",
                            },
                            SignatureRrdatas: []string{
                                "neque",
                                "corporis",
                                "quod",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("placeat"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("recusandae"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("dicta"),
                                        Port: sdk.String("sapiente"),
                                        Project: sdk.String("ipsum"),
                                        Region: sdk.String("consequatur"),
                                    },
                                },
                            },
                            Kind: sdk.String("soluta"),
                            Location: sdk.String("necessitatibus"),
                            Rrdatas: []string{
                                "recusandae",
                            },
                            SignatureRrdatas: []string{
                                "adipisci",
                                "magni",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("dolores"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("iusto"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("beatae"),
                                        Port: sdk.String("aliquid"),
                                        Project: sdk.String("ad"),
                                        Region: sdk.String("voluptate"),
                                    },
                                },
                            },
                            Kind: sdk.String("vel"),
                            Location: sdk.String("minima"),
                            Rrdatas: []string{
                                "vel",
                            },
                            SignatureRrdatas: []string{
                                "quaerat",
                                "quasi",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("dignissimos"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("assumenda"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("facere"),
                                        Port: sdk.String("sed"),
                                        Project: sdk.String("inventore"),
                                        Region: sdk.String("voluptatibus"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("unde"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("repellendus"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("adipisci"),
                                        Port: sdk.String("doloremque"),
                                        Project: sdk.String("optio"),
                                        Region: sdk.String("tempora"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("debitis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("maxime"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("beatae"),
                                        Port: sdk.String("id"),
                                        Project: sdk.String("consequatur"),
                                        Region: sdk.String("quos"),
                                    },
                                },
                            },
                            Kind: sdk.String("ratione"),
                            Location: sdk.String("iure"),
                            Rrdatas: []string{
                                "eos",
                                "natus",
                            },
                            SignatureRrdatas: []string{
                                "suscipit",
                            },
                        },
                    },
                    Kind: sdk.String("laudantium"),
                },
                Kind: sdk.String("facilis"),
                PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                    BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                        EnableFencing: sdk.Bool(false),
                        Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("aut"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("officia"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("corporis"),
                                            Port: sdk.String("accusamus"),
                                            Project: sdk.String("iusto"),
                                            Region: sdk.String("sapiente"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("esse"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("quidem"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("praesentium"),
                                            Port: sdk.String("tempora"),
                                            Project: sdk.String("ipsam"),
                                            Region: sdk.String("officiis"),
                                        },
                                    },
                                },
                                Kind: sdk.String("sequi"),
                                Location: sdk.String("magni"),
                                Rrdatas: []string{
                                    "est",
                                },
                                SignatureRrdatas: []string{
                                    "veritatis",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("voluptatibus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("rerum"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("quibusdam"),
                                            Port: sdk.String("earum"),
                                            Project: sdk.String("excepturi"),
                                            Region: sdk.String("numquam"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("molestiae"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("error"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("voluptatum"),
                                            Port: sdk.String("aliquid"),
                                            Project: sdk.String("nihil"),
                                            Region: sdk.String("facilis"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("optio"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("eos"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("dolores"),
                                            Port: sdk.String("aliquid"),
                                            Project: sdk.String("eum"),
                                            Region: sdk.String("vel"),
                                        },
                                    },
                                },
                                Kind: sdk.String("ad"),
                                Location: sdk.String("quos"),
                                Rrdatas: []string{
                                    "suscipit",
                                },
                                SignatureRrdatas: []string{
                                    "fugiat",
                                    "impedit",
                                    "culpa",
                                    "atque",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("maiores"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("illo"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("cumque"),
                                            Port: sdk.String("expedita"),
                                            Project: sdk.String("modi"),
                                            Region: sdk.String("cumque"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("ipsam"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("ipsum"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("quisquam"),
                                            Port: sdk.String("quasi"),
                                            Project: sdk.String("fugit"),
                                            Region: sdk.String("quo"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("temporibus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("id"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("ipsa"),
                                            Port: sdk.String("accusamus"),
                                            Project: sdk.String("placeat"),
                                            Region: sdk.String("quam"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("similique"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("saepe"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("nobis"),
                                            Port: sdk.String("at"),
                                            Project: sdk.String("molestias"),
                                            Region: sdk.String("aut"),
                                        },
                                    },
                                },
                                Kind: sdk.String("temporibus"),
                                Location: sdk.String("tenetur"),
                                Rrdatas: []string{
                                    "numquam",
                                    "corrupti",
                                },
                                SignatureRrdatas: []string{
                                    "dolore",
                                    "esse",
                                    "reiciendis",
                                },
                            },
                        },
                        Kind: sdk.String("iste"),
                    },
                    Kind: sdk.String("amet"),
                    PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("aut"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                Kind: sdk.String("minima"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                NetworkURL: sdk.String("blanditiis"),
                                Port: sdk.String("quas"),
                                Project: sdk.String("voluptatem"),
                                Region: sdk.String("provident"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("quas"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("vero"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                NetworkURL: sdk.String("facilis"),
                                Port: sdk.String("maiores"),
                                Project: sdk.String("error"),
                                Region: sdk.String("recusandae"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("a"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("sapiente"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                NetworkURL: sdk.String("assumenda"),
                                Port: sdk.String("repellendus"),
                                Project: sdk.String("omnis"),
                                Region: sdk.String("delectus"),
                            },
                        },
                    },
                    TrickleTraffic: sdk.Float64(4877.65),
                },
                Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("similique"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("modi"),
                                        Port: sdk.String("facere"),
                                        Project: sdk.String("neque"),
                                        Region: sdk.String("quis"),
                                    },
                                },
                            },
                            Kind: sdk.String("in"),
                            Rrdatas: []string{
                                "non",
                            },
                            SignatureRrdatas: []string{
                                "fugiat",
                                "soluta",
                                "ipsa",
                                "reiciendis",
                            },
                            Weight: sdk.Float64(2891.53),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("eos"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("quasi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("praesentium"),
                                        Port: sdk.String("iusto"),
                                        Project: sdk.String("fugiat"),
                                        Region: sdk.String("enim"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("iure"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("modi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("accusamus"),
                                        Port: sdk.String("nulla"),
                                        Project: sdk.String("repudiandae"),
                                        Region: sdk.String("quibusdam"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("praesentium"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("animi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("quae"),
                                        Port: sdk.String("eum"),
                                        Project: sdk.String("nostrum"),
                                        Region: sdk.String("eveniet"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("laboriosam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("blanditiis"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("illum"),
                                        Port: sdk.String("reiciendis"),
                                        Project: sdk.String("placeat"),
                                        Region: sdk.String("dolores"),
                                    },
                                },
                            },
                            Kind: sdk.String("consequatur"),
                            Rrdatas: []string{
                                "quia",
                            },
                            SignatureRrdatas: []string{
                                "voluptas",
                                "quo",
                                "laudantium",
                            },
                            Weight: sdk.Float64(4905.49),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("omnis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("dolorem"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("molestiae"),
                                        Port: sdk.String("debitis"),
                                        Project: sdk.String("vitae"),
                                        Region: sdk.String("dolor"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ad"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("ut"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("reprehenderit"),
                                        Port: sdk.String("deserunt"),
                                        Project: sdk.String("itaque"),
                                        Region: sdk.String("et"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("eos"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("ex"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("natus"),
                                        Port: sdk.String("vitae"),
                                        Project: sdk.String("tenetur"),
                                        Region: sdk.String("laudantium"),
                                    },
                                },
                            },
                            Kind: sdk.String("aspernatur"),
                            Rrdatas: []string{
                                "repudiandae",
                                "dicta",
                                "inventore",
                                "ullam",
                            },
                            SignatureRrdatas: []string{
                                "inventore",
                                "voluptate",
                            },
                            Weight: sdk.Float64(1514.97),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("eaque"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("amet"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("voluptate"),
                                        Port: sdk.String("pariatur"),
                                        Project: sdk.String("minus"),
                                        Region: sdk.String("a"),
                                    },
                                },
                            },
                            Kind: sdk.String("fuga"),
                            Rrdatas: []string{
                                "cupiditate",
                                "at",
                                "doloribus",
                            },
                            SignatureRrdatas: []string{
                                "quam",
                                "exercitationem",
                                "voluptates",
                            },
                            Weight: sdk.Float64(1941.94),
                        },
                    },
                    Kind: sdk.String("quis"),
                },
            },
            Rrdatas: []string{
                "vel",
                "rem",
            },
            SignatureRrdatas: []string{
                "aperiam",
                "perspiciatis",
            },
            TTL: sdk.Int(145841),
            Type: sdk.String("itaque"),
        },
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolor"),
        ClientOperationID: sdk.String("repellendus"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("minus"),
        ManagedZone: "minima",
        Name: "Dr. Jack Buckridge",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        Project: "dicta",
        QuotaUser: sdk.String("voluptatem"),
        Type: "odit",
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.DNSResourceRecordSetsPatchSecurity{
        Option1: &operations.DNSResourceRecordSetsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceRecordSet != nil {
        // handle response
    }
}
```
