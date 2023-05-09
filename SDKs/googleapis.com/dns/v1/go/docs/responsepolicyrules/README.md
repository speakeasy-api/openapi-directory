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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResponsePolicyRule: &shared.ResponsePolicyRule{
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBypassResponsePolicy.ToPointer(),
            DNSName: sdk.String("deleniti"),
            Kind: sdk.String("optio"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("repellat"),
                        Name: sdk.String("Clifford Mertz"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("delectus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("porro"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("magni"),
                                                    Port: sdk.String("cumque"),
                                                    Project: sdk.String("quos"),
                                                    Region: sdk.String("in"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("commodi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sed"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("consequuntur"),
                                                    Port: sdk.String("possimus"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("harum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("aliquam"),
                                        Location: sdk.String("eligendi"),
                                        Rrdatas: []string{
                                            "quo",
                                            "illo",
                                            "nobis",
                                            "esse",
                                        },
                                        SignatureRrdatas: []string{
                                            "explicabo",
                                            "sequi",
                                        },
                                    },
                                },
                                Kind: sdk.String("alias"),
                            },
                            Kind: sdk.String("reiciendis"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("vitae"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("nam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("rerum"),
                                                        Port: sdk.String("assumenda"),
                                                        Project: sdk.String("eos"),
                                                        Region: sdk.String("dolorem"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("hic"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("nam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("magnam"),
                                                        Port: sdk.String("pariatur"),
                                                        Project: sdk.String("expedita"),
                                                        Region: sdk.String("autem"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("tempore"),
                                            Location: sdk.String("recusandae"),
                                            Rrdatas: []string{
                                                "officia",
                                                "voluptas",
                                            },
                                            SignatureRrdatas: []string{
                                                "corporis",
                                                "excepturi",
                                                "natus",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("necessitatibus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("dolores"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("vero"),
                                                        Port: sdk.String("eos"),
                                                        Project: sdk.String("voluptatem"),
                                                        Region: sdk.String("temporibus"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("id"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("commodi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("minus"),
                                                        Port: sdk.String("sed"),
                                                        Project: sdk.String("nam"),
                                                        Region: sdk.String("quia"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("iusto"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("deserunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("blanditiis"),
                                                        Port: sdk.String("sint"),
                                                        Project: sdk.String("placeat"),
                                                        Region: sdk.String("ullam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("molestiae"),
                                            Location: sdk.String("itaque"),
                                            Rrdatas: []string{
                                                "nemo",
                                                "non",
                                                "recusandae",
                                            },
                                            SignatureRrdatas: []string{
                                                "ipsa",
                                                "aliquam",
                                                "dolor",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quibusdam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("consequuntur"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("eius"),
                                                        Port: sdk.String("commodi"),
                                                        Project: sdk.String("ipsam"),
                                                        Region: sdk.String("vel"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("cupiditate"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("nisi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("modi"),
                                                        Port: sdk.String("doloremque"),
                                                        Project: sdk.String("odio"),
                                                        Region: sdk.String("sit"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("voluptatum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("delectus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("dolorum"),
                                                        Port: sdk.String("libero"),
                                                        Project: sdk.String("ratione"),
                                                        Region: sdk.String("molestiae"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("optio"),
                                            Location: sdk.String("saepe"),
                                            Rrdatas: []string{
                                                "accusantium",
                                                "sed",
                                                "eos",
                                                "consequuntur",
                                            },
                                            SignatureRrdatas: []string{
                                                "vitae",
                                                "occaecati",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("labore"),
                                },
                                Kind: sdk.String("fugiat"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("exercitationem"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("modi"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("quae"),
                                            Port: sdk.String("similique"),
                                            Project: sdk.String("possimus"),
                                            Region: sdk.String("quo"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("suscipit"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("sint"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("doloribus"),
                                            Port: sdk.String("provident"),
                                            Project: sdk.String("alias"),
                                            Region: sdk.String("deserunt"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("fugit"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("quo"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("maxime"),
                                            Port: sdk.String("facere"),
                                            Project: sdk.String("impedit"),
                                            Region: sdk.String("cupiditate"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(5369.99),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("laudantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("corrupti"),
                                                    Port: sdk.String("quae"),
                                                    Project: sdk.String("facere"),
                                                    Region: sdk.String("ea"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("libero"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("amet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("minus"),
                                                    Port: sdk.String("hic"),
                                                    Project: sdk.String("similique"),
                                                    Region: sdk.String("fuga"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consectetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("laudantium"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("adipisci"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("nam"),
                                                    Region: sdk.String("voluptatibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magnam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ducimus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("necessitatibus"),
                                                    Port: sdk.String("numquam"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("eligendi"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("sapiente"),
                                        Rrdatas: []string{
                                            "impedit",
                                        },
                                        SignatureRrdatas: []string{
                                            "aspernatur",
                                            "nobis",
                                        },
                                        Weight: sdk.Float64(4679.47),
                                    },
                                },
                                Kind: sdk.String("voluptatum"),
                            },
                        },
                        Rrdatas: []string{
                            "vitae",
                            "ullam",
                            "nisi",
                            "consequuntur",
                        },
                        SignatureRrdatas: []string{
                            "ratione",
                            "excepturi",
                        },
                        TTL: sdk.Int(549348),
                        Type: sdk.String("est"),
                    },
                },
            },
            RuleName: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ducimus"),
        ClientOperationID: sdk.String("nisi"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        Project: "dolore",
        QuotaUser: sdk.String("maxime"),
        ResponsePolicy: "maxime",
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("accusantium"),
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
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("optio"),
        ClientOperationID: sdk.String("est"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        Project: "sit",
        QuotaUser: sdk.String("dolores"),
        ResponsePolicy: "enim",
        ResponsePolicyRule: "aspernatur",
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("magni"),
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
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        ClientOperationID: sdk.String("possimus"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        Project: "aspernatur",
        QuotaUser: sdk.String("at"),
        ResponsePolicy: "illum",
        ResponsePolicyRule: "praesentium",
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("exercitationem"),
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
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("dolores"),
        MaxResults: sdk.Int64(295307),
        OauthToken: sdk.String("pariatur"),
        PageToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        Project: "cupiditate",
        QuotaUser: sdk.String("nemo"),
        ResponsePolicy: "natus",
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("provident"),
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
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBehaviorUnspecified.ToPointer(),
            DNSName: sdk.String("nostrum"),
            Kind: sdk.String("qui"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("molestiae"),
                        Name: sdk.String("Dana Franecki"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fugiat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("quas"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("amet"),
                                                    Project: sdk.String("distinctio"),
                                                    Region: sdk.String("vel"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("necessitatibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nesciunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cupiditate"),
                                                    Port: sdk.String("voluptatibus"),
                                                    Project: sdk.String("ullam"),
                                                    Region: sdk.String("dolorum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("soluta"),
                                        Location: sdk.String("cum"),
                                        Rrdatas: []string{
                                            "delectus",
                                            "commodi",
                                        },
                                        SignatureRrdatas: []string{
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
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iure"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eveniet"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ea"),
                                                    Port: sdk.String("asperiores"),
                                                    Project: sdk.String("veniam"),
                                                    Region: sdk.String("quidem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("asperiores"),
                                        Location: sdk.String("eum"),
                                        Rrdatas: []string{
                                            "repudiandae",
                                            "nemo",
                                            "molestias",
                                        },
                                        SignatureRrdatas: []string{
                                            "expedita",
                                        },
                                    },
                                },
                                Kind: sdk.String("quisquam"),
                            },
                            Kind: sdk.String("praesentium"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
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
                                            Location: sdk.String("voluptas"),
                                            Rrdatas: []string{
                                                "voluptas",
                                                "maiores",
                                                "ea",
                                            },
                                            SignatureRrdatas: []string{
                                                "delectus",
                                                "accusamus",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("consequatur"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("accusantium"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("provident"),
                                                        Port: sdk.String("maiores"),
                                                        Project: sdk.String("quaerat"),
                                                        Region: sdk.String("numquam"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("non"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("incidunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("enim"),
                                                        Port: sdk.String("nihil"),
                                                        Project: sdk.String("libero"),
                                                        Region: sdk.String("omnis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("excepturi"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("quisquam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("repellendus"),
                                                        Port: sdk.String("cum"),
                                                        Project: sdk.String("quibusdam"),
                                                        Region: sdk.String("est"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("commodi"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("autem"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("recusandae"),
                                                        Port: sdk.String("sapiente"),
                                                        Project: sdk.String("id"),
                                                        Region: sdk.String("odit"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("inventore"),
                                            Location: sdk.String("iste"),
                                            Rrdatas: []string{
                                                "explicabo",
                                                "ullam",
                                                "atque",
                                            },
                                            SignatureRrdatas: []string{
                                                "pariatur",
                                                "aut",
                                                "similique",
                                                "iste",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("labore"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("voluptatibus"),
                                                        Port: sdk.String("quam"),
                                                        Project: sdk.String("nulla"),
                                                        Region: sdk.String("dolorem"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("voluptates"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("perferendis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("excepturi"),
                                                        Port: sdk.String("aliquid"),
                                                        Project: sdk.String("dolore"),
                                                        Region: sdk.String("voluptatem"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("illum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("culpa"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("atque"),
                                                        Port: sdk.String("ratione"),
                                                        Project: sdk.String("vitae"),
                                                        Region: sdk.String("quisquam"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("atque"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("culpa"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("a"),
                                                        Port: sdk.String("ad"),
                                                        Project: sdk.String("cupiditate"),
                                                        Region: sdk.String("suscipit"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("reiciendis"),
                                            Location: sdk.String("repellendus"),
                                            Rrdatas: []string{
                                                "ab",
                                                "mollitia",
                                                "possimus",
                                                "praesentium",
                                            },
                                            SignatureRrdatas: []string{
                                                "quam",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("animi"),
                                },
                                Kind: sdk.String("debitis"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("voluptatem"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("vitae"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("architecto"),
                                            Port: sdk.String("sint"),
                                            Project: sdk.String("eligendi"),
                                            Region: sdk.String("occaecati"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("quis"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("officia"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("unde"),
                                            Port: sdk.String("quas"),
                                            Project: sdk.String("laboriosam"),
                                            Region: sdk.String("ducimus"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("voluptatum"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("deserunt"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("hic"),
                                            Port: sdk.String("iure"),
                                            Project: sdk.String("sint"),
                                            Region: sdk.String("autem"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(6143.68),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fuga"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("dolor"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("molestias"),
                                                    Port: sdk.String("quod"),
                                                    Project: sdk.String("repudiandae"),
                                                    Region: sdk.String("eaque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("consectetur"),
                                        Rrdatas: []string{
                                            "vitae",
                                            "numquam",
                                        },
                                        SignatureRrdatas: []string{
                                            "modi",
                                            "quos",
                                        },
                                        Weight: sdk.Float64(7914.54),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("error"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("reprehenderit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("consequatur"),
                                                    Port: sdk.String("voluptates"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("qui"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("delectus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ipsum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("doloremque"),
                                                    Port: sdk.String("sed"),
                                                    Project: sdk.String("voluptatum"),
                                                    Region: sdk.String("debitis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("a"),
                                        Rrdatas: []string{
                                            "eveniet",
                                            "repellat",
                                            "cupiditate",
                                            "adipisci",
                                        },
                                        SignatureRrdatas: []string{
                                            "illo",
                                            "veniam",
                                        },
                                        Weight: sdk.Float64(1483.73),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("possimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ullam"),
                                                    Port: sdk.String("non"),
                                                    Project: sdk.String("delectus"),
                                                    Region: sdk.String("incidunt"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ullam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("illum"),
                                                    Port: sdk.String("voluptates"),
                                                    Project: sdk.String("officia"),
                                                    Region: sdk.String("est"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("in"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptate"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("delectus"),
                                                    Port: sdk.String("incidunt"),
                                                    Project: sdk.String("dolore"),
                                                    Region: sdk.String("nemo"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("est"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("maxime"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("laboriosam"),
                                                    Port: sdk.String("laboriosam"),
                                                    Project: sdk.String("quam"),
                                                    Region: sdk.String("fuga"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("officia"),
                                        Rrdatas: []string{
                                            "cupiditate",
                                            "soluta",
                                            "tempore",
                                            "culpa",
                                        },
                                        SignatureRrdatas: []string{
                                            "inventore",
                                            "atque",
                                            "ad",
                                            "sapiente",
                                        },
                                        Weight: sdk.Float64(9133.93),
                                    },
                                },
                                Kind: sdk.String("ut"),
                            },
                        },
                        Rrdatas: []string{
                            "ab",
                        },
                        SignatureRrdatas: []string{
                            "suscipit",
                            "quidem",
                            "delectus",
                            "nemo",
                        },
                        TTL: sdk.Int(763934),
                        Type: sdk.String("voluptatum"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("sequi"),
                        Name: sdk.String("Emilio Ratke"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eaque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("odio"),
                                                    Port: sdk.String("delectus"),
                                                    Project: sdk.String("minus"),
                                                    Region: sdk.String("ut"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("distinctio"),
                                        Location: sdk.String("eius"),
                                        Rrdatas: []string{
                                            "veniam",
                                        },
                                        SignatureRrdatas: []string{
                                            "sint",
                                            "occaecati",
                                            "debitis",
                                            "laboriosam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("amet"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("porro"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
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
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("maiores"),
                                                    Port: sdk.String("cupiditate"),
                                                    Project: sdk.String("illo"),
                                                    Region: sdk.String("saepe"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("enim"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("ex"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("delectus"),
                                                    Port: sdk.String("deleniti"),
                                                    Project: sdk.String("provident"),
                                                    Region: sdk.String("aut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolorum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("tempora"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
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
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
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
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("iste"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("distinctio"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("labore"),
                                                        Port: sdk.String("blanditiis"),
                                                        Project: sdk.String("ducimus"),
                                                        Region: sdk.String("consectetur"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("sapiente"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("accusantium"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("consectetur"),
                                                        Port: sdk.String("asperiores"),
                                                        Project: sdk.String("architecto"),
                                                        Region: sdk.String("sint"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("possimus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("asperiores"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("consequuntur"),
                                                        Port: sdk.String("nemo"),
                                                        Project: sdk.String("nobis"),
                                                        Region: sdk.String("debitis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("labore"),
                                            Location: sdk.String("veritatis"),
                                            Rrdatas: []string{
                                                "magni",
                                                "itaque",
                                            },
                                            SignatureRrdatas: []string{
                                                "expedita",
                                                "error",
                                                "placeat",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("voluptate"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("minima"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("odit"),
                                                        Port: sdk.String("eius"),
                                                        Project: sdk.String("error"),
                                                        Region: sdk.String("vel"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dolorum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("itaque"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("sunt"),
                                                        Port: sdk.String("amet"),
                                                        Project: sdk.String("cum"),
                                                        Region: sdk.String("iusto"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("corrupti"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("esse"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("eligendi"),
                                                        Port: sdk.String("minima"),
                                                        Project: sdk.String("omnis"),
                                                        Region: sdk.String("recusandae"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("architecto"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("autem"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("repellat"),
                                                        Port: sdk.String("amet"),
                                                        Project: sdk.String("cumque"),
                                                        Region: sdk.String("dolore"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("optio"),
                                            Location: sdk.String("quo"),
                                            Rrdatas: []string{
                                                "tempora",
                                                "libero",
                                                "suscipit",
                                                "illum",
                                            },
                                            SignatureRrdatas: []string{
                                                "aliquid",
                                                "sint",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("repellat"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("consectetur"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("ullam"),
                                                        Port: sdk.String("nihil"),
                                                        Project: sdk.String("eius"),
                                                        Region: sdk.String("dignissimos"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("corporis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("architecto"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("corporis"),
                                                        Port: sdk.String("nihil"),
                                                        Project: sdk.String("officiis"),
                                                        Region: sdk.String("dolore"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("magnam"),
                                            Location: sdk.String("maiores"),
                                            Rrdatas: []string{
                                                "dicta",
                                                "hic",
                                            },
                                            SignatureRrdatas: []string{
                                                "libero",
                                                "consequatur",
                                                "totam",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quo"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("sunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quam"),
                                                        Port: sdk.String("officiis"),
                                                        Project: sdk.String("dicta"),
                                                        Region: sdk.String("excepturi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("consectetur"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("odit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("corporis"),
                                                        Port: sdk.String("quaerat"),
                                                        Project: sdk.String("suscipit"),
                                                        Region: sdk.String("ducimus"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("tenetur"),
                                            Location: sdk.String("excepturi"),
                                            Rrdatas: []string{
                                                "corrupti",
                                                "nihil",
                                            },
                                            SignatureRrdatas: []string{
                                                "placeat",
                                                "fugit",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("facere"),
                                },
                                Kind: sdk.String("ipsam"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("porro"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("perspiciatis"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("qui"),
                                            Port: sdk.String("qui"),
                                            Project: sdk.String("consectetur"),
                                            Region: sdk.String("ratione"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("saepe"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("aliquid"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("fugiat"),
                                            Port: sdk.String("rem"),
                                            Project: sdk.String("voluptatibus"),
                                            Region: sdk.String("officiis"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("corporis"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("aut"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("libero"),
                                            Port: sdk.String("excepturi"),
                                            Project: sdk.String("odio"),
                                            Region: sdk.String("omnis"),
                                        },
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
                                    },
                                },
                                TrickleTraffic: sdk.Float64(1357.75),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("cupiditate"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("impedit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("architecto"),
                                                    Project: sdk.String("voluptatem"),
                                                    Region: sdk.String("perspiciatis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ea"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("aperiam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("non"),
                                                    Port: sdk.String("beatae"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("rerum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ipsum"),
                                        Rrdatas: []string{
                                            "quis",
                                            "eaque",
                                            "incidunt",
                                            "ut",
                                        },
                                        SignatureRrdatas: []string{
                                            "aliquid",
                                            "ullam",
                                            "maiores",
                                            "debitis",
                                        },
                                        Weight: sdk.Float64(4426.68),
                                    },
                                },
                                Kind: sdk.String("eos"),
                            },
                        },
                        Rrdatas: []string{
                            "cumque",
                            "ut",
                            "quae",
                            "nihil",
                        },
                        SignatureRrdatas: []string{
                            "assumenda",
                            "consequatur",
                        },
                        TTL: sdk.Int(768692),
                        Type: sdk.String("placeat"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("adipisci"),
                        Name: sdk.String("Francis Barton"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dicta"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("impedit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("cum"),
                                                    Port: sdk.String("dolore"),
                                                    Project: sdk.String("illum"),
                                                    Region: sdk.String("ea"),
                                                },
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("corporis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("soluta"),
                                                    Port: sdk.String("cupiditate"),
                                                    Project: sdk.String("unde"),
                                                    Region: sdk.String("et"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quisquam"),
                                        Location: sdk.String("unde"),
                                        Rrdatas: []string{
                                            "suscipit",
                                        },
                                        SignatureRrdatas: []string{
                                            "pariatur",
                                            "nam",
                                            "quaerat",
                                            "corrupti",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fugit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("consequatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("id"),
                                                    Port: sdk.String("error"),
                                                    Project: sdk.String("ratione"),
                                                    Region: sdk.String("perferendis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("distinctio"),
                                        Location: sdk.String("voluptas"),
                                        Rrdatas: []string{
                                            "maiores",
                                            "nihil",
                                            "fuga",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequuntur",
                                            "maiores",
                                            "esse",
                                            "explicabo",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptates"),
                                                    Port: sdk.String("minus"),
                                                    Project: sdk.String("autem"),
                                                    Region: sdk.String("vel"),
                                                },
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
                                            },
                                        },
                                        Kind: sdk.String("ullam"),
                                        Location: sdk.String("unde"),
                                        Rrdatas: []string{
                                            "quidem",
                                            "magnam",
                                            "doloremque",
                                            "accusamus",
                                        },
                                        SignatureRrdatas: []string{
                                            "sunt",
                                            "voluptas",
                                            "earum",
                                            "est",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nihil"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("rerum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nam"),
                                                    Port: sdk.String("ullam"),
                                                    Project: sdk.String("ratione"),
                                                    Region: sdk.String("eos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("illum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("consectetur"),
                                                    Port: sdk.String("reprehenderit"),
                                                    Project: sdk.String("eligendi"),
                                                    Region: sdk.String("cum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("culpa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("a"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eius"),
                                                    Port: sdk.String("ad"),
                                                    Project: sdk.String("quia"),
                                                    Region: sdk.String("quod"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quaerat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("numquam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eligendi"),
                                                    Port: sdk.String("cupiditate"),
                                                    Project: sdk.String("tempore"),
                                                    Region: sdk.String("odit"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("est"),
                                        Location: sdk.String("at"),
                                        Rrdatas: []string{
                                            "explicabo",
                                        },
                                        SignatureRrdatas: []string{
                                            "est",
                                            "sapiente",
                                            "necessitatibus",
                                            "voluptatum",
                                        },
                                    },
                                },
                                Kind: sdk.String("quasi"),
                            },
                            Kind: sdk.String("mollitia"),
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
                                                        Kind: sdk.String("incidunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("ut"),
                                                        Port: sdk.String("enim"),
                                                        Project: sdk.String("nihil"),
                                                        Region: sdk.String("ratione"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("tenetur"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("quod"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("tempora"),
                                                        Port: sdk.String("quam"),
                                                        Project: sdk.String("consectetur"),
                                                        Region: sdk.String("nemo"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nesciunt"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("eum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("placeat"),
                                                        Port: sdk.String("quos"),
                                                        Project: sdk.String("sed"),
                                                        Region: sdk.String("eaque"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("natus"),
                                            Location: sdk.String("ratione"),
                                            Rrdatas: []string{
                                                "unde",
                                                "deserunt",
                                            },
                                            SignatureRrdatas: []string{
                                                "ex",
                                                "occaecati",
                                                "optio",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ad"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("nam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("sapiente"),
                                                        Port: sdk.String("quam"),
                                                        Project: sdk.String("occaecati"),
                                                        Region: sdk.String("repellendus"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("culpa"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("rem"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("odio"),
                                                        Port: sdk.String("totam"),
                                                        Project: sdk.String("magni"),
                                                        Region: sdk.String("eos"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("harum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("omnis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quos"),
                                                        Port: sdk.String("natus"),
                                                        Project: sdk.String("aliquam"),
                                                        Region: sdk.String("vero"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nisi"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("eum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("animi"),
                                                        Port: sdk.String("possimus"),
                                                        Project: sdk.String("libero"),
                                                        Region: sdk.String("ullam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("quaerat"),
                                            Location: sdk.String("maiores"),
                                            Rrdatas: []string{
                                                "accusamus",
                                                "ipsam",
                                                "fugiat",
                                            },
                                            SignatureRrdatas: []string{
                                                "ullam",
                                                "inventore",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("occaecati"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("necessitatibus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("a"),
                                                        Port: sdk.String("nihil"),
                                                        Project: sdk.String("veniam"),
                                                        Region: sdk.String("aut"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("magni"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("voluptatibus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quod"),
                                                        Port: sdk.String("non"),
                                                        Project: sdk.String("dolore"),
                                                        Region: sdk.String("enim"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("alias"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("modi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("a"),
                                                        Port: sdk.String("et"),
                                                        Project: sdk.String("molestiae"),
                                                        Region: sdk.String("autem"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("dolore"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("nostrum"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("amet"),
                                                        Port: sdk.String("voluptate"),
                                                        Project: sdk.String("molestias"),
                                                        Region: sdk.String("voluptatibus"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("ipsum"),
                                            Location: sdk.String("hic"),
                                            Rrdatas: []string{
                                                "odit",
                                                "molestiae",
                                                "accusamus",
                                            },
                                            SignatureRrdatas: []string{
                                                "inventore",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("doloribus"),
                                },
                                Kind: sdk.String("praesentium"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("consequuntur"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("nemo"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("soluta"),
                                            Port: sdk.String("ipsum"),
                                            Project: sdk.String("vel"),
                                            Region: sdk.String("delectus"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("maxime"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("distinctio"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("hic"),
                                            Port: sdk.String("quis"),
                                            Project: sdk.String("deleniti"),
                                            Region: sdk.String("iusto"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(8021.48),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magni"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("minus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quam"),
                                                    Port: sdk.String("ea"),
                                                    Project: sdk.String("numquam"),
                                                    Region: sdk.String("architecto"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fuga"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("velit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sed"),
                                                    Port: sdk.String("officiis"),
                                                    Project: sdk.String("veniam"),
                                                    Region: sdk.String("quae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolore"),
                                        Rrdatas: []string{
                                            "libero",
                                            "ut",
                                        },
                                        SignatureRrdatas: []string{
                                            "quia",
                                            "beatae",
                                            "porro",
                                            "cumque",
                                        },
                                        Weight: sdk.Float64(7149.33),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fugit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("culpa"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("minus"),
                                                    Port: sdk.String("vero"),
                                                    Project: sdk.String("impedit"),
                                                    Region: sdk.String("omnis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("et"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("fuga"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("distinctio"),
                                                    Port: sdk.String("fugiat"),
                                                    Project: sdk.String("nulla"),
                                                    Region: sdk.String("totam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("praesentium"),
                                        Rrdatas: []string{
                                            "esse",
                                            "vitae",
                                            "delectus",
                                            "laboriosam",
                                        },
                                        SignatureRrdatas: []string{
                                            "labore",
                                            "quas",
                                            "sed",
                                            "veniam",
                                        },
                                        Weight: sdk.Float64(1494.14),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("perferendis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eius"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("consequatur"),
                                                    Port: sdk.String("iste"),
                                                    Project: sdk.String("accusamus"),
                                                    Region: sdk.String("repellat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptatum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("consequuntur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellendus"),
                                                    Port: sdk.String("voluptates"),
                                                    Project: sdk.String("illo"),
                                                    Region: sdk.String("facere"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("fugiat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("aut"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("voluptate"),
                                                    Port: sdk.String("tempore"),
                                                    Project: sdk.String("ullam"),
                                                    Region: sdk.String("illum"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("mollitia"),
                                        Rrdatas: []string{
                                            "quos",
                                        },
                                        SignatureRrdatas: []string{
                                            "ullam",
                                            "in",
                                            "doloribus",
                                            "id",
                                        },
                                        Weight: sdk.Float64(4293.44),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("similique"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("architecto"),
                                                    Port: sdk.String("ea"),
                                                    Project: sdk.String("accusamus"),
                                                    Region: sdk.String("illo"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("excepturi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laborum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repudiandae"),
                                                    Port: sdk.String("minus"),
                                                    Project: sdk.String("officia"),
                                                    Region: sdk.String("laboriosam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("illo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("veritatis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("excepturi"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("dicta"),
                                                    Region: sdk.String("magnam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("doloremque"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("suscipit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("maiores"),
                                                    Port: sdk.String("delectus"),
                                                    Project: sdk.String("quos"),
                                                    Region: sdk.String("id"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("officiis"),
                                        Rrdatas: []string{
                                            "voluptate",
                                        },
                                        SignatureRrdatas: []string{
                                            "itaque",
                                        },
                                        Weight: sdk.Float64(9970.47),
                                    },
                                },
                                Kind: sdk.String("voluptatem"),
                            },
                        },
                        Rrdatas: []string{
                            "distinctio",
                        },
                        SignatureRrdatas: []string{
                            "a",
                            "neque",
                        },
                        TTL: sdk.Int(469567),
                        Type: sdk.String("recusandae"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("numquam"),
                        Name: sdk.String("Angelo Labadie"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("corporis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("ea"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("voluptate"),
                                                    Port: sdk.String("nesciunt"),
                                                    Project: sdk.String("magni"),
                                                    Region: sdk.String("animi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolorum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("temporibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("tempore"),
                                                    Port: sdk.String("commodi"),
                                                    Project: sdk.String("autem"),
                                                    Region: sdk.String("praesentium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("magni"),
                                        Location: sdk.String("quisquam"),
                                        Rrdatas: []string{
                                            "in",
                                            "eaque",
                                            "delectus",
                                        },
                                        SignatureRrdatas: []string{
                                            "minus",
                                            "tenetur",
                                            "assumenda",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("a"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("laboriosam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("occaecati"),
                                                    Port: sdk.String("dicta"),
                                                    Project: sdk.String("quidem"),
                                                    Region: sdk.String("omnis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laborum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("a"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("labore"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("dolore"),
                                                    Region: sdk.String("aliquid"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("repudiandae"),
                                        Location: sdk.String("aspernatur"),
                                        Rrdatas: []string{
                                            "dolorem",
                                            "neque",
                                            "ipsa",
                                            "excepturi",
                                        },
                                        SignatureRrdatas: []string{
                                            "soluta",
                                            "aut",
                                            "ullam",
                                            "amet",
                                        },
                                    },
                                },
                                Kind: sdk.String("iure"),
                            },
                            Kind: sdk.String("quibusdam"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nihil"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("eligendi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("consequatur"),
                                                        Port: sdk.String("sit"),
                                                        Project: sdk.String("iure"),
                                                        Region: sdk.String("earum"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("omnis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quo"),
                                                        Port: sdk.String("et"),
                                                        Project: sdk.String("illo"),
                                                        Region: sdk.String("est"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quia"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("est"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("cum"),
                                                        Port: sdk.String("maiores"),
                                                        Project: sdk.String("provident"),
                                                        Region: sdk.String("sunt"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("maiores"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("ducimus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("aspernatur"),
                                                        Port: sdk.String("molestias"),
                                                        Project: sdk.String("fuga"),
                                                        Region: sdk.String("at"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("unde"),
                                            Location: sdk.String("laborum"),
                                            Rrdatas: []string{
                                                "hic",
                                                "corrupti",
                                                "soluta",
                                            },
                                            SignatureRrdatas: []string{
                                                "praesentium",
                                                "explicabo",
                                                "odit",
                                                "illo",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quia"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("velit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("provident"),
                                                        Port: sdk.String("possimus"),
                                                        Project: sdk.String("iste"),
                                                        Region: sdk.String("blanditiis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("consectetur"),
                                            Location: sdk.String("totam"),
                                            Rrdatas: []string{
                                                "repellat",
                                                "iusto",
                                            },
                                            SignatureRrdatas: []string{
                                                "voluptate",
                                                "cupiditate",
                                                "maxime",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nihil"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("optio"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("magni"),
                                                        Port: sdk.String("modi"),
                                                        Project: sdk.String("voluptatum"),
                                                        Region: sdk.String("dolore"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("possimus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("eos"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("quam"),
                                                        Port: sdk.String("eos"),
                                                        Project: sdk.String("omnis"),
                                                        Region: sdk.String("reiciendis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("qui"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("eligendi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("inventore"),
                                                        Port: sdk.String("necessitatibus"),
                                                        Project: sdk.String("tenetur"),
                                                        Region: sdk.String("exercitationem"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("nihil"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("quis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("dicta"),
                                                        Port: sdk.String("dicta"),
                                                        Project: sdk.String("eum"),
                                                        Region: sdk.String("sint"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("id"),
                                            Location: sdk.String("nobis"),
                                            Rrdatas: []string{
                                                "itaque",
                                            },
                                            SignatureRrdatas: []string{
                                                "vitae",
                                                "temporibus",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("voluptatum"),
                                },
                                Kind: sdk.String("deserunt"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("neque"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("consequuntur"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("saepe"),
                                            Port: sdk.String("amet"),
                                            Project: sdk.String("labore"),
                                            Region: sdk.String("repellat"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(1795),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("mollitia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("officia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("quam"),
                                                    Project: sdk.String("a"),
                                                    Region: sdk.String("iure"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nulla"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("iste"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("aspernatur"),
                                                    Port: sdk.String("et"),
                                                    Project: sdk.String("ipsam"),
                                                    Region: sdk.String("et"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("delectus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("architecto"),
                                                    Port: sdk.String("sed"),
                                                    Project: sdk.String("voluptatem"),
                                                    Region: sdk.String("perspiciatis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("error"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("enim"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("unde"),
                                                    Project: sdk.String("reiciendis"),
                                                    Region: sdk.String("quis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("modi"),
                                        Rrdatas: []string{
                                            "pariatur",
                                        },
                                        SignatureRrdatas: []string{
                                            "nemo",
                                            "dolore",
                                            "numquam",
                                        },
                                        Weight: sdk.Float64(2221.4),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("accusamus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("quia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ut"),
                                                    Port: sdk.String("non"),
                                                    Project: sdk.String("laboriosam"),
                                                    Region: sdk.String("accusantium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempora"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("dolorem"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("architecto"),
                                                    Project: sdk.String("minima"),
                                                    Region: sdk.String("magnam"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("asperiores"),
                                                    Project: sdk.String("corporis"),
                                                    Region: sdk.String("vel"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("accusamus"),
                                        Rrdatas: []string{
                                            "ipsam",
                                            "at",
                                            "culpa",
                                        },
                                        SignatureRrdatas: []string{
                                            "laudantium",
                                            "dolorem",
                                        },
                                        Weight: sdk.Float64(1377.24),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("mollitia"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("fugiat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("et"),
                                                    Port: sdk.String("odio"),
                                                    Project: sdk.String("eligendi"),
                                                    Region: sdk.String("nesciunt"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("harum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("pariatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("architecto"),
                                                    Port: sdk.String("culpa"),
                                                    Project: sdk.String("aliquam"),
                                                    Region: sdk.String("ut"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quidem"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("tempore"),
                                                    Port: sdk.String("deserunt"),
                                                    Project: sdk.String("nulla"),
                                                    Region: sdk.String("corrupti"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptate"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("iure"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("incidunt"),
                                                    Port: sdk.String("ea"),
                                                    Project: sdk.String("alias"),
                                                    Region: sdk.String("laudantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("qui"),
                                        Rrdatas: []string{
                                            "maiores",
                                            "nam",
                                            "pariatur",
                                        },
                                        SignatureRrdatas: []string{
                                            "modi",
                                            "vitae",
                                            "delectus",
                                            "delectus",
                                        },
                                        Weight: sdk.Float64(3677.12),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("magnam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("sed"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("saepe"),
                                                    Port: sdk.String("labore"),
                                                    Project: sdk.String("doloribus"),
                                                    Region: sdk.String("facilis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("minima"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("facilis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quis"),
                                                    Port: sdk.String("fugiat"),
                                                    Project: sdk.String("beatae"),
                                                    Region: sdk.String("dignissimos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nisi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("quos"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sunt"),
                                                    Port: sdk.String("repudiandae"),
                                                    Project: sdk.String("facere"),
                                                    Region: sdk.String("distinctio"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ducimus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("consectetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("provident"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("minus"),
                                                    Region: sdk.String("impedit"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("minima"),
                                        Rrdatas: []string{
                                            "rerum",
                                            "praesentium",
                                            "vel",
                                            "doloremque",
                                        },
                                        SignatureRrdatas: []string{
                                            "quas",
                                            "impedit",
                                            "illum",
                                            "ullam",
                                        },
                                        Weight: sdk.Float64(5072.55),
                                    },
                                },
                                Kind: sdk.String("perferendis"),
                            },
                        },
                        Rrdatas: []string{
                            "animi",
                            "molestiae",
                            "nesciunt",
                        },
                        SignatureRrdatas: []string{
                            "sunt",
                            "aperiam",
                            "itaque",
                        },
                        TTL: sdk.Int(310380),
                        Type: sdk.String("repellat"),
                    },
                },
            },
            RuleName: sdk.String("necessitatibus"),
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        ClientOperationID: sdk.String("voluptate"),
        Fields: sdk.String("magni"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        Project: "cumque",
        QuotaUser: sdk.String("pariatur"),
        ResponsePolicy: "non",
        ResponsePolicyRulePathParameter: "rerum",
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("illum"),
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
            Behavior: shared.ResponsePolicyRuleBehaviorEnumBehaviorUnspecified.ToPointer(),
            DNSName: sdk.String("expedita"),
            Kind: sdk.String("libero"),
            LocalData: &shared.ResponsePolicyRuleLocalData{
                LocalDatas: []shared.ResourceRecordSet{
                    shared.ResourceRecordSet{
                        Kind: sdk.String("repudiandae"),
                        Name: sdk.String("Debbie Kozey"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("reiciendis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("exercitationem"),
                                                    Port: sdk.String("voluptatem"),
                                                    Project: sdk.String("beatae"),
                                                    Region: sdk.String("qui"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laboriosam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("in"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nobis"),
                                                    Port: sdk.String("voluptatibus"),
                                                    Project: sdk.String("tenetur"),
                                                    Region: sdk.String("facilis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("facere"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("molestiae"),
                                                    Port: sdk.String("quaerat"),
                                                    Project: sdk.String("distinctio"),
                                                    Region: sdk.String("blanditiis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quaerat"),
                                        Location: sdk.String("odit"),
                                        Rrdatas: []string{
                                            "unde",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolorem",
                                            "rerum",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempora"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nulla"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quisquam"),
                                                    Port: sdk.String("labore"),
                                                    Project: sdk.String("sequi"),
                                                    Region: sdk.String("veritatis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veniam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("assumenda"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("velit"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("veniam"),
                                                    Region: sdk.String("provident"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nostrum"),
                                        Location: sdk.String("dolor"),
                                        Rrdatas: []string{
                                            "consequatur",
                                            "accusantium",
                                            "dicta",
                                            "illo",
                                        },
                                        SignatureRrdatas: []string{
                                            "occaecati",
                                        },
                                    },
                                },
                                Kind: sdk.String("quos"),
                            },
                            Kind: sdk.String("aliquid"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("fuga"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("et"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("aliquid"),
                                                        Port: sdk.String("optio"),
                                                        Project: sdk.String("adipisci"),
                                                        Region: sdk.String("ab"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("maxime"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("explicabo"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("dicta"),
                                                        Port: sdk.String("hic"),
                                                        Project: sdk.String("porro"),
                                                        Region: sdk.String("tempore"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ullam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("quisquam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("id"),
                                                        Port: sdk.String("ut"),
                                                        Project: sdk.String("et"),
                                                        Region: sdk.String("reiciendis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("reiciendis"),
                                            Location: sdk.String("distinctio"),
                                            Rrdatas: []string{
                                                "iste",
                                                "quod",
                                                "quidem",
                                                "temporibus",
                                            },
                                            SignatureRrdatas: []string{
                                                "natus",
                                                "ipsam",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("repudiandae"),
                                },
                                Kind: sdk.String("earum"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("veniam"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("doloremque"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("aliquid"),
                                            Port: sdk.String("porro"),
                                            Project: sdk.String("quisquam"),
                                            Region: sdk.String("molestiae"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("mollitia"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("delectus"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("beatae"),
                                            Port: sdk.String("suscipit"),
                                            Project: sdk.String("eveniet"),
                                            Region: sdk.String("mollitia"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(3688.49),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("inventore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("modi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("provident"),
                                                    Port: sdk.String("non"),
                                                    Project: sdk.String("dolore"),
                                                    Region: sdk.String("soluta"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("occaecati"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("asperiores"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("officiis"),
                                                    Port: sdk.String("sit"),
                                                    Project: sdk.String("occaecati"),
                                                    Region: sdk.String("nulla"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ab"),
                                        Rrdatas: []string{
                                            "possimus",
                                            "magni",
                                            "a",
                                        },
                                        SignatureRrdatas: []string{
                                            "explicabo",
                                            "delectus",
                                            "natus",
                                            "earum",
                                        },
                                        Weight: sdk.Float64(1482.48),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vitae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("nemo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("numquam"),
                                                    Port: sdk.String("numquam"),
                                                    Project: sdk.String("tempore"),
                                                    Region: sdk.String("molestias"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("amet"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("illum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("adipisci"),
                                                    Port: sdk.String("reprehenderit"),
                                                    Project: sdk.String("id"),
                                                    Region: sdk.String("ducimus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dolores"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("occaecati"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("blanditiis"),
                                                    Port: sdk.String("magnam"),
                                                    Project: sdk.String("excepturi"),
                                                    Region: sdk.String("fugiat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("laboriosam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quaerat"),
                                                    Port: sdk.String("id"),
                                                    Project: sdk.String("eveniet"),
                                                    Region: sdk.String("optio"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("soluta"),
                                        Rrdatas: []string{
                                            "nemo",
                                            "neque",
                                        },
                                        SignatureRrdatas: []string{
                                            "placeat",
                                            "at",
                                        },
                                        Weight: sdk.Float64(5678.21),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odit"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("maxime"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sapiente"),
                                                    Port: sdk.String("maiores"),
                                                    Project: sdk.String("exercitationem"),
                                                    Region: sdk.String("ducimus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("dolore"),
                                        Rrdatas: []string{
                                            "inventore",
                                            "error",
                                            "id",
                                        },
                                        SignatureRrdatas: []string{
                                            "sapiente",
                                            "laborum",
                                            "aspernatur",
                                        },
                                        Weight: sdk.Float64(8752.82),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("tenetur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quo"),
                                                    Port: sdk.String("id"),
                                                    Project: sdk.String("tempora"),
                                                    Region: sdk.String("pariatur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("aliquid"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("reiciendis"),
                                                    Port: sdk.String("dicta"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("adipisci"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("inventore"),
                                        Rrdatas: []string{
                                            "iure",
                                            "praesentium",
                                            "perspiciatis",
                                            "omnis",
                                        },
                                        SignatureRrdatas: []string{
                                            "accusantium",
                                            "minus",
                                            "explicabo",
                                            "accusantium",
                                        },
                                        Weight: sdk.Float64(557.9),
                                    },
                                },
                                Kind: sdk.String("quasi"),
                            },
                        },
                        Rrdatas: []string{
                            "quia",
                            "aspernatur",
                            "minus",
                            "illum",
                        },
                        SignatureRrdatas: []string{
                            "exercitationem",
                            "quod",
                        },
                        TTL: sdk.Int(800598),
                        Type: sdk.String("alias"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("nemo"),
                        Name: sdk.String("Ms. Edwin Murphy"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("voluptas"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("omnis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("vitae"),
                                                    Port: sdk.String("reiciendis"),
                                                    Project: sdk.String("cumque"),
                                                    Region: sdk.String("atque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("explicabo"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("eligendi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("enim"),
                                                    Port: sdk.String("harum"),
                                                    Project: sdk.String("aut"),
                                                    Region: sdk.String("consectetur"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("in"),
                                        Location: sdk.String("rerum"),
                                        Rrdatas: []string{
                                            "blanditiis",
                                            "saepe",
                                            "sit",
                                        },
                                        SignatureRrdatas: []string{
                                            "impedit",
                                            "corrupti",
                                            "quas",
                                            "ullam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quas"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("officiis"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nulla"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("consequatur"),
                                                    Region: sdk.String("ut"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("laborum"),
                                        Location: sdk.String("hic"),
                                        Rrdatas: []string{
                                            "corrupti",
                                        },
                                        SignatureRrdatas: []string{
                                            "ad",
                                            "quibusdam",
                                            "facere",
                                            "pariatur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("labore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("mollitia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quasi"),
                                                    Port: sdk.String("quo"),
                                                    Project: sdk.String("voluptatibus"),
                                                    Region: sdk.String("illum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ea"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("corrupti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("blanditiis"),
                                                    Port: sdk.String("assumenda"),
                                                    Project: sdk.String("culpa"),
                                                    Region: sdk.String("ipsa"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("inventore"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("et"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("inventore"),
                                                    Port: sdk.String("vitae"),
                                                    Project: sdk.String("qui"),
                                                    Region: sdk.String("unde"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ex"),
                                        Location: sdk.String("quaerat"),
                                        Rrdatas: []string{
                                            "eum",
                                            "quaerat",
                                        },
                                        SignatureRrdatas: []string{
                                            "cumque",
                                            "ab",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("blanditiis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("delectus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("iste"),
                                                    Port: sdk.String("perferendis"),
                                                    Project: sdk.String("magnam"),
                                                    Region: sdk.String("aspernatur"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("sapiente"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("laboriosam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quidem"),
                                                    Port: sdk.String("iusto"),
                                                    Project: sdk.String("culpa"),
                                                    Region: sdk.String("reiciendis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("a"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptates"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("fugit"),
                                                    Port: sdk.String("eos"),
                                                    Project: sdk.String("veritatis"),
                                                    Region: sdk.String("vel"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("placeat"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("saepe"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dignissimos"),
                                                    Port: sdk.String("veritatis"),
                                                    Project: sdk.String("harum"),
                                                    Region: sdk.String("cumque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ab"),
                                        Location: sdk.String("ex"),
                                        Rrdatas: []string{
                                            "officiis",
                                        },
                                        SignatureRrdatas: []string{
                                            "quam",
                                        },
                                    },
                                },
                                Kind: sdk.String("unde"),
                            },
                            Kind: sdk.String("harum"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("ipsa"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("aliquam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("dolorum"),
                                                        Port: sdk.String("omnis"),
                                                        Project: sdk.String("occaecati"),
                                                        Region: sdk.String("consequuntur"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("veniam"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("repellendus"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("incidunt"),
                                                        Port: sdk.String("asperiores"),
                                                        Project: sdk.String("eius"),
                                                        Region: sdk.String("ipsa"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quas"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("iusto"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("in"),
                                                        Port: sdk.String("numquam"),
                                                        Project: sdk.String("quia"),
                                                        Region: sdk.String("repellendus"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("blanditiis"),
                                            Location: sdk.String("ut"),
                                            Rrdatas: []string{
                                                "cupiditate",
                                                "nisi",
                                            },
                                            SignatureRrdatas: []string{
                                                "tempore",
                                                "facere",
                                                "earum",
                                                "debitis",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("impedit"),
                                },
                                Kind: sdk.String("reiciendis"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("tempore"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("provident"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("maxime"),
                                            Port: sdk.String("commodi"),
                                            Project: sdk.String("consectetur"),
                                            Region: sdk.String("corporis"),
                                        },
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
                                    },
                                },
                                TrickleTraffic: sdk.Float64(3686.58),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("iste"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("porro"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("ea"),
                                                    Port: sdk.String("consequatur"),
                                                    Project: sdk.String("nobis"),
                                                    Region: sdk.String("accusantium"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("ea"),
                                        Rrdatas: []string{
                                            "et",
                                            "fugit",
                                            "quos",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptate",
                                            "autem",
                                        },
                                        Weight: sdk.Float64(2528.8),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("debitis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("suscipit"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("doloremque"),
                                                    Port: sdk.String("porro"),
                                                    Project: sdk.String("suscipit"),
                                                    Region: sdk.String("temporibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("vel"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("nulla"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quod"),
                                                    Port: sdk.String("in"),
                                                    Project: sdk.String("nesciunt"),
                                                    Region: sdk.String("temporibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("temporibus"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("non"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("nostrum"),
                                                    Port: sdk.String("dignissimos"),
                                                    Project: sdk.String("illo"),
                                                    Region: sdk.String("corporis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ipsa"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("dolorum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("recusandae"),
                                                    Port: sdk.String("deleniti"),
                                                    Project: sdk.String("dignissimos"),
                                                    Region: sdk.String("doloremque"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quibusdam"),
                                        Rrdatas: []string{
                                            "minus",
                                        },
                                        SignatureRrdatas: []string{
                                            "id",
                                            "architecto",
                                        },
                                        Weight: sdk.Float64(9782.29),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quod"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("incidunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quisquam"),
                                                    Port: sdk.String("odio"),
                                                    Project: sdk.String("quidem"),
                                                    Region: sdk.String("iure"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquid"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("illo"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("ipsum"),
                                                    Port: sdk.String("doloremque"),
                                                    Project: sdk.String("quod"),
                                                    Region: sdk.String("dignissimos"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("non"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("repellat"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("quidem"),
                                                    Port: sdk.String("ea"),
                                                    Project: sdk.String("molestiae"),
                                                    Region: sdk.String("vitae"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("excepturi"),
                                        Rrdatas: []string{
                                            "iste",
                                            "eaque",
                                            "reiciendis",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequuntur",
                                            "est",
                                        },
                                        Weight: sdk.Float64(2723.96),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("expedita"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("adipisci"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("at"),
                                                    Port: sdk.String("rem"),
                                                    Project: sdk.String("exercitationem"),
                                                    Region: sdk.String("tempore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("aperiam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("dicta"),
                                                    Project: sdk.String("assumenda"),
                                                    Region: sdk.String("reprehenderit"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tempora"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("voluptates"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("eligendi"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("quae"),
                                                    Region: sdk.String("veniam"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("sint"),
                                        Rrdatas: []string{
                                            "excepturi",
                                            "porro",
                                            "nesciunt",
                                            "maiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "autem",
                                            "esse",
                                        },
                                        Weight: sdk.Float64(8871.67),
                                    },
                                },
                                Kind: sdk.String("aperiam"),
                            },
                        },
                        Rrdatas: []string{
                            "sed",
                            "corporis",
                            "consequuntur",
                            "odio",
                        },
                        SignatureRrdatas: []string{
                            "quis",
                            "nobis",
                        },
                        TTL: sdk.Int(107424),
                        Type: sdk.String("repellendus"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("ex"),
                        Name: sdk.String("Lucia Rolfson"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("architecto"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("consequatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("odit"),
                                                    Port: sdk.String("inventore"),
                                                    Project: sdk.String("laboriosam"),
                                                    Region: sdk.String("quod"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("repudiandae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("aspernatur"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("sint"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("deleniti"),
                                                    Region: sdk.String("earum"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("consequuntur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("minus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("accusantium"),
                                                    Port: sdk.String("nulla"),
                                                    Project: sdk.String("inventore"),
                                                    Region: sdk.String("omnis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("quibusdam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nostrum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("doloribus"),
                                                    Port: sdk.String("magnam"),
                                                    Project: sdk.String("adipisci"),
                                                    Region: sdk.String("natus"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("necessitatibus"),
                                        Location: sdk.String("velit"),
                                        Rrdatas: []string{
                                            "eos",
                                            "nisi",
                                            "commodi",
                                        },
                                        SignatureRrdatas: []string{
                                            "facilis",
                                            "temporibus",
                                            "error",
                                            "quaerat",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("molestiae"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("laborum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("rerum"),
                                                    Port: sdk.String("consequuntur"),
                                                    Project: sdk.String("magnam"),
                                                    Region: sdk.String("et"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("et"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("nisi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nostrum"),
                                                    Port: sdk.String("temporibus"),
                                                    Project: sdk.String("et"),
                                                    Region: sdk.String("debitis"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nisi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("excepturi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("repellat"),
                                                    Port: sdk.String("placeat"),
                                                    Project: sdk.String("eligendi"),
                                                    Region: sdk.String("quaerat"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("veniam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("commodi"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("dicta"),
                                                    Port: sdk.String("molestiae"),
                                                    Project: sdk.String("maxime"),
                                                    Region: sdk.String("dolores"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("molestias"),
                                        Location: sdk.String("quam"),
                                        Rrdatas: []string{
                                            "aliquid",
                                            "voluptate",
                                        },
                                        SignatureRrdatas: []string{
                                            "consectetur",
                                            "velit",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aspernatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("incidunt"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("adipisci"),
                                                    Port: sdk.String("atque"),
                                                    Project: sdk.String("tempore"),
                                                    Region: sdk.String("asperiores"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("distinctio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("cupiditate"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("et"),
                                                    Port: sdk.String("accusamus"),
                                                    Project: sdk.String("excepturi"),
                                                    Region: sdk.String("deleniti"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("inventore"),
                                        Location: sdk.String("perspiciatis"),
                                        Rrdatas: []string{
                                            "corporis",
                                        },
                                        SignatureRrdatas: []string{
                                            "molestiae",
                                            "adipisci",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("perspiciatis"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("itaque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nam"),
                                                    Port: sdk.String("id"),
                                                    Project: sdk.String("cumque"),
                                                    Region: sdk.String("in"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("a"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("culpa"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("occaecati"),
                                                    Port: sdk.String("exercitationem"),
                                                    Project: sdk.String("unde"),
                                                    Region: sdk.String("labore"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("pariatur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("laboriosam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("minus"),
                                                    Port: sdk.String("magni"),
                                                    Project: sdk.String("mollitia"),
                                                    Region: sdk.String("officiis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("aliquam"),
                                        Location: sdk.String("quas"),
                                        Rrdatas: []string{
                                            "autem",
                                        },
                                        SignatureRrdatas: []string{
                                            "explicabo",
                                        },
                                    },
                                },
                                Kind: sdk.String("rerum"),
                            },
                            Kind: sdk.String("iste"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("tempora"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("iure"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("id"),
                                                        Port: sdk.String("qui"),
                                                        Project: sdk.String("explicabo"),
                                                        Region: sdk.String("accusantium"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("eum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("commodi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("atque"),
                                                        Port: sdk.String("explicabo"),
                                                        Project: sdk.String("totam"),
                                                        Region: sdk.String("ipsam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("nemo"),
                                            Location: sdk.String("sequi"),
                                            Rrdatas: []string{
                                                "libero",
                                                "ab",
                                                "alias",
                                                "accusantium",
                                            },
                                            SignatureRrdatas: []string{
                                                "autem",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("necessitatibus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("incidunt"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("dolores"),
                                                        Port: sdk.String("illo"),
                                                        Project: sdk.String("recusandae"),
                                                        Region: sdk.String("quod"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("magni"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("voluptas"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("libero"),
                                                        Port: sdk.String("molestiae"),
                                                        Project: sdk.String("eius"),
                                                        Region: sdk.String("perspiciatis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("amet"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("aliquid"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quisquam"),
                                                        Port: sdk.String("rem"),
                                                        Project: sdk.String("eveniet"),
                                                        Region: sdk.String("eveniet"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("voluptatem"),
                                            Location: sdk.String("repellat"),
                                            Rrdatas: []string{
                                                "libero",
                                            },
                                            SignatureRrdatas: []string{
                                                "veritatis",
                                                "provident",
                                                "veniam",
                                                "quos",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("facere"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("doloremque"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("aut"),
                                                        Port: sdk.String("sequi"),
                                                        Project: sdk.String("reiciendis"),
                                                        Region: sdk.String("neque"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("assumenda"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("nobis"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("quia"),
                                                        Port: sdk.String("natus"),
                                                        Project: sdk.String("molestiae"),
                                                        Region: sdk.String("facilis"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("earum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("itaque"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("consequatur"),
                                                        Port: sdk.String("harum"),
                                                        Project: sdk.String("nobis"),
                                                        Region: sdk.String("numquam"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("consequatur"),
                                            Location: sdk.String("temporibus"),
                                            Rrdatas: []string{
                                                "quos",
                                                "commodi",
                                                "blanditiis",
                                                "voluptatibus",
                                            },
                                            SignatureRrdatas: []string{
                                                "nemo",
                                                "ratione",
                                                "dolore",
                                                "perferendis",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("enim"),
                                },
                                Kind: sdk.String("impedit"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("dolor"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("vitae"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("numquam"),
                                            Port: sdk.String("provident"),
                                            Project: sdk.String("quia"),
                                            Region: sdk.String("reiciendis"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("modi"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("et"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("iusto"),
                                            Port: sdk.String("a"),
                                            Project: sdk.String("quidem"),
                                            Region: sdk.String("aperiam"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("saepe"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("soluta"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("beatae"),
                                            Port: sdk.String("delectus"),
                                            Project: sdk.String("deleniti"),
                                            Region: sdk.String("fugit"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(793.22),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("dignissimos"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nulla"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("similique"),
                                                    Port: sdk.String("eligendi"),
                                                    Project: sdk.String("impedit"),
                                                    Region: sdk.String("officia"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("odio"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("mollitia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("tempore"),
                                                    Port: sdk.String("voluptate"),
                                                    Project: sdk.String("cum"),
                                                    Region: sdk.String("esse"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("alias"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("architecto"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nemo"),
                                                    Port: sdk.String("magni"),
                                                    Project: sdk.String("quae"),
                                                    Region: sdk.String("quaerat"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("suscipit"),
                                        Rrdatas: []string{
                                            "laboriosam",
                                            "aliquam",
                                            "repudiandae",
                                        },
                                        SignatureRrdatas: []string{
                                            "excepturi",
                                            "voluptatibus",
                                            "facilis",
                                        },
                                        Weight: sdk.Float64(431.18),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nisi"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("necessitatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("provident"),
                                                    Port: sdk.String("ut"),
                                                    Project: sdk.String("hic"),
                                                    Region: sdk.String("facere"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("tenetur"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("assumenda"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("exercitationem"),
                                                    Port: sdk.String("dolore"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("recusandae"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("a"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("neque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("velit"),
                                                    Port: sdk.String("ut"),
                                                    Project: sdk.String("est"),
                                                    Region: sdk.String("quasi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("rerum"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("sapiente"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("perspiciatis"),
                                                    Port: sdk.String("natus"),
                                                    Project: sdk.String("reprehenderit"),
                                                    Region: sdk.String("dolorem"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("sunt"),
                                        Rrdatas: []string{
                                            "nulla",
                                            "cumque",
                                            "aperiam",
                                        },
                                        SignatureRrdatas: []string{
                                            "fugiat",
                                            "quas",
                                        },
                                        Weight: sdk.Float64(3363.14),
                                    },
                                },
                                Kind: sdk.String("fuga"),
                            },
                        },
                        Rrdatas: []string{
                            "consequuntur",
                            "illum",
                            "delectus",
                            "rerum",
                        },
                        SignatureRrdatas: []string{
                            "perferendis",
                            "maiores",
                        },
                        TTL: sdk.Int(691666),
                        Type: sdk.String("ratione"),
                    },
                    shared.ResourceRecordSet{
                        Kind: sdk.String("molestias"),
                        Name: sdk.String("Elaine Cummerata PhD"),
                        RoutingPolicy: &shared.RRSetRoutingPolicy{
                            Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: sdk.Bool(false),
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ex"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("eum"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("officiis"),
                                                    Port: sdk.String("quo"),
                                                    Project: sdk.String("culpa"),
                                                    Region: sdk.String("architecto"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("iure"),
                                        Location: sdk.String("eveniet"),
                                        Rrdatas: []string{
                                            "praesentium",
                                            "iste",
                                            "tempora",
                                            "ad",
                                        },
                                        SignatureRrdatas: []string{
                                            "harum",
                                        },
                                    },
                                },
                                Kind: sdk.String("facere"),
                            },
                            Kind: sdk.String("ducimus"),
                            PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                                BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                    EnableFencing: sdk.Bool(false),
                                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("officiis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                        Kind: sdk.String("nam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("veritatis"),
                                                        Port: sdk.String("molestias"),
                                                        Project: sdk.String("impedit"),
                                                        Region: sdk.String("modi"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("possimus"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("architecto"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("est"),
                                                        Port: sdk.String("repellendus"),
                                                        Project: sdk.String("dolor"),
                                                        Region: sdk.String("nemo"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("quis"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("odit"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("doloremque"),
                                                        Port: sdk.String("laboriosam"),
                                                        Project: sdk.String("nulla"),
                                                        Region: sdk.String("dolore"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("itaque"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("nam"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("consequuntur"),
                                                        Port: sdk.String("sapiente"),
                                                        Project: sdk.String("alias"),
                                                        Region: sdk.String("doloribus"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("nemo"),
                                            Location: sdk.String("dolore"),
                                            Rrdatas: []string{
                                                "exercitationem",
                                                "commodi",
                                                "laudantium",
                                            },
                                            SignatureRrdatas: []string{
                                                "consequatur",
                                                "incidunt",
                                                "dolores",
                                            },
                                        },
                                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("earum"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                        Kind: sdk.String("voluptatem"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                        NetworkURL: sdk.String("architecto"),
                                                        Port: sdk.String("quibusdam"),
                                                        Project: sdk.String("autem"),
                                                        Region: sdk.String("voluptates"),
                                                    },
                                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                        IPAddress: sdk.String("tempore"),
                                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                        Kind: sdk.String("modi"),
                                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                        NetworkURL: sdk.String("aliquam"),
                                                        Port: sdk.String("ea"),
                                                        Project: sdk.String("aliquam"),
                                                        Region: sdk.String("corporis"),
                                                    },
                                                },
                                            },
                                            Kind: sdk.String("at"),
                                            Location: sdk.String("ipsa"),
                                            Rrdatas: []string{
                                                "aut",
                                            },
                                            SignatureRrdatas: []string{
                                                "quaerat",
                                                "repellat",
                                                "expedita",
                                            },
                                        },
                                    },
                                    Kind: sdk.String("libero"),
                                },
                                Kind: sdk.String("mollitia"),
                                PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("cumque"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("vero"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("tenetur"),
                                            Port: sdk.String("ipsam"),
                                            Project: sdk.String("quod"),
                                            Region: sdk.String("facilis"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("doloremque"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("reiciendis"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                            NetworkURL: sdk.String("enim"),
                                            Port: sdk.String("quasi"),
                                            Project: sdk.String("accusamus"),
                                            Region: sdk.String("ipsam"),
                                        },
                                    },
                                },
                                TrickleTraffic: sdk.Float64(1344.12),
                            },
                            Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                                Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("eius"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("mollitia"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("quos"),
                                                    Port: sdk.String("explicabo"),
                                                    Project: sdk.String("distinctio"),
                                                    Region: sdk.String("praesentium"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("ullam"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("corrupti"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("placeat"),
                                                    Port: sdk.String("explicabo"),
                                                    Project: sdk.String("placeat"),
                                                    Region: sdk.String("animi"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("expedita"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("atque"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("laborum"),
                                                    Port: sdk.String("magnam"),
                                                    Project: sdk.String("veritatis"),
                                                    Region: sdk.String("fugit"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("nihil"),
                                        Rrdatas: []string{
                                            "nulla",
                                            "nemo",
                                            "omnis",
                                            "iure",
                                        },
                                        SignatureRrdatas: []string{
                                            "sapiente",
                                            "eius",
                                            "esse",
                                            "quasi",
                                        },
                                        Weight: sdk.Float64(816.13),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("id"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("distinctio"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("nihil"),
                                                    Port: sdk.String("numquam"),
                                                    Project: sdk.String("rerum"),
                                                    Region: sdk.String("atque"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("aliquid"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                                    Kind: sdk.String("necessitatibus"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("impedit"),
                                                    Port: sdk.String("ducimus"),
                                                    Project: sdk.String("incidunt"),
                                                    Region: sdk.String("voluptatibus"),
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("nihil"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                                    Kind: sdk.String("nam"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                                    NetworkURL: sdk.String("deleniti"),
                                                    Port: sdk.String("aliquam"),
                                                    Project: sdk.String("totam"),
                                                    Region: sdk.String("soluta"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quibusdam"),
                                        Rrdatas: []string{
                                            "mollitia",
                                            "autem",
                                        },
                                        SignatureRrdatas: []string{
                                            "perferendis",
                                            "tempora",
                                            "aliquam",
                                            "architecto",
                                        },
                                        Weight: sdk.Float64(8603.83),
                                    },
                                    shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: sdk.String("maxime"),
                                                    IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                                    Kind: sdk.String("soluta"),
                                                    LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb.ToPointer(),
                                                    NetworkURL: sdk.String("sit"),
                                                    Port: sdk.String("laudantium"),
                                                    Project: sdk.String("sit"),
                                                    Region: sdk.String("perspiciatis"),
                                                },
                                            },
                                        },
                                        Kind: sdk.String("quaerat"),
                                        Rrdatas: []string{
                                            "molestiae",
                                        },
                                        SignatureRrdatas: []string{
                                            "eveniet",
                                        },
                                        Weight: sdk.Float64(569.56),
                                    },
                                },
                                Kind: sdk.String("laboriosam"),
                            },
                        },
                        Rrdatas: []string{
                            "labore",
                        },
                        SignatureRrdatas: []string{
                            "excepturi",
                            "soluta",
                        },
                        TTL: sdk.Int(914695),
                        Type: sdk.String("rerum"),
                    },
                },
            },
            RuleName: sdk.String("cum"),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        ClientOperationID: sdk.String("qui"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        Project: "corrupti",
        QuotaUser: sdk.String("iure"),
        ResponsePolicy: "quidem",
        ResponsePolicyRulePathParameter: "quod",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("et"),
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
