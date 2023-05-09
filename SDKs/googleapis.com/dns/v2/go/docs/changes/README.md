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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Change: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: sdk.String("in"),
                    Name: sdk.String("Jack Langworth"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolorum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("error"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("expedita"),
                                                Port: sdk.String("debitis"),
                                                Project: sdk.String("neque"),
                                                Region: sdk.String("dolorum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nostrum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("dolorum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("accusamus"),
                                                Port: sdk.String("tempora"),
                                                Project: sdk.String("atque"),
                                                Region: sdk.String("fugit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ut"),
                                    Location: sdk.String("fugiat"),
                                    Rrdatas: []string{
                                        "culpa",
                                    },
                                    SignatureRrdatas: []string{
                                        "magnam",
                                        "consequatur",
                                        "esse",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quas"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("corporis"),
                                                Port: sdk.String("et"),
                                                Project: sdk.String("blanditiis"),
                                                Region: sdk.String("ex"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sed"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("vel"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("saepe"),
                                                Port: sdk.String("error"),
                                                Project: sdk.String("consequatur"),
                                                Region: sdk.String("incidunt"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("reiciendis"),
                                    Location: sdk.String("dolorem"),
                                    Rrdatas: []string{
                                        "dicta",
                                        "architecto",
                                        "occaecati",
                                    },
                                    SignatureRrdatas: []string{
                                        "quidem",
                                        "atque",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("laboriosam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("amet"),
                                                Port: sdk.String("deserunt"),
                                                Project: sdk.String("voluptate"),
                                                Region: sdk.String("unde"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("repellendus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptates"),
                                                Port: sdk.String("perferendis"),
                                                Project: sdk.String("est"),
                                                Region: sdk.String("quidem"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reprehenderit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("fuga"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("mollitia"),
                                                Port: sdk.String("veniam"),
                                                Project: sdk.String("voluptatem"),
                                                Region: sdk.String("quisquam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("repudiandae"),
                                    Location: sdk.String("quasi"),
                                    Rrdatas: []string{
                                        "reprehenderit",
                                        "asperiores",
                                        "totam",
                                    },
                                    SignatureRrdatas: []string{
                                        "quidem",
                                        "maxime",
                                    },
                                },
                            },
                            Kind: sdk.String("et"),
                        },
                        Kind: sdk.String("esse"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ea"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("error"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("officiis"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("natus"),
                                                    Region: sdk.String("minima"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aspernatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("maiores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("at"),
                                                    Port: sdk.String("error"),
                                                    Project: sdk.String("blanditiis"),
                                                    Region: sdk.String("suscipit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("repudiandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("recusandae"),
                                                    Port: sdk.String("dolorum"),
                                                    Project: sdk.String("repellendus"),
                                                    Region: sdk.String("labore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reiciendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("repudiandae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("accusantium"),
                                                    Port: sdk.String("beatae"),
                                                    Project: sdk.String("dolores"),
                                                    Region: sdk.String("enim"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("laboriosam"),
                                        Location: sdk.String("velit"),
                                        Rrdatas: []string{
                                            "molestias",
                                            "magnam",
                                            "saepe",
                                            "consequuntur",
                                        },
                                        SignatureRrdatas: []string{
                                            "officiis",
                                            "perspiciatis",
                                            "in",
                                        },
                                    },
                                },
                                Kind: sdk.String("adipisci"),
                            },
                            Kind: sdk.String("eveniet"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("consequuntur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("id"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("reprehenderit"),
                                        Port: sdk.String("error"),
                                        Project: sdk.String("illo"),
                                        Region: sdk.String("corporis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quidem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("non"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("doloremque"),
                                        Port: sdk.String("iure"),
                                        Project: sdk.String("ipsa"),
                                        Region: sdk.String("totam"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quae"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("eveniet"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("cum"),
                                        Port: sdk.String("iure"),
                                        Project: sdk.String("necessitatibus"),
                                        Region: sdk.String("ratione"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(6725.82),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("rem"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("ad"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("alias"),
                                                Port: sdk.String("corporis"),
                                                Project: sdk.String("perspiciatis"),
                                                Region: sdk.String("nihil"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("mollitia"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("alias"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("reiciendis"),
                                                Port: sdk.String("dolores"),
                                                Project: sdk.String("id"),
                                                Region: sdk.String("minima"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("nesciunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("recusandae"),
                                                Port: sdk.String("omnis"),
                                                Project: sdk.String("quaerat"),
                                                Region: sdk.String("molestiae"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ex"),
                                    Rrdatas: []string{
                                        "culpa",
                                        "adipisci",
                                    },
                                    SignatureRrdatas: []string{
                                        "laudantium",
                                        "eum",
                                        "nemo",
                                        "recusandae",
                                    },
                                    Weight: sdk.Float64(4565.2),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("reiciendis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("aspernatur"),
                                                Port: sdk.String("ullam"),
                                                Project: sdk.String("quasi"),
                                                Region: sdk.String("animi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nostrum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("provident"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("animi"),
                                                Port: sdk.String("ex"),
                                                Project: sdk.String("aliquid"),
                                                Region: sdk.String("accusantium"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("repellat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("ullam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("earum"),
                                                Project: sdk.String("officia"),
                                                Region: sdk.String("laborum"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("placeat"),
                                    Rrdatas: []string{
                                        "voluptatibus",
                                        "molestias",
                                    },
                                    SignatureRrdatas: []string{
                                        "sapiente",
                                        "cumque",
                                        "vitae",
                                        "rerum",
                                    },
                                    Weight: sdk.Float64(2722.29),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("inventore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("cumque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("perferendis"),
                                                Port: sdk.String("velit"),
                                                Project: sdk.String("aspernatur"),
                                                Region: sdk.String("eum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eius"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("at"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("eos"),
                                                Port: sdk.String("sapiente"),
                                                Project: sdk.String("eum"),
                                                Region: sdk.String("dicta"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("minima"),
                                    Rrdatas: []string{
                                        "cupiditate",
                                    },
                                    SignatureRrdatas: []string{
                                        "earum",
                                        "soluta",
                                        "hic",
                                    },
                                    Weight: sdk.Float64(8481.51),
                                },
                            },
                            Kind: sdk.String("eaque"),
                        },
                    },
                    Rrdatas: []string{
                        "perspiciatis",
                        "maiores",
                        "debitis",
                        "aliquid",
                    },
                    SignatureRrdatas: []string{
                        "suscipit",
                        "dolorem",
                        "fugit",
                        "cumque",
                    },
                    TTL: sdk.Int(684935),
                    Type: sdk.String("ratione"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("animi"),
                    Name: sdk.String("Mr. Jody Altenwerth"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("suscipit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quasi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("doloribus"),
                                                Port: sdk.String("nulla"),
                                                Project: sdk.String("necessitatibus"),
                                                Region: sdk.String("ipsa"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("tempora"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("molestiae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("iusto"),
                                                Port: sdk.String("esse"),
                                                Project: sdk.String("praesentium"),
                                                Region: sdk.String("maiores"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("architecto"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("doloremque"),
                                                Port: sdk.String("dicta"),
                                                Project: sdk.String("odio"),
                                                Region: sdk.String("tempora"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("esse"),
                                    Location: sdk.String("ex"),
                                    Rrdatas: []string{
                                        "aliquid",
                                    },
                                    SignatureRrdatas: []string{
                                        "laborum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nostrum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("expedita"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("officia"),
                                                Port: sdk.String("suscipit"),
                                                Project: sdk.String("aliquid"),
                                                Region: sdk.String("perferendis"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("eum"),
                                    Location: sdk.String("voluptas"),
                                    Rrdatas: []string{
                                        "id",
                                        "ab",
                                        "error",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptates",
                                        "mollitia",
                                        "laborum",
                                        "libero",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("deleniti"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("vitae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("ex"),
                                                Port: sdk.String("quo"),
                                                Project: sdk.String("ex"),
                                                Region: sdk.String("ut"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ad"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("voluptatem"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("cum"),
                                                Port: sdk.String("aliquid"),
                                                Project: sdk.String("beatae"),
                                                Region: sdk.String("voluptatum"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("omnis"),
                                    Location: sdk.String("veritatis"),
                                    Rrdatas: []string{
                                        "est",
                                        "culpa",
                                        "voluptatem",
                                    },
                                    SignatureRrdatas: []string{
                                        "officiis",
                                        "architecto",
                                        "fuga",
                                        "pariatur",
                                    },
                                },
                            },
                            Kind: sdk.String("debitis"),
                        },
                        Kind: sdk.String("voluptatem"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("earum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("sapiente"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("minus"),
                                                    Port: sdk.String("nemo"),
                                                    Project: sdk.String("asperiores"),
                                                    Region: sdk.String("ratione"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ullam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("illum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
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
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("fugiat"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("consequuntur"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("quas"),
                                        Port: sdk.String("eveniet"),
                                        Project: sdk.String("impedit"),
                                        Region: sdk.String("officiis"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(4564.1),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("veniam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("expedita"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("vel"),
                                                Port: sdk.String("voluptatum"),
                                                Project: sdk.String("magnam"),
                                                Region: sdk.String("exercitationem"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ab"),
                                    Rrdatas: []string{
                                        "autem",
                                        "nobis",
                                        "laboriosam",
                                        "recusandae",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptatem",
                                    },
                                    Weight: sdk.Float64(3502.07),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quasi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("at"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("est"),
                                                Port: sdk.String("harum"),
                                                Project: sdk.String("sequi"),
                                                Region: sdk.String("doloribus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("repudiandae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("occaecati"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("voluptate"),
                                                Port: sdk.String("blanditiis"),
                                                Project: sdk.String("officia"),
                                                Region: sdk.String("voluptas"),
                                            },
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
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("fugiat"),
                                                Port: sdk.String("dicta"),
                                                Project: sdk.String("nisi"),
                                                Region: sdk.String("consequuntur"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("consectetur"),
                                    Rrdatas: []string{
                                        "cupiditate",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                        "alias",
                                        "omnis",
                                        "eos",
                                    },
                                    Weight: sdk.Float64(5790.11),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("magni"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("fuga"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptatibus"),
                                                Port: sdk.String("distinctio"),
                                                Project: sdk.String("omnis"),
                                                Region: sdk.String("delectus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("minima"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("maxime"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("temporibus"),
                                                Port: sdk.String("quos"),
                                                Project: sdk.String("commodi"),
                                                Region: sdk.String("itaque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("commodi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("earum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("vero"),
                                                Project: sdk.String("voluptatem"),
                                                Region: sdk.String("ipsam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("vel"),
                                    Rrdatas: []string{
                                        "quasi",
                                    },
                                    SignatureRrdatas: []string{
                                        "maiores",
                                    },
                                    Weight: sdk.Float64(3182.33),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nulla"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("esse"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("reprehenderit"),
                                                Port: sdk.String("est"),
                                                Project: sdk.String("quis"),
                                                Region: sdk.String("sint"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("accusamus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("hic"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("asperiores"),
                                                Port: sdk.String("ex"),
                                                Project: sdk.String("voluptas"),
                                                Region: sdk.String("debitis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("delectus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("minus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("laborum"),
                                                Port: sdk.String("consectetur"),
                                                Project: sdk.String("velit"),
                                                Region: sdk.String("atque"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ipsum"),
                                    Rrdatas: []string{
                                        "magni",
                                        "soluta",
                                        "repudiandae",
                                        "nam",
                                    },
                                    SignatureRrdatas: []string{
                                        "iusto",
                                        "voluptate",
                                    },
                                    Weight: sdk.Float64(1940.23),
                                },
                            },
                            Kind: sdk.String("dignissimos"),
                        },
                    },
                    Rrdatas: []string{
                        "quo",
                    },
                    SignatureRrdatas: []string{
                        "quibusdam",
                        "iure",
                        "odit",
                    },
                    TTL: sdk.Int(974990),
                    Type: sdk.String("vel"),
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: sdk.String("quibusdam"),
                    Name: sdk.String("Dr. Muriel Reinger"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("velit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("accusantium"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ea"),
                                                Port: sdk.String("beatae"),
                                                Project: sdk.String("vero"),
                                                Region: sdk.String("excepturi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("ut"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("earum"),
                                                Port: sdk.String("dicta"),
                                                Project: sdk.String("impedit"),
                                                Region: sdk.String("voluptatibus"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("iste"),
                                    Location: sdk.String("itaque"),
                                    Rrdatas: []string{
                                        "nisi",
                                    },
                                    SignatureRrdatas: []string{
                                        "velit",
                                        "laborum",
                                        "non",
                                        "dolor",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("consequatur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("recusandae"),
                                                Port: sdk.String("ea"),
                                                Project: sdk.String("quidem"),
                                                Region: sdk.String("voluptas"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("facilis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("perspiciatis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("deleniti"),
                                                Port: sdk.String("a"),
                                                Project: sdk.String("voluptate"),
                                                Region: sdk.String("ullam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("unde"),
                                    Location: sdk.String("necessitatibus"),
                                    Rrdatas: []string{
                                        "impedit",
                                        "ipsam",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                        "esse",
                                        "labore",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("vitae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("dolorem"),
                                                Port: sdk.String("ad"),
                                                Project: sdk.String("qui"),
                                                Region: sdk.String("iste"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ex"),
                                    Location: sdk.String("nemo"),
                                    Rrdatas: []string{
                                        "libero",
                                        "rem",
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "fugit",
                                        "alias",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vel"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("neque"),
                                                Port: sdk.String("exercitationem"),
                                                Project: sdk.String("itaque"),
                                                Region: sdk.String("et"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("ipsum"),
                                    Location: sdk.String("unde"),
                                    Rrdatas: []string{
                                        "distinctio",
                                        "maxime",
                                        "quia",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "omnis",
                                        "libero",
                                    },
                                },
                            },
                            Kind: sdk.String("dicta"),
                        },
                        Kind: sdk.String("id"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("placeat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("iusto"),
                                                    Port: sdk.String("ipsa"),
                                                    Project: sdk.String("voluptates"),
                                                    Region: sdk.String("inventore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aperiam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("dolore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("distinctio"),
                                                    Port: sdk.String("voluptatem"),
                                                    Project: sdk.String("autem"),
                                                    Region: sdk.String("esse"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolores"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("beatae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("facere"),
                                                    Port: sdk.String("corrupti"),
                                                    Project: sdk.String("molestiae"),
                                                    Region: sdk.String("provident"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusamus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("tempore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ea"),
                                                    Port: sdk.String("autem"),
                                                    Project: sdk.String("ipsam"),
                                                    Region: sdk.String("rerum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("laudantium"),
                                        Location: sdk.String("corporis"),
                                        Rrdatas: []string{
                                            "voluptatibus",
                                            "cum",
                                            "at",
                                            "alias",
                                        },
                                        SignatureRrdatas: []string{
                                            "quidem",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("repudiandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("expedita"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("eos"),
                                                    Port: sdk.String("quibusdam"),
                                                    Project: sdk.String("odio"),
                                                    Region: sdk.String("praesentium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("corporis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("earum"),
                                                    Port: sdk.String("adipisci"),
                                                    Project: sdk.String("recusandae"),
                                                    Region: sdk.String("similique"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ut"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("unde"),
                                                    Port: sdk.String("molestiae"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("cupiditate"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("fugit"),
                                        Location: sdk.String("numquam"),
                                        Rrdatas: []string{
                                            "nesciunt",
                                            "at",
                                        },
                                        SignatureRrdatas: []string{
                                            "dignissimos",
                                            "optio",
                                            "necessitatibus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("qui"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("voluptatum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("minima"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("enim"),
                                                    Region: sdk.String("neque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("in"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("eum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("corporis"),
                                                    Port: sdk.String("magnam"),
                                                    Project: sdk.String("voluptates"),
                                                    Region: sdk.String("maiores"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("tempore"),
                                        Location: sdk.String("aperiam"),
                                        Rrdatas: []string{
                                            "ratione",
                                            "labore",
                                            "totam",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptas",
                                            "quo",
                                            "velit",
                                        },
                                    },
                                },
                                Kind: sdk.String("minus"),
                            },
                            Kind: sdk.String("fuga"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("est"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("delectus"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("vero"),
                                        Port: sdk.String("odit"),
                                        Project: sdk.String("repellat"),
                                        Region: sdk.String("pariatur"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("nemo"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("aperiam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("minima"),
                                        Port: sdk.String("in"),
                                        Project: sdk.String("ducimus"),
                                        Region: sdk.String("excepturi"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1721.95),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ducimus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("pariatur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("optio"),
                                                Project: sdk.String("ex"),
                                                Region: sdk.String("quaerat"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("commodi"),
                                    Rrdatas: []string{
                                        "placeat",
                                        "quidem",
                                        "exercitationem",
                                        "quam",
                                    },
                                    SignatureRrdatas: []string{
                                        "modi",
                                    },
                                    Weight: sdk.Float64(593.83),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("repudiandae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("dicta"),
                                                Port: sdk.String("earum"),
                                                Project: sdk.String("veniam"),
                                                Region: sdk.String("animi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolores"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("dicta"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("necessitatibus"),
                                                Port: sdk.String("nobis"),
                                                Project: sdk.String("ipsa"),
                                                Region: sdk.String("ducimus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("maiores"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quasi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("pariatur"),
                                                Port: sdk.String("libero"),
                                                Project: sdk.String("excepturi"),
                                                Region: sdk.String("occaecati"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("nemo"),
                                    Rrdatas: []string{
                                        "nostrum",
                                        "doloribus",
                                    },
                                    SignatureRrdatas: []string{
                                        "sint",
                                        "enim",
                                        "hic",
                                        "animi",
                                    },
                                    Weight: sdk.Float64(5597.74),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("molestias"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("eaque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("architecto"),
                                                Port: sdk.String("quos"),
                                                Project: sdk.String("iste"),
                                                Region: sdk.String("assumenda"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("tempore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("velit"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("delectus"),
                                                Port: sdk.String("impedit"),
                                                Project: sdk.String("cum"),
                                                Region: sdk.String("ipsum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("adipisci"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("deserunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quis"),
                                                Port: sdk.String("veniam"),
                                                Project: sdk.String("libero"),
                                                Region: sdk.String("architecto"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("cupiditate"),
                                    Rrdatas: []string{
                                        "eligendi",
                                        "possimus",
                                    },
                                    SignatureRrdatas: []string{
                                        "magnam",
                                        "itaque",
                                    },
                                    Weight: sdk.Float64(1509.35),
                                },
                            },
                            Kind: sdk.String("asperiores"),
                        },
                    },
                    Rrdatas: []string{
                        "consequuntur",
                        "facere",
                    },
                    SignatureRrdatas: []string{
                        "odit",
                        "pariatur",
                        "amet",
                    },
                    TTL: sdk.Int(347698),
                    Type: sdk.String("ab"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("velit"),
                    Name: sdk.String("Randolph Huels"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nisi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("nisi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("minus"),
                                                Port: sdk.String("facere"),
                                                Project: sdk.String("facilis"),
                                                Region: sdk.String("ipsum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("ad"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("voluptatibus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("debitis"),
                                                Port: sdk.String("labore"),
                                                Project: sdk.String("rerum"),
                                                Region: sdk.String("eos"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reprehenderit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("neque"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("est"),
                                                Port: sdk.String("rem"),
                                                Project: sdk.String("eligendi"),
                                                Region: sdk.String("fugiat"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("unde"),
                                    Location: sdk.String("officiis"),
                                    Rrdatas: []string{
                                        "dolor",
                                        "dicta",
                                    },
                                    SignatureRrdatas: []string{
                                        "porro",
                                        "vitae",
                                        "dignissimos",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fugiat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("aspernatur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("delectus"),
                                                Port: sdk.String("iusto"),
                                                Project: sdk.String("dignissimos"),
                                                Region: sdk.String("libero"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("illo"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("incidunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("saepe"),
                                                Port: sdk.String("tempore"),
                                                Project: sdk.String("veniam"),
                                                Region: sdk.String("eos"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("reiciendis"),
                                    Location: sdk.String("earum"),
                                    Rrdatas: []string{
                                        "praesentium",
                                        "nemo",
                                    },
                                    SignatureRrdatas: []string{
                                        "quisquam",
                                        "sequi",
                                        "nihil",
                                        "deleniti",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("labore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("aliquam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("provident"),
                                                Port: sdk.String("laudantium"),
                                                Project: sdk.String("repudiandae"),
                                                Region: sdk.String("consequatur"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("maxime"),
                                    Location: sdk.String("aspernatur"),
                                    Rrdatas: []string{
                                        "expedita",
                                        "quas",
                                        "provident",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "dignissimos",
                                        "corporis",
                                        "vero",
                                    },
                                },
                            },
                            Kind: sdk.String("similique"),
                        },
                        Kind: sdk.String("repellendus"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("commodi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("commodi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatem"),
                                                    Port: sdk.String("ad"),
                                                    Project: sdk.String("quae"),
                                                    Region: sdk.String("amet"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("illum"),
                                        Location: sdk.String("praesentium"),
                                        Rrdatas: []string{
                                            "cum",
                                            "amet",
                                            "quasi",
                                        },
                                        SignatureRrdatas: []string{
                                            "laudantium",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("earum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("amet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("dolorum"),
                                                    Port: sdk.String("necessitatibus"),
                                                    Project: sdk.String("provident"),
                                                    Region: sdk.String("repudiandae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("consequatur"),
                                        Location: sdk.String("nemo"),
                                        Rrdatas: []string{
                                            "itaque",
                                            "facilis",
                                        },
                                        SignatureRrdatas: []string{
                                            "aperiam",
                                            "sint",
                                            "accusamus",
                                        },
                                    },
                                },
                                Kind: sdk.String("eos"),
                            },
                            Kind: sdk.String("totam"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptatem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("dolor"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("a"),
                                        Port: sdk.String("dolor"),
                                        Project: sdk.String("occaecati"),
                                        Region: sdk.String("atque"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1074.72),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("minus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("voluptatem"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("rerum"),
                                                Port: sdk.String("ea"),
                                                Project: sdk.String("aperiam"),
                                                Region: sdk.String("dignissimos"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("repellat"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("porro"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("consectetur"),
                                                Port: sdk.String("eligendi"),
                                                Project: sdk.String("dignissimos"),
                                                Region: sdk.String("consectetur"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("soluta"),
                                    Rrdatas: []string{
                                        "temporibus",
                                        "officia",
                                        "amet",
                                    },
                                    SignatureRrdatas: []string{
                                        "aspernatur",
                                        "quo",
                                        "itaque",
                                        "illum",
                                    },
                                    Weight: sdk.Float64(6707.62),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("consectetur"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("explicabo"),
                                                Port: sdk.String("explicabo"),
                                                Project: sdk.String("exercitationem"),
                                                Region: sdk.String("nihil"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("non"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("illo"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("deserunt"),
                                                Port: sdk.String("delectus"),
                                                Project: sdk.String("non"),
                                                Region: sdk.String("distinctio"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("in"),
                                    Rrdatas: []string{
                                        "labore",
                                        "numquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "modi",
                                        "in",
                                        "explicabo",
                                        "accusamus",
                                    },
                                    Weight: sdk.Float64(5258.09),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("odit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("enim"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("minima"),
                                                Project: sdk.String("libero"),
                                                Region: sdk.String("magnam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sit"),
                                    Rrdatas: []string{
                                        "eum",
                                        "nesciunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "dignissimos",
                                        "fugiat",
                                        "nostrum",
                                    },
                                    Weight: sdk.Float64(4753.25),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("modi"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("aut"),
                                                Port: sdk.String("eveniet"),
                                                Project: sdk.String("odio"),
                                                Region: sdk.String("commodi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("numquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("possimus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("consectetur"),
                                                Port: sdk.String("nesciunt"),
                                                Project: sdk.String("quaerat"),
                                                Region: sdk.String("itaque"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("minus"),
                                    Rrdatas: []string{
                                        "distinctio",
                                    },
                                    SignatureRrdatas: []string{
                                        "quas",
                                        "et",
                                    },
                                    Weight: sdk.Float64(7049.48),
                                },
                            },
                            Kind: sdk.String("amet"),
                        },
                    },
                    Rrdatas: []string{
                        "fuga",
                        "alias",
                    },
                    SignatureRrdatas: []string{
                        "aut",
                        "quos",
                        "laudantium",
                    },
                    TTL: sdk.Int(832239),
                    Type: sdk.String("veritatis"),
                },
            },
            ID: sdk.String("00efada2-00ef-4042-aeb2-164cf9ab8366"),
            IsServing: sdk.Bool(false),
            Kind: sdk.String("impedit"),
            StartTime: sdk.String("ducimus"),
            Status: shared.ChangeStatusEnumPending.ToPointer(),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellat"),
        ClientOperationID: sdk.String("nulla"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("natus"),
        Location: "accusamus",
        ManagedZone: "doloremque",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        Project: "rerum",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("non"),
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
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        ChangeID: "dicta",
        ClientOperationID: sdk.String("voluptatibus"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("quae"),
        Location: "officiis",
        ManagedZone: "architecto",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        Project: "enim",
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("perferendis"),
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
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("quos"),
        Location: "ullam",
        ManagedZone: "dolore",
        MaxResults: sdk.Int64(266284),
        OauthToken: sdk.String("itaque"),
        PageToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        Project: "modi",
        QuotaUser: sdk.String("consequuntur"),
        SortBy: operations.DNSChangesListSortByEnumChangeSequence.ToPointer(),
        SortOrder: sdk.String("assumenda"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("doloribus"),
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
