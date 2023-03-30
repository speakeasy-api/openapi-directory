# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dns/v1/go
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
            ManagedZone: "corrupti",
            Project: "provident",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quibusdam",
            Alt: "media",
            Callback: "nulla",
            ClientOperationID: "corrupti",
            Fields: "illum",
            Key: "vel",
            OauthToken: "error",
            PrettyPrint: false,
            QuotaUser: "deserunt",
            UploadType: "suscipit",
            UploadProtocol: "iure",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "debitis",
                    Name: "ipsa",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "suscipit",
                                                IPProtocol: "tcp",
                                                Kind: "minus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatum",
                                                Port: "iusto",
                                                Project: "excepturi",
                                                Region: "nisi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "udp",
                                                Kind: "ab",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veritatis",
                                                Port: "deserunt",
                                                Project: "perferendis",
                                                Region: "ipsam",
                                            },
                                        },
                                    },
                                    Kind: "repellendus",
                                    Location: "sapiente",
                                    Rrdatas: []string{
                                        "odit",
                                        "at",
                                        "at",
                                        "maiores",
                                    },
                                    SignatureRrdatas: []string{
                                        "quod",
                                        "quod",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "totam",
                                                IPProtocol: "udp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nam",
                                                Port: "officia",
                                                Project: "occaecati",
                                                Region: "fugit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deleniti",
                                                IPProtocol: "udp",
                                                Kind: "optio",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "beatae",
                                                Port: "commodi",
                                                Project: "molestiae",
                                                Region: "modi",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Location: "impedit",
                                    Rrdatas: []string{
                                        "esse",
                                        "ipsum",
                                        "excepturi",
                                    },
                                    SignatureRrdatas: []string{
                                        "perferendis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "natus",
                                                IPProtocol: "undefined",
                                                Kind: "iste",
                                                LoadBalancerType: "none",
                                                NetworkURL: "natus",
                                                Port: "laboriosam",
                                                Project: "hic",
                                                Region: "saepe",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "tcp",
                                                Kind: "corporis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "iure",
                                                Port: "saepe",
                                                Project: "quidem",
                                                Region: "architecto",
                                            },
                                        },
                                    },
                                    Kind: "ipsa",
                                    Location: "reiciendis",
                                    Rrdatas: []string{
                                        "mollitia",
                                        "laborum",
                                        "dolores",
                                    },
                                    SignatureRrdatas: []string{
                                        "corporis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nobis",
                                                IPProtocol: "undefined",
                                                Kind: "omnis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "minima",
                                                Port: "excepturi",
                                                Project: "accusantium",
                                                Region: "iure",
                                            },
                                        },
                                    },
                                    Kind: "culpa",
                                    Location: "doloribus",
                                    Rrdatas: []string{
                                        "architecto",
                                        "mollitia",
                                        "dolorem",
                                        "culpa",
                                    },
                                    SignatureRrdatas: []string{
                                        "repellat",
                                    },
                                },
                            },
                            Kind: "mollitia",
                        },
                        Kind: "occaecati",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quam",
                                                    IPProtocol: "tcp",
                                                    Kind: "velit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quia",
                                                    Port: "quis",
                                                    Project: "vitae",
                                                    Region: "laborum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "animi",
                                                    IPProtocol: "undefined",
                                                    Kind: "odit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "sequi",
                                                    Port: "tenetur",
                                                    Project: "ipsam",
                                                    Region: "id",
                                                },
                                            },
                                        },
                                        Kind: "possimus",
                                        Location: "aut",
                                        Rrdatas: []string{
                                            "error",
                                        },
                                        SignatureRrdatas: []string{
                                            "laborum",
                                            "quasi",
                                            "reiciendis",
                                            "voluptatibus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nihil",
                                                    IPProtocol: "tcp",
                                                    Kind: "voluptatibus",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "omnis",
                                                    Port: "voluptate",
                                                    Project: "cum",
                                                    Region: "perferendis",
                                                },
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dicta",
                                                    IPProtocol: "udp",
                                                    Kind: "enim",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "commodi",
                                                    Port: "repudiandae",
                                                    Project: "quae",
                                                    Region: "ipsum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quidem",
                                                    IPProtocol: "tcp",
                                                    Kind: "excepturi",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "modi",
                                                    Port: "praesentium",
                                                    Project: "rem",
                                                    Region: "voluptates",
                                                },
                                            },
                                        },
                                        Kind: "quasi",
                                        Location: "repudiandae",
                                        Rrdatas: []string{
                                            "veritatis",
                                            "itaque",
                                            "incidunt",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequatur",
                                            "est",
                                        },
                                    },
                                },
                                Kind: "quibusdam",
                            },
                            Kind: "explicabo",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "distinctio",
                                        IPProtocol: "udp",
                                        Kind: "labore",
                                        LoadBalancerType: "none",
                                        NetworkURL: "qui",
                                        Port: "aliquid",
                                        Project: "cupiditate",
                                        Region: "quos",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "perferendis",
                                        IPProtocol: "undefined",
                                        Kind: "assumenda",
                                        LoadBalancerType: "none",
                                        NetworkURL: "alias",
                                        Port: "fugit",
                                        Project: "dolorum",
                                        Region: "excepturi",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "tempora",
                                        IPProtocol: "udp",
                                        Kind: "tempore",
                                        LoadBalancerType: "none",
                                        NetworkURL: "delectus",
                                        Port: "eum",
                                        Project: "non",
                                        Region: "eligendi",
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
                                                IPAddress: "necessitatibus",
                                                IPProtocol: "tcp",
                                                Kind: "officia",
                                                LoadBalancerType: "none",
                                                NetworkURL: "debitis",
                                                Port: "a",
                                                Project: "dolorum",
                                                Region: "in",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "udp",
                                                Kind: "maiores",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dicta",
                                                Port: "magnam",
                                                Project: "cumque",
                                                Region: "facere",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "tcp",
                                                Kind: "laborum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "non",
                                                Port: "occaecati",
                                                Project: "enim",
                                                Region: "accusamus",
                                            },
                                        },
                                    },
                                    Kind: "delectus",
                                    Rrdatas: []string{
                                        "provident",
                                        "nam",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "deleniti",
                                        "sapiente",
                                        "amet",
                                    },
                                    Weight: 6439.9,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "tcp",
                                                Kind: "omnis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "perferendis",
                                                Port: "nihil",
                                                Project: "magnam",
                                                Region: "distinctio",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "undefined",
                                                Kind: "labore",
                                                LoadBalancerType: "none",
                                                NetworkURL: "natus",
                                                Port: "nobis",
                                                Project: "eum",
                                                Region: "vero",
                                            },
                                        },
                                    },
                                    Kind: "aspernatur",
                                    Rrdatas: []string{
                                        "magnam",
                                    },
                                    SignatureRrdatas: []string{
                                        "excepturi",
                                    },
                                    Weight: 3540.47,
                                },
                            },
                            Kind: "provident",
                        },
                    },
                    Rrdatas: []string{
                        "sint",
                        "accusantium",
                        "mollitia",
                    },
                    SignatureRrdatas: []string{
                        "mollitia",
                        "ad",
                        "eum",
                        "dolor",
                    },
                    TTL: 896547,
                    Type: "odit",
                },
                shared.ResourceRecordSet{
                    Kind: "nemo",
                    Name: "quasi",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "debitis",
                                                IPProtocol: "undefined",
                                                Kind: "maxime",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "facilis",
                                                Port: "in",
                                                Project: "architecto",
                                                Region: "architecto",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repudiandae",
                                                IPProtocol: "tcp",
                                                Kind: "expedita",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repellat",
                                                Port: "quibusdam",
                                                Project: "sed",
                                                Region: "saepe",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "undefined",
                                                Kind: "consequuntur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "natus",
                                                Port: "magni",
                                                Project: "sunt",
                                                Region: "quo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "illum",
                                                IPProtocol: "udp",
                                                Kind: "maxime",
                                                LoadBalancerType: "none",
                                                NetworkURL: "excepturi",
                                                Port: "odit",
                                                Project: "ea",
                                                Region: "accusantium",
                                            },
                                        },
                                    },
                                    Kind: "ab",
                                    Location: "maiores",
                                    Rrdatas: []string{
                                        "ipsam",
                                        "voluptate",
                                        "autem",
                                    },
                                    SignatureRrdatas: []string{
                                        "eaque",
                                        "pariatur",
                                        "nemo",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perferendis",
                                                IPProtocol: "udp",
                                                Kind: "amet",
                                                LoadBalancerType: "none",
                                                NetworkURL: "cumque",
                                                Port: "corporis",
                                                Project: "hic",
                                                Region: "libero",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nobis",
                                                IPProtocol: "undefined",
                                                Kind: "quis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dignissimos",
                                                Port: "eaque",
                                                Project: "quis",
                                                Region: "nesciunt",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "undefined",
                                                Kind: "dolores",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quam",
                                                Port: "dolor",
                                                Project: "vero",
                                                Region: "nostrum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "hic",
                                                IPProtocol: "udp",
                                                Kind: "omnis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "perspiciatis",
                                                Port: "voluptatem",
                                                Project: "porro",
                                                Region: "consequuntur",
                                            },
                                        },
                                    },
                                    Kind: "blanditiis",
                                    Location: "error",
                                    Rrdatas: []string{
                                        "occaecati",
                                    },
                                    SignatureRrdatas: []string{
                                        "adipisci",
                                        "asperiores",
                                        "earum",
                                    },
                                },
                            },
                            Kind: "modi",
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
                                                    IPAddress: "pariatur",
                                                    IPProtocol: "tcp",
                                                    Kind: "nobis",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "delectus",
                                                    Port: "quaerat",
                                                    Project: "quos",
                                                    Region: "aliquid",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolorem",
                                                    IPProtocol: "undefined",
                                                    Kind: "dolor",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "ipsum",
                                                    Port: "hic",
                                                    Project: "excepturi",
                                                    Region: "cum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptate",
                                                    IPProtocol: "tcp",
                                                    Kind: "reiciendis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dolorum",
                                                    Port: "numquam",
                                                    Project: "veritatis",
                                                    Region: "ipsa",
                                                },
                                            },
                                        },
                                        Kind: "ipsa",
                                        Location: "iure",
                                        Rrdatas: []string{
                                            "quaerat",
                                            "accusamus",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatibus",
                                            "voluptas",
                                            "natus",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "atque",
                                                    IPProtocol: "undefined",
                                                    Kind: "fugiat",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "soluta",
                                                    Port: "dolorum",
                                                    Project: "iusto",
                                                    Region: "voluptate",
                                                },
                                            },
                                        },
                                        Kind: "dolorum",
                                        Location: "deleniti",
                                        Rrdatas: []string{
                                            "necessitatibus",
                                            "distinctio",
                                            "asperiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "ipsum",
                                            "voluptate",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "saepe",
                                                    IPProtocol: "undefined",
                                                    Kind: "aspernatur",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "amet",
                                                    Port: "optio",
                                                    Project: "accusamus",
                                                    Region: "ad",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "saepe",
                                                    IPProtocol: "tcp",
                                                    Kind: "deserunt",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "minima",
                                                    Port: "repellendus",
                                                    Project: "totam",
                                                    Region: "similique",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "alias",
                                                    IPProtocol: "udp",
                                                    Kind: "quaerat",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "vel",
                                                    Port: "quod",
                                                    Project: "officiis",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "dolorum",
                                        Location: "a",
                                        Rrdatas: []string{
                                            "harum",
                                            "iusto",
                                        },
                                        SignatureRrdatas: []string{
                                            "quisquam",
                                        },
                                    },
                                },
                                Kind: "tenetur",
                            },
                            Kind: "amet",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "accusamus",
                                        IPProtocol: "undefined",
                                        Kind: "enim",
                                        LoadBalancerType: "none",
                                        NetworkURL: "sapiente",
                                        Port: "totam",
                                        Project: "nihil",
                                        Region: "sit",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "expedita",
                                        IPProtocol: "undefined",
                                        Kind: "sed",
                                        LoadBalancerType: "none",
                                        NetworkURL: "libero",
                                        Port: "voluptas",
                                        Project: "deserunt",
                                        Region: "quam",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ipsum",
                                        IPProtocol: "undefined",
                                        Kind: "qui",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "maxime",
                                        Port: "pariatur",
                                        Project: "soluta",
                                        Region: "dicta",
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
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nobis",
                                                IPProtocol: "tcp",
                                                Kind: "tempore",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aperiam",
                                                Port: "delectus",
                                                Project: "dolorem",
                                                Region: "dolore",
                                            },
                                        },
                                    },
                                    Kind: "labore",
                                    Rrdatas: []string{
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "quae",
                                    },
                                    Weight: 164.29,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "undefined",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "porro",
                                                Port: "doloribus",
                                                Project: "ut",
                                                Region: "facilis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cupiditate",
                                                IPProtocol: "undefined",
                                                Kind: "quae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "odio",
                                                Port: "occaecati",
                                                Project: "voluptatibus",
                                                Region: "quisquam",
                                            },
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
                                        },
                                    },
                                    Kind: "tenetur",
                                    Rrdatas: []string{
                                        "hic",
                                        "distinctio",
                                    },
                                    SignatureRrdatas: []string{
                                        "odio",
                                        "similique",
                                        "facilis",
                                        "vero",
                                    },
                                    Weight: 4981.4,
                                },
                            },
                            Kind: "dolore",
                        },
                    },
                    Rrdatas: []string{
                        "illum",
                        "sequi",
                        "natus",
                        "impedit",
                    },
                    SignatureRrdatas: []string{
                        "voluptatibus",
                    },
                    TTL: 347233,
                    Type: "nulla",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "porro",
                    Name: "maiores",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eligendi",
                                                IPProtocol: "tcp",
                                                Kind: "alias",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "tempora",
                                                Port: "ipsam",
                                                Project: "ea",
                                                Region: "aspernatur",
                                            },
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
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "impedit",
                                                IPProtocol: "tcp",
                                                Kind: "veniam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "inventore",
                                                Port: "magnam",
                                                Project: "ea",
                                                Region: "quo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consectetur",
                                                IPProtocol: "udp",
                                                Kind: "aspernatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eaque",
                                                Port: "a",
                                                Project: "libero",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Location: "deleniti",
                                    Rrdatas: []string{
                                        "aliquam",
                                        "fugit",
                                        "accusamus",
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                        "dolorum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "placeat",
                                                IPProtocol: "undefined",
                                                Kind: "eum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nobis",
                                                Port: "quas",
                                                Project: "assumenda",
                                                Region: "nulla",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "udp",
                                                Kind: "quasi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "numquam",
                                                Port: "explicabo",
                                                Project: "provident",
                                                Region: "ipsa",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "undefined",
                                                Kind: "odio",
                                                LoadBalancerType: "none",
                                                NetworkURL: "esse",
                                                Port: "esse",
                                                Project: "rem",
                                                Region: "fuga",
                                            },
                                        },
                                    },
                                    Kind: "reprehenderit",
                                    Location: "quidem",
                                    Rrdatas: []string{
                                        "ut",
                                        "eum",
                                        "suscipit",
                                        "assumenda",
                                    },
                                    SignatureRrdatas: []string{
                                        "praesentium",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "undefined",
                                                Kind: "id",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "neque",
                                                Port: "quo",
                                                Project: "illum",
                                                Region: "quo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "undefined",
                                                Kind: "eos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ab",
                                                Port: "cupiditate",
                                                Project: "consequatur",
                                                Region: "tempora",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "debitis",
                                                IPProtocol: "tcp",
                                                Kind: "aspernatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quo",
                                                Port: "esse",
                                                Project: "recusandae",
                                                Region: "aperiam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "distinctio",
                                                IPProtocol: "udp",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nihil",
                                                Port: "totam",
                                                Project: "accusamus",
                                                Region: "aliquam",
                                            },
                                        },
                                    },
                                    Kind: "odio",
                                    Location: "occaecati",
                                    Rrdatas: []string{
                                        "sapiente",
                                        "dolores",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "accusantium",
                                        "porro",
                                    },
                                },
                            },
                            Kind: "eum",
                        },
                        Kind: "quas",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "deleniti",
                                                    IPProtocol: "undefined",
                                                    Kind: "fuga",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "incidunt",
                                                    Port: "atque",
                                                    Project: "explicabo",
                                                    Region: "minima",
                                                },
                                            },
                                        },
                                        Kind: "nisi",
                                        Location: "fugit",
                                        Rrdatas: []string{
                                            "consequuntur",
                                            "ratione",
                                            "explicabo",
                                            "saepe",
                                        },
                                        SignatureRrdatas: []string{
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
                    },
                    Rrdatas: []string{
                        "explicabo",
                        "voluptas",
                        "aut",
                        "dignissimos",
                    },
                    SignatureRrdatas: []string{
                        "maiores",
                    },
                    TTL: 618480,
                    Type: "velit",
                },
            },
            ID: "voluptatibus",
            IsServing: false,
            Kind: "voluptas",
            StartTime: "asperiores",
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
