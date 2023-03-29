<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            ManagedZone: "unde",
            Project: "deserunt",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nulla",
            Alt: "media",
            Callback: "vero",
            ClientOperationID: "perspiciatis",
            Fields: "nulla",
            Key: "nihil",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "facilis",
            UploadType: "eum",
            UploadProtocol: "iusto",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "saepe",
                    Name: "inventore",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "tcp",
                                                Kind: "autem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "non",
                                                Port: "deleniti",
                                                Project: "similique",
                                                Region: "reprehenderit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "udp",
                                                Kind: "quasi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dicta",
                                                Port: "est",
                                                Project: "voluptatem",
                                                Region: "consequatur",
                                            },
                                        },
                                    },
                                    Kind: "fugiat",
                                    Location: "a",
                                    Rrdatas: []string{
                                        "eos",
                                        "accusamus",
                                        "accusamus",
                                        "reiciendis",
                                    },
                                    SignatureRrdatas: []string{
                                        "quibusdam",
                                        "et",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "udp",
                                                Kind: "soluta",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quisquam",
                                                Port: "rerum",
                                                Project: "culpa",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "udp",
                                                Kind: "possimus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "odit",
                                                Port: "esse",
                                                Project: "rem",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "amet",
                                    Location: "est",
                                    Rrdatas: []string{
                                        "blanditiis",
                                        "numquam",
                                        "similique",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "undefined",
                                                Kind: "laborum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "iure",
                                                Project: "earum",
                                                Region: "ut",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "tcp",
                                                Kind: "ea",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "iusto",
                                                Port: "ut",
                                                Project: "optio",
                                                Region: "aspernatur",
                                            },
                                        },
                                    },
                                    Kind: "inventore",
                                    Location: "ut",
                                    Rrdatas: []string{
                                        "et",
                                        "libero",
                                        "ipsum",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "placeat",
                                                IPProtocol: "undefined",
                                                Kind: "est",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quia",
                                                Port: "similique",
                                                Project: "eaque",
                                                Region: "odio",
                                            },
                                        },
                                    },
                                    Kind: "harum",
                                    Location: "doloribus",
                                    Rrdatas: []string{
                                        "aut",
                                        "et",
                                        "non",
                                        "quidem",
                                    },
                                    SignatureRrdatas: []string{
                                        "asperiores",
                                    },
                                },
                            },
                            Kind: "et",
                        },
                        Kind: "culpa",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "totam",
                                                    IPProtocol: "tcp",
                                                    Kind: "et",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "nesciunt",
                                                    Port: "laboriosam",
                                                    Project: "aut",
                                                    Region: "cum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "expedita",
                                                    IPProtocol: "undefined",
                                                    Kind: "eos",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "adipisci",
                                                    Port: "hic",
                                                    Project: "consequatur",
                                                    Region: "distinctio",
                                                },
                                            },
                                        },
                                        Kind: "qui",
                                        Location: "perferendis",
                                        Rrdatas: []string{
                                            "fuga",
                                        },
                                        SignatureRrdatas: []string{
                                            "tempore",
                                            "explicabo",
                                            "aut",
                                            "reiciendis",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "totam",
                                                    IPProtocol: "tcp",
                                                    Kind: "reiciendis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "id",
                                                    Port: "qui",
                                                    Project: "quod",
                                                    Region: "sit",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eaque",
                                                    IPProtocol: "tcp",
                                                    Kind: "veniam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "sed",
                                                    Port: "ea",
                                                    Project: "exercitationem",
                                                    Region: "deleniti",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sed",
                                                    IPProtocol: "udp",
                                                    Kind: "voluptatem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "esse",
                                                    Port: "sint",
                                                    Project: "veritatis",
                                                    Region: "numquam",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eligendi",
                                                    IPProtocol: "tcp",
                                                    Kind: "similique",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "ut",
                                                    Port: "molestias",
                                                    Project: "cupiditate",
                                                    Region: "sint",
                                                },
                                            },
                                        },
                                        Kind: "explicabo",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "vitae",
                                            "non",
                                            "minima",
                                        },
                                        SignatureRrdatas: []string{
                                            "aut",
                                            "libero",
                                        },
                                    },
                                },
                                Kind: "voluptas",
                            },
                            Kind: "magni",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "porro",
                                        IPProtocol: "udp",
                                        Kind: "nostrum",
                                        LoadBalancerType: "none",
                                        NetworkURL: "sit",
                                        Port: "in",
                                        Project: "officia",
                                        Region: "omnis",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptatem",
                                        IPProtocol: "undefined",
                                        Kind: "eum",
                                        LoadBalancerType: "none",
                                        NetworkURL: "consequatur",
                                        Port: "ratione",
                                        Project: "cum",
                                        Region: "similique",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "enim",
                                        IPProtocol: "udp",
                                        Kind: "id",
                                        LoadBalancerType: "none",
                                        NetworkURL: "sapiente",
                                        Port: "et",
                                        Project: "dolore",
                                        Region: "possimus",
                                    },
                                },
                            },
                            TrickleTraffic: 5761.57,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eveniet",
                                                IPProtocol: "tcp",
                                                Kind: "rerum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "necessitatibus",
                                                Port: "tenetur",
                                                Project: "soluta",
                                                Region: "ducimus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ducimus",
                                                IPProtocol: "udp",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "fugit",
                                                Port: "ullam",
                                                Project: "voluptas",
                                                Region: "vel",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "velit",
                                                IPProtocol: "tcp",
                                                Kind: "cum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "magnam",
                                                Port: "culpa",
                                                Project: "enim",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "delectus",
                                    Rrdatas: []string{
                                        "officia",
                                        "est",
                                        "distinctio",
                                    },
                                    SignatureRrdatas: []string{
                                        "provident",
                                        "a",
                                        "incidunt",
                                    },
                                    Weight: 6439.9,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nihil",
                                                IPProtocol: "tcp",
                                                Kind: "id",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sit",
                                                Port: "rem",
                                                Project: "corporis",
                                                Region: "porro",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "distinctio",
                                                IPProtocol: "undefined",
                                                Kind: "nostrum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "placeat",
                                                Project: "molestiae",
                                                Region: "debitis",
                                            },
                                        },
                                    },
                                    Kind: "dolores",
                                    Rrdatas: []string{
                                        "ullam",
                                    },
                                    SignatureRrdatas: []string{
                                        "similique",
                                    },
                                    Weight: 3540.47,
                                },
                            },
                            Kind: "deserunt",
                        },
                    },
                    Rrdatas: []string{
                        "in",
                        "aperiam",
                        "et",
                    },
                    SignatureRrdatas: []string{
                        "et",
                        "voluptatem",
                        "et",
                        "modi",
                    },
                    TTL: 896547,
                    Type: "qui",
                },
                shared.ResourceRecordSet{
                    Kind: "consequatur",
                    Name: "aspernatur",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "saepe",
                                                IPProtocol: "undefined",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nihil",
                                                Port: "ducimus",
                                                Project: "aspernatur",
                                                Region: "aspernatur",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sint",
                                                IPProtocol: "tcp",
                                                Kind: "quo",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repellat",
                                                Port: "voluptas",
                                                Project: "voluptatem",
                                                Region: "et",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "accusamus",
                                                IPProtocol: "undefined",
                                                Kind: "neque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "dolorem",
                                                Project: "quia",
                                                Region: "omnis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "udp",
                                                Kind: "consequatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "similique",
                                                Port: "eos",
                                                Project: "voluptate",
                                                Region: "aperiam",
                                            },
                                        },
                                    },
                                    Kind: "quasi",
                                    Location: "voluptatibus",
                                    Rrdatas: []string{
                                        "quis",
                                        "qui",
                                        "quam",
                                    },
                                    SignatureRrdatas: []string{
                                        "ab",
                                        "et",
                                        "consequatur",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sit",
                                                IPProtocol: "udp",
                                                Kind: "incidunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptas",
                                                Port: "ea",
                                                Project: "rerum",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "placeat",
                                                IPProtocol: "undefined",
                                                Kind: "laboriosam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "corrupti",
                                                Port: "illo",
                                                Project: "laboriosam",
                                                Region: "velit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolor",
                                                IPProtocol: "undefined",
                                                Kind: "ipsum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "laudantium",
                                                Port: "modi",
                                                Project: "officiis",
                                                Region: "nisi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "udp",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "mollitia",
                                                Port: "doloremque",
                                                Project: "repellendus",
                                                Region: "dolorem",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Location: "dolorum",
                                    Rrdatas: []string{
                                        "in",
                                    },
                                    SignatureRrdatas: []string{
                                        "labore",
                                        "asperiores",
                                        "recusandae",
                                    },
                                },
                            },
                            Kind: "ut",
                        },
                        Kind: "laborum",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "tcp",
                                                    Kind: "placeat",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "delectus",
                                                    Port: "enim",
                                                    Project: "iste",
                                                    Region: "in",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "non",
                                                    IPProtocol: "undefined",
                                                    Kind: "modi",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "eius",
                                                    Port: "rerum",
                                                    Project: "similique",
                                                    Region: "quod",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "qui",
                                                    IPProtocol: "tcp",
                                                    Kind: "ut",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "soluta",
                                                    Port: "aliquam",
                                                    Project: "dicta",
                                                    Region: "inventore",
                                                },
                                            },
                                        },
                                        Kind: "inventore",
                                        Location: "iusto",
                                        Rrdatas: []string{
                                            "enim",
                                            "aut",
                                        },
                                        SignatureRrdatas: []string{
                                            "reiciendis",
                                            "vel",
                                            "et",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "perspiciatis",
                                                    IPProtocol: "undefined",
                                                    Kind: "at",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "maxime",
                                                    Port: "soluta",
                                                    Project: "deleniti",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "cum",
                                        Location: "sed",
                                        Rrdatas: []string{
                                            "eveniet",
                                            "quo",
                                            "doloribus",
                                        },
                                        SignatureRrdatas: []string{
                                            "eius",
                                            "blanditiis",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "undefined",
                                                    Kind: "eos",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "incidunt",
                                                    Port: "possimus",
                                                    Project: "aut",
                                                    Region: "voluptatem",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "tcp",
                                                    Kind: "facilis",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quia",
                                                    Port: "eum",
                                                    Project: "occaecati",
                                                    Region: "et",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "alias",
                                                    IPProtocol: "udp",
                                                    Kind: "enim",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "nihil",
                                                    Port: "quibusdam",
                                                    Project: "rerum",
                                                    Region: "amet",
                                                },
                                            },
                                        },
                                        Kind: "soluta",
                                        Location: "tenetur",
                                        Rrdatas: []string{
                                            "est",
                                            "atque",
                                        },
                                        SignatureRrdatas: []string{
                                            "temporibus",
                                        },
                                    },
                                },
                                Kind: "rerum",
                            },
                            Kind: "incidunt",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aut",
                                        IPProtocol: "undefined",
                                        Kind: "ipsam",
                                        LoadBalancerType: "none",
                                        NetworkURL: "a",
                                        Port: "occaecati",
                                        Project: "rem",
                                        Region: "accusantium",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quo",
                                        IPProtocol: "undefined",
                                        Kind: "sequi",
                                        LoadBalancerType: "none",
                                        NetworkURL: "qui",
                                        Port: "autem",
                                        Project: "facilis",
                                        Region: "laudantium",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "numquam",
                                        IPProtocol: "undefined",
                                        Kind: "amet",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "consequatur",
                                        Port: "et",
                                        Project: "placeat",
                                        Region: "sed",
                                    },
                                },
                            },
                            TrickleTraffic: 6748.48,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magni",
                                                IPProtocol: "undefined",
                                                Kind: "porro",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "laudantium",
                                                Project: "error",
                                                Region: "voluptas",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sit",
                                                IPProtocol: "undefined",
                                                Kind: "ratione",
                                                LoadBalancerType: "none",
                                                NetworkURL: "corrupti",
                                                Port: "consequuntur",
                                                Project: "ex",
                                                Region: "quisquam",
                                            },
                                        },
                                    },
                                    Kind: "earum",
                                    Rrdatas: []string{
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "placeat",
                                        "explicabo",
                                        "et",
                                    },
                                    Weight: 2174.5,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "placeat",
                                                IPProtocol: "tcp",
                                                Kind: "minus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quae",
                                                Port: "sapiente",
                                                Project: "non",
                                                Region: "nostrum",
                                            },
                                        },
                                    },
                                    Kind: "quis",
                                    Rrdatas: []string{
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "veritatis",
                                    },
                                    Weight: 164.29,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "non",
                                                IPProtocol: "undefined",
                                                Kind: "libero",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "repellendus",
                                                Port: "maiores",
                                                Project: "veniam",
                                                Region: "nihil",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officia",
                                                IPProtocol: "undefined",
                                                Kind: "veritatis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "atque",
                                                Port: "culpa",
                                                Project: "reiciendis",
                                                Region: "temporibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "debitis",
                                                IPProtocol: "tcp",
                                                Kind: "laboriosam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sapiente",
                                                Port: "blanditiis",
                                                Project: "incidunt",
                                                Region: "debitis",
                                            },
                                        },
                                    },
                                    Kind: "hic",
                                    Rrdatas: []string{
                                        "earum",
                                        "porro",
                                    },
                                    SignatureRrdatas: []string{
                                        "corrupti",
                                        "et",
                                        "impedit",
                                        "officiis",
                                    },
                                    Weight: 4981.4,
                                },
                            },
                            Kind: "nostrum",
                        },
                    },
                    Rrdatas: []string{
                        "pariatur",
                        "adipisci",
                        "et",
                        "est",
                    },
                    SignatureRrdatas: []string{
                        "aut",
                    },
                    TTL: 347233,
                    Type: "eos",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "dolor",
                    Name: "voluptatibus",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facere",
                                                IPProtocol: "tcp",
                                                Kind: "consequatur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "enim",
                                                Port: "consequatur",
                                                Project: "velit",
                                                Region: "eos",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "udp",
                                                Kind: "ullam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "in",
                                                Port: "excepturi",
                                                Project: "quia",
                                                Region: "modi",
                                            },
                                        },
                                    },
                                    Kind: "voluptatibus",
                                    Location: "aspernatur",
                                    Rrdatas: []string{
                                        "eos",
                                        "similique",
                                    },
                                    SignatureRrdatas: []string{
                                        "nisi",
                                        "sapiente",
                                        "temporibus",
                                        "et",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "tcp",
                                                Kind: "sit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "vitae",
                                                Port: "corporis",
                                                Project: "voluptate",
                                                Region: "omnis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "incidunt",
                                                IPProtocol: "udp",
                                                Kind: "magni",
                                                LoadBalancerType: "none",
                                                NetworkURL: "illo",
                                                Port: "tenetur",
                                                Project: "est",
                                                Region: "perferendis",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Location: "provident",
                                    Rrdatas: []string{
                                        "corporis",
                                        "ratione",
                                        "aut",
                                        "beatae",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                        "cum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "undefined",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "facere",
                                                Port: "iste",
                                                Project: "eum",
                                                Region: "eos",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "udp",
                                                Kind: "aspernatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aliquam",
                                                Port: "magni",
                                                Project: "deserunt",
                                                Region: "illo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "undefined",
                                                Kind: "corrupti",
                                                LoadBalancerType: "none",
                                                NetworkURL: "praesentium",
                                                Port: "blanditiis",
                                                Project: "cupiditate",
                                                Region: "nobis",
                                            },
                                        },
                                    },
                                    Kind: "dignissimos",
                                    Location: "optio",
                                    Rrdatas: []string{
                                        "veniam",
                                        "et",
                                        "vel",
                                        "dolorem",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestias",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dicta",
                                                IPProtocol: "undefined",
                                                Kind: "distinctio",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quia",
                                                Port: "omnis",
                                                Project: "nulla",
                                                Region: "omnis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "undefined",
                                                Kind: "dolor",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quasi",
                                                Port: "officia",
                                                Project: "aut",
                                                Region: "enim",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "saepe",
                                                IPProtocol: "tcp",
                                                Kind: "dolores",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolor",
                                                Port: "praesentium",
                                                Project: "molestiae",
                                                Region: "quae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "udp",
                                                Kind: "quos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "totam",
                                                Port: "occaecati",
                                                Project: "aut",
                                                Region: "nemo",
                                            },
                                        },
                                    },
                                    Kind: "corrupti",
                                    Location: "in",
                                    Rrdatas: []string{
                                        "a",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptatum",
                                        "aperiam",
                                        "repellendus",
                                    },
                                },
                            },
                            Kind: "et",
                        },
                        Kind: "iste",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sed",
                                                    IPProtocol: "undefined",
                                                    Kind: "soluta",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "minima",
                                                    Port: "ut",
                                                    Project: "magni",
                                                    Region: "voluptas",
                                                },
                                            },
                                        },
                                        Kind: "reprehenderit",
                                        Location: "ratione",
                                        Rrdatas: []string{
                                            "nesciunt",
                                            "amet",
                                            "magni",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "perspiciatis",
                                            "sunt",
                                            "blanditiis",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aut",
                                                    IPProtocol: "undefined",
                                                    Kind: "praesentium",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "est",
                                                    Port: "debitis",
                                                    Project: "in",
                                                    Region: "explicabo",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "tcp",
                                                    Kind: "est",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "cumque",
                                                    Port: "culpa",
                                                    Project: "voluptas",
                                                    Region: "porro",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "possimus",
                                                    IPProtocol: "undefined",
                                                    Kind: "quidem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "labore",
                                                    Port: "voluptas",
                                                    Project: "nesciunt",
                                                    Region: "aut",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quibusdam",
                                                    IPProtocol: "undefined",
                                                    Kind: "a",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "praesentium",
                                                    Port: "quas",
                                                    Project: "deserunt",
                                                    Region: "tenetur",
                                                },
                                            },
                                        },
                                        Kind: "vero",
                                        Location: "iste",
                                        Rrdatas: []string{
                                            "aspernatur",
                                            "tenetur",
                                        },
                                        SignatureRrdatas: []string{
                                            "in",
                                            "eos",
                                            "qui",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptates",
                                                    IPProtocol: "udp",
                                                    Kind: "illum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "nesciunt",
                                                    Port: "explicabo",
                                                    Project: "et",
                                                    Region: "harum",
                                                },
                                            },
                                        },
                                        Kind: "in",
                                        Location: "hic",
                                        Rrdatas: []string{
                                            "itaque",
                                        },
                                        SignatureRrdatas: []string{
                                            "ducimus",
                                            "quaerat",
                                        },
                                    },
                                },
                                Kind: "qui",
                            },
                            Kind: "pariatur",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aperiam",
                                        IPProtocol: "undefined",
                                        Kind: "a",
                                        LoadBalancerType: "none",
                                        NetworkURL: "ex",
                                        Port: "dignissimos",
                                        Project: "ex",
                                        Region: "reprehenderit",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "sit",
                                        IPProtocol: "tcp",
                                        Kind: "amet",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "in",
                                        Port: "sed",
                                        Project: "non",
                                        Region: "soluta",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aspernatur",
                                        IPProtocol: "tcp",
                                        Kind: "rerum",
                                        LoadBalancerType: "none",
                                        NetworkURL: "accusamus",
                                        Port: "sunt",
                                        Project: "blanditiis",
                                        Region: "illo",
                                    },
                                },
                            },
                            TrickleTraffic: 3267.01,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "tcp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "cupiditate",
                                                Port: "perferendis",
                                                Project: "excepturi",
                                                Region: "molestiae",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Rrdatas: []string{
                                        "perspiciatis",
                                    },
                                    SignatureRrdatas: []string{
                                        "aperiam",
                                        "modi",
                                    },
                                    Weight: 5801.52,
                                },
                            },
                            Kind: "aliquam",
                        },
                    },
                    Rrdatas: []string{
                        "magni",
                        "autem",
                        "aut",
                        "quos",
                    },
                    SignatureRrdatas: []string{
                        "voluptatibus",
                    },
                    TTL: 618480,
                    Type: "et",
                },
            },
            ID: "aut",
            IsServing: false,
            Kind: "autem",
            StartTime: "doloribus",
            Status: "pending",
        },
    }

    ctx := context.Background()
    res, err := s.Changes.DNSChangesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->