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
            ManagedZone: "sed",
            Project: "quos",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolorem",
            Alt: "json",
            Callback: "ipsam",
            ClientOperationID: "facilis",
            Fields: "et",
            Key: "perspiciatis",
            OauthToken: "quam",
            PrettyPrint: false,
            QuotaUser: "necessitatibus",
            UploadType: "amet",
            UploadProtocol: "sed",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "quia",
                    Name: "amet",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "udp",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "laudantium",
                                                Port: "perspiciatis",
                                                Project: "dolorem",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Location: "sed",
                                    Rrdatas: []string{
                                        "porro",
                                        "aut",
                                        "velit",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                        "et",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "undefined",
                                                Kind: "quod",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "at",
                                                Port: "ut",
                                                Project: "numquam",
                                                Region: "dolores",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "natus",
                                                IPProtocol: "undefined",
                                                Kind: "incidunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "totam",
                                                Port: "non",
                                                Project: "perspiciatis",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugit",
                                                IPProtocol: "udp",
                                                Kind: "reprehenderit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eum",
                                                Port: "aliquid",
                                                Project: "id",
                                                Region: "beatae",
                                            },
                                        },
                                    },
                                    Kind: "eius",
                                    Location: "perspiciatis",
                                    Rrdatas: []string{
                                        "numquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sint",
                                                IPProtocol: "tcp",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "fugiat",
                                                Port: "minima",
                                                Project: "et",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "illum",
                                    Location: "ut",
                                    Rrdatas: []string{
                                        "magni",
                                        "omnis",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                    },
                                },
                            },
                            Kind: "non",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "illum",
                                                IPProtocol: "undefined",
                                                Kind: "neque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "vero",
                                                Port: "expedita",
                                                Project: "qui",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "undefined",
                                                Kind: "iste",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquam",
                                                Port: "quia",
                                                Project: "eius",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "alias",
                                                IPProtocol: "udp",
                                                Kind: "reprehenderit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "harum",
                                                Port: "ut",
                                                Project: "omnis",
                                                Region: "nobis",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Location: "neque",
                                    Rrdatas: []string{
                                        "magnam",
                                    },
                                    SignatureRrdatas: []string{
                                        "inventore",
                                        "et",
                                        "et",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nemo",
                                                IPProtocol: "undefined",
                                                Kind: "voluptate",
                                                LoadBalancerType: "none",
                                                NetworkURL: "provident",
                                                Port: "esse",
                                                Project: "voluptas",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "udp",
                                                Kind: "repellat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veritatis",
                                                Port: "consequatur",
                                                Project: "voluptatem",
                                                Region: "animi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "udp",
                                                Kind: "qui",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "deserunt",
                                                Port: "ipsum",
                                                Project: "dolores",
                                                Region: "earum",
                                            },
                                        },
                                    },
                                    Kind: "tempore",
                                    Location: "eos",
                                    Rrdatas: []string{
                                        "enim",
                                        "esse",
                                    },
                                    SignatureRrdatas: []string{
                                        "ab",
                                    },
                                },
                            },
                            Kind: "vitae",
                        },
                        Kind: "labore",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "maiores",
                                                    IPProtocol: "undefined",
                                                    Kind: "omnis",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "recusandae",
                                                    Port: "ut",
                                                    Project: "odit",
                                                    Region: "et",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ut",
                                                    IPProtocol: "tcp",
                                                    Kind: "quod",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "odit",
                                                    Port: "commodi",
                                                    Project: "natus",
                                                    Region: "minima",
                                                },
                                            },
                                        },
                                        Kind: "similique",
                                        Location: "sed",
                                        Rrdatas: []string{
                                            "suscipit",
                                            "consequatur",
                                        },
                                        SignatureRrdatas: []string{
                                            "est",
                                            "est",
                                            "a",
                                        },
                                    },
                                },
                                Kind: "porro",
                            },
                            Kind: "et",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "autem",
                                        IPProtocol: "tcp",
                                        Kind: "non",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "similique",
                                        Port: "perferendis",
                                        Project: "quaerat",
                                        Region: "ea",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quia",
                                        IPProtocol: "undefined",
                                        Kind: "et",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "delectus",
                                        Port: "eos",
                                        Project: "quos",
                                        Region: "placeat",
                                    },
                                },
                            },
                            TrickleTraffic: 80.199997,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "explicabo",
                                                IPProtocol: "udp",
                                                Kind: "voluptatum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rerum",
                                                Port: "ut",
                                                Project: "mollitia",
                                                Region: "porro",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quibusdam",
                                                IPProtocol: "undefined",
                                                Kind: "suscipit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "ad",
                                                Project: "et",
                                                Region: "laborum",
                                            },
                                        },
                                    },
                                    Kind: "asperiores",
                                    Rrdatas: []string{
                                        "et",
                                        "modi",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "sapiente",
                                    },
                                    Weight: 89.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "tcp",
                                                Kind: "enim",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatem",
                                                Port: "consequatur",
                                                Project: "officia",
                                                Region: "reiciendis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "undefined",
                                                Kind: "nihil",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "est",
                                                Project: "est",
                                                Region: "quibusdam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "suscipit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "molestias",
                                                Port: "sunt",
                                                Project: "sunt",
                                                Region: "rerum",
                                            },
                                        },
                                    },
                                    Kind: "quas",
                                    Rrdatas: []string{
                                        "quia",
                                        "placeat",
                                    },
                                    SignatureRrdatas: []string{
                                        "suscipit",
                                    },
                                    Weight: 64.199997,
                                },
                            },
                            Kind: "est",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloremque",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "est",
                                                Port: "aut",
                                                Project: "optio",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "repellat",
                                    Rrdatas: []string{
                                        "expedita",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                    },
                                    Weight: 18.200001,
                                },
                            },
                            Kind: "aut",
                        },
                    },
                    Rrdatas: []string{
                        "minus",
                        "consequatur",
                        "atque",
                    },
                    SignatureRrdatas: []string{
                        "libero",
                        "nam",
                    },
                    TTL: 8916899474753762121,
                    Type: "quia",
                },
                shared.ResourceRecordSet{
                    Kind: "eos",
                    Name: "eaque",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "tcp",
                                                Kind: "vel",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eius",
                                                Port: "aut",
                                                Project: "voluptate",
                                                Region: "ad",
                                            },
                                        },
                                    },
                                    Kind: "provident",
                                    Location: "accusamus",
                                    Rrdatas: []string{
                                        "dolores",
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "dolor",
                                        "corporis",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reprehenderit",
                                                IPProtocol: "undefined",
                                                Kind: "qui",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rerum",
                                                Port: "illum",
                                                Project: "aspernatur",
                                                Region: "nesciunt",
                                            },
                                        },
                                    },
                                    Kind: "cumque",
                                    Location: "vel",
                                    Rrdatas: []string{
                                        "corrupti",
                                        "sed",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "autem",
                                        "provident",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "tcp",
                                                Kind: "commodi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquam",
                                                Port: "qui",
                                                Project: "nam",
                                                Region: "in",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "udp",
                                                Kind: "debitis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptatem",
                                                Port: "iusto",
                                                Project: "ut",
                                                Region: "dolore",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Location: "debitis",
                                    Rrdatas: []string{
                                        "eaque",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsam",
                                        "in",
                                    },
                                },
                            },
                            Kind: "ab",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "undefined",
                                                Kind: "iure",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "quidem",
                                                Project: "est",
                                                Region: "laboriosam",
                                            },
                                        },
                                    },
                                    Kind: "velit",
                                    Location: "quod",
                                    Rrdatas: []string{
                                        "rerum",
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
                                                    IPProtocol: "udp",
                                                    Kind: "unde",
                                                    LoadBalancerType: "none",
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
                                                    IPProtocol: "udp",
                                                    Kind: "distinctio",
                                                    LoadBalancerType: "none",
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
                                                    IPProtocol: "tcp",
                                                    Kind: "modi",
                                                    LoadBalancerType: "none",
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
                                        IPProtocol: "udp",
                                        Kind: "consequatur",
                                        LoadBalancerType: "none",
                                        NetworkURL: "non",
                                        Port: "aut",
                                        Project: "quam",
                                        Region: "at",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "impedit",
                                        IPProtocol: "tcp",
                                        Kind: "veniam",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "molestiae",
                                        Port: "magnam",
                                        Project: "cum",
                                        Region: "molestiae",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "fuga",
                                        IPProtocol: "udp",
                                        Kind: "quia",
                                        LoadBalancerType: "none",
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
                                                IPProtocol: "udp",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "est",
                                                Port: "incidunt",
                                                Project: "temporibus",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "possimus",
                                                IPProtocol: "tcp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nostrum",
                                                Port: "quia",
                                                Project: "vel",
                                                Region: "ipsa",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "natus",
                                                IPProtocol: "tcp",
                                                Kind: "quo",
                                                LoadBalancerType: "regionalL4ilb",
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
                                                IPProtocol: "tcp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "none",
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
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "in",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sit",
                                                Port: "impedit",
                                                Project: "est",
                                                Region: "exercitationem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odio",
                                                IPProtocol: "undefined",
                                                Kind: "adipisci",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "error",
                                                Project: "id",
                                                Region: "minima",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perspiciatis",
                                                IPProtocol: "tcp",
                                                Kind: "dicta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "similique",
                                                Port: "et",
                                                Project: "rerum",
                                                Region: "sapiente",
                                            },
                                        },
                                    },
                                    Kind: "animi",
                                    Rrdatas: []string{
                                        "delectus",
                                    },
                                    SignatureRrdatas: []string{
                                        "vel",
                                        "delectus",
                                    },
                                    Weight: 28.100000,
                                },
                            },
                            Kind: "aut",
                        },
                    },
                    Rrdatas: []string{
                        "iste",
                        "vel",
                        "est",
                    },
                    SignatureRrdatas: []string{
                        "a",
                        "et",
                    },
                    TTL: 43531397075655241,
                    Type: "est",
                },
                shared.ResourceRecordSet{
                    Kind: "aut",
                    Name: "nesciunt",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "udp",
                                                Kind: "voluptates",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "rerum",
                                                Project: "nemo",
                                                Region: "reprehenderit",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "udp",
                                                Kind: "natus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eos",
                                                Port: "quae",
                                                Project: "ipsa",
                                                Region: "dignissimos",
                                            },
                                        },
                                    },
                                    Kind: "animi",
                                    Location: "eveniet",
                                    Rrdatas: []string{
                                        "iste",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "non",
                                        "qui",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ducimus",
                                                IPProtocol: "udp",
                                                Kind: "eos",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "alias",
                                                Project: "odit",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "tcp",
                                                Kind: "repellat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sunt",
                                                Port: "error",
                                                Project: "et",
                                                Region: "quia",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "culpa",
                                                IPProtocol: "udp",
                                                Kind: "qui",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "maxime",
                                                Port: "perspiciatis",
                                                Project: "qui",
                                                Region: "quia",
                                            },
                                        },
                                    },
                                    Kind: "eius",
                                    Location: "facere",
                                    Rrdatas: []string{
                                        "quisquam",
                                        "ab",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "qui",
                                    },
                                },
                            },
                            Kind: "quas",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "udp",
                                                Kind: "quis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "autem",
                                                Project: "non",
                                                Region: "rem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "undefined",
                                                Kind: "minus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "laboriosam",
                                                Port: "ut",
                                                Project: "esse",
                                                Region: "ad",
                                            },
                                        },
                                    },
                                    Kind: "architecto",
                                    Location: "consequatur",
                                    Rrdatas: []string{
                                        "debitis",
                                        "culpa",
                                    },
                                    SignatureRrdatas: []string{
                                        "vitae",
                                        "corrupti",
                                        "unde",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eaque",
                                                IPProtocol: "undefined",
                                                Kind: "ab",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aut",
                                                Port: "exercitationem",
                                                Project: "eum",
                                                Region: "quae",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "undefined",
                                                Kind: "ipsam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "magni",
                                                Port: "a",
                                                Project: "aut",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "illum",
                                    Location: "quia",
                                    Rrdatas: []string{
                                        "ad",
                                        "aliquam",
                                        "voluptates",
                                    },
                                    SignatureRrdatas: []string{
                                        "magni",
                                        "sit",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ex",
                                                IPProtocol: "udp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consectetur",
                                                Port: "sed",
                                                Project: "labore",
                                                Region: "inventore",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "undefined",
                                                Kind: "eum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eum",
                                                Port: "iure",
                                                Project: "ut",
                                                Region: "cumque",
                                            },
                                        },
                                    },
                                    Kind: "distinctio",
                                    Location: "expedita",
                                    Rrdatas: []string{
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "tenetur",
                                        "harum",
                                    },
                                },
                            },
                            Kind: "quia",
                        },
                        Kind: "esse",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "consequuntur",
                                                    IPProtocol: "undefined",
                                                    Kind: "et",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "fugiat",
                                                    Port: "adipisci",
                                                    Project: "quis",
                                                    Region: "expedita",
                                                },
                                            },
                                        },
                                        Kind: "ut",
                                        Location: "eum",
                                        Rrdatas: []string{
                                            "facilis",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolor",
                                            "ratione",
                                            "est",
                                        },
                                    },
                                },
                                Kind: "dolore",
                            },
                            Kind: "optio",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ut",
                                        IPProtocol: "tcp",
                                        Kind: "sed",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "et",
                                        Port: "ducimus",
                                        Project: "minus",
                                        Region: "optio",
                                    },
                                },
                            },
                            TrickleTraffic: 61.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "possimus",
                                                IPProtocol: "undefined",
                                                Kind: "eos",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "modi",
                                                Project: "voluptas",
                                                Region: "quam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "commodi",
                                                IPProtocol: "udp",
                                                Kind: "ratione",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "velit",
                                                Port: "voluptatum",
                                                Project: "enim",
                                                Region: "dignissimos",
                                            },
                                        },
                                    },
                                    Kind: "ipsa",
                                    Rrdatas: []string{
                                        "error",
                                        "expedita",
                                        "iste",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                        "aut",
                                        "minima",
                                    },
                                    Weight: 18.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aliquam",
                                                IPProtocol: "udp",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "excepturi",
                                                Port: "dolorum",
                                                Project: "reiciendis",
                                                Region: "repellendus",
                                            },
                                        },
                                    },
                                    Kind: "debitis",
                                    Rrdatas: []string{
                                        "illo",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquam",
                                        "quia",
                                    },
                                    Weight: 10.100000,
                                },
                            },
                            Kind: "inventore",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "cupiditate",
                                                Port: "ut",
                                                Project: "earum",
                                                Region: "totam",
                                            },
                                        },
                                    },
                                    Kind: "atque",
                                    Rrdatas: []string{
                                        "aut",
                                        "itaque",
                                        "praesentium",
                                    },
                                    SignatureRrdatas: []string{
                                        "corrupti",
                                        "pariatur",
                                        "ex",
                                    },
                                    Weight: 33.099998,
                                },
                            },
                            Kind: "natus",
                        },
                    },
                    Rrdatas: []string{
                        "quas",
                        "voluptas",
                        "corrupti",
                    },
                    SignatureRrdatas: []string{
                        "aut",
                        "ut",
                    },
                    TTL: 2154348361283113973,
                    Type: "eos",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "voluptatem",
                    Name: "illo",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "udp",
                                                Kind: "ad",
                                                LoadBalancerType: "none",
                                                NetworkURL: "est",
                                                Port: "enim",
                                                Project: "non",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "omnis",
                                    Location: "ut",
                                    Rrdatas: []string{
                                        "est",
                                        "dolor",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                    },
                                },
                            },
                            Kind: "voluptatem",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ratione",
                                                IPProtocol: "udp",
                                                Kind: "sunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "in",
                                                Port: "fuga",
                                                Project: "minus",
                                                Region: "sint",
                                            },
                                        },
                                    },
                                    Kind: "beatae",
                                    Location: "illo",
                                    Rrdatas: []string{
                                        "atque",
                                        "qui",
                                        "incidunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "totam",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "udp",
                                                Kind: "qui",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "accusamus",
                                                Port: "eveniet",
                                                Project: "architecto",
                                                Region: "harum",
                                            },
                                        },
                                    },
                                    Kind: "eum",
                                    Location: "omnis",
                                    Rrdatas: []string{
                                        "eum",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "unde",
                                        "id",
                                    },
                                },
                            },
                            Kind: "itaque",
                        },
                        Kind: "ut",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aliquam",
                                                    IPProtocol: "udp",
                                                    Kind: "in",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "mollitia",
                                                    Port: "incidunt",
                                                    Project: "et",
                                                    Region: "et",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nisi",
                                                    IPProtocol: "udp",
                                                    Kind: "repellat",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "velit",
                                                    Port: "reprehenderit",
                                                    Project: "sed",
                                                    Region: "facilis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "deleniti",
                                                    IPProtocol: "udp",
                                                    Kind: "reiciendis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "blanditiis",
                                                    Port: "nemo",
                                                    Project: "officiis",
                                                    Region: "sed",
                                                },
                                            },
                                        },
                                        Kind: "unde",
                                        Location: "est",
                                        Rrdatas: []string{
                                            "alias",
                                        },
                                        SignatureRrdatas: []string{
                                            "exercitationem",
                                            "iusto",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "incidunt",
                                                    IPProtocol: "udp",
                                                    Kind: "molestiae",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quae",
                                                    Port: "quia",
                                                    Project: "et",
                                                    Region: "architecto",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "provident",
                                                    IPProtocol: "udp",
                                                    Kind: "perferendis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quo",
                                                    Port: "consequuntur",
                                                    Project: "quia",
                                                    Region: "et",
                                                },
                                            },
                                        },
                                        Kind: "sequi",
                                        Location: "aut",
                                        Rrdatas: []string{
                                            "ipsum",
                                            "assumenda",
                                        },
                                        SignatureRrdatas: []string{
                                            "quidem",
                                            "aliquam",
                                            "quis",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sint",
                                                    IPProtocol: "udp",
                                                    Kind: "pariatur",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "excepturi",
                                                    Port: "quis",
                                                    Project: "illo",
                                                    Region: "magnam",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "perspiciatis",
                                                    IPProtocol: "undefined",
                                                    Kind: "ratione",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "tempora",
                                                    Port: "sit",
                                                    Project: "voluptas",
                                                    Region: "est",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "labore",
                                                    IPProtocol: "undefined",
                                                    Kind: "exercitationem",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "tempora",
                                                    Port: "animi",
                                                    Project: "cum",
                                                    Region: "voluptatibus",
                                                },
                                            },
                                        },
                                        Kind: "sed",
                                        Location: "ipsum",
                                        Rrdatas: []string{
                                            "iusto",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "qui",
                                            "quis",
                                            "adipisci",
                                        },
                                    },
                                },
                                Kind: "facere",
                            },
                            Kind: "perspiciatis",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ut",
                                        IPProtocol: "udp",
                                        Kind: "enim",
                                        LoadBalancerType: "none",
                                        NetworkURL: "non",
                                        Port: "optio",
                                        Project: "vel",
                                        Region: "quae",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ut",
                                        IPProtocol: "tcp",
                                        Kind: "consequatur",
                                        LoadBalancerType: "none",
                                        NetworkURL: "quibusdam",
                                        Port: "dolorem",
                                        Project: "eius",
                                        Region: "pariatur",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "consequuntur",
                                        IPProtocol: "udp",
                                        Kind: "necessitatibus",
                                        LoadBalancerType: "none",
                                        NetworkURL: "laborum",
                                        Port: "et",
                                        Project: "quia",
                                        Region: "magnam",
                                    },
                                },
                            },
                            TrickleTraffic: 45.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "suscipit",
                                                IPProtocol: "undefined",
                                                Kind: "officiis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugit",
                                                Port: "non",
                                                Project: "quia",
                                                Region: "facere",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolor",
                                                IPProtocol: "tcp",
                                                Kind: "culpa",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eum",
                                                Port: "non",
                                                Project: "aliquid",
                                                Region: "voluptatibus",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Rrdatas: []string{
                                        "est",
                                        "at",
                                        "enim",
                                    },
                                    SignatureRrdatas: []string{
                                        "est",
                                        "optio",
                                        "magnam",
                                    },
                                    Weight: 36.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "udp",
                                                Kind: "delectus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "magni",
                                                Port: "odit",
                                                Project: "excepturi",
                                                Region: "eaque",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Rrdatas: []string{
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "omnis",
                                        "nemo",
                                        "atque",
                                    },
                                    Weight: 95.199997,
                                },
                            },
                            Kind: "voluptas",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "udp",
                                                Kind: "animi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sed",
                                                Port: "sint",
                                                Project: "quae",
                                                Region: "eveniet",
                                            },
                                        },
                                    },
                                    Kind: "nesciunt",
                                    Rrdatas: []string{
                                        "animi",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolorum",
                                        "tempora",
                                        "doloribus",
                                    },
                                    Weight: 96.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "udp",
                                                Kind: "dolor",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "natus",
                                                Port: "quod",
                                                Project: "facere",
                                                Region: "dolor",
                                            },
                                        },
                                    },
                                    Kind: "eveniet",
                                    Rrdatas: []string{
                                        "libero",
                                        "eligendi",
                                        "corporis",
                                    },
                                    SignatureRrdatas: []string{
                                        "nihil",
                                    },
                                    Weight: 77.099998,
                                },
                            },
                            Kind: "illo",
                        },
                    },
                    Rrdatas: []string{
                        "inventore",
                        "porro",
                        "dolore",
                    },
                    SignatureRrdatas: []string{
                        "ipsam",
                        "excepturi",
                    },
                    TTL: 576269715854474411,
                    Type: "eaque",
                },
                shared.ResourceRecordSet{
                    Kind: "quas",
                    Name: "porro",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maiores",
                                                IPProtocol: "undefined",
                                                Kind: "ducimus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "totam",
                                                Port: "iusto",
                                                Project: "voluptas",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sit",
                                                IPProtocol: "tcp",
                                                Kind: "natus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sint",
                                                Port: "omnis",
                                                Project: "provident",
                                                Region: "non",
                                            },
                                        },
                                    },
                                    Kind: "eaque",
                                    Location: "veritatis",
                                    Rrdatas: []string{
                                        "odio",
                                        "porro",
                                        "optio",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptates",
                                        "et",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "tcp",
                                                Kind: "id",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsa",
                                                Port: "error",
                                                Project: "suscipit",
                                                Region: "minus",
                                            },
                                        },
                                    },
                                    Kind: "rerum",
                                    Location: "laudantium",
                                    Rrdatas: []string{
                                        "aspernatur",
                                        "sit",
                                        "placeat",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                        "temporibus",
                                        "fuga",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reiciendis",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatem",
                                                Port: "ullam",
                                                Project: "voluptas",
                                                Region: "adipisci",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "porro",
                                                LoadBalancerType: "none",
                                                NetworkURL: "laudantium",
                                                Port: "consequuntur",
                                                Project: "maiores",
                                                Region: "amet",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "undefined",
                                                Kind: "debitis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "maxime",
                                                Project: "vel",
                                                Region: "facere",
                                            },
                                        },
                                    },
                                    Kind: "nihil",
                                    Location: "aliquam",
                                    Rrdatas: []string{
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                    },
                                },
                            },
                            Kind: "placeat",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "udp",
                                                Kind: "quia",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "numquam",
                                                Port: "qui",
                                                Project: "magnam",
                                                Region: "voluptas",
                                            },
                                        },
                                    },
                                    Kind: "aspernatur",
                                    Location: "alias",
                                    Rrdatas: []string{
                                        "eveniet",
                                        "ab",
                                        "odio",
                                    },
                                    SignatureRrdatas: []string{
                                        "adipisci",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "undefined",
                                                Kind: "esse",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "hic",
                                                Port: "et",
                                                Project: "omnis",
                                                Region: "enim",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quisquam",
                                                IPProtocol: "udp",
                                                Kind: "amet",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "ut",
                                                Project: "ducimus",
                                                Region: "doloribus",
                                            },
                                        },
                                    },
                                    Kind: "sit",
                                    Location: "corrupti",
                                    Rrdatas: []string{
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "praesentium",
                                        "reiciendis",
                                        "consequatur",
                                    },
                                },
                            },
                            Kind: "repudiandae",
                        },
                        Kind: "ad",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eaque",
                                                    IPProtocol: "tcp",
                                                    Kind: "nam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "explicabo",
                                                    Port: "tempora",
                                                    Project: "non",
                                                    Region: "cumque",
                                                },
                                            },
                                        },
                                        Kind: "ad",
                                        Location: "quidem",
                                        Rrdatas: []string{
                                            "dolores",
                                            "repudiandae",
                                            "illo",
                                        },
                                        SignatureRrdatas: []string{
                                            "in",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "unde",
                                                    IPProtocol: "udp",
                                                    Kind: "debitis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "id",
                                                    Port: "occaecati",
                                                    Project: "enim",
                                                    Region: "perferendis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sed",
                                                    IPProtocol: "udp",
                                                    Kind: "ipsam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "mollitia",
                                                    Port: "omnis",
                                                    Project: "quaerat",
                                                    Region: "eligendi",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "doloremque",
                                                    IPProtocol: "undefined",
                                                    Kind: "doloribus",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "deserunt",
                                                    Port: "dicta",
                                                    Project: "ea",
                                                    Region: "aperiam",
                                                },
                                            },
                                        },
                                        Kind: "et",
                                        Location: "eveniet",
                                        Rrdatas: []string{
                                            "qui",
                                            "ex",
                                            "eos",
                                        },
                                        SignatureRrdatas: []string{
                                            "excepturi",
                                        },
                                    },
                                },
                                Kind: "non",
                            },
                            Kind: "tempora",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "occaecati",
                                        IPProtocol: "undefined",
                                        Kind: "qui",
                                        LoadBalancerType: "none",
                                        NetworkURL: "quo",
                                        Port: "est",
                                        Project: "molestiae",
                                        Region: "id",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quae",
                                        IPProtocol: "tcp",
                                        Kind: "saepe",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "temporibus",
                                        Port: "fugiat",
                                        Project: "perferendis",
                                        Region: "eius",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "praesentium",
                                        IPProtocol: "tcp",
                                        Kind: "omnis",
                                        LoadBalancerType: "none",
                                        NetworkURL: "magni",
                                        Port: "ratione",
                                        Project: "eveniet",
                                        Region: "maiores",
                                    },
                                },
                            },
                            TrickleTraffic: 89.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perferendis",
                                                IPProtocol: "undefined",
                                                Kind: "assumenda",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatem",
                                                Port: "sequi",
                                                Project: "aut",
                                                Region: "impedit",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "hic",
                                                IPProtocol: "tcp",
                                                Kind: "labore",
                                                LoadBalancerType: "none",
                                                NetworkURL: "magni",
                                                Port: "quo",
                                                Project: "iusto",
                                                Region: "incidunt",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "undefined",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "none",
                                                NetworkURL: "molestiae",
                                                Port: "enim",
                                                Project: "aut",
                                                Region: "quis",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "odit",
                                        "autem",
                                    },
                                    SignatureRrdatas: []string{
                                        "porro",
                                        "repellendus",
                                    },
                                    Weight: 46.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "deserunt",
                                                IPProtocol: "undefined",
                                                Kind: "fuga",
                                                LoadBalancerType: "none",
                                                NetworkURL: "iure",
                                                Port: "voluptas",
                                                Project: "nisi",
                                                Region: "quibusdam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "undefined",
                                                Kind: "ea",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "nobis",
                                                Project: "ex",
                                                Region: "animi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "udp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "qui",
                                                Project: "et",
                                                Region: "maiores",
                                            },
                                        },
                                    },
                                    Kind: "rerum",
                                    Rrdatas: []string{
                                        "laborum",
                                    },
                                    SignatureRrdatas: []string{
                                        "excepturi",
                                    },
                                    Weight: 71.099998,
                                },
                            },
                            Kind: "error",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "numquam",
                                                IPProtocol: "undefined",
                                                Kind: "numquam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nihil",
                                                Port: "sint",
                                                Project: "est",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "udp",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "none",
                                                NetworkURL: "autem",
                                                Port: "nisi",
                                                Project: "totam",
                                                Region: "error",
                                            },
                                        },
                                    },
                                    Kind: "harum",
                                    Rrdatas: []string{
                                        "et",
                                        "esse",
                                    },
                                    SignatureRrdatas: []string{
                                        "laborum",
                                        "dolorem",
                                    },
                                    Weight: 62.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "asperiores",
                                                IPProtocol: "udp",
                                                Kind: "ullam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "culpa",
                                                Port: "eveniet",
                                                Project: "quod",
                                                Region: "illum",
                                            },
                                        },
                                    },
                                    Kind: "consequuntur",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "tempora",
                                        "vitae",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                        "nam",
                                    },
                                    Weight: 2.200000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "undefined",
                                                Kind: "sapiente",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptas",
                                                Port: "minima",
                                                Project: "officia",
                                                Region: "in",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sequi",
                                                IPProtocol: "undefined",
                                                Kind: "ipsa",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "debitis",
                                                Project: "itaque",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "tcp",
                                                Kind: "cumque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sit",
                                                Port: "reiciendis",
                                                Project: "ipsa",
                                                Region: "reprehenderit",
                                            },
                                        },
                                    },
                                    Kind: "iusto",
                                    Rrdatas: []string{
                                        "et",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "velit",
                                        "culpa",
                                        "deleniti",
                                    },
                                    Weight: 63.099998,
                                },
                            },
                            Kind: "sint",
                        },
                    },
                    Rrdatas: []string{
                        "autem",
                        "velit",
                        "quo",
                    },
                    SignatureRrdatas: []string{
                        "praesentium",
                        "repudiandae",
                    },
                    TTL: 5593450973075923492,
                    Type: "eos",
                },
                shared.ResourceRecordSet{
                    Kind: "minima",
                    Name: "ea",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "tcp",
                                                Kind: "autem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ab",
                                                Port: "alias",
                                                Project: "omnis",
                                                Region: "at",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facere",
                                                IPProtocol: "udp",
                                                Kind: "dolorem",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fuga",
                                                Port: "reiciendis",
                                                Project: "corrupti",
                                                Region: "aperiam",
                                            },
                                        },
                                    },
                                    Kind: "atque",
                                    Location: "totam",
                                    Rrdatas: []string{
                                        "et",
                                        "adipisci",
                                    },
                                    SignatureRrdatas: []string{
                                        "eum",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "undefined",
                                                Kind: "ad",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "optio",
                                                Port: "recusandae",
                                                Project: "cupiditate",
                                                Region: "ab",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "undefined",
                                                Kind: "eum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "est",
                                                Port: "laboriosam",
                                                Project: "alias",
                                                Region: "sed",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "udp",
                                                Kind: "atque",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "nemo",
                                                Project: "illo",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Location: "et",
                                    Rrdatas: []string{
                                        "expedita",
                                        "autem",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sit",
                                                IPProtocol: "udp",
                                                Kind: "libero",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quis",
                                                Port: "sunt",
                                                Project: "illo",
                                                Region: "rem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "asperiores",
                                                IPProtocol: "udp",
                                                Kind: "nam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nisi",
                                                Port: "totam",
                                                Project: "laudantium",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aspernatur",
                                                IPProtocol: "tcp",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "neque",
                                                Project: "possimus",
                                                Region: "exercitationem",
                                            },
                                        },
                                    },
                                    Kind: "voluptatem",
                                    Location: "amet",
                                    Rrdatas: []string{
                                        "eos",
                                    },
                                    SignatureRrdatas: []string{
                                        "mollitia",
                                        "sed",
                                        "ut",
                                    },
                                },
                            },
                            Kind: "harum",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "tcp",
                                                Kind: "omnis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugiat",
                                                Port: "in",
                                                Project: "ducimus",
                                                Region: "sed",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "tcp",
                                                Kind: "occaecati",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquam",
                                                Port: "voluptas",
                                                Project: "vero",
                                                Region: "quidem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quidem",
                                                IPProtocol: "udp",
                                                Kind: "corrupti",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "quis",
                                                Project: "blanditiis",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "harum",
                                    Location: "ullam",
                                    Rrdatas: []string{
                                        "tenetur",
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "architecto",
                                        "hic",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "undefined",
                                                Kind: "voluptas",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quaerat",
                                                Port: "eligendi",
                                                Project: "aperiam",
                                                Region: "perspiciatis",
                                            },
                                        },
                                    },
                                    Kind: "nemo",
                                    Location: "tempore",
                                    Rrdatas: []string{
                                        "voluptates",
                                        "magnam",
                                    },
                                    SignatureRrdatas: []string{
                                        "velit",
                                    },
                                },
                            },
                            Kind: "nostrum",
                        },
                        Kind: "sed",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minus",
                                                    IPProtocol: "undefined",
                                                    Kind: "qui",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dolorem",
                                                    Port: "laudantium",
                                                    Project: "asperiores",
                                                    Region: "aut",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sit",
                                                    IPProtocol: "tcp",
                                                    Kind: "aut",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "est",
                                                    Port: "nisi",
                                                    Project: "qui",
                                                    Region: "eius",
                                                },
                                            },
                                        },
                                        Kind: "officia",
                                        Location: "similique",
                                        Rrdatas: []string{
                                            "blanditiis",
                                            "itaque",
                                            "velit",
                                        },
                                        SignatureRrdatas: []string{
                                            "mollitia",
                                            "omnis",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "error",
                                                    IPProtocol: "tcp",
                                                    Kind: "accusantium",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "blanditiis",
                                                    Port: "quia",
                                                    Project: "hic",
                                                    Region: "nulla",
                                                },
                                            },
                                        },
                                        Kind: "quis",
                                        Location: "laboriosam",
                                        Rrdatas: []string{
                                            "molestiae",
                                        },
                                        SignatureRrdatas: []string{
                                            "omnis",
                                            "repellat",
                                            "ut",
                                        },
                                    },
                                },
                                Kind: "sint",
                            },
                            Kind: "velit",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "deleniti",
                                        IPProtocol: "tcp",
                                        Kind: "asperiores",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "ipsum",
                                        Port: "optio",
                                        Project: "magni",
                                        Region: "iusto",
                                    },
                                },
                            },
                            TrickleTraffic: 74.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "udp",
                                                Kind: "quae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "labore",
                                                Port: "quo",
                                                Project: "harum",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "undefined",
                                                Kind: "dignissimos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dignissimos",
                                                Port: "omnis",
                                                Project: "quae",
                                                Region: "nisi",
                                            },
                                        },
                                    },
                                    Kind: "sapiente",
                                    Rrdatas: []string{
                                        "voluptatem",
                                        "tempora",
                                    },
                                    SignatureRrdatas: []string{
                                        "non",
                                        "sint",
                                        "illo",
                                    },
                                    Weight: 58.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reiciendis",
                                                IPProtocol: "tcp",
                                                Kind: "vel",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "fuga",
                                                Port: "sequi",
                                                Project: "facilis",
                                                Region: "voluptates",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cupiditate",
                                                IPProtocol: "tcp",
                                                Kind: "magni",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "non",
                                                Port: "repudiandae",
                                                Project: "similique",
                                                Region: "esse",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "undefined",
                                                Kind: "rem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "iure",
                                                Port: "sint",
                                                Project: "provident",
                                                Region: "voluptatum",
                                            },
                                        },
                                    },
                                    Kind: "natus",
                                    Rrdatas: []string{
                                        "dolore",
                                        "recusandae",
                                    },
                                    SignatureRrdatas: []string{
                                        "quasi",
                                        "esse",
                                    },
                                    Weight: 43.099998,
                                },
                            },
                            Kind: "et",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "udp",
                                                Kind: "eaque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "perferendis",
                                                Port: "aut",
                                                Project: "labore",
                                                Region: "qui",
                                            },
                                        },
                                    },
                                    Kind: "quidem",
                                    Rrdatas: []string{
                                        "ut",
                                        "quo",
                                        "consectetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloribus",
                                    },
                                    Weight: 16.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "udp",
                                                Kind: "sit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "molestiae",
                                                Port: "rerum",
                                                Project: "et",
                                                Region: "consequatur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "undefined",
                                                Kind: "assumenda",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quod",
                                                Port: "sequi",
                                                Project: "hic",
                                                Region: "quae",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorum",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "itaque",
                                                Port: "quidem",
                                                Project: "rem",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "nulla",
                                    Rrdatas: []string{
                                        "eum",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                    },
                                    Weight: 47.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reiciendis",
                                                IPProtocol: "udp",
                                                Kind: "voluptatum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "soluta",
                                                Port: "quo",
                                                Project: "autem",
                                                Region: "eos",
                                            },
                                        },
                                    },
                                    Kind: "voluptas",
                                    Rrdatas: []string{
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "impedit",
                                        "cupiditate",
                                    },
                                    Weight: 28.200001,
                                },
                            },
                            Kind: "sint",
                        },
                    },
                    Rrdatas: []string{
                        "ducimus",
                        "debitis",
                        "ex",
                    },
                    SignatureRrdatas: []string{
                        "ex",
                        "nulla",
                    },
                    TTL: 1150509169709415305,
                    Type: "repellendus",
                },
            },
            ID: "qui",
            IsServing: true,
            Kind: "assumenda",
            StartTime: "totam",
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
