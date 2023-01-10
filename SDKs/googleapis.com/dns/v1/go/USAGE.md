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
            ManagedZone: "et",
            Project: "quae",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "fuga",
            Alt: "proto",
            Callback: "provident",
            ClientOperationID: "velit",
            Fields: "illo",
            Key: "ut",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "expedita",
            UploadType: "fugit",
            UploadProtocol: "quae",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "et",
                    Name: "eveniet",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nemo",
                                                IPProtocol: "udp",
                                                Kind: "quasi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "officiis",
                                                Port: "at",
                                                Project: "sit",
                                                Region: "culpa",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Location: "facilis",
                                    Rrdatas: []string{
                                        "tempore",
                                        "dolorem",
                                    },
                                    SignatureRrdatas: []string{
                                        "odio",
                                        "voluptatem",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsam",
                                                IPProtocol: "tcp",
                                                Kind: "eum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "id",
                                                Port: "qui",
                                                Project: "culpa",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "udp",
                                                Kind: "maiores",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sunt",
                                                Port: "ut",
                                                Project: "dignissimos",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minus",
                                                IPProtocol: "undefined",
                                                Kind: "sint",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "enim",
                                                Project: "qui",
                                                Region: "commodi",
                                            },
                                        },
                                    },
                                    Kind: "autem",
                                    Location: "enim",
                                    Rrdatas: []string{
                                        "enim",
                                        "aperiam",
                                        "quasi",
                                    },
                                    SignatureRrdatas: []string{
                                        "incidunt",
                                        "tenetur",
                                        "cupiditate",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nihil",
                                                IPProtocol: "udp",
                                                Kind: "quisquam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "laudantium",
                                                Port: "quo",
                                                Project: "qui",
                                                Region: "quos",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Location: "sit",
                                    Rrdatas: []string{
                                        "ut",
                                        "iure",
                                    },
                                    SignatureRrdatas: []string{
                                        "natus",
                                        "ad",
                                        "in",
                                    },
                                },
                            },
                            Kind: "voluptatem",
                        },
                        Kind: "iure",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptas",
                                                    IPProtocol: "undefined",
                                                    Kind: "enim",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "deleniti",
                                                    Port: "qui",
                                                    Project: "est",
                                                    Region: "ut",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "tenetur",
                                                    IPProtocol: "tcp",
                                                    Kind: "reprehenderit",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dolorem",
                                                    Port: "dolores",
                                                    Project: "maxime",
                                                    Region: "harum",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolor",
                                                    IPProtocol: "udp",
                                                    Kind: "maiores",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "est",
                                                    Port: "ut",
                                                    Project: "voluptatem",
                                                    Region: "magni",
                                                },
                                            },
                                        },
                                        Kind: "soluta",
                                        Location: "illum",
                                        Rrdatas: []string{
                                            "velit",
                                            "vel",
                                            "ea",
                                        },
                                        SignatureRrdatas: []string{
                                            "impedit",
                                            "nam",
                                            "autem",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cum",
                                                    IPProtocol: "udp",
                                                    Kind: "numquam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "consequuntur",
                                                    Port: "aut",
                                                    Project: "quis",
                                                    Region: "sed",
                                                },
                                            },
                                        },
                                        Kind: "modi",
                                        Location: "quidem",
                                        Rrdatas: []string{
                                            "molestias",
                                        },
                                        SignatureRrdatas: []string{
                                            "repudiandae",
                                            "odit",
                                            "velit",
                                        },
                                    },
                                },
                                Kind: "ab",
                            },
                            Kind: "commodi",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "saepe",
                                        IPProtocol: "udp",
                                        Kind: "vitae",
                                        LoadBalancerType: "none",
                                        NetworkURL: "quae",
                                        Port: "sunt",
                                        Project: "tempore",
                                        Region: "ratione",
                                    },
                                },
                            },
                            TrickleTraffic: 57.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "inventore",
                                                IPProtocol: "undefined",
                                                Kind: "quod",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nihil",
                                                Port: "commodi",
                                                Project: "consequatur",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "reprehenderit",
                                                IPProtocol: "udp",
                                                Kind: "consequatur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "soluta",
                                                Port: "molestiae",
                                                Project: "minima",
                                                Region: "illum",
                                            },
                                        },
                                    },
                                    Kind: "omnis",
                                    Rrdatas: []string{
                                        "id",
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "minima",
                                        "dignissimos",
                                        "quas",
                                    },
                                    Weight: 20.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laboriosam",
                                                IPProtocol: "tcp",
                                                Kind: "at",
                                                LoadBalancerType: "none",
                                                NetworkURL: "voluptas",
                                                Port: "doloremque",
                                                Project: "sint",
                                                Region: "omnis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "incidunt",
                                                IPProtocol: "udp",
                                                Kind: "explicabo",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "at",
                                                Project: "expedita",
                                                Region: "rerum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "tcp",
                                                Kind: "error",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "temporibus",
                                                Project: "sint",
                                                Region: "harum",
                                            },
                                        },
                                    },
                                    Kind: "minima",
                                    Rrdatas: []string{
                                        "quisquam",
                                        "minus",
                                        "provident",
                                    },
                                    SignatureRrdatas: []string{
                                        "illo",
                                    },
                                    Weight: 98.199997,
                                },
                            },
                            Kind: "illo",
                        },
                    },
                    Rrdatas: []string{
                        "et",
                        "non",
                    },
                    SignatureRrdatas: []string{
                        "ipsa",
                    },
                    TTL: 1057922246065209620,
                    Type: "totam",
                },
                shared.ResourceRecordSet{
                    Kind: "rerum",
                    Name: "temporibus",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sit",
                                                Port: "dolorum",
                                                Project: "animi",
                                                Region: "aperiam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "tcp",
                                                Kind: "consectetur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quasi",
                                                Port: "aut",
                                                Project: "magni",
                                                Region: "necessitatibus",
                                            },
                                        },
                                    },
                                    Kind: "sit",
                                    Location: "sit",
                                    Rrdatas: []string{
                                        "sunt",
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "sapiente",
                                        "culpa",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "architecto",
                                                IPProtocol: "udp",
                                                Kind: "rerum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quis",
                                                Port: "aliquam",
                                                Project: "quam",
                                                Region: "officiis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sequi",
                                                IPProtocol: "udp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ducimus",
                                                Port: "distinctio",
                                                Project: "neque",
                                                Region: "ipsum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "libero",
                                                IPProtocol: "udp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "accusamus",
                                                Port: "reprehenderit",
                                                Project: "a",
                                                Region: "odio",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Location: "placeat",
                                    Rrdatas: []string{
                                        "nesciunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "tcp",
                                                Kind: "exercitationem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "nihil",
                                                Port: "ducimus",
                                                Project: "non",
                                                Region: "amet",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "undefined",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eligendi",
                                                Port: "sit",
                                                Project: "illum",
                                                Region: "neque",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "undefined",
                                                Kind: "deleniti",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "amet",
                                                Port: "magnam",
                                                Project: "nihil",
                                                Region: "ipsa",
                                            },
                                        },
                                    },
                                    Kind: "consequuntur",
                                    Location: "laboriosam",
                                    Rrdatas: []string{
                                        "aliquid",
                                    },
                                    SignatureRrdatas: []string{
                                        "quia",
                                    },
                                },
                            },
                            Kind: "sunt",
                        },
                        Kind: "nisi",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "suscipit",
                                                    IPProtocol: "tcp",
                                                    Kind: "et",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "at",
                                                    Port: "non",
                                                    Project: "atque",
                                                    Region: "sint",
                                                },
                                            },
                                        },
                                        Kind: "rem",
                                        Location: "excepturi",
                                        Rrdatas: []string{
                                            "nulla",
                                            "enim",
                                            "repellat",
                                        },
                                        SignatureRrdatas: []string{
                                            "esse",
                                            "non",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aperiam",
                                                    IPProtocol: "tcp",
                                                    Kind: "provident",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "deserunt",
                                                    Port: "eveniet",
                                                    Project: "omnis",
                                                    Region: "porro",
                                                },
                                            },
                                        },
                                        Kind: "distinctio",
                                        Location: "consequuntur",
                                        Rrdatas: []string{
                                            "sapiente",
                                        },
                                        SignatureRrdatas: []string{
                                            "et",
                                            "itaque",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ut",
                                                    IPProtocol: "undefined",
                                                    Kind: "iusto",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "repellendus",
                                                    Port: "et",
                                                    Project: "et",
                                                    Region: "ea",
                                                },
                                            },
                                        },
                                        Kind: "maiores",
                                        Location: "blanditiis",
                                        Rrdatas: []string{
                                            "quia",
                                            "distinctio",
                                        },
                                        SignatureRrdatas: []string{
                                            "nostrum",
                                            "vel",
                                        },
                                    },
                                },
                                Kind: "repudiandae",
                            },
                            Kind: "nihil",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ipsa",
                                        IPProtocol: "tcp",
                                        Kind: "animi",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "veritatis",
                                        Port: "ea",
                                        Project: "rerum",
                                        Region: "minus",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ab",
                                        IPProtocol: "udp",
                                        Kind: "fuga",
                                        LoadBalancerType: "none",
                                        NetworkURL: "quam",
                                        Port: "est",
                                        Project: "perspiciatis",
                                        Region: "porro",
                                    },
                                },
                            },
                            TrickleTraffic: 54.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "undefined",
                                                Kind: "molestias",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ab",
                                                Port: "hic",
                                                Project: "fugiat",
                                                Region: "consectetur",
                                            },
                                        },
                                    },
                                    Kind: "aliquam",
                                    Rrdatas: []string{
                                        "ab",
                                        "eaque",
                                    },
                                    SignatureRrdatas: []string{
                                        "dignissimos",
                                        "earum",
                                        "quas",
                                    },
                                    Weight: 63.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eaque",
                                                IPProtocol: "tcp",
                                                Kind: "adipisci",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "optio",
                                                Port: "aut",
                                                Project: "sunt",
                                                Region: "maiores",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "illo",
                                                IPProtocol: "tcp",
                                                Kind: "velit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "assumenda",
                                                Port: "aspernatur",
                                                Project: "in",
                                                Region: "fugiat",
                                            },
                                        },
                                    },
                                    Kind: "reprehenderit",
                                    Rrdatas: []string{
                                        "voluptatum",
                                        "aut",
                                        "sit",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                    },
                                    Weight: 3.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "undefined",
                                                Kind: "ea",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consequatur",
                                                Port: "iusto",
                                                Project: "quia",
                                                Region: "molestiae",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "udp",
                                                Kind: "sunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quasi",
                                                Port: "eos",
                                                Project: "laudantium",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "modi",
                                    Rrdatas: []string{
                                        "provident",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "sapiente",
                                    },
                                    Weight: 16.100000,
                                },
                            },
                            Kind: "rerum",
                        },
                    },
                    Rrdatas: []string{
                        "doloremque",
                        "incidunt",
                    },
                    SignatureRrdatas: []string{
                        "voluptas",
                        "assumenda",
                        "sunt",
                    },
                    TTL: 8160456358270837190,
                    Type: "ut",
                },
                shared.ResourceRecordSet{
                    Kind: "quia",
                    Name: "voluptatem",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ex",
                                                IPProtocol: "udp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "laudantium",
                                                Port: "quo",
                                                Project: "voluptatem",
                                                Region: "totam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "assumenda",
                                                IPProtocol: "udp",
                                                Kind: "enim",
                                                LoadBalancerType: "none",
                                                NetworkURL: "id",
                                                Port: "autem",
                                                Project: "vitae",
                                                Region: "dolore",
                                            },
                                        },
                                    },
                                    Kind: "quas",
                                    Location: "et",
                                    Rrdatas: []string{
                                        "deserunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "dolores",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "udp",
                                                Kind: "debitis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ipsum",
                                                Port: "qui",
                                                Project: "autem",
                                                Region: "enim",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ab",
                                                IPProtocol: "tcp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "sint",
                                                Project: "quo",
                                                Region: "beatae",
                                            },
                                        },
                                    },
                                    Kind: "tenetur",
                                    Location: "assumenda",
                                    Rrdatas: []string{
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "maxime",
                                        "necessitatibus",
                                        "possimus",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "temporibus",
                                                IPProtocol: "tcp",
                                                Kind: "natus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "natus",
                                                Port: "fugit",
                                                Project: "qui",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "udp",
                                                Kind: "eveniet",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sit",
                                                Port: "modi",
                                                Project: "est",
                                                Region: "placeat",
                                            },
                                        },
                                    },
                                    Kind: "cum",
                                    Location: "dolorem",
                                    Rrdatas: []string{
                                        "at",
                                    },
                                    SignatureRrdatas: []string{
                                        "fugiat",
                                    },
                                },
                            },
                            Kind: "consequatur",
                        },
                        Kind: "soluta",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "rerum",
                                                    IPProtocol: "undefined",
                                                    Kind: "architecto",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "debitis",
                                                    Port: "vel",
                                                    Project: "ullam",
                                                    Region: "ut",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "numquam",
                                                    IPProtocol: "udp",
                                                    Kind: "minima",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "culpa",
                                                    Port: "ullam",
                                                    Project: "corrupti",
                                                    Region: "aspernatur",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "hic",
                                                    IPProtocol: "tcp",
                                                    Kind: "nesciunt",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "odit",
                                                    Port: "earum",
                                                    Project: "ipsam",
                                                    Region: "minima",
                                                },
                                            },
                                        },
                                        Kind: "nostrum",
                                        Location: "voluptatem",
                                        Rrdatas: []string{
                                            "est",
                                            "quia",
                                        },
                                        SignatureRrdatas: []string{
                                            "numquam",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "consequatur",
                                                    IPProtocol: "tcp",
                                                    Kind: "exercitationem",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "sunt",
                                                    Port: "qui",
                                                    Project: "esse",
                                                    Region: "qui",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "repudiandae",
                                                    IPProtocol: "tcp",
                                                    Kind: "accusamus",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "sint",
                                                    Port: "optio",
                                                    Project: "aut",
                                                    Region: "a",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minus",
                                                    IPProtocol: "undefined",
                                                    Kind: "voluptatem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "ab",
                                                    Port: "illo",
                                                    Project: "sit",
                                                    Region: "enim",
                                                },
                                            },
                                        },
                                        Kind: "libero",
                                        Location: "dolor",
                                        Rrdatas: []string{
                                            "suscipit",
                                            "amet",
                                        },
                                        SignatureRrdatas: []string{
                                            "ea",
                                            "earum",
                                        },
                                    },
                                },
                                Kind: "error",
                            },
                            Kind: "veniam",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "modi",
                                        IPProtocol: "undefined",
                                        Kind: "neque",
                                        LoadBalancerType: "none",
                                        NetworkURL: "nam",
                                        Port: "possimus",
                                        Project: "aspernatur",
                                        Region: "est",
                                    },
                                },
                            },
                            TrickleTraffic: 31.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "sint",
                                                LoadBalancerType: "none",
                                                NetworkURL: "cum",
                                                Port: "est",
                                                Project: "aut",
                                                Region: "autem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dignissimos",
                                                IPProtocol: "tcp",
                                                Kind: "sed",
                                                LoadBalancerType: "none",
                                                NetworkURL: "magni",
                                                Port: "voluptas",
                                                Project: "esse",
                                                Region: "soluta",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "repudiandae",
                                        "debitis",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "aperiam",
                                    },
                                    Weight: 19.200001,
                                },
                            },
                            Kind: "facilis",
                        },
                    },
                    Rrdatas: []string{
                        "eligendi",
                        "alias",
                        "non",
                    },
                    SignatureRrdatas: []string{
                        "iusto",
                        "optio",
                        "eligendi",
                    },
                    TTL: 9177336332104729430,
                    Type: "qui",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "amet",
                    Name: "consequatur",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "undefined",
                                                Kind: "aut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nulla",
                                                Port: "similique",
                                                Project: "totam",
                                                Region: "ipsum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "undefined",
                                                Kind: "sit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sed",
                                                Port: "aspernatur",
                                                Project: "ratione",
                                                Region: "sunt",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "undefined",
                                                Kind: "iste",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aspernatur",
                                                Port: "expedita",
                                                Project: "soluta",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "necessitatibus",
                                    Location: "minus",
                                    Rrdatas: []string{
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "odio",
                                        "temporibus",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "possimus",
                                                IPProtocol: "undefined",
                                                Kind: "dolorem",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rerum",
                                                Port: "blanditiis",
                                                Project: "libero",
                                                Region: "aspernatur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "illo",
                                                IPProtocol: "udp",
                                                Kind: "qui",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repudiandae",
                                                Port: "itaque",
                                                Project: "vitae",
                                                Region: "aspernatur",
                                            },
                                        },
                                    },
                                    Kind: "dolor",
                                    Location: "maxime",
                                    Rrdatas: []string{
                                        "iste",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptate",
                                        "dolorem",
                                        "nihil",
                                    },
                                },
                            },
                            Kind: "quis",
                        },
                        Kind: "deserunt",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quasi",
                                                    IPProtocol: "udp",
                                                    Kind: "fuga",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "accusamus",
                                                    Port: "sunt",
                                                    Project: "cupiditate",
                                                    Region: "sit",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quam",
                                                    IPProtocol: "tcp",
                                                    Kind: "odit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "qui",
                                                    Port: "expedita",
                                                    Project: "dicta",
                                                    Region: "sit",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptatem",
                                                    IPProtocol: "undefined",
                                                    Kind: "quibusdam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "neque",
                                                    Port: "soluta",
                                                    Project: "voluptate",
                                                    Region: "minima",
                                                },
                                            },
                                        },
                                        Kind: "libero",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "veniam",
                                        },
                                        SignatureRrdatas: []string{
                                            "minima",
                                            "velit",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "illum",
                                                    IPProtocol: "tcp",
                                                    Kind: "tempore",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "qui",
                                                    Port: "laborum",
                                                    Project: "et",
                                                    Region: "ex",
                                                },
                                            },
                                        },
                                        Kind: "amet",
                                        Location: "perferendis",
                                        Rrdatas: []string{
                                            "molestiae",
                                        },
                                        SignatureRrdatas: []string{
                                            "maxime",
                                            "amet",
                                        },
                                    },
                                },
                                Kind: "sit",
                            },
                            Kind: "quia",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "cupiditate",
                                        IPProtocol: "undefined",
                                        Kind: "itaque",
                                        LoadBalancerType: "none",
                                        NetworkURL: "dolor",
                                        Port: "ut",
                                        Project: "excepturi",
                                        Region: "autem",
                                    },
                                },
                            },
                            TrickleTraffic: 71.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nulla",
                                                IPProtocol: "undefined",
                                                Kind: "adipisci",
                                                LoadBalancerType: "none",
                                                NetworkURL: "iure",
                                                Port: "nihil",
                                                Project: "fuga",
                                                Region: "ratione",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sit",
                                                IPProtocol: "udp",
                                                Kind: "dicta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quae",
                                                Port: "iste",
                                                Project: "animi",
                                                Region: "nulla",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "tcp",
                                                Kind: "recusandae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "repellendus",
                                                Port: "unde",
                                                Project: "et",
                                                Region: "voluptatum",
                                            },
                                        },
                                    },
                                    Kind: "neque",
                                    Rrdatas: []string{
                                        "tempora",
                                        "praesentium",
                                    },
                                    SignatureRrdatas: []string{
                                        "sed",
                                        "voluptas",
                                        "dolores",
                                    },
                                    Weight: 93.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "udp",
                                                Kind: "placeat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "autem",
                                                Port: "suscipit",
                                                Project: "quis",
                                                Region: "esse",
                                            },
                                        },
                                    },
                                    Kind: "aut",
                                    Rrdatas: []string{
                                        "voluptatum",
                                        "officia",
                                        "illum",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "et",
                                        "dolorem",
                                    },
                                    Weight: 56.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dicta",
                                                IPProtocol: "undefined",
                                                Kind: "nisi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "rerum",
                                                Port: "porro",
                                                Project: "et",
                                                Region: "necessitatibus",
                                            },
                                        },
                                    },
                                    Kind: "architecto",
                                    Rrdatas: []string{
                                        "veritatis",
                                        "nihil",
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "enim",
                                        "ut",
                                        "in",
                                    },
                                    Weight: 99.099998,
                                },
                            },
                            Kind: "qui",
                        },
                    },
                    Rrdatas: []string{
                        "distinctio",
                    },
                    SignatureRrdatas: []string{
                        "doloribus",
                        "sed",
                        "repudiandae",
                    },
                    TTL: 767359992900854811,
                    Type: "mollitia",
                },
            },
            ID: "aperiam",
            IsServing: false,
            Kind: "libero",
            StartTime: "aperiam",
            Status: "done",
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