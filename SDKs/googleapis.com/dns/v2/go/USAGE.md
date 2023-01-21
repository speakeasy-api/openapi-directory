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
            Location: "sit",
            ManagedZone: "voluptas",
            Project: "culpa",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "consequuntur",
            Alt: "media",
            Callback: "expedita",
            ClientOperationID: "voluptas",
            Fields: "fugit",
            Key: "et",
            OauthToken: "nihil",
            PrettyPrint: true,
            QuotaUser: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "ut",
                    Name: "dolorem",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vitae",
                                                IPProtocol: "UDP",
                                                Kind: "dolores",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "debitis",
                                                Port: "vel",
                                                Project: "odio",
                                                Region: "dolore",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "accusantium",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "commodi",
                                                Port: "quis",
                                                Project: "est",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "UDP",
                                                Kind: "voluptas",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aut",
                                                Port: "illo",
                                                Project: "sed",
                                                Region: "officiis",
                                            },
                                        },
                                    },
                                    Kind: "autem",
                                    Location: "consectetur",
                                    Rrdatas: []string{
                                        "odio",
                                    },
                                    SignatureRrdatas: []string{
                                        "recusandae",
                                    },
                                },
                            },
                            Kind: "at",
                        },
                        Kind: "ipsum",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "inventore",
                                                    IPProtocol: "UDP",
                                                    Kind: "exercitationem",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "reprehenderit",
                                                    Port: "tempore",
                                                    Project: "maiores",
                                                    Region: "incidunt",
                                                },
                                            },
                                        },
                                        Kind: "dolor",
                                        Location: "beatae",
                                        Rrdatas: []string{
                                            "in",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "ipsum",
                                            "ex",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "placeat",
                                                    IPProtocol: "TCP",
                                                    Kind: "rerum",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "voluptas",
                                                    Port: "quam",
                                                    Project: "reprehenderit",
                                                    Region: "qui",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "qui",
                                                    IPProtocol: "UDP",
                                                    Kind: "in",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "qui",
                                                    Port: "ut",
                                                    Project: "itaque",
                                                    Region: "ab",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "neque",
                                                    IPProtocol: "UDP",
                                                    Kind: "et",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "esse",
                                                    Port: "architecto",
                                                    Project: "quam",
                                                    Region: "velit",
                                                },
                                            },
                                        },
                                        Kind: "cumque",
                                        Location: "soluta",
                                        Rrdatas: []string{
                                            "voluptates",
                                            "magni",
                                        },
                                        SignatureRrdatas: []string{
                                            "optio",
                                            "qui",
                                            "earum",
                                        },
                                    },
                                },
                                Kind: "illo",
                            },
                            Kind: "omnis",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "consequatur",
                                        IPProtocol: "TCP",
                                        Kind: "commodi",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "reprehenderit",
                                        Port: "consectetur",
                                        Project: "nostrum",
                                        Region: "ut",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "laboriosam",
                                        IPProtocol: "UDP",
                                        Kind: "a",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "aut",
                                        Port: "quas",
                                        Project: "consequuntur",
                                        Region: "laudantium",
                                    },
                                },
                            },
                            TrickleTraffic: 73.199997,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perferendis",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ratione",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "explicabo",
                                                Port: "ea",
                                                Project: "maxime",
                                                Region: "eum",
                                            },
                                        },
                                    },
                                    Kind: "perferendis",
                                    Rrdatas: []string{
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "quis",
                                        "cumque",
                                        "minima",
                                    },
                                    Weight: 1.200000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "et",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ad",
                                                Port: "expedita",
                                                Project: "vel",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "tempora",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "eaque",
                                                Port: "sunt",
                                                Project: "sit",
                                                Region: "autem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "TCP",
                                                Kind: "vel",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "qui",
                                                Port: "nisi",
                                                Project: "quis",
                                                Region: "adipisci",
                                            },
                                        },
                                    },
                                    Kind: "porro",
                                    Rrdatas: []string{
                                        "et",
                                        "accusamus",
                                        "numquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "ut",
                                        "laborum",
                                    },
                                    Weight: 92.199997,
                                },
                            },
                            Kind: "minus",
                        },
                    },
                    Rrdatas: []string{
                        "aperiam",
                    },
                    SignatureRrdatas: []string{
                        "excepturi",
                        "mollitia",
                        "inventore",
                    },
                    TTL: 2654595716993425044,
                    Type: "ipsa",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "animi",
                    Name: "ut",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "UDP",
                                                Kind: "consequuntur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "cupiditate",
                                                Port: "provident",
                                                Project: "molestiae",
                                                Region: "pariatur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quasi",
                                                IPProtocol: "UDP",
                                                Kind: "enim",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sit",
                                                Port: "possimus",
                                                Project: "modi",
                                                Region: "neque",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequuntur",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "et",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "occaecati",
                                                Port: "ex",
                                                Project: "voluptatem",
                                                Region: "quia",
                                            },
                                        },
                                    },
                                    Kind: "temporibus",
                                    Location: "velit",
                                    Rrdatas: []string{
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "necessitatibus",
                                        "in",
                                        "possimus",
                                    },
                                },
                            },
                            Kind: "voluptatem",
                        },
                        Kind: "dolorum",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "earum",
                                                    IPProtocol: "TCP",
                                                    Kind: "ut",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "et",
                                                    Port: "est",
                                                    Project: "ipsum",
                                                    Region: "quam",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "dolores",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "impedit",
                                                    Port: "non",
                                                    Project: "magnam",
                                                    Region: "ut",
                                                },
                                            },
                                        },
                                        Kind: "possimus",
                                        Location: "illo",
                                        Rrdatas: []string{
                                            "quia",
                                            "ipsam",
                                            "ducimus",
                                        },
                                        SignatureRrdatas: []string{
                                            "blanditiis",
                                            "distinctio",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "rerum",
                                                    IPProtocol: "TCP",
                                                    Kind: "repellat",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "officia",
                                                    Port: "modi",
                                                    Project: "sunt",
                                                    Region: "voluptas",
                                                },
                                            },
                                        },
                                        Kind: "amet",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "qui",
                                        },
                                        SignatureRrdatas: []string{
                                            "autem",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dicta",
                                                    IPProtocol: "TCP",
                                                    Kind: "doloremque",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "nisi",
                                                    Port: "recusandae",
                                                    Project: "qui",
                                                    Region: "minus",
                                                },
                                            },
                                        },
                                        Kind: "et",
                                        Location: "rerum",
                                        Rrdatas: []string{
                                            "rem",
                                            "eos",
                                        },
                                        SignatureRrdatas: []string{
                                            "reiciendis",
                                        },
                                    },
                                },
                                Kind: "aspernatur",
                            },
                            Kind: "praesentium",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "nihil",
                                        IPProtocol: "TCP",
                                        Kind: "consequatur",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "accusantium",
                                        Port: "atque",
                                        Project: "amet",
                                        Region: "nisi",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quidem",
                                        IPProtocol: "TCP",
                                        Kind: "quo",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "alias",
                                        Port: "totam",
                                        Project: "deserunt",
                                        Region: "eius",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "repellat",
                                        IPProtocol: "UDP",
                                        Kind: "omnis",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "aut",
                                        Port: "et",
                                        Project: "magni",
                                        Region: "necessitatibus",
                                    },
                                },
                            },
                            TrickleTraffic: 3.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "UDP",
                                                Kind: "architecto",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "rerum",
                                                Port: "quo",
                                                Project: "et",
                                                Region: "saepe",
                                            },
                                        },
                                    },
                                    Kind: "commodi",
                                    Rrdatas: []string{
                                        "quibusdam",
                                        "asperiores",
                                        "quo",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                    },
                                    Weight: 8.100000,
                                },
                            },
                            Kind: "blanditiis",
                        },
                    },
                    Rrdatas: []string{
                        "in",
                        "et",
                    },
                    SignatureRrdatas: []string{
                        "est",
                        "id",
                    },
                    TTL: 2160980356695726217,
                    Type: "aut",
                },
                shared.ResourceRecordSet{
                    Kind: "perspiciatis",
                    Name: "et",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magni",
                                                IPProtocol: "TCP",
                                                Kind: "distinctio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ea",
                                                Port: "non",
                                                Project: "non",
                                                Region: "nam",
                                            },
                                        },
                                    },
                                    Kind: "beatae",
                                    Location: "quae",
                                    Rrdatas: []string{
                                        "magni",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                        "aut",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "UDP",
                                                Kind: "repudiandae",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "autem",
                                                Port: "odit",
                                                Project: "enim",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "non",
                                    Location: "nihil",
                                    Rrdatas: []string{
                                        "recusandae",
                                        "nihil",
                                        "exercitationem",
                                    },
                                    SignatureRrdatas: []string{
                                        "perferendis",
                                        "id",
                                        "autem",
                                    },
                                },
                            },
                            Kind: "hic",
                        },
                        Kind: "voluptatem",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "omnis",
                                                    IPProtocol: "TCP",
                                                    Kind: "nostrum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "sit",
                                                    Port: "repellat",
                                                    Project: "quo",
                                                    Region: "dolorum",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laboriosam",
                                                    IPProtocol: "TCP",
                                                    Kind: "ea",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "fugit",
                                                    Port: "aut",
                                                    Project: "tempora",
                                                    Region: "aliquid",
                                                },
                                            },
                                        },
                                        Kind: "mollitia",
                                        Location: "non",
                                        Rrdatas: []string{
                                            "recusandae",
                                            "illum",
                                            "consequatur",
                                        },
                                        SignatureRrdatas: []string{
                                            "hic",
                                            "nihil",
                                            "explicabo",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "iure",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "quos",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "explicabo",
                                                    Port: "necessitatibus",
                                                    Project: "veniam",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "in",
                                        Location: "odit",
                                        Rrdatas: []string{
                                            "corporis",
                                            "tenetur",
                                            "esse",
                                        },
                                        SignatureRrdatas: []string{
                                            "mollitia",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laboriosam",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "maiores",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "iusto",
                                                    Port: "aperiam",
                                                    Project: "repellendus",
                                                    Region: "sunt",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eum",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "et",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "aut",
                                                    Port: "dolor",
                                                    Project: "quia",
                                                    Region: "quaerat",
                                                },
                                            },
                                        },
                                        Kind: "ea",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "recusandae",
                                            "qui",
                                        },
                                        SignatureRrdatas: []string{
                                            "aut",
                                        },
                                    },
                                },
                                Kind: "explicabo",
                            },
                            Kind: "cupiditate",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "saepe",
                                        IPProtocol: "UDP",
                                        Kind: "voluptatem",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "fugiat",
                                        Port: "nesciunt",
                                        Project: "et",
                                        Region: "qui",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quis",
                                        IPProtocol: "TCP",
                                        Kind: "velit",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "aliquid",
                                        Port: "vero",
                                        Project: "aut",
                                        Region: "et",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptatem",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "quae",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "vitae",
                                        Port: "rerum",
                                        Project: "officiis",
                                        Region: "commodi",
                                    },
                                },
                            },
                            TrickleTraffic: 16.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "sint",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "eaque",
                                                Port: "facilis",
                                                Project: "et",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "sit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "eaque",
                                                Port: "consequuntur",
                                                Project: "et",
                                                Region: "amet",
                                            },
                                        },
                                    },
                                    Kind: "distinctio",
                                    Rrdatas: []string{
                                        "consectetur",
                                        "minima",
                                        "sequi",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                    },
                                    Weight: 29.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quam",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "dolores",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ullam",
                                                Port: "architecto",
                                                Project: "architecto",
                                                Region: "beatae",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "UDP",
                                                Kind: "hic",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "veritatis",
                                                Port: "architecto",
                                                Project: "voluptas",
                                                Region: "voluptatibus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maiores",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "modi",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "praesentium",
                                                Port: "itaque",
                                                Project: "ipsum",
                                                Region: "natus",
                                            },
                                        },
                                    },
                                    Kind: "quas",
                                    Rrdatas: []string{
                                        "nostrum",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "eius",
                                    },
                                    Weight: 16.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "unde",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "asperiores",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "hic",
                                                Port: "quo",
                                                Project: "est",
                                                Region: "nostrum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "TCP",
                                                Kind: "occaecati",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "temporibus",
                                                Port: "laborum",
                                                Project: "voluptas",
                                                Region: "modi",
                                            },
                                        },
                                    },
                                    Kind: "atque",
                                    Rrdatas: []string{
                                        "tempora",
                                    },
                                    SignatureRrdatas: []string{
                                        "nihil",
                                    },
                                    Weight: 35.200001,
                                },
                            },
                            Kind: "eveniet",
                        },
                    },
                    Rrdatas: []string{
                        "fuga",
                        "error",
                        "autem",
                    },
                    SignatureRrdatas: []string{
                        "omnis",
                        "esse",
                        "veritatis",
                    },
                    TTL: 7336767762345247220,
                    Type: "incidunt",
                },
            },
            ID: "sit",
            IsServing: true,
            Kind: "est",
            StartTime: "odio",
            Status: "DONE",
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