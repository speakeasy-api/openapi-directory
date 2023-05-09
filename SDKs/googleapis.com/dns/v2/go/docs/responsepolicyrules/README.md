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
            DNSName: sdk.String("dolorem"),
            Kind: sdk.String("quidem"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("debitis"),
                        Name: sdk.String("Rosa Hand"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("deserunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("et"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("ex"),
                                                    Project: sdk.String("praesentium"),
                                                    Region: sdk.String("natus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laudantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eligendi"),
                                                    Port: sdk.String("repudiandae"),
                                                    Project: sdk.String("dicta"),
                                                    Region: sdk.String("inventore"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ullam"),
                                        Location: sdk.String("iusto"),
                                        Rrdatas: []string{
                                            "voluptate",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolorem",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("exercitationem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptate"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("pariatur"),
                                                    Port: sdk.String("minus"),
                                                    Project: sdk.String("a"),
                                                    Region: sdk.String("fuga"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("totam"),
                                        Location: sdk.String("cupiditate"),
                                        Rrdatas: []string{
                                            "doloribus",
                                            "omnis",
                                            "quam",
                                            "exercitationem",
                                        },
                                        SignatureRrdatas: []string{
                                            "sequi",
                                            "quis",
                                            "commodi",
                                            "vel",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facere"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laborum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatem"),
                                                    Port: sdk.String("odit"),
                                                    Project: sdk.String("aliquid"),
                                                    Region: sdk.String("pariatur"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("enim"),
                                        Location: sdk.String("numquam"),
                                        Rrdatas: []string{
                                            "est",
                                        },
                                        SignatureRrdatas: []string{
                                            "facere",
                                            "vitae",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("alias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("officiis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quia"),
                                                    Port: sdk.String("vitae"),
                                                    Project: sdk.String("odio"),
                                                    Region: sdk.String("quas"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ipsa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("placeat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("eligendi"),
                                                    Port: sdk.String("sit"),
                                                    Project: sdk.String("possimus"),
                                                    Region: sdk.String("distinctio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("distinctio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("illum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("magnam"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("tempora"),
                                                    Region: sdk.String("esse"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("doloremque"),
                                        Location: sdk.String("corrupti"),
                                        Rrdatas: []string{
                                            "facilis",
                                            "aliquam",
                                            "repudiandae",
                                            "amet",
                                        },
                                        SignatureRrdatas: []string{
                                            "ab",
                                            "officiis",
                                            "eum",
                                        },
                                    },
                                },
                                Kind: sdk.String("rerum"),
                            },
                            Kind: sdk.String("placeat"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("blanditiis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("labore"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("ut"),
                                                        Port: sdk.String("earum"),
                                                        Project: sdk.String("ullam"),
                                                        Region: sdk.String("numquam"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("enim"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("occaecati"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("fuga"),
                                                        Port: sdk.String("consectetur"),
                                                        Project: sdk.String("modi"),
                                                        Region: sdk.String("aspernatur"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("explicabo"),
                                            Location: sdk.String("suscipit"),
                                            Rrdatas: []string{
                                                "eveniet",
                                            },
                                            SignatureRrdatas: []string{
                                                "nobis",
                                                "qui",
                                                "accusantium",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("consequatur"),
                                },
                                Kind: sdk.String("impedit"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("voluptate"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("est"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("expedita"),
                                            Port: sdk.String("quibusdam"),
                                            Project: sdk.String("quos"),
                                            Region: sdk.String("maiores"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("quidem"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("culpa"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("fuga"),
                                            Port: sdk.String("dicta"),
                                            Project: sdk.String("architecto"),
                                            Region: sdk.String("suscipit"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("eligendi"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("dignissimos"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("ratione"),
                                            Port: sdk.String("possimus"),
                                            Project: sdk.String("quaerat"),
                                            Region: sdk.String("aut"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("natus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("delectus"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("ratione"),
                                            Port: sdk.String("ipsa"),
                                            Project: sdk.String("debitis"),
                                            Region: sdk.String("iste"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(6467.76),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequuntur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("libero"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("omnis"),
                                                    Port: sdk.String("dicta"),
                                                    Project: sdk.String("qui"),
                                                    Region: sdk.String("explicabo"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("consequatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
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
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("magnam"),
                                                    Port: sdk.String("perspiciatis"),
                                                    Project: sdk.String("amet"),
                                                    Region: sdk.String("corrupti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("delectus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("porro"),
                                                    Port: sdk.String("quaerat"),
                                                    Project: sdk.String("magni"),
                                                    Region: sdk.String("cumque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("commodi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
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
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nostrum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptas"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("corporis"),
                                                    Region: sdk.String("excepturi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("natus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("necessitatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolores"),
                                                    Port: sdk.String("laborum"),
                                                    Project: sdk.String("vero"),
                                                    Region: sdk.String("eos"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptatem"),
                                        Rrdatas: []string{
                                            "id",
                                            "quae",
                                            "commodi",
                                            "a",
                                        },
                                        SignatureRrdatas: []string{
                                            "sed",
                                            "nam",
                                            "quia",
                                            "iusto",
                                        },
                                        Weight: sdk.Float64(700.88),
                                    },
                                },
                                Kind: sdk.String("deserunt"),
                            },
                        },
                        Rrdatas: []string{
                            "blanditiis",
                        },
                        SignatureRrdatas: []string{
                            "placeat",
                            "ullam",
                            "molestiae",
                        },
                        TTL: sdk.Int(933840),
                        Type: sdk.String("rem"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("nemo"),
                        Name: sdk.String("Mrs. Kate Moen"),
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
                                                    Kind: sdk.String("consequuntur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("commodi"),
                                                    Port: sdk.String("ipsam"),
                                                    Project: sdk.String("vel"),
                                                    Region: sdk.String("cupiditate"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("modi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("explicabo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("doloremque"),
                                                    Port: sdk.String("odio"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("voluptatum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempora"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("libero"),
                                                    Port: sdk.String("ratione"),
                                                    Project: sdk.String("molestiae"),
                                                    Region: sdk.String("optio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("saepe"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("accusantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eos"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("quis"),
                                                    Region: sdk.String("vitae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("occaecati"),
                                        Location: sdk.String("labore"),
                                        Rrdatas: []string{
                                            "quidem",
                                            "exercitationem",
                                            "veniam",
                                            "modi",
                                        },
                                        SignatureRrdatas: []string{
                                            "quae",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("possimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("suscipit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sint"),
                                                    Port: sdk.String("est"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("provident"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("alias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("fugit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("molestiae"),
                                                    Project: sdk.String("maxime"),
                                                    Region: sdk.String("facere"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("impedit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("deleniti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maiores"),
                                                    Port: sdk.String("voluptatem"),
                                                    Project: sdk.String("aliquid"),
                                                    Region: sdk.String("laudantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("unde"),
                                        Location: sdk.String("corrupti"),
                                        Rrdatas: []string{
                                            "facere",
                                        },
                                        SignatureRrdatas: []string{
                                            "libero",
                                            "nam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("adipisci"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("hic"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fuga"),
                                                    Port: sdk.String("consectetur"),
                                                    Project: sdk.String("labore"),
                                                    Region: sdk.String("laudantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("cumque"),
                                        Location: sdk.String("adipisci"),
                                        Rrdatas: []string{
                                            "nam",
                                        },
                                        SignatureRrdatas: []string{
                                            "magnam",
                                            "aperiam",
                                            "ducimus",
                                            "itaque",
                                        },
                                    },
                                },
                                Kind: sdk.String("necessitatibus"),
                            },
                            Kind: sdk.String("numquam"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("sapiente"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("impedit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("aspernatur"),
                                                        Port: sdk.String("nobis"),
                                                        Project: sdk.String("nihil"),
                                                        Region: sdk.String("voluptatum"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("reiciendis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("ullam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("consequuntur"),
                                                        Port: sdk.String("voluptas"),
                                                        Project: sdk.String("ratione"),
                                                        Region: sdk.String("excepturi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("corrupti"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("perferendis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("impedit"),
                                                        Port: sdk.String("ducimus"),
                                                        Project: sdk.String("nisi"),
                                                        Region: sdk.String("nisi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dolor"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("dolore"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("maxime"),
                                                        Port: sdk.String("expedita"),
                                                        Project: sdk.String("accusantium"),
                                                        Region: sdk.String("ea"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("impedit"),
                                            Location: sdk.String("totam"),
                                            Rrdatas: []string{
                                                "est",
                                                "inventore",
                                                "consequuntur",
                                                "repellendus",
                                            },
                                            SignatureRrdatas: []string{
                                                "dolores",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("aspernatur"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("magni"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("alias"),
                                                        Port: sdk.String("quidem"),
                                                        Project: sdk.String("deleniti"),
                                                        Region: sdk.String("possimus"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ipsam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("fugit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("at"),
                                                        Port: sdk.String("illum"),
                                                        Project: sdk.String("praesentium"),
                                                        Region: sdk.String("sint"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("exercitationem"),
                                            Location: sdk.String("cum"),
                                            Rrdatas: []string{
                                                "facilis",
                                                "placeat",
                                                "reiciendis",
                                            },
                                            SignatureRrdatas: []string{
                                                "dolore",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("facilis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("nemo"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("nisi"),
                                                        Port: sdk.String("provident"),
                                                        Project: sdk.String("amet"),
                                                        Region: sdk.String("dolor"),
                                                    },
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
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("cupiditate"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("numquam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("molestiae"),
                                                        Port: sdk.String("quas"),
                                                        Project: sdk.String("repellendus"),
                                                        Region: sdk.String("saepe"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("amet"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("vel"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("iste"),
                                                        Port: sdk.String("nesciunt"),
                                                        Project: sdk.String("corrupti"),
                                                        Region: sdk.String("cupiditate"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("voluptatibus"),
                                            Location: sdk.String("ullam"),
                                            Rrdatas: []string{
                                                "soluta",
                                                "cum",
                                                "in",
                                            },
                                            SignatureRrdatas: []string{
                                                "commodi",
                                                "commodi",
                                                "fugit",
                                                "ullam",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("doloremque"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("qui"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
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
                                            Kind: sdk.String("consectetur"),
                                            Location: sdk.String("inventore"),
                                            Rrdatas: []string{
                                                "facilis",
                                                "facilis",
                                            },
                                            SignatureRrdatas: []string{
                                                "nisi",
                                                "ipsam",
                                                "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("illo"),
                                },
                                Kind: sdk.String("iure"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("eveniet"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("ea"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("veniam"),
                                            Port: sdk.String("quidem"),
                                            Project: sdk.String("asperiores"),
                                            Region: sdk.String("eum"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("deserunt"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("nemo"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("architecto"),
                                            Port: sdk.String("expedita"),
                                            Project: sdk.String("quisquam"),
                                            Region: sdk.String("praesentium"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(7080.75),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("maiores"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("commodi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("fugit"),
                                                    Port: sdk.String("nam"),
                                                    Project: sdk.String("ex"),
                                                    Region: sdk.String("neque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("alias"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("a"),
                                                    Port: sdk.String("facere"),
                                                    Project: sdk.String("id"),
                                                    Region: sdk.String("atque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quaerat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("dignissimos"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("modi"),
                                                    Port: sdk.String("fuga"),
                                                    Project: sdk.String("iure"),
                                                    Region: sdk.String("deleniti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("officia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("laborum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ad"),
                                                    Port: sdk.String("illum"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("molestias"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptas"),
                                        Rrdatas: []string{
                                            "voluptas",
                                            "maiores",
                                            "ea",
                                        },
                                        SignatureRrdatas: []string{
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
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
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
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
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
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ullam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("doloribus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aut"),
                                                    Port: sdk.String("similique"),
                                                    Project: sdk.String("iste"),
                                                    Region: sdk.String("eveniet"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nam"),
                                        Rrdatas: []string{
                                            "labore",
                                            "voluptate",
                                            "voluptatibus",
                                        },
                                        SignatureRrdatas: []string{
                                            "nulla",
                                            "dolorem",
                                        },
                                        Weight: sdk.Float64(9156.53),
                                    },
                                },
                                Kind: sdk.String("a"),
                            },
                        },
                        Rrdatas: []string{
                            "quaerat",
                        },
                        SignatureRrdatas: []string{
                            "aliquid",
                            "dolore",
                            "voluptatem",
                        },
                        TTL: sdk.Int(849029),
                        Type: sdk.String("laboriosam"),
                    },
                },
            },
            RuleName: sdk.String("culpa"),
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ratione"),
        ClientOperationID: sdk.String("vitae"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("atque"),
        Location: "nihil",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        Project: "temporibus",
        QuotaUser: sdk.String("a"),
        ResponsePolicy: "ad",
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("suscipit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        ClientOperationID: sdk.String("mollitia"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("praesentium"),
        Location: "neque",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        Project: "animi",
        QuotaUser: sdk.String("debitis"),
        ResponsePolicy: "voluptatum",
        ResponsePolicyRule: "voluptatem",
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("vitae"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eligendi"),
        ClientOperationID: sdk.String("occaecati"),
        Fields: sdk.String("quis"),
        Key: sdk.String("tempore"),
        Location: "officia",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        Project: "unde",
        QuotaUser: sdk.String("quas"),
        ResponsePolicy: "laboriosam",
        ResponsePolicyRule: "ducimus",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("sapiente"),
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
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("sint"),
        Key: sdk.String("autem"),
        Location: "iste",
        MaxResults: sdk.Int64(586556),
        OauthToken: sdk.String("ab"),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        Project: "a",
        QuotaUser: sdk.String("dolor"),
        ResponsePolicy: "voluptatum",
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("quod"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ResponsePolicyRule1: &shared.ResponsePolicyRule{
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBehaviorUnspecified.ToPointer(),
            DNSName: sdk.String("consectetur"),
            Kind: sdk.String("autem"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("numquam"),
                        Name: sdk.String("Emma Lueilwitz"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reprehenderit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("consequatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("delectus"),
                                                    Port: sdk.String("qui"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("exercitationem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ipsum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("doloremque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptatum"),
                                                    Port: sdk.String("debitis"),
                                                    Project: sdk.String("a"),
                                                    Region: sdk.String("itaque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("eveniet"),
                                        Location: sdk.String("repellat"),
                                        Rrdatas: []string{
                                            "adipisci",
                                            "aliquam",
                                            "illo",
                                        },
                                        SignatureRrdatas: []string{
                                            "sed",
                                            "necessitatibus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dignissimos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("explicabo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("non"),
                                                    Port: sdk.String("delectus"),
                                                    Project: sdk.String("incidunt"),
                                                    Region: sdk.String("quod"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptates"),
                                                    Port: sdk.String("officia"),
                                                    Project: sdk.String("est"),
                                                    Region: sdk.String("in"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("illo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("consequatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("incidunt"),
                                                    Port: sdk.String("dolore"),
                                                    Project: sdk.String("nemo"),
                                                    Region: sdk.String("est"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("delectus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("laboriosam"),
                                                    Port: sdk.String("quam"),
                                                    Project: sdk.String("fuga"),
                                                    Region: sdk.String("officia"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("repellat"),
                                        Location: sdk.String("cupiditate"),
                                        Rrdatas: []string{
                                            "tempore",
                                            "culpa",
                                            "fugiat",
                                        },
                                        SignatureRrdatas: []string{
                                            "atque",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sapiente"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("ut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ab"),
                                                    Port: sdk.String("quibusdam"),
                                                    Project: sdk.String("suscipit"),
                                                    Region: sdk.String("quidem"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("delectus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("cumque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sequi"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("maiores"),
                                                    Region: sdk.String("expedita"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("rerum"),
                                        Location: sdk.String("totam"),
                                        Rrdatas: []string{
                                            "aspernatur",
                                            "eaque",
                                            "impedit",
                                            "nam",
                                        },
                                        SignatureRrdatas: []string{
                                            "odio",
                                            "delectus",
                                        },
                                    },
                                },
                                Kind: sdk.String("minus"),
                            },
                            Kind: sdk.String("ut"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("eos"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("repudiandae"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("occaecati"),
                                                        Port: sdk.String("debitis"),
                                                        Project: sdk.String("laboriosam"),
                                                        Region: sdk.String("eos"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("amet"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("porro"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("reiciendis"),
                                                        Port: sdk.String("voluptate"),
                                                        Project: sdk.String("tempore"),
                                                        Region: sdk.String("in"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("omnis"),
                                            Location: sdk.String("possimus"),
                                            Rrdatas: []string{
                                                "recusandae",
                                                "expedita",
                                                "iusto",
                                                "esse",
                                            },
                                            SignatureRrdatas: []string{
                                                "ad",
                                                "quod",
                                                "ratione",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("vero"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("nam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("maiores"),
                                                        Port: sdk.String("cupiditate"),
                                                        Project: sdk.String("illo"),
                                                        Region: sdk.String("saepe"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("enim"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("ex"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("delectus"),
                                                        Port: sdk.String("deleniti"),
                                                        Project: sdk.String("provident"),
                                                        Region: sdk.String("aut"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dolorum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("tempora"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("numquam"),
                                                        Port: sdk.String("odio"),
                                                        Project: sdk.String("nostrum"),
                                                        Region: sdk.String("maiores"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("veritatis"),
                                            Location: sdk.String("autem"),
                                            Rrdatas: []string{
                                                "minima",
                                                "ex",
                                                "possimus",
                                                "nesciunt",
                                            },
                                            SignatureRrdatas: []string{
                                                "nostrum",
                                                "fuga",
                                                "sequi",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("numquam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("eligendi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("adipisci"),
                                                        Port: sdk.String("sunt"),
                                                        Project: sdk.String("rerum"),
                                                        Region: sdk.String("occaecati"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("provident"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("fugit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("optio"),
                                                        Port: sdk.String("eveniet"),
                                                        Project: sdk.String("fugiat"),
                                                        Region: sdk.String("blanditiis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("a"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("sapiente"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("facilis"),
                                                        Port: sdk.String("molestias"),
                                                        Project: sdk.String("dolore"),
                                                        Region: sdk.String("et"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("accusantium"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("nisi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("tempore"),
                                                        Port: sdk.String("expedita"),
                                                        Project: sdk.String("hic"),
                                                        Region: sdk.String("blanditiis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("vitae"),
                                            Location: sdk.String("iusto"),
                                            Rrdatas: []string{
                                                "velit",
                                                "molestiae",
                                                "nam",
                                            },
                                            SignatureRrdatas: []string{
                                                "vitae",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("mollitia"),
                                },
                                Kind: sdk.String("asperiores"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("quibusdam"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("deleniti"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("vel"),
                                            Port: sdk.String("eos"),
                                            Project: sdk.String("labore"),
                                            Region: sdk.String("sunt"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("blanditiis"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("accusamus"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("incidunt"),
                                            Port: sdk.String("labore"),
                                            Project: sdk.String("blanditiis"),
                                            Region: sdk.String("ducimus"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consectetur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("quis"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("ratione"),
                                            Port: sdk.String("consectetur"),
                                            Project: sdk.String("asperiores"),
                                            Region: sdk.String("architecto"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("sint"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("tempore"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("quasi"),
                                            Port: sdk.String("consequuntur"),
                                            Project: sdk.String("nemo"),
                                            Region: sdk.String("nobis"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(8926.4),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minima"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("expedita"),
                                                    Port: sdk.String("error"),
                                                    Project: sdk.String("placeat"),
                                                    Region: sdk.String("temporibus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("voluptate"),
                                        Rrdatas: []string{
                                            "minima",
                                            "odit",
                                            "odit",
                                            "eius",
                                        },
                                        SignatureRrdatas: []string{
                                            "vel",
                                            "dolorum",
                                            "alias",
                                        },
                                        Weight: sdk.Float64(9303.98),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sunt"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("cum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("corrupti"),
                                                    Port: sdk.String("non"),
                                                    Project: sdk.String("esse"),
                                                    Region: sdk.String("vero"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("eligendi"),
                                        Rrdatas: []string{
                                            "omnis",
                                            "recusandae",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatibus",
                                        },
                                        Weight: sdk.Float64(4191.56),
                                    },
                                },
                                Kind: sdk.String("in"),
                            },
                        },
                        Rrdatas: []string{
                            "amet",
                            "cumque",
                            "dolore",
                            "optio",
                        },
                        SignatureRrdatas: []string{
                            "repudiandae",
                            "tempora",
                            "libero",
                            "suscipit",
                        },
                        TTL: sdk.Int(847985),
                        Type: sdk.String("iusto"),
                    },
                },
            },
            RuleName: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellat"),
        ClientOperationID: sdk.String("sapiente"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("eligendi"),
        Location: "ullam",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        Project: "eius",
        QuotaUser: sdk.String("dignissimos"),
        ResponsePolicy: "corporis",
        ResponsePolicyRulePathParameter: "perferendis",
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("amet"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResponsePolicyRule1: &shared.ResponsePolicyRule{
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBehaviorUnspecified.ToPointer(),
            DNSName: sdk.String("officiis"),
            Kind: sdk.String("dolore"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("maiores"),
                        Name: sdk.String("Jean Welch"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempora"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolor"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("omnis"),
                                                    Port: sdk.String("quam"),
                                                    Project: sdk.String("officiis"),
                                                    Region: sdk.String("dicta"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("excepturi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("deserunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("incidunt"),
                                                    Port: sdk.String("corporis"),
                                                    Project: sdk.String("quaerat"),
                                                    Region: sdk.String("suscipit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ducimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("excepturi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("corrupti"),
                                                    Port: sdk.String("nihil"),
                                                    Project: sdk.String("eius"),
                                                    Region: sdk.String("placeat"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("fugit"),
                                        Location: sdk.String("facere"),
                                        Rrdatas: []string{
                                            "nobis",
                                            "porro",
                                        },
                                        SignatureRrdatas: []string{
                                            "perspiciatis",
                                            "ducimus",
                                        },
                                    },
                                },
                                Kind: sdk.String("qui"),
                            },
                            Kind: sdk.String("qui"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("saepe"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("aliquid"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("fugiat"),
                                                        Port: sdk.String("rem"),
                                                        Project: sdk.String("voluptatibus"),
                                                        Region: sdk.String("officiis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("corporis"),
                                            Location: sdk.String("repellendus"),
                                            Rrdatas: []string{
                                                "voluptatem",
                                            },
                                            SignatureRrdatas: []string{
                                                "excepturi",
                                                "odio",
                                                "omnis",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("officiis"),
                                },
                                Kind: sdk.String("delectus"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("sit"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("voluptatum"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("neque"),
                                            Port: sdk.String("aspernatur"),
                                            Project: sdk.String("eaque"),
                                            Region: sdk.String("corporis"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(5874.89),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("architecto"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("ea"),
                                                    Project: sdk.String("eius"),
                                                    Region: sdk.String("aperiam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("beatae"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("rerum"),
                                                    Port: sdk.String("ipsum"),
                                                    Project: sdk.String("debitis"),
                                                    Region: sdk.String("quis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eaque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquid"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("maiores"),
                                                    Region: sdk.String("debitis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("reprehenderit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("assumenda"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ut"),
                                                    Port: sdk.String("quae"),
                                                    Project: sdk.String("nihil"),
                                                    Region: sdk.String("quam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("assumenda"),
                                        Rrdatas: []string{
                                            "cumque",
                                        },
                                        SignatureRrdatas: []string{
                                            "adipisci",
                                            "tenetur",
                                            "non",
                                            "accusantium",
                                        },
                                        Weight: sdk.Float64(5484.73),
                                    },
                                },
                                Kind: sdk.String("itaque"),
                            },
                        },
                        Rrdatas: []string{
                            "impedit",
                            "dicta",
                            "corporis",
                            "impedit",
                        },
                        SignatureRrdatas: []string{
                            "cum",
                            "dolore",
                            "illum",
                            "ea",
                        },
                        TTL: sdk.Int(889201),
                        Type: sdk.String("quasi"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("accusamus"),
                        Name: sdk.String("Alonzo Bartell"),
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
                                                    Kind: sdk.String("tenetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("deserunt"),
                                                    Port: sdk.String("eligendi"),
                                                    Project: sdk.String("id"),
                                                    Region: sdk.String("distinctio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("corporis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("soluta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("unde"),
                                                    Port: sdk.String("et"),
                                                    Project: sdk.String("quisquam"),
                                                    Region: sdk.String("unde"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sed"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("facere"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nam"),
                                                    Port: sdk.String("quaerat"),
                                                    Project: sdk.String("corrupti"),
                                                    Region: sdk.String("sint"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("eius"),
                                        Location: sdk.String("vel"),
                                        Rrdatas: []string{
                                            "vero",
                                        },
                                        SignatureRrdatas: []string{
                                            "numquam",
                                            "fugit",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                },
                                Kind: sdk.String("distinctio"),
                            },
                            Kind: sdk.String("voluptas"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nihil"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("cumque"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("maiores"),
                                                        Port: sdk.String("esse"),
                                                        Project: sdk.String("explicabo"),
                                                        Region: sdk.String("delectus"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quos"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("enim"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("voluptatem"),
                                                        Port: sdk.String("natus"),
                                                        Project: sdk.String("voluptatem"),
                                                        Region: sdk.String("tempora"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("occaecati"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("veritatis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("doloremque"),
                                                        Port: sdk.String("quas"),
                                                        Project: sdk.String("dolores"),
                                                        Region: sdk.String("perferendis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("esse"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("blanditiis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("voluptates"),
                                                        Port: sdk.String("minus"),
                                                        Project: sdk.String("autem"),
                                                        Region: sdk.String("vel"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("beatae"),
                                            Location: sdk.String("quos"),
                                            Rrdatas: []string{
                                                "soluta",
                                            },
                                            SignatureRrdatas: []string{
                                                "necessitatibus",
                                                "perspiciatis",
                                                "suscipit",
                                                "ullam",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("debitis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("magnam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("accusamus"),
                                                        Port: sdk.String("quod"),
                                                        Project: sdk.String("sunt"),
                                                        Region: sdk.String("voluptas"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("earum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("earum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("nostrum"),
                                                        Port: sdk.String("rerum"),
                                                        Project: sdk.String("perferendis"),
                                                        Region: sdk.String("nam"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ullam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("eos"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                        NetworkURL: sdk.String("modi"),
                                                        Port: sdk.String("illum"),
                                                        Project: sdk.String("error"),
                                                        Region: sdk.String("consectetur"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("reprehenderit"),
                                            Location: sdk.String("eligendi"),
                                            Rrdatas: []string{
                                                "culpa",
                                                "culpa",
                                                "a",
                                            },
                                            SignatureRrdatas: []string{
                                                "eius",
                                                "ad",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quod"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("voluptatum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("explicabo"),
                                                        Port: sdk.String("eligendi"),
                                                        Project: sdk.String("cupiditate"),
                                                        Region: sdk.String("tempore"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("odit"),
                                            Location: sdk.String("est"),
                                            Rrdatas: []string{
                                                "ipsum",
                                                "explicabo",
                                                "nulla",
                                                "est",
                                            },
                                            SignatureRrdatas: []string{
                                                "necessitatibus",
                                                "voluptatum",
                                                "quasi",
                                                "mollitia",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("voluptatum"),
                                },
                                Kind: sdk.String("blanditiis"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("ut"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("labore"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("enim"),
                                            Port: sdk.String("nihil"),
                                            Project: sdk.String("ratione"),
                                            Region: sdk.String("tenetur"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("saepe"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("nulla"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("quam"),
                                            Port: sdk.String("consectetur"),
                                            Project: sdk.String("nemo"),
                                            Region: sdk.String("nesciunt"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("earum"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("dolor"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("quos"),
                                            Port: sdk.String("sed"),
                                            Project: sdk.String("eaque"),
                                            Region: sdk.String("natus"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("ratione"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("unde"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("id"),
                                            Port: sdk.String("ex"),
                                            Project: sdk.String("occaecati"),
                                            Region: sdk.String("optio"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(8696.02),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sapiente"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("occaecati"),
                                                    Port: sdk.String("repellendus"),
                                                    Project: sdk.String("culpa"),
                                                    Region: sdk.String("dicta"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("odio"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("magni"),
                                                    Port: sdk.String("eos"),
                                                    Project: sdk.String("harum"),
                                                    Region: sdk.String("voluptatibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("omnis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quos"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("aliquam"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("nisi"),
                                                    Region: sdk.String("praesentium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("animi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                                    NetworkURL: sdk.String("libero"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("quaerat"),
                                                    Region: sdk.String("maiores"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iste"),
                                        Rrdatas: []string{
                                            "ipsam",
                                            "fugiat",
                                            "odio",
                                            "ullam",
                                        },
                                        SignatureRrdatas: []string{
                                            "eligendi",
                                        },
                                        Weight: sdk.Float64(5786.78),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("necessitatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("a"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("veniam"),
                                                    Port: sdk.String("aut"),
                                                    Project: sdk.String("magni"),
                                                    Region: sdk.String("rerum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quod"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dolore"),
                                                    Port: sdk.String("enim"),
                                                    Project: sdk.String("alias"),
                                                    Region: sdk.String("blanditiis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("modi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("a"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("molestiae"),
                                                    Port: sdk.String("autem"),
                                                    Project: sdk.String("dolore"),
                                                    Region: sdk.String("eius"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nostrum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("amet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("molestias"),
                                                    Port: sdk.String("voluptatibus"),
                                                    Project: sdk.String("ipsum"),
                                                    Region: sdk.String("hic"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quidem"),
                                        Rrdatas: []string{
                                            "molestiae",
                                        },
                                        SignatureRrdatas: []string{
                                            "quia",
                                            "inventore",
                                            "doloribus",
                                            "praesentium",
                                        },
                                        Weight: sdk.Float64(3977.3),
                                    },
                                },
                                Kind: sdk.String("consequuntur"),
                            },
                        },
                        Rrdatas: []string{
                            "nemo",
                            "reprehenderit",
                        },
                        SignatureRrdatas: []string{
                            "ipsum",
                            "vel",
                            "delectus",
                        },
                        TTL: sdk.Int(806952),
                        Type: sdk.String("vel"),
                    },
                },
            },
            RuleName: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quis"),
        ClientOperationID: sdk.String("deleniti"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("quod"),
        Location: "saepe",
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        Project: "magni",
        QuotaUser: sdk.String("nostrum"),
        ResponsePolicy: "minus",
        ResponsePolicyRulePathParameter: "aliquid",
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("ea"),
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
