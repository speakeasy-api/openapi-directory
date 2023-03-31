# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dns/v1beta2/go
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
        DollarXgafv: "2",
        Change: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "distinctio",
                    Name: "quibusdam",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "corrupti",
                                                IPProtocol: "udp",
                                                Kind: "vel",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "deserunt",
                                                Port: "suscipit",
                                                Project: "iure",
                                                Region: "magnam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "debitis",
                                                IPProtocol: "undefined",
                                                Kind: "delectus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "suscipit",
                                                Port: "molestiae",
                                                Project: "minus",
                                                Region: "placeat",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "tcp",
                                                Kind: "excepturi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "recusandae",
                                                Port: "temporibus",
                                                Project: "ab",
                                                Region: "quis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "tcp",
                                                Kind: "perferendis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repellendus",
                                                Port: "sapiente",
                                                Project: "quo",
                                                Region: "odit",
                                            },
                                        },
                                    },
                                    Kind: "at",
                                    Location: "at",
                                    Rrdatas: []string{
                                        "molestiae",
                                        "quod",
                                        "quod",
                                        "esse",
                                    },
                                    SignatureRrdatas: []string{
                                        "porro",
                                        "dolorum",
                                        "dicta",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officia",
                                                IPProtocol: "tcp",
                                                Kind: "fugit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "hic",
                                                Port: "optio",
                                                Project: "totam",
                                                Region: "beatae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "commodi",
                                                IPProtocol: "tcp",
                                                Kind: "modi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "impedit",
                                                Port: "cum",
                                                Project: "esse",
                                                Region: "ipsum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "excepturi",
                                                IPProtocol: "undefined",
                                                Kind: "perferendis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "natus",
                                                Port: "sed",
                                                Project: "iste",
                                                Region: "dolor",
                                            },
                                        },
                                    },
                                    Kind: "natus",
                                    Location: "laboriosam",
                                    Rrdatas: []string{
                                        "saepe",
                                        "fuga",
                                        "in",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "iure",
                                        "saepe",
                                        "quidem",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "udp",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "laborum",
                                                Port: "dolores",
                                                Project: "dolorem",
                                                Region: "corporis",
                                            },
                                        },
                                    },
                                    Kind: "explicabo",
                                    Location: "nobis",
                                    Rrdatas: []string{
                                        "omnis",
                                        "nemo",
                                    },
                                    SignatureRrdatas: []string{
                                        "excepturi",
                                        "accusantium",
                                    },
                                },
                            },
                            Kind: "iure",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sapiente",
                                                IPProtocol: "undefined",
                                                Kind: "mollitia",
                                                LoadBalancerType: "none",
                                                NetworkURL: "culpa",
                                                Port: "consequuntur",
                                                Project: "repellat",
                                                Region: "mollitia",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "undefined",
                                                Kind: "commodi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "molestiae",
                                                Port: "velit",
                                                Project: "error",
                                                Region: "quia",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "undefined",
                                                Kind: "laborum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "enim",
                                                Port: "odit",
                                                Project: "quo",
                                                Region: "sequi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tenetur",
                                                IPProtocol: "tcp",
                                                Kind: "id",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "quasi",
                                                Project: "error",
                                                Region: "temporibus",
                                            },
                                        },
                                    },
                                    Kind: "laborum",
                                    Location: "quasi",
                                    Rrdatas: []string{
                                        "voluptatibus",
                                        "vero",
                                        "nihil",
                                        "praesentium",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsa",
                                        "omnis",
                                        "voluptate",
                                        "cum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloremque",
                                                IPProtocol: "tcp",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dicta",
                                                Port: "corporis",
                                                Project: "dolore",
                                                Region: "iusto",
                                            },
                                        },
                                    },
                                    Kind: "dicta",
                                    Location: "harum",
                                    Rrdatas: []string{
                                        "accusamus",
                                        "commodi",
                                    },
                                    SignatureRrdatas: []string{
                                        "quae",
                                        "ipsum",
                                        "quidem",
                                        "molestias",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "undefined",
                                                Kind: "praesentium",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptates",
                                                Port: "quasi",
                                                Project: "repudiandae",
                                                Region: "sint",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "udp",
                                                Kind: "incidunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consequatur",
                                                Port: "est",
                                                Project: "quibusdam",
                                                Region: "explicabo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deserunt",
                                                IPProtocol: "udp",
                                                Kind: "quibusdam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "modi",
                                                Port: "qui",
                                                Project: "aliquid",
                                                Region: "cupiditate",
                                            },
                                        },
                                    },
                                    Kind: "quos",
                                    Location: "perferendis",
                                    Rrdatas: []string{
                                        "assumenda",
                                    },
                                    SignatureRrdatas: []string{
                                        "alias",
                                        "fugit",
                                    },
                                },
                            },
                            Kind: "dolorum",
                        },
                        Kind: "excepturi",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "tempore",
                                                    IPProtocol: "undefined",
                                                    Kind: "delectus",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "non",
                                                    Port: "eligendi",
                                                    Project: "sint",
                                                    Region: "aliquid",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "provident",
                                                    IPProtocol: "udp",
                                                    Kind: "sint",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "dolor",
                                                    Port: "debitis",
                                                    Project: "a",
                                                    Region: "dolorum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "in",
                                                    IPProtocol: "tcp",
                                                    Kind: "illum",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "rerum",
                                                    Port: "dicta",
                                                    Project: "magnam",
                                                    Region: "cumque",
                                                },
                                            },
                                        },
                                        Kind: "facere",
                                        Location: "ea",
                                        Rrdatas: []string{
                                            "laborum",
                                            "accusamus",
                                        },
                                        SignatureRrdatas: []string{
                                            "occaecati",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusamus",
                                                    IPProtocol: "udp",
                                                    Kind: "quidem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "nam",
                                                    Port: "id",
                                                    Project: "blanditiis",
                                                    Region: "deleniti",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sapiente",
                                                    IPProtocol: "undefined",
                                                    Kind: "deserunt",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "vel",
                                                    Port: "natus",
                                                    Project: "omnis",
                                                    Region: "molestiae",
                                                },
                                            },
                                        },
                                        Kind: "perferendis",
                                        Location: "nihil",
                                        Rrdatas: []string{
                                            "distinctio",
                                            "id",
                                        },
                                        SignatureRrdatas: []string{
                                            "labore",
                                            "suscipit",
                                        },
                                    },
                                },
                                Kind: "natus",
                            },
                            Kind: "nobis",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "vero",
                                        IPProtocol: "undefined",
                                        Kind: "architecto",
                                        LoadBalancerType: "none",
                                        NetworkURL: "et",
                                        Port: "excepturi",
                                        Project: "ullam",
                                        Region: "provident",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quos",
                                        IPProtocol: "tcp",
                                        Kind: "accusantium",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "reiciendis",
                                        Port: "mollitia",
                                        Project: "ad",
                                        Region: "eum",
                                    },
                                },
                            },
                            TrickleTraffic: 2212.62,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nemo",
                                                IPProtocol: "undefined",
                                                Kind: "iure",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "debitis",
                                                Port: "eius",
                                                Project: "maxime",
                                                Region: "deleniti",
                                            },
                                        },
                                    },
                                    Kind: "facilis",
                                    Rrdatas: []string{
                                        "architecto",
                                        "architecto",
                                    },
                                    SignatureRrdatas: []string{
                                        "ullam",
                                        "expedita",
                                        "nihil",
                                        "repellat",
                                    },
                                    Weight: 8411.4,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "saepe",
                                                IPProtocol: "udp",
                                                Kind: "accusantium",
                                                LoadBalancerType: "none",
                                                NetworkURL: "praesentium",
                                                Port: "natus",
                                                Project: "magni",
                                                Region: "sunt",
                                            },
                                        },
                                    },
                                    Kind: "quo",
                                    Rrdatas: []string{
                                        "pariatur",
                                        "maxime",
                                        "ea",
                                        "excepturi",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                    },
                                    Weight: 332.22,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maiores",
                                                IPProtocol: "udp",
                                                Kind: "ipsam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "autem",
                                                Port: "nam",
                                                Project: "eaque",
                                                Region: "pariatur",
                                            },
                                        },
                                    },
                                    Kind: "nemo",
                                    Rrdatas: []string{
                                        "perferendis",
                                        "fugiat",
                                        "amet",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "corporis",
                                        "hic",
                                        "libero",
                                        "nobis",
                                    },
                                    Weight: 1716.29,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "totam",
                                                IPProtocol: "tcp",
                                                Kind: "eaque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nesciunt",
                                                Port: "eos",
                                                Project: "perferendis",
                                                Region: "dolores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minus",
                                                IPProtocol: "tcp",
                                                Kind: "dolor",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nostrum",
                                                Port: "hic",
                                                Project: "recusandae",
                                                Region: "omnis",
                                            },
                                        },
                                    },
                                    Kind: "facilis",
                                    Rrdatas: []string{
                                        "voluptatem",
                                        "porro",
                                        "consequuntur",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                        "eaque",
                                        "occaecati",
                                    },
                                    Weight: 6990.98,
                                },
                            },
                            Kind: "adipisci",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "tcp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "pariatur",
                                                Port: "provident",
                                                Project: "nobis",
                                                Region: "libero",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "delectus",
                                                IPProtocol: "undefined",
                                                Kind: "quos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolorem",
                                                Port: "dolorem",
                                                Project: "dolor",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsum",
                                                IPProtocol: "udp",
                                                Kind: "excepturi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptate",
                                                Port: "dignissimos",
                                                Project: "reiciendis",
                                                Region: "amet",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorum",
                                                IPProtocol: "undefined",
                                                Kind: "veritatis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsa",
                                                Port: "iure",
                                                Project: "odio",
                                                Region: "quaerat",
                                            },
                                        },
                                    },
                                    Kind: "accusamus",
                                    Rrdatas: []string{
                                        "voluptatibus",
                                        "voluptas",
                                        "natus",
                                    },
                                    SignatureRrdatas: []string{
                                        "atque",
                                    },
                                    Weight: 246.78,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ab",
                                                IPProtocol: "udp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptate",
                                                Port: "dolorum",
                                                Project: "deleniti",
                                                Region: "omnis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "necessitatibus",
                                                IPProtocol: "udp",
                                                Kind: "asperiores",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsum",
                                                Port: "voluptate",
                                                Project: "id",
                                                Region: "saepe",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eius",
                                                IPProtocol: "undefined",
                                                Kind: "perferendis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "optio",
                                                Port: "accusamus",
                                                Project: "ad",
                                                Region: "saepe",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "suscipit",
                                                IPProtocol: "tcp",
                                                Kind: "provident",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repellendus",
                                                Port: "totam",
                                                Project: "similique",
                                                Region: "alias",
                                            },
                                        },
                                    },
                                    Kind: "at",
                                    Rrdatas: []string{
                                        "tempora",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "officiis",
                                        "qui",
                                        "dolorum",
                                        "a",
                                    },
                                    Weight: 4561.3,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "undefined",
                                                Kind: "quisquam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "amet",
                                                Port: "tempore",
                                                Project: "accusamus",
                                                Region: "numquam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "undefined",
                                                Kind: "sapiente",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nihil",
                                                Port: "sit",
                                                Project: "expedita",
                                                Region: "neque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "tcp",
                                                Kind: "libero",
                                                LoadBalancerType: "none",
                                                NetworkURL: "deserunt",
                                                Port: "quam",
                                                Project: "ipsum",
                                                Region: "incidunt",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Rrdatas: []string{
                                        "maxime",
                                        "pariatur",
                                        "soluta",
                                    },
                                    SignatureRrdatas: []string{
                                        "laborum",
                                    },
                                    Weight: 5173.79,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aspernatur",
                                                IPProtocol: "undefined",
                                                Kind: "distinctio",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquid",
                                                Port: "quam",
                                                Project: "molestias",
                                                Region: "temporibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "undefined",
                                                Kind: "fugit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "odio",
                                                Port: "sunt",
                                                Project: "ullam",
                                                Region: "nam",
                                            },
                                        },
                                    },
                                    Kind: "hic",
                                    Rrdatas: []string{
                                        "cumque",
                                    },
                                    SignatureRrdatas: []string{
                                        "nobis",
                                        "et",
                                        "saepe",
                                    },
                                    Weight: 2174.5,
                                },
                            },
                            Kind: "veritatis",
                        },
                    },
                    Rrdatas: []string{
                        "quos",
                        "tempore",
                        "cupiditate",
                    },
                    SignatureRrdatas: []string{
                        "delectus",
                    },
                    TTL: 209157,
                    Type: "dolore",
                },
                shared.ResourceRecordSet{
                    Kind: "labore",
                    Name: "adipisci",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "undefined",
                                                Kind: "quas",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "consequatur",
                                                Port: "est",
                                                Project: "repellendus",
                                                Region: "porro",
                                            },
                                        },
                                    },
                                    Kind: "doloribus",
                                    Location: "ut",
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
                                                IPAddress: "vero",
                                                IPProtocol: "tcp",
                                                Kind: "quis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "delectus",
                                                Port: "voluptate",
                                                Project: "consectetur",
                                                Region: "vero",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tenetur",
                                                IPProtocol: "tcp",
                                                Kind: "hic",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quod",
                                                Port: "odio",
                                                Project: "similique",
                                                Region: "facilis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vero",
                                                IPProtocol: "tcp",
                                                Kind: "dolore",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "illum",
                                                Port: "sequi",
                                                Project: "natus",
                                                Region: "impedit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "udp",
                                                Kind: "exercitationem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "fugit",
                                                Port: "porro",
                                                Project: "maiores",
                                                Region: "doloribus",
                                            },
                                        },
                                    },
                                    Kind: "iusto",
                                    Location: "eligendi",
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
                                                IPAddress: "vel",
                                                IPProtocol: "udp",
                                                Kind: "magnam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ex",
                                                Port: "laudantium",
                                                Project: "dicta",
                                                Region: "dolor",
                                            },
                                        },
                                    },
                                    Kind: "maiores",
                                    Location: "quasi",
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
                            Kind: "ea",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "tcp",
                                                Kind: "inventore",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ea",
                                                Port: "quo",
                                                Project: "consectetur",
                                                Region: "recusandae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aspernatur",
                                                IPProtocol: "undefined",
                                                Kind: "eaque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "libero",
                                                Port: "aut",
                                                Project: "aut",
                                                Region: "deleniti",
                                            },
                                        },
                                    },
                                    Kind: "impedit",
                                    Location: "aliquam",
                                    Rrdatas: []string{
                                        "accusamus",
                                    },
                                    SignatureRrdatas: []string{
                                        "non",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorum",
                                                IPProtocol: "udp",
                                                Kind: "placeat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eum",
                                                Port: "autem",
                                                Project: "nobis",
                                                Region: "quas",
                                            },
                                        },
                                    },
                                    Kind: "assumenda",
                                    Location: "nulla",
                                    Rrdatas: []string{
                                        "libero",
                                        "quasi",
                                    },
                                    SignatureRrdatas: []string{
                                        "numquam",
                                        "explicabo",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "tcp",
                                                Kind: "magnam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eius",
                                                Port: "esse",
                                                Project: "esse",
                                                Region: "rem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "tcp",
                                                Kind: "quidem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "eum",
                                                Project: "suscipit",
                                                Region: "assumenda",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "tcp",
                                                Kind: "quisquam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsa",
                                                Port: "id",
                                                Project: "quidem",
                                                Region: "neque",
                                            },
                                        },
                                    },
                                    Kind: "quo",
                                    Location: "illum",
                                    Rrdatas: []string{
                                        "fuga",
                                        "eius",
                                        "eos",
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "cupiditate",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tempora",
                                                IPProtocol: "udp",
                                                Kind: "ipsam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sequi",
                                                Port: "quo",
                                                Project: "esse",
                                                Region: "recusandae",
                                            },
                                        },
                                    },
                                    Kind: "aperiam",
                                    Location: "distinctio",
                                    Rrdatas: []string{
                                        "dignissimos",
                                        "inventore",
                                        "nihil",
                                        "totam",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquam",
                                        "odio",
                                        "occaecati",
                                        "commodi",
                                    },
                                },
                            },
                            Kind: "sapiente",
                        },
                        Kind: "dolores",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusantium",
                                                    IPProtocol: "udp",
                                                    Kind: "eum",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "praesentium",
                                                    Port: "consequuntur",
                                                    Project: "deleniti",
                                                    Region: "fugit",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "fuga",
                                                    IPProtocol: "tcp",
                                                    Kind: "incidunt",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "explicabo",
                                                    Port: "minima",
                                                    Project: "nisi",
                                                    Region: "fugit",
                                                },
                                            },
                                        },
                                        Kind: "sapiente",
                                        Location: "consequuntur",
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
                                                    IPAddress: "accusamus",
                                                    IPProtocol: "undefined",
                                                    Kind: "esse",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "nam",
                                                    Port: "vero",
                                                    Project: "aliquid",
                                                    Region: "quasi",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "saepe",
                                                    IPProtocol: "tcp",
                                                    Kind: "harum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "rerum",
                                                    Port: "occaecati",
                                                    Project: "minima",
                                                    Region: "distinctio",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eligendi",
                                                    IPProtocol: "undefined",
                                                    Kind: "culpa",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "adipisci",
                                                    Port: "cumque",
                                                    Project: "consequuntur",
                                                    Region: "consequatur",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minus",
                                                    IPProtocol: "undefined",
                                                    Kind: "sapiente",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "esse",
                                                    Port: "blanditiis",
                                                    Project: "provident",
                                                    Region: "a",
                                                },
                                            },
                                        },
                                        Kind: "nulla",
                                        Location: "quas",
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
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eveniet",
                                                    IPProtocol: "udp",
                                                    Kind: "facere",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "consequuntur",
                                                    Port: "quasi",
                                                    Project: "similique",
                                                    Region: "culpa",
                                                },
                                            },
                                        },
                                        Kind: "aliquid",
                                        Location: "tenetur",
                                        Rrdatas: []string{
                                            "earum",
                                        },
                                        SignatureRrdatas: []string{
                                            "in",
                                            "eius",
                                        },
                                    },
                                },
                                Kind: "libero",
                            },
                            Kind: "illum",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "accusantium",
                                        IPProtocol: "undefined",
                                        Kind: "sapiente",
                                        LoadBalancerType: "none",
                                        NetworkURL: "ullam",
                                        Port: "reprehenderit",
                                        Project: "ullam",
                                        Region: "nisi",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aut",
                                        IPProtocol: "tcp",
                                        Kind: "qui",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "ex",
                                        Port: "deleniti",
                                        Project: "itaque",
                                        Region: "dolorum",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "architecto",
                                        IPProtocol: "tcp",
                                        Kind: "tenetur",
                                        LoadBalancerType: "none",
                                        NetworkURL: "at",
                                        Port: "et",
                                        Project: "voluptate",
                                        Region: "ipsa",
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
                                                IPAddress: "adipisci",
                                                IPProtocol: "tcp",
                                                Kind: "temporibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rem",
                                                Port: "aut",
                                                Project: "laudantium",
                                                Region: "eum",
                                            },
                                        },
                                    },
                                    Kind: "mollitia",
                                    Rrdatas: []string{
                                        "corrupti",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptatem",
                                        "dolor",
                                    },
                                    Weight: 5801.52,
                                },
                            },
                            Kind: "numquam",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "undefined",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "maiores",
                                                Port: "natus",
                                                Project: "velit",
                                                Region: "voluptatibus",
                                            },
                                        },
                                    },
                                    Kind: "voluptas",
                                    Rrdatas: []string{
                                        "aperiam",
                                        "ea",
                                        "quaerat",
                                        "consequuntur",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                        "maxime",
                                        "dignissimos",
                                        "officia",
                                    },
                                    Weight: 9894.1,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "undefined",
                                                Kind: "porro",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "labore",
                                                Port: "ab",
                                                Project: "adipisci",
                                                Region: "fuga",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "tcp",
                                                Kind: "velit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "est",
                                                Port: "recusandae",
                                                Project: "totam",
                                                Region: "fugiat",
                                            },
                                        },
                                    },
                                    Kind: "vel",
                                    Rrdatas: []string{
                                        "quos",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "possimus",
                                        "facilis",
                                    },
                                    Weight: 7382.27,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nemo",
                                                Port: "recusandae",
                                                Project: "aliquid",
                                                Region: "aperiam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "undefined",
                                                Kind: "in",
                                                LoadBalancerType: "none",
                                                NetworkURL: "earum",
                                                Port: "facere",
                                                Project: "numquam",
                                                Region: "doloribus",
                                            },
                                        },
                                    },
                                    Kind: "suscipit",
                                    Rrdatas: []string{
                                        "quidem",
                                        "saepe",
                                        "necessitatibus",
                                        "dolore",
                                    },
                                    SignatureRrdatas: []string{
                                        "asperiores",
                                    },
                                    Weight: 2415.45,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "undefined",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "debitis",
                                                Port: "consectetur",
                                                Project: "corporis",
                                                Region: "harum",
                                            },
                                        },
                                    },
                                    Kind: "laboriosam",
                                    Rrdatas: []string{
                                        "voluptates",
                                    },
                                    SignatureRrdatas: []string{
                                        "vitae",
                                        "accusamus",
                                        "similique",
                                    },
                                    Weight: 2724.37,
                                },
                            },
                            Kind: "aspernatur",
                        },
                    },
                    Rrdatas: []string{
                        "voluptas",
                        "voluptas",
                    },
                    SignatureRrdatas: []string{
                        "nobis",
                        "dolorum",
                    },
                    TTL: 237807,
                    Type: "minus",
                },
                shared.ResourceRecordSet{
                    Kind: "dolores",
                    Name: "blanditiis",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aliquam",
                                                IPProtocol: "udp",
                                                Kind: "temporibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "adipisci",
                                                Port: "cum",
                                                Project: "blanditiis",
                                                Region: "quas",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "hic",
                                                IPProtocol: "undefined",
                                                Kind: "culpa",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "pariatur",
                                                Port: "totam",
                                                Project: "hic",
                                                Region: "exercitationem",
                                            },
                                        },
                                    },
                                    Kind: "nobis",
                                    Location: "sit",
                                    Rrdatas: []string{
                                        "sed",
                                        "reiciendis",
                                        "explicabo",
                                    },
                                    SignatureRrdatas: []string{
                                        "facilis",
                                        "voluptate",
                                        "expedita",
                                        "ab",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolore",
                                                IPProtocol: "udp",
                                                Kind: "sed",
                                                LoadBalancerType: "none",
                                                NetworkURL: "commodi",
                                                Port: "quidem",
                                                Project: "explicabo",
                                                Region: "voluptas",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "unde",
                                                IPProtocol: "undefined",
                                                Kind: "suscipit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "debitis",
                                                Port: "illo",
                                                Project: "reiciendis",
                                                Region: "perferendis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "corrupti",
                                                IPProtocol: "udp",
                                                Kind: "incidunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "provident",
                                                Port: "eius",
                                                Project: "necessitatibus",
                                                Region: "ipsum",
                                            },
                                        },
                                    },
                                    Kind: "ea",
                                    Location: "occaecati",
                                    Rrdatas: []string{
                                        "voluptatibus",
                                        "tempora",
                                        "tempora",
                                    },
                                    SignatureRrdatas: []string{
                                        "reiciendis",
                                        "ex",
                                    },
                                },
                            },
                            Kind: "sit",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "udp",
                                                Kind: "quaerat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsam",
                                                Port: "debitis",
                                                Project: "rem",
                                                Region: "sit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nobis",
                                                IPProtocol: "tcp",
                                                Kind: "veniam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "recusandae",
                                                Port: "reiciendis",
                                                Project: "nulla",
                                                Region: "magni",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "udp",
                                                Kind: "numquam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "in",
                                                Port: "officiis",
                                                Project: "beatae",
                                                Region: "laudantium",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "tcp",
                                                Kind: "cum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolorum",
                                                Port: "voluptatum",
                                                Project: "error",
                                                Region: "hic",
                                            },
                                        },
                                    },
                                    Kind: "expedita",
                                    Location: "debitis",
                                    Rrdatas: []string{
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                        "dolorum",
                                    },
                                },
                            },
                            Kind: "corrupti",
                        },
                        Kind: "accusamus",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "fugit",
                                                    IPProtocol: "undefined",
                                                    Kind: "fugiat",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "culpa",
                                                    Port: "expedita",
                                                    Project: "magnam",
                                                    Region: "consequatur",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "esse",
                                                    IPProtocol: "tcp",
                                                    Kind: "sit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quas",
                                                    Port: "repudiandae",
                                                    Project: "corporis",
                                                    Region: "et",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "blanditiis",
                                                    IPProtocol: "tcp",
                                                    Kind: "sed",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "vel",
                                                    Port: "nostrum",
                                                    Project: "saepe",
                                                    Region: "error",
                                                },
                                            },
                                        },
                                        Kind: "consequatur",
                                        Location: "incidunt",
                                        Rrdatas: []string{
                                            "dolorem",
                                            "harum",
                                            "dicta",
                                            "architecto",
                                        },
                                        SignatureRrdatas: []string{
                                            "labore",
                                            "quidem",
                                            "atque",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nam",
                                                    IPProtocol: "udp",
                                                    Kind: "laboriosam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "amet",
                                                    Port: "deserunt",
                                                    Project: "voluptate",
                                                    Region: "unde",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "reiciendis",
                                                    IPProtocol: "tcp",
                                                    Kind: "repellendus",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "voluptates",
                                                    Port: "perferendis",
                                                    Project: "est",
                                                    Region: "quidem",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "reprehenderit",
                                                    IPProtocol: "udp",
                                                    Kind: "fuga",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "mollitia",
                                                    Port: "veniam",
                                                    Project: "voluptatem",
                                                    Region: "quisquam",
                                                },
                                            },
                                        },
                                        Kind: "repudiandae",
                                        Location: "quasi",
                                        Rrdatas: []string{
                                            "reprehenderit",
                                            "asperiores",
                                            "totam",
                                        },
                                        SignatureRrdatas: []string{
                                            "quidem",
                                            "maxime",
                                        },
                                    },
                                },
                                Kind: "et",
                            },
                            Kind: "esse",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "assumenda",
                                        IPProtocol: "tcp",
                                        Kind: "atque",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "officiis",
                                        Port: "officiis",
                                        Project: "accusamus",
                                        Region: "natus",
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
                                                IPAddress: "maiores",
                                                IPProtocol: "tcp",
                                                Kind: "at",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "blanditiis",
                                                Port: "suscipit",
                                                Project: "repudiandae",
                                                Region: "atque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "atque",
                                                IPProtocol: "undefined",
                                                Kind: "recusandae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "repellendus",
                                                Port: "labore",
                                                Project: "reiciendis",
                                                Region: "doloremque",
                                            },
                                        },
                                    },
                                    Kind: "repudiandae",
                                    Rrdatas: []string{
                                        "accusantium",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolores",
                                    },
                                    Weight: 3164.88,
                                },
                            },
                            Kind: "laboriosam",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestias",
                                                IPProtocol: "undefined",
                                                Kind: "saepe",
                                                LoadBalancerType: "none",
                                                NetworkURL: "occaecati",
                                                Port: "officiis",
                                                Project: "perspiciatis",
                                                Region: "in",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "adipisci",
                                                IPProtocol: "udp",
                                                Kind: "occaecati",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugit",
                                                Port: "id",
                                                Project: "quis",
                                                Region: "reprehenderit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "error",
                                                IPProtocol: "undefined",
                                                Kind: "corporis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eveniet",
                                                Port: "non",
                                                Project: "vero",
                                                Region: "doloremque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iure",
                                                IPProtocol: "undefined",
                                                Kind: "totam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "molestiae",
                                                Port: "eveniet",
                                                Project: "qui",
                                                Region: "cum",
                                            },
                                        },
                                    },
                                    Kind: "iure",
                                    Rrdatas: []string{
                                        "ratione",
                                        "laborum",
                                        "distinctio",
                                        "voluptatum",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquam",
                                        "ad",
                                        "repellat",
                                    },
                                    Weight: 30.99,
                                },
                            },
                            Kind: "corporis",
                        },
                    },
                    Rrdatas: []string{
                        "nihil",
                        "mollitia",
                        "voluptas",
                    },
                    SignatureRrdatas: []string{
                        "maiores",
                    },
                    TTL: 970222,
                    Type: "dolores",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "minima",
                    Name: "dolore",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "udp",
                                                Kind: "omnis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "molestiae",
                                                Port: "ex",
                                                Project: "ut",
                                                Region: "culpa",
                                            },
                                        },
                                    },
                                    Kind: "adipisci",
                                    Location: "debitis",
                                    Rrdatas: []string{
                                        "eum",
                                        "nemo",
                                        "recusandae",
                                    },
                                    SignatureRrdatas: []string{
                                        "provident",
                                        "quis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reiciendis",
                                                IPProtocol: "tcp",
                                                Kind: "aspernatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quasi",
                                                Port: "animi",
                                                Project: "nostrum",
                                                Region: "mollitia",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "provident",
                                                IPProtocol: "udp",
                                                Kind: "animi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aliquid",
                                                Port: "accusantium",
                                                Project: "repellat",
                                                Region: "doloribus",
                                            },
                                        },
                                    },
                                    Kind: "ullam",
                                    Location: "in",
                                    Rrdatas: []string{
                                        "earum",
                                        "officia",
                                        "laborum",
                                    },
                                    SignatureRrdatas: []string{
                                        "modi",
                                        "voluptatibus",
                                        "molestias",
                                        "officiis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cumque",
                                                IPProtocol: "undefined",
                                                Kind: "rerum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quis",
                                                Port: "inventore",
                                                Project: "fugit",
                                                Region: "cumque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "undefined",
                                                Kind: "velit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eum",
                                                Port: "eius",
                                                Project: "rem",
                                                Region: "at",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "impedit",
                                                IPProtocol: "undefined",
                                                Kind: "sapiente",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dicta",
                                                Port: "minima",
                                                Project: "beatae",
                                                Region: "cupiditate",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "provident",
                                                IPProtocol: "udp",
                                                Kind: "soluta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "illum",
                                                Port: "eaque",
                                                Project: "earum",
                                                Region: "perspiciatis",
                                            },
                                        },
                                    },
                                    Kind: "maiores",
                                    Location: "debitis",
                                    Rrdatas: []string{
                                        "porro",
                                        "suscipit",
                                    },
                                    SignatureRrdatas: []string{
                                        "fugit",
                                    },
                                },
                            },
                            Kind: "cumque",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "animi",
                                                IPProtocol: "udp",
                                                Kind: "nulla",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quasi",
                                                Port: "et",
                                                Project: "ducimus",
                                                Region: "natus",
                                            },
                                        },
                                    },
                                    Kind: "occaecati",
                                    Location: "suscipit",
                                    Rrdatas: []string{
                                        "quasi",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloribus",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "necessitatibus",
                                                IPProtocol: "undefined",
                                                Kind: "tempora",
                                                LoadBalancerType: "none",
                                                NetworkURL: "molestiae",
                                                Port: "dicta",
                                                Project: "iusto",
                                                Region: "esse",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "udp",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "architecto",
                                                Port: "fugiat",
                                                Project: "doloremque",
                                                Region: "dicta",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odio",
                                                IPProtocol: "undefined",
                                                Kind: "esse",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consectetur",
                                                Port: "aliquid",
                                                Project: "ipsa",
                                                Region: "laborum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "tcp",
                                                Kind: "fugiat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquid",
                                                Port: "officia",
                                                Project: "suscipit",
                                                Region: "aliquid",
                                            },
                                        },
                                    },
                                    Kind: "perferendis",
                                    Location: "eum",
                                    Rrdatas: []string{
                                        "iste",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptates",
                                                IPProtocol: "tcp",
                                                Kind: "laborum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ad",
                                                Port: "deleniti",
                                                Project: "enim",
                                                Region: "vitae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repellendus",
                                                IPProtocol: "tcp",
                                                Kind: "quo",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "ad",
                                                Project: "expedita",
                                                Region: "voluptatem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestias",
                                                IPProtocol: "udp",
                                                Kind: "aliquid",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptatum",
                                                Port: "omnis",
                                                Project: "veritatis",
                                                Region: "rerum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "tcp",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "officiis",
                                                Port: "architecto",
                                                Project: "fuga",
                                                Region: "pariatur",
                                            },
                                        },
                                    },
                                    Kind: "debitis",
                                    Location: "voluptatem",
                                    Rrdatas: []string{
                                        "deleniti",
                                    },
                                    SignatureRrdatas: []string{
                                        "ex",
                                        "sapiente",
                                        "rem",
                                        "minus",
                                    },
                                },
                            },
                            Kind: "nemo",
                        },
                        Kind: "asperiores",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "perferendis",
                                                    IPProtocol: "udp",
                                                    Kind: "totam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quibusdam",
                                                    Port: "nam",
                                                    Project: "ipsam",
                                                    Region: "culpa",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolor",
                                                    IPProtocol: "undefined",
                                                    Kind: "inventore",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "veritatis",
                                                    Port: "tempora",
                                                    Project: "dolor",
                                                    Region: "consequatur",
                                                },
                                            },
                                        },
                                        Kind: "architecto",
                                        Location: "sit",
                                        Rrdatas: []string{
                                            "fugit",
                                            "ab",
                                        },
                                        SignatureRrdatas: []string{
                                            "quae",
                                            "dolor",
                                            "fugiat",
                                        },
                                    },
                                },
                                Kind: "ipsam",
                            },
                            Kind: "consequuntur",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quas",
                                        IPProtocol: "udp",
                                        Kind: "impedit",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "esse",
                                        Port: "necessitatibus",
                                        Project: "sed",
                                        Region: "veniam",
                                    },
                                },
                            },
                            TrickleTraffic: 1995.96,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "tcp",
                                                Kind: "magnam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ab",
                                                Port: "porro",
                                                Project: "autem",
                                                Region: "nobis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laboriosam",
                                                IPProtocol: "udp",
                                                Kind: "consequuntur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "exercitationem",
                                                Port: "necessitatibus",
                                                Project: "quasi",
                                                Region: "nisi",
                                            },
                                        },
                                    },
                                    Kind: "at",
                                    Rrdatas: []string{
                                        "est",
                                        "harum",
                                        "sequi",
                                        "doloribus",
                                    },
                                    SignatureRrdatas: []string{
                                        "optio",
                                        "occaecati",
                                        "nemo",
                                        "voluptate",
                                    },
                                    Weight: 5010.63,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "undefined",
                                                Kind: "nemo",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eius",
                                                Port: "aspernatur",
                                                Project: "ducimus",
                                                Region: "nesciunt",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "tcp",
                                                Kind: "incidunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rem",
                                                Port: "fugiat",
                                                Project: "dicta",
                                                Region: "nisi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequuntur",
                                                IPProtocol: "undefined",
                                                Kind: "aperiam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "reiciendis",
                                                Port: "soluta",
                                                Project: "alias",
                                                Region: "omnis",
                                            },
                                        },
                                    },
                                    Kind: "eos",
                                    Rrdatas: []string{
                                        "iste",
                                        "magni",
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "accusamus",
                                        "voluptatibus",
                                        "distinctio",
                                    },
                                    Weight: 6085.93,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "tcp",
                                                Kind: "maxime",
                                                LoadBalancerType: "none",
                                                NetworkURL: "temporibus",
                                                Port: "quos",
                                                Project: "commodi",
                                                Region: "itaque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "commodi",
                                                IPProtocol: "tcp",
                                                Kind: "earum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nam",
                                                Port: "vero",
                                                Project: "voluptatem",
                                                Region: "ipsam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "undefined",
                                                Kind: "quasi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "maiores",
                                                Port: "enim",
                                                Project: "sint",
                                                Region: "nulla",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deserunt",
                                                IPProtocol: "tcp",
                                                Kind: "nemo",
                                                LoadBalancerType: "none",
                                                NetworkURL: "est",
                                                Port: "quis",
                                                Project: "sint",
                                                Region: "accusamus",
                                            },
                                        },
                                    },
                                    Kind: "impedit",
                                    Rrdatas: []string{
                                        "necessitatibus",
                                        "asperiores",
                                        "ex",
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "delectus",
                                        "quae",
                                        "minus",
                                        "fuga",
                                    },
                                    Weight: 6756.89,
                                },
                            },
                            Kind: "consectetur",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsum",
                                                IPProtocol: "udp",
                                                Kind: "magni",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "repudiandae",
                                                Port: "nam",
                                                Project: "dolore",
                                                Region: "iusto",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptate",
                                                IPProtocol: "undefined",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quo",
                                                Port: "deleniti",
                                                Project: "quibusdam",
                                                Region: "iure",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "udp",
                                                Kind: "vel",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quibusdam",
                                                Port: "inventore",
                                                Project: "facere",
                                                Region: "libero",
                                            },
                                        },
                                    },
                                    Kind: "architecto",
                                    Rrdatas: []string{
                                        "quia",
                                        "porro",
                                        "aliquam",
                                        "velit",
                                    },
                                    SignatureRrdatas: []string{
                                        "accusantium",
                                    },
                                    Weight: 4246.63,
                                },
                            },
                            Kind: "ea",
                        },
                    },
                    Rrdatas: []string{
                        "vero",
                    },
                    SignatureRrdatas: []string{
                        "eum",
                        "velit",
                        "ut",
                    },
                    TTL: 596433,
                    Type: "earum",
                },
                shared.ResourceRecordSet{
                    Kind: "dicta",
                    Name: "impedit",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "undefined",
                                                Kind: "nisi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "velit",
                                                Port: "laborum",
                                                Project: "non",
                                                Region: "dolor",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "undefined",
                                                Kind: "doloremque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "officia",
                                                Port: "recusandae",
                                                Project: "ea",
                                                Region: "quidem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "udp",
                                                Kind: "placeat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "expedita",
                                                Port: "deleniti",
                                                Project: "a",
                                                Region: "voluptate",
                                            },
                                        },
                                    },
                                    Kind: "ullam",
                                    Location: "unde",
                                    Rrdatas: []string{
                                        "animi",
                                        "impedit",
                                        "ipsam",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                        "esse",
                                        "labore",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vero",
                                                IPProtocol: "undefined",
                                                Kind: "vitae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolorem",
                                                Port: "ad",
                                                Project: "qui",
                                                Region: "iste",
                                            },
                                        },
                                    },
                                    Kind: "ex",
                                    Location: "nemo",
                                    Rrdatas: []string{
                                        "libero",
                                        "rem",
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "fugit",
                                        "alias",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "undefined",
                                                Kind: "quae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "neque",
                                                Port: "exercitationem",
                                                Project: "itaque",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "ipsum",
                                    Location: "unde",
                                    Rrdatas: []string{
                                        "distinctio",
                                        "maxime",
                                        "quia",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "omnis",
                                        "libero",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "udp",
                                                Kind: "fugiat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quos",
                                                Port: "placeat",
                                                Project: "sit",
                                                Region: "iusto",
                                            },
                                        },
                                    },
                                    Kind: "ipsa",
                                    Location: "voluptates",
                                    Rrdatas: []string{
                                        "aperiam",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolore",
                                        "eligendi",
                                        "distinctio",
                                    },
                                },
                            },
                            Kind: "voluptatem",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolores",
                                                IPProtocol: "udp",
                                                Kind: "beatae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "facere",
                                                Port: "corrupti",
                                                Project: "molestiae",
                                                Region: "provident",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "accusamus",
                                                IPProtocol: "udp",
                                                Kind: "tempore",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ea",
                                                Port: "autem",
                                                Project: "ipsam",
                                                Region: "rerum",
                                            },
                                        },
                                    },
                                    Kind: "laudantium",
                                    Location: "corporis",
                                    Rrdatas: []string{
                                        "voluptatibus",
                                        "cum",
                                        "at",
                                        "alias",
                                    },
                                    SignatureRrdatas: []string{
                                        "quidem",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repudiandae",
                                                IPProtocol: "undefined",
                                                Kind: "expedita",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eos",
                                                Port: "quibusdam",
                                                Project: "odio",
                                                Region: "praesentium",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "undefined",
                                                Kind: "corporis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "earum",
                                                Port: "adipisci",
                                                Project: "recusandae",
                                                Region: "similique",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "udp",
                                                Kind: "quis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "unde",
                                                Port: "molestiae",
                                                Project: "delectus",
                                                Region: "cupiditate",
                                            },
                                        },
                                    },
                                    Kind: "fugit",
                                    Location: "numquam",
                                    Rrdatas: []string{
                                        "nesciunt",
                                        "at",
                                    },
                                    SignatureRrdatas: []string{
                                        "dignissimos",
                                        "optio",
                                        "necessitatibus",
                                    },
                                },
                            },
                            Kind: "corporis",
                        },
                        Kind: "qui",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cupiditate",
                                                    IPProtocol: "undefined",
                                                    Kind: "placeat",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "neque",
                                                    Port: "in",
                                                    Project: "minus",
                                                    Region: "eum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "modi",
                                                    IPProtocol: "tcp",
                                                    Kind: "magnam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "maiores",
                                                    Port: "tempore",
                                                    Project: "aperiam",
                                                    Region: "libero",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ratione",
                                                    IPProtocol: "undefined",
                                                    Kind: "totam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "voluptas",
                                                    Port: "quo",
                                                    Project: "velit",
                                                    Region: "minus",
                                                },
                                            },
                                        },
                                        Kind: "fuga",
                                        Location: "nostrum",
                                        Rrdatas: []string{
                                            "impedit",
                                            "delectus",
                                            "tempore",
                                        },
                                        SignatureRrdatas: []string{
                                            "odit",
                                            "repellat",
                                            "pariatur",
                                            "nemo",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aperiam",
                                                    IPProtocol: "tcp",
                                                    Kind: "minima",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "ducimus",
                                                    Port: "excepturi",
                                                    Project: "dolores",
                                                    Region: "error",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "veritatis",
                                                    IPProtocol: "tcp",
                                                    Kind: "voluptate",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "itaque",
                                                    Port: "similique",
                                                    Project: "optio",
                                                    Region: "ex",
                                                },
                                            },
                                        },
                                        Kind: "quaerat",
                                        Location: "commodi",
                                        Rrdatas: []string{
                                            "placeat",
                                            "quidem",
                                            "exercitationem",
                                            "quam",
                                        },
                                        SignatureRrdatas: []string{
                                            "modi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sint",
                                                    IPProtocol: "udp",
                                                    Kind: "sequi",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "cum",
                                                    Port: "dicta",
                                                    Project: "earum",
                                                    Region: "veniam",
                                                },
                                            },
                                        },
                                        Kind: "animi",
                                        Location: "dolores",
                                        Rrdatas: []string{
                                            "dicta",
                                            "consequuntur",
                                            "necessitatibus",
                                        },
                                        SignatureRrdatas: []string{
                                            "ipsa",
                                            "ducimus",
                                            "maiores",
                                        },
                                    },
                                },
                                Kind: "veritatis",
                            },
                            Kind: "quasi",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "pariatur",
                                        IPProtocol: "udp",
                                        Kind: "excepturi",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "nemo",
                                        Port: "aliquam",
                                        Project: "nostrum",
                                        Region: "doloribus",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eligendi",
                                        IPProtocol: "tcp",
                                        Kind: "enim",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "animi",
                                        Port: "quas",
                                        Project: "totam",
                                        Region: "molestias",
                                    },
                                },
                            },
                            TrickleTraffic: 4849.66,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "architecto",
                                                IPProtocol: "tcp",
                                                Kind: "iste",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "tempore",
                                                Port: "libero",
                                                Project: "velit",
                                                Region: "doloremque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "delectus",
                                                IPProtocol: "udp",
                                                Kind: "cum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "adipisci",
                                                Port: "saepe",
                                                Project: "deserunt",
                                                Region: "doloremque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "undefined",
                                                Kind: "libero",
                                                LoadBalancerType: "none",
                                                NetworkURL: "cupiditate",
                                                Port: "molestiae",
                                                Project: "eligendi",
                                                Region: "possimus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "non",
                                                IPProtocol: "undefined",
                                                Kind: "itaque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "asperiores",
                                                Port: "veniam",
                                                Project: "consequuntur",
                                                Region: "facere",
                                            },
                                        },
                                    },
                                    Kind: "laudantium",
                                    Rrdatas: []string{
                                        "pariatur",
                                    },
                                    SignatureRrdatas: []string{
                                        "exercitationem",
                                    },
                                    Weight: 688.52,
                                },
                            },
                            Kind: "velit",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nisi",
                                                IPProtocol: "udp",
                                                Kind: "quaerat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "distinctio",
                                                Port: "nisi",
                                                Project: "quis",
                                                Region: "nisi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "udp",
                                                Kind: "facere",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ipsum",
                                                Port: "ad",
                                                Project: "voluptatibus",
                                                Region: "voluptatibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequuntur",
                                                IPProtocol: "udp",
                                                Kind: "labore",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eos",
                                                Port: "reprehenderit",
                                                Project: "nostrum",
                                                Region: "neque",
                                            },
                                        },
                                    },
                                    Kind: "iusto",
                                    Rrdatas: []string{
                                        "rem",
                                        "eligendi",
                                        "fugiat",
                                    },
                                    SignatureRrdatas: []string{
                                        "officiis",
                                        "ducimus",
                                        "dolor",
                                    },
                                    Weight: 1180.41,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "undefined",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugiat",
                                                Port: "ad",
                                                Project: "aspernatur",
                                                Region: "enim",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "delectus",
                                                IPProtocol: "tcp",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "illo",
                                                Port: "ab",
                                                Project: "incidunt",
                                                Region: "accusamus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "saepe",
                                                IPProtocol: "udp",
                                                Kind: "veniam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "reiciendis",
                                                Port: "earum",
                                                Project: "reprehenderit",
                                                Region: "praesentium",
                                            },
                                        },
                                    },
                                    Kind: "nemo",
                                    Rrdatas: []string{
                                        "quisquam",
                                        "sequi",
                                        "nihil",
                                        "deleniti",
                                    },
                                    SignatureRrdatas: []string{
                                        "labore",
                                    },
                                    Weight: 8288.41,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quisquam",
                                                IPProtocol: "tcp",
                                                Kind: "laudantium",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "consequatur",
                                                Port: "maxime",
                                                Project: "aspernatur",
                                                Region: "nam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "expedita",
                                                IPProtocol: "tcp",
                                                Kind: "provident",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "rerum",
                                                Port: "dignissimos",
                                                Project: "corporis",
                                                Region: "vero",
                                            },
                                        },
                                    },
                                    Kind: "similique",
                                    Rrdatas: []string{
                                        "iure",
                                        "dolorem",
                                        "commodi",
                                        "impedit",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                        "voluptatem",
                                    },
                                    Weight: 3228.29,
                                },
                            },
                            Kind: "quae",
                        },
                    },
                    Rrdatas: []string{
                        "illum",
                    },
                    SignatureRrdatas: []string{
                        "quidem",
                        "cum",
                        "amet",
                    },
                    TTL: 97676,
                    Type: "dicta",
                },
                shared.ResourceRecordSet{
                    Kind: "laudantium",
                    Name: "doloremque",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "tcp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "provident",
                                                Port: "repudiandae",
                                                Project: "consequatur",
                                                Region: "nemo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "udp",
                                                Kind: "facilis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aperiam",
                                                Port: "sint",
                                                Project: "accusamus",
                                                Region: "eos",
                                            },
                                        },
                                    },
                                    Kind: "totam",
                                    Location: "dicta",
                                    Rrdatas: []string{
                                        "velit",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolor",
                                                IPProtocol: "tcp",
                                                Kind: "atque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "at",
                                                Port: "labore",
                                                Project: "minus",
                                                Region: "esse",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "undefined",
                                                Kind: "rerum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aperiam",
                                                Port: "dignissimos",
                                                Project: "repellat",
                                                Region: "velit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "tcp",
                                                Kind: "consectetur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dignissimos",
                                                Port: "consectetur",
                                                Project: "soluta",
                                                Region: "natus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "temporibus",
                                                IPProtocol: "tcp",
                                                Kind: "amet",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aspernatur",
                                                Port: "quo",
                                                Project: "itaque",
                                                Region: "illum",
                                            },
                                        },
                                    },
                                    Kind: "laborum",
                                    Location: "dignissimos",
                                    Rrdatas: []string{
                                        "qui",
                                        "consectetur",
                                        "repellat",
                                        "explicabo",
                                    },
                                    SignatureRrdatas: []string{
                                        "exercitationem",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "non",
                                                IPProtocol: "undefined",
                                                Kind: "illo",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "deserunt",
                                                Port: "delectus",
                                                Project: "non",
                                                Region: "distinctio",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "labore",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repudiandae",
                                                Port: "modi",
                                                Project: "in",
                                                Region: "explicabo",
                                            },
                                        },
                                    },
                                    Kind: "accusamus",
                                    Location: "rem",
                                    Rrdatas: []string{
                                        "odit",
                                    },
                                    SignatureRrdatas: []string{
                                        "enim",
                                        "voluptate",
                                        "similique",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "undefined",
                                                Kind: "sit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eum",
                                                Port: "nesciunt",
                                                Project: "mollitia",
                                                Region: "dignissimos",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugiat",
                                                IPProtocol: "tcp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "reiciendis",
                                                Port: "ab",
                                                Project: "modi",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Location: "eveniet",
                                    Rrdatas: []string{
                                        "commodi",
                                        "numquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "possimus",
                                        "voluptate",
                                        "consectetur",
                                    },
                                },
                            },
                            Kind: "nesciunt",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minus",
                                                IPProtocol: "undefined",
                                                Kind: "distinctio",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quas",
                                                Port: "et",
                                                Project: "facilis",
                                                Region: "amet",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "udp",
                                                Kind: "alias",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "quos",
                                                Project: "laudantium",
                                                Region: "repellendus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "undefined",
                                                Kind: "eaque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "delectus",
                                                Port: "mollitia",
                                                Project: "nulla",
                                                Region: "officia",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "undefined",
                                                Kind: "alias",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "hic",
                                                Port: "voluptatem",
                                                Project: "incidunt",
                                                Region: "qui",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Location: "necessitatibus",
                                    Rrdatas: []string{
                                        "explicabo",
                                        "beatae",
                                        "aliquid",
                                    },
                                    SignatureRrdatas: []string{
                                        "optio",
                                        "voluptatibus",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officia",
                                                IPProtocol: "udp",
                                                Kind: "totam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aliquid",
                                                Port: "ea",
                                                Project: "impedit",
                                                Region: "ducimus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "undefined",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nulla",
                                                Port: "laborum",
                                                Project: "natus",
                                                Region: "accusamus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloremque",
                                                IPProtocol: "tcp",
                                                Kind: "rerum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptates",
                                                Port: "non",
                                                Project: "rem",
                                                Region: "quia",
                                            },
                                        },
                                    },
                                    Kind: "ullam",
                                    Location: "quisquam",
                                    Rrdatas: []string{
                                        "voluptatibus",
                                    },
                                    SignatureRrdatas: []string{
                                        "quae",
                                        "officiis",
                                        "architecto",
                                        "architecto",
                                    },
                                },
                            },
                            Kind: "enim",
                        },
                        Kind: "optio",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "facilis",
                                                    IPProtocol: "udp",
                                                    Kind: "a",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "dicta",
                                                    Port: "quos",
                                                    Project: "ullam",
                                                    Region: "dolore",
                                                },
                                            },
                                        },
                                        Kind: "modi",
                                        Location: "itaque",
                                        Rrdatas: []string{
                                            "modi",
                                            "consequuntur",
                                            "assumenda",
                                            "vero",
                                        },
                                        SignatureRrdatas: []string{
                                            "impedit",
                                            "porro",
                                            "accusamus",
                                            "totam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ab",
                                                    IPProtocol: "tcp",
                                                    Kind: "nihil",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "iure",
                                                    Port: "odio",
                                                    Project: "nesciunt",
                                                    Region: "debitis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vel",
                                                    IPProtocol: "undefined",
                                                    Kind: "corporis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "consequuntur",
                                                    Port: "officia",
                                                    Project: "reprehenderit",
                                                    Region: "distinctio",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eius",
                                                    IPProtocol: "undefined",
                                                    Kind: "rem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "accusantium",
                                                    Port: "veniam",
                                                    Project: "saepe",
                                                    Region: "neque",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "facere",
                                                    IPProtocol: "undefined",
                                                    Kind: "quos",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "fugiat",
                                                    Port: "est",
                                                    Project: "delectus",
                                                    Region: "velit",
                                                },
                                            },
                                        },
                                        Kind: "vitae",
                                        Location: "nesciunt",
                                        Rrdatas: []string{
                                            "illo",
                                            "repellat",
                                            "nemo",
                                        },
                                        SignatureRrdatas: []string{
                                            "possimus",
                                            "unde",
                                            "incidunt",
                                            "explicabo",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cupiditate",
                                                    IPProtocol: "udp",
                                                    Kind: "alias",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "nesciunt",
                                                    Port: "commodi",
                                                    Project: "sapiente",
                                                    Region: "consequuntur",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "veniam",
                                                    IPProtocol: "udp",
                                                    Kind: "officia",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "ut",
                                                    Port: "numquam",
                                                    Project: "tenetur",
                                                    Region: "adipisci",
                                                },
                                            },
                                        },
                                        Kind: "libero",
                                        Location: "in",
                                        Rrdatas: []string{
                                            "ex",
                                            "minus",
                                        },
                                        SignatureRrdatas: []string{
                                            "beatae",
                                        },
                                    },
                                },
                                Kind: "hic",
                            },
                            Kind: "nisi",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolor",
                                        IPProtocol: "tcp",
                                        Kind: "fuga",
                                        LoadBalancerType: "none",
                                        NetworkURL: "architecto",
                                        Port: "qui",
                                        Project: "aliquid",
                                        Region: "magni",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "incidunt",
                                        IPProtocol: "undefined",
                                        Kind: "praesentium",
                                        LoadBalancerType: "none",
                                        NetworkURL: "exercitationem",
                                        Port: "expedita",
                                        Project: "facilis",
                                        Region: "impedit",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "sit",
                                        IPProtocol: "tcp",
                                        Kind: "culpa",
                                        LoadBalancerType: "none",
                                        NetworkURL: "amet",
                                        Port: "deserunt",
                                        Project: "modi",
                                        Region: "veniam",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quod",
                                        IPProtocol: "udp",
                                        Kind: "a",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "enim",
                                        Port: "doloribus",
                                        Project: "assumenda",
                                        Region: "officiis",
                                    },
                                },
                            },
                            TrickleTraffic: 1039.9,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "udp",
                                                Kind: "necessitatibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dicta",
                                                Port: "vel",
                                                Project: "perspiciatis",
                                                Region: "debitis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ullam",
                                                IPProtocol: "undefined",
                                                Kind: "accusantium",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veritatis",
                                                Port: "provident",
                                                Project: "cumque",
                                                Region: "iure",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quibusdam",
                                                IPProtocol: "udp",
                                                Kind: "nemo",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "velit",
                                                Port: "magnam",
                                                Project: "dignissimos",
                                                Region: "laboriosam",
                                            },
                                        },
                                    },
                                    Kind: "sed",
                                    Rrdatas: []string{
                                        "natus",
                                        "provident",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloribus",
                                        "facilis",
                                        "quidem",
                                    },
                                    Weight: 9320.8,
                                },
                            },
                            Kind: "laboriosam",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perspiciatis",
                                                IPProtocol: "udp",
                                                Kind: "cum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "libero",
                                                Port: "nam",
                                                Project: "incidunt",
                                                Region: "recusandae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quod",
                                                IPProtocol: "tcp",
                                                Kind: "saepe",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quo",
                                                Port: "nesciunt",
                                                Project: "illum",
                                                Region: "nemo",
                                            },
                                        },
                                    },
                                    Kind: "illum",
                                    Rrdatas: []string{
                                        "non",
                                        "mollitia",
                                        "assumenda",
                                    },
                                    SignatureRrdatas: []string{
                                        "distinctio",
                                        "pariatur",
                                        "ad",
                                        "facere",
                                    },
                                    Weight: 6746.83,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laborum",
                                                IPProtocol: "undefined",
                                                Kind: "maxime",
                                                LoadBalancerType: "none",
                                                NetworkURL: "alias",
                                                Port: "suscipit",
                                                Project: "deserunt",
                                                Region: "molestias",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laborum",
                                                IPProtocol: "udp",
                                                Kind: "occaecati",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quo",
                                                Port: "perferendis",
                                                Project: "fugit",
                                                Region: "aliquid",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magnam",
                                                IPProtocol: "undefined",
                                                Kind: "eligendi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nostrum",
                                                Port: "officiis",
                                                Project: "unde",
                                                Region: "nulla",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "error",
                                                IPProtocol: "tcp",
                                                Kind: "magnam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "esse",
                                                Port: "corrupti",
                                                Project: "fuga",
                                                Region: "facere",
                                            },
                                        },
                                    },
                                    Kind: "impedit",
                                    Rrdatas: []string{
                                        "deserunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "laboriosam",
                                        "doloremque",
                                        "voluptatem",
                                        "facere",
                                    },
                                    Weight: 9010.08,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "undefined",
                                                Kind: "architecto",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "porro",
                                                Port: "blanditiis",
                                                Project: "quae",
                                                Region: "magni",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officiis",
                                                IPProtocol: "undefined",
                                                Kind: "necessitatibus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ipsa",
                                                Port: "excepturi",
                                                Project: "a",
                                                Region: "maiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laudantium",
                                                IPProtocol: "udp",
                                                Kind: "alias",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "rem",
                                                Port: "dicta",
                                                Project: "suscipit",
                                                Region: "earum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloribus",
                                                IPProtocol: "undefined",
                                                Kind: "eius",
                                                LoadBalancerType: "none",
                                                NetworkURL: "in",
                                                Port: "eligendi",
                                                Project: "quasi",
                                                Region: "neque",
                                            },
                                        },
                                    },
                                    Kind: "vero",
                                    Rrdatas: []string{
                                        "accusantium",
                                        "qui",
                                        "impedit",
                                    },
                                    SignatureRrdatas: []string{
                                        "incidunt",
                                    },
                                    Weight: 1165.58,
                                },
                            },
                            Kind: "odit",
                        },
                    },
                    Rrdatas: []string{
                        "rerum",
                        "alias",
                    },
                    SignatureRrdatas: []string{
                        "vel",
                        "accusantium",
                        "id",
                    },
                    TTL: 388169,
                    Type: "ex",
                },
            },
            ID: "quas",
            IsServing: false,
            Kind: "veritatis",
            StartTime: "ullam",
            Status: "pending",
        },
        AccessToken: "similique",
        Alt: "json",
        Callback: "quam",
        ClientOperationID: "magni",
        Fields: "deserunt",
        Key: "delectus",
        ManagedZone: "omnis",
        OauthToken: "sed",
        PrettyPrint: false,
        Project: "nesciunt",
        QuotaUser: "maxime",
        UploadType: "quis",
        UploadProtocol: "cupiditate",
    }

    ctx := context.Background()
    res, err := s.Changes.DNSChangesCreate(ctx, req, operations.DNSChangesCreateSecurity{
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
