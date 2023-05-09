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
                    Kind: sdk.String("veniam"),
                    Name: sdk.String("Cecelia Braun"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("laboriosam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("voluptatum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("hic"),
                                                Port: sdk.String("expedita"),
                                                Project: sdk.String("debitis"),
                                                Region: sdk.String("neque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolorum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("officia"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("corrupti"),
                                                Port: sdk.String("accusamus"),
                                                Project: sdk.String("tempora"),
                                                Region: sdk.String("atque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fugit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("fugiat"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("culpa"),
                                                Port: sdk.String("expedita"),
                                                Project: sdk.String("magnam"),
                                                Region: sdk.String("consequatur"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("esse"),
                                    Location: sdk.String("ipsam"),
                                    Rrdatas: []string{
                                        "voluptatum",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "corporis",
                                        "et",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ex"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("sit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nostrum"),
                                                Port: sdk.String("saepe"),
                                                Project: sdk.String("error"),
                                                Region: sdk.String("consequatur"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("incidunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("dolorem"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("dicta"),
                                                Port: sdk.String("architecto"),
                                                Project: sdk.String("occaecati"),
                                                Region: sdk.String("labore"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quidem"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("laborum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("tenetur"),
                                                Port: sdk.String("laboriosam"),
                                                Project: sdk.String("alias"),
                                                Region: sdk.String("amet"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("deserunt"),
                                    Location: sdk.String("voluptate"),
                                    Rrdatas: []string{
                                        "reiciendis",
                                        "provident",
                                        "repellendus",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptates",
                                        "perferendis",
                                        "est",
                                        "quidem",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("facere"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("praesentium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("veniam"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("quisquam"),
                                                Region: sdk.String("repudiandae"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quasi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("reprehenderit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("totam"),
                                                Port: sdk.String("suscipit"),
                                                Project: sdk.String("quidem"),
                                                Region: sdk.String("maxime"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("et"),
                                    Location: sdk.String("esse"),
                                    Rrdatas: []string{
                                        "assumenda",
                                    },
                                    SignatureRrdatas: []string{
                                        "atque",
                                        "error",
                                    },
                                },
                            },
                            Kind: sdk.String("officiis"),
                        },
                        Kind: sdk.String("officiis"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minima"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ex"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("corrupti"),
                                                    Port: sdk.String("at"),
                                                    Project: sdk.String("error"),
                                                    Region: sdk.String("blanditiis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("suscipit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("recusandae"),
                                                    Project: sdk.String("dolorum"),
                                                    Region: sdk.String("repellendus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("doloremque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("dicta"),
                                                    Port: sdk.String("accusantium"),
                                                    Project: sdk.String("beatae"),
                                                    Region: sdk.String("dolores"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("enim"),
                                        Location: sdk.String("laboriosam"),
                                        Rrdatas: []string{
                                            "a",
                                        },
                                        SignatureRrdatas: []string{
                                            "magnam",
                                            "saepe",
                                            "consequuntur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officiis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("in"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eveniet"),
                                                    Port: sdk.String("occaecati"),
                                                    Project: sdk.String("consequuntur"),
                                                    Region: sdk.String("fugit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("reprehenderit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("illo"),
                                                    Port: sdk.String("corporis"),
                                                    Project: sdk.String("quidem"),
                                                    Region: sdk.String("eveniet"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("non"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("doloremque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ipsa"),
                                                    Port: sdk.String("totam"),
                                                    Project: sdk.String("quae"),
                                                    Region: sdk.String("molestiae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("eveniet"),
                                        Location: sdk.String("qui"),
                                        Rrdatas: []string{
                                            "iure",
                                            "necessitatibus",
                                            "ratione",
                                        },
                                        SignatureRrdatas: []string{
                                            "distinctio",
                                            "voluptatum",
                                            "rem",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ad"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("alias"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("nihil"),
                                                    Project: sdk.String("mollitia"),
                                                    Region: sdk.String("voluptas"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("alias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("id"),
                                                    Port: sdk.String("minima"),
                                                    Project: sdk.String("dolore"),
                                                    Region: sdk.String("dolorum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nesciunt"),
                                        Location: sdk.String("quae"),
                                        Rrdatas: []string{
                                            "omnis",
                                            "quaerat",
                                            "molestiae",
                                            "ex",
                                        },
                                        SignatureRrdatas: []string{
                                            "culpa",
                                            "adipisci",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laudantium"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nemo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("esse"),
                                                    Port: sdk.String("provident"),
                                                    Project: sdk.String("quis"),
                                                    Region: sdk.String("eum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reiciendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("aspernatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quasi"),
                                                    Port: sdk.String("animi"),
                                                    Project: sdk.String("nostrum"),
                                                    Region: sdk.String("mollitia"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("provident"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("animi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aliquid"),
                                                    Port: sdk.String("accusantium"),
                                                    Project: sdk.String("repellat"),
                                                    Region: sdk.String("doloribus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ullam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("officia"),
                                                    Port: sdk.String("laborum"),
                                                    Project: sdk.String("placeat"),
                                                    Region: sdk.String("modi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptatibus"),
                                        Location: sdk.String("molestias"),
                                        Rrdatas: []string{
                                            "sapiente",
                                            "cumque",
                                            "vitae",
                                            "rerum",
                                        },
                                        SignatureRrdatas: []string{
                                            "quis",
                                            "inventore",
                                        },
                                    },
                                },
                                Kind: sdk.String("fugit"),
                            },
                            Kind: sdk.String("cumque"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("perferendis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("aspernatur"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("eius"),
                                        Port: sdk.String("rem"),
                                        Project: sdk.String("at"),
                                        Region: sdk.String("impedit"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1794.1),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dicta"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("beatae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("provident"),
                                                Port: sdk.String("earum"),
                                                Project: sdk.String("soluta"),
                                                Region: sdk.String("hic"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("illum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("earum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("maiores"),
                                                Port: sdk.String("debitis"),
                                                Project: sdk.String("aliquid"),
                                                Region: sdk.String("porro"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("suscipit"),
                                    Rrdatas: []string{
                                        "fugit",
                                    },
                                    SignatureRrdatas: []string{
                                        "fuga",
                                        "ratione",
                                        "animi",
                                        "necessitatibus",
                                    },
                                    Weight: sdk.Float64(8620.63),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quasi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("ducimus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("occaecati"),
                                                Port: sdk.String("suscipit"),
                                                Project: sdk.String("adipisci"),
                                                Region: sdk.String("quasi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("magni"),
                                    Rrdatas: []string{
                                        "nulla",
                                        "necessitatibus",
                                        "ipsa",
                                        "tempora",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "dicta",
                                    },
                                    Weight: sdk.Float64(4797.54),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("praesentium"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("reiciendis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("architecto"),
                                                Port: sdk.String("fugiat"),
                                                Project: sdk.String("doloremque"),
                                                Region: sdk.String("dicta"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("odio"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("esse"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("consectetur"),
                                                Port: sdk.String("aliquid"),
                                                Project: sdk.String("ipsa"),
                                                Region: sdk.String("laborum"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sunt"),
                                    Rrdatas: []string{
                                        "fugiat",
                                        "expedita",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                        "suscipit",
                                    },
                                    Weight: sdk.Float64(3991.61),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("iste"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("ab"),
                                                Port: sdk.String("error"),
                                                Project: sdk.String("possimus"),
                                                Region: sdk.String("voluptates"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("mollitia"),
                                    Rrdatas: []string{
                                        "libero",
                                        "ad",
                                        "deleniti",
                                    },
                                    SignatureRrdatas: []string{
                                        "vitae",
                                        "repellendus",
                                    },
                                    Weight: sdk.Float64(4050.36),
                                },
                            },
                            Kind: sdk.String("quo"),
                        },
                    },
                    Rrdatas: []string{
                        "ut",
                        "ad",
                    },
                    SignatureRrdatas: []string{
                        "voluptatem",
                        "molestias",
                        "cum",
                    },
                    TTL: sdk.Int(399660),
                    Type: sdk.String("beatae"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("voluptatum"),
                    Name: sdk.String("Peter Prosacco"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("officiis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("fuga"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("debitis"),
                                                Port: sdk.String("voluptatem"),
                                                Project: sdk.String("alias"),
                                                Region: sdk.String("deleniti"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("earum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("sapiente"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("minus"),
                                                Port: sdk.String("nemo"),
                                                Project: sdk.String("asperiores"),
                                                Region: sdk.String("ratione"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ullam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("illum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("impedit"),
                                                Port: sdk.String("quibusdam"),
                                                Project: sdk.String("nam"),
                                                Region: sdk.String("ipsam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("culpa"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("aliquam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("deleniti"),
                                                Port: sdk.String("veritatis"),
                                                Project: sdk.String("tempora"),
                                                Region: sdk.String("dolor"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("consequatur"),
                                    Location: sdk.String("architecto"),
                                    Rrdatas: []string{
                                        "modi",
                                    },
                                    SignatureRrdatas: []string{
                                        "ab",
                                    },
                                },
                            },
                            Kind: sdk.String("laudantium"),
                        },
                        Kind: sdk.String("quae"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ipsam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ipsa"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("eveniet"),
                                                    Port: sdk.String("impedit"),
                                                    Project: sdk.String("officiis"),
                                                    Region: sdk.String("esse"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("necessitatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("veniam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("expedita"),
                                                    Port: sdk.String("eum"),
                                                    Project: sdk.String("vel"),
                                                    Region: sdk.String("voluptatum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magnam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ab"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("autem"),
                                                    Port: sdk.String("nobis"),
                                                    Project: sdk.String("laboriosam"),
                                                    Region: sdk.String("recusandae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequuntur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("exercitationem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quasi"),
                                                    Port: sdk.String("nisi"),
                                                    Project: sdk.String("at"),
                                                    Region: sdk.String("vero"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("est"),
                                        Location: sdk.String("harum"),
                                        Rrdatas: []string{
                                            "doloribus",
                                        },
                                        SignatureRrdatas: []string{
                                            "optio",
                                            "occaecati",
                                            "nemo",
                                            "voluptate",
                                        },
                                    },
                                },
                                Kind: sdk.String("blanditiis"),
                            },
                            Kind: sdk.String("officia"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("numquam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("quos"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("aspernatur"),
                                        Port: sdk.String("ducimus"),
                                        Project: sdk.String("nesciunt"),
                                        Region: sdk.String("fuga"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("laudantium"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("quasi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("fugiat"),
                                        Port: sdk.String("dicta"),
                                        Project: sdk.String("nisi"),
                                        Region: sdk.String("consequuntur"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(2330.78),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("alias"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("eos"),
                                                Port: sdk.String("occaecati"),
                                                Project: sdk.String("iste"),
                                                Region: sdk.String("magni"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("inventore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("accusamus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("distinctio"),
                                                Port: sdk.String("omnis"),
                                                Project: sdk.String("delectus"),
                                                Region: sdk.String("minima"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("praesentium"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("magnam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("quos"),
                                                Port: sdk.String("commodi"),
                                                Project: sdk.String("itaque"),
                                                Region: sdk.String("commodi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("totam"),
                                    Rrdatas: []string{
                                        "modi",
                                        "nam",
                                        "vero",
                                        "voluptatem",
                                    },
                                    SignatureRrdatas: []string{
                                        "vel",
                                        "alias",
                                    },
                                    Weight: sdk.Float64(938.94),
                                },
                            },
                            Kind: sdk.String("non"),
                        },
                    },
                    Rrdatas: []string{
                        "enim",
                        "sint",
                        "nulla",
                        "deserunt",
                    },
                    SignatureRrdatas: []string{
                        "nemo",
                        "reprehenderit",
                    },
                    TTL: sdk.Int(667715),
                    Type: sdk.String("quis"),
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: sdk.String("accusamus"),
                    Name: sdk.String("Irvin Tromp"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("delectus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("minus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("laborum"),
                                                Port: sdk.String("consectetur"),
                                                Project: sdk.String("velit"),
                                                Region: sdk.String("atque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ipsum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("magni"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("repudiandae"),
                                                Port: sdk.String("nam"),
                                                Project: sdk.String("dolore"),
                                                Region: sdk.String("iusto"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptate"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("dignissimos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quo"),
                                                Port: sdk.String("deleniti"),
                                                Project: sdk.String("quibusdam"),
                                                Region: sdk.String("iure"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("odit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("vel"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quibusdam"),
                                                Port: sdk.String("inventore"),
                                                Project: sdk.String("facere"),
                                                Region: sdk.String("libero"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("architecto"),
                                    Location: sdk.String("voluptatibus"),
                                    Rrdatas: []string{
                                        "porro",
                                    },
                                    SignatureRrdatas: []string{
                                        "velit",
                                        "illo",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vel"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("beatae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("excepturi"),
                                                Port: sdk.String("eum"),
                                                Project: sdk.String("velit"),
                                                Region: sdk.String("ut"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("perspiciatis"),
                                    Location: sdk.String("earum"),
                                    Rrdatas: []string{
                                        "impedit",
                                    },
                                    SignatureRrdatas: []string{
                                        "iste",
                                        "itaque",
                                        "alias",
                                        "nisi",
                                    },
                                },
                            },
                            Kind: sdk.String("itaque"),
                        },
                        Kind: sdk.String("velit"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolor"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("sit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consequatur"),
                                                    Port: sdk.String("officia"),
                                                    Project: sdk.String("recusandae"),
                                                    Region: sdk.String("ea"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quidem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("facilis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("expedita"),
                                                    Project: sdk.String("deleniti"),
                                                    Region: sdk.String("a"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptate"),
                                        Location: sdk.String("ullam"),
                                        Rrdatas: []string{
                                            "necessitatibus",
                                            "animi",
                                            "impedit",
                                        },
                                        SignatureRrdatas: []string{
                                            "corporis",
                                            "est",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("esse"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("veritatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("consectetur"),
                                                    Port: sdk.String("vitae"),
                                                    Project: sdk.String("inventore"),
                                                    Region: sdk.String("dolorem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ad"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("iste"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nemo"),
                                                    Port: sdk.String("soluta"),
                                                    Project: sdk.String("libero"),
                                                    Region: sdk.String("rem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolorum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("fugit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("magni"),
                                                    Port: sdk.String("vel"),
                                                    Project: sdk.String("quae"),
                                                    Region: sdk.String("quae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("modi"),
                                        Location: sdk.String("neque"),
                                        Rrdatas: []string{
                                            "itaque",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "unde",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("distinctio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nostrum"),
                                                    Port: sdk.String("omnis"),
                                                    Project: sdk.String("libero"),
                                                    Region: sdk.String("dicta"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("fugiat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quos"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("iusto"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ipsa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("inventore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("totam"),
                                                    Port: sdk.String("dolore"),
                                                    Project: sdk.String("eligendi"),
                                                    Region: sdk.String("distinctio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("esse"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("assumenda"),
                                                    Port: sdk.String("beatae"),
                                                    Project: sdk.String("est"),
                                                    Region: sdk.String("facere"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("corrupti"),
                                        Location: sdk.String("molestiae"),
                                        Rrdatas: []string{
                                            "accusamus",
                                            "necessitatibus",
                                            "tempore",
                                        },
                                        SignatureRrdatas: []string{
                                            "ea",
                                            "autem",
                                            "ipsam",
                                        },
                                    },
                                },
                                Kind: sdk.String("rerum"),
                            },
                            Kind: sdk.String("laudantium"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("officiis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("cum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("alias"),
                                        Port: sdk.String("quia"),
                                        Project: sdk.String("quidem"),
                                        Region: sdk.String("fuga"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("repudiandae"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("expedita"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                        NetworkURL: sdk.String("eos"),
                                        Port: sdk.String("quibusdam"),
                                        Project: sdk.String("odio"),
                                        Region: sdk.String("praesentium"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1403.16),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("error"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("adipisci"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("ut"),
                                                Project: sdk.String("quidem"),
                                                Region: sdk.String("quis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("beatae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("molestiae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("cupiditate"),
                                                Port: sdk.String("fugit"),
                                                Project: sdk.String("numquam"),
                                                Region: sdk.String("numquam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("nesciunt"),
                                    Rrdatas: []string{
                                        "officia",
                                        "dignissimos",
                                        "optio",
                                        "necessitatibus",
                                    },
                                    SignatureRrdatas: []string{
                                        "qui",
                                        "expedita",
                                    },
                                    Weight: sdk.Float64(5326.69),
                                },
                            },
                            Kind: sdk.String("cupiditate"),
                        },
                    },
                    Rrdatas: []string{
                        "placeat",
                        "enim",
                    },
                    SignatureRrdatas: []string{
                        "in",
                    },
                    TTL: sdk.Int(796397),
                    Type: sdk.String("eum"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("modi"),
                    Name: sdk.String("Danielle Volkman"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ratione"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("totam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptas"),
                                                Port: sdk.String("quo"),
                                                Project: sdk.String("velit"),
                                                Region: sdk.String("minus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fuga"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("est"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("delectus"),
                                                Port: sdk.String("tempore"),
                                                Project: sdk.String("vero"),
                                                Region: sdk.String("odit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("repellat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("nemo"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("aperiam"),
                                                Port: sdk.String("odio"),
                                                Project: sdk.String("minima"),
                                                Region: sdk.String("in"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ducimus"),
                                    Location: sdk.String("excepturi"),
                                    Rrdatas: []string{
                                        "error",
                                    },
                                    SignatureRrdatas: []string{
                                        "ducimus",
                                    },
                                },
                            },
                            Kind: sdk.String("voluptate"),
                        },
                        Kind: sdk.String("pariatur"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("optio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quaerat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("officiis"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("quidem"),
                                                    Region: sdk.String("exercitationem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sint"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("repudiandae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("cum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("earum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("animi"),
                                                    Port: sdk.String("dolores"),
                                                    Project: sdk.String("nam"),
                                                    Region: sdk.String("dicta"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("consequuntur"),
                                        Location: sdk.String("necessitatibus"),
                                        Rrdatas: []string{
                                            "ipsa",
                                            "ducimus",
                                            "maiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "quasi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("pariatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("excepturi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nemo"),
                                                    Port: sdk.String("aliquam"),
                                                    Project: sdk.String("nostrum"),
                                                    Region: sdk.String("doloribus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eligendi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("enim"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("animi"),
                                                    Port: sdk.String("quas"),
                                                    Project: sdk.String("totam"),
                                                    Region: sdk.String("molestias"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("odio"),
                                        Location: sdk.String("eaque"),
                                        Rrdatas: []string{
                                            "architecto",
                                            "quos",
                                            "iste",
                                            "assumenda",
                                        },
                                        SignatureRrdatas: []string{
                                            "libero",
                                            "velit",
                                            "doloremque",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("impedit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ipsum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("deserunt"),
                                                    Project: sdk.String("doloremque"),
                                                    Region: sdk.String("quis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veniam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("architecto"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("molestiae"),
                                                    Port: sdk.String("eligendi"),
                                                    Project: sdk.String("possimus"),
                                                    Region: sdk.String("non"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magnam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sed"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("veniam"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("facere"),
                                                    Region: sdk.String("laudantium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("amet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ab"),
                                                    Port: sdk.String("velit"),
                                                    Project: sdk.String("facilis"),
                                                    Region: sdk.String("tempore"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nisi"),
                                        Location: sdk.String("voluptatibus"),
                                        Rrdatas: []string{
                                            "blanditiis",
                                            "distinctio",
                                        },
                                        SignatureRrdatas: []string{
                                            "quis",
                                            "nisi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("facilis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ad"),
                                                    Port: sdk.String("voluptatibus"),
                                                    Project: sdk.String("voluptatibus"),
                                                    Region: sdk.String("consequuntur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("debitis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("rerum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("reprehenderit"),
                                                    Port: sdk.String("nostrum"),
                                                    Project: sdk.String("neque"),
                                                    Region: sdk.String("iusto"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("est"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eligendi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("unde"),
                                                    Port: sdk.String("officiis"),
                                                    Project: sdk.String("ducimus"),
                                                    Region: sdk.String("dolor"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dicta"),
                                        Location: sdk.String("error"),
                                        Rrdatas: []string{
                                            "vitae",
                                            "dignissimos",
                                            "esse",
                                            "fugiat",
                                        },
                                        SignatureRrdatas: []string{
                                            "aspernatur",
                                            "enim",
                                        },
                                    },
                                },
                                Kind: sdk.String("delectus"),
                            },
                            Kind: sdk.String("iusto"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("libero"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("ab"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("accusamus"),
                                        Port: sdk.String("saepe"),
                                        Project: sdk.String("tempore"),
                                        Region: sdk.String("veniam"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("eos"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("earum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("praesentium"),
                                        Port: sdk.String("nemo"),
                                        Project: sdk.String("repellat"),
                                        Region: sdk.String("quisquam"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1972.59),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("illo"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("assumenda"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quisquam"),
                                                Port: sdk.String("provident"),
                                                Project: sdk.String("laudantium"),
                                                Region: sdk.String("repudiandae"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consequatur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("aspernatur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("expedita"),
                                                Port: sdk.String("quas"),
                                                Project: sdk.String("provident"),
                                                Region: sdk.String("repudiandae"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("rerum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("corporis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("repellendus"),
                                                Project: sdk.String("iure"),
                                                Region: sdk.String("dolorem"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("commodi"),
                                    Rrdatas: []string{
                                        "commodi",
                                        "aut",
                                        "voluptatem",
                                        "ad",
                                    },
                                    SignatureRrdatas: []string{
                                        "amet",
                                    },
                                    Weight: sdk.Float64(8493.2),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quidem"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("amet"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("dicta"),
                                                Port: sdk.String("laudantium"),
                                                Project: sdk.String("doloremque"),
                                                Region: sdk.String("earum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("iusto"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("provident"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("necessitatibus"),
                                                Port: sdk.String("provident"),
                                                Project: sdk.String("repudiandae"),
                                                Region: sdk.String("consequatur"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nemo"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("itaque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("corrupti"),
                                                Port: sdk.String("aperiam"),
                                                Project: sdk.String("sint"),
                                                Region: sdk.String("accusamus"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("eos"),
                                    Rrdatas: []string{
                                        "dicta",
                                        "voluptatem",
                                        "velit",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                    },
                                    Weight: sdk.Float64(9536.76),
                                },
                            },
                            Kind: sdk.String("dolor"),
                        },
                    },
                    Rrdatas: []string{
                        "atque",
                        "beatae",
                        "at",
                    },
                    SignatureRrdatas: []string{
                        "minus",
                        "esse",
                    },
                    TTL: sdk.Int(32356),
                    Type: sdk.String("perferendis"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("rerum"),
                    Name: sdk.String("Kimberly Kuhn"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consectetur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("dignissimos"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("soluta"),
                                                Port: sdk.String("natus"),
                                                Project: sdk.String("temporibus"),
                                                Region: sdk.String("officia"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("amet"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("aspernatur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("itaque"),
                                                Port: sdk.String("illum"),
                                                Project: sdk.String("laborum"),
                                                Region: sdk.String("dignissimos"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("consectetur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("explicabo"),
                                                Port: sdk.String("explicabo"),
                                                Project: sdk.String("exercitationem"),
                                                Region: sdk.String("nihil"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("non"),
                                    Location: sdk.String("ab"),
                                    Rrdatas: []string{
                                        "hic",
                                    },
                                    SignatureRrdatas: []string{
                                        "delectus",
                                        "non",
                                        "distinctio",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("exercitationem"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("numquam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("modi"),
                                                Port: sdk.String("in"),
                                                Project: sdk.String("explicabo"),
                                                Region: sdk.String("accusamus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("rem"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("odit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("enim"),
                                                Port: sdk.String("voluptate"),
                                                Project: sdk.String("similique"),
                                                Region: sdk.String("minima"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("libero"),
                                    Location: sdk.String("magnam"),
                                    Rrdatas: []string{
                                        "modi",
                                    },
                                    SignatureRrdatas: []string{
                                        "nesciunt",
                                        "mollitia",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fugiat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("molestiae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("reiciendis"),
                                                Port: sdk.String("ab"),
                                                Project: sdk.String("modi"),
                                                Region: sdk.String("aut"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aut"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("odio"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("numquam"),
                                                Port: sdk.String("dolorum"),
                                                Project: sdk.String("possimus"),
                                                Region: sdk.String("voluptate"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("consectetur"),
                                    Location: sdk.String("nesciunt"),
                                    Rrdatas: []string{
                                        "itaque",
                                        "minus",
                                    },
                                    SignatureRrdatas: []string{
                                        "distinctio",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quas"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("facilis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("autem"),
                                                Port: sdk.String("fuga"),
                                                Project: sdk.String("alias"),
                                                Region: sdk.String("rem"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aut"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("laudantium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("veritatis"),
                                                Port: sdk.String("quae"),
                                                Project: sdk.String("eaque"),
                                                Region: sdk.String("saepe"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("delectus"),
                                    Location: sdk.String("mollitia"),
                                    Rrdatas: []string{
                                        "officia",
                                        "sed",
                                        "voluptatem",
                                        "alias",
                                    },
                                    SignatureRrdatas: []string{
                                        "hic",
                                        "voluptatem",
                                        "incidunt",
                                        "qui",
                                    },
                                },
                            },
                            Kind: sdk.String("qui"),
                        },
                        Kind: sdk.String("necessitatibus"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("beatae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatibus"),
                                                    Port: sdk.String("molestias"),
                                                    Project: sdk.String("officia"),
                                                    Region: sdk.String("libero"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("totam"),
                                        Location: sdk.String("sequi"),
                                        Rrdatas: []string{
                                            "ea",
                                            "impedit",
                                        },
                                        SignatureRrdatas: []string{
                                            "odit",
                                            "velit",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("repellat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laborum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("accusamus"),
                                                    Port: sdk.String("doloremque"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("rerum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("recusandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("non"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quia"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("quisquam"),
                                                    Region: sdk.String("dicta"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("architecto"),
                                                    Port: sdk.String("architecto"),
                                                    Project: sdk.String("enim"),
                                                    Region: sdk.String("optio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("facilis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("a"),
                                                    Port: sdk.String("iste"),
                                                    Project: sdk.String("dicta"),
                                                    Region: sdk.String("quos"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ullam"),
                                        Location: sdk.String("dolore"),
                                        Rrdatas: []string{
                                            "itaque",
                                            "maxime",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequuntur",
                                            "assumenda",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("doloribus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("porro"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("totam"),
                                                    Port: sdk.String("reiciendis"),
                                                    Project: sdk.String("ab"),
                                                    Region: sdk.String("sint"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nihil"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("iure"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nesciunt"),
                                                    Port: sdk.String("debitis"),
                                                    Project: sdk.String("vel"),
                                                    Region: sdk.String("neque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("corporis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("consequuntur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("reprehenderit"),
                                                    Port: sdk.String("distinctio"),
                                                    Project: sdk.String("eius"),
                                                    Region: sdk.String("ipsa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("accusantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("neque"),
                                                    Project: sdk.String("facere"),
                                                    Region: sdk.String("aliquam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quos"),
                                        Location: sdk.String("doloribus"),
                                        Rrdatas: []string{
                                            "est",
                                            "delectus",
                                            "velit",
                                            "vitae",
                                        },
                                        SignatureRrdatas: []string{
                                            "similique",
                                        },
                                    },
                                },
                                Kind: sdk.String("illo"),
                            },
                            Kind: sdk.String("repellat"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("doloribus"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("unde"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("explicabo"),
                                        Port: sdk.String("ipsam"),
                                        Project: sdk.String("cupiditate"),
                                        Region: sdk.String("optio"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("alias"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("nesciunt"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("sapiente"),
                                        Port: sdk.String("consequuntur"),
                                        Project: sdk.String("veniam"),
                                        Region: sdk.String("debitis"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(6383.9),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("numquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("adipisci"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("in"),
                                                Port: sdk.String("minima"),
                                                Project: sdk.String("ex"),
                                                Region: sdk.String("minus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ab"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("hic"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quisquam"),
                                                Port: sdk.String("dolor"),
                                                Project: sdk.String("ducimus"),
                                                Region: sdk.String("fuga"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("minima"),
                                    Rrdatas: []string{
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "magni",
                                        "incidunt",
                                    },
                                    Weight: sdk.Float64(2404.9),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolor"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("expedita"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("impedit"),
                                                Port: sdk.String("sit"),
                                                Project: sdk.String("nemo"),
                                                Region: sdk.String("culpa"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("consequuntur"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("deserunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("veniam"),
                                                Port: sdk.String("quod"),
                                                Project: sdk.String("itaque"),
                                                Region: sdk.String("a"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quisquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("doloribus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                NetworkURL: sdk.String("officiis"),
                                                Port: sdk.String("architecto"),
                                                Project: sdk.String("alias"),
                                                Region: sdk.String("culpa"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ipsa"),
                                    Rrdatas: []string{
                                        "necessitatibus",
                                        "quia",
                                        "dicta",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "debitis",
                                        "ullam",
                                        "architecto",
                                    },
                                    Weight: sdk.Float64(337.71),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("veritatis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("cumque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quibusdam"),
                                                Port: sdk.String("quod"),
                                                Project: sdk.String("nemo"),
                                                Region: sdk.String("recusandae"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("velit"),
                                    Rrdatas: []string{
                                        "dignissimos",
                                        "laboriosam",
                                    },
                                    SignatureRrdatas: []string{
                                        "odio",
                                    },
                                    Weight: sdk.Float64(6169.41),
                                },
                            },
                            Kind: sdk.String("provident"),
                        },
                    },
                    Rrdatas: []string{
                        "doloribus",
                        "facilis",
                        "quidem",
                    },
                    SignatureRrdatas: []string{
                        "laboriosam",
                        "unde",
                        "modi",
                        "perspiciatis",
                    },
                    TTL: sdk.Int(944626),
                    Type: sdk.String("cum"),
                },
            },
            ID: sdk.String("2bb4ecae-6c3d-45db-bade-bd5daea4c506"),
            IsServing: sdk.Bool(false),
            Kind: sdk.String("deserunt"),
            StartTime: sdk.String("molestias"),
            Status: shared.ChangeStatusEnumDone.ToPointer(),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        ClientOperationID: sdk.String("quo"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugit"),
        ManagedZone: "aliquid",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        Project: "quaerat",
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nostrum"),
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
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        ChangeID: "mollitia",
        ClientOperationID: sdk.String("magnam"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("esse"),
        ManagedZone: "corrupti",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        Project: "facere",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("deserunt"),
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
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("facere"),
        Key: sdk.String("necessitatibus"),
        ManagedZone: "maxime",
        MaxResults: sdk.Int64(9375),
        OauthToken: sdk.String("eaque"),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        Project: "similique",
        QuotaUser: sdk.String("porro"),
        SortBy: operations.DNSChangesListSortByEnumChangeSequence.ToPointer(),
        SortOrder: sdk.String("blanditiis"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("magni"),
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
