# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dns/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Location: "unde",
            ManagedZone: "deserunt",
            Project: "porro",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "id",
            Alt: "proto",
            Callback: "perspiciatis",
            ClientOperationID: "nulla",
            Fields: "nihil",
            Key: "fuga",
            OauthToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "eum",
            UploadType: "iusto",
            UploadProtocol: "ullam",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "inventore",
                    Name: "sapiente",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "UDP",
                                                Kind: "vel",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "deleniti",
                                                Port: "similique",
                                                Project: "reprehenderit",
                                                Region: "molestiae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "laboriosam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "est",
                                                Port: "voluptatem",
                                                Project: "consequatur",
                                                Region: "fugiat",
                                            },
                                        },
                                    },
                                    Kind: "a",
                                    Location: "omnis",
                                    Rrdatas: []string{
                                        "accusamus",
                                    },
                                    SignatureRrdatas: []string{
                                        "reiciendis",
                                        "rem",
                                        "quibusdam",
                                        "et",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "UDP",
                                                Kind: "soluta",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quisquam",
                                                Port: "rerum",
                                                Project: "culpa",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "UDP",
                                                Kind: "possimus",
                                                LoadBalancerType: "REGIONAL_L4ILB",
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
                            },
                            Kind: "quia",
                        },
                        Kind: "et",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "modi",
                                                    IPProtocol: "TCP",
                                                    Kind: "iure",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "ut",
                                                    Port: "soluta",
                                                    Project: "qui",
                                                    Region: "ea",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laborum",
                                                    IPProtocol: "TCP",
                                                    Kind: "ut",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "aspernatur",
                                                    Port: "inventore",
                                                    Project: "ut",
                                                    Region: "libero",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "UDP",
                                                    Kind: "ipsum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "ea",
                                                    Port: "magni",
                                                    Project: "placeat",
                                                    Region: "ipsam",
                                                },
                                            },
                                        },
                                        Kind: "est",
                                        Location: "commodi",
                                        Rrdatas: []string{
                                            "similique",
                                            "eaque",
                                        },
                                        SignatureRrdatas: []string{
                                            "harum",
                                            "doloribus",
                                        },
                                    },
                                },
                                Kind: "a",
                            },
                            Kind: "aut",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "non",
                                        IPProtocol: "TCP",
                                        Kind: "neque",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "et",
                                        Port: "culpa",
                                        Project: "aliquam",
                                        Region: "esse",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "totam",
                                        IPProtocol: "TCP",
                                        Kind: "et",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "nesciunt",
                                        Port: "laboriosam",
                                        Project: "aut",
                                        Region: "cum",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "expedita",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "eos",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "adipisci",
                                        Port: "hic",
                                        Project: "consequatur",
                                        Region: "distinctio",
                                    },
                                },
                            },
                            TrickleTraffic: 8209.94,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "UDP",
                                                Kind: "tempore",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "aut",
                                                Port: "reiciendis",
                                                Project: "debitis",
                                                Region: "totam",
                                            },
                                        },
                                    },
                                    Kind: "molestias",
                                    Rrdatas: []string{
                                        "illo",
                                        "id",
                                        "qui",
                                        "quod",
                                    },
                                    SignatureRrdatas: []string{
                                        "eaque",
                                    },
                                    Weight: 4417.11,
                                },
                            },
                            Kind: "veniam",
                        },
                    },
                    Rrdatas: []string{
                        "sed",
                        "ea",
                        "exercitationem",
                        "deleniti",
                    },
                    SignatureRrdatas: []string{
                        "est",
                    },
                    TTL: 317983,
                    Type: "aut",
                },
                shared.ResourceRecordSet{
                    Kind: "esse",
                    Name: "sint",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eligendi",
                                                IPProtocol: "TCP",
                                                Kind: "similique",
                                                LoadBalancerType: "REGIONAL_L4ILB",
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
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "voluptatem",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "in",
                                                    Port: "officia",
                                                    Project: "omnis",
                                                    Region: "voluptatem",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolorem",
                                                    IPProtocol: "UDP",
                                                    Kind: "quis",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "ratione",
                                                    Port: "cum",
                                                    Project: "similique",
                                                    Region: "enim",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nihil",
                                                    IPProtocol: "UDP",
                                                    Kind: "quis",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "et",
                                                    Port: "dolore",
                                                    Project: "possimus",
                                                    Region: "in",
                                                },
                                            },
                                        },
                                        Kind: "qui",
                                        Location: "deserunt",
                                        Rrdatas: []string{
                                            "sunt",
                                            "rerum",
                                            "modi",
                                            "necessitatibus",
                                        },
                                        SignatureRrdatas: []string{
                                            "soluta",
                                            "ducimus",
                                            "ducimus",
                                            "nulla",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cumque",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "ullam",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "vel",
                                                    Port: "velit",
                                                    Project: "qui",
                                                    Region: "cum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aut",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "culpa",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "aut",
                                                    Port: "delectus",
                                                    Project: "eligendi",
                                                    Region: "officia",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "est",
                                                    IPProtocol: "TCP",
                                                    Kind: "et",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "a",
                                                    Port: "incidunt",
                                                    Project: "facilis",
                                                    Region: "qui",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nihil",
                                                    IPProtocol: "TCP",
                                                    Kind: "id",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "sit",
                                                    Port: "rem",
                                                    Project: "corporis",
                                                    Region: "porro",
                                                },
                                            },
                                        },
                                        Kind: "distinctio",
                                        Location: "quis",
                                        Rrdatas: []string{
                                            "eum",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "molestiae",
                                            "debitis",
                                            "dolores",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ullam",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "similique",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "deserunt",
                                                    Port: "omnis",
                                                    Project: "in",
                                                    Region: "aperiam",
                                                },
                                            },
                                        },
                                        Kind: "et",
                                        Location: "ut",
                                        Rrdatas: []string{
                                            "voluptatem",
                                            "et",
                                            "modi",
                                        },
                                        SignatureRrdatas: []string{
                                            "qui",
                                            "consequatur",
                                            "aspernatur",
                                            "iusto",
                                        },
                                    },
                                },
                                Kind: "maiores",
                            },
                            Kind: "saepe",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aut",
                                        IPProtocol: "TCP",
                                        Kind: "nihil",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "aspernatur",
                                        Port: "aspernatur",
                                        Project: "sint",
                                        Region: "aliquid",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quo",
                                        IPProtocol: "TCP",
                                        Kind: "repellat",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "voluptatem",
                                        Port: "et",
                                        Project: "accusamus",
                                        Region: "eaque",
                                    },
                                },
                            },
                            TrickleTraffic: 1624.93,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorem",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "omnis",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "et",
                                                Port: "consequatur",
                                                Project: "velit",
                                                Region: "similique",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "TCP",
                                                Kind: "aperiam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptatibus",
                                                Port: "optio",
                                                Project: "quis",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quam",
                                                IPProtocol: "UDP",
                                                Kind: "ab",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "consequatur",
                                                Port: "aut",
                                                Project: "sit",
                                                Region: "vero",
                                            },
                                        },
                                    },
                                    Kind: "incidunt",
                                    Rrdatas: []string{
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "qui",
                                    },
                                    Weight: 7499.99,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laboriosam",
                                                IPProtocol: "TCP",
                                                Kind: "corrupti",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "laboriosam",
                                                Port: "velit",
                                                Project: "dolor",
                                                Region: "sit",
                                            },
                                        },
                                    },
                                    Kind: "ipsum",
                                    Rrdatas: []string{
                                        "laudantium",
                                        "modi",
                                        "officiis",
                                        "nisi",
                                    },
                                    SignatureRrdatas: []string{
                                        "non",
                                        "est",
                                        "nihil",
                                        "mollitia",
                                    },
                                    Weight: 318.38,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorem",
                                                IPProtocol: "TCP",
                                                Kind: "dolorum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "in",
                                                Port: "cumque",
                                                Project: "labore",
                                                Region: "asperiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "laborum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sed",
                                                Port: "et",
                                                Project: "officia",
                                                Region: "placeat",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UDP",
                                                Kind: "enim",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "in",
                                                Port: "non",
                                                Project: "non",
                                                Region: "modi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "rerum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quod",
                                                Port: "qui",
                                                Project: "quos",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "tempora",
                                    Rrdatas: []string{
                                        "aliquam",
                                        "dicta",
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "iusto",
                                    },
                                    Weight: 4878.38,
                                },
                            },
                            Kind: "enim",
                        },
                    },
                    Rrdatas: []string{
                        "optio",
                        "reiciendis",
                        "vel",
                        "et",
                    },
                    SignatureRrdatas: []string{
                        "perspiciatis",
                    },
                    TTL: 24678,
                    Type: "at",
                },
                shared.ResourceRecordSet{
                    Kind: "et",
                    Name: "maxime",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UDP",
                                                Kind: "sed",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eveniet",
                                                Port: "quo",
                                                Project: "doloribus",
                                                Region: "totam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eius",
                                                IPProtocol: "TCP",
                                                Kind: "nam",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptatem",
                                                Port: "eos",
                                                Project: "voluptatem",
                                                Region: "incidunt",
                                            },
                                        },
                                    },
                                    Kind: "possimus",
                                    Location: "aut",
                                    Rrdatas: []string{
                                        "et",
                                        "eum",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                        "quia",
                                        "eum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "officiis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ad",
                                                Port: "nihil",
                                                Project: "quibusdam",
                                                Region: "rerum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "UDP",
                                                Kind: "tenetur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "est",
                                                Port: "atque",
                                                Project: "numquam",
                                                Region: "temporibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "qui",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aliquam",
                                                Port: "ipsam",
                                                Project: "numquam",
                                                Region: "a",
                                            },
                                        },
                                    },
                                    Kind: "occaecati",
                                    Location: "rem",
                                    Rrdatas: []string{
                                        "quo",
                                    },
                                    SignatureRrdatas: []string{
                                        "sequi",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "TCP",
                                                Kind: "facilis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "numquam",
                                                Port: "minima",
                                                Project: "amet",
                                                Region: "officia",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "UDP",
                                                Kind: "placeat",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "cum",
                                                Port: "sint",
                                                Project: "ad",
                                                Region: "magni",
                                            },
                                        },
                                    },
                                    Kind: "quia",
                                    Location: "porro",
                                    Rrdatas: []string{
                                        "qui",
                                        "laudantium",
                                        "error",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                        "quia",
                                        "ratione",
                                        "dolorem",
                                    },
                                },
                            },
                            Kind: "corrupti",
                        },
                        Kind: "consequuntur",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "earum",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "voluptas",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "placeat",
                                                    Port: "explicabo",
                                                    Project: "et",
                                                    Region: "eius",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vitae",
                                                    IPProtocol: "UDP",
                                                    Kind: "omnis",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "qui",
                                                    Port: "quae",
                                                    Project: "sapiente",
                                                    Region: "non",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nostrum",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "labore",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "aspernatur",
                                                    Port: "veritatis",
                                                    Project: "sit",
                                                    Region: "iste",
                                                },
                                            },
                                        },
                                        Kind: "non",
                                        Location: "aut",
                                        Rrdatas: []string{
                                            "fugiat",
                                            "repellendus",
                                            "maiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "nihil",
                                            "officia",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "veritatis",
                                                    IPProtocol: "TCP",
                                                    Kind: "atque",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "reiciendis",
                                                    Port: "temporibus",
                                                    Project: "debitis",
                                                    Region: "est",
                                                },
                                            },
                                        },
                                        Kind: "laboriosam",
                                        Location: "eius",
                                        Rrdatas: []string{
                                            "blanditiis",
                                            "incidunt",
                                            "debitis",
                                            "hic",
                                        },
                                        SignatureRrdatas: []string{
                                            "earum",
                                            "porro",
                                        },
                                    },
                                },
                                Kind: "et",
                            },
                            Kind: "corrupti",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "impedit",
                                        IPProtocol: "UDP",
                                        Kind: "et",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "nulla",
                                        Port: "pariatur",
                                        Project: "adipisci",
                                        Region: "et",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "est",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "aut",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "eos",
                                        Port: "ratione",
                                        Project: "dolor",
                                        Region: "voluptatibus",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "maiores",
                                        IPProtocol: "TCP",
                                        Kind: "facere",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "consequatur",
                                        Port: "rerum",
                                        Project: "enim",
                                        Region: "consequatur",
                                    },
                                },
                            },
                            TrickleTraffic: 4104.92,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "consectetur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "excepturi",
                                                Port: "quia",
                                                Project: "modi",
                                                Region: "voluptatibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aspernatur",
                                                IPProtocol: "TCP",
                                                Kind: "eos",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aut",
                                                Port: "nisi",
                                                Project: "sapiente",
                                                Region: "temporibus",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "est",
                                        "ea",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                        "vitae",
                                    },
                                    Weight: 3018.31,
                                },
                            },
                            Kind: "voluptate",
                        },
                    },
                    Rrdatas: []string{
                        "incidunt",
                        "molestiae",
                        "magni",
                        "voluptas",
                    },
                    SignatureRrdatas: []string{
                        "tenetur",
                    },
                    TTL: 725595,
                    Type: "perferendis",
                },
                shared.ResourceRecordSet{
                    Kind: "aut",
                    Name: "provident",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ratione",
                                                IPProtocol: "UDP",
                                                Kind: "beatae",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "sunt",
                                                Port: "cum",
                                                Project: "tempore",
                                                Region: "consequatur",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolore",
                                                IPProtocol: "TCP",
                                                Kind: "quam",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "iste",
                                                Port: "eum",
                                                Project: "eos",
                                                Region: "vel",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Location: "aspernatur",
                                    Rrdatas: []string{
                                        "aliquam",
                                        "magni",
                                    },
                                    SignatureRrdatas: []string{
                                        "illo",
                                        "voluptatum",
                                        "corporis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "TCP",
                                                Kind: "blanditiis",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "nobis",
                                                Port: "dignissimos",
                                                Project: "optio",
                                                Region: "at",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "TCP",
                                                Kind: "vel",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sit",
                                                Port: "molestias",
                                                Project: "temporibus",
                                                Region: "dicta",
                                            },
                                        },
                                    },
                                    Kind: "inventore",
                                    Location: "distinctio",
                                    Rrdatas: []string{
                                        "quia",
                                        "omnis",
                                        "nulla",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                        "quaerat",
                                        "dolor",
                                        "autem",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officia",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "enim",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quis",
                                                Port: "dolores",
                                                Project: "velit",
                                                Region: "dolor",
                                            },
                                        },
                                    },
                                    Kind: "praesentium",
                                    Location: "molestiae",
                                    Rrdatas: []string{
                                        "porro",
                                    },
                                    SignatureRrdatas: []string{
                                        "quos",
                                        "beatae",
                                        "totam",
                                        "occaecati",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nemo",
                                                IPProtocol: "TCP",
                                                Kind: "in",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "a",
                                                Port: "quia",
                                                Project: "facilis",
                                                Region: "voluptatum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "UDP",
                                                Kind: "et",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "molestias",
                                                Port: "nesciunt",
                                                Project: "sed",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "TCP",
                                                Kind: "minima",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "magni",
                                                Port: "voluptas",
                                                Project: "reprehenderit",
                                                Region: "ratione",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "a",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "amet",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "et",
                                                Port: "culpa",
                                                Project: "perspiciatis",
                                                Region: "sunt",
                                            },
                                        },
                                    },
                                    Kind: "blanditiis",
                                    Location: "voluptates",
                                    Rrdatas: []string{
                                        "vitae",
                                        "praesentium",
                                        "et",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                        "explicabo",
                                        "et",
                                        "molestiae",
                                    },
                                },
                            },
                            Kind: "est",
                        },
                        Kind: "rem",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "UDP",
                                                    Kind: "possimus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "quidem",
                                                    Port: "minus",
                                                    Project: "labore",
                                                    Region: "voluptas",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nesciunt",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "quibusdam",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "a",
                                                    Port: "incidunt",
                                                    Project: "praesentium",
                                                    Region: "quas",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "deserunt",
                                                    IPProtocol: "UDP",
                                                    Kind: "vero",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "blanditiis",
                                                    Port: "aspernatur",
                                                    Project: "tenetur",
                                                    Region: "dolorum",
                                                },
                                            },
                                        },
                                        Kind: "in",
                                        Location: "eos",
                                        Rrdatas: []string{
                                            "nesciunt",
                                            "voluptates",
                                            "asperiores",
                                            "illum",
                                        },
                                        SignatureRrdatas: []string{
                                            "nesciunt",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "TCP",
                                                    Kind: "in",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "veritatis",
                                                    Port: "itaque",
                                                    Project: "nihil",
                                                    Region: "ducimus",
                                                },
                                            },
                                        },
                                        Kind: "quaerat",
                                        Location: "qui",
                                        Rrdatas: []string{
                                            "quod",
                                            "aperiam",
                                            "nemo",
                                            "a",
                                        },
                                        SignatureRrdatas: []string{
                                            "ex",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ex",
                                                    IPProtocol: "TCP",
                                                    Kind: "sit",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "amet",
                                                    Port: "nulla",
                                                    Project: "in",
                                                    Region: "sed",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "non",
                                                    IPProtocol: "UDP",
                                                    Kind: "aspernatur",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "rerum",
                                                    Port: "aspernatur",
                                                    Project: "accusamus",
                                                    Region: "sunt",
                                                },
                                            },
                                        },
                                        Kind: "blanditiis",
                                        Location: "illo",
                                        Rrdatas: []string{
                                            "dicta",
                                            "incidunt",
                                        },
                                        SignatureRrdatas: []string{
                                            "et",
                                        },
                                    },
                                },
                                Kind: "voluptas",
                            },
                            Kind: "aperiam",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "perferendis",
                                        IPProtocol: "TCP",
                                        Kind: "molestiae",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "et",
                                        Port: "perspiciatis",
                                        Project: "magnam",
                                        Region: "aperiam",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "modi",
                                        IPProtocol: "TCP",
                                        Kind: "aliquam",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "magni",
                                        Port: "autem",
                                        Project: "aut",
                                        Region: "quos",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "fugit",
                                        IPProtocol: "UDP",
                                        Kind: "dolorum",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "aut",
                                        Port: "autem",
                                        Project: "doloribus",
                                        Region: "quae",
                                    },
                                },
                            },
                            TrickleTraffic: 4090.54,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugiat",
                                                IPProtocol: "TCP",
                                                Kind: "aut",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "rerum",
                                                Port: "doloribus",
                                                Project: "consequatur",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "enim",
                                    Rrdatas: []string{
                                        "et",
                                        "quis",
                                        "quasi",
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "distinctio",
                                        "vel",
                                        "dolore",
                                    },
                                    Weight: 6339.31,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "TCP",
                                                Kind: "at",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "dolores",
                                                Port: "iste",
                                                Project: "molestiae",
                                                Region: "quis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UDP",
                                                Kind: "id",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ducimus",
                                                Port: "ea",
                                                Project: "ut",
                                                Region: "eum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "commodi",
                                                IPProtocol: "UDP",
                                                Kind: "qui",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "id",
                                                Port: "incidunt",
                                                Project: "ducimus",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "itaque",
                                    Rrdatas: []string{
                                        "quaerat",
                                        "maiores",
                                        "eum",
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                        "eveniet",
                                        "exercitationem",
                                    },
                                    Weight: 1210.59,
                                },
                            },
                            Kind: "asperiores",
                        },
                    },
                    Rrdatas: []string{
                        "magnam",
                    },
                    SignatureRrdatas: []string{
                        "odit",
                    },
                    TTL: 489509,
                    Type: "hic",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "ut",
                    Name: "ea",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "inventore",
                                                IPProtocol: "UDP",
                                                Kind: "qui",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "aut",
                                                Port: "harum",
                                                Project: "enim",
                                                Region: "dolores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "TCP",
                                                Kind: "autem",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "placeat",
                                                Port: "soluta",
                                                Project: "labore",
                                                Region: "quibusdam",
                                            },
                                        },
                                    },
                                    Kind: "ipsum",
                                    Location: "quas",
                                    Rrdatas: []string{
                                        "exercitationem",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "aliquid",
                                        "labore",
                                        "id",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "UDP",
                                                Kind: "sed",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "unde",
                                                Port: "et",
                                                Project: "occaecati",
                                                Region: "earum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "UDP",
                                                Kind: "accusantium",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptatem",
                                                Port: "ut",
                                                Project: "magni",
                                                Region: "asperiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "impedit",
                                                IPProtocol: "TCP",
                                                Kind: "impedit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "laborum",
                                                Port: "nostrum",
                                                Project: "tempore",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "ducimus",
                                    Location: "esse",
                                    Rrdatas: []string{
                                        "magni",
                                        "vel",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "eum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "saepe",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "delectus",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "unde",
                                                Port: "reiciendis",
                                                Project: "ad",
                                                Region: "ratione",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deserunt",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "eveniet",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptate",
                                                Port: "culpa",
                                                Project: "omnis",
                                                Region: "aut",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "blanditiis",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ea",
                                                Port: "accusantium",
                                                Project: "dolore",
                                                Region: "necessitatibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quas",
                                                IPProtocol: "UDP",
                                                Kind: "enim",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quis",
                                                Port: "saepe",
                                                Project: "cupiditate",
                                                Region: "accusantium",
                                            },
                                        },
                                    },
                                    Kind: "placeat",
                                    Location: "fuga",
                                    Rrdatas: []string{
                                        "sit",
                                        "molestiae",
                                    },
                                    SignatureRrdatas: []string{
                                        "eos",
                                        "dolorem",
                                        "ab",
                                        "ut",
                                    },
                                },
                            },
                            Kind: "aliquam",
                        },
                        Kind: "sit",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "odit",
                                                    IPProtocol: "TCP",
                                                    Kind: "ut",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "quod",
                                                    Port: "iure",
                                                    Project: "soluta",
                                                    Region: "non",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolorum",
                                                    IPProtocol: "UDP",
                                                    Kind: "impedit",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "quia",
                                                    Port: "cum",
                                                    Project: "nisi",
                                                    Region: "rerum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cum",
                                                    IPProtocol: "TCP",
                                                    Kind: "debitis",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "perspiciatis",
                                                    Port: "ratione",
                                                    Project: "veniam",
                                                    Region: "vero",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "doloremque",
                                                    IPProtocol: "TCP",
                                                    Kind: "impedit",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "consequatur",
                                                    Port: "praesentium",
                                                    Project: "quis",
                                                    Region: "accusantium",
                                                },
                                            },
                                        },
                                        Kind: "provident",
                                        Location: "iste",
                                        Rrdatas: []string{
                                            "ea",
                                            "sunt",
                                            "quas",
                                            "voluptate",
                                        },
                                        SignatureRrdatas: []string{
                                            "accusantium",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nisi",
                                                    IPProtocol: "UDP",
                                                    Kind: "dolorum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "minima",
                                                    Port: "ut",
                                                    Project: "non",
                                                    Region: "eligendi",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "fugit",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "in",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "optio",
                                                    Port: "ut",
                                                    Project: "tempore",
                                                    Region: "est",
                                                },
                                            },
                                        },
                                        Kind: "hic",
                                        Location: "iure",
                                        Rrdatas: []string{
                                            "tempora",
                                        },
                                        SignatureRrdatas: []string{
                                            "blanditiis",
                                            "animi",
                                            "aut",
                                        },
                                    },
                                },
                                Kind: "officia",
                            },
                            Kind: "fugiat",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "repudiandae",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "libero",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "odio",
                                        Port: "vel",
                                        Project: "nobis",
                                        Region: "molestias",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "est",
                                        IPProtocol: "TCP",
                                        Kind: "doloremque",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "sint",
                                        Port: "aspernatur",
                                        Project: "perspiciatis",
                                        Region: "dignissimos",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "doloribus",
                                        IPProtocol: "TCP",
                                        Kind: "eum",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "aut",
                                        Port: "sunt",
                                        Project: "praesentium",
                                        Region: "tempora",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolorem",
                                        IPProtocol: "TCP",
                                        Kind: "ut",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "rerum",
                                        Port: "rerum",
                                        Project: "aut",
                                        Region: "dolorum",
                                    },
                                },
                            },
                            TrickleTraffic: 3283.03,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatibus",
                                                IPProtocol: "TCP",
                                                Kind: "officiis",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quas",
                                                Port: "vel",
                                                Project: "et",
                                                Region: "ut",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "et",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eum",
                                                Port: "quis",
                                                Project: "ut",
                                                Region: "ipsa",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "aperiam",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                    },
                                    Weight: 3164.88,
                                },
                            },
                            Kind: "iure",
                        },
                    },
                    Rrdatas: []string{
                        "tenetur",
                    },
                    SignatureRrdatas: []string{
                        "ullam",
                        "et",
                        "nesciunt",
                    },
                    TTL: 580107,
                    Type: "rerum",
                },
                shared.ResourceRecordSet{
                    Kind: "mollitia",
                    Name: "ducimus",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "culpa",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ratione",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "suscipit",
                                                Port: "odio",
                                                Project: "fuga",
                                                Region: "beatae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "UDP",
                                                Kind: "voluptates",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "debitis",
                                                Port: "eaque",
                                                Project: "iusto",
                                                Region: "inventore",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sint",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "voluptatum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sit",
                                                Port: "quod",
                                                Project: "iusto",
                                                Region: "eveniet",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "UDP",
                                                Kind: "porro",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "cupiditate",
                                                Port: "corporis",
                                                Project: "voluptatem",
                                                Region: "repellat",
                                            },
                                        },
                                    },
                                    Kind: "alias",
                                    Location: "commodi",
                                    Rrdatas: []string{
                                        "rem",
                                        "est",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "reiciendis",
                                    },
                                },
                            },
                            Kind: "ut",
                        },
                        Kind: "quia",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nostrum",
                                                    IPProtocol: "UDP",
                                                    Kind: "velit",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "molestiae",
                                                    Port: "est",
                                                    Project: "enim",
                                                    Region: "voluptatum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ea",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "harum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "necessitatibus",
                                                    Port: "sint",
                                                    Project: "et",
                                                    Region: "consequatur",
                                                },
                                            },
                                        },
                                        Kind: "non",
                                        Location: "blanditiis",
                                        Rrdatas: []string{
                                            "laboriosam",
                                            "et",
                                            "ut",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolores",
                                            "ex",
                                            "aspernatur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nisi",
                                                    IPProtocol: "TCP",
                                                    Kind: "deserunt",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "distinctio",
                                                    Port: "ea",
                                                    Project: "qui",
                                                    Region: "eaque",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "repellat",
                                                    IPProtocol: "UDP",
                                                    Kind: "aliquid",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "quisquam",
                                                    Port: "itaque",
                                                    Project: "quidem",
                                                    Region: "tempore",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vel",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "reiciendis",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "necessitatibus",
                                                    Port: "a",
                                                    Project: "voluptas",
                                                    Region: "fugit",
                                                },
                                            },
                                        },
                                        Kind: "optio",
                                        Location: "enim",
                                        Rrdatas: []string{
                                            "vitae",
                                            "ratione",
                                        },
                                        SignatureRrdatas: []string{
                                            "veritatis",
                                            "voluptatem",
                                            "et",
                                            "eos",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quaerat",
                                                    IPProtocol: "TCP",
                                                    Kind: "accusamus",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "dolor",
                                                    Port: "a",
                                                    Project: "et",
                                                    Region: "sed",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quia",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "qui",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "itaque",
                                                    Port: "maxime",
                                                    Project: "earum",
                                                    Region: "pariatur",
                                                },
                                            },
                                        },
                                        Kind: "illo",
                                        Location: "itaque",
                                        Rrdatas: []string{
                                            "voluptatibus",
                                            "saepe",
                                            "in",
                                        },
                                        SignatureRrdatas: []string{
                                            "vel",
                                            "non",
                                            "ratione",
                                            "voluptas",
                                        },
                                    },
                                },
                                Kind: "nobis",
                            },
                            Kind: "consectetur",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eveniet",
                                        IPProtocol: "UDP",
                                        Kind: "aut",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "sunt",
                                        Port: "dolores",
                                        Project: "dolorum",
                                        Region: "culpa",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eum",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "aspernatur",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "maiores",
                                        Port: "eos",
                                        Project: "eveniet",
                                        Region: "inventore",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "enim",
                                        IPProtocol: "TCP",
                                        Kind: "rem",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "deleniti",
                                        Port: "blanditiis",
                                        Project: "molestias",
                                        Region: "voluptatibus",
                                    },
                                },
                            },
                            TrickleTraffic: 9672.6,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vero",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "sed",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "enim",
                                                Port: "praesentium",
                                                Project: "ea",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "in",
                                    Rrdatas: []string{
                                        "tempore",
                                    },
                                    SignatureRrdatas: []string{
                                        "nisi",
                                    },
                                    Weight: 8567.56,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "TCP",
                                                Kind: "vel",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptatem",
                                                Port: "et",
                                                Project: "autem",
                                                Region: "et",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "distinctio",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "fuga",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "repudiandae",
                                                Port: "et",
                                                Project: "tempore",
                                                Region: "est",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "TCP",
                                                Kind: "ipsam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "fugiat",
                                                Port: "ea",
                                                Project: "omnis",
                                                Region: "ea",
                                            },
                                        },
                                    },
                                    Kind: "veniam",
                                    Rrdatas: []string{
                                        "quo",
                                        "doloremque",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                        "in",
                                        "aut",
                                    },
                                    Weight: 5308.6,
                                },
                            },
                            Kind: "id",
                        },
                    },
                    Rrdatas: []string{
                        "nihil",
                    },
                    SignatureRrdatas: []string{
                        "quidem",
                        "doloremque",
                        "a",
                    },
                    TTL: 889288,
                    Type: "aut",
                },
                shared.ResourceRecordSet{
                    Kind: "soluta",
                    Name: "et",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "alias",
                                                IPProtocol: "TCP",
                                                Kind: "itaque",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "a",
                                                Port: "cupiditate",
                                                Project: "quibusdam",
                                                Region: "commodi",
                                            },
                                        },
                                    },
                                    Kind: "asperiores",
                                    Location: "consectetur",
                                    Rrdatas: []string{
                                        "sit",
                                        "pariatur",
                                    },
                                    SignatureRrdatas: []string{
                                        "assumenda",
                                        "voluptas",
                                        "quisquam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "nemo",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "sed",
                                                Port: "dicta",
                                                Project: "ad",
                                                Region: "modi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "accusantium",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "qui",
                                                Port: "et",
                                                Project: "excepturi",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "modi",
                                    Location: "vero",
                                    Rrdatas: []string{
                                        "neque",
                                        "illo",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptates",
                                        "est",
                                        "rerum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eveniet",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "sit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quo",
                                                Port: "et",
                                                Project: "molestiae",
                                                Region: "non",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "corporis",
                                                IPProtocol: "TCP",
                                                Kind: "quasi",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "nihil",
                                                Port: "facere",
                                                Project: "iure",
                                                Region: "molestiae",
                                            },
                                        },
                                    },
                                    Kind: "nesciunt",
                                    Location: "doloremque",
                                    Rrdatas: []string{
                                        "eveniet",
                                        "explicabo",
                                    },
                                    SignatureRrdatas: []string{
                                        "accusamus",
                                        "debitis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eligendi",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "maiores",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "omnis",
                                                Port: "culpa",
                                                Project: "commodi",
                                                Region: "blanditiis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "TCP",
                                                Kind: "autem",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "commodi",
                                                Port: "omnis",
                                                Project: "quaerat",
                                                Region: "magni",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolores",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "soluta",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "minima",
                                                Port: "aspernatur",
                                                Project: "cupiditate",
                                                Region: "at",
                                            },
                                        },
                                    },
                                    Kind: "sed",
                                    Location: "qui",
                                    Rrdatas: []string{
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "qui",
                                    },
                                },
                            },
                            Kind: "ut",
                        },
                        Kind: "maxime",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolor",
                                                    IPProtocol: "TCP",
                                                    Kind: "laborum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "vitae",
                                                    Port: "nobis",
                                                    Project: "aut",
                                                    Region: "reiciendis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quisquam",
                                                    IPProtocol: "TCP",
                                                    Kind: "delectus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "molestias",
                                                    Port: "et",
                                                    Project: "ullam",
                                                    Region: "quo",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "unde",
                                                    IPProtocol: "TCP",
                                                    Kind: "non",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "occaecati",
                                                    Port: "itaque",
                                                    Project: "ut",
                                                    Region: "quisquam",
                                                },
                                            },
                                        },
                                        Kind: "debitis",
                                        Location: "aperiam",
                                        Rrdatas: []string{
                                            "molestiae",
                                            "alias",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolore",
                                        },
                                    },
                                },
                                Kind: "reiciendis",
                            },
                            Kind: "voluptatem",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "vero",
                                        IPProtocol: "TCP",
                                        Kind: "praesentium",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "dignissimos",
                                        Port: "libero",
                                        Project: "suscipit",
                                        Region: "sunt",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aut",
                                        IPProtocol: "UDP",
                                        Kind: "rerum",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "doloribus",
                                        Port: "ea",
                                        Project: "autem",
                                        Region: "saepe",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "delectus",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "autem",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "cum",
                                        Port: "incidunt",
                                        Project: "et",
                                        Region: "ut",
                                    },
                                },
                            },
                            TrickleTraffic: 2164.57,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maxime",
                                                IPProtocol: "UDP",
                                                Kind: "quisquam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "atque",
                                                Port: "qui",
                                                Project: "adipisci",
                                                Region: "quos",
                                            },
                                        },
                                    },
                                    Kind: "quia",
                                    Rrdatas: []string{
                                        "sed",
                                        "nulla",
                                        "odio",
                                        "eos",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "ullam",
                                        "voluptas",
                                        "beatae",
                                    },
                                    Weight: 8180.34,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "UDP",
                                                Kind: "sequi",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "corporis",
                                                Port: "dolore",
                                                Project: "architecto",
                                                Region: "eaque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nihil",
                                                IPProtocol: "TCP",
                                                Kind: "odit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "similique",
                                                Port: "et",
                                                Project: "dolore",
                                                Region: "veniam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "mollitia",
                                                IPProtocol: "UDP",
                                                Kind: "sed",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aut",
                                                Port: "laborum",
                                                Project: "recusandae",
                                                Region: "alias",
                                            },
                                        },
                                    },
                                    Kind: "reprehenderit",
                                    Rrdatas: []string{
                                        "et",
                                        "tempore",
                                        "magnam",
                                        "modi",
                                    },
                                    SignatureRrdatas: []string{
                                        "accusantium",
                                        "eaque",
                                    },
                                    Weight: 74.68,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "TCP",
                                                Kind: "eligendi",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "nihil",
                                                Port: "consequatur",
                                                Project: "mollitia",
                                                Region: "impedit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "UDP",
                                                Kind: "blanditiis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "animi",
                                                Port: "eveniet",
                                                Project: "et",
                                                Region: "assumenda",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "TCP",
                                                Kind: "libero",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "blanditiis",
                                                Port: "quis",
                                                Project: "dicta",
                                                Region: "officiis",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Rrdatas: []string{
                                        "vitae",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                    },
                                    Weight: 1830.33,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "TCP",
                                                Kind: "maxime",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "non",
                                                Port: "cum",
                                                Project: "corrupti",
                                                Region: "ratione",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "alias",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "nihil",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "veritatis",
                                                Port: "voluptatem",
                                                Project: "quia",
                                                Region: "ut",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "numquam",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "vero",
                                                Port: "quo",
                                                Project: "et",
                                                Region: "nesciunt",
                                            },
                                        },
                                    },
                                    Kind: "nesciunt",
                                    Rrdatas: []string{
                                        "id",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "nam",
                                    },
                                    Weight: 7278.88,
                                },
                            },
                            Kind: "at",
                        },
                    },
                    Rrdatas: []string{
                        "iste",
                        "vel",
                        "accusantium",
                    },
                    SignatureRrdatas: []string{
                        "inventore",
                        "repudiandae",
                    },
                    TTL: 80061,
                    Type: "ab",
                },
                shared.ResourceRecordSet{
                    Kind: "sint",
                    Name: "nostrum",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "TCP",
                                                Kind: "blanditiis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "dolorem",
                                                Port: "odit",
                                                Project: "libero",
                                                Region: "illum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perspiciatis",
                                                IPProtocol: "TCP",
                                                Kind: "officia",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eveniet",
                                                Port: "minus",
                                                Project: "in",
                                                Region: "velit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nihil",
                                                IPProtocol: "TCP",
                                                Kind: "nihil",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ex",
                                                Port: "necessitatibus",
                                                Project: "aut",
                                                Region: "id",
                                            },
                                        },
                                    },
                                    Kind: "officiis",
                                    Location: "consequatur",
                                    Rrdatas: []string{
                                        "eligendi",
                                    },
                                    SignatureRrdatas: []string{
                                        "sint",
                                        "aperiam",
                                        "impedit",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolor",
                                                IPProtocol: "UDP",
                                                Kind: "atque",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eos",
                                                Port: "consequuntur",
                                                Project: "ea",
                                                Region: "dolorum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "et",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "veniam",
                                                Port: "eligendi",
                                                Project: "laboriosam",
                                                Region: "odit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "animi",
                                                IPProtocol: "TCP",
                                                Kind: "sapiente",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ratione",
                                                Port: "aliquam",
                                                Project: "aliquam",
                                                Region: "sed",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officiis",
                                                IPProtocol: "TCP",
                                                Kind: "quos",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eveniet",
                                                Port: "ea",
                                                Project: "amet",
                                                Region: "impedit",
                                            },
                                        },
                                    },
                                    Kind: "provident",
                                    Location: "officia",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "ipsam",
                                    },
                                    SignatureRrdatas: []string{
                                        "ducimus",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ex",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "repudiandae",
                                                Port: "reiciendis",
                                                Project: "minus",
                                                Region: "quae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "nostrum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "in",
                                                Port: "autem",
                                                Project: "dolor",
                                                Region: "et",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quibusdam",
                                                IPProtocol: "UDP",
                                                Kind: "nisi",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "assumenda",
                                                Port: "sapiente",
                                                Project: "id",
                                                Region: "debitis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UDP",
                                                Kind: "et",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "odio",
                                                Port: "quae",
                                                Project: "corrupti",
                                                Region: "quia",
                                            },
                                        },
                                    },
                                    Kind: "ducimus",
                                    Location: "dolores",
                                    Rrdatas: []string{
                                        "ipsum",
                                        "dolorum",
                                        "dicta",
                                    },
                                    SignatureRrdatas: []string{
                                        "qui",
                                        "et",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UDP",
                                                Kind: "in",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "esse",
                                                Port: "necessitatibus",
                                                Project: "consequatur",
                                                Region: "optio",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "TCP",
                                                Kind: "non",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "inventore",
                                                Port: "in",
                                                Project: "debitis",
                                                Region: "adipisci",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sint",
                                                IPProtocol: "UDP",
                                                Kind: "sed",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "suscipit",
                                                Port: "distinctio",
                                                Project: "quia",
                                                Region: "est",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugit",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ut",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "inventore",
                                                Port: "dolores",
                                                Project: "voluptatibus",
                                                Region: "dicta",
                                            },
                                        },
                                    },
                                    Kind: "aspernatur",
                                    Location: "iure",
                                    Rrdatas: []string{
                                        "qui",
                                        "similique",
                                        "in",
                                        "consequatur",
                                    },
                                    SignatureRrdatas: []string{
                                        "nisi",
                                        "doloribus",
                                    },
                                },
                            },
                            Kind: "possimus",
                        },
                        Kind: "sunt",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "expedita",
                                                    IPProtocol: "TCP",
                                                    Kind: "sint",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "atque",
                                                    Port: "ab",
                                                    Project: "ut",
                                                    Region: "aut",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "iste",
                                                    IPProtocol: "TCP",
                                                    Kind: "dolorem",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "est",
                                                    Port: "et",
                                                    Project: "eaque",
                                                    Region: "delectus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "est",
                                                    IPProtocol: "UDP",
                                                    Kind: "eius",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "ut",
                                                    Port: "facilis",
                                                    Project: "ipsa",
                                                    Region: "laboriosam",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sit",
                                                    IPProtocol: "UDP",
                                                    Kind: "aspernatur",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "voluptatum",
                                                    Port: "possimus",
                                                    Project: "qui",
                                                    Region: "magnam",
                                                },
                                            },
                                        },
                                        Kind: "ullam",
                                        Location: "recusandae",
                                        Rrdatas: []string{
                                            "asperiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "neque",
                                            "vel",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eos",
                                                    IPProtocol: "UDP",
                                                    Kind: "tempora",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "quasi",
                                                    Port: "et",
                                                    Project: "nihil",
                                                    Region: "minus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "qui",
                                                    IPProtocol: "UDP",
                                                    Kind: "enim",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "porro",
                                                    Port: "reprehenderit",
                                                    Project: "suscipit",
                                                    Region: "reprehenderit",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "qui",
                                                    IPProtocol: "UDP",
                                                    Kind: "vel",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "eius",
                                                    Port: "voluptatem",
                                                    Project: "aut",
                                                    Region: "aut",
                                                },
                                            },
                                        },
                                        Kind: "neque",
                                        Location: "saepe",
                                        Rrdatas: []string{
                                            "cumque",
                                            "dolor",
                                        },
                                        SignatureRrdatas: []string{
                                            "ut",
                                            "quia",
                                        },
                                    },
                                },
                                Kind: "deleniti",
                            },
                            Kind: "nam",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "facere",
                                        IPProtocol: "UDP",
                                        Kind: "id",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "dolores",
                                        Port: "eius",
                                        Project: "sed",
                                        Region: "fuga",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "repellendus",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "quos",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "at",
                                        Port: "quia",
                                        Project: "dolores",
                                        Region: "ipsam",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "delectus",
                                        IPProtocol: "TCP",
                                        Kind: "quos",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "architecto",
                                        Port: "quasi",
                                        Project: "minima",
                                        Region: "debitis",
                                    },
                                },
                            },
                            TrickleTraffic: 9025.81,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "UDP",
                                                Kind: "itaque",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "molestias",
                                                Port: "consequatur",
                                                Project: "repellat",
                                                Region: "temporibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "velit",
                                                IPProtocol: "TCP",
                                                Kind: "sed",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "nostrum",
                                                Port: "eum",
                                                Project: "corporis",
                                                Region: "temporibus",
                                            },
                                        },
                                    },
                                    Kind: "deserunt",
                                    Rrdatas: []string{
                                        "et",
                                        "aut",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "est",
                                    },
                                    Weight: 7119.91,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deserunt",
                                                IPProtocol: "UDP",
                                                Kind: "cumque",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ea",
                                                Port: "officiis",
                                                Project: "et",
                                                Region: "fugiat",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "esse",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "esse",
                                                Port: "perferendis",
                                                Project: "doloremque",
                                                Region: "quia",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "pariatur",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "optio",
                                                Port: "id",
                                                Project: "incidunt",
                                                Region: "aspernatur",
                                            },
                                        },
                                    },
                                    Kind: "sed",
                                    Rrdatas: []string{
                                        "ipsa",
                                        "itaque",
                                        "deleniti",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                    },
                                    Weight: 6771.41,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deserunt",
                                                IPProtocol: "UDP",
                                                Kind: "aut",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptatum",
                                                Port: "non",
                                                Project: "impedit",
                                                Region: "perspiciatis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "TCP",
                                                Kind: "aut",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "occaecati",
                                                Port: "fugit",
                                                Project: "doloremque",
                                                Region: "et",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "tenetur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "culpa",
                                                Port: "ut",
                                                Project: "odit",
                                                Region: "accusamus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "UDP",
                                                Kind: "blanditiis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptatem",
                                                Port: "optio",
                                                Project: "velit",
                                                Region: "quae",
                                            },
                                        },
                                    },
                                    Kind: "corrupti",
                                    Rrdatas: []string{
                                        "et",
                                        "repellendus",
                                        "officia",
                                        "incidunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "quos",
                                        "ut",
                                        "maxime",
                                        "dolorum",
                                    },
                                    Weight: 8398.07,
                                },
                            },
                            Kind: "rerum",
                        },
                    },
                    Rrdatas: []string{
                        "hic",
                    },
                    SignatureRrdatas: []string{
                        "omnis",
                    },
                    TTL: 931077,
                    Type: "pariatur",
                },
            },
            ID: "tempore",
            IsServing: false,
            Kind: "quos",
            StartTime: "debitis",
            Status: "PENDING",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Changes

* `DNSChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `DNSChangesGet` - Fetches the representation of an existing Change.
* `DNSChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### DNSKeys

* `DNSDNSKeysGet` - Fetches the representation of an existing DnsKey.
* `DNSDNSKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### ManagedZoneOperations

* `DNSManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `DNSManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### ManagedZones

* `DNSManagedZonesCreate` - Creates a new ManagedZone.
* `DNSManagedZonesDelete` - Deletes a previously created ManagedZone.
* `DNSManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `DNSManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DNSManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `DNSManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `DNSManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DNSManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DNSManagedZonesUpdate` - Updates an existing ManagedZone.

### Policies

* `DNSPoliciesCreate` - Creates a new Policy.
* `DNSPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `DNSPoliciesGet` - Fetches the representation of an existing Policy.
* `DNSPoliciesList` - Enumerates all Policies associated with a project.
* `DNSPoliciesPatch` - Applies a partial update to an existing Policy.
* `DNSPoliciesUpdate` - Updates an existing Policy.

### Projects

* `DNSProjectsGet` - Fetches the representation of an existing Project.

### ResourceRecordSets

* `DNSResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `DNSResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `DNSResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `DNSResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `DNSResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### ResponsePolicies

* `DNSResponsePoliciesCreate` - Creates a new Response Policy
* `DNSResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `DNSResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `DNSResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `DNSResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `DNSResponsePoliciesUpdate` - Updates an existing Response Policy.

### ResponsePolicyRules

* `DNSResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `DNSResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `DNSResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `DNSResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `DNSResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `DNSResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
