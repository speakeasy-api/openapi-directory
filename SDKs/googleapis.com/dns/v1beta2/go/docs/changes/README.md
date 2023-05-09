# Changes

### Available Operations

* [DNSChangesCreate](#dnschangescreate) - Atomically updates the ResourceRecordSet collection.
* [DNSChangesGet](#dnschangesget) - Fetches the representation of an existing Change.
* [DNSChangesList](#dnschangeslist) - Enumerates Changes to a ResourceRecordSet collection.

## DNSChangesCreate

Atomically updates the ResourceRecordSet collection.

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
    res, err := s.Changes.DNSChangesCreate(ctx, operations.DNSChangesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Change: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: sdk.String("totam"),
                    Name: sdk.String("Beth Jenkins"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("nulla"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("natus"),
                                                Port: sdk.String("accusamus"),
                                                Project: sdk.String("doloremque"),
                                                Region: sdk.String("nisi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("rerum"),
                                    Location: sdk.String("recusandae"),
                                    Rrdatas: []string{
                                        "non",
                                        "rem",
                                        "quia",
                                        "ullam",
                                    },
                                    SignatureRrdatas: []string{
                                        "dicta",
                                        "voluptatibus",
                                        "eligendi",
                                        "quae",
                                    },
                                },
                            },
                            Kind: sdk.String("officiis"),
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("enim"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("rem"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("facilis"),
                                                Port: sdk.String("reiciendis"),
                                                Project: sdk.String("a"),
                                                Region: sdk.String("iste"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("dicta"),
                                    Location: sdk.String("quos"),
                                    Rrdatas: []string{
                                        "dolore",
                                        "modi",
                                    },
                                    SignatureRrdatas: []string{
                                        "maxime",
                                        "modi",
                                        "consequuntur",
                                        "assumenda",
                                    },
                                },
                            },
                            Kind: sdk.String("vero"),
                        },
                        Kind: sdk.String("doloribus"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusamus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sint"),
                                                    Port: sdk.String("nihil"),
                                                    Project: sdk.String("esse"),
                                                    Region: sdk.String("iure"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("debitis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("neque"),
                                                    Port: sdk.String("corporis"),
                                                    Project: sdk.String("voluptas"),
                                                    Region: sdk.String("consequuntur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("distinctio"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ipsa"),
                                                    Port: sdk.String("rem"),
                                                    Project: sdk.String("maiores"),
                                                    Region: sdk.String("accusantium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veniam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("neque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquam"),
                                                    Port: sdk.String("quos"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("fugiat"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("est"),
                                        Location: sdk.String("delectus"),
                                        Rrdatas: []string{
                                            "vitae",
                                        },
                                        SignatureRrdatas: []string{
                                            "similique",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("repellat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("doloribus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("unde"),
                                                    Port: sdk.String("incidunt"),
                                                    Project: sdk.String("explicabo"),
                                                    Region: sdk.String("ipsam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("cupiditate"),
                                        Location: sdk.String("optio"),
                                        Rrdatas: []string{
                                            "quidem",
                                        },
                                        SignatureRrdatas: []string{
                                            "commodi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequuntur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("debitis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sint"),
                                                    Port: sdk.String("ut"),
                                                    Project: sdk.String("numquam"),
                                                    Region: sdk.String("tenetur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("adipisci"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("in"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ex"),
                                                    Port: sdk.String("minus"),
                                                    Project: sdk.String("ab"),
                                                    Region: sdk.String("beatae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("hic"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quisquam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ducimus"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("minima"),
                                                    Region: sdk.String("architecto"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("qui"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("magni"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("adipisci"),
                                                    Port: sdk.String("praesentium"),
                                                    Project: sdk.String("dolor"),
                                                    Region: sdk.String("exercitationem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("expedita"),
                                        Location: sdk.String("facilis"),
                                        Rrdatas: []string{
                                            "sit",
                                            "nemo",
                                            "culpa",
                                            "consequuntur",
                                        },
                                        SignatureRrdatas: []string{
                                            "deserunt",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veniam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quisquam"),
                                                    Port: sdk.String("enim"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("assumenda"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officiis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("alias"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ipsa"),
                                                    Port: sdk.String("nobis"),
                                                    Project: sdk.String("necessitatibus"),
                                                    Region: sdk.String("quia"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dicta"),
                                        Location: sdk.String("vel"),
                                        Rrdatas: []string{
                                            "debitis",
                                            "ullam",
                                            "architecto",
                                        },
                                        SignatureRrdatas: []string{
                                            "perferendis",
                                        },
                                    },
                                },
                                Kind: sdk.String("veritatis"),
                            },
                            Kind: sdk.String("provident"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("iure"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("quod"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("recusandae"),
                                        Port: sdk.String("velit"),
                                        Project: sdk.String("magnam"),
                                        Region: sdk.String("dignissimos"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("laboriosam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("odio"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("provident"),
                                        Port: sdk.String("cum"),
                                        Project: sdk.String("doloribus"),
                                        Region: sdk.String("facilis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quidem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("laboriosam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("modi"),
                                        Port: sdk.String("perspiciatis"),
                                        Project: sdk.String("hic"),
                                        Region: sdk.String("cum"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("aspernatur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("nam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("recusandae"),
                                        Port: sdk.String("quod"),
                                        Project: sdk.String("id"),
                                        Region: sdk.String("saepe"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(4230.54),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("illum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("illum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("non"),
                                                Port: sdk.String("mollitia"),
                                                Project: sdk.String("assumenda"),
                                                Region: sdk.String("recusandae"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("distinctio"),
                                    Rrdatas: []string{
                                        "ad",
                                        "facere",
                                        "laborum",
                                        "eveniet",
                                    },
                                    SignatureRrdatas: []string{
                                        "incidunt",
                                        "maxime",
                                        "ipsam",
                                    },
                                    Weight: sdk.Float64(0.6),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("deserunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("laborum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("occaecati"),
                                                Port: sdk.String("labore"),
                                                Project: sdk.String("quo"),
                                                Region: sdk.String("perferendis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fugit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("magnam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("eligendi"),
                                                Port: sdk.String("hic"),
                                                Project: sdk.String("nostrum"),
                                                Region: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("unde"),
                                    Rrdatas: []string{
                                        "error",
                                        "mollitia",
                                        "magnam",
                                        "nostrum",
                                    },
                                    SignatureRrdatas: []string{
                                        "corrupti",
                                        "fuga",
                                    },
                                    Weight: sdk.Float64(8152.25),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quasi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quod"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("doloremque"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("facere"),
                                                Region: sdk.String("necessitatibus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("maxime"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("eaque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("porro"),
                                                Project: sdk.String("blanditiis"),
                                                Region: sdk.String("quae"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("magni"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("sed"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("impedit"),
                                                Port: sdk.String("ipsa"),
                                                Project: sdk.String("excepturi"),
                                                Region: sdk.String("a"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("maiores"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("maiores"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("asperiores"),
                                                Port: sdk.String("rem"),
                                                Project: sdk.String("dicta"),
                                                Region: sdk.String("suscipit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("earum"),
                                    Rrdatas: []string{
                                        "velit",
                                        "eius",
                                        "esse",
                                        "in",
                                    },
                                    SignatureRrdatas: []string{
                                        "quasi",
                                        "neque",
                                        "vero",
                                        "excepturi",
                                    },
                                    Weight: sdk.Float64(375.34),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("impedit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("incidunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("odit"),
                                                Port: sdk.String("corporis"),
                                                Project: sdk.String("rerum"),
                                                Region: sdk.String("alias"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("error"),
                                    Rrdatas: []string{
                                        "accusantium",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "ex",
                                        "quas",
                                    },
                                    Weight: sdk.Float64(857.94),
                                },
                            },
                            Kind: sdk.String("ullam"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("incidunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("magni"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("delectus"),
                                                Port: sdk.String("omnis"),
                                                Project: sdk.String("sed"),
                                                Region: sdk.String("nesciunt"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("maxime"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("cupiditate"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("excepturi"),
                                                Port: sdk.String("maiores"),
                                                Project: sdk.String("laudantium"),
                                                Region: sdk.String("velit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("nemo"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quisquam"),
                                                Port: sdk.String("tenetur"),
                                                Project: sdk.String("quas"),
                                                Region: sdk.String("molestiae"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("aliquid"),
                                    Rrdatas: []string{
                                        "a",
                                        "nobis",
                                        "perspiciatis",
                                        "accusantium",
                                    },
                                    SignatureRrdatas: []string{
                                        "minus",
                                    },
                                    Weight: sdk.Float64(4175.39),
                                },
                            },
                            Kind: sdk.String("eveniet"),
                        },
                    },
                    Rrdatas: []string{
                        "tempore",
                        "quidem",
                        "modi",
                        "voluptates",
                    },
                    SignatureRrdatas: []string{
                        "eius",
                    },
                    TTL: sdk.Int(194058),
                    Type: sdk.String("eligendi"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("asperiores"),
                    Name: sdk.String("Vickie Marvin"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("itaque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("deserunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("velit"),
                                                Port: sdk.String("officiis"),
                                                Project: sdk.String("enim"),
                                                Region: sdk.String("officia"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("saepe"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("repudiandae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("officia"),
                                                Port: sdk.String("impedit"),
                                                Project: sdk.String("quasi"),
                                                Region: sdk.String("blanditiis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eius"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("eos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("natus"),
                                                Port: sdk.String("minus"),
                                                Project: sdk.String("quia"),
                                                Region: sdk.String("magnam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reprehenderit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("quos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("amet"),
                                                Port: sdk.String("molestiae"),
                                                Project: sdk.String("amet"),
                                                Region: sdk.String("laborum"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("modi"),
                                    Location: sdk.String("perferendis"),
                                    Rrdatas: []string{
                                        "architecto",
                                        "molestias",
                                        "dolore",
                                        "sunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "neque",
                                        "odit",
                                        "earum",
                                        "veniam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eaque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("veniam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ad"),
                                                Port: sdk.String("nisi"),
                                                Project: sdk.String("tenetur"),
                                                Region: sdk.String("quis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quibusdam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("suscipit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("sit"),
                                                Port: sdk.String("quidem"),
                                                Project: sdk.String("repellendus"),
                                                Region: sdk.String("perferendis"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("id"),
                                    Location: sdk.String("sapiente"),
                                    Rrdatas: []string{
                                        "possimus",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "architecto",
                                        "adipisci",
                                        "pariatur",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("iure"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("minus"),
                                                Port: sdk.String("soluta"),
                                                Project: sdk.String("dolorum"),
                                                Region: sdk.String("velit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("earum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("error"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quasi"),
                                                Port: sdk.String("mollitia"),
                                                Project: sdk.String("accusamus"),
                                                Region: sdk.String("harum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("cumque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("expedita"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("eaque"),
                                                Port: sdk.String("deserunt"),
                                                Project: sdk.String("aliquid"),
                                                Region: sdk.String("excepturi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("magni"),
                                    Location: sdk.String("tempora"),
                                    Rrdatas: []string{
                                        "dolor",
                                        "rerum",
                                        "sed",
                                        "accusamus",
                                    },
                                    SignatureRrdatas: []string{
                                        "delectus",
                                        "minus",
                                        "quo",
                                        "quos",
                                    },
                                },
                            },
                            Kind: sdk.String("asperiores"),
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("corporis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("illo"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("doloribus"),
                                                Port: sdk.String("nostrum"),
                                                Project: sdk.String("at"),
                                                Region: sdk.String("possimus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("neque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("vel"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("mollitia"),
                                                Port: sdk.String("quae"),
                                                Project: sdk.String("quos"),
                                                Region: sdk.String("aperiam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("non"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("ad"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quisquam"),
                                                Port: sdk.String("quas"),
                                                Project: sdk.String("consequuntur"),
                                                Region: sdk.String("maiores"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("inventore"),
                                    Location: sdk.String("aliquid"),
                                    Rrdatas: []string{
                                        "est",
                                        "dolor",
                                        "aliquid",
                                    },
                                    SignatureRrdatas: []string{
                                        "cumque",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptatum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("adipisci"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("tempora"),
                                                Port: sdk.String("blanditiis"),
                                                Project: sdk.String("numquam"),
                                                Region: sdk.String("sequi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptatum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("rerum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("tenetur"),
                                                Port: sdk.String("autem"),
                                                Project: sdk.String("quidem"),
                                                Region: sdk.String("totam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("porro"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("magni"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("voluptas"),
                                                Port: sdk.String("animi"),
                                                Project: sdk.String("commodi"),
                                                Region: sdk.String("alias"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("fuga"),
                                    Location: sdk.String("aut"),
                                    Rrdatas: []string{
                                        "maxime",
                                        "aliquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "ullam",
                                        "eligendi",
                                        "placeat",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("occaecati"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("illo"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("inventore"),
                                                Port: sdk.String("libero"),
                                                Project: sdk.String("ipsam"),
                                                Region: sdk.String("quasi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("cumque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("harum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("facilis"),
                                                Port: sdk.String("beatae"),
                                                Project: sdk.String("cumque"),
                                                Region: sdk.String("delectus"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("labore"),
                                    Location: sdk.String("expedita"),
                                    Rrdatas: []string{
                                        "rem",
                                        "atque",
                                        "officiis",
                                    },
                                    SignatureRrdatas: []string{
                                        "pariatur",
                                        "sapiente",
                                        "quo",
                                    },
                                },
                            },
                            Kind: sdk.String("incidunt"),
                        },
                        Kind: sdk.String("quod"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("occaecati"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("esse"),
                                                    Project: sdk.String("hic"),
                                                    Region: sdk.String("maxime"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusantium"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("fugit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("eligendi"),
                                                    Port: sdk.String("recusandae"),
                                                    Project: sdk.String("veritatis"),
                                                    Region: sdk.String("aut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laudantium"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("dolor"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("tempora"),
                                                    Port: sdk.String("magni"),
                                                    Project: sdk.String("rerum"),
                                                    Region: sdk.String("doloremque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("at"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("reprehenderit"),
                                                    Port: sdk.String("voluptatum"),
                                                    Project: sdk.String("blanditiis"),
                                                    Region: sdk.String("nihil"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("atque"),
                                        Location: sdk.String("rerum"),
                                        Rrdatas: []string{
                                            "atque",
                                            "nostrum",
                                            "atque",
                                        },
                                        SignatureRrdatas: []string{
                                            "est",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("placeat"),
                                                    Port: sdk.String("enim"),
                                                    Project: sdk.String("labore"),
                                                    Region: sdk.String("sapiente"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("saepe"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("officia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cumque"),
                                                    Port: sdk.String("natus"),
                                                    Project: sdk.String("quaerat"),
                                                    Region: sdk.String("doloribus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quia"),
                                        Location: sdk.String("officiis"),
                                        Rrdatas: []string{
                                            "cumque",
                                            "quis",
                                            "enim",
                                        },
                                        SignatureRrdatas: []string{
                                            "nemo",
                                            "illum",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("minus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("recusandae"),
                                                    Port: sdk.String("voluptates"),
                                                    Project: sdk.String("praesentium"),
                                                    Region: sdk.String("dicta"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("fugit"),
                                        Location: sdk.String("sit"),
                                        Rrdatas: []string{
                                            "necessitatibus",
                                            "sed",
                                        },
                                        SignatureRrdatas: []string{
                                            "sunt",
                                            "nesciunt",
                                            "delectus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("eius"),
                                                    Project: sdk.String("voluptatum"),
                                                    Region: sdk.String("ipsa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("at"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("repellat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("inventore"),
                                                    Port: sdk.String("sequi"),
                                                    Project: sdk.String("fugit"),
                                                    Region: sdk.String("fuga"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("hic"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("dolorem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aperiam"),
                                                    Port: sdk.String("aspernatur"),
                                                    Project: sdk.String("nulla"),
                                                    Region: sdk.String("enim"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("illo"),
                                        Location: sdk.String("magnam"),
                                        Rrdatas: []string{
                                            "numquam",
                                            "optio",
                                            "nobis",
                                            "ex",
                                        },
                                        SignatureRrdatas: []string{
                                            "quae",
                                            "deleniti",
                                            "expedita",
                                            "hic",
                                        },
                                    },
                                },
                                Kind: sdk.String("excepturi"),
                            },
                            Kind: sdk.String("aliquid"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("beatae"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("ea"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("dolore"),
                                        Port: sdk.String("tenetur"),
                                        Project: sdk.String("dignissimos"),
                                        Region: sdk.String("esse"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(6570.44),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eveniet"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("velit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("eius"),
                                                Port: sdk.String("rerum"),
                                                Project: sdk.String("itaque"),
                                                Region: sdk.String("dignissimos"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ipsam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("impedit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quis"),
                                                Port: sdk.String("facilis"),
                                                Project: sdk.String("ipsum"),
                                                Region: sdk.String("ut"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quaerat"),
                                    Rrdatas: []string{
                                        "praesentium",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "expedita",
                                        "libero",
                                        "iste",
                                    },
                                    Weight: sdk.Float64(749.21),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quos"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("sint"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("enim"),
                                                Port: sdk.String("accusamus"),
                                                Project: sdk.String("aperiam"),
                                                Region: sdk.String("voluptates"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("laudantium"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("illum"),
                                                Port: sdk.String("rem"),
                                                Project: sdk.String("tenetur"),
                                                Region: sdk.String("deleniti"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("modi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("architecto"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("labore"),
                                                Port: sdk.String("maiores"),
                                                Project: sdk.String("sequi"),
                                                Region: sdk.String("saepe"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consequatur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("debitis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quisquam"),
                                                Port: sdk.String("cumque"),
                                                Project: sdk.String("aliquam"),
                                                Region: sdk.String("dolorum"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("deserunt"),
                                    Rrdatas: []string{
                                        "reiciendis",
                                        "sequi",
                                    },
                                    SignatureRrdatas: []string{
                                        "laborum",
                                        "nobis",
                                        "quibusdam",
                                        "omnis",
                                    },
                                    Weight: sdk.Float64(162.52),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("officia"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("reprehenderit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("necessitatibus"),
                                                Port: sdk.String("accusantium"),
                                                Project: sdk.String("ad"),
                                                Region: sdk.String("nisi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("molestiae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("laudantium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("odit"),
                                                Port: sdk.String("iusto"),
                                                Project: sdk.String("expedita"),
                                                Region: sdk.String("eos"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("repellendus"),
                                    Rrdatas: []string{
                                        "ipsa",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolore",
                                        "esse",
                                        "accusantium",
                                    },
                                    Weight: sdk.Float64(7181.19),
                                },
                            },
                            Kind: sdk.String("sapiente"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aliquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("culpa"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("iusto"),
                                                Port: sdk.String("quod"),
                                                Project: sdk.String("voluptatibus"),
                                                Region: sdk.String("voluptas"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("non"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("laborum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("doloribus"),
                                                Port: sdk.String("animi"),
                                                Project: sdk.String("recusandae"),
                                                Region: sdk.String("corporis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("non"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("distinctio"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("laboriosam"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("optio"),
                                                Region: sdk.String("sequi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sunt"),
                                    Rrdatas: []string{
                                        "voluptatibus",
                                    },
                                    SignatureRrdatas: []string{
                                        "sed",
                                    },
                                    Weight: sdk.Float64(2277.41),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("in"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("temporibus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("dolor"),
                                                Port: sdk.String("nisi"),
                                                Project: sdk.String("dignissimos"),
                                                Region: sdk.String("reiciendis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("itaque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("est"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quod"),
                                                Port: sdk.String("minus"),
                                                Project: sdk.String("quos"),
                                                Region: sdk.String("possimus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("maiores"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("provident"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("aperiam"),
                                                Port: sdk.String("similique"),
                                                Project: sdk.String("nesciunt"),
                                                Region: sdk.String("provident"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ex"),
                                    Rrdatas: []string{
                                        "unde",
                                        "alias",
                                        "impedit",
                                        "sequi",
                                    },
                                    SignatureRrdatas: []string{
                                        "labore",
                                        "expedita",
                                    },
                                    Weight: sdk.Float64(4467.37),
                                },
                            },
                            Kind: sdk.String("quisquam"),
                        },
                    },
                    Rrdatas: []string{
                        "enim",
                    },
                    SignatureRrdatas: []string{
                        "maiores",
                        "distinctio",
                        "mollitia",
                        "impedit",
                    },
                    TTL: sdk.Int(880998),
                    Type: sdk.String("et"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("quas"),
                    Name: sdk.String("Bennie Carter"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sed"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("quas"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("vel"),
                                                Port: sdk.String("eligendi"),
                                                Project: sdk.String("recusandae"),
                                                Region: sdk.String("ex"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("beatae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("maiores"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("vero"),
                                                Port: sdk.String("quidem"),
                                                Project: sdk.String("illo"),
                                                Region: sdk.String("quo"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dignissimos"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("distinctio"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("cum"),
                                                Port: sdk.String("suscipit"),
                                                Project: sdk.String("saepe"),
                                                Region: sdk.String("earum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quod"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quaerat"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ducimus"),
                                                Port: sdk.String("laudantium"),
                                                Project: sdk.String("rerum"),
                                                Region: sdk.String("deserunt"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("odit"),
                                    Location: sdk.String("ad"),
                                    Rrdatas: []string{
                                        "beatae",
                                    },
                                    SignatureRrdatas: []string{
                                        "esse",
                                        "magnam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nulla"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("cupiditate"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("exercitationem"),
                                                Port: sdk.String("laborum"),
                                                Project: sdk.String("illum"),
                                                Region: sdk.String("fugit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("maxime"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("repellat"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("illum"),
                                                Port: sdk.String("quibusdam"),
                                                Project: sdk.String("commodi"),
                                                Region: sdk.String("esse"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("explicabo"),
                                    Location: sdk.String("consectetur"),
                                    Rrdatas: []string{
                                        "optio",
                                        "ipsa",
                                        "maiores",
                                        "exercitationem",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "aspernatur",
                                        "sapiente",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                        },
                                    },
                                    Kind: sdk.String("corrupti"),
                                    Location: sdk.String("molestiae"),
                                    Rrdatas: []string{
                                        "iure",
                                        "ab",
                                    },
                                    SignatureRrdatas: []string{
                                        "amet",
                                        "sapiente",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("est"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quisquam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("laudantium"),
                                                Port: sdk.String("nam"),
                                                Project: sdk.String("nemo"),
                                                Region: sdk.String("enim"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ipsam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("tempora"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("corrupti"),
                                                Port: sdk.String("doloremque"),
                                                Project: sdk.String("fugiat"),
                                                Region: sdk.String("numquam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("doloremque"),
                                    Location: sdk.String("cum"),
                                    Rrdatas: []string{
                                        "similique",
                                        "porro",
                                        "impedit",
                                        "nisi",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                        "fugiat",
                                        "laboriosam",
                                        "nam",
                                    },
                                },
                            },
                            Kind: sdk.String("enim"),
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("necessitatibus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("cupiditate"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("provident"),
                                                Port: sdk.String("adipisci"),
                                                Project: sdk.String("accusantium"),
                                                Region: sdk.String("magnam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("repellat"),
                                    Location: sdk.String("omnis"),
                                    Rrdatas: []string{
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                        "possimus",
                                        "fugit",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nostrum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("voluptatum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("error"),
                                                Port: sdk.String("nobis"),
                                                Project: sdk.String("tempora"),
                                                Region: sdk.String("voluptate"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eius"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("aperiam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("possimus"),
                                                Port: sdk.String("fugit"),
                                                Project: sdk.String("voluptatem"),
                                                Region: sdk.String("repudiandae"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("corporis"),
                                    Location: sdk.String("ea"),
                                    Rrdatas: []string{
                                        "aliquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "hic",
                                        "maiores",
                                        "asperiores",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nesciunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("animi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("beatae"),
                                                Port: sdk.String("ipsa"),
                                                Project: sdk.String("mollitia"),
                                                Region: sdk.String("nam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("assumenda"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("fuga"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("commodi"),
                                                Port: sdk.String("fugit"),
                                                Project: sdk.String("suscipit"),
                                                Region: sdk.String("voluptate"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("nisi"),
                                    Location: sdk.String("aliquid"),
                                    Rrdatas: []string{
                                        "laboriosam",
                                        "accusamus",
                                        "ab",
                                    },
                                    SignatureRrdatas: []string{
                                        "quisquam",
                                        "eaque",
                                        "alias",
                                        "qui",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vitae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("sequi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("exercitationem"),
                                                Port: sdk.String("illum"),
                                                Project: sdk.String("praesentium"),
                                                Region: sdk.String("unde"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("similique"),
                                    Location: sdk.String("eligendi"),
                                    Rrdatas: []string{
                                        "amet",
                                        "debitis",
                                        "nobis",
                                    },
                                    SignatureRrdatas: []string{
                                        "temporibus",
                                        "id",
                                        "atque",
                                        "quibusdam",
                                    },
                                },
                            },
                            Kind: sdk.String("sit"),
                        },
                        Kind: sdk.String("quo"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("provident"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("earum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ipsum"),
                                                    Port: sdk.String("alias"),
                                                    Project: sdk.String("doloremque"),
                                                    Region: sdk.String("tempora"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("perspiciatis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ex"),
                                                    Port: sdk.String("architecto"),
                                                    Project: sdk.String("a"),
                                                    Region: sdk.String("laborum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("veritatis"),
                                        Location: sdk.String("quod"),
                                        Rrdatas: []string{
                                            "qui",
                                            "accusantium",
                                            "commodi",
                                            "atque",
                                        },
                                        SignatureRrdatas: []string{
                                            "tenetur",
                                            "voluptate",
                                            "quam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptate"),
                                                    Port: sdk.String("inventore"),
                                                    Project: sdk.String("facere"),
                                                    Region: sdk.String("maxime"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fuga"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ex"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maiores"),
                                                    Port: sdk.String("sed"),
                                                    Project: sdk.String("animi"),
                                                    Region: sdk.String("sequi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eligendi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("perferendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("omnis"),
                                                    Port: sdk.String("nihil"),
                                                    Project: sdk.String("tenetur"),
                                                    Region: sdk.String("sapiente"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("velit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("non"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("illum"),
                                                    Port: sdk.String("at"),
                                                    Project: sdk.String("tenetur"),
                                                    Region: sdk.String("molestias"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ipsam"),
                                        Location: sdk.String("esse"),
                                        Rrdatas: []string{
                                            "perspiciatis",
                                            "voluptates",
                                            "eum",
                                        },
                                        SignatureRrdatas: []string{
                                            "quas",
                                        },
                                    },
                                },
                                Kind: sdk.String("odio"),
                            },
                            Kind: sdk.String("commodi"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("aliquid"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("quidem"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("et"),
                                        Port: sdk.String("nulla"),
                                        Project: sdk.String("magni"),
                                        Region: sdk.String("natus"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("illum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("impedit"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("ut"),
                                        Port: sdk.String("facere"),
                                        Project: sdk.String("voluptas"),
                                        Region: sdk.String("doloribus"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("recusandae"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("facere"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("iste"),
                                        Port: sdk.String("provident"),
                                        Project: sdk.String("dolor"),
                                        Region: sdk.String("sint"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("aperiam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("eum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("laborum"),
                                        Port: sdk.String("autem"),
                                        Project: sdk.String("assumenda"),
                                        Region: sdk.String("explicabo"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(8526.89),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("alias"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("ullam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("velit"),
                                                Port: sdk.String("ratione"),
                                                Project: sdk.String("quas"),
                                                Region: sdk.String("maxime"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("recusandae"),
                                    Rrdatas: []string{
                                        "doloremque",
                                        "totam",
                                        "iure",
                                        "maiores",
                                    },
                                    SignatureRrdatas: []string{
                                        "fugit",
                                        "veritatis",
                                        "necessitatibus",
                                    },
                                    Weight: sdk.Float64(6119.7),
                                },
                            },
                            Kind: sdk.String("dicta"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("cumque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("non"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("sunt"),
                                                Port: sdk.String("molestias"),
                                                Project: sdk.String("beatae"),
                                                Region: sdk.String("autem"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ducimus"),
                                    Rrdatas: []string{
                                        "molestias",
                                        "necessitatibus",
                                        "ipsum",
                                    },
                                    SignatureRrdatas: []string{
                                        "quos",
                                        "illum",
                                        "distinctio",
                                        "voluptatem",
                                    },
                                    Weight: sdk.Float64(2498.03),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consequatur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("repellendus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quibusdam"),
                                                Port: sdk.String("consectetur"),
                                                Project: sdk.String("voluptas"),
                                                Region: sdk.String("quaerat"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("earum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("assumenda"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("enim"),
                                                Port: sdk.String("ullam"),
                                                Project: sdk.String("perspiciatis"),
                                                Region: sdk.String("alias"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ex"),
                                    Rrdatas: []string{
                                        "dicta",
                                        "quia",
                                        "commodi",
                                        "neque",
                                    },
                                    SignatureRrdatas: []string{
                                        "numquam",
                                        "rem",
                                        "officiis",
                                        "omnis",
                                    },
                                    Weight: sdk.Float64(2064.51),
                                },
                            },
                            Kind: sdk.String("corporis"),
                        },
                    },
                    Rrdatas: []string{
                        "dolores",
                        "placeat",
                        "excepturi",
                        "recusandae",
                    },
                    SignatureRrdatas: []string{
                        "dicta",
                        "sapiente",
                        "ipsum",
                    },
                    TTL: sdk.Int(9358),
                    Type: sdk.String("soluta"),
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: sdk.String("sequi"),
                    Name: sdk.String("Leroy Fisher Sr."),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("magni"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("aliquid"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("voluptate"),
                                                Port: sdk.String("vel"),
                                                Project: sdk.String("minima"),
                                                Region: sdk.String("sit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vel"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quaerat"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("rem"),
                                                Port: sdk.String("dignissimos"),
                                                Project: sdk.String("doloremque"),
                                                Region: sdk.String("assumenda"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("provident"),
                                    Location: sdk.String("facere"),
                                    Rrdatas: []string{
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "unde",
                                        "deserunt",
                                        "repellendus",
                                        "consequatur",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("doloremque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("tempora"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("cumque"),
                                                Port: sdk.String("maxime"),
                                                Project: sdk.String("et"),
                                                Region: sdk.String("beatae"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("id"),
                                    Location: sdk.String("consequatur"),
                                    Rrdatas: []string{
                                        "ratione",
                                        "iure",
                                        "tempora",
                                    },
                                    SignatureRrdatas: []string{
                                        "natus",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("suscipit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("facilis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("ullam"),
                                                Port: sdk.String("aut"),
                                                Project: sdk.String("quia"),
                                                Region: sdk.String("officia"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quaerat"),
                                    Location: sdk.String("corporis"),
                                    Rrdatas: []string{
                                        "iusto",
                                        "sapiente",
                                        "esse",
                                        "neque",
                                    },
                                    SignatureRrdatas: []string{
                                        "quisquam",
                                        "praesentium",
                                        "tempora",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("officiis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("magni"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("est"),
                                                Port: sdk.String("amet"),
                                                Project: sdk.String("veritatis"),
                                                Region: sdk.String("error"),
                                            },
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
                                        },
                                    },
                                    Kind: sdk.String("molestiae"),
                                    Location: sdk.String("impedit"),
                                    Rrdatas: []string{
                                        "animi",
                                        "voluptatum",
                                        "aliquid",
                                    },
                                    SignatureRrdatas: []string{
                                        "facilis",
                                        "optio",
                                    },
                                },
                            },
                            Kind: sdk.String("incidunt"),
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolores"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("eum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ad"),
                                                Port: sdk.String("quos"),
                                                Project: sdk.String("illo"),
                                                Region: sdk.String("suscipit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quibusdam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("impedit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("atque"),
                                                Port: sdk.String("voluptates"),
                                                Project: sdk.String("maiores"),
                                                Region: sdk.String("nemo"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("illo"),
                                    Location: sdk.String("doloribus"),
                                    Rrdatas: []string{
                                        "expedita",
                                        "modi",
                                        "cumque",
                                        "ipsam",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsum",
                                        "accusamus",
                                        "quisquam",
                                    },
                                },
                            },
                            Kind: sdk.String("quasi"),
                        },
                        Kind: sdk.String("fugit"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("mollitia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quibusdam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("accusamus"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("quam"),
                                                    Region: sdk.String("similique"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("delectus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("facere"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("at"),
                                                    Port: sdk.String("molestias"),
                                                    Project: sdk.String("aut"),
                                                    Region: sdk.String("temporibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tenetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("numquam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("similique"),
                                                    Port: sdk.String("dolore"),
                                                    Project: sdk.String("esse"),
                                                    Region: sdk.String("reiciendis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("occaecati"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("minima"),
                                                    Project: sdk.String("quos"),
                                                    Region: sdk.String("blanditiis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quas"),
                                        Location: sdk.String("voluptatem"),
                                        Rrdatas: []string{
                                            "quas",
                                            "ipsum",
                                            "vero",
                                        },
                                        SignatureRrdatas: []string{
                                            "facilis",
                                            "maiores",
                                            "error",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("aut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("omnis"),
                                                    Port: sdk.String("similique"),
                                                    Project: sdk.String("asperiores"),
                                                    Region: sdk.String("modi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facere"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sed"),
                                                    Port: sdk.String("non"),
                                                    Project: sdk.String("porro"),
                                                    Region: sdk.String("fugiat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("soluta"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("vero"),
                                                    Port: sdk.String("eos"),
                                                    Project: sdk.String("quas"),
                                                    Region: sdk.String("quasi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("architecto"),
                                        Location: sdk.String("praesentium"),
                                        Rrdatas: []string{
                                            "fugiat",
                                            "enim",
                                        },
                                        SignatureRrdatas: []string{
                                            "laudantium",
                                            "modi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusamus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("repudiandae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("praesentium"),
                                                    Port: sdk.String("enim"),
                                                    Project: sdk.String("animi"),
                                                    Region: sdk.String("unde"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nostrum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("laboriosam"),
                                                    Port: sdk.String("ratione"),
                                                    Project: sdk.String("blanditiis"),
                                                    Region: sdk.String("quidem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("illum"),
                                        Location: sdk.String("reiciendis"),
                                        Rrdatas: []string{
                                            "dolores",
                                            "consequatur",
                                            "nesciunt",
                                            "quia",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptas",
                                            "quo",
                                            "laudantium",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("omnis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("fugit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quidem"),
                                                    Port: sdk.String("molestiae"),
                                                    Project: sdk.String("debitis"),
                                                    Region: sdk.String("vitae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolor"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("asperiores"),
                                                    Port: sdk.String("reprehenderit"),
                                                    Project: sdk.String("deserunt"),
                                                    Region: sdk.String("itaque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("et"),
                                        Location: sdk.String("eos"),
                                        Rrdatas: []string{
                                            "ex",
                                            "praesentium",
                                            "natus",
                                            "vitae",
                                        },
                                        SignatureRrdatas: []string{
                                            "laudantium",
                                            "aspernatur",
                                            "eligendi",
                                            "repudiandae",
                                        },
                                    },
                                },
                                Kind: sdk.String("dicta"),
                            },
                            Kind: sdk.String("inventore"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("iusto"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("voluptate"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("dolorem"),
                                        Port: sdk.String("eaque"),
                                        Project: sdk.String("exercitationem"),
                                        Region: sdk.String("amet"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptate"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("pariatur"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("a"),
                                        Port: sdk.String("fuga"),
                                        Project: sdk.String("totam"),
                                        Region: sdk.String("cupiditate"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(8701),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("voluptates"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quis"),
                                                Port: sdk.String("commodi"),
                                                Project: sdk.String("vel"),
                                                Region: sdk.String("rem"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aliquid"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("perspiciatis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("itaque"),
                                                Port: sdk.String("unde"),
                                                Project: sdk.String("cumque"),
                                                Region: sdk.String("dolor"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("repellendus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("minus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("a"),
                                                Port: sdk.String("beatae"),
                                                Project: sdk.String("vitae"),
                                                Region: sdk.String("veritatis"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("facere"),
                                    Rrdatas: []string{
                                        "laborum",
                                        "dicta",
                                        "voluptatem",
                                        "odit",
                                    },
                                    SignatureRrdatas: []string{
                                        "pariatur",
                                        "enim",
                                    },
                                    Weight: sdk.Float64(2542.88),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("est"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("facere"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("omnis"),
                                                Port: sdk.String("alias"),
                                                Project: sdk.String("sapiente"),
                                                Region: sdk.String("officiis"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("expedita"),
                                    Rrdatas: []string{
                                        "vitae",
                                    },
                                    SignatureRrdatas: []string{
                                        "quas",
                                        "ipsa",
                                    },
                                    Weight: sdk.Float64(7181.87),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quod"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("sit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("distinctio"),
                                                Port: sdk.String("distinctio"),
                                                Project: sdk.String("assumenda"),
                                                Region: sdk.String("illum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("soluta"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("laudantium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("esse"),
                                                Port: sdk.String("doloremque"),
                                                Project: sdk.String("corrupti"),
                                                Region: sdk.String("reiciendis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("facilis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("repudiandae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("natus"),
                                                Port: sdk.String("ab"),
                                                Project: sdk.String("officiis"),
                                                Region: sdk.String("eum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("rerum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("ab"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("blanditiis"),
                                                Port: sdk.String("porro"),
                                                Project: sdk.String("labore"),
                                                Region: sdk.String("impedit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ut"),
                                    Rrdatas: []string{
                                        "ullam",
                                        "numquam",
                                        "enim",
                                        "cupiditate",
                                    },
                                    SignatureRrdatas: []string{
                                        "itaque",
                                        "fuga",
                                        "consectetur",
                                    },
                                    Weight: sdk.Float64(2687.49),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("explicabo"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("ipsa"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("sint"),
                                                Port: sdk.String("nobis"),
                                                Project: sdk.String("qui"),
                                                Region: sdk.String("accusantium"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("consequatur"),
                                    Rrdatas: []string{
                                        "recusandae",
                                        "voluptate",
                                        "deleniti",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "expedita",
                                    },
                                    Weight: sdk.Float64(8429.21),
                                },
                            },
                            Kind: sdk.String("quos"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("in"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("doloremque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("dicta"),
                                                Port: sdk.String("architecto"),
                                                Project: sdk.String("suscipit"),
                                                Region: sdk.String("eligendi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("officiis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("fugit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("possimus"),
                                                Port: sdk.String("quaerat"),
                                                Project: sdk.String("aut"),
                                                Region: sdk.String("natus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("esse"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("deserunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ipsa"),
                                                Port: sdk.String("debitis"),
                                                Project: sdk.String("iste"),
                                                Region: sdk.String("deserunt"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("hic"),
                                    Rrdatas: []string{
                                        "consequuntur",
                                        "ipsam",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                        "omnis",
                                        "dicta",
                                    },
                                    Weight: sdk.Float64(1851.16),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consequatur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("consequatur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptatum"),
                                                Port: sdk.String("velit"),
                                                Project: sdk.String("hic"),
                                                Region: sdk.String("ullam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("deserunt"),
                                    Rrdatas: []string{
                                        "distinctio",
                                        "iusto",
                                        "dignissimos",
                                        "provident",
                                    },
                                    SignatureRrdatas: []string{
                                        "assumenda",
                                        "sunt",
                                        "odit",
                                    },
                                    Weight: sdk.Float64(8768.21),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("optio"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("repellat"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("magnam"),
                                                Port: sdk.String("perspiciatis"),
                                                Project: sdk.String("amet"),
                                                Region: sdk.String("corrupti"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("delectus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("porro"),
                                                Port: sdk.String("quaerat"),
                                                Project: sdk.String("magni"),
                                                Region: sdk.String("cumque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quos"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("commodi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("sed"),
                                                Port: sdk.String("minus"),
                                                Project: sdk.String("consequuntur"),
                                                Region: sdk.String("possimus"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("delectus"),
                                    Rrdatas: []string{
                                        "aliquam",
                                        "eligendi",
                                        "hic",
                                    },
                                    SignatureRrdatas: []string{
                                        "illo",
                                        "nobis",
                                        "esse",
                                        "nisi",
                                    },
                                    Weight: sdk.Float64(1296.19),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("alias"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("quos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("vitae"),
                                                Port: sdk.String("maiores"),
                                                Project: sdk.String("nam"),
                                                Region: sdk.String("architecto"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("rerum"),
                                    Rrdatas: []string{
                                        "eos",
                                        "dolorem",
                                        "hic",
                                        "repellendus",
                                    },
                                    SignatureRrdatas: []string{
                                        "ab",
                                        "magnam",
                                        "pariatur",
                                    },
                                    Weight: sdk.Float64(7092.34),
                                },
                            },
                            Kind: sdk.String("autem"),
                        },
                    },
                    Rrdatas: []string{
                        "recusandae",
                        "nostrum",
                        "officia",
                    },
                    SignatureRrdatas: []string{
                        "laudantium",
                        "corporis",
                    },
                    TTL: sdk.Int(567241),
                    Type: sdk.String("natus"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("deleniti"),
                    Name: sdk.String("Adam D'Amore"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("temporibus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("a"),
                                                Port: sdk.String("minus"),
                                                Project: sdk.String("sed"),
                                                Region: sdk.String("nam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quia"),
                                    Location: sdk.String("iusto"),
                                    Rrdatas: []string{
                                        "deserunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "blanditiis",
                                    },
                                },
                            },
                            Kind: sdk.String("sint"),
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("molestiae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("rem"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("non"),
                                                Port: sdk.String("recusandae"),
                                                Project: sdk.String("omnis"),
                                                Region: sdk.String("ipsa"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aliquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("occaecati"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("magni"),
                                                Port: sdk.String("consequuntur"),
                                                Project: sdk.String("consequuntur"),
                                                Region: sdk.String("eius"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("commodi"),
                                    Location: sdk.String("ipsam"),
                                    Rrdatas: []string{
                                        "cupiditate",
                                        "modi",
                                    },
                                    SignatureRrdatas: []string{
                                        "explicabo",
                                        "modi",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("odio"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("voluptatum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("delectus"),
                                                Port: sdk.String("quam"),
                                                Project: sdk.String("dolorum"),
                                                Region: sdk.String("libero"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ratione"),
                                    Location: sdk.String("molestiae"),
                                    Rrdatas: []string{
                                        "saepe",
                                        "maiores",
                                        "accusantium",
                                        "sed",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequuntur",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vitae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("labore"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quidem"),
                                                Port: sdk.String("exercitationem"),
                                                Project: sdk.String("veniam"),
                                                Region: sdk.String("modi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quasi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("similique"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quo"),
                                                Port: sdk.String("suscipit"),
                                                Project: sdk.String("ex"),
                                                Region: sdk.String("sint"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("est"),
                                    Location: sdk.String("doloribus"),
                                    Rrdatas: []string{
                                        "alias",
                                        "deserunt",
                                        "fugit",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "molestiae",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("facere"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("cupiditate"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quasi"),
                                                Port: sdk.String("maiores"),
                                                Project: sdk.String("voluptatem"),
                                                Region: sdk.String("aliquid"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("laudantium"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("corrupti"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("facere"),
                                                Port: sdk.String("ea"),
                                                Project: sdk.String("libero"),
                                                Region: sdk.String("nam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("amet"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("minus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("fuga"),
                                                Project: sdk.String("consectetur"),
                                                Region: sdk.String("labore"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("laudantium"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("adipisci"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("voluptatibus"),
                                                Project: sdk.String("magnam"),
                                                Region: sdk.String("aperiam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ducimus"),
                                    Location: sdk.String("itaque"),
                                    Rrdatas: []string{
                                        "numquam",
                                        "doloribus",
                                        "eligendi",
                                        "sapiente",
                                    },
                                    SignatureRrdatas: []string{
                                        "impedit",
                                    },
                                },
                            },
                            Kind: sdk.String("numquam"),
                        },
                        Kind: sdk.String("aspernatur"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("vitae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nisi"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("voluptas"),
                                                    Region: sdk.String("ratione"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("excepturi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("est"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quibusdam"),
                                                    Port: sdk.String("impedit"),
                                                    Project: sdk.String("ducimus"),
                                                    Region: sdk.String("nisi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nisi"),
                                        Location: sdk.String("dolor"),
                                        Rrdatas: []string{
                                            "dolore",
                                        },
                                        SignatureRrdatas: []string{
                                            "maxime",
                                            "expedita",
                                            "accusantium",
                                            "ea",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("totam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("est"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consequuntur"),
                                                    Port: sdk.String("repellendus"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("dolores"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("enim"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("perspiciatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("odio"),
                                                    Port: sdk.String("alias"),
                                                    Project: sdk.String("quidem"),
                                                    Region: sdk.String("deleniti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("possimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("odio"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aspernatur"),
                                                    Port: sdk.String("at"),
                                                    Project: sdk.String("illum"),
                                                    Region: sdk.String("praesentium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sint"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("cum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("facilis"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("reiciendis"),
                                                    Region: sdk.String("dolores"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolore"),
                                        Location: sdk.String("pariatur"),
                                        Rrdatas: []string{
                                            "cupiditate",
                                            "nemo",
                                            "natus",
                                        },
                                        SignatureRrdatas: []string{
                                            "provident",
                                            "amet",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nostrum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("tenetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolore"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("velit"),
                                                    Region: sdk.String("adipisci"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("cupiditate"),
                                        Location: sdk.String("occaecati"),
                                        Rrdatas: []string{
                                            "fugiat",
                                            "molestiae",
                                        },
                                        SignatureRrdatas: []string{
                                            "repellendus",
                                            "saepe",
                                            "amet",
                                        },
                                    },
                                },
                                Kind: sdk.String("distinctio"),
                            },
                            Kind: sdk.String("vel"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("iste"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("corrupti"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("voluptatibus"),
                                        Port: sdk.String("ullam"),
                                        Project: sdk.String("dolorum"),
                                        Region: sdk.String("soluta"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("cum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("delectus"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("commodi"),
                                        Port: sdk.String("fugit"),
                                        Project: sdk.String("ullam"),
                                        Region: sdk.String("ullam"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("doloremque"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("qui"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("adipisci"),
                                        Port: sdk.String("totam"),
                                        Project: sdk.String("qui"),
                                        Region: sdk.String("deserunt"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("eligendi"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("deleniti"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("est"),
                                        Port: sdk.String("reiciendis"),
                                        Project: sdk.String("possimus"),
                                        Region: sdk.String("odit"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(2307.74),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("facilis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("deserunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ipsam"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("illo"),
                                                Region: sdk.String("iure"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("incidunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("quae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("asperiores"),
                                                Port: sdk.String("veniam"),
                                                Project: sdk.String("quidem"),
                                                Region: sdk.String("asperiores"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("eum"),
                                    Rrdatas: []string{
                                        "repudiandae",
                                        "nemo",
                                        "molestias",
                                    },
                                    SignatureRrdatas: []string{
                                        "expedita",
                                    },
                                    Weight: sdk.Float64(7878.5),
                                },
                            },
                            Kind: sdk.String("praesentium"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("repudiandae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("ipsum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("vitae"),
                                                Port: sdk.String("fugit"),
                                                Project: sdk.String("nam"),
                                                Region: sdk.String("ex"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("neque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("eos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ad"),
                                                Port: sdk.String("a"),
                                                Project: sdk.String("facere"),
                                                Region: sdk.String("id"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("atque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("aperiam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quam"),
                                                Port: sdk.String("modi"),
                                                Project: sdk.String("fuga"),
                                                Region: sdk.String("iure"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("deleniti"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("sint"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("dolor"),
                                                Port: sdk.String("ad"),
                                                Project: sdk.String("illum"),
                                                Region: sdk.String("sit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("molestias"),
                                    Rrdatas: []string{
                                        "expedita",
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                        "vel",
                                        "delectus",
                                        "accusamus",
                                    },
                                    Weight: sdk.Float64(9700.97),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sed"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("voluptates"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("maiores"),
                                                Port: sdk.String("quaerat"),
                                                Project: sdk.String("numquam"),
                                                Region: sdk.String("non"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("cum"),
                                    Rrdatas: []string{
                                        "dolores",
                                        "enim",
                                    },
                                    SignatureRrdatas: []string{
                                        "libero",
                                        "omnis",
                                    },
                                    Weight: sdk.Float64(5691.96),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quisquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("repellendus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quibusdam"),
                                                Port: sdk.String("est"),
                                                Project: sdk.String("commodi"),
                                                Region: sdk.String("similique"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("autem"),
                                    Rrdatas: []string{
                                        "recusandae",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                        "odit",
                                        "inventore",
                                        "iste",
                                    },
                                    Weight: sdk.Float64(5421.87),
                                },
                            },
                            Kind: sdk.String("explicabo"),
                        },
                    },
                    Rrdatas: []string{
                        "atque",
                        "doloribus",
                    },
                    SignatureRrdatas: []string{
                        "aut",
                        "similique",
                        "iste",
                        "eveniet",
                    },
                    TTL: sdk.Int(723623),
                    Type: sdk.String("animi"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("labore"),
                    Name: sdk.String("Shari Konopelski"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("perferendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("excepturi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("dolore"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("illum"),
                                                Region: sdk.String("laboriosam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("culpa"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("atque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("vitae"),
                                                Port: sdk.String("quisquam"),
                                                Project: sdk.String("atque"),
                                                Region: sdk.String("nihil"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("culpa"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("a"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("cupiditate"),
                                                Port: sdk.String("suscipit"),
                                                Project: sdk.String("reiciendis"),
                                                Region: sdk.String("repellendus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("delectus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("mollitia"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("praesentium"),
                                                Port: sdk.String("neque"),
                                                Project: sdk.String("quam"),
                                                Region: sdk.String("animi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("debitis"),
                                    Location: sdk.String("voluptatum"),
                                    Rrdatas: []string{
                                        "quisquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "cumque",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sint"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("occaecati"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("tempore"),
                                                Port: sdk.String("officia"),
                                                Project: sdk.String("iste"),
                                                Region: sdk.String("unde"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quas"),
                                    Location: sdk.String("laboriosam"),
                                    Rrdatas: []string{
                                        "voluptatum",
                                        "sapiente",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "hic",
                                        "iure",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("autem"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("cupiditate"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("fuga"),
                                                Port: sdk.String("a"),
                                                Project: sdk.String("dolor"),
                                                Region: sdk.String("voluptatum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("molestias"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("repudiandae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("consectetur"),
                                                Port: sdk.String("autem"),
                                                Project: sdk.String("vitae"),
                                                Region: sdk.String("numquam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("incidunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptate"),
                                                Port: sdk.String("error"),
                                                Project: sdk.String("reprehenderit"),
                                                Region: sdk.String("reprehenderit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("animi"),
                                    Location: sdk.String("consequatur"),
                                    Rrdatas: []string{
                                        "delectus",
                                        "qui",
                                        "delectus",
                                        "exercitationem",
                                    },
                                    SignatureRrdatas: []string{
                                        "laboriosam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sed"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("debitis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("itaque"),
                                                Port: sdk.String("eveniet"),
                                                Project: sdk.String("repellat"),
                                                Region: sdk.String("cupiditate"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("adipisci"),
                                    Location: sdk.String("aliquam"),
                                    Rrdatas: []string{
                                        "veniam",
                                    },
                                    SignatureRrdatas: []string{
                                        "necessitatibus",
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
                                                IPAddress: sdk.String("explicabo"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("non"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("incidunt"),
                                                Port: sdk.String("quod"),
                                                Project: sdk.String("sunt"),
                                                Region: sdk.String("ullam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("voluptates"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("est"),
                                                Port: sdk.String("in"),
                                                Project: sdk.String("illo"),
                                                Region: sdk.String("voluptate"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consequatur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("incidunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nemo"),
                                                Port: sdk.String("est"),
                                                Project: sdk.String("quo"),
                                                Region: sdk.String("maxime"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("delectus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("laboriosam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("fuga"),
                                                Port: sdk.String("officia"),
                                                Project: sdk.String("repellat"),
                                                Region: sdk.String("cupiditate"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("soluta"),
                                    Location: sdk.String("tempore"),
                                    Rrdatas: []string{
                                        "fugiat",
                                        "inventore",
                                        "atque",
                                    },
                                    SignatureRrdatas: []string{
                                        "sapiente",
                                        "voluptates",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nesciunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quibusdam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quidem"),
                                                Port: sdk.String("delectus"),
                                                Project: sdk.String("nemo"),
                                                Region: sdk.String("cumque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptatum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("atque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("expedita"),
                                                Port: sdk.String("rerum"),
                                                Project: sdk.String("totam"),
                                                Region: sdk.String("quod"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("aspernatur"),
                                    Location: sdk.String("eaque"),
                                    Rrdatas: []string{
                                        "nam",
                                        "ex",
                                        "odio",
                                        "delectus",
                                    },
                                    SignatureRrdatas: []string{
                                        "ut",
                                        "distinctio",
                                        "eius",
                                        "eos",
                                    },
                                },
                            },
                            Kind: sdk.String("veniam"),
                        },
                        Kind: sdk.String("repudiandae"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("debitis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eos"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("incidunt"),
                                                    Port: sdk.String("porro"),
                                                    Project: sdk.String("occaecati"),
                                                    Region: sdk.String("reiciendis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptate"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("in"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("possimus"),
                                                    Port: sdk.String("tenetur"),
                                                    Project: sdk.String("recusandae"),
                                                    Region: sdk.String("expedita"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iusto"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("harum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quod"),
                                                    Port: sdk.String("ratione"),
                                                    Project: sdk.String("totam"),
                                                    Region: sdk.String("vero"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolore"),
                                        Location: sdk.String("nam"),
                                        Rrdatas: []string{
                                            "maiores",
                                            "cupiditate",
                                            "illo",
                                        },
                                        SignatureRrdatas: []string{
                                            "enim",
                                            "eaque",
                                            "ex",
                                            "eveniet",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("deleniti"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("aut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nostrum"),
                                                    Port: sdk.String("tempora"),
                                                    Project: sdk.String("nam"),
                                                    Region: sdk.String("numquam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("maiores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("autem"),
                                                    Port: sdk.String("earum"),
                                                    Project: sdk.String("minima"),
                                                    Region: sdk.String("ex"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("possimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("corrupti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("fuga"),
                                                    Port: sdk.String("sequi"),
                                                    Project: sdk.String("maxime"),
                                                    Region: sdk.String("numquam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laborum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("autem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("rerum"),
                                                    Project: sdk.String("occaecati"),
                                                    Region: sdk.String("provident"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("necessitatibus"),
                                        Location: sdk.String("fugit"),
                                        Rrdatas: []string{
                                            "optio",
                                            "eveniet",
                                        },
                                        SignatureRrdatas: []string{
                                            "blanditiis",
                                            "a",
                                            "natus",
                                            "sapiente",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facilis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("dolore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("accusantium"),
                                                    Port: sdk.String("maiores"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("velit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("hic"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("vitae"),
                                                    Port: sdk.String("iusto"),
                                                    Project: sdk.String("atque"),
                                                    Region: sdk.String("velit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestiae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("aperiam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("mollitia"),
                                                    Port: sdk.String("asperiores"),
                                                    Project: sdk.String("at"),
                                                    Region: sdk.String("quibusdam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("rem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eos"),
                                                    Port: sdk.String("labore"),
                                                    Project: sdk.String("sunt"),
                                                    Region: sdk.String("blanditiis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iste"),
                                        Location: sdk.String("accusamus"),
                                        Rrdatas: []string{
                                            "incidunt",
                                            "labore",
                                            "blanditiis",
                                        },
                                        SignatureRrdatas: []string{
                                            "consectetur",
                                            "sapiente",
                                        },
                                    },
                                },
                                Kind: sdk.String("quis"),
                            },
                            Kind: sdk.String("accusantium"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("consectetur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("architecto"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("possimus"),
                                        Port: sdk.String("tempore"),
                                        Project: sdk.String("asperiores"),
                                        Region: sdk.String("quasi"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1597.29),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("debitis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("veritatis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("magni"),
                                                Port: sdk.String("itaque"),
                                                Project: sdk.String("error"),
                                                Region: sdk.String("expedita"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("error"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("temporibus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("earum"),
                                                Port: sdk.String("minima"),
                                                Project: sdk.String("odit"),
                                                Region: sdk.String("odit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eius"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("vel"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("alias"),
                                                Port: sdk.String("itaque"),
                                                Project: sdk.String("ab"),
                                                Region: sdk.String("sunt"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("amet"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("iusto"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("non"),
                                                Port: sdk.String("esse"),
                                                Project: sdk.String("vero"),
                                                Region: sdk.String("eligendi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("minima"),
                                    Rrdatas: []string{
                                        "recusandae",
                                        "architecto",
                                        "voluptatibus",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                        "repellat",
                                    },
                                    Weight: sdk.Float64(2271.29),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("quo"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("tempora"),
                                                Port: sdk.String("libero"),
                                                Project: sdk.String("suscipit"),
                                                Region: sdk.String("illum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("iusto"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("sint"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("repellat"),
                                                Port: sdk.String("sapiente"),
                                                Project: sdk.String("consectetur"),
                                                Region: sdk.String("eligendi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ullam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("eius"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("corporis"),
                                                Port: sdk.String("perferendis"),
                                                Project: sdk.String("architecto"),
                                                Region: sdk.String("amet"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("corporis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("officiis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("magnam"),
                                                Port: sdk.String("maiores"),
                                                Project: sdk.String("ipsam"),
                                                Region: sdk.String("dicta"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("hic"),
                                    Rrdatas: []string{
                                        "libero",
                                        "consequatur",
                                        "totam",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "dolor",
                                    },
                                    Weight: sdk.Float64(1231.79),
                                },
                            },
                            Kind: sdk.String("omnis"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dicta"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("consectetur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("odit"),
                                                Port: sdk.String("incidunt"),
                                                Project: sdk.String("corporis"),
                                                Region: sdk.String("quaerat"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("suscipit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("tenetur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("modi"),
                                                Port: sdk.String("corrupti"),
                                                Project: sdk.String("nihil"),
                                                Region: sdk.String("eius"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("placeat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("facere"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nobis"),
                                                Port: sdk.String("porro"),
                                                Project: sdk.String("labore"),
                                                Region: sdk.String("perspiciatis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ducimus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("qui"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ratione"),
                                                Port: sdk.String("saepe"),
                                                Project: sdk.String("iure"),
                                                Region: sdk.String("aliquid"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("cum"),
                                    Rrdatas: []string{
                                        "rem",
                                        "voluptatibus",
                                        "officiis",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                        "voluptatem",
                                        "libero",
                                        "excepturi",
                                    },
                                    Weight: sdk.Float64(4854.38),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("officiis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("magni"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("velit"),
                                                Port: sdk.String("voluptatum"),
                                                Project: sdk.String("nihil"),
                                                Region: sdk.String("neque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aspernatur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("corporis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("aut"),
                                                Port: sdk.String("impedit"),
                                                Project: sdk.String("quod"),
                                                Region: sdk.String("quo"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("architecto"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("perspiciatis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("eius"),
                                                Port: sdk.String("aperiam"),
                                                Project: sdk.String("voluptatem"),
                                                Region: sdk.String("non"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("beatae"),
                                    Rrdatas: []string{
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "debitis",
                                    },
                                    Weight: sdk.Float64(3391.18),
                                },
                            },
                            Kind: sdk.String("eaque"),
                        },
                    },
                    Rrdatas: []string{
                        "ut",
                        "delectus",
                    },
                    SignatureRrdatas: []string{
                        "ullam",
                        "maiores",
                    },
                    TTL: sdk.Int(894173),
                    Type: sdk.String("reprehenderit"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("eos"),
                    Name: sdk.String("Ms. Benny Goyette"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("cumque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("adipisci"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("non"),
                                                Port: sdk.String("accusantium"),
                                                Project: sdk.String("corrupti"),
                                                Region: sdk.String("itaque"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("earum"),
                                    Location: sdk.String("impedit"),
                                    Rrdatas: []string{
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "eveniet",
                                        "cum",
                                        "dolore",
                                        "illum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("officiis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("accusamus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("necessitatibus"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("maiores"),
                                                Region: sdk.String("odio"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("veniam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("itaque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("tenetur"),
                                                Port: sdk.String("sed"),
                                                Project: sdk.String("deserunt"),
                                                Region: sdk.String("eligendi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("id"),
                                    Location: sdk.String("distinctio"),
                                    Rrdatas: []string{
                                        "quas",
                                        "soluta",
                                    },
                                    SignatureRrdatas: []string{
                                        "unde",
                                        "et",
                                        "quisquam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sed"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("facere"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("quaerat"),
                                                Project: sdk.String("corrupti"),
                                                Region: sdk.String("sint"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eius"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quasi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("odio"),
                                                Port: sdk.String("numquam"),
                                                Project: sdk.String("fugit"),
                                                Region: sdk.String("inventore"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("optio"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("recusandae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("possimus"),
                                                Port: sdk.String("provident"),
                                                Project: sdk.String("veniam"),
                                                Region: sdk.String("sit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("fugit"),
                                    Location: sdk.String("a"),
                                    Rrdatas: []string{
                                        "vero",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                        "ratione",
                                        "perferendis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptas"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("maiores"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("fuga"),
                                                Port: sdk.String("cumque"),
                                                Project: sdk.String("consequuntur"),
                                                Region: sdk.String("maiores"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("esse"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("delectus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("deleniti"),
                                                Port: sdk.String("enim"),
                                                Project: sdk.String("sit"),
                                                Region: sdk.String("voluptatem"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("natus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("tempora"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quasi"),
                                                Port: sdk.String("veritatis"),
                                                Project: sdk.String("ex"),
                                                Region: sdk.String("doloremque"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quas"),
                                    Location: sdk.String("dolores"),
                                    Rrdatas: []string{
                                        "esse",
                                    },
                                    SignatureRrdatas: []string{
                                        "blanditiis",
                                        "laudantium",
                                        "voluptates",
                                    },
                                },
                            },
                            Kind: sdk.String("minus"),
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("beatae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("consectetur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("tenetur"),
                                                Port: sdk.String("necessitatibus"),
                                                Project: sdk.String("perspiciatis"),
                                                Region: sdk.String("suscipit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ullam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("debitis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("magnam"),
                                                Port: sdk.String("doloremque"),
                                                Project: sdk.String("accusamus"),
                                                Region: sdk.String("quod"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sunt"),
                                    Location: sdk.String("voluptas"),
                                    Rrdatas: []string{
                                        "est",
                                        "earum",
                                        "nihil",
                                        "nostrum",
                                    },
                                    SignatureRrdatas: []string{
                                        "perferendis",
                                        "nam",
                                        "ullam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eos"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("modi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("error"),
                                                Port: sdk.String("consectetur"),
                                                Project: sdk.String("reprehenderit"),
                                                Region: sdk.String("eligendi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("cum"),
                                    Location: sdk.String("culpa"),
                                    Rrdatas: []string{
                                        "a",
                                        "magnam",
                                        "eius",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                        "quod",
                                    },
                                },
                            },
                            Kind: sdk.String("quaerat"),
                        },
                        Kind: sdk.String("voluptatum"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eligendi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("tempore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("est"),
                                                    Port: sdk.String("at"),
                                                    Project: sdk.String("ipsum"),
                                                    Region: sdk.String("explicabo"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nulla"),
                                        Location: sdk.String("est"),
                                        Rrdatas: []string{
                                            "necessitatibus",
                                            "voluptatum",
                                            "quasi",
                                            "mollitia",
                                        },
                                        SignatureRrdatas: []string{
                                            "blanditiis",
                                            "sapiente",
                                            "ut",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("enim"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ratione"),
                                                    Port: sdk.String("tenetur"),
                                                    Project: sdk.String("saepe"),
                                                    Region: sdk.String("quod"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nulla"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nemo"),
                                                    Port: sdk.String("nesciunt"),
                                                    Project: sdk.String("earum"),
                                                    Region: sdk.String("eum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolor"),
                                        Location: sdk.String("placeat"),
                                        Rrdatas: []string{
                                            "sed",
                                            "eaque",
                                            "natus",
                                        },
                                        SignatureRrdatas: []string{
                                            "nihil",
                                        },
                                    },
                                },
                                Kind: sdk.String("unde"),
                            },
                            Kind: sdk.String("deserunt"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ex"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("optio"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("ad"),
                                        Port: sdk.String("asperiores"),
                                        Project: sdk.String("nam"),
                                        Region: sdk.String("cumque"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sapiente"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("occaecati"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("culpa"),
                                        Port: sdk.String("dicta"),
                                        Project: sdk.String("rem"),
                                        Region: sdk.String("fuga"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("odio"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("magni"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("harum"),
                                        Port: sdk.String("voluptatibus"),
                                        Project: sdk.String("omnis"),
                                        Region: sdk.String("quis"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(5528.86),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("praesentium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("vitae"),
                                                Port: sdk.String("animi"),
                                                Project: sdk.String("possimus"),
                                                Region: sdk.String("libero"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ullam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("maiores"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("accusamus"),
                                                Port: sdk.String("ipsam"),
                                                Project: sdk.String("fugiat"),
                                                Region: sdk.String("odio"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ullam"),
                                    Rrdatas: []string{
                                        "eligendi",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloribus",
                                        "necessitatibus",
                                        "rem",
                                    },
                                    Weight: sdk.Float64(9534.06),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("veniam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("magni"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptatibus"),
                                                Port: sdk.String("nulla"),
                                                Project: sdk.String("quod"),
                                                Region: sdk.String("non"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("alias"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("modi"),
                                                Port: sdk.String("illo"),
                                                Project: sdk.String("a"),
                                                Region: sdk.String("et"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("molestiae"),
                                    Rrdatas: []string{
                                        "dolore",
                                        "eius",
                                    },
                                    SignatureRrdatas: []string{
                                        "ex",
                                        "amet",
                                    },
                                    Weight: sdk.Float64(4543.86),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptatibus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("hic"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("odit"),
                                                Port: sdk.String("molestiae"),
                                                Project: sdk.String("accusamus"),
                                                Region: sdk.String("quia"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("inventore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("praesentium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("consequuntur"),
                                                Port: sdk.String("laboriosam"),
                                                Project: sdk.String("nemo"),
                                                Region: sdk.String("reprehenderit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("soluta"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("vel"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("maxime"),
                                                Port: sdk.String("vel"),
                                                Project: sdk.String("distinctio"),
                                                Region: sdk.String("cupiditate"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("hic"),
                                    Rrdatas: []string{
                                        "deleniti",
                                        "iusto",
                                    },
                                    SignatureRrdatas: []string{
                                        "saepe",
                                        "ad",
                                        "magni",
                                        "nostrum",
                                    },
                                    Weight: sdk.Float64(7934.02),
                                },
                            },
                            Kind: sdk.String("aliquid"),
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("numquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("fuga"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("velit"),
                                                Port: sdk.String("quasi"),
                                                Project: sdk.String("sed"),
                                                Region: sdk.String("officiis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("veniam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("dolore"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("libero"),
                                                Port: sdk.String("ut"),
                                                Project: sdk.String("cumque"),
                                                Region: sdk.String("quia"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("beatae"),
                                    Rrdatas: []string{
                                        "cumque",
                                        "distinctio",
                                        "numquam",
                                        "fugit",
                                    },
                                    SignatureRrdatas: []string{
                                        "culpa",
                                    },
                                    Weight: sdk.Float64(7057.53),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("omnis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("earum"),
                                                Port: sdk.String("fuga"),
                                                Project: sdk.String("est"),
                                                Region: sdk.String("distinctio"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fugiat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("totam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("officiis"),
                                                Port: sdk.String("esse"),
                                                Project: sdk.String("vitae"),
                                                Region: sdk.String("delectus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("laboriosam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("labore"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("sed"),
                                                Port: sdk.String("veniam"),
                                                Project: sdk.String("sed"),
                                                Region: sdk.String("quibusdam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reprehenderit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("reprehenderit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("eveniet"),
                                                Port: sdk.String("voluptate"),
                                                Project: sdk.String("hic"),
                                                Region: sdk.String("at"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("perferendis"),
                                    Rrdatas: []string{
                                        "eius",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "iste",
                                    },
                                    Weight: sdk.Float64(8814.13),
                                },
                            },
                            Kind: sdk.String("repellat"),
                        },
                    },
                    Rrdatas: []string{
                        "facere",
                        "consequuntur",
                        "natus",
                    },
                    SignatureRrdatas: []string{
                        "voluptates",
                        "illo",
                        "facere",
                        "fugiat",
                    },
                    TTL: sdk.Int(498639),
                    Type: sdk.String("aut"),
                },
            },
            ID: sdk.String("97b5da08-c57f-4a6c-b8a2-16e19bafeca6"),
            IsServing: sdk.Bool(false),
            Kind: sdk.String("illo"),
            StartTime: sdk.String("cupiditate"),
            Status: shared.ChangeStatusEnumPending.ToPointer(),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("atque"),
        ClientOperationID: sdk.String("dicta"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("doloremque"),
        ManagedZone: "cum",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        Project: "eius",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DNSChangesCreateSecurity{
        Option1: &operations.DNSChangesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
}
```

## DNSChangesGet

Fetches the representation of an existing Change.

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
    res, err := s.Changes.DNSChangesGet(ctx, operations.DNSChangesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        ChangeID: "consequatur",
        ClientOperationID: sdk.String("itaque"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("voluptatem"),
        ManagedZone: "dolor",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        Project: "quaerat",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DNSChangesGetSecurity{
        Option1: &operations.DNSChangesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
}
```

## DNSChangesList

Enumerates Changes to a ResourceRecordSet collection.

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
    res, err := s.Changes.DNSChangesList(ctx, operations.DNSChangesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("suscipit"),
        ManagedZone: "quas",
        MaxResults: sdk.Int64(338542),
        OauthToken: sdk.String("enim"),
        PageToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        Project: "iste",
        QuotaUser: sdk.String("ea"),
        SortBy: operations.DNSChangesListSortByEnumChangeSequence.ToPointer(),
        SortOrder: sdk.String("autem"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DNSChangesListSecurity{
        Option1: &operations.DNSChangesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChangesListResponse != nil {
        // handle response
    }
}
```
