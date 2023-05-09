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
            Kind: sdk.String("eum"),
            Name: sdk.String("Ms. Desiree Douglas"),
            RoutingPolicy: &shared.RRSetRoutingPolicy{
                Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptates"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("dicta"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("sit"),
                                        Port: sdk.String("aliquid"),
                                        Project: sdk.String("necessitatibus"),
                                        Region: sdk.String("sed"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("deleniti"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("nesciunt"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("laborum"),
                                        Port: sdk.String("aliquam"),
                                        Project: sdk.String("deserunt"),
                                        Region: sdk.String("modi"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sunt"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("eius"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("ipsa"),
                                        Port: sdk.String("at"),
                                        Project: sdk.String("dolorem"),
                                        Region: sdk.String("repellat"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("aspernatur"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("sequi"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("fuga"),
                                        Port: sdk.String("hic"),
                                        Project: sdk.String("eaque"),
                                        Region: sdk.String("dolorem"),
                                    },
                                },
                            },
                            Kind: sdk.String("architecto"),
                            Location: sdk.String("aperiam"),
                            Rrdatas: []string{
                                "nulla",
                            },
                            SignatureRrdatas: []string{
                                "illo",
                                "magnam",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("numquam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("nobis"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("repellat"),
                                        Port: sdk.String("quae"),
                                        Project: sdk.String("deleniti"),
                                        Region: sdk.String("expedita"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("hic"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("aliquid"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("beatae"),
                                        Port: sdk.String("similique"),
                                        Project: sdk.String("ea"),
                                        Region: sdk.String("animi"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("dolore"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("dignissimos"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("animi"),
                                        Port: sdk.String("laudantium"),
                                        Project: sdk.String("esse"),
                                        Region: sdk.String("eveniet"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("earum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("officiis"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("rerum"),
                                        Port: sdk.String("itaque"),
                                        Project: sdk.String("dignissimos"),
                                        Region: sdk.String("ipsam"),
                                    },
                                },
                            },
                            Kind: sdk.String("explicabo"),
                            Location: sdk.String("impedit"),
                            Rrdatas: []string{
                                "quis",
                                "facilis",
                            },
                            SignatureRrdatas: []string{
                                "ut",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("architecto"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("eveniet"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("expedita"),
                                        Port: sdk.String("libero"),
                                        Project: sdk.String("iste"),
                                        Region: sdk.String("illo"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("minus"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("temporibus"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("iusto"),
                                        Port: sdk.String("enim"),
                                        Project: sdk.String("accusamus"),
                                        Region: sdk.String("aperiam"),
                                    },
                                },
                            },
                            Kind: sdk.String("voluptates"),
                            Location: sdk.String("laudantium"),
                            Rrdatas: []string{
                                "quae",
                                "omnis",
                            },
                            SignatureRrdatas: []string{
                                "rem",
                                "tenetur",
                                "deleniti",
                                "modi",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("architecto"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("labore"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("sequi"),
                                        Port: sdk.String("saepe"),
                                        Project: sdk.String("consequatur"),
                                        Region: sdk.String("esse"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("debitis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("quisquam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("aliquam"),
                                        Port: sdk.String("dolorum"),
                                        Project: sdk.String("deserunt"),
                                        Region: sdk.String("ad"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("reiciendis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("porro"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("nobis"),
                                        Port: sdk.String("quibusdam"),
                                        Project: sdk.String("omnis"),
                                        Region: sdk.String("aut"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ipsam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("cupiditate"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("quia"),
                                        Port: sdk.String("necessitatibus"),
                                        Project: sdk.String("accusantium"),
                                        Region: sdk.String("ad"),
                                    },
                                },
                            },
                            Kind: sdk.String("nisi"),
                            Location: sdk.String("molestiae"),
                            Rrdatas: []string{
                                "laudantium",
                            },
                            SignatureRrdatas: []string{
                                "odit",
                            },
                        },
                    },
                    Kind: sdk.String("iusto"),
                },
                Kind: sdk.String("expedita"),
                PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                    BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                        EnableFencing: sdk.Bool(false),
                        Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("nesciunt"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                            Kind: sdk.String("sint"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("esse"),
                                            Port: sdk.String("accusantium"),
                                            Project: sdk.String("distinctio"),
                                            Region: sdk.String("sapiente"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("quam"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("aliquam"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("culpa"),
                                            Port: sdk.String("voluptatum"),
                                            Project: sdk.String("iusto"),
                                            Region: sdk.String("quod"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("voluptatibus"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("non"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("laborum"),
                                            Port: sdk.String("voluptas"),
                                            Project: sdk.String("doloribus"),
                                            Region: sdk.String("animi"),
                                        },
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("recusandae"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("non"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                            NetworkURL: sdk.String("distinctio"),
                                            Port: sdk.String("maiores"),
                                            Project: sdk.String("laboriosam"),
                                            Region: sdk.String("voluptatem"),
                                        },
                                    },
                                },
                                Kind: sdk.String("optio"),
                                Location: sdk.String("sequi"),
                                Rrdatas: []string{
                                    "vitae",
                                },
                                SignatureRrdatas: []string{
                                    "doloremque",
                                    "sed",
                                    "amet",
                                    "rerum",
                                },
                            },
                        },
                        Kind: sdk.String("in"),
                    },
                    Kind: sdk.String("nostrum"),
                    PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("ratione"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("nisi"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("reiciendis"),
                                Port: sdk.String("itaque"),
                                Project: sdk.String("vitae"),
                                Region: sdk.String("est"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("accusantium"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                Kind: sdk.String("minus"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                NetworkURL: sdk.String("possimus"),
                                Port: sdk.String("maiores"),
                                Project: sdk.String("odio"),
                                Region: sdk.String("provident"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("sapiente"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("similique"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("provident"),
                                Port: sdk.String("ex"),
                                Project: sdk.String("repellendus"),
                                Region: sdk.String("unde"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("alias"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                Kind: sdk.String("sequi"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("labore"),
                                Port: sdk.String("expedita"),
                                Project: sdk.String("in"),
                                Region: sdk.String("quisquam"),
                            },
                        },
                    },
                    TrickleTraffic: sdk.Float64(1237.95),
                },
                Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("maiores"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("mollitia"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("accusamus"),
                                        Port: sdk.String("et"),
                                        Project: sdk.String("quas"),
                                        Region: sdk.String("blanditiis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("cum"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("impedit"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("eveniet"),
                                        Port: sdk.String("repudiandae"),
                                        Project: sdk.String("sed"),
                                        Region: sdk.String("impedit"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quas"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("vel"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("recusandae"),
                                        Port: sdk.String("ex"),
                                        Project: sdk.String("beatae"),
                                        Region: sdk.String("veritatis"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("maiores"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("vero"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("illo"),
                                        Port: sdk.String("quo"),
                                        Project: sdk.String("dignissimos"),
                                        Region: sdk.String("minus"),
                                    },
                                },
                            },
                            Kind: sdk.String("distinctio"),
                            Rrdatas: []string{
                                "cum",
                                "suscipit",
                                "saepe",
                                "earum",
                            },
                            SignatureRrdatas: []string{
                                "nihil",
                                "quaerat",
                                "ipsum",
                                "ducimus",
                            },
                            Weight: sdk.Float64(5146.25),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("deserunt"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("ad"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("beatae"),
                                        Port: sdk.String("iusto"),
                                        Project: sdk.String("esse"),
                                        Region: sdk.String("magnam"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("odio"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("impedit"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("illo"),
                                        Port: sdk.String("exercitationem"),
                                        Project: sdk.String("laborum"),
                                        Region: sdk.String("illum"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("fugit"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("dolorum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("nostrum"),
                                        Port: sdk.String("illum"),
                                        Project: sdk.String("quibusdam"),
                                        Region: sdk.String("commodi"),
                                    },
                                },
                            },
                            Kind: sdk.String("esse"),
                            Rrdatas: []string{
                                "consectetur",
                            },
                            SignatureRrdatas: []string{
                                "optio",
                                "ipsa",
                                "maiores",
                                "exercitationem",
                            },
                            Weight: sdk.Float64(6336.43),
                        },
                    },
                    Kind: sdk.String("repudiandae"),
                },
            },
            Rrdatas: []string{
                "sapiente",
            },
            SignatureRrdatas: []string{
                "officia",
            },
            TTL: sdk.Int(379661),
            Type: sdk.String("harum"),
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        ClientOperationID: sdk.String("laudantium"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("corrupti"),
        Location: "molestiae",
        ManagedZone: "quis",
        OauthToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        Project: "ab",
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("sapiente"),
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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        ClientOperationID: sdk.String("provident"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("nam"),
        Location: "nemo",
        ManagedZone: "enim",
        Name: "Ms. Lorraine Goodwin PhD",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        Project: "doloremque",
        QuotaUser: sdk.String("cum"),
        Type: "nobis",
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("porro"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        ClientOperationID: sdk.String("fugiat"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("nam"),
        Location: "enim",
        ManagedZone: "maiores",
        Name: "Kelley Schneider V",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        Project: "accusantium",
        QuotaUser: sdk.String("magnam"),
        Type: "repellat",
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("explicabo"),
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
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("ipsam"),
        Location: "nostrum",
        ManagedZone: "sequi",
        MaxResults: sdk.Int64(529310),
        Name: sdk.String("Sabrina Rohan"),
        OauthToken: sdk.String("eius"),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        Project: "aperiam",
        QuotaUser: sdk.String("voluptates"),
        Type: sdk.String("possimus"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("voluptatem"),
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
            Kind: sdk.String("corporis"),
            Name: sdk.String("Ruby Haag"),
            RoutingPolicy: &shared.RRSetRoutingPolicy{
                Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                    EnableFencing: sdk.Bool(false),
                    Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("autem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("cupiditate"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("provident"),
                                        Port: sdk.String("beatae"),
                                        Project: sdk.String("ipsa"),
                                        Region: sdk.String("mollitia"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("nam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("quo"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("tempore"),
                                        Port: sdk.String("commodi"),
                                        Project: sdk.String("fugit"),
                                        Region: sdk.String("suscipit"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptate"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("aliquid"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("laboriosam"),
                                        Port: sdk.String("accusamus"),
                                        Project: sdk.String("ab"),
                                        Region: sdk.String("itaque"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("quisquam"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("alias"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("consequuntur"),
                                        Port: sdk.String("vitae"),
                                        Project: sdk.String("quidem"),
                                        Region: sdk.String("sequi"),
                                    },
                                },
                            },
                            Kind: sdk.String("amet"),
                            Location: sdk.String("exercitationem"),
                            Rrdatas: []string{
                                "praesentium",
                                "unde",
                                "similique",
                                "eligendi",
                            },
                            SignatureRrdatas: []string{
                                "amet",
                                "debitis",
                                "nobis",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("temporibus"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("atque"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("sit"),
                                        Port: sdk.String("quo"),
                                        Project: sdk.String("veniam"),
                                        Region: sdk.String("aliquam"),
                                    },
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
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("ex"),
                                        Port: sdk.String("architecto"),
                                        Project: sdk.String("a"),
                                        Region: sdk.String("laborum"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("veritatis"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("a"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("accusantium"),
                                        Port: sdk.String("commodi"),
                                        Project: sdk.String("atque"),
                                        Region: sdk.String("totam"),
                                    },
                                },
                            },
                            Kind: sdk.String("tenetur"),
                            Location: sdk.String("voluptate"),
                            Rrdatas: []string{
                                "quod",
                                "vitae",
                            },
                            SignatureRrdatas: []string{
                                "reiciendis",
                                "quod",
                                "voluptate",
                                "inventore",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("maxime"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("ab"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("consectetur"),
                                        Port: sdk.String("maiores"),
                                        Project: sdk.String("sed"),
                                        Region: sdk.String("animi"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sequi"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("voluptatum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("laborum"),
                                        Port: sdk.String("omnis"),
                                        Project: sdk.String("nihil"),
                                        Region: sdk.String("tenetur"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("sapiente"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("adipisci"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("optio"),
                                        Port: sdk.String("illum"),
                                        Project: sdk.String("at"),
                                        Region: sdk.String("tenetur"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("molestias"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("esse"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("perspiciatis"),
                                        Port: sdk.String("voluptates"),
                                        Project: sdk.String("eum"),
                                        Region: sdk.String("quasi"),
                                    },
                                },
                            },
                            Kind: sdk.String("quas"),
                            Location: sdk.String("odio"),
                            Rrdatas: []string{
                                "porro",
                                "aliquid",
                            },
                            SignatureRrdatas: []string{
                                "quidem",
                                "explicabo",
                                "et",
                            },
                        },
                        shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("magni"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("illum"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("impedit"),
                                        Port: sdk.String("unde"),
                                        Project: sdk.String("ut"),
                                        Region: sdk.String("facere"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("voluptas"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                        Kind: sdk.String("recusandae"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("facere"),
                                        Port: sdk.String("dignissimos"),
                                        Project: sdk.String("iste"),
                                        Region: sdk.String("provident"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("dolor"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("aperiam"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("eum"),
                                        Port: sdk.String("laboriosam"),
                                        Project: sdk.String("laborum"),
                                        Region: sdk.String("autem"),
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("assumenda"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                        Kind: sdk.String("fugiat"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("voluptatem"),
                                        Port: sdk.String("alias"),
                                        Project: sdk.String("velit"),
                                        Region: sdk.String("ullam"),
                                    },
                                },
                            },
                            Kind: sdk.String("quis"),
                            Location: sdk.String("velit"),
                            Rrdatas: []string{
                                "quas",
                            },
                            SignatureRrdatas: []string{
                                "recusandae",
                                "cumque",
                                "doloremque",
                                "totam",
                            },
                        },
                    },
                    Kind: sdk.String("iure"),
                },
                Kind: sdk.String("maiores"),
                PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                    BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                        EnableFencing: sdk.Bool(false),
                        Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("veritatis"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("iste"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("ipsam"),
                                            Port: sdk.String("consequuntur"),
                                            Project: sdk.String("cumque"),
                                            Region: sdk.String("quidem"),
                                        },
                                    },
                                },
                                Kind: sdk.String("non"),
                                Location: sdk.String("beatae"),
                                Rrdatas: []string{
                                    "molestias",
                                },
                                SignatureRrdatas: []string{
                                    "autem",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("libero"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                            Kind: sdk.String("necessitatibus"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("impedit"),
                                            Port: sdk.String("quos"),
                                            Project: sdk.String("illum"),
                                            Region: sdk.String("distinctio"),
                                        },
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
                                    },
                                },
                                Kind: sdk.String("consectetur"),
                                Location: sdk.String("voluptas"),
                                Rrdatas: []string{
                                    "earum",
                                    "tenetur",
                                },
                                SignatureRrdatas: []string{
                                    "dolore",
                                    "enim",
                                    "ullam",
                                    "perspiciatis",
                                },
                            },
                            shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                    InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            IPAddress: sdk.String("ex"),
                                            IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                            Kind: sdk.String("dicta"),
                                            LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                            NetworkURL: sdk.String("commodi"),
                                            Port: sdk.String("neque"),
                                            Project: sdk.String("quibusdam"),
                                            Region: sdk.String("numquam"),
                                        },
                                    },
                                },
                                Kind: sdk.String("rem"),
                                Location: sdk.String("officiis"),
                                Rrdatas: []string{
                                    "neque",
                                    "corporis",
                                    "quod",
                                },
                                SignatureRrdatas: []string{
                                    "placeat",
                                },
                            },
                        },
                        Kind: sdk.String("excepturi"),
                    },
                    Kind: sdk.String("recusandae"),
                    PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("dicta"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP.ToPointer(),
                                Kind: sdk.String("ipsum"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("soluta"),
                                Port: sdk.String("necessitatibus"),
                                Project: sdk.String("sequi"),
                                Region: sdk.String("recusandae"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("labore"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined.ToPointer(),
                                Kind: sdk.String("magni"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("dolores"),
                                Port: sdk.String("illum"),
                                Project: sdk.String("iusto"),
                                Region: sdk.String("magni"),
                            },
                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                IPAddress: sdk.String("beatae"),
                                IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                Kind: sdk.String("ad"),
                                LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                NetworkURL: sdk.String("vel"),
                                Port: sdk.String("minima"),
                                Project: sdk.String("sit"),
                                Region: sdk.String("vel"),
                            },
                        },
                    },
                    TrickleTraffic: sdk.Float64(3883.33),
                },
                Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                    Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("rem"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("doloremque"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb.ToPointer(),
                                        NetworkURL: sdk.String("provident"),
                                        Port: sdk.String("facere"),
                                        Project: sdk.String("sed"),
                                        Region: sdk.String("inventore"),
                                    },
                                },
                            },
                            Kind: sdk.String("voluptatibus"),
                            Rrdatas: []string{
                                "deserunt",
                                "repellendus",
                                "consequatur",
                            },
                            SignatureRrdatas: []string{
                                "doloremque",
                            },
                            Weight: sdk.Float64(7619.27),
                        },
                        shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                            HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: sdk.String("ratione"),
                                        IPProtocol: shared.RRSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP.ToPointer(),
                                        Kind: sdk.String("tempora"),
                                        LoadBalancerType: shared.RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone.ToPointer(),
                                        NetworkURL: sdk.String("natus"),
                                        Port: sdk.String("voluptatem"),
                                        Project: sdk.String("suscipit"),
                                        Region: sdk.String("laudantium"),
                                    },
                                },
                            },
                            Kind: sdk.String("facilis"),
                            Rrdatas: []string{
                                "ullam",
                                "aut",
                                "quia",
                            },
                            SignatureRrdatas: []string{
                                "quaerat",
                                "corporis",
                                "accusamus",
                            },
                            Weight: sdk.Float64(4813.07),
                        },
                    },
                    Kind: sdk.String("sapiente"),
                },
            },
            Rrdatas: []string{
                "neque",
                "quidem",
            },
            SignatureRrdatas: []string{
                "praesentium",
                "tempora",
                "ipsam",
                "officiis",
            },
            TTL: sdk.Int(196497),
            Type: sdk.String("magni"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        ClientOperationID: sdk.String("veritatis"),
        Fields: sdk.String("error"),
        Key: sdk.String("voluptatibus"),
        Location: "numquam",
        ManagedZone: "rerum",
        Name: "Marty Wehner",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        Project: "impedit",
        QuotaUser: sdk.String("error"),
        Type: "animi",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("aliquid"),
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
