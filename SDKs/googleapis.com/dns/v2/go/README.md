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
            Location: "corrupti",
            ManagedZone: "provident",
            Project: "distinctio",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "unde",
            Alt: "proto",
            Callback: "corrupti",
            ClientOperationID: "illum",
            Fields: "vel",
            Key: "error",
            OauthToken: "deserunt",
            PrettyPrint: false,
            QuotaUser: "suscipit",
            UploadType: "iure",
            UploadProtocol: "magnam",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "ipsa",
                    Name: "delectus",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "UDP",
                                                Kind: "placeat",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "iusto",
                                                Port: "excepturi",
                                                Project: "nisi",
                                                Region: "recusandae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "temporibus",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "quis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "deserunt",
                                                Port: "perferendis",
                                                Project: "ipsam",
                                                Region: "repellendus",
                                            },
                                        },
                                    },
                                    Kind: "sapiente",
                                    Location: "quo",
                                    Rrdatas: []string{
                                        "at",
                                    },
                                    SignatureRrdatas: []string{
                                        "maiores",
                                        "molestiae",
                                        "quod",
                                        "quod",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "totam",
                                                IPProtocol: "UDP",
                                                Kind: "dolorum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "nam",
                                                Port: "officia",
                                                Project: "occaecati",
                                                Region: "fugit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deleniti",
                                                IPProtocol: "UDP",
                                                Kind: "optio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
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
                            },
                            Kind: "ad",
                        },
                        Kind: "natus",
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
                                                    Kind: "laboriosam",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "saepe",
                                                    Port: "fuga",
                                                    Project: "in",
                                                    Region: "corporis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "iste",
                                                    IPProtocol: "TCP",
                                                    Kind: "saepe",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "architecto",
                                                    Port: "ipsa",
                                                    Project: "reiciendis",
                                                    Region: "est",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "mollitia",
                                                    IPProtocol: "UDP",
                                                    Kind: "dolores",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "corporis",
                                                    Port: "explicabo",
                                                    Project: "nobis",
                                                    Region: "enim",
                                                },
                                            },
                                        },
                                        Kind: "omnis",
                                        Location: "nemo",
                                        Rrdatas: []string{
                                            "excepturi",
                                            "accusantium",
                                        },
                                        SignatureRrdatas: []string{
                                            "culpa",
                                            "doloribus",
                                        },
                                    },
                                },
                                Kind: "sapiente",
                            },
                            Kind: "architecto",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolorem",
                                        IPProtocol: "TCP",
                                        Kind: "consequuntur",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "mollitia",
                                        Port: "occaecati",
                                        Project: "numquam",
                                        Region: "commodi",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quam",
                                        IPProtocol: "TCP",
                                        Kind: "velit",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "quia",
                                        Port: "quis",
                                        Project: "vitae",
                                        Region: "laborum",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "animi",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "odit",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "sequi",
                                        Port: "tenetur",
                                        Project: "ipsam",
                                        Region: "id",
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
                                                IPAddress: "error",
                                                IPProtocol: "UDP",
                                                Kind: "laborum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "reiciendis",
                                                Port: "voluptatibus",
                                                Project: "vero",
                                                Region: "nihil",
                                            },
                                        },
                                    },
                                    Kind: "praesentium",
                                    Rrdatas: []string{
                                        "ipsa",
                                        "omnis",
                                        "voluptate",
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloremque",
                                    },
                                    Weight: 4417.11,
                                },
                            },
                            Kind: "ut",
                        },
                    },
                    Rrdatas: []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                    SignatureRrdatas: []string{
                        "harum",
                    },
                    TTL: 317983,
                    Type: "accusamus",
                },
                shared.ResourceRecordSet{
                    Kind: "commodi",
                    Name: "repudiandae",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quidem",
                                                IPProtocol: "TCP",
                                                Kind: "excepturi",
                                                LoadBalancerType: "REGIONAL_L4ILB",
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
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quibusdam",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "modi",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "aliquid",
                                                    Port: "cupiditate",
                                                    Project: "quos",
                                                    Region: "perferendis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "magni",
                                                    IPProtocol: "UDP",
                                                    Kind: "ipsam",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "fugit",
                                                    Port: "dolorum",
                                                    Project: "excepturi",
                                                    Region: "tempora",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "facilis",
                                                    IPProtocol: "UDP",
                                                    Kind: "labore",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "eum",
                                                    Port: "non",
                                                    Project: "eligendi",
                                                    Region: "sint",
                                                },
                                            },
                                        },
                                        Kind: "aliquid",
                                        Location: "provident",
                                        Rrdatas: []string{
                                            "sint",
                                            "officia",
                                            "dolor",
                                            "debitis",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolorum",
                                            "in",
                                            "in",
                                            "illum",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "rerum",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "magnam",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "facere",
                                                    Port: "ea",
                                                    Project: "aliquid",
                                                    Region: "laborum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusamus",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "occaecati",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "accusamus",
                                                    Port: "delectus",
                                                    Project: "quidem",
                                                    Region: "provident",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nam",
                                                    IPProtocol: "TCP",
                                                    Kind: "blanditiis",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "sapiente",
                                                    Port: "amet",
                                                    Project: "deserunt",
                                                    Region: "nisi",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vel",
                                                    IPProtocol: "TCP",
                                                    Kind: "omnis",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "perferendis",
                                                    Port: "nihil",
                                                    Project: "magnam",
                                                    Region: "distinctio",
                                                },
                                            },
                                        },
                                        Kind: "id",
                                        Location: "labore",
                                        Rrdatas: []string{
                                            "suscipit",
                                            "natus",
                                        },
                                        SignatureRrdatas: []string{
                                            "eum",
                                            "vero",
                                            "aspernatur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "magnam",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "excepturi",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "provident",
                                                    Port: "quos",
                                                    Project: "sint",
                                                    Region: "accusantium",
                                                },
                                            },
                                        },
                                        Kind: "mollitia",
                                        Location: "reiciendis",
                                        Rrdatas: []string{
                                            "ad",
                                            "eum",
                                            "dolor",
                                        },
                                        SignatureRrdatas: []string{
                                            "odit",
                                            "nemo",
                                            "quasi",
                                            "iure",
                                        },
                                    },
                                },
                                Kind: "doloribus",
                            },
                            Kind: "debitis",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "maxime",
                                        IPProtocol: "TCP",
                                        Kind: "facilis",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "architecto",
                                        Port: "architecto",
                                        Project: "repudiandae",
                                        Region: "ullam",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "expedita",
                                        IPProtocol: "TCP",
                                        Kind: "repellat",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "sed",
                                        Port: "saepe",
                                        Project: "pariatur",
                                        Region: "accusantium",
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
                                                IPAddress: "magni",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "quo",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "pariatur",
                                                Port: "maxime",
                                                Project: "ea",
                                                Region: "excepturi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "TCP",
                                                Kind: "accusantium",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "maiores",
                                                Port: "quidem",
                                                Project: "ipsam",
                                                Region: "voluptate",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "UDP",
                                                Kind: "eaque",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "nemo",
                                                Port: "voluptatibus",
                                                Project: "perferendis",
                                                Region: "fugiat",
                                            },
                                        },
                                    },
                                    Kind: "amet",
                                    Rrdatas: []string{
                                        "cumque",
                                    },
                                    SignatureRrdatas: []string{
                                        "hic",
                                        "libero",
                                    },
                                    Weight: 7499.99,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "TCP",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quis",
                                                Port: "nesciunt",
                                                Project: "eos",
                                                Region: "perferendis",
                                            },
                                        },
                                    },
                                    Kind: "dolores",
                                    Rrdatas: []string{
                                        "quam",
                                        "dolor",
                                        "vero",
                                        "nostrum",
                                    },
                                    SignatureRrdatas: []string{
                                        "recusandae",
                                        "omnis",
                                        "facilis",
                                        "perspiciatis",
                                    },
                                    Weight: 318.38,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequuntur",
                                                IPProtocol: "TCP",
                                                Kind: "error",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "occaecati",
                                                Port: "rerum",
                                                Project: "adipisci",
                                                Region: "asperiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "earum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "iste",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "deleniti",
                                                Port: "pariatur",
                                                Project: "provident",
                                                Region: "nobis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "UDP",
                                                Kind: "quaerat",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aliquid",
                                                Port: "dolorem",
                                                Project: "dolorem",
                                                Region: "dolor",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "hic",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "cum",
                                                Port: "voluptate",
                                                Project: "dignissimos",
                                                Region: "reiciendis",
                                            },
                                        },
                                    },
                                    Kind: "amet",
                                    Rrdatas: []string{
                                        "numquam",
                                        "veritatis",
                                        "ipsa",
                                    },
                                    SignatureRrdatas: []string{
                                        "iure",
                                    },
                                    Weight: 4878.38,
                                },
                            },
                            Kind: "quaerat",
                        },
                    },
                    Rrdatas: []string{
                        "quidem",
                        "voluptatibus",
                        "voluptas",
                        "natus",
                    },
                    SignatureRrdatas: []string{
                        "atque",
                    },
                    TTL: 24678,
                    Type: "fugiat",
                },
                shared.ResourceRecordSet{
                    Kind: "ab",
                    Name: "soluta",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptate",
                                                IPProtocol: "UDP",
                                                Kind: "deleniti",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "necessitatibus",
                                                Port: "distinctio",
                                                Project: "asperiores",
                                                Region: "nihil",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsum",
                                                IPProtocol: "TCP",
                                                Kind: "id",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eius",
                                                Port: "aspernatur",
                                                Project: "perferendis",
                                                Region: "amet",
                                            },
                                        },
                                    },
                                    Kind: "optio",
                                    Location: "accusamus",
                                    Rrdatas: []string{
                                        "saepe",
                                        "suscipit",
                                    },
                                    SignatureRrdatas: []string{
                                        "provident",
                                        "minima",
                                        "repellendus",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "similique",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "at",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "tempora",
                                                Port: "vel",
                                                Project: "quod",
                                                Region: "officiis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UDP",
                                                Kind: "a",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "harum",
                                                Port: "iusto",
                                                Project: "ipsum",
                                                Region: "quisquam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tenetur",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "tempore",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "numquam",
                                                Port: "enim",
                                                Project: "dolorem",
                                                Region: "sapiente",
                                            },
                                        },
                                    },
                                    Kind: "totam",
                                    Location: "nihil",
                                    Rrdatas: []string{
                                        "expedita",
                                    },
                                    SignatureRrdatas: []string{
                                        "sed",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "TCP",
                                                Kind: "deserunt",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ipsum",
                                                Port: "incidunt",
                                                Project: "qui",
                                                Region: "cupiditate",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maxime",
                                                IPProtocol: "UDP",
                                                Kind: "soluta",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "laborum",
                                                Port: "totam",
                                                Project: "incidunt",
                                                Region: "aspernatur",
                                            },
                                        },
                                    },
                                    Kind: "dolores",
                                    Location: "distinctio",
                                    Rrdatas: []string{
                                        "aliquid",
                                        "quam",
                                        "molestias",
                                    },
                                    SignatureRrdatas: []string{
                                        "qui",
                                        "neque",
                                        "fugit",
                                        "magni",
                                    },
                                },
                            },
                            Kind: "odio",
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
                                                    IPAddress: "hic",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "cumque",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "nobis",
                                                    Port: "et",
                                                    Project: "saepe",
                                                    Region: "ipsum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "veritatis",
                                                    IPProtocol: "UDP",
                                                    Kind: "quos",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "cupiditate",
                                                    Port: "aperiam",
                                                    Project: "delectus",
                                                    Region: "dolorem",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolore",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "adipisci",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "architecto",
                                                    Port: "quae",
                                                    Project: "aut",
                                                    Region: "quas",
                                                },
                                            },
                                        },
                                        Kind: "itaque",
                                        Location: "consequatur",
                                        Rrdatas: []string{
                                            "repellendus",
                                            "porro",
                                            "doloribus",
                                        },
                                        SignatureRrdatas: []string{
                                            "facilis",
                                            "cupiditate",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quae",
                                                    IPProtocol: "TCP",
                                                    Kind: "odio",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "voluptatibus",
                                                    Port: "quisquam",
                                                    Project: "vero",
                                                    Region: "omnis",
                                                },
                                            },
                                        },
                                        Kind: "quis",
                                        Location: "ipsum",
                                        Rrdatas: []string{
                                            "voluptate",
                                            "consectetur",
                                            "vero",
                                            "tenetur",
                                        },
                                        SignatureRrdatas: []string{
                                            "hic",
                                            "distinctio",
                                        },
                                    },
                                },
                                Kind: "quod",
                            },
                            Kind: "odio",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "facilis",
                                        IPProtocol: "UDP",
                                        Kind: "ducimus",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "quibusdam",
                                        Port: "illum",
                                        Project: "sequi",
                                        Region: "natus",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "impedit",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "voluptatibus",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "nulla",
                                        Port: "fugit",
                                        Project: "porro",
                                        Region: "maiores",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "doloribus",
                                        IPProtocol: "TCP",
                                        Kind: "eligendi",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "alias",
                                        Port: "officia",
                                        Project: "tempora",
                                        Region: "ipsam",
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
                                                IPAddress: "possimus",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ratione",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "laudantium",
                                                Port: "dicta",
                                                Project: "dolor",
                                                Region: "maiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quasi",
                                                IPProtocol: "TCP",
                                                Kind: "nulla",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptatibus",
                                                Port: "nostrum",
                                                Project: "sapiente",
                                                Region: "quisquam",
                                            },
                                        },
                                    },
                                    Kind: "saepe",
                                    Rrdatas: []string{
                                        "impedit",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquid",
                                        "inventore",
                                    },
                                    Weight: 3018.31,
                                },
                            },
                            Kind: "ea",
                        },
                    },
                    Rrdatas: []string{
                        "consectetur",
                        "recusandae",
                        "aspernatur",
                        "minima",
                    },
                    SignatureRrdatas: []string{
                        "a",
                    },
                    TTL: 725595,
                    Type: "aut",
                },
                shared.ResourceRecordSet{
                    Kind: "aut",
                    Name: "deleniti",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugit",
                                                IPProtocol: "UDP",
                                                Kind: "inventore",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "et",
                                                Port: "dolorum",
                                                Project: "laborum",
                                                Region: "placeat",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "velit",
                                                IPProtocol: "TCP",
                                                Kind: "autem",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quas",
                                                Port: "assumenda",
                                                Project: "nulla",
                                                Region: "voluptas",
                                            },
                                        },
                                    },
                                    Kind: "libero",
                                    Location: "quasi",
                                    Rrdatas: []string{
                                        "numquam",
                                        "explicabo",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsa",
                                        "molestiae",
                                        "magnam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eius",
                                                IPProtocol: "TCP",
                                                Kind: "esse",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "fuga",
                                                Port: "reprehenderit",
                                                Project: "quidem",
                                                Region: "fugiat",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "TCP",
                                                Kind: "suscipit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "eos",
                                                Port: "praesentium",
                                                Project: "quisquam",
                                                Region: "veritatis",
                                            },
                                        },
                                    },
                                    Kind: "ipsa",
                                    Location: "id",
                                    Rrdatas: []string{
                                        "neque",
                                        "quo",
                                        "illum",
                                    },
                                    SignatureRrdatas: []string{
                                        "fuga",
                                        "eius",
                                        "eos",
                                        "voluptas",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cupiditate",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "tempora",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ipsam",
                                                Port: "aspernatur",
                                                Project: "sequi",
                                                Region: "quo",
                                            },
                                        },
                                    },
                                    Kind: "esse",
                                    Location: "recusandae",
                                    Rrdatas: []string{
                                        "distinctio",
                                    },
                                    SignatureRrdatas: []string{
                                        "dignissimos",
                                        "inventore",
                                        "nihil",
                                        "totam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aliquam",
                                                IPProtocol: "TCP",
                                                Kind: "occaecati",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "sapiente",
                                                Port: "dolores",
                                                Project: "deserunt",
                                                Region: "molestiae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "accusantium",
                                                IPProtocol: "UDP",
                                                Kind: "eum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "praesentium",
                                                Port: "consequuntur",
                                                Project: "deleniti",
                                                Region: "fugit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "TCP",
                                                Kind: "incidunt",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "explicabo",
                                                Port: "minima",
                                                Project: "nisi",
                                                Region: "fugit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sapiente",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ratione",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "saepe",
                                                Port: "occaecati",
                                                Project: "atque",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "esse",
                                    Location: "eveniet",
                                    Rrdatas: []string{
                                        "veritatis",
                                        "esse",
                                        "quod",
                                        "nam",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquid",
                                        "quasi",
                                        "saepe",
                                        "vel",
                                    },
                                },
                            },
                            Kind: "harum",
                        },
                        Kind: "molestiae",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minima",
                                                    IPProtocol: "UDP",
                                                    Kind: "eligendi",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "culpa",
                                                    Port: "tempore",
                                                    Project: "adipisci",
                                                    Region: "cumque",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "consequuntur",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "minus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "sapiente",
                                                    Port: "consectetur",
                                                    Project: "esse",
                                                    Region: "blanditiis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "provident",
                                                    IPProtocol: "UDP",
                                                    Kind: "nulla",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "esse",
                                                    Port: "quasi",
                                                    Project: "a",
                                                    Region: "error",
                                                },
                                            },
                                        },
                                        Kind: "sint",
                                        Location: "pariatur",
                                        Rrdatas: []string{
                                            "quia",
                                            "eveniet",
                                            "asperiores",
                                            "facere",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequuntur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "similique",
                                                    IPProtocol: "TCP",
                                                    Kind: "aliquid",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "quae",
                                                    Port: "earum",
                                                    Project: "vel",
                                                    Region: "in",
                                                },
                                            },
                                        },
                                        Kind: "eius",
                                        Location: "libero",
                                        Rrdatas: []string{
                                            "soluta",
                                            "accusantium",
                                            "aliquam",
                                            "sapiente",
                                        },
                                        SignatureRrdatas: []string{
                                            "ullam",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ullam",
                                                    IPProtocol: "TCP",
                                                    Kind: "aut",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "qui",
                                                    Port: "quibusdam",
                                                    Project: "ex",
                                                    Region: "deleniti",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "itaque",
                                                    IPProtocol: "UDP",
                                                    Kind: "architecto",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "tenetur",
                                                    Port: "quasi",
                                                    Project: "at",
                                                    Region: "et",
                                                },
                                            },
                                        },
                                        Kind: "voluptate",
                                        Location: "ipsa",
                                        Rrdatas: []string{
                                            "veritatis",
                                            "consectetur",
                                        },
                                        SignatureRrdatas: []string{
                                            "iste",
                                        },
                                    },
                                },
                                Kind: "temporibus",
                            },
                            Kind: "accusantium",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aut",
                                        IPProtocol: "TCP",
                                        Kind: "eum",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "ab",
                                        Port: "corrupti",
                                        Project: "non",
                                        Region: "voluptatem",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolor",
                                        IPProtocol: "TCP",
                                        Kind: "numquam",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "explicabo",
                                        Port: "voluptas",
                                        Project: "aut",
                                        Region: "dignissimos",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dicta",
                                        IPProtocol: "UDP",
                                        Kind: "natus",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "voluptatibus",
                                        Port: "voluptas",
                                        Project: "asperiores",
                                        Region: "aperiam",
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
                                                IPAddress: "repellendus",
                                                IPProtocol: "TCP",
                                                Kind: "maxime",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "officia",
                                                Port: "asperiores",
                                                Project: "nemo",
                                                Region: "quae",
                                            },
                                        },
                                    },
                                    Kind: "quaerat",
                                    Rrdatas: []string{
                                        "quod",
                                        "labore",
                                        "ab",
                                        "adipisci",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                        "suscipit",
                                        "velit",
                                    },
                                    Weight: 6339.31,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "TCP",
                                                Kind: "fugiat",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ducimus",
                                                Port: "quos",
                                                Project: "vel",
                                                Region: "labore",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "possimus",
                                                IPProtocol: "UDP",
                                                Kind: "cum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "in",
                                                Port: "corporis",
                                                Project: "reiciendis",
                                                Region: "assumenda",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nemo",
                                                IPProtocol: "UDP",
                                                Kind: "aliquid",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "cum",
                                                Port: "consectetur",
                                                Project: "in",
                                                Region: "exercitationem",
                                            },
                                        },
                                    },
                                    Kind: "earum",
                                    Rrdatas: []string{
                                        "numquam",
                                        "doloribus",
                                        "suscipit",
                                        "reiciendis",
                                    },
                                    SignatureRrdatas: []string{
                                        "saepe",
                                        "necessitatibus",
                                        "dolore",
                                    },
                                    Weight: 1210.59,
                                },
                            },
                            Kind: "asperiores",
                        },
                    },
                    Rrdatas: []string{
                        "non",
                    },
                    SignatureRrdatas: []string{
                        "beatae",
                    },
                    TTL: 489509,
                    Type: "a",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "consectetur",
                    Name: "corporis",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "UDP",
                                                Kind: "libero",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "accusamus",
                                                Port: "similique",
                                                Project: "tempora",
                                                Region: "aspernatur",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "TCP",
                                                Kind: "voluptas",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "nobis",
                                                Port: "dolorum",
                                                Project: "adipisci",
                                                Region: "minus",
                                            },
                                        },
                                    },
                                    Kind: "dolores",
                                    Location: "blanditiis",
                                    Rrdatas: []string{
                                        "dolore",
                                        "aliquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "temporibus",
                                        "ullam",
                                        "adipisci",
                                        "cum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quas",
                                                IPProtocol: "UDP",
                                                Kind: "nesciunt",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "corrupti",
                                                Port: "pariatur",
                                                Project: "totam",
                                                Region: "hic",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "UDP",
                                                Kind: "sit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sed",
                                                Port: "reiciendis",
                                                Project: "explicabo",
                                                Region: "asperiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facilis",
                                                IPProtocol: "TCP",
                                                Kind: "expedita",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "iste",
                                                Port: "dolore",
                                                Project: "laborum",
                                                Region: "sed",
                                            },
                                        },
                                    },
                                    Kind: "in",
                                    Location: "commodi",
                                    Rrdatas: []string{
                                        "explicabo",
                                        "voluptas",
                                        "unde",
                                    },
                                    SignatureRrdatas: []string{
                                        "suscipit",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "debitis",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "corrupti",
                                                Port: "maiores",
                                                Project: "incidunt",
                                                Region: "sed",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "provident",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "necessitatibus",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ea",
                                                Port: "occaecati",
                                                Project: "quos",
                                                Region: "voluptatibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tempora",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "voluptate",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ex",
                                                Port: "sit",
                                                Project: "non",
                                                Region: "officiis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "UDP",
                                                Kind: "quaerat",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ipsam",
                                                Port: "debitis",
                                                Project: "rem",
                                                Region: "sit",
                                            },
                                        },
                                    },
                                    Kind: "nobis",
                                    Location: "error",
                                    Rrdatas: []string{
                                        "minima",
                                        "recusandae",
                                    },
                                    SignatureRrdatas: []string{
                                        "nulla",
                                        "magni",
                                        "aperiam",
                                        "saepe",
                                    },
                                },
                            },
                            Kind: "numquam",
                        },
                        Kind: "veniam",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "beatae",
                                                    IPProtocol: "TCP",
                                                    Kind: "exercitationem",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "cum",
                                                    Port: "laboriosam",
                                                    Project: "dolorum",
                                                    Region: "voluptatum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "error",
                                                    IPProtocol: "UDP",
                                                    Kind: "expedita",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "neque",
                                                    Port: "dolorum",
                                                    Project: "nostrum",
                                                    Region: "officia",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolorum",
                                                    IPProtocol: "TCP",
                                                    Kind: "accusamus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "atque",
                                                    Port: "fugit",
                                                    Project: "ut",
                                                    Region: "fugiat",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptatem",
                                                    IPProtocol: "TCP",
                                                    Kind: "expedita",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "consequatur",
                                                    Port: "esse",
                                                    Project: "ipsam",
                                                    Region: "sit",
                                                },
                                            },
                                        },
                                        Kind: "voluptatum",
                                        Location: "quas",
                                        Rrdatas: []string{
                                            "corporis",
                                            "et",
                                            "blanditiis",
                                            "ex",
                                        },
                                        SignatureRrdatas: []string{
                                            "sit",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nostrum",
                                                    IPProtocol: "UDP",
                                                    Kind: "error",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "incidunt",
                                                    Port: "reiciendis",
                                                    Project: "dolorem",
                                                    Region: "harum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dicta",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "occaecati",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "quidem",
                                                    Port: "atque",
                                                    Project: "laborum",
                                                    Region: "nam",
                                                },
                                            },
                                        },
                                        Kind: "tenetur",
                                        Location: "laboriosam",
                                        Rrdatas: []string{
                                            "amet",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptate",
                                            "unde",
                                            "reiciendis",
                                        },
                                    },
                                },
                                Kind: "provident",
                            },
                            Kind: "repellendus",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptates",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "est",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "reprehenderit",
                                        Port: "facere",
                                        Project: "fuga",
                                        Region: "praesentium",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "mollitia",
                                        IPProtocol: "TCP",
                                        Kind: "voluptatem",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "repudiandae",
                                        Port: "quasi",
                                        Project: "atque",
                                        Region: "reprehenderit",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "asperiores",
                                        IPProtocol: "TCP",
                                        Kind: "suscipit",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "maxime",
                                        Port: "et",
                                        Project: "esse",
                                        Region: "amet",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "assumenda",
                                        IPProtocol: "TCP",
                                        Kind: "atque",
                                        LoadBalancerType: "REGIONAL_L4ILB",
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
                                                IPProtocol: "TCP",
                                                Kind: "at",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "blanditiis",
                                                Port: "suscipit",
                                                Project: "repudiandae",
                                                Region: "atque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "atque",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "recusandae",
                                                LoadBalancerType: "REGIONAL_L4ILB",
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
                    },
                    Rrdatas: []string{
                        "a",
                    },
                    SignatureRrdatas: []string{
                        "magnam",
                        "saepe",
                        "consequuntur",
                    },
                    TTL: 580107,
                    Type: "officiis",
                },
                shared.ResourceRecordSet{
                    Kind: "perspiciatis",
                    Name: "in",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "fugit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quis",
                                                Port: "reprehenderit",
                                                Project: "error",
                                                Region: "illo",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "corporis",
                                                IPProtocol: "UDP",
                                                Kind: "eveniet",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "vero",
                                                Port: "doloremque",
                                                Project: "iure",
                                                Region: "ipsa",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "totam",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "molestiae",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "qui",
                                                Port: "cum",
                                                Project: "iure",
                                                Region: "necessitatibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ratione",
                                                IPProtocol: "UDP",
                                                Kind: "distinctio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "rem",
                                                Port: "aliquam",
                                                Project: "ad",
                                                Region: "repellat",
                                            },
                                        },
                                    },
                                    Kind: "alias",
                                    Location: "corporis",
                                    Rrdatas: []string{
                                        "nihil",
                                        "mollitia",
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "maiores",
                                    },
                                },
                            },
                            Kind: "reiciendis",
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
                                                    IPAddress: "dolore",
                                                    IPProtocol: "UDP",
                                                    Kind: "nesciunt",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "recusandae",
                                                    Port: "omnis",
                                                    Project: "quaerat",
                                                    Region: "molestiae",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ex",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "culpa",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "debitis",
                                                    Port: "laudantium",
                                                    Project: "eum",
                                                    Region: "nemo",
                                                },
                                            },
                                        },
                                        Kind: "recusandae",
                                        Location: "esse",
                                        Rrdatas: []string{
                                            "quis",
                                            "eum",
                                            "reiciendis",
                                        },
                                        SignatureRrdatas: []string{
                                            "aspernatur",
                                            "ullam",
                                            "quasi",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nostrum",
                                                    IPProtocol: "TCP",
                                                    Kind: "provident",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "animi",
                                                    Port: "ex",
                                                    Project: "aliquid",
                                                    Region: "accusantium",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "repellat",
                                                    IPProtocol: "UDP",
                                                    Kind: "ullam",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "nam",
                                                    Port: "earum",
                                                    Project: "officia",
                                                    Region: "laborum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "placeat",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "voluptatibus",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "officiis",
                                                    Port: "sapiente",
                                                    Project: "cumque",
                                                    Region: "vitae",
                                                },
                                            },
                                        },
                                        Kind: "rerum",
                                        Location: "tempora",
                                        Rrdatas: []string{
                                            "inventore",
                                            "fugit",
                                        },
                                        SignatureRrdatas: []string{
                                            "quae",
                                            "perferendis",
                                            "velit",
                                            "aspernatur",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eius",
                                                    IPProtocol: "TCP",
                                                    Kind: "at",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "eos",
                                                    Port: "sapiente",
                                                    Project: "eum",
                                                    Region: "dicta",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minima",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "cupiditate",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "earum",
                                                    Port: "soluta",
                                                    Project: "hic",
                                                    Region: "illum",
                                                },
                                            },
                                        },
                                        Kind: "eaque",
                                        Location: "earum",
                                        Rrdatas: []string{
                                            "maiores",
                                            "debitis",
                                            "aliquid",
                                        },
                                        SignatureRrdatas: []string{
                                            "suscipit",
                                            "dolorem",
                                            "fugit",
                                            "cumque",
                                        },
                                    },
                                },
                                Kind: "fuga",
                            },
                            Kind: "ratione",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "necessitatibus",
                                        IPProtocol: "UDP",
                                        Kind: "consequatur",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "et",
                                        Port: "ducimus",
                                        Project: "natus",
                                        Region: "occaecati",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "suscipit",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "quasi",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "doloribus",
                                        Port: "nulla",
                                        Project: "necessitatibus",
                                        Region: "ipsa",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "tempora",
                                        IPProtocol: "TCP",
                                        Kind: "molestiae",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "iusto",
                                        Port: "esse",
                                        Project: "praesentium",
                                        Region: "maiores",
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
                                                IPAddress: "fugiat",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "dicta",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "tempora",
                                                Port: "esse",
                                                Project: "ex",
                                                Region: "consectetur",
                                            },
                                        },
                                    },
                                    Kind: "aliquid",
                                    Rrdatas: []string{
                                        "laborum",
                                    },
                                    SignatureRrdatas: []string{
                                        "nostrum",
                                    },
                                    Weight: 8567.56,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aliquid",
                                                IPProtocol: "TCP",
                                                Kind: "suscipit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "perferendis",
                                                Port: "eum",
                                                Project: "voluptas",
                                                Region: "iste",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "error",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptates",
                                                Port: "mollitia",
                                                Project: "laborum",
                                                Region: "libero",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ad",
                                                IPProtocol: "TCP",
                                                Kind: "enim",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "repellendus",
                                                Port: "ex",
                                                Project: "quo",
                                                Region: "ex",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Rrdatas: []string{
                                        "expedita",
                                        "voluptatem",
                                    },
                                    SignatureRrdatas: []string{
                                        "cum",
                                        "aliquid",
                                        "beatae",
                                    },
                                    Weight: 5308.6,
                                },
                            },
                            Kind: "omnis",
                        },
                    },
                    Rrdatas: []string{
                        "rerum",
                    },
                    SignatureRrdatas: []string{
                        "culpa",
                        "voluptatem",
                        "sapiente",
                    },
                    TTL: 889288,
                    Type: "architecto",
                },
                shared.ResourceRecordSet{
                    Kind: "fuga",
                    Name: "pariatur",
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
                                                Kind: "earum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "sapiente",
                                                Port: "rem",
                                                Project: "minus",
                                                Region: "nemo",
                                            },
                                        },
                                    },
                                    Kind: "asperiores",
                                    Location: "ratione",
                                    Rrdatas: []string{
                                        "perferendis",
                                        "illum",
                                    },
                                    SignatureRrdatas: []string{
                                        "impedit",
                                        "quibusdam",
                                        "nam",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "culpa",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "aliquam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "deleniti",
                                                Port: "veritatis",
                                                Project: "tempora",
                                                Region: "dolor",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "sit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "fugit",
                                                Port: "ab",
                                                Project: "laudantium",
                                                Region: "quae",
                                            },
                                        },
                                    },
                                    Kind: "dolor",
                                    Location: "fugiat",
                                    Rrdatas: []string{
                                        "consequuntur",
                                        "ipsa",
                                    },
                                    SignatureRrdatas: []string{
                                        "eveniet",
                                        "impedit",
                                        "officiis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "necessitatibus",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "veniam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "expedita",
                                                Port: "eum",
                                                Project: "vel",
                                                Region: "voluptatum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magnam",
                                                IPProtocol: "TCP",
                                                Kind: "ab",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "autem",
                                                Port: "nobis",
                                                Project: "laboriosam",
                                                Region: "recusandae",
                                            },
                                        },
                                    },
                                    Kind: "consequuntur",
                                    Location: "voluptatem",
                                    Rrdatas: []string{
                                        "necessitatibus",
                                        "quasi",
                                    },
                                    SignatureRrdatas: []string{
                                        "at",
                                        "vero",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "doloribus",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "optio",
                                                Port: "occaecati",
                                                Project: "nemo",
                                                Region: "voluptate",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "blanditiis",
                                                IPProtocol: "TCP",
                                                Kind: "voluptas",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "nemo",
                                                Port: "quos",
                                                Project: "eius",
                                                Region: "aspernatur",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ducimus",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "fuga",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "incidunt",
                                                Port: "quasi",
                                                Project: "rem",
                                                Region: "fugiat",
                                            },
                                        },
                                    },
                                    Kind: "dicta",
                                    Location: "nisi",
                                    Rrdatas: []string{
                                        "consectetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "cupiditate",
                                    },
                                },
                            },
                            Kind: "reiciendis",
                        },
                        Kind: "soluta",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eos",
                                                    IPProtocol: "TCP",
                                                    Kind: "iste",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "inventore",
                                                    Port: "fuga",
                                                    Project: "accusamus",
                                                    Region: "voluptatibus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "distinctio",
                                                    IPProtocol: "TCP",
                                                    Kind: "delectus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "praesentium",
                                                    Port: "maxime",
                                                    Project: "magnam",
                                                    Region: "temporibus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quos",
                                                    IPProtocol: "TCP",
                                                    Kind: "itaque",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "totam",
                                                    Port: "earum",
                                                    Project: "modi",
                                                    Region: "nam",
                                                },
                                            },
                                        },
                                        Kind: "vero",
                                        Location: "voluptatem",
                                        Rrdatas: []string{
                                            "vel",
                                            "alias",
                                        },
                                        SignatureRrdatas: []string{
                                            "non",
                                        },
                                    },
                                },
                                Kind: "maiores",
                            },
                            Kind: "enim",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "nulla",
                                        IPProtocol: "TCP",
                                        Kind: "esse",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "reprehenderit",
                                        Port: "est",
                                        Project: "quis",
                                        Region: "sint",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "accusamus",
                                        IPProtocol: "UDP",
                                        Kind: "hic",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "asperiores",
                                        Port: "ex",
                                        Project: "voluptas",
                                        Region: "debitis",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "delectus",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "minus",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "laborum",
                                        Port: "consectetur",
                                        Project: "velit",
                                        Region: "atque",
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
                                                IPAddress: "soluta",
                                                IPProtocol: "UDP",
                                                Kind: "nam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "iusto",
                                                Port: "voluptate",
                                                Project: "sequi",
                                                Region: "dignissimos",
                                            },
                                        },
                                    },
                                    Kind: "neque",
                                    Rrdatas: []string{
                                        "deleniti",
                                        "quibusdam",
                                        "iure",
                                        "odit",
                                    },
                                    SignatureRrdatas: []string{
                                        "vel",
                                        "magnam",
                                        "quibusdam",
                                        "inventore",
                                    },
                                    Weight: 8180.34,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "architecto",
                                                IPProtocol: "UDP",
                                                Kind: "quia",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aliquam",
                                                Port: "velit",
                                                Project: "illo",
                                                Region: "accusantium",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "TCP",
                                                Kind: "beatae",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "excepturi",
                                                Port: "eum",
                                                Project: "velit",
                                                Region: "ut",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perspiciatis",
                                                IPProtocol: "UDP",
                                                Kind: "dicta",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptatibus",
                                                Port: "iste",
                                                Project: "itaque",
                                                Region: "alias",
                                            },
                                        },
                                    },
                                    Kind: "nisi",
                                    Rrdatas: []string{
                                        "velit",
                                        "laborum",
                                        "non",
                                        "dolor",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                        "doloremque",
                                    },
                                    Weight: 74.68,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "TCP",
                                                Kind: "quidem",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "facilis",
                                                Port: "placeat",
                                                Project: "perspiciatis",
                                                Region: "expedita",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deleniti",
                                                IPProtocol: "UDP",
                                                Kind: "voluptate",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "unde",
                                                Port: "necessitatibus",
                                                Project: "animi",
                                                Region: "impedit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsam",
                                                IPProtocol: "TCP",
                                                Kind: "est",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "esse",
                                                Port: "labore",
                                                Project: "veritatis",
                                                Region: "vero",
                                            },
                                        },
                                    },
                                    Kind: "consectetur",
                                    Rrdatas: []string{
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "ad",
                                    },
                                    Weight: 1830.33,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ex",
                                                IPProtocol: "TCP",
                                                Kind: "soluta",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "rem",
                                                Port: "dolorum",
                                                Project: "odio",
                                                Region: "fugit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "alias",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "vel",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quae",
                                                Port: "modi",
                                                Project: "neque",
                                                Region: "exercitationem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ipsum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "nulla",
                                                Port: "distinctio",
                                                Project: "maxime",
                                                Region: "quia",
                                            },
                                        },
                                    },
                                    Kind: "quia",
                                    Rrdatas: []string{
                                        "omnis",
                                        "libero",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                    },
                                    Weight: 7278.88,
                                },
                            },
                            Kind: "fugiat",
                        },
                    },
                    Rrdatas: []string{
                        "quos",
                        "placeat",
                        "sit",
                    },
                    SignatureRrdatas: []string{
                        "ipsa",
                        "voluptates",
                    },
                    TTL: 80061,
                    Type: "aperiam",
                },
                shared.ResourceRecordSet{
                    Kind: "totam",
                    Name: "dolore",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "TCP",
                                                Kind: "esse",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "assumenda",
                                                Port: "beatae",
                                                Project: "est",
                                                Region: "facere",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "corrupti",
                                                IPProtocol: "TCP",
                                                Kind: "provident",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "necessitatibus",
                                                Port: "tempore",
                                                Project: "sint",
                                                Region: "ea",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "TCP",
                                                Kind: "rerum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "corporis",
                                                Port: "officiis",
                                                Project: "voluptatibus",
                                                Region: "cum",
                                            },
                                        },
                                    },
                                    Kind: "at",
                                    Location: "alias",
                                    Rrdatas: []string{
                                        "quidem",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "accusantium",
                                        "expedita",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "UDP",
                                                Kind: "odio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "odit",
                                                Port: "explicabo",
                                                Project: "corporis",
                                                Region: "error",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "earum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "recusandae",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ut",
                                                Port: "quidem",
                                                Project: "quis",
                                                Region: "beatae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "unde",
                                                IPProtocol: "TCP",
                                                Kind: "delectus",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "fugit",
                                                Port: "numquam",
                                                Project: "numquam",
                                                Region: "nesciunt",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "at",
                                                IPProtocol: "TCP",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "necessitatibus",
                                                Port: "corporis",
                                                Project: "qui",
                                                Region: "expedita",
                                            },
                                        },
                                    },
                                    Kind: "voluptatum",
                                    Location: "cupiditate",
                                    Rrdatas: []string{
                                        "placeat",
                                        "enim",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "corporis",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptates",
                                                Port: "maiores",
                                                Project: "tempore",
                                                Region: "aperiam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "labore",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "occaecati",
                                                Port: "voluptas",
                                                Project: "quo",
                                                Region: "velit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minus",
                                                IPProtocol: "UDP",
                                                Kind: "nostrum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "impedit",
                                                Port: "delectus",
                                                Project: "tempore",
                                                Region: "vero",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "UDP",
                                                Kind: "pariatur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "reprehenderit",
                                                Port: "aperiam",
                                                Project: "odio",
                                                Region: "minima",
                                            },
                                        },
                                    },
                                    Kind: "in",
                                    Location: "ducimus",
                                    Rrdatas: []string{
                                        "dolores",
                                        "error",
                                        "veritatis",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptate",
                                        "pariatur",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "similique",
                                                IPProtocol: "UDP",
                                                Kind: "ex",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "commodi",
                                                Port: "officiis",
                                                Project: "placeat",
                                                Region: "quidem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "TCP",
                                                Kind: "dolorem",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ipsa",
                                                Port: "sint",
                                                Project: "vero",
                                                Region: "sequi",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repudiandae",
                                                IPProtocol: "UDP",
                                                Kind: "dicta",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "veniam",
                                                Port: "animi",
                                                Project: "dolores",
                                                Region: "nam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dicta",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "necessitatibus",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ipsa",
                                                Port: "ducimus",
                                                Project: "maiores",
                                                Region: "veritatis",
                                            },
                                        },
                                    },
                                    Kind: "quasi",
                                    Location: "laboriosam",
                                    Rrdatas: []string{
                                        "libero",
                                        "excepturi",
                                        "occaecati",
                                        "nemo",
                                    },
                                    SignatureRrdatas: []string{
                                        "nostrum",
                                        "doloribus",
                                    },
                                },
                            },
                            Kind: "eligendi",
                        },
                        Kind: "sint",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "animi",
                                                    IPProtocol: "TCP",
                                                    Kind: "totam",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "odio",
                                                    Port: "eaque",
                                                    Project: "saepe",
                                                    Region: "architecto",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quos",
                                                    IPProtocol: "TCP",
                                                    Kind: "assumenda",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "libero",
                                                    Port: "velit",
                                                    Project: "doloremque",
                                                    Region: "delectus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "impedit",
                                                    IPProtocol: "UDP",
                                                    Kind: "ipsum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "saepe",
                                                    Port: "deserunt",
                                                    Project: "doloremque",
                                                    Region: "quis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "veniam",
                                                    IPProtocol: "UDP",
                                                    Kind: "architecto",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "molestiae",
                                                    Port: "eligendi",
                                                    Project: "possimus",
                                                    Region: "non",
                                                },
                                            },
                                        },
                                        Kind: "magnam",
                                        Location: "itaque",
                                        Rrdatas: []string{
                                            "asperiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "consequuntur",
                                            "facere",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "odit",
                                                    IPProtocol: "UDP",
                                                    Kind: "amet",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "ab",
                                                    Port: "velit",
                                                    Project: "facilis",
                                                    Region: "tempore",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nisi",
                                                    IPProtocol: "UDP",
                                                    Kind: "quaerat",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "distinctio",
                                                    Port: "nisi",
                                                    Project: "quis",
                                                    Region: "nisi",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "libero",
                                                    IPProtocol: "UDP",
                                                    Kind: "facere",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "ipsum",
                                                    Port: "ad",
                                                    Project: "voluptatibus",
                                                    Region: "voluptatibus",
                                                },
                                            },
                                        },
                                        Kind: "consequuntur",
                                        Location: "debitis",
                                        Rrdatas: []string{
                                            "rerum",
                                            "eos",
                                        },
                                        SignatureRrdatas: []string{
                                            "nostrum",
                                            "neque",
                                        },
                                    },
                                },
                                Kind: "iusto",
                            },
                            Kind: "est",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eligendi",
                                        IPProtocol: "UDP",
                                        Kind: "unde",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "ducimus",
                                        Port: "dolor",
                                        Project: "dicta",
                                        Region: "error",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "porro",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "dignissimos",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "fugiat",
                                        Port: "ad",
                                        Project: "aspernatur",
                                        Region: "enim",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "delectus",
                                        IPProtocol: "TCP",
                                        Kind: "dignissimos",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "illo",
                                        Port: "ab",
                                        Project: "incidunt",
                                        Region: "accusamus",
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
                                                IPAddress: "eos",
                                                IPProtocol: "UDP",
                                                Kind: "earum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "praesentium",
                                                Port: "nemo",
                                                Project: "repellat",
                                                Region: "quisquam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sequi",
                                                IPProtocol: "TCP",
                                                Kind: "deleniti",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "labore",
                                                Port: "assumenda",
                                                Project: "aliquam",
                                                Region: "quisquam",
                                            },
                                        },
                                    },
                                    Kind: "provident",
                                    Rrdatas: []string{
                                        "repudiandae",
                                        "consequatur",
                                        "maxime",
                                    },
                                    SignatureRrdatas: []string{
                                        "nam",
                                    },
                                    Weight: 7119.91,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "provident",
                                                IPProtocol: "UDP",
                                                Kind: "rerum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "corporis",
                                                Port: "vero",
                                                Project: "similique",
                                                Region: "repellendus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iure",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "commodi",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "commodi",
                                                Port: "aut",
                                                Project: "voluptatem",
                                                Region: "ad",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "illum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quidem",
                                                Port: "cum",
                                                Project: "amet",
                                                Region: "quasi",
                                            },
                                        },
                                    },
                                    Kind: "dicta",
                                    Rrdatas: []string{
                                        "doloremque",
                                        "earum",
                                        "iusto",
                                    },
                                    SignatureRrdatas: []string{
                                        "provident",
                                    },
                                    Weight: 6771.41,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "provident",
                                                IPProtocol: "UDP",
                                                Kind: "consequatur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "molestiae",
                                                Port: "itaque",
                                                Project: "facilis",
                                                Region: "corrupti",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "TCP",
                                                Kind: "accusamus",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "totam",
                                                Port: "dicta",
                                                Project: "voluptatem",
                                                Region: "velit",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolor",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "a",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "occaecati",
                                                Port: "atque",
                                                Project: "beatae",
                                                Region: "at",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "UDP",
                                                Kind: "esse",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "perferendis",
                                                Port: "rerum",
                                                Project: "ea",
                                                Region: "aperiam",
                                            },
                                        },
                                    },
                                    Kind: "dignissimos",
                                    Rrdatas: []string{
                                        "velit",
                                        "porro",
                                        "provident",
                                        "consectetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "dignissimos",
                                        "consectetur",
                                        "soluta",
                                        "natus",
                                    },
                                    Weight: 8398.07,
                                },
                            },
                            Kind: "officia",
                        },
                    },
                    Rrdatas: []string{
                        "tenetur",
                    },
                    SignatureRrdatas: []string{
                        "quo",
                    },
                    TTL: 931077,
                    Type: "illum",
                },
            },
            ID: "laborum",
            IsServing: false,
            Kind: "dignissimos",
            StartTime: "vero",
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
