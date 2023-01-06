<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DNSChangesCreateRequest{
        Security: operations.DNSChangesCreateSecurity{
            Option1: &operations.DNSChangesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.DNSChangesCreatePathParams{
            Location: "eius",
            ManagedZone: "voluptatem",
            Project: "alias",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "reprehenderit",
            Alt: "json",
            Callback: "harum",
            ClientOperationID: "ut",
            Fields: "omnis",
            Key: "nobis",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "debitis",
            UploadType: "magnam",
            UploadProtocol: "non",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "et",
                    Name: "et",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptate",
                                                IPProtocol: "UDP",
                                                Kind: "provident",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptas",
                                                Port: "voluptatem",
                                                Project: "eum",
                                                Region: "quo",
                                            },
                                        },
                                    },
                                    Kind: "repellat",
                                    Location: "magni",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "voluptatem",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                        "optio",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ipsum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "earum",
                                                Port: "tempore",
                                                Project: "eos",
                                                Region: "vel",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "TCP",
                                                Kind: "minima",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "vitae",
                                                Port: "labore",
                                                Project: "nemo",
                                                Region: "atque",
                                            },
                                        },
                                    },
                                    Kind: "vel",
                                    Location: "maiores",
                                    Rrdatas: []string{
                                        "omnis",
                                    },
                                    SignatureRrdatas: []string{
                                        "recusandae",
                                        "ut",
                                        "odit",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "TCP",
                                                Kind: "quod",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "odit",
                                                Port: "commodi",
                                                Project: "natus",
                                                Region: "minima",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "similique",
                                                IPProtocol: "UDP",
                                                Kind: "dolore",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "consequatur",
                                                Port: "unde",
                                                Project: "est",
                                                Region: "est",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "a",
                                                IPProtocol: "UDP",
                                                Kind: "et",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "autem",
                                                Port: "eveniet",
                                                Project: "non",
                                                Region: "corporis",
                                            },
                                        },
                                    },
                                    Kind: "similique",
                                    Location: "perferendis",
                                    Rrdatas: []string{
                                        "ea",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                    },
                                },
                            },
                            Kind: "itaque",
                        },
                        Kind: "delectus",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "facere",
                                                    IPProtocol: "TCP",
                                                    Kind: "minus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "explicabo",
                                                    Port: "omnis",
                                                    Project: "voluptatum",
                                                    Region: "voluptas",
                                                },
                                            },
                                        },
                                        Kind: "rerum",
                                        Location: "ut",
                                        Rrdatas: []string{
                                            "porro",
                                            "quibusdam",
                                        },
                                        SignatureRrdatas: []string{
                                            "suscipit",
                                        },
                                    },
                                },
                                Kind: "placeat",
                            },
                            Kind: "et",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "et",
                                        IPProtocol: "UDP",
                                        Kind: "asperiores",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "et",
                                        Port: "modi",
                                        Project: "qui",
                                        Region: "soluta",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "sapiente",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "distinctio",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "esse",
                                        Port: "est",
                                        Project: "enim",
                                        Region: "facere",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptatem",
                                        IPProtocol: "TCP",
                                        Kind: "officia",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "qui",
                                        Port: "et",
                                        Project: "nihil",
                                        Region: "optio",
                                    },
                                },
                            },
                            TrickleTraffic: 84.199997,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "TCP",
                                                Kind: "suscipit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "molestias",
                                                Port: "sunt",
                                                Project: "sunt",
                                                Region: "rerum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quas",
                                                IPProtocol: "TCP",
                                                Kind: "quia",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eum",
                                                Port: "suscipit",
                                                Project: "aspernatur",
                                                Region: "voluptas",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Rrdatas: []string{
                                        "minima",
                                    },
                                    SignatureRrdatas: []string{
                                        "provident",
                                    },
                                    Weight: 98.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "UDP",
                                                Kind: "est",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "non",
                                                Port: "expedita",
                                                Project: "est",
                                                Region: "debitis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "TCP",
                                                Kind: "autem",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "amet",
                                                Port: "minus",
                                                Project: "consequatur",
                                                Region: "atque",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "velit",
                                                IPProtocol: "UDP",
                                                Kind: "nam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quia",
                                                Port: "eos",
                                                Project: "eaque",
                                                Region: "eligendi",
                                            },
                                        },
                                    },
                                    Kind: "saepe",
                                    Rrdatas: []string{
                                        "ea",
                                    },
                                    SignatureRrdatas: []string{
                                        "vel",
                                        "numquam",
                                    },
                                    Weight: 35.099998,
                                },
                            },
                            Kind: "voluptate",
                        },
                    },
                    Rrdatas: []string{
                        "provident",
                        "accusamus",
                        "omnis",
                    },
                    SignatureRrdatas: []string{
                        "ut",
                        "omnis",
                        "dolor",
                    },
                    TTL: 2546676448697599594,
                    Type: "corporis",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "reprehenderit",
                    Name: "dolorum",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "illum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "nesciunt",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "vel",
                                                Port: "quasi",
                                                Project: "corrupti",
                                                Region: "sed",
                                            },
                                        },
                                    },
                                    Kind: "provident",
                                    Location: "molestiae",
                                    Rrdatas: []string{
                                        "provident",
                                    },
                                    SignatureRrdatas: []string{
                                        "autem",
                                        "at",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "distinctio",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "qui",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "in",
                                                Port: "harum",
                                                Project: "veniam",
                                                Region: "debitis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quam",
                                                IPProtocol: "TCP",
                                                Kind: "iusto",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "dolore",
                                                Port: "ut",
                                                Project: "debitis",
                                                Region: "laudantium",
                                            },
                                        },
                                    },
                                    Kind: "eaque",
                                    Location: "molestiae",
                                    Rrdatas: []string{
                                        "in",
                                        "ab",
                                        "eum",
                                    },
                                    SignatureRrdatas: []string{
                                        "est",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laudantium",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "enim",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quidem",
                                                Port: "est",
                                                Project: "laboriosam",
                                                Region: "velit",
                                            },
                                        },
                                    },
                                    Kind: "quod",
                                    Location: "enim",
                                    Rrdatas: []string{
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "autem",
                                        "tempore",
                                    },
                                },
                            },
                            Kind: "vel",
                        },
                        Kind: "natus",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "consequatur",
                                                    IPProtocol: "UDP",
                                                    Kind: "unde",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "earum",
                                                    Port: "placeat",
                                                    Project: "sed",
                                                    Region: "quia",
                                                },
                                            },
                                        },
                                        Kind: "quia",
                                        Location: "omnis",
                                        Rrdatas: []string{
                                            "perspiciatis",
                                        },
                                        SignatureRrdatas: []string{
                                            "laborum",
                                            "corporis",
                                            "aut",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "pariatur",
                                                    IPProtocol: "UDP",
                                                    Kind: "distinctio",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "quis",
                                                    Port: "aliquid",
                                                    Project: "est",
                                                    Region: "iure",
                                                },
                                            },
                                        },
                                        Kind: "eligendi",
                                        Location: "dignissimos",
                                        Rrdatas: []string{
                                            "saepe",
                                            "tenetur",
                                        },
                                        SignatureRrdatas: []string{
                                            "animi",
                                            "fugiat",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "delectus",
                                                    IPProtocol: "TCP",
                                                    Kind: "modi",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "ut",
                                                    Port: "architecto",
                                                    Project: "voluptas",
                                                    Region: "delectus",
                                                },
                                            },
                                        },
                                        Kind: "nihil",
                                        Location: "saepe",
                                        Rrdatas: []string{
                                            "optio",
                                            "beatae",
                                        },
                                        SignatureRrdatas: []string{
                                            "ab",
                                        },
                                    },
                                },
                                Kind: "repellendus",
                            },
                            Kind: "ipsa",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "numquam",
                                        IPProtocol: "UDP",
                                        Kind: "consequatur",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "non",
                                        Port: "aut",
                                        Project: "quam",
                                        Region: "at",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "impedit",
                                        IPProtocol: "TCP",
                                        Kind: "veniam",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "molestiae",
                                        Port: "magnam",
                                        Project: "cum",
                                        Region: "molestiae",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "fuga",
                                        IPProtocol: "UDP",
                                        Kind: "quia",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "voluptates",
                                        Port: "quas",
                                        Project: "voluptatem",
                                        Region: "amet",
                                    },
                                },
                            },
                            TrickleTraffic: 15.200000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "UDP",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "est",
                                                Port: "incidunt",
                                                Project: "temporibus",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "possimus",
                                                IPProtocol: "TCP",
                                                Kind: "dolorum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "nostrum",
                                                Port: "quia",
                                                Project: "vel",
                                                Region: "ipsa",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "natus",
                                                IPProtocol: "TCP",
                                                Kind: "quo",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ad",
                                                Port: "vitae",
                                                Project: "illum",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "itaque",
                                    Rrdatas: []string{
                                        "temporibus",
                                        "sit",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                        "commodi",
                                    },
                                    Weight: 17.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "TCP",
                                                Kind: "dolorum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "cupiditate",
                                                Port: "quas",
                                                Project: "laborum",
                                                Region: "vel",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Rrdatas: []string{
                                        "est",
                                        "ut",
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                        "praesentium",
                                        "at",
                                    },
                                    Weight: 18.100000,
                                },
                            },
                            Kind: "accusantium",
                        },
                    },
                    Rrdatas: []string{
                        "corrupti",
                    },
                    SignatureRrdatas: []string{
                        "eum",
                        "in",
                    },
                    TTL: 2463200050560000932,
                    Type: "sit",
                },
            },
            ID: "impedit",
            IsServing: false,
            Kind: "exercitationem",
            StartTime: "odio",
            Status: "PENDING",
        },
    }
    
    res, err := s.Changes.DNSChangesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->