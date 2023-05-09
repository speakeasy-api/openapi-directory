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
            Kind: sdk.String("praesentium"),
            Name: sdk.String("Miss Alejandro Weimann Jr."),
            RoutingPolicy: &shared.RRSetRoutingPolicy{
                Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("saepe"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("aspernatur"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("illum"),
                                        Port: sdk.String("veniam"),
                                        Project: sdk.String("exercitationem"),
                                        Region: sdk.String("quod"),
                                    },
                                },
                            },
                            Kind: sdk.String("quod"),
                            Location: sdk.String("alias"),
                            Rrdatas: []string{
                                "molestias",
                                "modi",
                            },
                            SignatureRrdatas: []string{
                                "quasi",
                                "laudantium",
                                "ut",
                            },
                        },
                    },
                    Kind: sdk.String("possimus"),
                },
                GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("facere"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("voluptate"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("reiciendis"),
                                        Port: sdk.String("cumque"),
                                        Project: sdk.String("atque"),
                                        Region: sdk.String("explicabo"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sit"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("commodi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("harum"),
                                        Port: sdk.String("aut"),
                                        Project: sdk.String("consectetur"),
                                        Region: sdk.String("in"),
                                    },
                                },
                            },
                            Kind: sdk.String("rerum"),
                            Location: sdk.String("distinctio"),
                            Rrdatas: []string{
                                "saepe",
                                "sit",
                                "optio",
                            },
                            SignatureRrdatas: []string{
                                "corrupti",
                                "quas",
                                "ullam",
                                "veritatis",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("molestiae"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("labore"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("accusamus"),
                                        Port: sdk.String("consequatur"),
                                        Project: sdk.String("ut"),
                                        Region: sdk.String("laborum"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("hic"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("corrupti"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("ad"),
                                        Port: sdk.String("quibusdam"),
                                        Project: sdk.String("facere"),
                                        Region: sdk.String("pariatur"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quidem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("commodi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("similique"),
                                        Port: sdk.String("quasi"),
                                        Project: sdk.String("quo"),
                                        Region: sdk.String("voluptatibus"),
                                    },
                                },
                            },
                            Kind: sdk.String("illum"),
                            Location: sdk.String("ea"),
                            Rrdatas: []string{
                                "corrupti",
                                "magni",
                                "blanditiis",
                                "assumenda",
                            },
                            SignatureRrdatas: []string{
                                "ipsa",
                                "inventore",
                                "nesciunt",
                            },
                        },
                    },
                    Kind: sdk.String("et"),
                },
                Kind: sdk.String("error"),
                PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                    BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                        EnableFencing: sdk.Bool(false),
                        Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("qui"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("ex"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("aliquid"),
                                            Port: sdk.String("eum"),
                                            Project: sdk.String("quaerat"),
                                            Region: sdk.String("enim"),
                                        },
                                    },
                                },
                                Kind: sdk.String("cumque"),
                                Location: sdk.String("ab"),
                                Rrdatas: []string{
                                    "blanditiis",
                                    "et",
                                    "delectus",
                                    "explicabo",
                                },
                                SignatureRrdatas: []string{
                                    "perferendis",
                                    "magnam",
                                    "aspernatur",
                                },
                            },
                        },
                        Kind: sdk.String("sapiente"),
                    },
                    Kind: sdk.String("nemo"),
                    PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("iste"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                Kind: sdk.String("iusto"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                NetworkURL: sdk.String("reiciendis"),
                                Port: sdk.String("a"),
                                Project: sdk.String("consequatur"),
                                Region: sdk.String("voluptates"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("dolorum"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("eos"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("vel"),
                                Port: sdk.String("placeat"),
                                Project: sdk.String("libero"),
                                Region: sdk.String("saepe"),
                            },
                        },
                    },
                    TrickleTraffic: sdk.Float64(577.19),
                },
                Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("harum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("ab"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("dolor"),
                                        Port: sdk.String("officiis"),
                                        Project: sdk.String("sed"),
                                        Region: sdk.String("quam"),
                                    },
                                },
                            },
                            Kind: sdk.String("unde"),
                            Rrdatas: []string{
                                "sequi",
                                "libero",
                                "ipsa",
                            },
                            SignatureRrdatas: []string{
                                "aliquam",
                                "vero",
                                "dolorum",
                            },
                            Weight: sdk.Float64(6090.36),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("consequuntur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("quam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("eaque"),
                                        Port: sdk.String("incidunt"),
                                        Project: sdk.String("asperiores"),
                                        Region: sdk.String("eius"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ipsa"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("incidunt"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("laborum"),
                                        Port: sdk.String("in"),
                                        Project: sdk.String("numquam"),
                                        Region: sdk.String("quia"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("repellendus"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("ut"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("cupiditate"),
                                        Port: sdk.String("nisi"),
                                        Project: sdk.String("placeat"),
                                        Region: sdk.String("tempore"),
                                    },
                                },
                            },
                            Kind: sdk.String("facere"),
                            Rrdatas: []string{
                                "debitis",
                                "impedit",
                                "reiciendis",
                                "ex",
                            },
                            SignatureRrdatas: []string{
                                "provident",
                                "provident",
                                "soluta",
                            },
                            Weight: sdk.Float64(8038),
                        },
                    },
                    Kind: sdk.String("commodi"),
                },
                WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("nisi"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("eveniet"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("asperiores"),
                                        Port: sdk.String("temporibus"),
                                        Project: sdk.String("delectus"),
                                        Region: sdk.String("enim"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ipsam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("dolores"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("labore"),
                                        Port: sdk.String("porro"),
                                        Project: sdk.String("eaque"),
                                        Region: sdk.String("ea"),
                                    },
                                },
                            },
                            Kind: sdk.String("consequatur"),
                            Rrdatas: []string{
                                "accusantium",
                                "ea",
                                "laborum",
                            },
                            SignatureRrdatas: []string{
                                "fugit",
                            },
                            Weight: sdk.Float64(5505.79),
                        },
                    },
                    Kind: sdk.String("molestiae"),
                },
            },
            Rrdatas: []string{
                "autem",
                "numquam",
            },
            SignatureRrdatas: []string{
                "debitis",
                "earum",
                "suscipit",
                "assumenda",
            },
            TTL: sdk.Int(39126),
            Type: sdk.String("porro"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        ClientOperationID: sdk.String("itaque"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("excepturi"),
        ManagedZone: "quod",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        Project: "nesciunt",
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("eum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        ClientOperationID: sdk.String("illo"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("ipsa"),
        ManagedZone: "occaecati",
        Name: "Nelson Walker",
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        Project: "quibusdam",
        QuotaUser: sdk.String("adipisci"),
        Type: "minus",
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("id"),
    }, operations.DNSResourceRecordSetsDeleteSecurity{
        Option1: &operations.DNSResourceRecordSetsDeleteSecurityOption1{
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
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        ClientOperationID: sdk.String("magni"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("fugit"),
        ManagedZone: "quisquam",
        Name: "Alison Kertzmann",
        OauthToken: sdk.String("illo"),
        PrettyPrint: sdk.Bool(false),
        Project: "reiciendis",
        QuotaUser: sdk.String("ipsum"),
        Type: "doloremque",
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("dignissimos"),
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
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("ea"),
        ManagedZone: "molestiae",
        MaxResults: sdk.Int64(112441),
        Name: sdk.String("Dr. Ken Monahan"),
        OauthToken: sdk.String("consequuntur"),
        PageToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        Project: "tempora",
        QuotaUser: sdk.String("nobis"),
        Type: sdk.String("expedita"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("adipisci"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResourceRecordSet: &shared.ResourceRecordSet{
            Kind: sdk.String("at"),
            Name: sdk.String("Greg Renner"),
            RoutingPolicy: &shared.RRSetRoutingPolicy{
                Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("perspiciatis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("assumenda"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("tempora"),
                                        Port: sdk.String("ad"),
                                        Project: sdk.String("voluptates"),
                                        Region: sdk.String("sequi"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("eligendi"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("quae"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("sint"),
                                        Port: sdk.String("minus"),
                                        Project: sdk.String("excepturi"),
                                        Region: sdk.String("porro"),
                                    },
                                },
                            },
                            Kind: sdk.String("nesciunt"),
                            Location: sdk.String("maiores"),
                            Rrdatas: []string{
                                "autem",
                                "esse",
                            },
                            SignatureRrdatas: []string{
                                "aperiam",
                                "itaque",
                                "sed",
                                "corporis",
                            },
                        },
                    },
                    Kind: sdk.String("consequuntur"),
                },
                GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("beatae"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("ex"),
                                        Port: sdk.String("consequuntur"),
                                        Project: sdk.String("delectus"),
                                        Region: sdk.String("nobis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("possimus"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("optio"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("architecto"),
                                        Port: sdk.String("reiciendis"),
                                        Project: sdk.String("consequatur"),
                                        Region: sdk.String("sunt"),
                                    },
                                },
                            },
                            Kind: sdk.String("odit"),
                            Location: sdk.String("inventore"),
                            Rrdatas: []string{
                                "quod",
                                "repudiandae",
                            },
                            SignatureRrdatas: []string{
                                "aspernatur",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sint"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("deleniti"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("consequuntur"),
                                        Port: sdk.String("enim"),
                                        Project: sdk.String("minus"),
                                        Region: sdk.String("quibusdam"),
                                    },
                                },
                            },
                            Kind: sdk.String("accusantium"),
                            Location: sdk.String("nulla"),
                            Rrdatas: []string{
                                "omnis",
                            },
                            SignatureRrdatas: []string{
                                "excepturi",
                                "nostrum",
                                "sint",
                                "doloribus",
                            },
                        },
                    },
                    Kind: sdk.String("magnam"),
                },
                Kind: sdk.String("adipisci"),
                PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                    BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                        EnableFencing: sdk.Bool(false),
                        Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("velit"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("eos"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("commodi"),
                                            Port: sdk.String("impedit"),
                                            Project: sdk.String("facilis"),
                                            Region: sdk.String("temporibus"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("error"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("delectus"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("deserunt"),
                                            Port: sdk.String("laborum"),
                                            Project: sdk.String("odit"),
                                            Region: sdk.String("rerum"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consequuntur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("et"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("ratione"),
                                            Port: sdk.String("nisi"),
                                            Project: sdk.String("perspiciatis"),
                                            Region: sdk.String("nostrum"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("temporibus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("debitis"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("aliquid"),
                                            Port: sdk.String("excepturi"),
                                            Project: sdk.String("quas"),
                                            Region: sdk.String("repellat"),
                                        },
                                    },
                                },
                                Kind: sdk.String("placeat"),
                                Location: sdk.String("eligendi"),
                                Rrdatas: []string{
                                    "veniam",
                                    "perspiciatis",
                                },
                                SignatureRrdatas: []string{
                                    "dolores",
                                    "dicta",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("maxime"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("molestias"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("molestiae"),
                                            Port: sdk.String("aliquid"),
                                            Project: sdk.String("voluptate"),
                                            Region: sdk.String("eum"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consectetur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("tempora"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("ad"),
                                            Port: sdk.String("incidunt"),
                                            Project: sdk.String("alias"),
                                            Region: sdk.String("adipisci"),
                                        },
                                    },
                                },
                                Kind: sdk.String("atque"),
                                Location: sdk.String("tempore"),
                                Rrdatas: []string{
                                    "distinctio",
                                    "minima",
                                    "cupiditate",
                                    "molestiae",
                                },
                                SignatureRrdatas: []string{
                                    "accusamus",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("deleniti"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("perspiciatis"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("corporis"),
                                            Port: sdk.String("ullam"),
                                            Project: sdk.String("molestiae"),
                                            Region: sdk.String("adipisci"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("totam"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("optio"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("at"),
                                            Port: sdk.String("nam"),
                                            Project: sdk.String("id"),
                                            Region: sdk.String("cumque"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("in"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("quibusdam"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("dolor"),
                                            Port: sdk.String("occaecati"),
                                            Project: sdk.String("exercitationem"),
                                            Region: sdk.String("unde"),
                                        },
                                    },
                                },
                                Kind: sdk.String("labore"),
                                Location: sdk.String("pariatur"),
                                Rrdatas: []string{
                                    "laboriosam",
                                    "soluta",
                                },
                                SignatureRrdatas: []string{
                                    "magni",
                                    "mollitia",
                                    "officiis",
                                    "aliquam",
                                },
                            },
                        },
                        Kind: sdk.String("quas"),
                    },
                    Kind: sdk.String("aut"),
                    PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("dolorem"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("rerum"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                NetworkURL: sdk.String("occaecati"),
                                Port: sdk.String("enim"),
                                Project: sdk.String("tempora"),
                                Region: sdk.String("libero"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("iure"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                Kind: sdk.String("id"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("explicabo"),
                                Port: sdk.String("accusantium"),
                                Project: sdk.String("eum"),
                                Region: sdk.String("nesciunt"),
                            },
                        },
                    },
                    TrickleTraffic: sdk.Float64(4166.24),
                },
                Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("explicabo"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("ipsam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("sequi"),
                                        Port: sdk.String("optio"),
                                        Project: sdk.String("libero"),
                                        Region: sdk.String("ab"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("alias"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("doloremque"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("tempore"),
                                        Port: sdk.String("necessitatibus"),
                                        Project: sdk.String("reiciendis"),
                                        Region: sdk.String("incidunt"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("provident"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("illo"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("quod"),
                                        Port: sdk.String("magni"),
                                        Project: sdk.String("sit"),
                                        Region: sdk.String("voluptas"),
                                    },
                                },
                            },
                            Kind: sdk.String("nesciunt"),
                            Rrdatas: []string{
                                "molestiae",
                                "eius",
                                "perspiciatis",
                            },
                            SignatureRrdatas: []string{
                                "ex",
                            },
                            Weight: sdk.Float64(3976.67),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quisquam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("eveniet"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("voluptatem"),
                                        Port: sdk.String("repellat"),
                                        Project: sdk.String("magni"),
                                        Region: sdk.String("libero"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sapiente"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("provident"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("quos"),
                                        Port: sdk.String("totam"),
                                        Project: sdk.String("facere"),
                                        Region: sdk.String("eius"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("doloremque"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("aut"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("reiciendis"),
                                        Port: sdk.String("neque"),
                                        Project: sdk.String("assumenda"),
                                        Region: sdk.String("saepe"),
                                    },
                                },
                            },
                            Kind: sdk.String("nobis"),
                            Rrdatas: []string{
                                "quia",
                                "natus",
                                "molestiae",
                            },
                            SignatureRrdatas: []string{
                                "earum",
                                "ipsum",
                                "itaque",
                            },
                            Weight: sdk.Float64(5863.66),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("harum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("numquam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("temporibus"),
                                        Port: sdk.String("doloribus"),
                                        Project: sdk.String("quos"),
                                        Region: sdk.String("commodi"),
                                    },
                                },
                            },
                            Kind: sdk.String("blanditiis"),
                            Rrdatas: []string{
                                "nulla",
                                "nemo",
                                "ratione",
                                "dolore",
                            },
                            SignatureRrdatas: []string{
                                "enim",
                            },
                            Weight: sdk.Float64(7705.39),
                        },
                    },
                    Kind: sdk.String("libero"),
                },
                WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("vitae"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("numquam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("quia"),
                                        Port: sdk.String("reiciendis"),
                                        Project: sdk.String("modi"),
                                        Region: sdk.String("doloribus"),
                                    },
                                },
                            },
                            Kind: sdk.String("et"),
                            Rrdatas: []string{
                                "iusto",
                            },
                            SignatureRrdatas: []string{
                                "quidem",
                                "aperiam",
                                "saepe",
                                "voluptatem",
                            },
                            Weight: sdk.Float64(7454.22),
                        },
                    },
                    Kind: sdk.String("hic"),
                },
            },
            Rrdatas: []string{
                "delectus",
            },
            SignatureRrdatas: []string{
                "fugit",
                "inventore",
                "reprehenderit",
            },
            TTL: sdk.Int(572779),
            Type: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        ClientOperationID: sdk.String("similique"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("impedit"),
        ManagedZone: "officia",
        Name: "Colleen O'Connell",
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        Project: "cum",
        QuotaUser: sdk.String("esse"),
        Type: "alias",
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("architecto"),
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
