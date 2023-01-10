# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Location: "nisi",
            ManagedZone: "aliquid",
            Project: "fugiat",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "dignissimos",
            Alt: "media",
            Callback: "sit",
            ClientOperationID: "iure",
            Fields: "possimus",
            Key: "aliquid",
            OauthToken: "velit",
            PrettyPrint: true,
            QuotaUser: "dolorum",
            UploadType: "sed",
            UploadProtocol: "aliquam",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "ex",
                    Name: "commodi",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "est",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptatem",
                                                Port: "omnis",
                                                Project: "provident",
                                                Region: "commodi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "similique",
                                                IPProtocol: "UDP",
                                                Kind: "fugiat",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "molestiae",
                                                Port: "quos",
                                                Project: "eum",
                                                Region: "id",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "harum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "saepe",
                                                Port: "quis",
                                                Project: "atque",
                                                Region: "iste",
                                            },
                                        },
                                    },
                                    Kind: "iste",
                                    Location: "qui",
                                    Rrdatas: []string{
                                        "ex",
                                        "ea",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                        "ut",
                                    },
                                },
                            },
                            Kind: "illum",
                        },
                        Kind: "labore",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolor",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "nihil",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "exercitationem",
                                                    Port: "deserunt",
                                                    Project: "nesciunt",
                                                    Region: "eos",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aspernatur",
                                                    IPProtocol: "UDP",
                                                    Kind: "ut",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "iste",
                                                    Port: "quod",
                                                    Project: "aliquid",
                                                    Region: "officiis",
                                                },
                                            },
                                        },
                                        Kind: "deleniti",
                                        Location: "esse",
                                        Rrdatas: []string{
                                            "adipisci",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolorem",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "at",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "dolor",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "reprehenderit",
                                                    Port: "non",
                                                    Project: "voluptatibus",
                                                    Region: "quis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aut",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "ea",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "qui",
                                                    Port: "aut",
                                                    Project: "rem",
                                                    Region: "voluptatem",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aliquid",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "aut",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "voluptatum",
                                                    Port: "sapiente",
                                                    Project: "aut",
                                                    Region: "totam",
                                                },
                                            },
                                        },
                                        Kind: "iusto",
                                        Location: "in",
                                        Rrdatas: []string{
                                            "cum",
                                            "sed",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatem",
                                        },
                                    },
                                },
                                Kind: "perspiciatis",
                            },
                            Kind: "natus",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "veniam",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "officia",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "ipsum",
                                        Port: "adipisci",
                                        Project: "maiores",
                                        Region: "molestiae",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "qui",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "id",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "architecto",
                                        Port: "similique",
                                        Project: "odio",
                                        Region: "adipisci",
                                    },
                                },
                            },
                            TrickleTraffic: 28.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloribus",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "nam",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "repudiandae",
                                                Port: "voluptatem",
                                                Project: "voluptas",
                                                Region: "expedita",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "odit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "et",
                                                Port: "laboriosam",
                                                Project: "similique",
                                                Region: "dolorem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UDP",
                                                Kind: "qui",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "accusantium",
                                                Port: "error",
                                                Project: "deserunt",
                                                Region: "recusandae",
                                            },
                                        },
                                    },
                                    Kind: "quisquam",
                                    Rrdatas: []string{
                                        "culpa",
                                        "quo",
                                    },
                                    SignatureRrdatas: []string{
                                        "alias",
                                    },
                                    Weight: 57.200001,
                                },
                            },
                            Kind: "veritatis",
                        },
                    },
                    Rrdatas: []string{
                        "sint",
                        "minus",
                    },
                    SignatureRrdatas: []string{
                        "minima",
                        "consequatur",
                    },
                    TTL: 623051119553136541,
                    Type: "voluptate",
                },
                shared.ResourceRecordSet{
                    Kind: "deserunt",
                    Name: "laudantium",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "TCP",
                                                Kind: "ea",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sint",
                                                Port: "culpa",
                                                Project: "magni",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eveniet",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "qui",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptas",
                                                Port: "ducimus",
                                                Project: "occaecati",
                                                Region: "quia",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "UDP",
                                                Kind: "libero",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "in",
                                                Port: "quis",
                                                Project: "voluptatem",
                                                Region: "aliquam",
                                            },
                                        },
                                    },
                                    Kind: "explicabo",
                                    Location: "quia",
                                    Rrdatas: []string{
                                        "totam",
                                        "blanditiis",
                                        "ducimus",
                                    },
                                    SignatureRrdatas: []string{
                                        "ad",
                                        "quia",
                                        "quaerat",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "maxime",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "et",
                                                Port: "ea",
                                                Project: "saepe",
                                                Region: "voluptates",
                                            },
                                        },
                                    },
                                    Kind: "amet",
                                    Location: "voluptas",
                                    Rrdatas: []string{
                                        "quo",
                                    },
                                    SignatureRrdatas: []string{
                                        "vel",
                                        "molestiae",
                                        "dolores",
                                    },
                                },
                            },
                            Kind: "dolor",
                        },
                        Kind: "repudiandae",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quidem",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "dignissimos",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "ea",
                                                    Port: "perferendis",
                                                    Project: "voluptas",
                                                    Region: "architecto",
                                                },
                                            },
                                        },
                                        Kind: "temporibus",
                                        Location: "recusandae",
                                        Rrdatas: []string{
                                            "aliquam",
                                            "illo",
                                        },
                                        SignatureRrdatas: []string{
                                            "et",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "a",
                                                    IPProtocol: "TCP",
                                                    Kind: "voluptas",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "libero",
                                                    Port: "qui",
                                                    Project: "optio",
                                                    Region: "et",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dicta",
                                                    IPProtocol: "TCP",
                                                    Kind: "quis",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "quo",
                                                    Port: "officiis",
                                                    Project: "ipsa",
                                                    Region: "non",
                                                },
                                            },
                                        },
                                        Kind: "sit",
                                        Location: "debitis",
                                        Rrdatas: []string{
                                            "est",
                                            "facilis",
                                            "est",
                                        },
                                        SignatureRrdatas: []string{
                                            "libero",
                                            "ut",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "incidunt",
                                                    IPProtocol: "UDP",
                                                    Kind: "autem",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "quae",
                                                    Port: "distinctio",
                                                    Project: "et",
                                                    Region: "omnis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolores",
                                                    IPProtocol: "TCP",
                                                    Kind: "labore",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "placeat",
                                                    Port: "aut",
                                                    Project: "minima",
                                                    Region: "et",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laborum",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "excepturi",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "recusandae",
                                                    Port: "itaque",
                                                    Project: "cumque",
                                                    Region: "sit",
                                                },
                                            },
                                        },
                                        Kind: "esse",
                                        Location: "ipsa",
                                        Rrdatas: []string{
                                            "voluptates",
                                            "labore",
                                        },
                                        SignatureRrdatas: []string{
                                            "qui",
                                            "dignissimos",
                                            "nesciunt",
                                        },
                                    },
                                },
                                Kind: "repudiandae",
                            },
                            Kind: "deserunt",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "sit",
                                        IPProtocol: "UDP",
                                        Kind: "libero",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "corporis",
                                        Port: "ipsum",
                                        Project: "illum",
                                        Region: "quia",
                                    },
                                },
                            },
                            TrickleTraffic: 8.200000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "incidunt",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "velit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sunt",
                                                Port: "nesciunt",
                                                Project: "ab",
                                                Region: "eius",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "TCP",
                                                Kind: "libero",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "dolorum",
                                                Port: "qui",
                                                Project: "dolorem",
                                                Region: "ea",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vitae",
                                                IPProtocol: "TCP",
                                                Kind: "dicta",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "dignissimos",
                                                Port: "et",
                                                Project: "perferendis",
                                                Region: "ducimus",
                                            },
                                        },
                                    },
                                    Kind: "quos",
                                    Rrdatas: []string{
                                        "deserunt",
                                        "at",
                                    },
                                    SignatureRrdatas: []string{
                                        "quaerat",
                                        "ut",
                                        "id",
                                    },
                                    Weight: 25.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsa",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "cumque",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "veniam",
                                                Port: "minima",
                                                Project: "suscipit",
                                                Region: "nam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "et",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "molestiae",
                                                Port: "quia",
                                                Project: "at",
                                                Region: "voluptatibus",
                                            },
                                        },
                                    },
                                    Kind: "repellendus",
                                    Rrdatas: []string{
                                        "inventore",
                                        "sit",
                                    },
                                    SignatureRrdatas: []string{
                                        "omnis",
                                    },
                                    Weight: 18.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "UDP",
                                                Kind: "molestiae",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quae",
                                                Port: "et",
                                                Project: "placeat",
                                                Region: "ducimus",
                                            },
                                        },
                                    },
                                    Kind: "error",
                                    Rrdatas: []string{
                                        "veniam",
                                        "tenetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "amet",
                                        "sed",
                                    },
                                    Weight: 38.200001,
                                },
                            },
                            Kind: "eaque",
                        },
                    },
                    Rrdatas: []string{
                        "officiis",
                        "tempora",
                    },
                    SignatureRrdatas: []string{
                        "sed",
                        "dolor",
                    },
                    TTL: 6633789735902599082,
                    Type: "assumenda",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "consequatur",
                    Name: "ipsa",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "TCP",
                                                Kind: "sit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "autem",
                                                Port: "blanditiis",
                                                Project: "fugiat",
                                                Region: "eligendi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "enim",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "occaecati",
                                                Port: "aut",
                                                Project: "sit",
                                                Region: "in",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "UDP",
                                                Kind: "ullam",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aperiam",
                                                Port: "accusamus",
                                                Project: "repellendus",
                                                Region: "natus",
                                            },
                                        },
                                    },
                                    Kind: "consectetur",
                                    Location: "unde",
                                    Rrdatas: []string{
                                        "tempora",
                                        "ut",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "qui",
                                    },
                                },
                            },
                            Kind: "quas",
                        },
                        Kind: "distinctio",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vitae",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "nesciunt",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "libero",
                                                    Port: "ratione",
                                                    Project: "placeat",
                                                    Region: "quam",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "odit",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "ipsum",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "pariatur",
                                                    Port: "dicta",
                                                    Project: "nulla",
                                                    Region: "tenetur",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "UDP",
                                                    Kind: "ut",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "consequuntur",
                                                    Port: "ducimus",
                                                    Project: "molestiae",
                                                    Region: "voluptas",
                                                },
                                            },
                                        },
                                        Kind: "facilis",
                                        Location: "nemo",
                                        Rrdatas: []string{
                                            "aspernatur",
                                            "quasi",
                                        },
                                        SignatureRrdatas: []string{
                                            "sunt",
                                            "officia",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "numquam",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "nobis",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "autem",
                                                    Port: "quod",
                                                    Project: "aperiam",
                                                    Region: "quo",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusantium",
                                                    IPProtocol: "TCP",
                                                    Kind: "odit",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "corrupti",
                                                    Port: "eius",
                                                    Project: "provident",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "alias",
                                        Location: "odio",
                                        Rrdatas: []string{
                                            "fugiat",
                                            "tempora",
                                            "aliquam",
                                        },
                                        SignatureRrdatas: []string{
                                            "iusto",
                                            "reiciendis",
                                        },
                                    },
                                },
                                Kind: "enim",
                            },
                            Kind: "laudantium",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "mollitia",
                                        IPProtocol: "TCP",
                                        Kind: "et",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "unde",
                                        Port: "molestiae",
                                        Project: "repellat",
                                        Region: "nihil",
                                    },
                                },
                            },
                            TrickleTraffic: 61.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "impedit",
                                                IPProtocol: "TCP",
                                                Kind: "velit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "odio",
                                                Port: "voluptas",
                                                Project: "eos",
                                                Region: "modi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "TCP",
                                                Kind: "ex",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "libero",
                                                Port: "occaecati",
                                                Project: "iusto",
                                                Region: "quis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "excepturi",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "et",
                                                Port: "qui",
                                                Project: "commodi",
                                                Region: "dolores",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Rrdatas: []string{
                                        "nesciunt",
                                        "magni",
                                    },
                                    SignatureRrdatas: []string{
                                        "distinctio",
                                        "minima",
                                        "ut",
                                    },
                                    Weight: 46.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "TCP",
                                                Kind: "mollitia",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "est",
                                                Port: "ut",
                                                Project: "ex",
                                                Region: "ad",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "assumenda",
                                                IPProtocol: "UDP",
                                                Kind: "consequatur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "cupiditate",
                                                Port: "velit",
                                                Project: "est",
                                                Region: "in",
                                            },
                                        },
                                    },
                                    Kind: "veritatis",
                                    Rrdatas: []string{
                                        "modi",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "cumque",
                                    },
                                    Weight: 67.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "temporibus",
                                                IPProtocol: "UDP",
                                                Kind: "dolorem",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "similique",
                                                Port: "et",
                                                Project: "ducimus",
                                                Region: "cupiditate",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "UDP",
                                                Kind: "at",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "culpa",
                                                Port: "libero",
                                                Project: "iste",
                                                Region: "corrupti",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "asperiores",
                                                IPProtocol: "TCP",
                                                Kind: "dolores",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "distinctio",
                                                Port: "deserunt",
                                                Project: "quos",
                                                Region: "sit",
                                            },
                                        },
                                    },
                                    Kind: "nemo",
                                    Rrdatas: []string{
                                        "animi",
                                    },
                                    SignatureRrdatas: []string{
                                        "ratione",
                                    },
                                    Weight: 18.200001,
                                },
                            },
                            Kind: "voluptas",
                        },
                    },
                    Rrdatas: []string{
                        "molestiae",
                        "provident",
                    },
                    SignatureRrdatas: []string{
                        "tempora",
                        "necessitatibus",
                        "minima",
                    },
                    TTL: 3992907992504066550,
                    Type: "a",
                },
                shared.ResourceRecordSet{
                    Kind: "quo",
                    Name: "porro",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "TCP",
                                                Kind: "suscipit",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "vero",
                                                Port: "aut",
                                                Project: "et",
                                                Region: "ea",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "dolorum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "molestiae",
                                                Port: "doloribus",
                                                Project: "et",
                                                Region: "nihil",
                                            },
                                        },
                                    },
                                    Kind: "quis",
                                    Location: "aspernatur",
                                    Rrdatas: []string{
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "minima",
                                        "quia",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "UDP",
                                                Kind: "aliquam",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "ipsa",
                                                Port: "quia",
                                                Project: "totam",
                                                Region: "esse",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "UDP",
                                                Kind: "adipisci",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "est",
                                                Port: "ipsum",
                                                Project: "odio",
                                                Region: "sunt",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Location: "ipsam",
                                    Rrdatas: []string{
                                        "ut",
                                        "eos",
                                    },
                                    SignatureRrdatas: []string{
                                        "nihil",
                                        "qui",
                                    },
                                },
                            },
                            Kind: "dignissimos",
                        },
                        Kind: "facere",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "totam",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "sit",
                                                    Port: "ea",
                                                    Project: "temporibus",
                                                    Region: "rerum",
                                                },
                                            },
                                        },
                                        Kind: "illum",
                                        Location: "ullam",
                                        Rrdatas: []string{
                                            "repellat",
                                        },
                                        SignatureRrdatas: []string{
                                            "atque",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "alias",
                                                    IPProtocol: "TCP",
                                                    Kind: "occaecati",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "est",
                                                    Port: "voluptatem",
                                                    Project: "voluptates",
                                                    Region: "possimus",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "porro",
                                                    IPProtocol: "TCP",
                                                    Kind: "doloribus",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "debitis",
                                                    Port: "et",
                                                    Project: "laboriosam",
                                                    Region: "officia",
                                                },
                                            },
                                        },
                                        Kind: "vero",
                                        Location: "aut",
                                        Rrdatas: []string{
                                            "ullam",
                                            "itaque",
                                        },
                                        SignatureRrdatas: []string{
                                            "sit",
                                            "harum",
                                        },
                                    },
                                },
                                Kind: "est",
                            },
                            Kind: "inventore",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quae",
                                        IPProtocol: "TCP",
                                        Kind: "illo",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "dolorem",
                                        Port: "sed",
                                        Project: "quas",
                                        Region: "nesciunt",
                                    },
                                },
                            },
                            TrickleTraffic: 66.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "UDP",
                                                Kind: "excepturi",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "aut",
                                                Port: "aperiam",
                                                Project: "adipisci",
                                                Region: "repellat",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptate",
                                                IPProtocol: "UDP",
                                                Kind: "ut",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "rerum",
                                                Port: "est",
                                                Project: "placeat",
                                                Region: "recusandae",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "TCP",
                                                Kind: "autem",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sunt",
                                                Port: "numquam",
                                                Project: "repudiandae",
                                                Region: "sed",
                                            },
                                        },
                                    },
                                    Kind: "non",
                                    Rrdatas: []string{
                                        "ea",
                                    },
                                    SignatureRrdatas: []string{
                                        "non",
                                        "corrupti",
                                    },
                                    Weight: 13.200000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "TCP",
                                                Kind: "odio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "omnis",
                                                Port: "enim",
                                                Project: "hic",
                                                Region: "earum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "velit",
                                                IPProtocol: "UDP",
                                                Kind: "necessitatibus",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "inventore",
                                                Port: "dolorem",
                                                Project: "qui",
                                                Region: "error",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "UDP",
                                                Kind: "corrupti",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "ipsum",
                                                Port: "ex",
                                                Project: "est",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "ut",
                                        "natus",
                                        "hic",
                                    },
                                    SignatureRrdatas: []string{
                                        "ratione",
                                        "harum",
                                    },
                                    Weight: 86.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorum",
                                                IPProtocol: "UDP",
                                                Kind: "quaerat",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "quasi",
                                                Port: "praesentium",
                                                Project: "in",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Rrdatas: []string{
                                        "excepturi",
                                        "cumque",
                                        "atque",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                        "odio",
                                    },
                                    Weight: 75.099998,
                                },
                            },
                            Kind: "similique",
                        },
                    },
                    Rrdatas: []string{
                        "et",
                        "repudiandae",
                        "nisi",
                    },
                    SignatureRrdatas: []string{
                        "beatae",
                        "quaerat",
                    },
                    TTL: 1973311620955587150,
                    Type: "eos",
                },
                shared.ResourceRecordSet{
                    Kind: "laudantium",
                    Name: "asperiores",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "earum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "laborum",
                                                Port: "vitae",
                                                Project: "beatae",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "accusamus",
                                    Location: "voluptatum",
                                    Rrdatas: []string{
                                        "sint",
                                        "consequatur",
                                        "ea",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                        "facere",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "iusto",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "aspernatur",
                                                Port: "sint",
                                                Project: "qui",
                                                Region: "quo",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "TCP",
                                                Kind: "veritatis",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "facere",
                                                Port: "porro",
                                                Project: "illum",
                                                Region: "dicta",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "TCP",
                                                Kind: "qui",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "fugiat",
                                                Port: "odit",
                                                Project: "et",
                                                Region: "culpa",
                                            },
                                        },
                                    },
                                    Kind: "quaerat",
                                    Location: "est",
                                    Rrdatas: []string{
                                        "debitis",
                                    },
                                    SignatureRrdatas: []string{
                                        "possimus",
                                    },
                                },
                            },
                            Kind: "sunt",
                        },
                        Kind: "laborum",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ea",
                                                    IPProtocol: "TCP",
                                                    Kind: "velit",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "non",
                                                    Port: "fugiat",
                                                    Project: "laborum",
                                                    Region: "animi",
                                                },
                                            },
                                        },
                                        Kind: "reprehenderit",
                                        Location: "voluptatem",
                                        Rrdatas: []string{
                                            "rerum",
                                            "quaerat",
                                            "nemo",
                                        },
                                        SignatureRrdatas: []string{
                                            "quas",
                                            "dolorum",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ipsa",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "unde",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "iure",
                                                    Port: "illo",
                                                    Project: "sunt",
                                                    Region: "sed",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "repellendus",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "vitae",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "non",
                                                    Port: "voluptatem",
                                                    Project: "accusantium",
                                                    Region: "dolorem",
                                                },
                                            },
                                        },
                                        Kind: "non",
                                        Location: "itaque",
                                        Rrdatas: []string{
                                            "temporibus",
                                        },
                                        SignatureRrdatas: []string{
                                            "saepe",
                                            "atque",
                                        },
                                    },
                                },
                                Kind: "et",
                            },
                            Kind: "minus",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptatem",
                                        IPProtocol: "TCP",
                                        Kind: "nihil",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "amet",
                                        Port: "suscipit",
                                        Project: "doloremque",
                                        Region: "alias",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quasi",
                                        IPProtocol: "TCP",
                                        Kind: "et",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "aperiam",
                                        Port: "magni",
                                        Project: "et",
                                        Region: "hic",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quidem",
                                        IPProtocol: "UDP",
                                        Kind: "dolor",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "non",
                                        Port: "ut",
                                        Project: "tenetur",
                                        Region: "ut",
                                    },
                                },
                            },
                            TrickleTraffic: 26.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "voluptatum",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "et",
                                                Port: "quisquam",
                                                Project: "id",
                                                Region: "consectetur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolore",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "minima",
                                                Port: "possimus",
                                                Project: "praesentium",
                                                Region: "nihil",
                                            },
                                        },
                                    },
                                    Kind: "iusto",
                                    Rrdatas: []string{
                                        "ea",
                                        "maxime",
                                        "voluptates",
                                    },
                                    SignatureRrdatas: []string{
                                        "est",
                                        "velit",
                                    },
                                    Weight: 98.199997,
                                },
                            },
                            Kind: "assumenda",
                        },
                    },
                    Rrdatas: []string{
                        "autem",
                    },
                    SignatureRrdatas: []string{
                        "enim",
                    },
                    TTL: 1425992158626304486,
                    Type: "architecto",
                },
            },
            ID: "quasi",
            IsServing: true,
            Kind: "ut",
            StartTime: "ut",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### changes

* `DNSChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `DNSChangesGet` - Fetches the representation of an existing Change.
* `DNSChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### dnsKeys

* `DNSDNSKeysGet` - Fetches the representation of an existing DnsKey.
* `DNSDNSKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### managedZoneOperations

* `DNSManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `DNSManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### managedZones

* `DNSManagedZonesCreate` - Creates a new ManagedZone.
* `DNSManagedZonesDelete` - Deletes a previously created ManagedZone.
* `DNSManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `DNSManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DNSManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `DNSManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `DNSManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DNSManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DNSManagedZonesUpdate` - Updates an existing ManagedZone.

### policies

* `DNSPoliciesCreate` - Creates a new Policy.
* `DNSPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `DNSPoliciesGet` - Fetches the representation of an existing Policy.
* `DNSPoliciesList` - Enumerates all Policies associated with a project.
* `DNSPoliciesPatch` - Applies a partial update to an existing Policy.
* `DNSPoliciesUpdate` - Updates an existing Policy.

### projects

* `DNSProjectsGet` - Fetches the representation of an existing Project.

### resourceRecordSets

* `DNSResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `DNSResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `DNSResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `DNSResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `DNSResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### responsePolicies

* `DNSResponsePoliciesCreate` - Creates a new Response Policy
* `DNSResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `DNSResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `DNSResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `DNSResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `DNSResponsePoliciesUpdate` - Updates an existing Response Policy.

### responsePolicyRules

* `DNSResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `DNSResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `DNSResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `DNSResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `DNSResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `DNSResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
