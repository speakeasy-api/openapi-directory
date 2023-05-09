# ResponsePolicyRules

### Available Operations

* [DNSResponsePolicyRulesCreate](#dnsresponsepolicyrulescreate) - Creates a new Response Policy Rule.
* [DNSResponsePolicyRulesDelete](#dnsresponsepolicyrulesdelete) - Deletes a previously created Response Policy Rule.
* [DNSResponsePolicyRulesGet](#dnsresponsepolicyrulesget) - Fetches the representation of an existing Response Policy Rule.
* [DNSResponsePolicyRulesList](#dnsresponsepolicyruleslist) - Enumerates all Response Policy Rules associated with a project.
* [DNSResponsePolicyRulesPatch](#dnsresponsepolicyrulespatch) - Applies a partial update to an existing Response Policy Rule.
* [DNSResponsePolicyRulesUpdate](#dnsresponsepolicyrulesupdate) - Updates an existing Response Policy Rule.

## DNSResponsePolicyRulesCreate

Creates a new Response Policy Rule.

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
    res, err := s.ResponsePolicyRules.DNSResponsePolicyRulesCreate(ctx, operations.DNSResponsePolicyRulesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResponsePolicyRule: &shared.ResponsePolicyRule{
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBehaviorUnspecified.ToPointer(),
            DNSName: sdk.String("quibusdam"),
            Kind: sdk.String("autem"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("tempore"),
                        Name: sdk.String("Don Dicki"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("at"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("amet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("molestias"),
                                                    Port: sdk.String("quaerat"),
                                                    Project: sdk.String("repellat"),
                                                    Region: sdk.String("expedita"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("libero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cumque"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("a"),
                                                    Region: sdk.String("tenetur"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ipsam"),
                                        Location: sdk.String("quod"),
                                        Rrdatas: []string{
                                            "doloremque",
                                            "illo",
                                            "reiciendis",
                                        },
                                        SignatureRrdatas: []string{
                                            "enim",
                                            "quasi",
                                            "accusamus",
                                            "ipsam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("atque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eius"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("mollitia"),
                                                    Port: sdk.String("minus"),
                                                    Project: sdk.String("quos"),
                                                    Region: sdk.String("explicabo"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("distinctio"),
                                        Location: sdk.String("praesentium"),
                                        Rrdatas: []string{
                                            "maiores",
                                            "corrupti",
                                        },
                                        SignatureRrdatas: []string{
                                            "placeat",
                                            "explicabo",
                                            "placeat",
                                        },
                                    },
                                },
                                Kind: sdk.String("animi"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("atque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laborum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("veritatis"),
                                                    Port: sdk.String("fugit"),
                                                    Project: sdk.String("nihil"),
                                                    Region: sdk.String("illum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nulla"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("omnis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("hic"),
                                                    Port: sdk.String("sapiente"),
                                                    Project: sdk.String("eius"),
                                                    Region: sdk.String("esse"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quasi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("similique"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("et"),
                                                    Port: sdk.String("distinctio"),
                                                    Project: sdk.String("porro"),
                                                    Region: sdk.String("nihil"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("numquam"),
                                        Location: sdk.String("rerum"),
                                        Rrdatas: []string{
                                            "aliquid",
                                            "placeat",
                                            "necessitatibus",
                                        },
                                        SignatureRrdatas: []string{
                                            "impedit",
                                            "ducimus",
                                            "incidunt",
                                            "voluptatibus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ducimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("incidunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquam"),
                                                    Port: sdk.String("totam"),
                                                    Project: sdk.String("soluta"),
                                                    Region: sdk.String("quibusdam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iure"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("autem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("perferendis"),
                                                    Port: sdk.String("tempora"),
                                                    Project: sdk.String("aliquam"),
                                                    Region: sdk.String("architecto"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nulla"),
                                        Location: sdk.String("qui"),
                                        Rrdatas: []string{
                                            "ratione",
                                            "soluta",
                                            "quos",
                                            "sit",
                                        },
                                        SignatureRrdatas: []string{
                                            "sit",
                                            "perspiciatis",
                                            "quaerat",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestiae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eveniet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("laboriosam"),
                                                    Port: sdk.String("sit"),
                                                    Project: sdk.String("labore"),
                                                    Region: sdk.String("ullam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("excepturi"),
                                        Location: sdk.String("soluta"),
                                        Rrdatas: []string{
                                            "rerum",
                                            "cum",
                                            "est",
                                            "fugiat",
                                        },
                                        SignatureRrdatas: []string{
                                            "qui",
                                        },
                                    },
                                },
                                Kind: sdk.String("tenetur"),
                            },
                            Kind: sdk.String("sunt"),
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
                                                        Kind: sdk.String("quod"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("et"),
                                                        Port: sdk.String("ipsam"),
                                                        Project: sdk.String("eos"),
                                                        Region: sdk.String("exercitationem"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("minima"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("quibusdam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("fuga"),
                                                        Port: sdk.String("excepturi"),
                                                        Project: sdk.String("corporis"),
                                                        Region: sdk.String("nam"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("itaque"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("porro"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("consequatur"),
                                                        Port: sdk.String("qui"),
                                                        Project: sdk.String("in"),
                                                        Region: sdk.String("enim"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("vel"),
                                            Location: sdk.String("impedit"),
                                            Rrdatas: []string{
                                                "quis",
                                            },
                                            SignatureRrdatas: []string{
                                                "est",
                                                "fuga",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("adipisci"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("cum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("nihil"),
                                                        Port: sdk.String("officiis"),
                                                        Project: sdk.String("inventore"),
                                                        Region: sdk.String("esse"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ex"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("minus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("explicabo"),
                                                        Port: sdk.String("alias"),
                                                        Project: sdk.String("blanditiis"),
                                                        Region: sdk.String("eligendi"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("qui"),
                                            Location: sdk.String("amet"),
                                            Rrdatas: []string{
                                                "perspiciatis",
                                                "corrupti",
                                                "sit",
                                                "magni",
                                            },
                                            SignatureRrdatas: []string{
                                                "quas",
                                                "ratione",
                                                "sapiente",
                                                "alias",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("repellendus"),
                                },
                                Kind: sdk.String("magnam"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("repudiandae"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("eius"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("blanditiis"),
                                            Port: sdk.String("nobis"),
                                            Project: sdk.String("ea"),
                                            Region: sdk.String("iusto"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("dolore"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("recusandae"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("quisquam"),
                                            Port: sdk.String("delectus"),
                                            Project: sdk.String("optio"),
                                            Region: sdk.String("sunt"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(5261.07),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("optio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("a"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quos"),
                                                    Port: sdk.String("dignissimos"),
                                                    Project: sdk.String("earum"),
                                                    Region: sdk.String("adipisci"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magni"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("voluptatem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("rerum"),
                                                    Port: sdk.String("nesciunt"),
                                                    Project: sdk.String("pariatur"),
                                                    Region: sdk.String("velit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("necessitatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ullam"),
                                                    Port: sdk.String("vel"),
                                                    Project: sdk.String("reprehenderit"),
                                                    Region: sdk.String("aut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("recusandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("harum"),
                                                    Port: sdk.String("illum"),
                                                    Project: sdk.String("dolor"),
                                                    Region: sdk.String("porro"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iste"),
                                        Rrdatas: []string{
                                            "vitae",
                                            "impedit",
                                            "eligendi",
                                            "veniam",
                                        },
                                        SignatureRrdatas: []string{
                                            "consectetur",
                                        },
                                        Weight: sdk.Float64(9983.44),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("iste"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cumque"),
                                                    Port: sdk.String("assumenda"),
                                                    Project: sdk.String("alias"),
                                                    Region: sdk.String("deserunt"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vel"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("perspiciatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatibus"),
                                                    Port: sdk.String("occaecati"),
                                                    Project: sdk.String("nemo"),
                                                    Region: sdk.String("quam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("reiciendis"),
                                        Rrdatas: []string{
                                            "laudantium",
                                        },
                                        SignatureRrdatas: []string{
                                            "ab",
                                            "atque",
                                        },
                                        Weight: sdk.Float64(6165.01),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("possimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("officiis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatum"),
                                                    Port: sdk.String("aperiam"),
                                                    Project: sdk.String("reprehenderit"),
                                                    Region: sdk.String("animi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("hic"),
                                                    Port: sdk.String("dolorem"),
                                                    Project: sdk.String("adipisci"),
                                                    Region: sdk.String("optio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("similique"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("unde"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nam"),
                                                    Port: sdk.String("provident"),
                                                    Project: sdk.String("fugiat"),
                                                    Region: sdk.String("recusandae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("non"),
                                        Rrdatas: []string{
                                            "neque",
                                        },
                                        SignatureRrdatas: []string{
                                            "soluta",
                                        },
                                        Weight: sdk.Float64(6844.19),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("commodi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("temporibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eum"),
                                                    Port: sdk.String("rem"),
                                                    Project: sdk.String("expedita"),
                                                    Region: sdk.String("animi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("excepturi"),
                                        Rrdatas: []string{
                                            "dicta",
                                        },
                                        SignatureRrdatas: []string{
                                            "distinctio",
                                            "quo",
                                        },
                                        Weight: sdk.Float64(7063.72),
                                    },
                                },
                                Kind: sdk.String("magnam"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("esse"),
                                                    Port: sdk.String("adipisci"),
                                                    Project: sdk.String("autem"),
                                                    Region: sdk.String("tempora"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("beatae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("veritatis"),
                                                    Port: sdk.String("amet"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("recusandae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("fugiat"),
                                        Rrdatas: []string{
                                            "sit",
                                            "modi",
                                            "eum",
                                            "rerum",
                                        },
                                        SignatureRrdatas: []string{
                                            "nemo",
                                            "architecto",
                                            "vel",
                                            "amet",
                                        },
                                        Weight: sdk.Float64(7058.6),
                                    },
                                },
                                Kind: sdk.String("libero"),
                            },
                        },
                        Rrdatas: []string{
                            "deserunt",
                            "eius",
                            "molestias",
                            "dolores",
                        },
                        SignatureRrdatas: []string{
                            "reprehenderit",
                        },
                        TTL: sdk.Int(794531),
                        Type: sdk.String("non"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Brandon Cummings"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quaerat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("incidunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("minima"),
                                                    Port: sdk.String("quo"),
                                                    Project: sdk.String("quis"),
                                                    Region: sdk.String("facere"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quidem"),
                                        Location: sdk.String("harum"),
                                        Rrdatas: []string{
                                            "optio",
                                        },
                                        SignatureRrdatas: []string{
                                            "reprehenderit",
                                            "quo",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptates"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("iste"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("beatae"),
                                                    Port: sdk.String("itaque"),
                                                    Project: sdk.String("atque"),
                                                    Region: sdk.String("dolorum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("similique"),
                                        Location: sdk.String("qui"),
                                        Rrdatas: []string{
                                            "quam",
                                            "assumenda",
                                        },
                                        SignatureRrdatas: []string{
                                            "porro",
                                            "quasi",
                                            "sint",
                                            "inventore",
                                        },
                                    },
                                },
                                Kind: sdk.String("fugit"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("at"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("eum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nam"),
                                                    Port: sdk.String("sapiente"),
                                                    Project: sdk.String("porro"),
                                                    Region: sdk.String("impedit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veniam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("iure"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nulla"),
                                                    Port: sdk.String("quaerat"),
                                                    Project: sdk.String("aut"),
                                                    Region: sdk.String("architecto"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("esse"),
                                                    Port: sdk.String("iste"),
                                                    Project: sdk.String("ex"),
                                                    Region: sdk.String("odit"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptatem"),
                                        Location: sdk.String("voluptas"),
                                        Rrdatas: []string{
                                            "vero",
                                            "hic",
                                            "consequuntur",
                                        },
                                        SignatureRrdatas: []string{
                                            "aperiam",
                                            "animi",
                                            "ratione",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("non"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("porro"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("deserunt"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("perferendis"),
                                                    Region: sdk.String("illo"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("perferendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("excepturi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("culpa"),
                                                    Port: sdk.String("quo"),
                                                    Project: sdk.String("sunt"),
                                                    Region: sdk.String("necessitatibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("adipisci"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quis"),
                                                    Port: sdk.String("quos"),
                                                    Project: sdk.String("ea"),
                                                    Region: sdk.String("fugiat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dicta"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("delectus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatibus"),
                                                    Port: sdk.String("sint"),
                                                    Project: sdk.String("reprehenderit"),
                                                    Region: sdk.String("est"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("numquam"),
                                        Location: sdk.String("nam"),
                                        Rrdatas: []string{
                                            "fuga",
                                            "facere",
                                            "odit",
                                            "nam",
                                        },
                                        SignatureRrdatas: []string{
                                            "quam",
                                            "fugiat",
                                            "ea",
                                            "molestiae",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("deserunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellendus"),
                                                    Port: sdk.String("excepturi"),
                                                    Project: sdk.String("unde"),
                                                    Region: sdk.String("expedita"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eius"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quibusdam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quasi"),
                                                    Port: sdk.String("magni"),
                                                    Project: sdk.String("numquam"),
                                                    Region: sdk.String("velit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("sunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quam"),
                                                    Port: sdk.String("perferendis"),
                                                    Project: sdk.String("cumque"),
                                                    Region: sdk.String("delectus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ea"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quidem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sequi"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("assumenda"),
                                                    Region: sdk.String("modi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolores"),
                                        Location: sdk.String("beatae"),
                                        Rrdatas: []string{
                                            "repellendus",
                                            "ut",
                                            "nesciunt",
                                        },
                                        SignatureRrdatas: []string{
                                            "beatae",
                                            "delectus",
                                            "ipsa",
                                            "quo",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eaque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("doloremque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("perferendis"),
                                                    Port: sdk.String("dolor"),
                                                    Project: sdk.String("earum"),
                                                    Region: sdk.String("facilis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("fugiat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("tempore"),
                                                    Port: sdk.String("dolorem"),
                                                    Project: sdk.String("dolorum"),
                                                    Region: sdk.String("in"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aperiam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("excepturi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatibus"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("deserunt"),
                                                    Region: sdk.String("iure"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("labore"),
                                        Location: sdk.String("quasi"),
                                        Rrdatas: []string{
                                            "corporis",
                                            "odio",
                                            "quibusdam",
                                            "dicta",
                                        },
                                        SignatureRrdatas: []string{
                                            "vero",
                                            "quibusdam",
                                            "maxime",
                                            "consequuntur",
                                        },
                                    },
                                },
                                Kind: sdk.String("sit"),
                            },
                            Kind: sdk.String("nostrum"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ratione"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("pariatur"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("sequi"),
                                                        Port: sdk.String("quo"),
                                                        Project: sdk.String("repudiandae"),
                                                        Region: sdk.String("ab"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("praesentium"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("labore"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("sunt"),
                                                        Port: sdk.String("tenetur"),
                                                        Project: sdk.String("occaecati"),
                                                        Region: sdk.String("necessitatibus"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("necessitatibus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("natus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("iure"),
                                                        Port: sdk.String("ex"),
                                                        Project: sdk.String("error"),
                                                        Region: sdk.String("deleniti"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("tempore"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("adipisci"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("tempora"),
                                                        Port: sdk.String("quaerat"),
                                                        Project: sdk.String("debitis"),
                                                        Region: sdk.String("similique"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("porro"),
                                            Location: sdk.String("blanditiis"),
                                            Rrdatas: []string{
                                                "sequi",
                                                "laborum",
                                                "fugit",
                                            },
                                            SignatureRrdatas: []string{
                                                "dignissimos",
                                                "corporis",
                                                "quo",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("nisi"),
                                },
                                Kind: sdk.String("quo"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("voluptatibus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("suscipit"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("nisi"),
                                            Port: sdk.String("quibusdam"),
                                            Project: sdk.String("alias"),
                                            Region: sdk.String("voluptate"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(8299.18),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("error"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laudantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("officia"),
                                                    Port: sdk.String("repudiandae"),
                                                    Project: sdk.String("nemo"),
                                                    Region: sdk.String("voluptatem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("vel"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("laboriosam"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("similique"),
                                                    Region: sdk.String("veritatis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("temporibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("veritatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("iure"),
                                                    Port: sdk.String("similique"),
                                                    Project: sdk.String("molestiae"),
                                                    Region: sdk.String("itaque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptatum"),
                                        Rrdatas: []string{
                                            "minima",
                                            "non",
                                            "qui",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "tenetur",
                                        },
                                        Weight: sdk.Float64(2466.53),
                                    },
                                },
                                Kind: sdk.String("asperiores"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("veniam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("assumenda"),
                                                    Port: sdk.String("expedita"),
                                                    Project: sdk.String("molestiae"),
                                                    Region: sdk.String("autem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nostrum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("asperiores"),
                                                    Port: sdk.String("doloremque"),
                                                    Project: sdk.String("id"),
                                                    Region: sdk.String("veniam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ea"),
                                        Rrdatas: []string{
                                            "necessitatibus",
                                            "harum",
                                            "cumque",
                                            "culpa",
                                        },
                                        SignatureRrdatas: []string{
                                            "laborum",
                                            "consequuntur",
                                            "omnis",
                                            "maxime",
                                        },
                                        Weight: sdk.Float64(6411.24),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("natus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("deleniti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eligendi"),
                                                    Port: sdk.String("sint"),
                                                    Project: sdk.String("ipsam"),
                                                    Region: sdk.String("laboriosam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestiae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ex"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolorem"),
                                                    Port: sdk.String("minus"),
                                                    Project: sdk.String("ad"),
                                                    Region: sdk.String("ipsum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ipsa"),
                                        Rrdatas: []string{
                                            "minima",
                                            "vel",
                                            "nisi",
                                        },
                                        SignatureRrdatas: []string{
                                            "et",
                                            "autem",
                                        },
                                        Weight: sdk.Float64(2204.55),
                                    },
                                },
                                Kind: sdk.String("culpa"),
                            },
                        },
                        Rrdatas: []string{
                            "suscipit",
                        },
                        SignatureRrdatas: []string{
                            "deleniti",
                        },
                        TTL: sdk.Int(350222),
                        Type: sdk.String("illo"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("fugit"),
                        Name: sdk.String("Randolph Considine"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("perspiciatis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("eos"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ipsa"),
                                                    Port: sdk.String("esse"),
                                                    Project: sdk.String("consequuntur"),
                                                    Region: sdk.String("aliquam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("autem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quidem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("officia"),
                                                    Port: sdk.String("modi"),
                                                    Project: sdk.String("alias"),
                                                    Region: sdk.String("nam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("dolorum"),
                                                    Port: sdk.String("libero"),
                                                    Project: sdk.String("voluptatem"),
                                                    Region: sdk.String("at"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nisi"),
                                        Location: sdk.String("quis"),
                                        Rrdatas: []string{
                                            "itaque",
                                        },
                                        SignatureRrdatas: []string{
                                            "asperiores",
                                            "ratione",
                                            "eos",
                                            "laborum",
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
                                                    IPAddress: sdk.String("aspernatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("accusantium"),
                                                    Project: sdk.String("debitis"),
                                                    Region: sdk.String("animi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("repellendus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("hic"),
                                                    Port: sdk.String("labore"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("voluptas"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("saepe"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("veniam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("minima"),
                                                    Port: sdk.String("nisi"),
                                                    Project: sdk.String("repellat"),
                                                    Region: sdk.String("sapiente"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("a"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("amet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("temporibus"),
                                                    Port: sdk.String("tenetur"),
                                                    Project: sdk.String("nostrum"),
                                                    Region: sdk.String("tempora"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("maiores"),
                                        Location: sdk.String("facere"),
                                        Rrdatas: []string{
                                            "exercitationem",
                                            "saepe",
                                            "deserunt",
                                            "sint",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolore",
                                            "sequi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("occaecati"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("illum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sapiente"),
                                                    Port: sdk.String("soluta"),
                                                    Project: sdk.String("eius"),
                                                    Region: sdk.String("dolores"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolorum"),
                                        Location: sdk.String("deleniti"),
                                        Rrdatas: []string{
                                            "iure",
                                            "dolorem",
                                            "neque",
                                            "laudantium",
                                        },
                                        SignatureRrdatas: []string{
                                            "saepe",
                                            "incidunt",
                                            "pariatur",
                                        },
                                    },
                                },
                                Kind: sdk.String("deleniti"),
                            },
                            Kind: sdk.String("aut"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("necessitatibus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("quis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("iste"),
                                                        Port: sdk.String("harum"),
                                                        Project: sdk.String("sunt"),
                                                        Region: sdk.String("atque"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("similique"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("tempora"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("sapiente"),
                                                        Port: sdk.String("possimus"),
                                                        Project: sdk.String("nisi"),
                                                        Region: sdk.String("ab"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("omnis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("ipsum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("nulla"),
                                                        Port: sdk.String("dolorum"),
                                                        Project: sdk.String("maxime"),
                                                        Region: sdk.String("assumenda"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("velit"),
                                            Location: sdk.String("voluptatum"),
                                            Rrdatas: []string{
                                                "quibusdam",
                                                "doloremque",
                                                "assumenda",
                                                "nobis",
                                            },
                                            SignatureRrdatas: []string{
                                                "esse",
                                                "et",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("temporibus"),
                                },
                                Kind: sdk.String("optio"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("delectus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("vero"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("culpa"),
                                            Port: sdk.String("asperiores"),
                                            Project: sdk.String("quasi"),
                                            Region: sdk.String("veniam"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("provident"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("aut"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("provident"),
                                            Port: sdk.String("aperiam"),
                                            Project: sdk.String("repellendus"),
                                            Region: sdk.String("ab"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(7414.54),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aperiam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("repellat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("harum"),
                                                    Port: sdk.String("quibusdam"),
                                                    Project: sdk.String("totam"),
                                                    Region: sdk.String("provident"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("maxime"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("id"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolores"),
                                                    Port: sdk.String("vel"),
                                                    Project: sdk.String("ipsum"),
                                                    Region: sdk.String("occaecati"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("pariatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("in"),
                                                    Port: sdk.String("nobis"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("natus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("eaque"),
                                        Rrdatas: []string{
                                            "facilis",
                                        },
                                        SignatureRrdatas: []string{
                                            "atque",
                                            "illo",
                                            "dolorum",
                                        },
                                        Weight: sdk.Float64(5908),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("maiores"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nisi"),
                                                    Port: sdk.String("autem"),
                                                    Project: sdk.String("tempora"),
                                                    Region: sdk.String("mollitia"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quas"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("doloremque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("asperiores"),
                                                    Port: sdk.String("rem"),
                                                    Project: sdk.String("quod"),
                                                    Region: sdk.String("commodi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("natus"),
                                        Rrdatas: []string{
                                            "placeat",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolor",
                                            "quia",
                                        },
                                        Weight: sdk.Float64(8584.34),
                                    },
                                },
                                Kind: sdk.String("occaecati"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("culpa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("molestias"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptate"),
                                                    Port: sdk.String("aliquid"),
                                                    Project: sdk.String("officia"),
                                                    Region: sdk.String("qui"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("animi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quas"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("optio"),
                                                    Port: sdk.String("quo"),
                                                    Project: sdk.String("ullam"),
                                                    Region: sdk.String("ipsa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("placeat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("culpa"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nostrum"),
                                                    Port: sdk.String("dicta"),
                                                    Project: sdk.String("eos"),
                                                    Region: sdk.String("porro"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iusto"),
                                        Rrdatas: []string{
                                            "voluptate",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolore",
                                            "rem",
                                            "provident",
                                        },
                                        Weight: sdk.Float64(2132.82),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dignissimos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("alias"),
                                                    Port: sdk.String("sit"),
                                                    Project: sdk.String("accusamus"),
                                                    Region: sdk.String("sint"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("commodi"),
                                        Rrdatas: []string{
                                            "eveniet",
                                            "eligendi",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolorem",
                                            "eum",
                                        },
                                        Weight: sdk.Float64(8215.79),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("neque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("omnis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nesciunt"),
                                                    Port: sdk.String("omnis"),
                                                    Project: sdk.String("corrupti"),
                                                    Region: sdk.String("optio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestiae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("dolor"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cupiditate"),
                                                    Port: sdk.String("quia"),
                                                    Project: sdk.String("dolor"),
                                                    Region: sdk.String("cupiditate"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("praesentium"),
                                        Rrdatas: []string{
                                            "fugiat",
                                            "ipsum",
                                            "pariatur",
                                            "amet",
                                        },
                                        SignatureRrdatas: []string{
                                            "nobis",
                                            "quam",
                                            "placeat",
                                        },
                                        Weight: sdk.Float64(6693.9),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("placeat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("minus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("corrupti"),
                                                    Port: sdk.String("aliquid"),
                                                    Project: sdk.String("aliquam"),
                                                    Region: sdk.String("error"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("animi"),
                                        Rrdatas: []string{
                                            "perferendis",
                                            "impedit",
                                        },
                                        SignatureRrdatas: []string{
                                            "quibusdam",
                                            "veniam",
                                            "pariatur",
                                            "commodi",
                                        },
                                        Weight: sdk.Float64(6115.25),
                                    },
                                },
                                Kind: sdk.String("corrupti"),
                            },
                        },
                        Rrdatas: []string{
                            "distinctio",
                            "in",
                            "consequuntur",
                        },
                        SignatureRrdatas: []string{
                            "voluptas",
                        },
                        TTL: sdk.Int(299180),
                        Type: sdk.String("ad"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("quae"),
                        Name: sdk.String("Willie Kling V"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("facere"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("earum"),
                                                    Region: sdk.String("quibusdam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("inventore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("tempore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fuga"),
                                                    Port: sdk.String("odit"),
                                                    Project: sdk.String("minus"),
                                                    Region: sdk.String("sunt"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sint"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("magnam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quaerat"),
                                                    Port: sdk.String("minima"),
                                                    Project: sdk.String("officiis"),
                                                    Region: sdk.String("unde"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ullam"),
                                        Location: sdk.String("enim"),
                                        Rrdatas: []string{
                                            "cumque",
                                            "cumque",
                                            "et",
                                            "praesentium",
                                        },
                                        SignatureRrdatas: []string{
                                            "eveniet",
                                            "est",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("unde"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("dicta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("iure"),
                                                    Port: sdk.String("cumque"),
                                                    Project: sdk.String("quaerat"),
                                                    Region: sdk.String("sequi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("culpa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("explicabo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("laborum"),
                                                    Port: sdk.String("animi"),
                                                    Project: sdk.String("quam"),
                                                    Region: sdk.String("totam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("incidunt"),
                                        Location: sdk.String("similique"),
                                        Rrdatas: []string{
                                            "culpa",
                                            "ratione",
                                            "illum",
                                        },
                                        SignatureRrdatas: []string{
                                            "amet",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptates"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("tenetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolor"),
                                                    Port: sdk.String("totam"),
                                                    Project: sdk.String("beatae"),
                                                    Region: sdk.String("vitae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("laborum"),
                                        Location: sdk.String("beatae"),
                                        Rrdatas: []string{
                                            "veniam",
                                        },
                                        SignatureRrdatas: []string{
                                            "laudantium",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rerum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ducimus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellendus"),
                                                    Port: sdk.String("enim"),
                                                    Project: sdk.String("voluptas"),
                                                    Region: sdk.String("veniam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptatem"),
                                        Location: sdk.String("quam"),
                                        Rrdatas: []string{
                                            "aspernatur",
                                            "veritatis",
                                        },
                                        SignatureRrdatas: []string{
                                            "ad",
                                            "deleniti",
                                            "doloribus",
                                            "magnam",
                                        },
                                    },
                                },
                                Kind: sdk.String("nulla"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("provident"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nostrum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("modi"),
                                                    Port: sdk.String("cumque"),
                                                    Project: sdk.String("fugit"),
                                                    Region: sdk.String("accusantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("fuga"),
                                        Location: sdk.String("doloremque"),
                                        Rrdatas: []string{
                                            "dicta",
                                            "veritatis",
                                        },
                                        SignatureRrdatas: []string{
                                            "omnis",
                                            "commodi",
                                            "dicta",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aspernatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("deserunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nulla"),
                                                    Port: sdk.String("facilis"),
                                                    Project: sdk.String("libero"),
                                                    Region: sdk.String("corrupti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("doloribus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("velit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("assumenda"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("perspiciatis"),
                                                    Region: sdk.String("odit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eligendi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("iusto"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("dolores"),
                                                    Project: sdk.String("placeat"),
                                                    Region: sdk.String("nam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("exercitationem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("consequuntur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("deleniti"),
                                                    Port: sdk.String("esse"),
                                                    Project: sdk.String("voluptatum"),
                                                    Region: sdk.String("aspernatur"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("eius"),
                                        Location: sdk.String("accusantium"),
                                        Rrdatas: []string{
                                            "asperiores",
                                            "corporis",
                                            "tempora",
                                        },
                                        SignatureRrdatas: []string{
                                            "a",
                                            "corrupti",
                                            "blanditiis",
                                        },
                                    },
                                },
                                Kind: sdk.String("hic"),
                            },
                            Kind: sdk.String("blanditiis"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("harum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("alias"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quod"),
                                                        Port: sdk.String("totam"),
                                                        Project: sdk.String("officiis"),
                                                        Region: sdk.String("dicta"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("maiores"),
                                            Location: sdk.String("dolores"),
                                            Rrdatas: []string{
                                                "eum",
                                            },
                                            SignatureRrdatas: []string{
                                                "corporis",
                                                "pariatur",
                                                "quas",
                                                "sequi",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("temporibus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("aperiam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("ab"),
                                                        Port: sdk.String("voluptatem"),
                                                        Project: sdk.String("provident"),
                                                        Region: sdk.String("ipsa"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("delectus"),
                                            Location: sdk.String("voluptas"),
                                            Rrdatas: []string{
                                                "quae",
                                                "voluptas",
                                            },
                                            SignatureRrdatas: []string{
                                                "ducimus",
                                                "adipisci",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ratione"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("ex"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("dicta"),
                                                        Port: sdk.String("minus"),
                                                        Project: sdk.String("exercitationem"),
                                                        Region: sdk.String("molestiae"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("iure"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("repellendus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("itaque"),
                                                        Port: sdk.String("molestiae"),
                                                        Project: sdk.String("quaerat"),
                                                        Region: sdk.String("explicabo"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dolore"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("excepturi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("odit"),
                                                        Port: sdk.String("beatae"),
                                                        Project: sdk.String("exercitationem"),
                                                        Region: sdk.String("officiis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("eaque"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("voluptas"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("vitae"),
                                                        Port: sdk.String("tempora"),
                                                        Project: sdk.String("molestias"),
                                                        Region: sdk.String("cupiditate"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("officia"),
                                            Location: sdk.String("minima"),
                                            Rrdatas: []string{
                                                "suscipit",
                                                "sequi",
                                                "debitis",
                                                "neque",
                                            },
                                            SignatureRrdatas: []string{
                                                "tenetur",
                                                "non",
                                                "pariatur",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("natus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("quibusdam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("dolorem"),
                                                        Port: sdk.String("velit"),
                                                        Project: sdk.String("vero"),
                                                        Region: sdk.String("placeat"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("pariatur"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("non"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("praesentium"),
                                                        Port: sdk.String("ipsum"),
                                                        Project: sdk.String("itaque"),
                                                        Region: sdk.String("non"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dolorum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("id"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quas"),
                                                        Port: sdk.String("saepe"),
                                                        Project: sdk.String("modi"),
                                                        Region: sdk.String("assumenda"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("maiores"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("in"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quaerat"),
                                                        Port: sdk.String("nostrum"),
                                                        Project: sdk.String("libero"),
                                                        Region: sdk.String("totam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("omnis"),
                                            Location: sdk.String("veniam"),
                                            Rrdatas: []string{
                                                "facere",
                                                "aliquam",
                                            },
                                            SignatureRrdatas: []string{
                                                "ipsum",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("recusandae"),
                                },
                                Kind: sdk.String("inventore"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("error"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("praesentium"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("consectetur"),
                                            Port: sdk.String("dicta"),
                                            Project: sdk.String("ipsa"),
                                            Region: sdk.String("occaecati"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(189.01),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facere"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("aut"),
                                                    Project: sdk.String("cupiditate"),
                                                    Region: sdk.String("sed"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("harum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nihil"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("incidunt"),
                                                    Port: sdk.String("a"),
                                                    Project: sdk.String("consequatur"),
                                                    Region: sdk.String("consequuntur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("numquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("excepturi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatum"),
                                                    Port: sdk.String("vel"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("modi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("expedita"),
                                        Rrdatas: []string{
                                            "consequuntur",
                                            "eaque",
                                            "asperiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "nostrum",
                                            "quibusdam",
                                            "provident",
                                            "veritatis",
                                        },
                                        Weight: sdk.Float64(1246.11),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("expedita"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("magnam"),
                                                    Port: sdk.String("excepturi"),
                                                    Project: sdk.String("placeat"),
                                                    Region: sdk.String("dolorum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("enim"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sed"),
                                                    Port: sdk.String("molestiae"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("ex"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("error"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("consequuntur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("occaecati"),
                                                    Port: sdk.String("earum"),
                                                    Project: sdk.String("eum"),
                                                    Region: sdk.String("temporibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("debitis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("temporibus"),
                                                    Port: sdk.String("quidem"),
                                                    Project: sdk.String("neque"),
                                                    Region: sdk.String("est"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("repellendus"),
                                        Rrdatas: []string{
                                            "quisquam",
                                            "vel",
                                        },
                                        SignatureRrdatas: []string{
                                            "doloremque",
                                            "adipisci",
                                            "quasi",
                                        },
                                        Weight: sdk.Float64(374.55),
                                    },
                                },
                                Kind: sdk.String("molestias"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quisquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("sequi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("modi"),
                                                    Port: sdk.String("nihil"),
                                                    Project: sdk.String("velit"),
                                                    Region: sdk.String("aut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("libero"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("incidunt"),
                                                    Port: sdk.String("asperiores"),
                                                    Project: sdk.String("eos"),
                                                    Region: sdk.String("mollitia"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("distinctio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("earum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nemo"),
                                                    Port: sdk.String("eum"),
                                                    Project: sdk.String("iusto"),
                                                    Region: sdk.String("veritatis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptates"),
                                        Rrdatas: []string{
                                            "impedit",
                                            "amet",
                                            "dolores",
                                        },
                                        SignatureRrdatas: []string{
                                            "neque",
                                            "enim",
                                        },
                                        Weight: sdk.Float64(535.99),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempora"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("molestiae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aliquam"),
                                                    Port: sdk.String("ipsum"),
                                                    Project: sdk.String("nihil"),
                                                    Region: sdk.String("blanditiis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("natus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("recusandae"),
                                                    Port: sdk.String("iste"),
                                                    Project: sdk.String("error"),
                                                    Region: sdk.String("dicta"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nemo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("numquam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("omnis"),
                                                    Port: sdk.String("amet"),
                                                    Project: sdk.String("deserunt"),
                                                    Region: sdk.String("ducimus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("modi"),
                                        Rrdatas: []string{
                                            "ipsa",
                                            "dolores",
                                            "ullam",
                                            "sed",
                                        },
                                        SignatureRrdatas: []string{
                                            "saepe",
                                            "dolor",
                                            "quidem",
                                            "quaerat",
                                        },
                                        Weight: sdk.Float64(7365.74),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quibusdam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("odio"),
                                                    Port: sdk.String("reprehenderit"),
                                                    Project: sdk.String("quas"),
                                                    Region: sdk.String("voluptates"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("distinctio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nisi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quasi"),
                                                    Port: sdk.String("fugiat"),
                                                    Project: sdk.String("aspernatur"),
                                                    Region: sdk.String("impedit"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptatibus"),
                                        Rrdatas: []string{
                                            "eaque",
                                            "aspernatur",
                                        },
                                        SignatureRrdatas: []string{
                                            "laborum",
                                            "hic",
                                            "rerum",
                                        },
                                        Weight: sdk.Float64(1292.59),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("aliquam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("adipisci"),
                                                    Port: sdk.String("ipsam"),
                                                    Project: sdk.String("fugiat"),
                                                    Region: sdk.String("enim"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eveniet"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("exercitationem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("culpa"),
                                                    Port: sdk.String("alias"),
                                                    Project: sdk.String("eos"),
                                                    Region: sdk.String("quos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quisquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("accusamus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("enim"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("mollitia"),
                                                    Region: sdk.String("veritatis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("aut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fugiat"),
                                                    Port: sdk.String("deserunt"),
                                                    Project: sdk.String("sint"),
                                                    Region: sdk.String("eum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("commodi"),
                                        Rrdatas: []string{
                                            "rem",
                                            "occaecati",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptate",
                                            "nam",
                                            "quam",
                                            "blanditiis",
                                        },
                                        Weight: sdk.Float64(3848.31),
                                    },
                                },
                                Kind: sdk.String("odio"),
                            },
                        },
                        Rrdatas: []string{
                            "necessitatibus",
                        },
                        SignatureRrdatas: []string{
                            "consectetur",
                        },
                        TTL: sdk.Int(686190),
                        Type: sdk.String("quasi"),
                    },
                },
            },
            RuleName: sdk.String("eos"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("rerum"),
        ClientOperationID: sdk.String("cupiditate"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        Project: "perspiciatis",
        QuotaUser: sdk.String("dolore"),
        ResponsePolicy: "corporis",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.DNSResponsePolicyRulesCreateSecurity{
        Option1: &operations.DNSResponsePolicyRulesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicyRule != nil {
        // handle response
    }
}
```

## DNSResponsePolicyRulesDelete

Deletes a previously created Response Policy Rule.

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
    res, err := s.ResponsePolicyRules.DNSResponsePolicyRulesDelete(ctx, operations.DNSResponsePolicyRulesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("asperiores"),
        ClientOperationID: sdk.String("veniam"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        Project: "amet",
        QuotaUser: sdk.String("blanditiis"),
        ResponsePolicy: "nesciunt",
        ResponsePolicyRule: "ex",
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DNSResponsePolicyRulesDeleteSecurity{
        Option1: &operations.DNSResponsePolicyRulesDeleteSecurityOption1{
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

## DNSResponsePolicyRulesGet

Fetches the representation of an existing Response Policy Rule.

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
    res, err := s.ResponsePolicyRules.DNSResponsePolicyRulesGet(ctx, operations.DNSResponsePolicyRulesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quisquam"),
        ClientOperationID: sdk.String("nulla"),
        Fields: sdk.String("a"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        Project: "dicta",
        QuotaUser: sdk.String("minima"),
        ResponsePolicy: "facilis",
        ResponsePolicyRule: "sit",
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DNSResponsePolicyRulesGetSecurity{
        Option1: &operations.DNSResponsePolicyRulesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicyRule != nil {
        // handle response
    }
}
```

## DNSResponsePolicyRulesList

Enumerates all Response Policy Rules associated with a project.

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
    res, err := s.ResponsePolicyRules.DNSResponsePolicyRulesList(ctx, operations.DNSResponsePolicyRulesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("dicta"),
        MaxResults: sdk.Int64(191101),
        OauthToken: sdk.String("delectus"),
        PageToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        Project: "officiis",
        QuotaUser: sdk.String("itaque"),
        ResponsePolicy: "nulla",
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DNSResponsePolicyRulesListSecurity{
        Option1: &operations.DNSResponsePolicyRulesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicyRulesListResponse != nil {
        // handle response
    }
}
```

## DNSResponsePolicyRulesPatch

Applies a partial update to an existing Response Policy Rule.

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
    res, err := s.ResponsePolicyRules.DNSResponsePolicyRulesPatch(ctx, operations.DNSResponsePolicyRulesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResponsePolicyRule1: &shared.ResponsePolicyRule{
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBypassResponsePolicy.ToPointer(),
            DNSName: sdk.String("tempore"),
            Kind: sdk.String("reiciendis"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("sit"),
                        Name: sdk.String("Jenny Crist"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("necessitatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("in"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("amet"),
                                                    Port: sdk.String("fugiat"),
                                                    Project: sdk.String("corporis"),
                                                    Region: sdk.String("impedit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("in"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptate"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quis"),
                                                    Port: sdk.String("expedita"),
                                                    Project: sdk.String("quam"),
                                                    Region: sdk.String("laudantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("exercitationem"),
                                        Location: sdk.String("vitae"),
                                        Rrdatas: []string{
                                            "blanditiis",
                                            "nulla",
                                        },
                                        SignatureRrdatas: []string{
                                            "quibusdam",
                                            "minima",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("cupiditate"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("minima"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consectetur"),
                                                    Port: sdk.String("nostrum"),
                                                    Project: sdk.String("tempore"),
                                                    Region: sdk.String("ipsum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolorem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("maxime"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maiores"),
                                                    Port: sdk.String("unde"),
                                                    Project: sdk.String("reprehenderit"),
                                                    Region: sdk.String("voluptatem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("placeat"),
                                        Location: sdk.String("dolore"),
                                        Rrdatas: []string{
                                            "voluptatibus",
                                        },
                                        SignatureRrdatas: []string{
                                            "provident",
                                            "delectus",
                                            "dolore",
                                            "totam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("numquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("consequuntur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptates"),
                                                    Port: sdk.String("in"),
                                                    Project: sdk.String("minima"),
                                                    Region: sdk.String("expedita"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ducimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("iure"),
                                                    Port: sdk.String("nostrum"),
                                                    Project: sdk.String("cumque"),
                                                    Region: sdk.String("eaque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("earum"),
                                        Location: sdk.String("earum"),
                                        Rrdatas: []string{
                                            "vel",
                                            "sapiente",
                                            "perspiciatis",
                                        },
                                        SignatureRrdatas: []string{
                                            "libero",
                                        },
                                    },
                                },
                                Kind: sdk.String("molestias"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("beatae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("deleniti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("unde"),
                                                    Port: sdk.String("veniam"),
                                                    Project: sdk.String("nam"),
                                                    Region: sdk.String("accusamus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("corporis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("soluta"),
                                                    Port: sdk.String("nihil"),
                                                    Project: sdk.String("adipisci"),
                                                    Region: sdk.String("provident"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reiciendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("odio"),
                                                    Port: sdk.String("voluptate"),
                                                    Project: sdk.String("explicabo"),
                                                    Region: sdk.String("architecto"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("perferendis"),
                                        Location: sdk.String("possimus"),
                                        Rrdatas: []string{
                                            "delectus",
                                        },
                                        SignatureRrdatas: []string{
                                            "exercitationem",
                                            "quis",
                                        },
                                    },
                                },
                                Kind: sdk.String("quos"),
                            },
                            Kind: sdk.String("impedit"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quod"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("sed"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quibusdam"),
                                                        Port: sdk.String("fugit"),
                                                        Project: sdk.String("nam"),
                                                        Region: sdk.String("optio"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("accusantium"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("excepturi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("voluptatem"),
                                                        Port: sdk.String("voluptatum"),
                                                        Project: sdk.String("ducimus"),
                                                        Region: sdk.String("possimus"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("unde"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("culpa"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("recusandae"),
                                                        Port: sdk.String("doloremque"),
                                                        Project: sdk.String("magnam"),
                                                        Region: sdk.String("quia"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("quibusdam"),
                                            Location: sdk.String("temporibus"),
                                            Rrdatas: []string{
                                                "placeat",
                                                "est",
                                            },
                                            SignatureRrdatas: []string{
                                                "placeat",
                                                "occaecati",
                                                "nam",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("minus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("culpa"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quod"),
                                                        Port: sdk.String("a"),
                                                        Project: sdk.String("eveniet"),
                                                        Region: sdk.String("sint"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("saepe"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("minima"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("reiciendis"),
                                                        Port: sdk.String("molestias"),
                                                        Project: sdk.String("ipsa"),
                                                        Region: sdk.String("amet"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("natus"),
                                            Location: sdk.String("aperiam"),
                                            Rrdatas: []string{
                                                "doloribus",
                                                "amet",
                                            },
                                            SignatureRrdatas: []string{
                                                "deleniti",
                                                "dolor",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("sint"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("sequi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("eius"),
                                                        Port: sdk.String("odit"),
                                                        Project: sdk.String("recusandae"),
                                                        Region: sdk.String("minima"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("aliquam"),
                                            Location: sdk.String("similique"),
                                            Rrdatas: []string{
                                                "corporis",
                                                "dolore",
                                                "commodi",
                                            },
                                            SignatureRrdatas: []string{
                                                "quis",
                                                "provident",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("iusto"),
                                },
                                Kind: sdk.String("optio"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consequatur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("dolorem"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("maxime"),
                                            Port: sdk.String("inventore"),
                                            Project: sdk.String("modi"),
                                            Region: sdk.String("nihil"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("vitae"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("veniam"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("dolorum"),
                                            Port: sdk.String("animi"),
                                            Project: sdk.String("mollitia"),
                                            Region: sdk.String("autem"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(8490.49),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nemo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quidem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquid"),
                                                    Port: sdk.String("eius"),
                                                    Project: sdk.String("atque"),
                                                    Region: sdk.String("reprehenderit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aspernatur"),
                                                    Port: sdk.String("nobis"),
                                                    Project: sdk.String("voluptatum"),
                                                    Region: sdk.String("ex"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aspernatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("voluptatem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nobis"),
                                                    Port: sdk.String("saepe"),
                                                    Project: sdk.String("maiores"),
                                                    Region: sdk.String("autem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("perspiciatis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("illo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quae"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("enim"),
                                                    Region: sdk.String("ducimus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("suscipit"),
                                        Rrdatas: []string{
                                            "alias",
                                        },
                                        SignatureRrdatas: []string{
                                            "quibusdam",
                                            "fuga",
                                            "nihil",
                                        },
                                        Weight: sdk.Float64(6306.68),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quibusdam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("illum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("tempora"),
                                                    Port: sdk.String("similique"),
                                                    Project: sdk.String("dolor"),
                                                    Region: sdk.String("enim"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolorum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("beatae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nesciunt"),
                                                    Port: sdk.String("corrupti"),
                                                    Project: sdk.String("officiis"),
                                                    Region: sdk.String("inventore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("sequi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("fuga"),
                                                    Port: sdk.String("quisquam"),
                                                    Project: sdk.String("qui"),
                                                    Region: sdk.String("suscipit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ipsum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("expedita"),
                                                    Port: sdk.String("itaque"),
                                                    Project: sdk.String("maiores"),
                                                    Region: sdk.String("provident"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dignissimos"),
                                        Rrdatas: []string{
                                            "id",
                                        },
                                        SignatureRrdatas: []string{
                                            "repellat",
                                            "modi",
                                            "ex",
                                        },
                                        Weight: sdk.Float64(7490.37),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("mollitia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("commodi"),
                                                    Port: sdk.String("delectus"),
                                                    Project: sdk.String("officiis"),
                                                    Region: sdk.String("omnis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ea"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("soluta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("vitae"),
                                                    Port: sdk.String("beatae"),
                                                    Project: sdk.String("pariatur"),
                                                    Region: sdk.String("voluptatem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("blanditiis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("tenetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("deleniti"),
                                                    Port: sdk.String("necessitatibus"),
                                                    Project: sdk.String("cumque"),
                                                    Region: sdk.String("iste"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reiciendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("libero"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("occaecati"),
                                                    Port: sdk.String("officia"),
                                                    Project: sdk.String("nemo"),
                                                    Region: sdk.String("quis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("doloremque"),
                                        Rrdatas: []string{
                                            "eum",
                                            "quis",
                                            "commodi",
                                        },
                                        SignatureRrdatas: []string{
                                            "possimus",
                                            "dolor",
                                            "ratione",
                                            "velit",
                                        },
                                        Weight: sdk.Float64(7426.45),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusantium"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("officiis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("est"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("autem"),
                                                    Region: sdk.String("quis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("modi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("qui"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cupiditate"),
                                                    Port: sdk.String("rem"),
                                                    Project: sdk.String("ea"),
                                                    Region: sdk.String("debitis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("soluta"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eveniet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolore"),
                                                    Port: sdk.String("quisquam"),
                                                    Project: sdk.String("mollitia"),
                                                    Region: sdk.String("ipsam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("autem"),
                                        Rrdatas: []string{
                                            "doloremque",
                                            "atque",
                                        },
                                        SignatureRrdatas: []string{
                                            "beatae",
                                            "nemo",
                                            "eaque",
                                        },
                                        Weight: sdk.Float64(137.26),
                                    },
                                },
                                Kind: sdk.String("natus"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("et"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("similique"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("rem"),
                                                    Port: sdk.String("delectus"),
                                                    Project: sdk.String("blanditiis"),
                                                    Region: sdk.String("laudantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("earum"),
                                        Rrdatas: []string{
                                            "accusamus",
                                            "reprehenderit",
                                            "expedita",
                                            "hic",
                                        },
                                        SignatureRrdatas: []string{
                                            "perferendis",
                                            "non",
                                            "saepe",
                                        },
                                        Weight: sdk.Float64(81.62),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dicta"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ad"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sequi"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("excepturi"),
                                                    Region: sdk.String("alias"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("deleniti"),
                                        Rrdatas: []string{
                                            "laboriosam",
                                        },
                                        SignatureRrdatas: []string{
                                            "quod",
                                        },
                                        Weight: sdk.Float64(3795.52),
                                    },
                                },
                                Kind: sdk.String("tempore"),
                            },
                        },
                        Rrdatas: []string{
                            "harum",
                            "nisi",
                            "blanditiis",
                            "culpa",
                        },
                        SignatureRrdatas: []string{
                            "doloribus",
                        },
                        TTL: sdk.Int(428028),
                        Type: sdk.String("enim"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("ducimus"),
                        Name: sdk.String("Mrs. Arnold Strosin"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("praesentium"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("hic"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("at"),
                                                    Port: sdk.String("repudiandae"),
                                                    Project: sdk.String("ipsum"),
                                                    Region: sdk.String("voluptatem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tenetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ex"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fugiat"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("beatae"),
                                                    Region: sdk.String("aut"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("commodi"),
                                        Location: sdk.String("architecto"),
                                        Rrdatas: []string{
                                            "temporibus",
                                            "unde",
                                            "voluptate",
                                        },
                                        SignatureRrdatas: []string{
                                            "sunt",
                                            "ad",
                                            "quia",
                                            "aspernatur",
                                        },
                                    },
                                },
                                Kind: sdk.String("iste"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("et"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quibusdam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatum"),
                                                    Port: sdk.String("voluptatem"),
                                                    Project: sdk.String("amet"),
                                                    Region: sdk.String("vitae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("explicabo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("provident"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nobis"),
                                                    Port: sdk.String("optio"),
                                                    Project: sdk.String("laboriosam"),
                                                    Region: sdk.String("quasi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("porro"),
                                        Location: sdk.String("sed"),
                                        Rrdatas: []string{
                                            "in",
                                            "eaque",
                                            "odit",
                                        },
                                        SignatureRrdatas: []string{
                                            "soluta",
                                            "sint",
                                            "odio",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusamus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("accusantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("fugiat"),
                                                    Port: sdk.String("id"),
                                                    Project: sdk.String("sed"),
                                                    Region: sdk.String("fugiat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("recusandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("minima"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("praesentium"),
                                                    Port: sdk.String("officiis"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("quasi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("libero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolorem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptates"),
                                                    Port: sdk.String("similique"),
                                                    Project: sdk.String("id"),
                                                    Region: sdk.String("quidem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ut"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eius"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolores"),
                                                    Port: sdk.String("dolorum"),
                                                    Project: sdk.String("quod"),
                                                    Region: sdk.String("sunt"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iure"),
                                        Location: sdk.String("voluptatem"),
                                        Rrdatas: []string{
                                            "soluta",
                                            "a",
                                        },
                                        SignatureRrdatas: []string{
                                            "maxime",
                                        },
                                    },
                                },
                                Kind: sdk.String("placeat"),
                            },
                            Kind: sdk.String("cupiditate"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ex"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("deserunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("itaque"),
                                                        Port: sdk.String("ad"),
                                                        Project: sdk.String("voluptates"),
                                                        Region: sdk.String("harum"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quaerat"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("sit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("labore"),
                                                        Port: sdk.String("molestias"),
                                                        Project: sdk.String("qui"),
                                                        Region: sdk.String("soluta"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ullam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("ut"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quibusdam"),
                                                        Port: sdk.String("doloremque"),
                                                        Project: sdk.String("rem"),
                                                        Region: sdk.String("dolorum"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("explicabo"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("laboriosam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("est"),
                                                        Port: sdk.String("est"),
                                                        Project: sdk.String("accusamus"),
                                                        Region: sdk.String("debitis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("esse"),
                                            Location: sdk.String("omnis"),
                                            Rrdatas: []string{
                                                "ipsum",
                                                "minus",
                                                "molestiae",
                                                "illo",
                                            },
                                            SignatureRrdatas: []string{
                                                "placeat",
                                                "sequi",
                                                "et",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("voluptates"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("distinctio"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("consectetur"),
                                                        Port: sdk.String("nulla"),
                                                        Project: sdk.String("magni"),
                                                        Region: sdk.String("dolor"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("esse"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("mollitia"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("neque"),
                                                        Port: sdk.String("facilis"),
                                                        Project: sdk.String("sapiente"),
                                                        Region: sdk.String("maxime"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("sed"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("nulla"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("eius"),
                                                        Port: sdk.String("ad"),
                                                        Project: sdk.String("aperiam"),
                                                        Region: sdk.String("animi"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("unde"),
                                            Location: sdk.String("rem"),
                                            Rrdatas: []string{
                                                "error",
                                                "aliquam",
                                            },
                                            SignatureRrdatas: []string{
                                                "ad",
                                                "cum",
                                                "dolorum",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nihil"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("ducimus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("eaque"),
                                                        Port: sdk.String("ex"),
                                                        Project: sdk.String("rerum"),
                                                        Region: sdk.String("magni"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("laudantium"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("minus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("atque"),
                                                        Port: sdk.String("autem"),
                                                        Project: sdk.String("eius"),
                                                        Region: sdk.String("unde"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("sunt"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("laudantium"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("a"),
                                                        Port: sdk.String("aliquid"),
                                                        Project: sdk.String("qui"),
                                                        Region: sdk.String("eligendi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("perspiciatis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("sint"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("incidunt"),
                                                        Port: sdk.String("quisquam"),
                                                        Project: sdk.String("quod"),
                                                        Region: sdk.String("laboriosam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("quidem"),
                                            Location: sdk.String("reprehenderit"),
                                            Rrdatas: []string{
                                                "totam",
                                                "error",
                                                "alias",
                                            },
                                            SignatureRrdatas: []string{
                                                "sequi",
                                                "sapiente",
                                                "illum",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("optio"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("inventore"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("culpa"),
                                                        Port: sdk.String("dicta"),
                                                        Project: sdk.String("perferendis"),
                                                        Region: sdk.String("asperiores"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("deleniti"),
                                            Location: sdk.String("optio"),
                                            Rrdatas: []string{
                                                "non",
                                            },
                                            SignatureRrdatas: []string{
                                                "voluptatibus",
                                                "iste",
                                                "amet",
                                                "quae",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("pariatur"),
                                },
                                Kind: sdk.String("officia"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("debitis"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("tempore"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("vitae"),
                                            Port: sdk.String("repellat"),
                                            Project: sdk.String("est"),
                                            Region: sdk.String("facere"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(6107.03),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("optio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sint"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consectetur"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("dicta"),
                                                    Region: sdk.String("nesciunt"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reprehenderit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("magni"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quibusdam"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("ad"),
                                                    Region: sdk.String("velit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("nam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("velit"),
                                                    Port: sdk.String("ratione"),
                                                    Project: sdk.String("fuga"),
                                                    Region: sdk.String("minima"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("aliquid"),
                                        Rrdatas: []string{
                                            "laboriosam",
                                            "sint",
                                            "architecto",
                                            "totam",
                                        },
                                        SignatureRrdatas: []string{
                                            "hic",
                                        },
                                        Weight: sdk.Float64(9463.17),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("cum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fuga"),
                                                    Port: sdk.String("ex"),
                                                    Project: sdk.String("autem"),
                                                    Region: sdk.String("nostrum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("atque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("eum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fuga"),
                                                    Port: sdk.String("non"),
                                                    Project: sdk.String("nam"),
                                                    Region: sdk.String("totam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ut"),
                                        Rrdatas: []string{
                                            "illum",
                                        },
                                        SignatureRrdatas: []string{
                                            "totam",
                                        },
                                        Weight: sdk.Float64(1291.41),
                                    },
                                },
                                Kind: sdk.String("quibusdam"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("porro"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ad"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ea"),
                                                    Port: sdk.String("corrupti"),
                                                    Project: sdk.String("minus"),
                                                    Region: sdk.String("autem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aut"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("veniam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquam"),
                                                    Port: sdk.String("suscipit"),
                                                    Project: sdk.String("atque"),
                                                    Region: sdk.String("minus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("debitis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("doloremque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quibusdam"),
                                                    Port: sdk.String("deleniti"),
                                                    Project: sdk.String("quas"),
                                                    Region: sdk.String("magnam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("cupiditate"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sapiente"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("explicabo"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("incidunt"),
                                                    Region: sdk.String("eligendi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("amet"),
                                        Rrdatas: []string{
                                            "nihil",
                                        },
                                        SignatureRrdatas: []string{
                                            "occaecati",
                                            "iure",
                                            "libero",
                                            "cum",
                                        },
                                        Weight: sdk.Float64(530.39),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vel"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("recusandae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quam"),
                                                    Port: sdk.String("fugit"),
                                                    Project: sdk.String("facere"),
                                                    Region: sdk.String("libero"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("labore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("tempore"),
                                                    Port: sdk.String("deserunt"),
                                                    Project: sdk.String("error"),
                                                    Region: sdk.String("doloribus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reprehenderit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("est"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("accusantium"),
                                                    Project: sdk.String("necessitatibus"),
                                                    Region: sdk.String("facere"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reprehenderit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("officia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("suscipit"),
                                                    Port: sdk.String("explicabo"),
                                                    Project: sdk.String("recusandae"),
                                                    Region: sdk.String("unde"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iusto"),
                                        Rrdatas: []string{
                                            "ea",
                                        },
                                        SignatureRrdatas: []string{
                                            "earum",
                                        },
                                        Weight: sdk.Float64(7393.02),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("corrupti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("odit"),
                                                    Port: sdk.String("voluptate"),
                                                    Project: sdk.String("nobis"),
                                                    Region: sdk.String("exercitationem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("beatae"),
                                        Rrdatas: []string{
                                            "cupiditate",
                                            "ex",
                                            "tempore",
                                        },
                                        SignatureRrdatas: []string{
                                            "expedita",
                                            "modi",
                                        },
                                        Weight: sdk.Float64(7117.32),
                                    },
                                },
                                Kind: sdk.String("quaerat"),
                            },
                        },
                        Rrdatas: []string{
                            "recusandae",
                        },
                        SignatureRrdatas: []string{
                            "sapiente",
                            "iusto",
                            "quasi",
                            "odit",
                        },
                        TTL: sdk.Int(735414),
                        Type: sdk.String("ducimus"),
                    },
                },
            },
            RuleName: sdk.String("animi"),
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        ClientOperationID: sdk.String("voluptatem"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        Project: "soluta",
        QuotaUser: sdk.String("inventore"),
        ResponsePolicy: "ducimus",
        ResponsePolicyRulePathParameter: "vitae",
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("autem"),
    }, operations.DNSResponsePolicyRulesPatchSecurity{
        Option1: &operations.DNSResponsePolicyRulesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicyRulesPatchResponse != nil {
        // handle response
    }
}
```

## DNSResponsePolicyRulesUpdate

Updates an existing Response Policy Rule.

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
    res, err := s.ResponsePolicyRules.DNSResponsePolicyRulesUpdate(ctx, operations.DNSResponsePolicyRulesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResponsePolicyRule1: &shared.ResponsePolicyRule{
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBypassResponsePolicy.ToPointer(),
            DNSName: sdk.String("illum"),
            Kind: sdk.String("necessitatibus"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("facilis"),
                        Name: sdk.String("Emmett Legros"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fugiat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("voluptatem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("minus"),
                                                    Port: sdk.String("pariatur"),
                                                    Project: sdk.String("dolor"),
                                                    Region: sdk.String("amet"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("tenetur"),
                                        Location: sdk.String("quasi"),
                                        Rrdatas: []string{
                                            "rerum",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptates",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptates"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptatum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("officia"),
                                                    Port: sdk.String("officia"),
                                                    Project: sdk.String("vitae"),
                                                    Region: sdk.String("ipsa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("incidunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("deleniti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("accusamus"),
                                                    Port: sdk.String("optio"),
                                                    Project: sdk.String("odio"),
                                                    Region: sdk.String("ullam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("provident"),
                                        Location: sdk.String("officiis"),
                                        Rrdatas: []string{
                                            "eos",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolor",
                                            "dignissimos",
                                            "doloremque",
                                            "consequuntur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laudantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("odit"),
                                                    Port: sdk.String("fugiat"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("consequatur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptates"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("at"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("ipsa"),
                                                    Project: sdk.String("incidunt"),
                                                    Region: sdk.String("maiores"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("culpa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eius"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("alias"),
                                                    Port: sdk.String("molestiae"),
                                                    Project: sdk.String("rerum"),
                                                    Region: sdk.String("voluptatibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sequi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("minima"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ut"),
                                                    Port: sdk.String("tempora"),
                                                    Project: sdk.String("sed"),
                                                    Region: sdk.String("quas"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("aspernatur"),
                                        Location: sdk.String("laudantium"),
                                        Rrdatas: []string{
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "nulla",
                                            "libero",
                                            "sed",
                                            "hic",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sint"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("veniam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("consequuntur"),
                                                    Port: sdk.String("laboriosam"),
                                                    Project: sdk.String("iusto"),
                                                    Region: sdk.String("quisquam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dignissimos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatum"),
                                                    Port: sdk.String("pariatur"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("quo"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("facere"),
                                        Location: sdk.String("labore"),
                                        Rrdatas: []string{
                                            "quis",
                                        },
                                        SignatureRrdatas: []string{
                                            "temporibus",
                                            "doloremque",
                                            "amet",
                                        },
                                    },
                                },
                                Kind: sdk.String("ipsam"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quas"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("placeat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aut"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("repellat"),
                                                    Region: sdk.String("eveniet"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ullam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("laborum"),
                                                    Port: sdk.String("fugit"),
                                                    Project: sdk.String("perferendis"),
                                                    Region: sdk.String("incidunt"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ducimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("aut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("numquam"),
                                                    Port: sdk.String("omnis"),
                                                    Project: sdk.String("repudiandae"),
                                                    Region: sdk.String("inventore"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quaerat"),
                                        Location: sdk.String("nesciunt"),
                                        Rrdatas: []string{
                                            "natus",
                                            "laboriosam",
                                            "quasi",
                                            "excepturi",
                                        },
                                        SignatureRrdatas: []string{
                                            "cum",
                                            "in",
                                            "repellendus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aperiam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("corporis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quae"),
                                                    Port: sdk.String("quae"),
                                                    Project: sdk.String("voluptatibus"),
                                                    Region: sdk.String("est"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("modi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("autem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("commodi"),
                                                    Port: sdk.String("sed"),
                                                    Project: sdk.String("exercitationem"),
                                                    Region: sdk.String("natus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("explicabo"),
                                        Location: sdk.String("velit"),
                                        Rrdatas: []string{
                                            "hic",
                                        },
                                        SignatureRrdatas: []string{
                                            "minima",
                                            "minus",
                                            "provident",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("explicabo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("iusto"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("omnis"),
                                                    Port: sdk.String("quam"),
                                                    Project: sdk.String("impedit"),
                                                    Region: sdk.String("iusto"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quas"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("facilis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nulla"),
                                                    Port: sdk.String("tempore"),
                                                    Project: sdk.String("magnam"),
                                                    Region: sdk.String("maiores"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptatem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quos"),
                                                    Port: sdk.String("adipisci"),
                                                    Project: sdk.String("reiciendis"),
                                                    Region: sdk.String("accusamus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("asperiores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptate"),
                                                    Port: sdk.String("aliquid"),
                                                    Project: sdk.String("nobis"),
                                                    Region: sdk.String("reprehenderit"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("consequuntur"),
                                        Location: sdk.String("accusantium"),
                                        Rrdatas: []string{
                                            "pariatur",
                                            "deserunt",
                                        },
                                        SignatureRrdatas: []string{
                                            "in",
                                            "ad",
                                            "voluptatem",
                                        },
                                    },
                                },
                                Kind: sdk.String("sit"),
                            },
                            Kind: sdk.String("enim"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ad"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("dolore"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("officiis"),
                                                        Port: sdk.String("fugiat"),
                                                        Project: sdk.String("minus"),
                                                        Region: sdk.String("tempora"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("sequi"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("saepe"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("corrupti"),
                                                        Port: sdk.String("maxime"),
                                                        Project: sdk.String("aliquam"),
                                                        Region: sdk.String("adipisci"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("explicabo"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("hic"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quae"),
                                                        Port: sdk.String("eos"),
                                                        Project: sdk.String("eius"),
                                                        Region: sdk.String("voluptatem"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("temporibus"),
                                            Location: sdk.String("aliquam"),
                                            Rrdatas: []string{
                                                "totam",
                                                "iusto",
                                            },
                                            SignatureRrdatas: []string{
                                                "porro",
                                                "voluptas",
                                                "provident",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("neque"),
                                },
                                Kind: sdk.String("expedita"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("quaerat"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("nesciunt"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("unde"),
                                            Port: sdk.String("fugiat"),
                                            Project: sdk.String("magni"),
                                            Region: sdk.String("modi"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("atque"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("quibusdam"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("unde"),
                                            Port: sdk.String("ad"),
                                            Project: sdk.String("officia"),
                                            Region: sdk.String("fuga"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("incidunt"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("asperiores"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("dolore"),
                                            Port: sdk.String("accusantium"),
                                            Project: sdk.String("corporis"),
                                            Region: sdk.String("laboriosam"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(3858.46),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vel"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("animi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("doloremque"),
                                                    Port: sdk.String("voluptas"),
                                                    Project: sdk.String("pariatur"),
                                                    Region: sdk.String("fugit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("inventore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("labore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("dolore"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("aut"),
                                                    Region: sdk.String("atque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quasi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("fugiat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("ipsum"),
                                                    Project: sdk.String("cum"),
                                                    Region: sdk.String("et"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("harum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("illo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("magnam"),
                                                    Port: sdk.String("incidunt"),
                                                    Project: sdk.String("consequatur"),
                                                    Region: sdk.String("nisi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quae"),
                                        Rrdatas: []string{
                                            "accusantium",
                                            "sit",
                                            "nesciunt",
                                            "veritatis",
                                        },
                                        SignatureRrdatas: []string{
                                            "possimus",
                                        },
                                        Weight: sdk.Float64(168.83),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("velit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quod"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ipsa"),
                                                    Port: sdk.String("beatae"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("veniam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("animi"),
                                        Rrdatas: []string{
                                            "pariatur",
                                            "eos",
                                            "id",
                                            "commodi",
                                        },
                                        SignatureRrdatas: []string{
                                            "aliquam",
                                            "magnam",
                                            "praesentium",
                                            "numquam",
                                        },
                                        Weight: sdk.Float64(4343.88),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("itaque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("assumenda"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("occaecati"),
                                                    Port: sdk.String("eos"),
                                                    Project: sdk.String("veniam"),
                                                    Region: sdk.String("amet"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nobis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("provident"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consequuntur"),
                                                    Port: sdk.String("delectus"),
                                                    Project: sdk.String("quaerat"),
                                                    Region: sdk.String("quos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("excepturi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("rerum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ad"),
                                                    Port: sdk.String("et"),
                                                    Project: sdk.String("eveniet"),
                                                    Region: sdk.String("tempora"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ea"),
                                        Rrdatas: []string{
                                            "sed",
                                            "fugiat",
                                        },
                                        SignatureRrdatas: []string{
                                            "cumque",
                                        },
                                        Weight: sdk.Float64(1987.88),
                                    },
                                },
                                Kind: sdk.String("aliquam"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("suscipit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("atque"),
                                                    Port: sdk.String("animi"),
                                                    Project: sdk.String("earum"),
                                                    Region: sdk.String("quaerat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("excepturi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eos"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptate"),
                                                    Port: sdk.String("odio"),
                                                    Project: sdk.String("magni"),
                                                    Region: sdk.String("enim"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eveniet"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("magni"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("iste"),
                                                    Port: sdk.String("aut"),
                                                    Project: sdk.String("occaecati"),
                                                    Region: sdk.String("vero"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("error"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ipsa"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("labore"),
                                                    Port: sdk.String("id"),
                                                    Project: sdk.String("ullam"),
                                                    Region: sdk.String("quibusdam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("recusandae"),
                                        Rrdatas: []string{
                                            "omnis",
                                            "mollitia",
                                        },
                                        SignatureRrdatas: []string{
                                            "nihil",
                                            "ducimus",
                                            "eaque",
                                            "aliquid",
                                        },
                                        Weight: sdk.Float64(4083.63),
                                    },
                                },
                                Kind: sdk.String("odio"),
                            },
                        },
                        Rrdatas: []string{
                            "quisquam",
                        },
                        SignatureRrdatas: []string{
                            "et",
                            "optio",
                            "a",
                            "quis",
                        },
                        TTL: sdk.Int(603557),
                        Type: sdk.String("consectetur"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("qui"),
                        Name: sdk.String("Mrs. Laura Halvorson DVM"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("harum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("non"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("laboriosam"),
                                                    Port: sdk.String("deleniti"),
                                                    Project: sdk.String("molestias"),
                                                    Region: sdk.String("dignissimos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facere"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("omnis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("qui"),
                                                    Port: sdk.String("nulla"),
                                                    Project: sdk.String("velit"),
                                                    Region: sdk.String("amet"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ipsam"),
                                        Location: sdk.String("suscipit"),
                                        Rrdatas: []string{
                                            "ipsa",
                                            "accusamus",
                                        },
                                        SignatureRrdatas: []string{
                                            "velit",
                                            "earum",
                                            "recusandae",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("impedit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ad"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("delectus"),
                                                    Port: sdk.String("dolorem"),
                                                    Project: sdk.String("ipsam"),
                                                    Region: sdk.String("voluptatum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolorum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("earum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quisquam"),
                                                    Port: sdk.String("officia"),
                                                    Project: sdk.String("officiis"),
                                                    Region: sdk.String("ratione"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("consequuntur"),
                                        Location: sdk.String("neque"),
                                        Rrdatas: []string{
                                            "adipisci",
                                            "inventore",
                                            "tempore",
                                        },
                                        SignatureRrdatas: []string{
                                            "ducimus",
                                            "rerum",
                                            "laborum",
                                            "architecto",
                                        },
                                    },
                                },
                                Kind: sdk.String("quod"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("inventore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maxime"),
                                                    Port: sdk.String("deleniti"),
                                                    Project: sdk.String("accusantium"),
                                                    Region: sdk.String("sed"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sint"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("alias"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("in"),
                                                    Region: sdk.String("possimus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("neque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consectetur"),
                                                    Port: sdk.String("repellat"),
                                                    Project: sdk.String("quae"),
                                                    Region: sdk.String("animi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("est"),
                                        Location: sdk.String("autem"),
                                        Rrdatas: []string{
                                            "officiis",
                                        },
                                        SignatureRrdatas: []string{
                                            "occaecati",
                                            "optio",
                                            "asperiores",
                                            "et",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quas"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("commodi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("libero"),
                                                    Project: sdk.String("id"),
                                                    Region: sdk.String("quaerat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("inventore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("maiores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("numquam"),
                                                    Port: sdk.String("nemo"),
                                                    Project: sdk.String("numquam"),
                                                    Region: sdk.String("culpa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("voluptatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("maxime"),
                                                    Port: sdk.String("repellat"),
                                                    Project: sdk.String("veritatis"),
                                                    Region: sdk.String("inventore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("autem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("fugiat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("exercitationem"),
                                                    Port: sdk.String("ut"),
                                                    Project: sdk.String("dolore"),
                                                    Region: sdk.String("numquam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("officia"),
                                        Location: sdk.String("reprehenderit"),
                                        Rrdatas: []string{
                                            "nisi",
                                            "consequuntur",
                                        },
                                        SignatureRrdatas: []string{
                                            "iusto",
                                            "dolorem",
                                            "placeat",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quibusdam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("natus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellat"),
                                                    Port: sdk.String("est"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("labore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("adipisci"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("impedit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("qui"),
                                                    Port: sdk.String("consectetur"),
                                                    Project: sdk.String("ea"),
                                                    Region: sdk.String("aspernatur"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("consequatur"),
                                        Location: sdk.String("delectus"),
                                        Rrdatas: []string{
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatum",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nesciunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("at"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sequi"),
                                                    Port: sdk.String("temporibus"),
                                                    Project: sdk.String("cum"),
                                                    Region: sdk.String("sit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magni"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("earum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("id"),
                                                    Port: sdk.String("exercitationem"),
                                                    Project: sdk.String("commodi"),
                                                    Region: sdk.String("nostrum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("delectus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("rem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("suscipit"),
                                                    Port: sdk.String("veniam"),
                                                    Project: sdk.String("consequuntur"),
                                                    Region: sdk.String("repudiandae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("perspiciatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("dolor"),
                                                    Port: sdk.String("praesentium"),
                                                    Project: sdk.String("non"),
                                                    Region: sdk.String("deleniti"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolor"),
                                        Location: sdk.String("corrupti"),
                                        Rrdatas: []string{
                                            "molestias",
                                            "aperiam",
                                        },
                                        SignatureRrdatas: []string{
                                            "labore",
                                        },
                                    },
                                },
                                Kind: sdk.String("neque"),
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
                                                        IPAddress: sdk.String("ratione"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("est"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("neque"),
                                                        Port: sdk.String("perferendis"),
                                                        Project: sdk.String("vero"),
                                                        Region: sdk.String("excepturi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dicta"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("doloribus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("alias"),
                                                        Port: sdk.String("asperiores"),
                                                        Project: sdk.String("quibusdam"),
                                                        Region: sdk.String("animi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("alias"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("porro"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("libero"),
                                                        Port: sdk.String("quasi"),
                                                        Project: sdk.String("quidem"),
                                                        Region: sdk.String("soluta"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("exercitationem"),
                                            Location: sdk.String("exercitationem"),
                                            Rrdatas: []string{
                                                "magni",
                                                "unde",
                                                "consequuntur",
                                            },
                                            SignatureRrdatas: []string{
                                                "aut",
                                                "expedita",
                                                "quo",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("non"),
                                },
                                Kind: sdk.String("libero"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("odio"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("aliquam"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("nisi"),
                                            Port: sdk.String("labore"),
                                            Project: sdk.String("accusamus"),
                                            Region: sdk.String("cum"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("sunt"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("voluptatem"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("ipsum"),
                                            Port: sdk.String("laudantium"),
                                            Project: sdk.String("totam"),
                                            Region: sdk.String("facilis"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consequatur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("architecto"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("rerum"),
                                            Port: sdk.String("architecto"),
                                            Project: sdk.String("in"),
                                            Region: sdk.String("fuga"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(9486.39),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reprehenderit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("soluta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("delectus"),
                                                    Port: sdk.String("repudiandae"),
                                                    Project: sdk.String("quidem"),
                                                    Region: sdk.String("occaecati"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("voluptate"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nihil"),
                                                    Port: sdk.String("recusandae"),
                                                    Project: sdk.String("illum"),
                                                    Region: sdk.String("laborum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reiciendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("provident"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("illo"),
                                                    Port: sdk.String("autem"),
                                                    Project: sdk.String("tenetur"),
                                                    Region: sdk.String("rerum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("asperiores"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nisi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("assumenda"),
                                                    Port: sdk.String("ab"),
                                                    Project: sdk.String("eum"),
                                                    Region: sdk.String("quia"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quidem"),
                                        Rrdatas: []string{
                                            "doloremque",
                                        },
                                        SignatureRrdatas: []string{
                                            "debitis",
                                        },
                                        Weight: sdk.Float64(2354.27),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sed"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quidem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ipsum"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("consectetur"),
                                                    Region: sdk.String("tempora"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("sequi"),
                                        Rrdatas: []string{
                                            "aliquid",
                                        },
                                        SignatureRrdatas: []string{
                                            "sapiente",
                                            "corporis",
                                            "nemo",
                                            "soluta",
                                        },
                                        Weight: sdk.Float64(2976.24),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ab"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ullam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consectetur"),
                                                    Port: sdk.String("porro"),
                                                    Project: sdk.String("optio"),
                                                    Region: sdk.String("earum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("vitae"),
                                        Rrdatas: []string{
                                            "fugit",
                                            "consequatur",
                                            "incidunt",
                                            "placeat",
                                        },
                                        SignatureRrdatas: []string{
                                            "culpa",
                                            "illum",
                                        },
                                        Weight: sdk.Float64(7985.36),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sint"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("voluptatem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maxime"),
                                                    Port: sdk.String("ad"),
                                                    Project: sdk.String("illo"),
                                                    Region: sdk.String("provident"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("exercitationem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("labore"),
                                                    Port: sdk.String("praesentium"),
                                                    Project: sdk.String("optio"),
                                                    Region: sdk.String("officiis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("a"),
                                                    Port: sdk.String("ab"),
                                                    Project: sdk.String("voluptates"),
                                                    Region: sdk.String("eos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facere"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("libero"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("perferendis"),
                                                    Port: sdk.String("beatae"),
                                                    Project: sdk.String("saepe"),
                                                    Region: sdk.String("voluptatem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("sint"),
                                        Rrdatas: []string{
                                            "explicabo",
                                            "distinctio",
                                        },
                                        SignatureRrdatas: []string{
                                            "quidem",
                                            "tempora",
                                            "minus",
                                        },
                                        Weight: sdk.Float64(6917.42),
                                    },
                                },
                                Kind: sdk.String("quidem"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ab"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("pariatur"),
                                                    Port: sdk.String("excepturi"),
                                                    Project: sdk.String("enim"),
                                                    Region: sdk.String("culpa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("nisi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("quasi"),
                                                    Project: sdk.String("nesciunt"),
                                                    Region: sdk.String("corrupti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("in"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("odio"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eveniet"),
                                                    Port: sdk.String("vitae"),
                                                    Project: sdk.String("quos"),
                                                    Region: sdk.String("eveniet"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("officia"),
                                        Rrdatas: []string{
                                            "debitis",
                                            "non",
                                            "veniam",
                                        },
                                        SignatureRrdatas: []string{
                                            "illo",
                                        },
                                        Weight: sdk.Float64(5361.81),
                                    },
                                },
                                Kind: sdk.String("quisquam"),
                            },
                        },
                        Rrdatas: []string{
                            "optio",
                        },
                        SignatureRrdatas: []string{
                            "minima",
                            "ducimus",
                            "tenetur",
                            "libero",
                        },
                        TTL: sdk.Int(833686),
                        Type: sdk.String("aliquid"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("alias"),
                        Name: sdk.String("Jack Paucek"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("est"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("pariatur"),
                                                    Port: sdk.String("quaerat"),
                                                    Project: sdk.String("itaque"),
                                                    Region: sdk.String("itaque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("animi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ullam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nemo"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("optio"),
                                                    Region: sdk.String("fugit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("at"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("delectus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("optio"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("quas"),
                                                    Region: sdk.String("quidem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptates"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("hic"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nihil"),
                                                    Port: sdk.String("quas"),
                                                    Project: sdk.String("tenetur"),
                                                    Region: sdk.String("fugiat"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("unde"),
                                        Location: sdk.String("autem"),
                                        Rrdatas: []string{
                                            "molestiae",
                                            "accusamus",
                                        },
                                        SignatureRrdatas: []string{
                                            "autem",
                                            "placeat",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dicta"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellat"),
                                                    Port: sdk.String("id"),
                                                    Project: sdk.String("fuga"),
                                                    Region: sdk.String("ad"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("corrupti"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("minus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellat"),
                                                    Port: sdk.String("sed"),
                                                    Project: sdk.String("ratione"),
                                                    Region: sdk.String("quaerat"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("minus"),
                                        Location: sdk.String("natus"),
                                        Rrdatas: []string{
                                            "veniam",
                                            "tempore",
                                        },
                                        SignatureRrdatas: []string{
                                            "facilis",
                                            "assumenda",
                                            "repellat",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("alias"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nobis"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("excepturi"),
                                                    Region: sdk.String("expedita"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("harum"),
                                        Location: sdk.String("quisquam"),
                                        Rrdatas: []string{
                                            "magni",
                                            "dignissimos",
                                            "aspernatur",
                                            "ullam",
                                        },
                                        SignatureRrdatas: []string{
                                            "impedit",
                                            "magni",
                                            "suscipit",
                                            "ipsam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quisquam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ipsa"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("totam"),
                                                    Port: sdk.String("consequatur"),
                                                    Project: sdk.String("corrupti"),
                                                    Region: sdk.String("numquam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("alias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nisi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("eveniet"),
                                                    Port: sdk.String("tenetur"),
                                                    Project: sdk.String("vel"),
                                                    Region: sdk.String("corrupti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptates"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("enim"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("blanditiis"),
                                                    Port: sdk.String("animi"),
                                                    Project: sdk.String("quibusdam"),
                                                    Region: sdk.String("possimus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("maiores"),
                                        Location: sdk.String("est"),
                                        Rrdatas: []string{
                                            "voluptate",
                                            "nostrum",
                                            "incidunt",
                                            "enim",
                                        },
                                        SignatureRrdatas: []string{
                                            "ipsa",
                                        },
                                    },
                                },
                                Kind: sdk.String("quaerat"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("optio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("commodi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quia"),
                                                    Port: sdk.String("facilis"),
                                                    Project: sdk.String("magnam"),
                                                    Region: sdk.String("dolor"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("provident"),
                                        Location: sdk.String("inventore"),
                                        Rrdatas: []string{
                                            "temporibus",
                                            "sapiente",
                                            "ipsa",
                                            "vitae",
                                        },
                                        SignatureRrdatas: []string{
                                            "adipisci",
                                            "itaque",
                                            "unde",
                                            "beatae",
                                        },
                                    },
                                },
                                Kind: sdk.String("eveniet"),
                            },
                            Kind: sdk.String("quas"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("libero"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("ea"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("at"),
                                                        Port: sdk.String("incidunt"),
                                                        Project: sdk.String("autem"),
                                                        Region: sdk.String("alias"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("est"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("dignissimos"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quo"),
                                                        Port: sdk.String("saepe"),
                                                        Project: sdk.String("tempore"),
                                                        Region: sdk.String("sunt"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("nisi"),
                                            Location: sdk.String("nulla"),
                                            Rrdatas: []string{
                                                "accusantium",
                                            },
                                            SignatureRrdatas: []string{
                                                "et",
                                                "repudiandae",
                                                "delectus",
                                                "qui",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("neque"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("quisquam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quisquam"),
                                                        Port: sdk.String("aperiam"),
                                                        Project: sdk.String("delectus"),
                                                        Region: sdk.String("aut"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("repellat"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("ducimus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("sapiente"),
                                                        Port: sdk.String("error"),
                                                        Project: sdk.String("facere"),
                                                        Region: sdk.String("veniam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("eligendi"),
                                            Location: sdk.String("aspernatur"),
                                            Rrdatas: []string{
                                                "doloribus",
                                                "illum",
                                            },
                                            SignatureRrdatas: []string{
                                                "repudiandae",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("tempore"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("deserunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("officia"),
                                                        Port: sdk.String("magnam"),
                                                        Project: sdk.String("quia"),
                                                        Region: sdk.String("ullam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("dolor"),
                                            Location: sdk.String("maxime"),
                                            Rrdatas: []string{
                                                "ipsa",
                                            },
                                            SignatureRrdatas: []string{
                                                "ullam",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("architecto"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("maiores"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("fugit"),
                                                        Port: sdk.String("maxime"),
                                                        Project: sdk.String("iusto"),
                                                        Region: sdk.String("recusandae"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("iusto"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("porro"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("tempora"),
                                                        Port: sdk.String("voluptatum"),
                                                        Project: sdk.String("cum"),
                                                        Region: sdk.String("itaque"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("sit"),
                                            Location: sdk.String("excepturi"),
                                            Rrdatas: []string{
                                                "numquam",
                                                "architecto",
                                                "fuga",
                                                "iusto",
                                            },
                                            SignatureRrdatas: []string{
                                                "dolores",
                                                "inventore",
                                                "ipsam",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("impedit"),
                                },
                                Kind: sdk.String("officia"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("odit"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("labore"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("dolorum"),
                                            Port: sdk.String("provident"),
                                            Project: sdk.String("quibusdam"),
                                            Region: sdk.String("ipsam"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(5928.98),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("perspiciatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("placeat"),
                                                    Port: sdk.String("sapiente"),
                                                    Project: sdk.String("assumenda"),
                                                    Region: sdk.String("alias"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eligendi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("iusto"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ullam"),
                                                    Port: sdk.String("dolorem"),
                                                    Project: sdk.String("vero"),
                                                    Region: sdk.String("esse"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("facere"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("accusamus"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("recusandae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("deleniti"),
                                        Rrdatas: []string{
                                            "excepturi",
                                            "consequatur",
                                            "distinctio",
                                        },
                                        SignatureRrdatas: []string{
                                            "porro",
                                            "consectetur",
                                            "molestias",
                                        },
                                        Weight: sdk.Float64(2671.84),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("qui"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("sint"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("in"),
                                                    Port: sdk.String("ipsa"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("maiores"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("itaque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("adipisci"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("veniam"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("deleniti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("qui"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("possimus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("deleniti"),
                                                    Port: sdk.String("perspiciatis"),
                                                    Project: sdk.String("deserunt"),
                                                    Region: sdk.String("dolor"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("iure"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("facere"),
                                                    Project: sdk.String("dolores"),
                                                    Region: sdk.String("in"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("repudiandae"),
                                        Rrdatas: []string{
                                            "esse",
                                            "accusantium",
                                            "nihil",
                                        },
                                        SignatureRrdatas: []string{
                                            "est",
                                            "iure",
                                            "aut",
                                        },
                                        Weight: sdk.Float64(8090.72),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("doloribus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("debitis"),
                                                    Port: sdk.String("commodi"),
                                                    Project: sdk.String("beatae"),
                                                    Region: sdk.String("voluptate"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptate"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quidem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("pariatur"),
                                                    Port: sdk.String("nobis"),
                                                    Project: sdk.String("dolor"),
                                                    Region: sdk.String("distinctio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dignissimos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cum"),
                                                    Port: sdk.String("facilis"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("occaecati"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ducimus"),
                                        Rrdatas: []string{
                                            "repudiandae",
                                        },
                                        SignatureRrdatas: []string{
                                            "odio",
                                            "nihil",
                                            "ipsa",
                                            "eveniet",
                                        },
                                        Weight: sdk.Float64(2046.97),
                                    },
                                },
                                Kind: sdk.String("autem"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iusto"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("voluptatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maxime"),
                                                    Port: sdk.String("eos"),
                                                    Project: sdk.String("doloremque"),
                                                    Region: sdk.String("vel"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("itaque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("vitae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sit"),
                                                    Port: sdk.String("quibusdam"),
                                                    Project: sdk.String("dolorem"),
                                                    Region: sdk.String("aut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("blanditiis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("inventore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("porro"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("perferendis"),
                                                    Region: sdk.String("est"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ipsum"),
                                        Rrdatas: []string{
                                            "perspiciatis",
                                            "corrupti",
                                            "ea",
                                            "sequi",
                                        },
                                        SignatureRrdatas: []string{
                                            "nobis",
                                            "est",
                                        },
                                        Weight: sdk.Float64(5213.33),
                                    },
                                },
                                Kind: sdk.String("corporis"),
                            },
                        },
                        Rrdatas: []string{
                            "adipisci",
                            "delectus",
                            "repudiandae",
                            "autem",
                        },
                        SignatureRrdatas: []string{
                            "ad",
                            "molestiae",
                        },
                        TTL: sdk.Int(282079),
                        Type: sdk.String("possimus"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("harum"),
                        Name: sdk.String("Dominick Mraz"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sint"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("a"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("velit"),
                                                    Port: sdk.String("est"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("magni"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("libero"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("porro"),
                                                    Port: sdk.String("sapiente"),
                                                    Project: sdk.String("consequuntur"),
                                                    Region: sdk.String("expedita"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("pariatur"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("quibusdam"),
                                                    Region: sdk.String("amet"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minima"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("fugiat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("officiis"),
                                                    Port: sdk.String("sunt"),
                                                    Project: sdk.String("modi"),
                                                    Region: sdk.String("tempore"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolores"),
                                        Location: sdk.String("beatae"),
                                        Rrdatas: []string{
                                            "fugiat",
                                            "occaecati",
                                            "voluptatum",
                                            "beatae",
                                        },
                                        SignatureRrdatas: []string{
                                            "aliquid",
                                            "assumenda",
                                            "veniam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("autem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("mollitia"),
                                                    Port: sdk.String("sunt"),
                                                    Project: sdk.String("quod"),
                                                    Region: sdk.String("labore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facilis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("natus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("nesciunt"),
                                                    Project: sdk.String("non"),
                                                    Region: sdk.String("vel"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("praesentium"),
                                        Location: sdk.String("beatae"),
                                        Rrdatas: []string{
                                            "eos",
                                            "dolor",
                                            "eligendi",
                                            "dolorem",
                                        },
                                        SignatureRrdatas: []string{
                                            "fuga",
                                            "voluptate",
                                            "porro",
                                        },
                                    },
                                },
                                Kind: sdk.String("consequatur"),
                            },
                            GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("in"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("distinctio"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolores"),
                                                    Port: sdk.String("impedit"),
                                                    Project: sdk.String("enim"),
                                                    Region: sdk.String("nam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("culpa"),
                                        Location: sdk.String("laudantium"),
                                        Rrdatas: []string{
                                            "corporis",
                                        },
                                        SignatureRrdatas: []string{
                                            "necessitatibus",
                                            "explicabo",
                                            "eos",
                                            "quo",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("enim"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("tempore"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ex"),
                                                    Port: sdk.String("hic"),
                                                    Project: sdk.String("nobis"),
                                                    Region: sdk.String("repellat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("necessitatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("perspiciatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consequuntur"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("a"),
                                                    Region: sdk.String("aliquid"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("adipisci"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ea"),
                                                    Port: sdk.String("veniam"),
                                                    Project: sdk.String("nam"),
                                                    Region: sdk.String("delectus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("earum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("saepe"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("odit"),
                                                    Port: sdk.String("assumenda"),
                                                    Project: sdk.String("at"),
                                                    Region: sdk.String("ea"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("provident"),
                                        Location: sdk.String("inventore"),
                                        Rrdatas: []string{
                                            "repellat",
                                            "quam",
                                        },
                                        SignatureRrdatas: []string{
                                            "minus",
                                            "nihil",
                                            "quibusdam",
                                            "assumenda",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestiae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("recusandae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquid"),
                                                    Port: sdk.String("sit"),
                                                    Project: sdk.String("vero"),
                                                    Region: sdk.String("laboriosam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aut"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nostrum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("natus"),
                                                    Port: sdk.String("numquam"),
                                                    Project: sdk.String("fugiat"),
                                                    Region: sdk.String("autem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("et"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("illo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quisquam"),
                                                    Port: sdk.String("facere"),
                                                    Project: sdk.String("excepturi"),
                                                    Region: sdk.String("aut"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("aspernatur"),
                                        Location: sdk.String("odit"),
                                        Rrdatas: []string{
                                            "recusandae",
                                            "neque",
                                        },
                                        SignatureRrdatas: []string{
                                            "nobis",
                                            "eaque",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("voluptate"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("et"),
                                                    Port: sdk.String("culpa"),
                                                    Project: sdk.String("exercitationem"),
                                                    Region: sdk.String("eius"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("similique"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("officiis"),
                                                    Port: sdk.String("provident"),
                                                    Project: sdk.String("dignissimos"),
                                                    Region: sdk.String("nostrum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("beatae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("vitae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("commodi"),
                                                    Port: sdk.String("fugiat"),
                                                    Project: sdk.String("qui"),
                                                    Region: sdk.String("ratione"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("repudiandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("dolorem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptas"),
                                                    Port: sdk.String("natus"),
                                                    Project: sdk.String("laudantium"),
                                                    Region: sdk.String("sunt"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("veniam"),
                                        Location: sdk.String("similique"),
                                        Rrdatas: []string{
                                            "officiis",
                                            "omnis",
                                            "cupiditate",
                                        },
                                        SignatureRrdatas: []string{
                                            "nobis",
                                            "repellendus",
                                            "necessitatibus",
                                            "unde",
                                        },
                                    },
                                },
                                Kind: sdk.String("voluptates"),
                            },
                            Kind: sdk.String("in"),
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
                                                        Kind: sdk.String("nulla"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("maiores"),
                                                        Port: sdk.String("eos"),
                                                        Project: sdk.String("pariatur"),
                                                        Region: sdk.String("totam"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("fuga"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("tempora"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quaerat"),
                                                        Port: sdk.String("alias"),
                                                        Project: sdk.String("quisquam"),
                                                        Region: sdk.String("fuga"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("commodi"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("illum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("nihil"),
                                                        Port: sdk.String("neque"),
                                                        Project: sdk.String("est"),
                                                        Region: sdk.String("consequuntur"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("a"),
                                            Location: sdk.String("unde"),
                                            Rrdatas: []string{
                                                "maiores",
                                            },
                                            SignatureRrdatas: []string{
                                                "autem",
                                                "in",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("at"),
                                },
                                Kind: sdk.String("quisquam"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("possimus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("facere"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("minima"),
                                            Port: sdk.String("voluptas"),
                                            Project: sdk.String("et"),
                                            Region: sdk.String("explicabo"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(1487.24),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laboriosam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("soluta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("asperiores"),
                                                    Port: sdk.String("eos"),
                                                    Project: sdk.String("quam"),
                                                    Region: sdk.String("voluptate"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolore"),
                                        Rrdatas: []string{
                                            "exercitationem",
                                            "quo",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "in",
                                            "voluptas",
                                            "similique",
                                        },
                                        Weight: sdk.Float64(9494),
                                    },
                                },
                                Kind: sdk.String("error"),
                            },
                            WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nulla"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("reprehenderit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aut"),
                                                    Port: sdk.String("blanditiis"),
                                                    Project: sdk.String("unde"),
                                                    Region: sdk.String("hic"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("maxime"),
                                        Rrdatas: []string{
                                            "ut",
                                            "fugiat",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolores",
                                            "quam",
                                            "eius",
                                        },
                                        Weight: sdk.Float64(3540.31),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ipsa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ullam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("placeat"),
                                                    Port: sdk.String("in"),
                                                    Project: sdk.String("minus"),
                                                    Region: sdk.String("voluptas"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quibusdam"),
                                        Rrdatas: []string{
                                            "quod",
                                        },
                                        SignatureRrdatas: []string{
                                            "cumque",
                                            "delectus",
                                            "repellendus",
                                        },
                                        Weight: sdk.Float64(7785.2),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consectetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("autem"),
                                                    Port: sdk.String("repellat"),
                                                    Project: sdk.String("ea"),
                                                    Region: sdk.String("fugit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consectetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("minus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quisquam"),
                                                    Port: sdk.String("mollitia"),
                                                    Project: sdk.String("facilis"),
                                                    Region: sdk.String("nostrum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("alias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("voluptates"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quis"),
                                                    Port: sdk.String("earum"),
                                                    Project: sdk.String("voluptatem"),
                                                    Region: sdk.String("pariatur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("cum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("laborum"),
                                                    Port: sdk.String("sapiente"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("id"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nulla"),
                                        Rrdatas: []string{
                                            "ullam",
                                        },
                                        SignatureRrdatas: []string{
                                            "deleniti",
                                            "nisi",
                                        },
                                        Weight: sdk.Float64(9217.57),
                                    },
                                },
                                Kind: sdk.String("odio"),
                            },
                        },
                        Rrdatas: []string{
                            "aliquam",
                            "quasi",
                            "ipsum",
                        },
                        SignatureRrdatas: []string{
                            "expedita",
                            "saepe",
                            "magni",
                            "assumenda",
                        },
                        TTL: sdk.Int(91092),
                        Type: sdk.String("molestiae"),
                    },
                },
            },
            RuleName: sdk.String("ea"),
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("illo"),
        ClientOperationID: sdk.String("optio"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        Project: "modi",
        QuotaUser: sdk.String("doloremque"),
        ResponsePolicy: "doloribus",
        ResponsePolicyRulePathParameter: "aliquid",
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.DNSResponsePolicyRulesUpdateSecurity{
        Option1: &operations.DNSResponsePolicyRulesUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponsePolicyRulesUpdateResponse != nil {
        // handle response
    }
}
```
