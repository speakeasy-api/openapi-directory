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
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "tcp",
                                                Kind: "voluptatum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fuga",
                                                Port: "nesciunt",
                                                Project: "laboriosam",
                                                Region: "aut",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "tcp",
                                                Kind: "ipsam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "omnis",
                                                Port: "adipisci",
                                                Project: "hic",
                                                Region: "consequatur",
                                            },
                                        },
                                    },
                                    Kind: "distinctio",
                                    Location: "qui",
                                    Rrdatas: []string{
                                        "aspernatur",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "tempore",
                                        "explicabo",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reiciendis",
                                                IPProtocol: "udp",
                                                Kind: "totam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "reiciendis",
                                                Port: "illo",
                                                Project: "id",
                                                Region: "qui",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quod",
                                                IPProtocol: "undefined",
                                                Kind: "eaque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veniam",
                                                Port: "reiciendis",
                                                Project: "sed",
                                                Region: "ea",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "tcp",
                                                Kind: "sed",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatem",
                                                Port: "aut",
                                                Project: "esse",
                                                Region: "sint",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "undefined",
                                                Kind: "eligendi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "similique",
                                                Port: "et",
                                                Project: "ut",
                                                Region: "molestias",
                                            },
                                        },
                                    },
                                    Kind: "cupiditate",
                                    Location: "sint",
                                    Rrdatas: []string{
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "vitae",
                                        "non",
                                        "minima",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "est",
                                                Port: "porro",
                                                Project: "voluptas",
                                                Region: "nostrum",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "undefined",
                                                Kind: "in",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "voluptatem",
                                                Project: "dolorem",
                                                Region: "eum",
                                            },
                                        },
                                    },
                                    Kind: "quis",
                                    Location: "consequatur",
                                    Rrdatas: []string{
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "enim",
                                        "nihil",
                                        "id",
                                    },
                                },
                            },
                            Kind: "quis",
                        },
                        Kind: "sapiente",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "possimus",
                                                    IPProtocol: "tcp",
                                                    Kind: "qui",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "eveniet",
                                                    Port: "sunt",
                                                    Project: "rerum",
                                                    Region: "modi",
                                                },
                                            },
                                        },
                                        Kind: "necessitatibus",
                                        Location: "tenetur",
                                        Rrdatas: []string{
                                            "ducimus",
                                            "ducimus",
                                            "nulla",
                                        },
                                        SignatureRrdatas: []string{
                                            "cumque",
                                            "fugit",
                                            "ullam",
                                            "voluptas",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
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
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "delectus",
                                                    IPProtocol: "udp",
                                                    Kind: "officia",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "distinctio",
                                                    Port: "et",
                                                    Project: "provident",
                                                    Region: "a",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "incidunt",
                                                    IPProtocol: "tcp",
                                                    Kind: "qui",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dolorum",
                                                    Port: "id",
                                                    Project: "voluptatum",
                                                    Region: "sit",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "rem",
                                                    IPProtocol: "undefined",
                                                    Kind: "porro",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quis",
                                                    Port: "nostrum",
                                                    Project: "eum",
                                                    Region: "et",
                                                },
                                            },
                                        },
                                        Kind: "placeat",
                                        Location: "molestiae",
                                        Rrdatas: []string{
                                            "dolores",
                                            "aut",
                                            "ullam",
                                            "explicabo",
                                        },
                                        SignatureRrdatas: []string{
                                            "ex",
                                            "deserunt",
                                            "omnis",
                                        },
                                    },
                                },
                                Kind: "in",
                            },
                            Kind: "aperiam",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ut",
                                        IPProtocol: "tcp",
                                        Kind: "voluptatem",
                                        LoadBalancerType: "none",
                                        NetworkURL: "modi",
                                        Port: "eveniet",
                                        Project: "qui",
                                        Region: "consequatur",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aspernatur",
                                        IPProtocol: "tcp",
                                        Kind: "maiores",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "quaerat",
                                        Port: "aut",
                                        Project: "sed",
                                        Region: "nihil",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ducimus",
                                        IPProtocol: "undefined",
                                        Kind: "aspernatur",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "aliquid",
                                        Port: "quo",
                                        Project: "totam",
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
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quasi",
                                                IPProtocol: "udp",
                                                Kind: "optio",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "quam",
                                                Project: "quisquam",
                                                Region: "ab",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "aut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "vero",
                                                Port: "incidunt",
                                                Project: "aut",
                                                Region: "voluptas",
                                            },
                                        },
                                    },
                                    Kind: "ea",
                                    Rrdatas: []string{
                                        "qui",
                                        "placeat",
                                        "ipsum",
                                        "laboriosam",
                                    },
                                    SignatureRrdatas: []string{
                                        "corrupti",
                                        "illo",
                                        "laboriosam",
                                    },
                                    Weight: 1999.96,
                                },
                            },
                            Kind: "dolor",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "tcp",
                                                Kind: "modi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nisi",
                                                Port: "rerum",
                                                Project: "non",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "nihil",
                                    Rrdatas: []string{
                                        "doloremque",
                                        "repellendus",
                                        "dolorem",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolorum",
                                        "ab",
                                        "in",
                                    },
                                    Weight: 6990.98,
                                },
                            },
                            Kind: "labore",
                        },
                    },
                    Rrdatas: []string{
                        "recusandae",
                        "ut",
                        "laborum",
                        "soluta",
                    },
                    SignatureRrdatas: []string{
                        "et",
                        "officia",
                        "placeat",
                    },
                    TTL: 730122,
                    Type: "delectus",
                },
                shared.ResourceRecordSet{
                    Kind: "enim",
                    Name: "iste",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "non",
                                                IPProtocol: "undefined",
                                                Kind: "amet",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rerum",
                                                Port: "similique",
                                                Project: "quod",
                                                Region: "qui",
                                            },
                                        },
                                    },
                                    Kind: "quos",
                                    Location: "ut",
                                    Rrdatas: []string{
                                        "soluta",
                                    },
                                    SignatureRrdatas: []string{
                                        "dicta",
                                        "inventore",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "tcp",
                                                Kind: "enim",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "optio",
                                                Port: "reiciendis",
                                                Project: "vel",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "dolor",
                                    Location: "perspiciatis",
                                    Rrdatas: []string{
                                        "at",
                                    },
                                    SignatureRrdatas: []string{
                                        "maxime",
                                    },
                                },
                            },
                            Kind: "soluta",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "tcp",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quo",
                                                Port: "doloribus",
                                                Project: "totam",
                                                Region: "eius",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "blanditiis",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eos",
                                                Port: "voluptatem",
                                                Project: "incidunt",
                                                Region: "possimus",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Location: "voluptatem",
                                    Rrdatas: []string{
                                        "eum",
                                        "facilis",
                                        "officia",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "occaecati",
                                        "et",
                                        "alias",
                                        "officiis",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ad",
                                                IPProtocol: "tcp",
                                                Kind: "quibusdam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "amet",
                                                Port: "soluta",
                                                Project: "tenetur",
                                                Region: "blanditiis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "tcp",
                                                Kind: "numquam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "rerum",
                                                Port: "incidunt",
                                                Project: "qui",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "aliquam",
                                    Location: "ipsam",
                                    Rrdatas: []string{
                                        "a",
                                    },
                                    SignatureRrdatas: []string{
                                        "rem",
                                        "accusantium",
                                        "quo",
                                    },
                                },
                            },
                            Kind: "quia",
                        },
                        Kind: "sequi",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "autem",
                                                    IPProtocol: "tcp",
                                                    Kind: "laudantium",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "minima",
                                                    Port: "amet",
                                                    Project: "officia",
                                                    Region: "consequatur",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "udp",
                                                    Kind: "sed",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "sint",
                                                    Port: "ad",
                                                    Project: "magni",
                                                    Region: "quia",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "porro",
                                                    IPProtocol: "udp",
                                                    Kind: "qui",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "error",
                                                    Port: "voluptas",
                                                    Project: "sit",
                                                    Region: "quia",
                                                },
                                            },
                                        },
                                        Kind: "ratione",
                                        Location: "dolorem",
                                        Rrdatas: []string{
                                            "consequuntur",
                                            "ex",
                                        },
                                        SignatureRrdatas: []string{
                                            "earum",
                                            "doloremque",
                                            "voluptas",
                                        },
                                    },
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "placeat",
                                                    IPProtocol: "undefined",
                                                    Kind: "et",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "vitae",
                                                    Port: "placeat",
                                                    Project: "omnis",
                                                    Region: "minus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "qui",
                                                    IPProtocol: "undefined",
                                                    Kind: "sapiente",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "nostrum",
                                                    Port: "quis",
                                                    Project: "labore",
                                                    Region: "cum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aspernatur",
                                                    IPProtocol: "undefined",
                                                    Kind: "sit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "non",
                                                    Port: "aut",
                                                    Project: "libero",
                                                    Region: "fugiat",
                                                },
                                            },
                                        },
                                        Kind: "repellendus",
                                        Location: "maiores",
                                        Rrdatas: []string{
                                            "nihil",
                                            "officia",
                                        },
                                        SignatureRrdatas: []string{
                                            "veritatis",
                                        },
                                    },
                                },
                                Kind: "excepturi",
                            },
                            Kind: "atque",
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "reiciendis",
                                        IPProtocol: "udp",
                                        Kind: "debitis",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "laboriosam",
                                        Port: "eius",
                                        Project: "sapiente",
                                        Region: "blanditiis",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "incidunt",
                                        IPProtocol: "udp",
                                        Kind: "hic",
                                        LoadBalancerType: "none",
                                        NetworkURL: "earum",
                                        Port: "porro",
                                        Project: "et",
                                        Region: "corrupti",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "et",
                                        IPProtocol: "udp",
                                        Kind: "officiis",
                                        LoadBalancerType: "none",
                                        NetworkURL: "nostrum",
                                        Port: "nulla",
                                        Project: "pariatur",
                                        Region: "adipisci",
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
                                                IPAddress: "aut",
                                                IPProtocol: "tcp",
                                                Kind: "eos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolor",
                                                Port: "voluptatibus",
                                                Project: "maiores",
                                                Region: "deleniti",
                                            },
                                        },
                                    },
                                    Kind: "facere",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                        "velit",
                                    },
                                    Weight: 1369,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "undefined",
                                                Kind: "consectetur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "excepturi",
                                                Port: "quia",
                                                Project: "modi",
                                                Region: "voluptatibus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aspernatur",
                                                IPProtocol: "tcp",
                                                Kind: "eos",
                                                LoadBalancerType: "regionalL4ilb",
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
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "undefined",
                                                Kind: "molestiae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptas",
                                                Port: "illo",
                                                Project: "tenetur",
                                                Region: "est",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perferendis",
                                                IPProtocol: "undefined",
                                                Kind: "provident",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "corporis",
                                                Port: "ratione",
                                                Project: "aut",
                                                Region: "beatae",
                                            },
                                        },
                                    },
                                    Kind: "magnam",
                                    Rrdatas: []string{
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                        "dolore",
                                        "et",
                                    },
                                    Weight: 4205.39,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "udp",
                                                Kind: "eos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "aspernatur",
                                                Project: "enim",
                                                Region: "aliquam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magni",
                                                IPProtocol: "tcp",
                                                Kind: "illo",
                                                LoadBalancerType: "none",
                                                NetworkURL: "corporis",
                                                Port: "corrupti",
                                                Project: "voluptatem",
                                                Region: "praesentium",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "blanditiis",
                                                IPProtocol: "tcp",
                                                Kind: "nobis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "optio",
                                                Port: "at",
                                                Project: "veniam",
                                                Region: "et",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "udp",
                                                Kind: "sit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "temporibus",
                                                Port: "dicta",
                                                Project: "inventore",
                                                Region: "distinctio",
                                            },
                                        },
                                    },
                                    Kind: "optio",
                                    Rrdatas: []string{
                                        "omnis",
                                    },
                                    SignatureRrdatas: []string{
                                        "omnis",
                                        "soluta",
                                        "quaerat",
                                        "dolor",
                                    },
                                    Weight: 3738.13,
                                },
                            },
                            Kind: "quasi",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "udp",
                                                Kind: "quis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "velit",
                                                Port: "dolor",
                                                Project: "praesentium",
                                                Region: "molestiae",
                                            },
                                        },
                                    },
                                    Kind: "quae",
                                    Rrdatas: []string{
                                        "et",
                                        "quos",
                                        "beatae",
                                    },
                                    SignatureRrdatas: []string{
                                        "occaecati",
                                        "aut",
                                    },
                                    Weight: 3068.1,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "a",
                                                LoadBalancerType: "none",
                                                NetworkURL: "facilis",
                                                Port: "voluptatum",
                                                Project: "aperiam",
                                                Region: "repellendus",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "molestias",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sed",
                                                Port: "qui",
                                                Project: "soluta",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "minima",
                                    Rrdatas: []string{
                                        "magni",
                                        "voluptas",
                                        "reprehenderit",
                                    },
                                    SignatureRrdatas: []string{
                                        "a",
                                    },
                                    Weight: 1598.7,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magni",
                                                IPProtocol: "udp",
                                                Kind: "culpa",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sunt",
                                                Port: "blanditiis",
                                                Project: "voluptates",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "vitae",
                                    Rrdatas: []string{
                                        "et",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                        "explicabo",
                                        "et",
                                        "molestiae",
                                    },
                                    Weight: 6900.25,
                                },
                            },
                            Kind: "rem",
                        },
                    },
                    Rrdatas: []string{
                        "culpa",
                        "voluptas",
                        "porro",
                    },
                    SignatureRrdatas: []string{
                        "accusantium",
                        "quidem",
                        "minus",
                        "labore",
                    },
                    TTL: 766964,
                    Type: "nesciunt",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "quibusdam",
                    Name: "nemo",
                    RoutingPolicy: &shared.RRSetRoutingPolicy{
                        Geo: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "tcp",
                                                Kind: "deserunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "vero",
                                                Port: "iste",
                                                Project: "blanditiis",
                                                Region: "aspernatur",
                                            },
                                        },
                                    },
                                    Kind: "tenetur",
                                    Location: "dolorum",
                                    Rrdatas: []string{
                                        "eos",
                                        "qui",
                                        "nesciunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "asperiores",
                                        "illum",
                                        "dicta",
                                        "nesciunt",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "in",
                                                LoadBalancerType: "regionalL4ilb",
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
                                                IPProtocol: "tcp",
                                                Kind: "sit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "amet",
                                                Port: "nulla",
                                                Project: "in",
                                                Region: "sed",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "non",
                                                IPProtocol: "udp",
                                                Kind: "aspernatur",
                                                LoadBalancerType: "regionalL4ilb",
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
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "tcp",
                                                Kind: "perferendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "molestiae",
                                                Port: "est",
                                                Project: "et",
                                                Region: "perspiciatis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magnam",
                                                IPProtocol: "undefined",
                                                Kind: "modi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquam",
                                                Port: "est",
                                                Project: "magni",
                                                Region: "autem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "tcp",
                                                Kind: "fugit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dolorum",
                                                Port: "et",
                                                Project: "aut",
                                                Region: "autem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloribus",
                                                IPProtocol: "undefined",
                                                Kind: "voluptate",
                                                LoadBalancerType: "none",
                                                NetworkURL: "neque",
                                                Port: "fugiat",
                                                Project: "rerum",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "quos",
                                    Location: "rerum",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "et",
                                        "enim",
                                        "repellendus",
                                    },
                                    SignatureRrdatas: []string{
                                        "quis",
                                        "quasi",
                                        "et",
                                        "nobis",
                                    },
                                },
                            },
                            Kind: "distinctio",
                        },
                        GeoPolicy: &shared.RRSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "tcp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "at",
                                                Port: "nihil",
                                                Project: "dolores",
                                                Region: "iste",
                                            },
                                        },
                                    },
                                    Kind: "molestiae",
                                    Location: "quis",
                                    Rrdatas: []string{
                                        "nihil",
                                        "id",
                                        "esse",
                                        "ducimus",
                                    },
                                    SignatureRrdatas: []string{
                                        "ut",
                                        "eum",
                                    },
                                },
                                shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestiae",
                                                IPProtocol: "tcp",
                                                Kind: "quae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "incidunt",
                                                Port: "ducimus",
                                                Project: "ut",
                                                Region: "itaque",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "vel",
                                                IPProtocol: "undefined",
                                                Kind: "maiores",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "optio",
                                                Project: "et",
                                                Region: "eveniet",
                                            },
                                        },
                                    },
                                    Kind: "exercitationem",
                                    Location: "quia",
                                    Rrdatas: []string{
                                        "et",
                                        "magnam",
                                        "tempora",
                                        "odit",
                                    },
                                    SignatureRrdatas: []string{
                                        "hic",
                                        "necessitatibus",
                                    },
                                },
                            },
                            Kind: "ut",
                        },
                        Kind: "ea",
                        PrimaryBackup: &shared.RRSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RRSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RRSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "inventore",
                                                    IPProtocol: "udp",
                                                    Kind: "qui",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "aut",
                                                    Port: "harum",
                                                    Project: "enim",
                                                    Region: "dolores",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vel",
                                                    IPProtocol: "tcp",
                                                    Kind: "autem",
                                                    LoadBalancerType: "none",
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
                                                    IPProtocol: "udp",
                                                    Kind: "sed",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "unde",
                                                    Port: "et",
                                                    Project: "occaecati",
                                                    Region: "earum",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ut",
                                                    IPProtocol: "udp",
                                                    Kind: "accusantium",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "voluptatem",
                                                    Port: "ut",
                                                    Project: "magni",
                                                    Region: "asperiores",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "impedit",
                                                    IPProtocol: "tcp",
                                                    Kind: "impedit",
                                                    LoadBalancerType: "none",
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
                                                    IPProtocol: "undefined",
                                                    Kind: "delectus",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "unde",
                                                    Port: "reiciendis",
                                                    Project: "ad",
                                                    Region: "ratione",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "deserunt",
                                                    IPProtocol: "undefined",
                                                    Kind: "eveniet",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "voluptate",
                                                    Port: "culpa",
                                                    Project: "omnis",
                                                    Region: "aut",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "enim",
                                                    IPProtocol: "undefined",
                                                    Kind: "blanditiis",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "ea",
                                                    Port: "accusantium",
                                                    Project: "dolore",
                                                    Region: "necessitatibus",
                                                },
                                                shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quas",
                                                    IPProtocol: "udp",
                                                    Kind: "enim",
                                                    LoadBalancerType: "none",
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
                            PrimaryTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "necessitatibus",
                                        IPProtocol: "undefined",
                                        Kind: "excepturi",
                                        LoadBalancerType: "none",
                                        NetworkURL: "excepturi",
                                        Port: "quod",
                                        Project: "iure",
                                        Region: "soluta",
                                    },
                                    shared.RRSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "non",
                                        IPProtocol: "tcp",
                                        Kind: "rerum",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "saepe",
                                        Port: "quia",
                                        Project: "cum",
                                        Region: "nisi",
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
                                                IPAddress: "debitis",
                                                IPProtocol: "undefined",
                                                Kind: "perspiciatis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veniam",
                                                Port: "vero",
                                                Project: "doloremque",
                                                Region: "quidem",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "impedit",
                                                IPProtocol: "undefined",
                                                Kind: "consequatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quis",
                                                Port: "accusantium",
                                                Project: "provident",
                                                Region: "iste",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "sunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptate",
                                                Port: "sequi",
                                                Project: "accusantium",
                                                Region: "nihil",
                                            },
                                        },
                                    },
                                    Kind: "nisi",
                                    Rrdatas: []string{
                                        "dolorum",
                                        "aut",
                                        "minima",
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "eligendi",
                                    },
                                    Weight: 1157.03,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "undefined",
                                                Kind: "optio",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "tempore",
                                                Port: "est",
                                                Project: "hic",
                                                Region: "iure",
                                            },
                                        },
                                    },
                                    Kind: "alias",
                                    Rrdatas: []string{
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "animi",
                                        "aut",
                                    },
                                    Weight: 5887.4,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sapiente",
                                                IPProtocol: "udp",
                                                Kind: "sit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "optio",
                                                Port: "odio",
                                                Project: "vel",
                                                Region: "nobis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "molestias",
                                                IPProtocol: "tcp",
                                                Kind: "suscipit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "temporibus",
                                                Port: "sint",
                                                Project: "aspernatur",
                                                Region: "perspiciatis",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dignissimos",
                                                IPProtocol: "udp",
                                                Kind: "occaecati",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eligendi",
                                                Port: "aut",
                                                Project: "sunt",
                                                Region: "praesentium",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "tempora",
                                                IPProtocol: "udp",
                                                Kind: "velit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "fuga",
                                                Port: "rerum",
                                                Project: "rerum",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "dolorum",
                                    Rrdatas: []string{
                                        "dolores",
                                        "ea",
                                    },
                                    SignatureRrdatas: []string{
                                        "perspiciatis",
                                        "officiis",
                                        "dolorum",
                                        "quas",
                                    },
                                    Weight: 3793.56,
                                },
                            },
                            Kind: "et",
                        },
                        WrrPolicy: &shared.RRSetRoutingPolicyWrrPolicy{
                            Items: []shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "udp",
                                                Kind: "soluta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quis",
                                                Port: "ut",
                                                Project: "ipsa",
                                                Region: "et",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugit",
                                                IPProtocol: "undefined",
                                                Kind: "odit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsam",
                                                Port: "iure",
                                                Project: "dolore",
                                                Region: "tenetur",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "error",
                                                IPProtocol: "undefined",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "culpa",
                                                Port: "rerum",
                                                Project: "mollitia",
                                                Region: "ducimus",
                                            },
                                        },
                                    },
                                    Kind: "labore",
                                    Rrdatas: []string{
                                        "culpa",
                                        "nesciunt",
                                        "ratione",
                                        "distinctio",
                                    },
                                    SignatureRrdatas: []string{
                                        "odio",
                                        "fuga",
                                    },
                                    Weight: 764.86,
                                },
                                shared.RRSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RRSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RRSetRoutingPolicyLoadBalancerTarget{
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "udp",
                                                Kind: "dolore",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eaque",
                                                Port: "iusto",
                                                Project: "inventore",
                                                Region: "sint",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veritatis",
                                                IPProtocol: "tcp",
                                                Kind: "voluptates",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quod",
                                                Port: "iusto",
                                                Project: "eveniet",
                                                Region: "amet",
                                            },
                                        },
                                    },
                                    Kind: "tempore",
                                    Rrdatas: []string{
                                        "non",
                                        "cupiditate",
                                        "corporis",
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
                                                IPAddress: "rem",
                                                IPProtocol: "tcp",
                                                Kind: "vel",
                                                LoadBalancerType: "none",
                                                NetworkURL: "reiciendis",
                                                Port: "ut",
                                                Project: "quia",
                                                Region: "nam",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "undefined",
                                                Kind: "soluta",
                                                LoadBalancerType: "none",
                                                NetworkURL: "veritatis",
                                                Port: "molestiae",
                                                Project: "est",
                                                Region: "enim",
                                            },
                                            shared.RRSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "tcp",
                                                Kind: "veniam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "labore",
                                                Port: "necessitatibus",
                                                Project: "sint",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "consequatur",
                                    Rrdatas: []string{
                                        "blanditiis",
                                        "deserunt",
                                        "laboriosam",
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "deserunt",
                                        "dolores",
                                        "ex",
                                        "aspernatur",
                                    },
                                    Weight: 6570.2,
                                },
                            },
                            Kind: "nisi",
                        },
                    },
                    Rrdatas: []string{
                        "deserunt",
                        "qui",
                        "distinctio",
                    },
                    SignatureRrdatas: []string{
                        "qui",
                        "eaque",
                    },
                    TTL: 999278,
                    Type: "maiores",
                },
            },
            ID: "aliquid",
            IsServing: false,
            Kind: "ducimus",
            StartTime: "quisquam",
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