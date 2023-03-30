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
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "commodi",
                                                IPProtocol: "tcp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "error",
                                                Port: "quia",
                                                Project: "quis",
                                                Region: "vitae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laborum",
                                                IPProtocol: "tcp",
                                                Kind: "enim",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quo",
                                                Port: "sequi",
                                                Project: "tenetur",
                                                Region: "ipsam",
                                            },
                                        },
                                    },
                                    Kind: "id",
                                    Location: "possimus",
                                    Rrdatas: []string{
                                        "quasi",
                                    },
                                    SignatureRrdatas: []string{
                                        "temporibus",
                                        "laborum",
                                        "quasi",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatibus",
                                                IPProtocol: "udp",
                                                Kind: "nihil",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatibus",
                                                Port: "ipsa",
                                                Project: "omnis",
                                                Region: "voluptate",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "undefined",
                                                Kind: "doloremque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "maiores",
                                                Project: "dicta",
                                                Region: "corporis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolore",
                                                IPProtocol: "tcp",
                                                Kind: "dicta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "enim",
                                                Port: "accusamus",
                                                Project: "commodi",
                                                Region: "repudiandae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "undefined",
                                                Kind: "quidem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "excepturi",
                                                Port: "pariatur",
                                                Project: "modi",
                                                Region: "praesentium",
                                            },
                                        },
                                    },
                                    Kind: "rem",
                                    Location: "voluptates",
                                    Rrdatas: []string{
                                        "repudiandae",
                                    },
                                    SignatureRrdatas: []string{
                                        "veritatis",
                                        "itaque",
                                        "incidunt",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "udp",
                                                Kind: "quibusdam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "deserunt",
                                                Port: "distinctio",
                                                Project: "quibusdam",
                                                Region: "labore",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "undefined",
                                                Kind: "aliquid",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quos",
                                                Port: "perferendis",
                                                Project: "magni",
                                                Region: "assumenda",
                                            },
                                        },
                                    },
                                    Kind: "ipsam",
                                    Location: "alias",
                                    Rrdatas: []string{
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "tempora",
                                        "facilis",
                                        "tempore",
                                    },
                                },
                            },
                            Kind: "labore",
                        },
                        Kind: "delectus",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "eligendi",
                                                    IPProtocol: "tcp",
                                                    Kind: "aliquid",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "necessitatibus",
                                                    Port: "sint",
                                                    Project: "officia",
                                                    Region: "dolor",
                                                },
                                            },
                                        },
                                        Kind: "debitis",
                                        Location: "a",
                                        Rrdatas: []string{
                                            "in",
                                            "in",
                                            "illum",
                                        },
                                        SignatureRrdatas: []string{
                                            "rerum",
                                            "dicta",
                                            "magnam",
                                            "cumque",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "delectus",
                                                    IPProtocol: "udp",
                                                    Kind: "provident",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "id",
                                                    Port: "blanditiis",
                                                    Project: "deleniti",
                                                    Region: "sapiente",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "amet",
                                                    IPProtocol: "tcp",
                                                    Kind: "nisi",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "natus",
                                                    Port: "omnis",
                                                    Project: "molestiae",
                                                    Region: "perferendis",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nihil",
                                                    IPProtocol: "undefined",
                                                    Kind: "distinctio",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "labore",
                                                    Port: "labore",
                                                    Project: "suscipit",
                                                    Region: "natus",
                                                },
                                            },
                                        },
                                        Kind: "nobis",
                                        Location: "eum",
                                        Rrdatas: []string{
                                            "aspernatur",
                                            "architecto",
                                            "magnam",
                                            "et",
                                        },
                                        SignatureRrdatas: []string{
                                            "ullam",
                                            "provident",
                                            "quos",
                                        },
                                    },
                                },
                                Kind: "sint",
                            },
                            Kind: "accusantium",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "reiciendis",
                                        IPProtocol: "tcp",
                                        Kind: "ad",
                                        LoadBalancerType: "none",
                                        NetworkURL: "dolor",
                                        Port: "necessitatibus",
                                        Project: "odit",
                                        Region: "nemo",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quasi",
                                        IPProtocol: "tcp",
                                        Kind: "doloribus",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "eius",
                                        Port: "maxime",
                                        Project: "deleniti",
                                        Region: "facilis",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "in",
                                        IPProtocol: "undefined",
                                        Kind: "architecto",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "ullam",
                                        Port: "expedita",
                                        Project: "nihil",
                                        Region: "repellat",
                                    },
                                },
                            },
                            TrickleTraffic: 8411.4,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ab",
                                                IPProtocol: "udp",
                                                Kind: "quidem",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptate",
                                                Port: "autem",
                                                Project: "nam",
                                                Region: "eaque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "tcp",
                                                Kind: "voluptatibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugiat",
                                                Port: "amet",
                                                Project: "aut",
                                                Region: "cumque",
                                            },
                                        },
                                    },
                                    Kind: "corporis",
                                    Rrdatas: []string{
                                        "libero",
                                        "nobis",
                                        "dolores",
                                        "quis",
                                    },
                                    SignatureRrdatas: []string{
                                        "dignissimos",
                                        "eaque",
                                        "quis",
                                    },
                                    Weight: 1999.96,
                                },
                            },
                            Kind: "eos",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                    },
                    Rrdatas: []string{
                        "earum",
                        "modi",
                        "iste",
                        "dolorum",
                    },
                    SignatureRrdatas: []string{
                        "pariatur",
                        "provident",
                        "nobis",
                    },
                    TTL: 730122,
                    Type: "delectus",
                },
                shared.ResourceRecordSet{
                    Kind: "quaerat",
                    Name: "quos",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorem",
                                                IPProtocol: "undefined",
                                                Kind: "qui",
                                                LoadBalancerType: "none",
                                                NetworkURL: "hic",
                                                Port: "excepturi",
                                                Project: "cum",
                                                Region: "voluptate",
                                            },
                                        },
                                    },
                                    Kind: "dignissimos",
                                    Location: "reiciendis",
                                    Rrdatas: []string{
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "veritatis",
                                        "ipsa",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iure",
                                                IPProtocol: "tcp",
                                                Kind: "quaerat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quidem",
                                                Port: "voluptatibus",
                                                Project: "voluptas",
                                                Region: "natus",
                                            },
                                        },
                                    },
                                    Kind: "eos",
                                    Location: "atque",
                                    Rrdatas: []string{
                                        "fugiat",
                                    },
                                    SignatureRrdatas: []string{
                                        "soluta",
                                    },
                                },
                            },
                            Kind: "dolorum",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorum",
                                                IPProtocol: "tcp",
                                                Kind: "omnis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "distinctio",
                                                Port: "asperiores",
                                                Project: "nihil",
                                                Region: "ipsum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptate",
                                                IPProtocol: "tcp",
                                                Kind: "saepe",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aspernatur",
                                                Port: "perferendis",
                                                Project: "amet",
                                                Region: "optio",
                                            },
                                        },
                                    },
                                    Kind: "accusamus",
                                    Location: "ad",
                                    Rrdatas: []string{
                                        "suscipit",
                                        "deserunt",
                                        "provident",
                                        "minima",
                                    },
                                    SignatureRrdatas: []string{
                                        "totam",
                                        "similique",
                                        "alias",
                                        "at",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tempora",
                                                IPProtocol: "tcp",
                                                Kind: "quod",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "dolorum",
                                                Project: "a",
                                                Region: "esse",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "tcp",
                                                Kind: "ipsum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "tenetur",
                                                Port: "amet",
                                                Project: "tempore",
                                                Region: "accusamus",
                                            },
                                        },
                                    },
                                    Kind: "numquam",
                                    Location: "enim",
                                    Rrdatas: []string{
                                        "sapiente",
                                    },
                                    SignatureRrdatas: []string{
                                        "nihil",
                                        "sit",
                                        "expedita",
                                    },
                                },
                            },
                            Kind: "neque",
                        },
                        Kind: "sed",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "tcp",
                                                    Kind: "quam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "incidunt",
                                                    Port: "qui",
                                                    Project: "cupiditate",
                                                    Region: "maxime",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "pariatur",
                                                    IPProtocol: "udp",
                                                    Kind: "dicta",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "totam",
                                                    Port: "incidunt",
                                                    Project: "aspernatur",
                                                    Region: "dolores",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "distinctio",
                                                    IPProtocol: "udp",
                                                    Kind: "aliquid",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "molestias",
                                                    Port: "temporibus",
                                                    Project: "qui",
                                                    Region: "neque",
                                                },
                                            },
                                        },
                                        Kind: "fugit",
                                        Location: "magni",
                                        Rrdatas: []string{
                                            "sunt",
                                            "ullam",
                                        },
                                        SignatureRrdatas: []string{
                                            "hic",
                                            "voluptatem",
                                            "cumque",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nobis",
                                                    IPProtocol: "undefined",
                                                    Kind: "saepe",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "veritatis",
                                                    Port: "nobis",
                                                    Project: "quos",
                                                    Region: "tempore",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cupiditate",
                                                    IPProtocol: "undefined",
                                                    Kind: "delectus",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dolore",
                                                    Port: "labore",
                                                    Project: "adipisci",
                                                    Region: "dolorum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "architecto",
                                                    IPProtocol: "undefined",
                                                    Kind: "aut",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "itaque",
                                                    Port: "consequatur",
                                                    Project: "est",
                                                    Region: "repellendus",
                                                },
                                            },
                                        },
                                        Kind: "porro",
                                        Location: "doloribus",
                                        Rrdatas: []string{
                                            "facilis",
                                            "cupiditate",
                                        },
                                        SignatureRrdatas: []string{
                                            "quae",
                                        },
                                    },
                                },
                                Kind: "laudantium",
                            },
                            Kind: "odio",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptatibus",
                                        IPProtocol: "udp",
                                        Kind: "vero",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "quis",
                                        Port: "ipsum",
                                        Project: "delectus",
                                        Region: "voluptate",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "consectetur",
                                        IPProtocol: "udp",
                                        Kind: "tenetur",
                                        LoadBalancerType: "none",
                                        NetworkURL: "hic",
                                        Port: "distinctio",
                                        Project: "quod",
                                        Region: "odio",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "similique",
                                        IPProtocol: "udp",
                                        Kind: "vero",
                                        LoadBalancerType: "none",
                                        NetworkURL: "dolore",
                                        Port: "quibusdam",
                                        Project: "illum",
                                        Region: "sequi",
                                    },
                                },
                            },
                            TrickleTraffic: 6178.77,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatibus",
                                                IPProtocol: "tcp",
                                                Kind: "nulla",
                                                LoadBalancerType: "none",
                                                NetworkURL: "porro",
                                                Port: "maiores",
                                                Project: "doloribus",
                                                Region: "iusto",
                                            },
                                        },
                                    },
                                    Kind: "eligendi",
                                    Rrdatas: []string{
                                        "alias",
                                        "officia",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsam",
                                        "ea",
                                    },
                                    Weight: 1369,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "possimus",
                                                IPProtocol: "undefined",
                                                Kind: "ratione",
                                                LoadBalancerType: "none",
                                                NetworkURL: "laudantium",
                                                Port: "dicta",
                                                Project: "dolor",
                                                Region: "maiores",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quasi",
                                                IPProtocol: "tcp",
                                                Kind: "nulla",
                                                LoadBalancerType: "regionalL4ilb",
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
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "undefined",
                                                Kind: "recusandae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "minima",
                                                Port: "eaque",
                                                Project: "a",
                                                Region: "libero",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "undefined",
                                                Kind: "deleniti",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquam",
                                                Port: "fugit",
                                                Project: "accusamus",
                                                Region: "inventore",
                                            },
                                        },
                                    },
                                    Kind: "non",
                                    Rrdatas: []string{
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "placeat",
                                        "velit",
                                        "eum",
                                    },
                                    Weight: 4205.39,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quas",
                                                IPProtocol: "udp",
                                                Kind: "nulla",
                                                LoadBalancerType: "none",
                                                NetworkURL: "libero",
                                                Port: "quasi",
                                                Project: "tempora",
                                                Region: "numquam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "explicabo",
                                                IPProtocol: "tcp",
                                                Kind: "ipsa",
                                                LoadBalancerType: "none",
                                                NetworkURL: "magnam",
                                                Port: "odio",
                                                Project: "eius",
                                                Region: "esse",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "tcp",
                                                Kind: "fuga",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quidem",
                                                Port: "fugiat",
                                                Project: "ut",
                                                Region: "eum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "suscipit",
                                                IPProtocol: "udp",
                                                Kind: "eos",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quisquam",
                                                Port: "veritatis",
                                                Project: "ipsa",
                                                Region: "id",
                                            },
                                        },
                                    },
                                    Kind: "quidem",
                                    Rrdatas: []string{
                                        "quo",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "fuga",
                                        "eius",
                                        "eos",
                                    },
                                    Weight: 3738.13,
                                },
                            },
                            Kind: "ab",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
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
                                    Rrdatas: []string{
                                        "quod",
                                        "dignissimos",
                                        "inventore",
                                    },
                                    SignatureRrdatas: []string{
                                        "totam",
                                        "accusamus",
                                    },
                                    Weight: 3068.1,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "tcp",
                                                Kind: "sapiente",
                                                LoadBalancerType: "none",
                                                NetworkURL: "deserunt",
                                                Port: "molestiae",
                                                Project: "accusantium",
                                                Region: "porro",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "tcp",
                                                Kind: "praesentium",
                                                LoadBalancerType: "none",
                                                NetworkURL: "deleniti",
                                                Port: "fugit",
                                                Project: "fuga",
                                                Region: "mollitia",
                                            },
                                        },
                                    },
                                    Kind: "incidunt",
                                    Rrdatas: []string{
                                        "explicabo",
                                        "minima",
                                        "nisi",
                                    },
                                    SignatureRrdatas: []string{
                                        "sapiente",
                                    },
                                    Weight: 1598.7,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "explicabo",
                                                IPProtocol: "udp",
                                                Kind: "occaecati",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "esse",
                                                Project: "eveniet",
                                                Region: "accusamus",
                                            },
                                        },
                                    },
                                    Kind: "veritatis",
                                    Rrdatas: []string{
                                        "quod",
                                        "nam",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquid",
                                        "quasi",
                                        "saepe",
                                        "vel",
                                    },
                                    Weight: 6900.25,
                                },
                            },
                            Kind: "molestiae",
                        },
                    },
                    Rrdatas: []string{
                        "occaecati",
                        "minima",
                        "distinctio",
                    },
                    SignatureRrdatas: []string{
                        "sit",
                        "culpa",
                        "tempore",
                        "adipisci",
                    },
                    TTL: 766964,
                    Type: "consequuntur",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "minus",
                    Name: "quaerat",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "tcp",
                                                Kind: "provident",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nulla",
                                                Port: "quas",
                                                Project: "esse",
                                                Region: "quasi",
                                            },
                                        },
                                    },
                                    Kind: "a",
                                    Location: "error",
                                    Rrdatas: []string{
                                        "pariatur",
                                        "possimus",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "asperiores",
                                        "facere",
                                        "veritatis",
                                        "consequuntur",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "similique",
                                                IPProtocol: "tcp",
                                                Kind: "aliquid",
                                                LoadBalancerType: "regionalL4ilb",
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
                                                IPProtocol: "tcp",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "quibusdam",
                                                Project: "ex",
                                                Region: "deleniti",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "udp",
                                                Kind: "architecto",
                                                LoadBalancerType: "regionalL4ilb",
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
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "accusantium",
                                                IPProtocol: "tcp",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eum",
                                                Port: "mollitia",
                                                Project: "ab",
                                                Region: "corrupti",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "non",
                                                IPProtocol: "undefined",
                                                Kind: "dolor",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "numquam",
                                                Port: "impedit",
                                                Project: "explicabo",
                                                Region: "voluptas",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "tcp",
                                                Kind: "dicta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "natus",
                                                Port: "velit",
                                                Project: "voluptatibus",
                                                Region: "voluptas",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "asperiores",
                                                IPProtocol: "undefined",
                                                Kind: "ea",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consequuntur",
                                                Port: "repellendus",
                                                Project: "officia",
                                                Region: "maxime",
                                            },
                                        },
                                    },
                                    Kind: "dignissimos",
                                    Location: "officia",
                                    Rrdatas: []string{
                                        "nemo",
                                        "quae",
                                        "quaerat",
                                        "porro",
                                    },
                                    SignatureRrdatas: []string{
                                        "labore",
                                        "ab",
                                        "adipisci",
                                        "fuga",
                                    },
                                },
                            },
                            Kind: "id",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "culpa",
                                                IPProtocol: "tcp",
                                                Kind: "recusandae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "fugiat",
                                                Port: "vel",
                                                Project: "ducimus",
                                                Region: "quos",
                                            },
                                        },
                                    },
                                    Kind: "vel",
                                    Location: "labore",
                                    Rrdatas: []string{
                                        "facilis",
                                        "cum",
                                        "commodi",
                                        "in",
                                    },
                                    SignatureRrdatas: []string{
                                        "reiciendis",
                                        "assumenda",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "tcp",
                                                Kind: "aperiam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "consectetur",
                                                Port: "in",
                                                Project: "exercitationem",
                                                Region: "earum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facere",
                                                IPProtocol: "undefined",
                                                Kind: "doloribus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "reiciendis",
                                                Port: "quidem",
                                                Project: "saepe",
                                                Region: "necessitatibus",
                                            },
                                        },
                                    },
                                    Kind: "dolore",
                                    Location: "sunt",
                                    Rrdatas: []string{
                                        "adipisci",
                                        "non",
                                        "amet",
                                        "beatae",
                                    },
                                    SignatureRrdatas: []string{
                                        "a",
                                        "debitis",
                                    },
                                },
                            },
                            Kind: "consectetur",
                        },
                        Kind: "corporis",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ipsa",
                                                    IPProtocol: "udp",
                                                    Kind: "libero",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "accusamus",
                                                    Port: "similique",
                                                    Project: "tempora",
                                                    Region: "aspernatur",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "tcp",
                                                    Kind: "voluptas",
                                                    LoadBalancerType: "none",
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
                                                    IPProtocol: "udp",
                                                    Kind: "nesciunt",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "corrupti",
                                                    Port: "pariatur",
                                                    Project: "totam",
                                                    Region: "hic",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "exercitationem",
                                                    IPProtocol: "udp",
                                                    Kind: "sit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "sed",
                                                    Port: "reiciendis",
                                                    Project: "explicabo",
                                                    Region: "asperiores",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "facilis",
                                                    IPProtocol: "tcp",
                                                    Kind: "expedita",
                                                    LoadBalancerType: "none",
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
                                                    IPProtocol: "undefined",
                                                    Kind: "reiciendis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "corrupti",
                                                    Port: "maiores",
                                                    Project: "incidunt",
                                                    Region: "sed",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "provident",
                                                    IPProtocol: "undefined",
                                                    Kind: "necessitatibus",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "ea",
                                                    Port: "occaecati",
                                                    Project: "quos",
                                                    Region: "voluptatibus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "tempora",
                                                    IPProtocol: "undefined",
                                                    Kind: "voluptate",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "ex",
                                                    Port: "sit",
                                                    Project: "non",
                                                    Region: "officiis",
                                                },
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
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "officiis",
                                        IPProtocol: "undefined",
                                        Kind: "laudantium",
                                        LoadBalancerType: "none",
                                        NetworkURL: "praesentium",
                                        Port: "cum",
                                        Project: "laboriosam",
                                        Region: "dolorum",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "voluptatum",
                                        IPProtocol: "tcp",
                                        Kind: "hic",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "debitis",
                                        Port: "neque",
                                        Project: "dolorum",
                                        Region: "nostrum",
                                    },
                                },
                            },
                            TrickleTraffic: 6390.28,
                        },
                        Wrr: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "accusamus",
                                                IPProtocol: "undefined",
                                                Kind: "atque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "fugiat",
                                                Project: "voluptatem",
                                                Region: "culpa",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "expedita",
                                                IPProtocol: "undefined",
                                                Kind: "consequatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsam",
                                                Port: "sit",
                                                Project: "voluptatum",
                                                Region: "quas",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repudiandae",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ex",
                                                Port: "sed",
                                                Project: "sit",
                                                Region: "vel",
                                            },
                                        },
                                    },
                                    Kind: "nostrum",
                                    Rrdatas: []string{
                                        "error",
                                        "consequatur",
                                        "incidunt",
                                        "reiciendis",
                                    },
                                    SignatureRrdatas: []string{
                                        "harum",
                                    },
                                    Weight: 1157.03,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "undefined",
                                                Kind: "quidem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "laborum",
                                                Port: "nam",
                                                Project: "tenetur",
                                                Region: "laboriosam",
                                            },
                                        },
                                    },
                                    Kind: "alias",
                                    Rrdatas: []string{
                                        "deserunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "unde",
                                        "reiciendis",
                                    },
                                    Weight: 5887.4,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "delectus",
                                                IPProtocol: "udp",
                                                Kind: "perferendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quidem",
                                                Port: "reprehenderit",
                                                Project: "facere",
                                                Region: "fuga",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "tcp",
                                                Kind: "veniam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quisquam",
                                                Port: "repudiandae",
                                                Project: "quasi",
                                                Region: "atque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reprehenderit",
                                                IPProtocol: "udp",
                                                Kind: "totam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quidem",
                                                Port: "maxime",
                                                Project: "et",
                                                Region: "esse",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "udp",
                                                Kind: "ea",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "error",
                                                Port: "officiis",
                                                Project: "officiis",
                                                Region: "accusamus",
                                            },
                                        },
                                    },
                                    Kind: "natus",
                                    Rrdatas: []string{
                                        "aspernatur",
                                        "ex",
                                    },
                                    SignatureRrdatas: []string{
                                        "corrupti",
                                        "at",
                                        "error",
                                        "blanditiis",
                                    },
                                    Weight: 3793.56,
                                },
                            },
                            Kind: "repudiandae",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "udp",
                                                Kind: "dolorum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "labore",
                                                Port: "reiciendis",
                                                Project: "doloremque",
                                                Region: "repudiandae",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dicta",
                                                IPProtocol: "undefined",
                                                Kind: "beatae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "enim",
                                                Port: "laboriosam",
                                                Project: "velit",
                                                Region: "a",
                                            },
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
                                        },
                                    },
                                    Kind: "adipisci",
                                    Rrdatas: []string{
                                        "occaecati",
                                        "consequuntur",
                                        "fugit",
                                        "id",
                                    },
                                    SignatureRrdatas: []string{
                                        "reprehenderit",
                                        "error",
                                    },
                                    Weight: 764.86,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quidem",
                                                IPProtocol: "udp",
                                                Kind: "non",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "doloremque",
                                                Port: "iure",
                                                Project: "ipsa",
                                                Region: "totam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "tcp",
                                                Kind: "eveniet",
                                                LoadBalancerType: "none",
                                                NetworkURL: "cum",
                                                Port: "iure",
                                                Project: "necessitatibus",
                                                Region: "ratione",
                                            },
                                        },
                                    },
                                    Kind: "laborum",
                                    Rrdatas: []string{
                                        "voluptatum",
                                        "rem",
                                        "aliquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "repellat",
                                        "alias",
                                    },
                                    Weight: 3621.89,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nihil",
                                                IPProtocol: "tcp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "maiores",
                                                Port: "reiciendis",
                                                Project: "dolores",
                                                Region: "id",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "undefined",
                                                Kind: "dolorum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quae",
                                                Port: "recusandae",
                                                Project: "omnis",
                                                Region: "quaerat",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "tcp",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "adipisci",
                                                Port: "debitis",
                                                Project: "laudantium",
                                                Region: "eum",
                                            },
                                        },
                                    },
                                    Kind: "nemo",
                                    Rrdatas: []string{
                                        "esse",
                                        "provident",
                                        "quis",
                                        "eum",
                                    },
                                    SignatureRrdatas: []string{
                                        "provident",
                                        "aspernatur",
                                        "ullam",
                                        "quasi",
                                    },
                                    Weight: 6570.2,
                                },
                            },
                            Kind: "nostrum",
                        },
                    },
                    Rrdatas: []string{
                        "provident",
                        "possimus",
                        "animi",
                    },
                    SignatureRrdatas: []string{
                        "aliquid",
                        "accusantium",
                    },
                    TTL: 999278,
                    Type: "doloribus",
                },
            },
            ID: "ullam",
            IsServing: false,
            Kind: "in",
            StartTime: "nam",
            Status: "done",
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
