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
            ManagedZone: "facilis",
            Project: "nisi",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "eius",
            Alt: "media",
            Callback: "quaerat",
            ClientOperationID: "et",
            Fields: "officia",
            Key: "quia",
            OauthToken: "sint",
            PrettyPrint: true,
            QuotaUser: "ut",
            UploadType: "corrupti",
            UploadProtocol: "quibusdam",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "eum",
                    Name: "fuga",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "udp",
                                                Kind: "tenetur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "natus",
                                                Port: "molestiae",
                                                Project: "culpa",
                                                Region: "consectetur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iure",
                                                IPProtocol: "undefined",
                                                Kind: "molestias",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ad",
                                                Port: "dolor",
                                                Project: "aut",
                                                Region: "odit",
                                            },
                                        },
                                    },
                                    Kind: "ex",
                                    Location: "cupiditate",
                                    Rrdatas: []string{
                                        "aliquid",
                                    },
                                    SignatureRrdatas: []string{
                                        "adipisci",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maxime",
                                                IPProtocol: "udp",
                                                Kind: "illum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "a",
                                                Port: "debitis",
                                                Project: "animi",
                                                Region: "molestiae",
                                            },
                                        },
                                    },
                                    Kind: "labore",
                                    Location: "animi",
                                    Rrdatas: []string{
                                        "aspernatur",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsam",
                                        "est",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "undefined",
                                                Kind: "natus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "excepturi",
                                                Port: "voluptatem",
                                                Project: "quo",
                                                Region: "id",
                                            },
                                        },
                                    },
                                    Kind: "dolorum",
                                    Location: "sit",
                                    Rrdatas: []string{
                                        "consectetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "libero",
                                        "ab",
                                    },
                                },
                            },
                            Kind: "et",
                        },
                        Kind: "libero",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ea",
                                                    IPProtocol: "udp",
                                                    Kind: "quia",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "aliquid",
                                                    Port: "nihil",
                                                    Project: "repellendus",
                                                    Region: "aut",
                                                },
                                            },
                                        },
                                        Kind: "omnis",
                                        Location: "ullam",
                                        Rrdatas: []string{
                                            "voluptatem",
                                            "illum",
                                            "porro",
                                        },
                                        SignatureRrdatas: []string{
                                            "quis",
                                            "ipsum",
                                            "qui",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "blanditiis",
                                                    IPProtocol: "udp",
                                                    Kind: "id",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quidem",
                                                    Port: "cupiditate",
                                                    Project: "laborum",
                                                    Region: "deserunt",
                                                },
                                            },
                                        },
                                        Kind: "dicta",
                                        Location: "assumenda",
                                        Rrdatas: []string{
                                            "et",
                                            "enim",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequatur",
                                            "rerum",
                                            "quis",
                                        },
                                    },
                                },
                                Kind: "ut",
                            },
                            Kind: "porro",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quis",
                                        IPProtocol: "undefined",
                                        Kind: "deserunt",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "consequuntur",
                                        Port: "aspernatur",
                                        Project: "temporibus",
                                        Region: "sed",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "vel",
                                        IPProtocol: "udp",
                                        Kind: "cupiditate",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "facilis",
                                        Port: "totam",
                                        Project: "sequi",
                                        Region: "reprehenderit",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "consectetur",
                                        IPProtocol: "tcp",
                                        Kind: "fugit",
                                        LoadBalancerType: "none",
                                        NetworkURL: "in",
                                        Port: "iure",
                                        Project: "ullam",
                                        Region: "sunt",
                                    },
                                },
                            },
                            TrickleTraffic: 20.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maiores",
                                                IPProtocol: "tcp",
                                                Kind: "numquam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quas",
                                                Port: "dicta",
                                                Project: "magnam",
                                                Region: "id",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "tcp",
                                                Kind: "praesentium",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quibusdam",
                                                Port: "vel",
                                                Project: "dolore",
                                                Region: "quibusdam",
                                            },
                                        },
                                    },
                                    Kind: "ad",
                                    Rrdatas: []string{
                                        "porro",
                                        "fuga",
                                    },
                                    SignatureRrdatas: []string{
                                        "accusamus",
                                        "sit",
                                    },
                                    Weight: 17.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolores",
                                                IPProtocol: "undefined",
                                                Kind: "reprehenderit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "voluptatum",
                                                Project: "id",
                                                Region: "quaerat",
                                            },
                                        },
                                    },
                                    Kind: "deserunt",
                                    Rrdatas: []string{
                                        "ea",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "ut",
                                        "blanditiis",
                                        "necessitatibus",
                                    },
                                    Weight: 33.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "tcp",
                                                Kind: "autem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "autem",
                                                Port: "nesciunt",
                                                Project: "ullam",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "tcp",
                                                Kind: "odit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "laborum",
                                                Port: "qui",
                                                Project: "et",
                                                Region: "vel",
                                            },
                                        },
                                    },
                                    Kind: "voluptatibus",
                                    Rrdatas: []string{
                                        "voluptates",
                                    },
                                    SignatureRrdatas: []string{
                                        "iure",
                                    },
                                    Weight: 94.199997,
                                },
                            },
                            Kind: "ea",
                        },
                    },
                    Rrdatas: []string{
                        "in",
                    },
                    SignatureRrdatas: []string{
                        "suscipit",
                        "maiores",
                        "iusto",
                    },
                    TTL: 6322346449100325122,
                    Type: "assumenda",
                },
                shared.ResourceRecordSet{
                    Kind: "repellat",
                    Name: "eligendi",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "undefined",
                                                Kind: "rerum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quos",
                                                Port: "consequatur",
                                                Project: "accusamus",
                                                Region: "rerum",
                                            },
                                        },
                                    },
                                    Kind: "eos",
                                    Location: "est",
                                    Rrdatas: []string{
                                        "enim",
                                        "illum",
                                        "necessitatibus",
                                    },
                                    SignatureRrdatas: []string{
                                        "reiciendis",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloremque",
                                                IPProtocol: "tcp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "dicta",
                                                Project: "numquam",
                                                Region: "culpa",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "udp",
                                                Kind: "id",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rerum",
                                                Port: "sed",
                                                Project: "assumenda",
                                                Region: "dolor",
                                            },
                                        },
                                    },
                                    Kind: "totam",
                                    Location: "ab",
                                    Rrdatas: []string{
                                        "culpa",
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                        "corporis",
                                    },
                                },
                            },
                            Kind: "facere",
                        },
                        Kind: "eligendi",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minus",
                                                    IPProtocol: "udp",
                                                    Kind: "similique",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "numquam",
                                                    Port: "sunt",
                                                    Project: "a",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "occaecati",
                                        Location: "quaerat",
                                        Rrdatas: []string{
                                            "eum",
                                        },
                                        SignatureRrdatas: []string{
                                            "quod",
                                            "quis",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "magni",
                                                    IPProtocol: "undefined",
                                                    Kind: "est",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "et",
                                                    Port: "id",
                                                    Project: "excepturi",
                                                    Region: "rerum",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "labore",
                                                    IPProtocol: "undefined",
                                                    Kind: "est",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "velit",
                                                    Port: "est",
                                                    Project: "deleniti",
                                                    Region: "eligendi",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolorem",
                                                    IPProtocol: "undefined",
                                                    Kind: "repudiandae",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "qui",
                                                    Port: "aut",
                                                    Project: "ea",
                                                    Region: "ut",
                                                },
                                            },
                                        },
                                        Kind: "aspernatur",
                                        Location: "qui",
                                        Rrdatas: []string{
                                            "dolores",
                                        },
                                        SignatureRrdatas: []string{
                                            "sed",
                                        },
                                    },
                                },
                                Kind: "in",
                            },
                            Kind: "numquam",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "culpa",
                                        IPProtocol: "udp",
                                        Kind: "odit",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "sequi",
                                        Port: "molestias",
                                        Project: "ipsa",
                                        Region: "quisquam",
                                    },
                                },
                            },
                            TrickleTraffic: 87.199997,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "udp",
                                                Kind: "consequatur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "in",
                                                Port: "officia",
                                                Project: "magnam",
                                                Region: "possimus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "udp",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "fuga",
                                                Project: "pariatur",
                                                Region: "voluptatibus",
                                            },
                                        },
                                    },
                                    Kind: "corporis",
                                    Rrdatas: []string{
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "eos",
                                        "ut",
                                    },
                                    Weight: 97.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "saepe",
                                                IPProtocol: "udp",
                                                Kind: "tempora",
                                                LoadBalancerType: "none",
                                                NetworkURL: "a",
                                                Port: "qui",
                                                Project: "numquam",
                                                Region: "tenetur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "placeat",
                                                IPProtocol: "tcp",
                                                Kind: "porro",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quo",
                                                Port: "sunt",
                                                Project: "non",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "sunt",
                                    Rrdatas: []string{
                                        "aspernatur",
                                        "iusto",
                                    },
                                    SignatureRrdatas: []string{
                                        "maiores",
                                    },
                                    Weight: 35.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "udp",
                                                Kind: "aliquam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "est",
                                                Port: "alias",
                                                Project: "at",
                                                Region: "ea",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "undefined",
                                                Kind: "vitae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dicta",
                                                Port: "aut",
                                                Project: "quam",
                                                Region: "quasi",
                                            },
                                        },
                                    },
                                    Kind: "soluta",
                                    Rrdatas: []string{
                                        "ut",
                                        "itaque",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                    },
                                    Weight: 36.099998,
                                },
                            },
                            Kind: "ut",
                        },
                    },
                    Rrdatas: []string{
                        "reprehenderit",
                        "molestiae",
                        "porro",
                    },
                    SignatureRrdatas: []string{
                        "alias",
                        "corrupti",
                        "odit",
                    },
                    TTL: 3120355795706149026,
                    Type: "est",
                },
                shared.ResourceRecordSet{
                    Kind: "ipsam",
                    Name: "natus",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "undefined",
                                                Kind: "praesentium",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "exercitationem",
                                                Port: "quam",
                                                Project: "similique",
                                                Region: "dolorem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "udp",
                                                Kind: "ut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptates",
                                                Port: "omnis",
                                                Project: "sint",
                                                Region: "officia",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "udp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veritatis",
                                                Port: "voluptatem",
                                                Project: "et",
                                                Region: "consequatur",
                                            },
                                        },
                                    },
                                    Kind: "laborum",
                                    Location: "quisquam",
                                    Rrdatas: []string{
                                        "impedit",
                                    },
                                    SignatureRrdatas: []string{
                                        "eum",
                                        "reiciendis",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "tcp",
                                                Kind: "quis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "tempora",
                                                Port: "aperiam",
                                                Project: "dolorem",
                                                Region: "dolorem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "atque",
                                                IPProtocol: "tcp",
                                                Kind: "ex",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "a",
                                                Port: "sed",
                                                Project: "molestias",
                                                Region: "quo",
                                            },
                                        },
                                    },
                                    Kind: "laboriosam",
                                    Location: "facere",
                                    Rrdatas: []string{
                                        "asperiores",
                                        "voluptatum",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolorum",
                                        "eligendi",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "natus",
                                                IPProtocol: "udp",
                                                Kind: "quibusdam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "error",
                                                Port: "voluptates",
                                                Project: "dolores",
                                                Region: "magnam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "hic",
                                                IPProtocol: "udp",
                                                Kind: "deserunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ea",
                                                Port: "quisquam",
                                                Project: "eos",
                                                Region: "provident",
                                            },
                                        },
                                    },
                                    Kind: "unde",
                                    Location: "sint",
                                    Rrdatas: []string{
                                        "possimus",
                                        "id",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolore",
                                    },
                                },
                            },
                            Kind: "aut",
                        },
                        Kind: "qui",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cum",
                                                    IPProtocol: "udp",
                                                    Kind: "iure",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quae",
                                                    Port: "non",
                                                    Project: "consectetur",
                                                    Region: "delectus",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "doloribus",
                                                    IPProtocol: "udp",
                                                    Kind: "aut",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "temporibus",
                                                    Port: "maxime",
                                                    Project: "culpa",
                                                    Region: "temporibus",
                                                },
                                            },
                                        },
                                        Kind: "aut",
                                        Location: "eum",
                                        Rrdatas: []string{
                                            "ut",
                                            "id",
                                            "aut",
                                        },
                                        SignatureRrdatas: []string{
                                            "distinctio",
                                            "sint",
                                        },
                                    },
                                },
                                Kind: "incidunt",
                            },
                            Kind: "beatae",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolorem",
                                        IPProtocol: "udp",
                                        Kind: "voluptatibus",
                                        LoadBalancerType: "none",
                                        NetworkURL: "ratione",
                                        Port: "eum",
                                        Project: "sit",
                                        Region: "aut",
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
                                                IPAddress: "sit",
                                                IPProtocol: "udp",
                                                Kind: "repellat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consequatur",
                                                Port: "eveniet",
                                                Project: "sint",
                                                Region: "iusto",
                                            },
                                        },
                                    },
                                    Kind: "deleniti",
                                    Rrdatas: []string{
                                        "esse",
                                        "eius",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                    },
                                    Weight: 48.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magni",
                                                IPProtocol: "tcp",
                                                Kind: "voluptate",
                                                LoadBalancerType: "none",
                                                NetworkURL: "earum",
                                                Port: "vel",
                                                Project: "velit",
                                                Region: "assumenda",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nemo",
                                                IPProtocol: "udp",
                                                Kind: "sed",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "pariatur",
                                                Port: "qui",
                                                Project: "excepturi",
                                                Region: "occaecati",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "undefined",
                                                Kind: "eaque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "minus",
                                                Port: "optio",
                                                Project: "deserunt",
                                                Region: "corporis",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "pariatur",
                                        "pariatur",
                                        "earum",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                        "sed",
                                    },
                                    Weight: 98.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "similique",
                                                IPProtocol: "udp",
                                                Kind: "itaque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "minima",
                                                Port: "placeat",
                                                Project: "blanditiis",
                                                Region: "illo",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odio",
                                                IPProtocol: "udp",
                                                Kind: "tenetur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "nostrum",
                                                Project: "est",
                                                Region: "doloremque",
                                            },
                                        },
                                    },
                                    Kind: "cumque",
                                    Rrdatas: []string{
                                        "error",
                                        "officia",
                                        "illo",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                    },
                                    Weight: 11.100000,
                                },
                            },
                            Kind: "aut",
                        },
                    },
                    Rrdatas: []string{
                        "sit",
                        "dolorum",
                        "soluta",
                    },
                    SignatureRrdatas: []string{
                        "perspiciatis",
                        "ea",
                        "tenetur",
                    },
                    TTL: 4229981586805434476,
                    Type: "consequuntur",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "est",
                    Name: "praesentium",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "tcp",
                                                Kind: "eum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nihil",
                                                Port: "ut",
                                                Project: "qui",
                                                Region: "harum",
                                            },
                                        },
                                    },
                                    Kind: "id",
                                    Location: "odit",
                                    Rrdatas: []string{
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "aspernatur",
                                        "et",
                                        "quis",
                                    },
                                },
                            },
                            Kind: "rerum",
                        },
                        Kind: "cupiditate",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ut",
                                                    IPProtocol: "tcp",
                                                    Kind: "repellat",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "et",
                                                    Port: "cum",
                                                    Project: "aut",
                                                    Region: "modi",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptatem",
                                                    IPProtocol: "udp",
                                                    Kind: "delectus",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "temporibus",
                                                    Port: "unde",
                                                    Project: "fugit",
                                                    Region: "omnis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aperiam",
                                                    IPProtocol: "udp",
                                                    Kind: "tenetur",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "rerum",
                                                    Port: "laborum",
                                                    Project: "sapiente",
                                                    Region: "aut",
                                                },
                                            },
                                        },
                                        Kind: "perspiciatis",
                                        Location: "qui",
                                        Rrdatas: []string{
                                            "incidunt",
                                        },
                                        SignatureRrdatas: []string{
                                            "adipisci",
                                            "ut",
                                            "blanditiis",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nesciunt",
                                                    IPProtocol: "udp",
                                                    Kind: "labore",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "omnis",
                                                    Port: "libero",
                                                    Project: "sit",
                                                    Region: "nobis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vel",
                                                    IPProtocol: "tcp",
                                                    Kind: "eius",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quisquam",
                                                    Port: "possimus",
                                                    Project: "sed",
                                                    Region: "labore",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nemo",
                                                    IPProtocol: "undefined",
                                                    Kind: "quam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "voluptate",
                                                    Port: "sint",
                                                    Project: "aut",
                                                    Region: "amet",
                                                },
                                            },
                                        },
                                        Kind: "vel",
                                        Location: "numquam",
                                        Rrdatas: []string{
                                            "cumque",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatum",
                                            "adipisci",
                                            "non",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "est",
                                                    IPProtocol: "undefined",
                                                    Kind: "magnam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "nisi",
                                                    Port: "odio",
                                                    Project: "accusantium",
                                                    Region: "nostrum",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "tcp",
                                                    Kind: "maxime",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "eum",
                                                    Port: "modi",
                                                    Project: "quis",
                                                    Region: "expedita",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laborum",
                                                    IPProtocol: "udp",
                                                    Kind: "voluptate",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "placeat",
                                                    Port: "et",
                                                    Project: "voluptas",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "nihil",
                                        Location: "accusamus",
                                        Rrdatas: []string{
                                            "provident",
                                            "exercitationem",
                                        },
                                        SignatureRrdatas: []string{
                                            "sint",
                                            "qui",
                                        },
                                    },
                                },
                                Kind: "perspiciatis",
                            },
                            Kind: "quis",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolorem",
                                        IPProtocol: "tcp",
                                        Kind: "aut",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "velit",
                                        Port: "unde",
                                        Project: "esse",
                                        Region: "libero",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "enim",
                                        IPProtocol: "udp",
                                        Kind: "id",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "itaque",
                                        Port: "molestiae",
                                        Project: "est",
                                        Region: "molestiae",
                                    },
                                },
                            },
                            TrickleTraffic: 14.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "udp",
                                                Kind: "aut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "asperiores",
                                                Port: "labore",
                                                Project: "in",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "udp",
                                                Kind: "ut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "doloribus",
                                                Port: "tempora",
                                                Project: "excepturi",
                                                Region: "repellendus",
                                            },
                                        },
                                    },
                                    Kind: "nihil",
                                    Rrdatas: []string{
                                        "et",
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "quis",
                                        "aut",
                                    },
                                    Weight: 74.199997,
                                },
                            },
                            Kind: "quod",
                        },
                    },
                    Rrdatas: []string{
                        "officia",
                        "inventore",
                    },
                    SignatureRrdatas: []string{
                        "a",
                        "minima",
                        "fugiat",
                    },
                    TTL: 6347086045378751500,
                    Type: "sed",
                },
                shared.ResourceRecordSet{
                    Kind: "odio",
                    Name: "non",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "undefined",
                                                Kind: "rerum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "asperiores",
                                                Port: "animi",
                                                Project: "minus",
                                                Region: "consequatur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorem",
                                                IPProtocol: "tcp",
                                                Kind: "adipisci",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "officia",
                                                Port: "eligendi",
                                                Project: "doloremque",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perspiciatis",
                                                IPProtocol: "udp",
                                                Kind: "esse",
                                                LoadBalancerType: "none",
                                                NetworkURL: "accusamus",
                                                Port: "quibusdam",
                                                Project: "reiciendis",
                                                Region: "esse",
                                            },
                                        },
                                    },
                                    Kind: "quaerat",
                                    Location: "expedita",
                                    Rrdatas: []string{
                                        "quaerat",
                                        "odit",
                                    },
                                    SignatureRrdatas: []string{
                                        "iusto",
                                        "deserunt",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "unde",
                                                IPProtocol: "tcp",
                                                Kind: "qui",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "voluptatem",
                                                Project: "commodi",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "undefined",
                                                Kind: "rerum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "molestias",
                                                Port: "et",
                                                Project: "officia",
                                                Region: "ipsum",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Location: "velit",
                                    Rrdatas: []string{
                                        "at",
                                        "nisi",
                                        "eos",
                                    },
                                    SignatureRrdatas: []string{
                                        "expedita",
                                        "quisquam",
                                    },
                                },
                            },
                            Kind: "consequatur",
                        },
                        Kind: "aperiam",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "magni",
                                                    IPProtocol: "tcp",
                                                    Kind: "quibusdam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "voluptatem",
                                                    Port: "architecto",
                                                    Project: "hic",
                                                    Region: "quia",
                                                },
                                            },
                                        },
                                        Kind: "et",
                                        Location: "voluptatem",
                                        Rrdatas: []string{
                                            "a",
                                            "ipsam",
                                            "id",
                                        },
                                        SignatureRrdatas: []string{
                                            "qui",
                                            "eum",
                                            "ex",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sed",
                                                    IPProtocol: "undefined",
                                                    Kind: "dolor",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "corporis",
                                                    Port: "nesciunt",
                                                    Project: "blanditiis",
                                                    Region: "in",
                                                },
                                            },
                                        },
                                        Kind: "consequatur",
                                        Location: "dolores",
                                        Rrdatas: []string{
                                            "sint",
                                        },
                                        SignatureRrdatas: []string{
                                            "odio",
                                            "incidunt",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "velit",
                                                    IPProtocol: "tcp",
                                                    Kind: "in",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "omnis",
                                                    Port: "enim",
                                                    Project: "aspernatur",
                                                    Region: "et",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "blanditiis",
                                                    IPProtocol: "tcp",
                                                    Kind: "voluptas",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "facilis",
                                                    Port: "explicabo",
                                                    Project: "ut",
                                                    Region: "consequuntur",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "tenetur",
                                                    IPProtocol: "udp",
                                                    Kind: "similique",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "cumque",
                                                    Port: "reprehenderit",
                                                    Project: "omnis",
                                                    Region: "ut",
                                                },
                                            },
                                        },
                                        Kind: "dicta",
                                        Location: "quo",
                                        Rrdatas: []string{
                                            "eos",
                                            "aut",
                                            "natus",
                                        },
                                        SignatureRrdatas: []string{
                                            "aspernatur",
                                            "dolores",
                                            "voluptatibus",
                                        },
                                    },
                                },
                                Kind: "voluptates",
                            },
                            Kind: "omnis",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "est",
                                        IPProtocol: "tcp",
                                        Kind: "velit",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "delectus",
                                        Port: "sed",
                                        Project: "et",
                                        Region: "tenetur",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "labore",
                                        IPProtocol: "tcp",
                                        Kind: "voluptatem",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "perspiciatis",
                                        Port: "mollitia",
                                        Project: "vitae",
                                        Region: "ad",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "magni",
                                        IPProtocol: "undefined",
                                        Kind: "autem",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "aut",
                                        Port: "explicabo",
                                        Project: "aut",
                                        Region: "quia",
                                    },
                                },
                            },
                            TrickleTraffic: 99.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "aut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "maxime",
                                                Port: "sit",
                                                Project: "ut",
                                                Region: "voluptas",
                                            },
                                        },
                                    },
                                    Kind: "placeat",
                                    Rrdatas: []string{
                                        "et",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "necessitatibus",
                                        "dolor",
                                    },
                                    Weight: 33.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "excepturi",
                                                IPProtocol: "tcp",
                                                Kind: "aut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsam",
                                                Port: "odit",
                                                Project: "repudiandae",
                                                Region: "repellat",
                                            },
                                        },
                                    },
                                    Kind: "voluptatum",
                                    Rrdatas: []string{
                                        "provident",
                                        "laboriosam",
                                        "placeat",
                                    },
                                    SignatureRrdatas: []string{
                                        "quos",
                                        "reiciendis",
                                        "omnis",
                                    },
                                    Weight: 49.099998,
                                },
                            },
                            Kind: "velit",
                        },
                    },
                    Rrdatas: []string{
                        "at",
                        "at",
                    },
                    SignatureRrdatas: []string{
                        "odio",
                        "ipsam",
                    },
                    TTL: 2562852597286972555,
                    Type: "eos",
                },
            },
            ID: "quia",
            IsServing: true,
            Kind: "maxime",
            StartTime: "similique",
            Status: "pending",
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