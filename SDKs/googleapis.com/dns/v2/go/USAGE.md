<!-- Start SDK Example Usage -->
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
                    Kind: sdk.String("distinctio"),
                    Name: sdk.String("Stuart Stiedemann"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("deserunt"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("iure"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("debitis"),
                                                Port: sdk.String("ipsa"),
                                                Project: sdk.String("delectus"),
                                                Region: sdk.String("tempora"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("suscipit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("minus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("voluptatum"),
                                                Port: sdk.String("iusto"),
                                                Project: sdk.String("excepturi"),
                                                Region: sdk.String("nisi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("recusandae"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("ab"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("veritatis"),
                                                Port: sdk.String("deserunt"),
                                                Project: sdk.String("perferendis"),
                                                Region: sdk.String("ipsam"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("repellendus"),
                                    Location: sdk.String("sapiente"),
                                    Rrdatas: []string{
                                        "odit",
                                        "at",
                                        "at",
                                        "maiores",
                                    },
                                    SignatureRrdatas: []string{
                                        "quod",
                                        "quod",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("totam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("dolorum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("officia"),
                                                Project: sdk.String("occaecati"),
                                                Region: sdk.String("fugit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("deleniti"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("optio"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("beatae"),
                                                Port: sdk.String("commodi"),
                                                Project: sdk.String("molestiae"),
                                                Region: sdk.String("modi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("qui"),
                                    Location: sdk.String("impedit"),
                                    Rrdatas: []string{
                                        "esse",
                                        "ipsum",
                                        "excepturi",
                                    },
                                    SignatureRrdatas: []string{
                                        "perferendis",
                                    },
                                },
                            },
                            Kind: sdk.String("ad"),
                        },
                        Kind: sdk.String("natus"),
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
                                                    Kind: sdk.String("laboriosam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("in"),
                                                    Region: sdk.String("corporis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("saepe"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("architecto"),
                                                    Port: sdk.String("ipsa"),
                                                    Project: sdk.String("reiciendis"),
                                                    Region: sdk.String("est"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("mollitia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("corporis"),
                                                    Port: sdk.String("explicabo"),
                                                    Project: sdk.String("nobis"),
                                                    Region: sdk.String("enim"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("omnis"),
                                        Location: sdk.String("nemo"),
                                        Rrdatas: []string{
                                            "excepturi",
                                            "accusantium",
                                        },
                                        SignatureRrdatas: []string{
                                            "culpa",
                                            "doloribus",
                                        },
                                    },
                                },
                                Kind: sdk.String("sapiente"),
                            },
                            Kind: sdk.String("architecto"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("dolorem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("consequuntur"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("mollitia"),
                                        Port: sdk.String("occaecati"),
                                        Project: sdk.String("numquam"),
                                        Region: sdk.String("commodi"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("velit"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("quia"),
                                        Port: sdk.String("quis"),
                                        Project: sdk.String("vitae"),
                                        Region: sdk.String("laborum"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("animi"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("odit"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("sequi"),
                                        Port: sdk.String("tenetur"),
                                        Project: sdk.String("ipsam"),
                                        Region: sdk.String("id"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(8209.94),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("error"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("laborum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("reiciendis"),
                                                Port: sdk.String("voluptatibus"),
                                                Project: sdk.String("vero"),
                                                Region: sdk.String("nihil"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("praesentium"),
                                    Rrdatas: []string{
                                        "ipsa",
                                        "omnis",
                                        "voluptate",
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloremque",
                                    },
                                    Weight: sdk.Float64(4417.11),
                                },
                            },
                            Kind: sdk.String("ut"),
                        },
                    },
                    Rrdatas: []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                    SignatureRrdatas: []string{
                        "harum",
                    },
                    TTL: sdk.Int(317983),
                    Type: sdk.String("accusamus"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("commodi"),
                    Name: sdk.String("Eric Emmerich"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("modi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("rem"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("quasi"),
                                                Port: sdk.String("repudiandae"),
                                                Project: sdk.String("sint"),
                                                Region: sdk.String("veritatis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("itaque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("enim"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("est"),
                                                Port: sdk.String("quibusdam"),
                                                Project: sdk.String("explicabo"),
                                                Region: sdk.String("deserunt"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("distinctio"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("labore"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("qui"),
                                                Port: sdk.String("aliquid"),
                                                Project: sdk.String("cupiditate"),
                                                Region: sdk.String("quos"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("perferendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("assumenda"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("alias"),
                                                Port: sdk.String("fugit"),
                                                Project: sdk.String("dolorum"),
                                                Region: sdk.String("excepturi"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("tempora"),
                                    Location: sdk.String("facilis"),
                                    Rrdatas: []string{
                                        "labore",
                                        "delectus",
                                        "eum",
                                    },
                                    SignatureRrdatas: []string{
                                        "eligendi",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aliquid"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("necessitatibus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("officia"),
                                                Port: sdk.String("dolor"),
                                                Project: sdk.String("debitis"),
                                                Region: sdk.String("a"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolorum"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("in"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("maiores"),
                                                Port: sdk.String("rerum"),
                                                Project: sdk.String("dicta"),
                                                Region: sdk.String("magnam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("cumque"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("ea"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("laborum"),
                                                Port: sdk.String("accusamus"),
                                                Project: sdk.String("non"),
                                                Region: sdk.String("occaecati"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("enim"),
                                    Location: sdk.String("accusamus"),
                                    Rrdatas: []string{
                                        "quidem",
                                        "provident",
                                        "nam",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "deleniti",
                                        "sapiente",
                                        "amet",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nisi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("natus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("molestiae"),
                                                Port: sdk.String("perferendis"),
                                                Project: sdk.String("nihil"),
                                                Region: sdk.String("magnam"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("distinctio"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("labore"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("suscipit"),
                                                Port: sdk.String("natus"),
                                                Project: sdk.String("nobis"),
                                                Region: sdk.String("eum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("vero"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("architecto"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("et"),
                                                Port: sdk.String("excepturi"),
                                                Project: sdk.String("ullam"),
                                                Region: sdk.String("provident"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("quos"),
                                    Location: sdk.String("sint"),
                                    Rrdatas: []string{
                                        "mollitia",
                                    },
                                    SignatureRrdatas: []string{
                                        "mollitia",
                                        "ad",
                                        "eum",
                                        "dolor",
                                    },
                                },
                            },
                            Kind: sdk.String("necessitatibus"),
                        },
                        Kind: sdk.String("odit"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iure"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("debitis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maxime"),
                                                    Port: sdk.String("deleniti"),
                                                    Project: sdk.String("facilis"),
                                                    Region: sdk.String("in"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("architecto"),
                                        Location: sdk.String("architecto"),
                                        Rrdatas: []string{
                                            "ullam",
                                            "expedita",
                                            "nihil",
                                            "repellat",
                                        },
                                        SignatureRrdatas: []string{
                                            "sed",
                                            "saepe",
                                            "pariatur",
                                            "accusantium",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("praesentium"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("magni"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("illum"),
                                                    Project: sdk.String("pariatur"),
                                                    Region: sdk.String("maxime"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ea"),
                                        Location: sdk.String("excepturi"),
                                        Rrdatas: []string{
                                            "ea",
                                        },
                                        SignatureRrdatas: []string{
                                            "ab",
                                        },
                                    },
                                },
                                Kind: sdk.String("maiores"),
                            },
                            Kind: sdk.String("quidem"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptate"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("nam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("pariatur"),
                                        Port: sdk.String("nemo"),
                                        Project: sdk.String("voluptatibus"),
                                        Region: sdk.String("perferendis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("fugiat"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("aut"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("corporis"),
                                        Port: sdk.String("hic"),
                                        Project: sdk.String("libero"),
                                        Region: sdk.String("nobis"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(1716.29),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dignissimos"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("quis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("eos"),
                                                Port: sdk.String("perferendis"),
                                                Project: sdk.String("dolores"),
                                                Region: sdk.String("minus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("vero"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("hic"),
                                                Port: sdk.String("recusandae"),
                                                Project: sdk.String("omnis"),
                                                Region: sdk.String("facilis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("perspiciatis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("porro"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("blanditiis"),
                                                Port: sdk.String("error"),
                                                Project: sdk.String("eaque"),
                                                Region: sdk.String("occaecati"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("rerum"),
                                    Rrdatas: []string{
                                        "asperiores",
                                    },
                                    SignatureRrdatas: []string{
                                        "modi",
                                        "iste",
                                        "dolorum",
                                        "deleniti",
                                    },
                                    Weight: sdk.Float64(8642.82),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("nobis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("delectus"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quos"),
                                                Port: sdk.String("aliquid"),
                                                Project: sdk.String("dolorem"),
                                                Region: sdk.String("dolorem"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolor"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("ipsum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("excepturi"),
                                                Port: sdk.String("cum"),
                                                Project: sdk.String("voluptate"),
                                                Region: sdk.String("dignissimos"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("reiciendis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("dolorum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("veritatis"),
                                                Port: sdk.String("ipsa"),
                                                Project: sdk.String("ipsa"),
                                                Region: sdk.String("iure"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("odio"),
                                    Rrdatas: []string{
                                        "accusamus",
                                        "quidem",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptas",
                                        "natus",
                                        "eos",
                                        "atque",
                                    },
                                    Weight: sdk.Float64(246.78),
                                },
                            },
                            Kind: sdk.String("fugiat"),
                        },
                    },
                    Rrdatas: []string{
                        "soluta",
                    },
                    SignatureRrdatas: []string{
                        "iusto",
                        "voluptate",
                        "dolorum",
                    },
                    TTL: sdk.Int(536579),
                    Type: sdk.String("omnis"),
                },
                shared.ResourceRecordSet{
                    Kind: sdk.String("necessitatibus"),
                    Name: sdk.String("Emmett Kovacek"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eius"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("perferendis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("optio"),
                                                Port: sdk.String("accusamus"),
                                                Project: sdk.String("ad"),
                                                Region: sdk.String("saepe"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("suscipit"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("provident"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("repellendus"),
                                                Port: sdk.String("totam"),
                                                Project: sdk.String("similique"),
                                                Region: sdk.String("alias"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("at"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("tempora"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quod"),
                                                Port: sdk.String("officiis"),
                                                Project: sdk.String("qui"),
                                                Region: sdk.String("dolorum"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("a"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("harum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("ipsum"),
                                                Port: sdk.String("quisquam"),
                                                Project: sdk.String("tenetur"),
                                                Region: sdk.String("amet"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("tempore"),
                                    Location: sdk.String("accusamus"),
                                    Rrdatas: []string{
                                        "enim",
                                        "dolorem",
                                    },
                                    SignatureRrdatas: []string{
                                        "totam",
                                        "nihil",
                                        "sit",
                                        "expedita",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("sed"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("libero"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("deserunt"),
                                                Port: sdk.String("quam"),
                                                Project: sdk.String("ipsum"),
                                                Region: sdk.String("incidunt"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("qui"),
                                    Location: sdk.String("cupiditate"),
                                    Rrdatas: []string{
                                        "pariatur",
                                        "soluta",
                                        "dicta",
                                        "laborum",
                                    },
                                    SignatureRrdatas: []string{
                                        "incidunt",
                                        "aspernatur",
                                        "dolores",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("facilis"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("quam"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("temporibus"),
                                                Port: sdk.String("qui"),
                                                Project: sdk.String("neque"),
                                                Region: sdk.String("fugit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("magni"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("sunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("hic"),
                                                Project: sdk.String("voluptatem"),
                                                Region: sdk.String("cumque"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("soluta"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("et"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("ipsum"),
                                                Port: sdk.String("veritatis"),
                                                Project: sdk.String("nobis"),
                                                Region: sdk.String("quos"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("tempore"),
                                    Location: sdk.String("cupiditate"),
                                    Rrdatas: []string{
                                        "delectus",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolore",
                                    },
                                },
                            },
                            Kind: sdk.String("labore"),
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
                                                    IPAddress: sdk.String("quae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quas"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("consequatur"),
                                                    Port: sdk.String("est"),
                                                    Project: sdk.String("repellendus"),
                                                    Region: sdk.String("porro"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("doloribus"),
                                        Location: sdk.String("ut"),
                                        Rrdatas: []string{
                                            "cupiditate",
                                            "qui",
                                            "quae",
                                        },
                                        SignatureRrdatas: []string{
                                            "odio",
                                            "occaecati",
                                            "voluptatibus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("delectus"),
                                                    Port: sdk.String("voluptate"),
                                                    Project: sdk.String("consectetur"),
                                                    Region: sdk.String("vero"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tenetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("hic"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quod"),
                                                    Port: sdk.String("odio"),
                                                    Project: sdk.String("similique"),
                                                    Region: sdk.String("facilis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("dolore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("illum"),
                                                    Port: sdk.String("sequi"),
                                                    Project: sdk.String("natus"),
                                                    Region: sdk.String("impedit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aut"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("exercitationem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fugit"),
                                                    Port: sdk.String("porro"),
                                                    Project: sdk.String("maiores"),
                                                    Region: sdk.String("doloribus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iusto"),
                                        Location: sdk.String("eligendi"),
                                        Rrdatas: []string{
                                            "alias",
                                            "officia",
                                        },
                                        SignatureRrdatas: []string{
                                            "ipsam",
                                            "ea",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vel"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("magnam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ex"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("dicta"),
                                                    Region: sdk.String("dolor"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("maiores"),
                                        Location: sdk.String("quasi"),
                                        Rrdatas: []string{
                                            "nulla",
                                            "excepturi",
                                        },
                                        SignatureRrdatas: []string{
                                            "nostrum",
                                            "sapiente",
                                            "quisquam",
                                            "saepe",
                                        },
                                    },
                                },
                                Kind: sdk.String("ea"),
                            },
                            Kind: sdk.String("impedit"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("veniam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("inventore"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("ea"),
                                        Port: sdk.String("quo"),
                                        Project: sdk.String("consectetur"),
                                        Region: sdk.String("recusandae"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("aspernatur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("eaque"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("libero"),
                                        Port: sdk.String("aut"),
                                        Project: sdk.String("aut"),
                                        Region: sdk.String("deleniti"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(7705.81),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("accusamus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("non"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("dolorum"),
                                                Port: sdk.String("laborum"),
                                                Project: sdk.String("placeat"),
                                                Region: sdk.String("velit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("eum"),
                                    Rrdatas: []string{
                                        "nobis",
                                        "quas",
                                    },
                                    SignatureRrdatas: []string{
                                        "nulla",
                                        "voluptas",
                                        "libero",
                                        "quasi",
                                    },
                                    Weight: sdk.Float64(2703.28),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("explicabo"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("ipsa"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("magnam"),
                                                Port: sdk.String("odio"),
                                                Project: sdk.String("eius"),
                                                Region: sdk.String("esse"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("esse"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("fuga"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("quidem"),
                                                Port: sdk.String("fugiat"),
                                                Project: sdk.String("ut"),
                                                Region: sdk.String("eum"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("suscipit"),
                                    Rrdatas: []string{
                                        "eos",
                                        "praesentium",
                                        "quisquam",
                                        "veritatis",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                    },
                                    Weight: sdk.Float64(6969.97),
                                },
                            },
                            Kind: sdk.String("neque"),
                        },
                    },
                    Rrdatas: []string{
                        "illum",
                        "quo",
                        "fuga",
                        "eius",
                    },
                    SignatureRrdatas: []string{
                        "voluptas",
                    },
                    TTL: sdk.Int(69859),
                    Type: sdk.String("cupiditate"),
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: sdk.String("tempora"),
                    Name: sdk.String("Roberto Collier"),
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: sdk.Bool(false),
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aperiam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("quod"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("inventore"),
                                                Port: sdk.String("nihil"),
                                                Project: sdk.String("totam"),
                                                Region: sdk.String("accusamus"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("aliquam"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("occaecati"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("sapiente"),
                                                Port: sdk.String("dolores"),
                                                Project: sdk.String("deserunt"),
                                                Region: sdk.String("molestiae"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("accusantium"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("eum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("praesentium"),
                                                Port: sdk.String("consequuntur"),
                                                Project: sdk.String("deleniti"),
                                                Region: sdk.String("fugit"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("fuga"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("incidunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("explicabo"),
                                                Port: sdk.String("minima"),
                                                Project: sdk.String("nisi"),
                                                Region: sdk.String("fugit"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("sapiente"),
                                    Location: sdk.String("consequuntur"),
                                    Rrdatas: []string{
                                        "explicabo",
                                    },
                                    SignatureRrdatas: []string{
                                        "occaecati",
                                        "atque",
                                        "et",
                                        "esse",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("accusamus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("esse"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("nam"),
                                                Port: sdk.String("vero"),
                                                Project: sdk.String("aliquid"),
                                                Region: sdk.String("quasi"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("saepe"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                Kind: sdk.String("harum"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("rerum"),
                                                Port: sdk.String("occaecati"),
                                                Project: sdk.String("minima"),
                                                Region: sdk.String("distinctio"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("eligendi"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("culpa"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("adipisci"),
                                                Port: sdk.String("cumque"),
                                                Project: sdk.String("consequuntur"),
                                                Region: sdk.String("consequatur"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("minus"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("sapiente"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                NetworkURL: sdk.String("esse"),
                                                Port: sdk.String("blanditiis"),
                                                Project: sdk.String("provident"),
                                                Region: sdk.String("a"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("nulla"),
                                    Location: sdk.String("quas"),
                                    Rrdatas: []string{
                                        "quasi",
                                        "a",
                                    },
                                    SignatureRrdatas: []string{
                                        "sint",
                                        "pariatur",
                                        "possimus",
                                    },
                                },
                            },
                            Kind: sdk.String("quia"),
                        },
                        Kind: sdk.String("eveniet"),
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veritatis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quasi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("culpa"),
                                                    Port: sdk.String("aliquid"),
                                                    Project: sdk.String("tenetur"),
                                                    Region: sdk.String("quae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("earum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("in"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("libero"),
                                                    Port: sdk.String("illum"),
                                                    Project: sdk.String("soluta"),
                                                    Region: sdk.String("accusantium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dicta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("reprehenderit"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("aut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quibusdam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("deleniti"),
                                                    Port: sdk.String("itaque"),
                                                    Project: sdk.String("dolorum"),
                                                    Region: sdk.String("architecto"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("omnis"),
                                        Location: sdk.String("tenetur"),
                                        Rrdatas: []string{
                                            "at",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptate",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minima"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("consectetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("iste"),
                                                    Port: sdk.String("temporibus"),
                                                    Project: sdk.String("accusantium"),
                                                    Region: sdk.String("rem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("aut"),
                                        Location: sdk.String("laudantium"),
                                        Rrdatas: []string{
                                            "mollitia",
                                            "ab",
                                        },
                                        SignatureRrdatas: []string{
                                            "non",
                                            "voluptatem",
                                            "dolor",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("numquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("explicabo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aut"),
                                                    Port: sdk.String("dignissimos"),
                                                    Project: sdk.String("dicta"),
                                                    Region: sdk.String("maiores"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("natus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("asperiores"),
                                                    Port: sdk.String("aperiam"),
                                                    Project: sdk.String("ea"),
                                                    Region: sdk.String("quaerat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequuntur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("officia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("dignissimos"),
                                                    Port: sdk.String("officia"),
                                                    Project: sdk.String("asperiores"),
                                                    Region: sdk.String("nemo"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quae"),
                                        Location: sdk.String("quaerat"),
                                        Rrdatas: []string{
                                            "quod",
                                            "labore",
                                            "ab",
                                            "adipisci",
                                        },
                                        SignatureRrdatas: []string{
                                            "id",
                                            "suscipit",
                                            "velit",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("est"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("totam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("vel"),
                                                    Port: sdk.String("ducimus"),
                                                    Project: sdk.String("quos"),
                                                    Region: sdk.String("vel"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("facilis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("commodi"),
                                                    Port: sdk.String("in"),
                                                    Project: sdk.String("corporis"),
                                                    Region: sdk.String("reiciendis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("assumenda"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("recusandae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aperiam"),
                                                    Port: sdk.String("cum"),
                                                    Project: sdk.String("consectetur"),
                                                    Region: sdk.String("in"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("exercitationem"),
                                        Location: sdk.String("earum"),
                                        Rrdatas: []string{
                                            "numquam",
                                            "doloribus",
                                            "suscipit",
                                            "reiciendis",
                                        },
                                        SignatureRrdatas: []string{
                                            "saepe",
                                            "necessitatibus",
                                            "dolore",
                                        },
                                    },
                                },
                                Kind: sdk.String("sunt"),
                            },
                            Kind: sdk.String("asperiores"),
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("non"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("beatae"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("a"),
                                        Port: sdk.String("debitis"),
                                        Project: sdk.String("consectetur"),
                                        Region: sdk.String("corporis"),
                                    },
                                },
                            },
                            TrickleTraffic: sdk.Float64(6897.68),
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("voluptates"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("vitae"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("similique"),
                                                Port: sdk.String("tempora"),
                                                Project: sdk.String("aspernatur"),
                                                Region: sdk.String("voluptas"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("voluptas"),
                                    Rrdatas: []string{
                                        "minima",
                                        "nobis",
                                    },
                                    SignatureRrdatas: []string{
                                        "adipisci",
                                        "minus",
                                        "dolores",
                                    },
                                    Weight: sdk.Float64(5039.34),
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("dolore"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                Kind: sdk.String("officiis"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("ullam"),
                                                Port: sdk.String("adipisci"),
                                                Project: sdk.String("cum"),
                                                Region: sdk.String("blanditiis"),
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: sdk.String("quas"),
                                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                Kind: sdk.String("nesciunt"),
                                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                NetworkURL: sdk.String("corrupti"),
                                                Port: sdk.String("pariatur"),
                                                Project: sdk.String("totam"),
                                                Region: sdk.String("hic"),
                                            },
                                        },
                                    },
                                    Kind: sdk.String("exercitationem"),
                                    Rrdatas: []string{
                                        "sit",
                                        "rerum",
                                        "sed",
                                        "reiciendis",
                                    },
                                    SignatureRrdatas: []string{
                                        "asperiores",
                                    },
                                    Weight: sdk.Float64(7079.18),
                                },
                            },
                            Kind: sdk.String("voluptate"),
                        },
                    },
                    Rrdatas: []string{
                        "ab",
                        "iste",
                        "dolore",
                    },
                    SignatureRrdatas: []string{
                        "sed",
                        "in",
                        "commodi",
                    },
                    TTL: sdk.Int(696077),
                    Type: sdk.String("explicabo"),
                },
            },
            ID: sdk.String("6916fe1f-08f4-4294-a369-8f447f603e8b"),
            IsServing: sdk.Bool(false),
            Kind: sdk.String("quaerat"),
            StartTime: sdk.String("incidunt"),
            Status: shared.ChangeStatusEnumPending.ToPointer(),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        ClientOperationID: sdk.String("nobis"),
        Fields: sdk.String("error"),
        Key: sdk.String("veniam"),
        Location: "minima",
        ManagedZone: "recusandae",
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        Project: "nulla",
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("saepe"),
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
<!-- End SDK Example Usage -->