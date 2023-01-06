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
            ManagedZone: "quo",
            Project: "et",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "commodi",
            Alt: "proto",
            Callback: "qui",
            ClientOperationID: "et",
            Fields: "maxime",
            Key: "beatae",
            OauthToken: "doloremque",
            PrettyPrint: false,
            QuotaUser: "velit",
            UploadType: "asperiores",
            UploadProtocol: "nulla",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "velit",
                    Name: "et",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "undefined",
                                                Kind: "sed",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "ad",
                                                Project: "aut",
                                                Region: "id",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsum",
                                                IPProtocol: "undefined",
                                                Kind: "quas",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "facilis",
                                                Port: "temporibus",
                                                Project: "nihil",
                                                Region: "nemo",
                                            },
                                        },
                                    },
                                    Kind: "nostrum",
                                    Location: "illo",
                                    Rrdatas: []string{
                                        "omnis",
                                        "eligendi",
                                        "incidunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "occaecati",
                                        "exercitationem",
                                    },
                                },
                            },
                            Kind: "et",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "tcp",
                                                Kind: "velit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "consequatur",
                                                Port: "omnis",
                                                Project: "est",
                                                Region: "sunt",
                                            },
                                        },
                                    },
                                    Kind: "molestias",
                                    Location: "voluptas",
                                    Rrdatas: []string{
                                        "aspernatur",
                                        "non",
                                    },
                                    SignatureRrdatas: []string{
                                        "optio",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "udp",
                                                Kind: "quae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dolor",
                                                Port: "voluptates",
                                                Project: "dolores",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nam",
                                                IPProtocol: "udp",
                                                Kind: "pariatur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ipsum",
                                                Port: "voluptatem",
                                                Project: "quia",
                                                Region: "blanditiis",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Location: "facere",
                                    Rrdatas: []string{
                                        "necessitatibus",
                                        "at",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                        "ut",
                                        "et",
                                    },
                                },
                            },
                            Kind: "sed",
                        },
                        Kind: "veritatis",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aspernatur",
                                                    IPProtocol: "undefined",
                                                    Kind: "voluptatum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "libero",
                                                    Port: "non",
                                                    Project: "possimus",
                                                    Region: "ut",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "esse",
                                                    IPProtocol: "udp",
                                                    Kind: "quae",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "qui",
                                                    Port: "ad",
                                                    Project: "vel",
                                                    Region: "minima",
                                                },
                                            },
                                        },
                                        Kind: "qui",
                                        Location: "qui",
                                        Rrdatas: []string{
                                            "earum",
                                            "asperiores",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolores",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "tcp",
                                                    Kind: "quam",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dignissimos",
                                                    Port: "quo",
                                                    Project: "sint",
                                                    Region: "sit",
                                                },
                                            },
                                        },
                                        Kind: "ducimus",
                                        Location: "quo",
                                        Rrdatas: []string{
                                            "recusandae",
                                        },
                                        SignatureRrdatas: []string{
                                            "blanditiis",
                                            "labore",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "natus",
                                                    IPProtocol: "udp",
                                                    Kind: "praesentium",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "accusantium",
                                                    Port: "in",
                                                    Project: "voluptatum",
                                                    Region: "reprehenderit",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "veniam",
                                                    IPProtocol: "tcp",
                                                    Kind: "ut",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "corrupti",
                                                    Port: "labore",
                                                    Project: "est",
                                                    Region: "similique",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aliquam",
                                                    IPProtocol: "tcp",
                                                    Kind: "hic",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "qui",
                                                    Port: "praesentium",
                                                    Project: "voluptates",
                                                    Region: "id",
                                                },
                                            },
                                        },
                                        Kind: "non",
                                        Location: "ipsam",
                                        Rrdatas: []string{
                                            "explicabo",
                                            "suscipit",
                                            "sapiente",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolorem",
                                            "aut",
                                        },
                                    },
                                },
                                Kind: "molestiae",
                            },
                            Kind: "quod",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quos",
                                        IPProtocol: "udp",
                                        Kind: "incidunt",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "explicabo",
                                        Port: "fuga",
                                        Project: "dignissimos",
                                        Region: "perferendis",
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
                                                IPAddress: "quibusdam",
                                                IPProtocol: "udp",
                                                Kind: "vel",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "maiores",
                                                Port: "voluptatem",
                                                Project: "assumenda",
                                                Region: "vitae",
                                            },
                                        },
                                    },
                                    Kind: "harum",
                                    Rrdatas: []string{
                                        "illum",
                                    },
                                    SignatureRrdatas: []string{
                                        "quas",
                                        "ad",
                                        "adipisci",
                                    },
                                    Weight: 63.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorem",
                                                IPProtocol: "udp",
                                                Kind: "qui",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "possimus",
                                                Port: "rerum",
                                                Project: "odio",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "asperiores",
                                    Rrdatas: []string{
                                        "quam",
                                    },
                                    SignatureRrdatas: []string{
                                        "consequatur",
                                    },
                                    Weight: 37.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "udp",
                                                Kind: "non",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nihil",
                                                Port: "incidunt",
                                                Project: "dolore",
                                                Region: "asperiores",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "undefined",
                                                Kind: "ipsum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "molestiae",
                                                Port: "aut",
                                                Project: "voluptatum",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quae",
                                                IPProtocol: "undefined",
                                                Kind: "fuga",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "provident",
                                                Port: "velit",
                                                Project: "illo",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "sed",
                                    Rrdatas: []string{
                                        "expedita",
                                        "fugit",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                    },
                                    Weight: 2.200000,
                                },
                            },
                            Kind: "id",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
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
                                    Rrdatas: []string{
                                        "sunt",
                                        "tempore",
                                    },
                                    SignatureRrdatas: []string{
                                        "nihil",
                                        "odio",
                                        "voluptatem",
                                    },
                                    Weight: 89.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eum",
                                                IPProtocol: "undefined",
                                                Kind: "id",
                                                LoadBalancerType: "none",
                                                NetworkURL: "culpa",
                                                Port: "et",
                                                Project: "ut",
                                                Region: "aliquid",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maiores",
                                                IPProtocol: "tcp",
                                                Kind: "sunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dignissimos",
                                                Port: "qui",
                                                Project: "minus",
                                                Region: "quam",
                                            },
                                        },
                                    },
                                    Kind: "sint",
                                    Rrdatas: []string{
                                        "et",
                                        "enim",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "autem",
                                        "enim",
                                    },
                                    Weight: 32.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quasi",
                                                IPProtocol: "udp",
                                                Kind: "incidunt",
                                                LoadBalancerType: "none",
                                                NetworkURL: "cupiditate",
                                                Port: "repellat",
                                                Project: "nihil",
                                                Region: "totam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quisquam",
                                                IPProtocol: "udp",
                                                Kind: "laudantium",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "quos",
                                                Project: "ut",
                                                Region: "sit",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Rrdatas: []string{
                                        "iure",
                                        "qui",
                                        "natus",
                                    },
                                    SignatureRrdatas: []string{
                                        "in",
                                        "voluptatem",
                                        "iure",
                                    },
                                    Weight: 51.099998,
                                },
                            },
                            Kind: "totam",
                        },
                    },
                    Rrdatas: []string{
                        "sunt",
                        "enim",
                    },
                    SignatureRrdatas: []string{
                        "deleniti",
                        "qui",
                        "est",
                    },
                    TTL: 3318588796192658104,
                    Type: "tenetur",
                },
                shared.ResourceRecordSet{
                    Kind: "cumque",
                    Name: "reprehenderit",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maxime",
                                                IPProtocol: "tcp",
                                                Kind: "dolor",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "maiores",
                                                Port: "repudiandae",
                                                Project: "est",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "udp",
                                                Kind: "soluta",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "recusandae",
                                                Port: "velit",
                                                Project: "vel",
                                                Region: "ea",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "tcp",
                                                Kind: "nam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "cum",
                                                Project: "sed",
                                                Region: "numquam",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Location: "consequuntur",
                                    Rrdatas: []string{
                                        "quis",
                                    },
                                    SignatureRrdatas: []string{
                                        "modi",
                                        "quidem",
                                        "et",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "tcp",
                                                Kind: "odit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ab",
                                                Port: "commodi",
                                                Project: "deleniti",
                                                Region: "saepe",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ad",
                                                IPProtocol: "undefined",
                                                Kind: "non",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sunt",
                                                Port: "tempore",
                                                Project: "ratione",
                                                Region: "delectus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolores",
                                                IPProtocol: "tcp",
                                                Kind: "non",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "reprehenderit",
                                                Port: "quod",
                                                Project: "doloribus",
                                                Region: "nihil",
                                            },
                                        },
                                    },
                                    Kind: "commodi",
                                    Location: "consequatur",
                                    Rrdatas: []string{
                                        "reprehenderit",
                                        "tempore",
                                    },
                                    SignatureRrdatas: []string{
                                        "nulla",
                                        "soluta",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "udp",
                                                Kind: "omnis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "id",
                                                Port: "rerum",
                                                Project: "porro",
                                                Region: "minima",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dignissimos",
                                                IPProtocol: "udp",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "laboriosam",
                                                Project: "quaerat",
                                                Region: "at",
                                            },
                                        },
                                    },
                                    Kind: "voluptatem",
                                    Location: "voluptas",
                                    Rrdatas: []string{
                                        "sint",
                                    },
                                    SignatureRrdatas: []string{
                                        "incidunt",
                                        "ad",
                                        "explicabo",
                                    },
                                },
                            },
                            Kind: "sunt",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "udp",
                                                Kind: "modi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "ut",
                                                Project: "temporibus",
                                                Region: "sint",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "undefined",
                                                Kind: "quia",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "minus",
                                                Port: "provident",
                                                Project: "aut",
                                                Region: "illo",
                                            },
                                        },
                                    },
                                    Kind: "minima",
                                    Location: "aspernatur",
                                    Rrdatas: []string{
                                        "ut",
                                    },
                                    SignatureRrdatas: []string{
                                        "non",
                                        "aliquam",
                                        "ipsa",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "totam",
                                                IPProtocol: "tcp",
                                                Kind: "temporibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "rerum",
                                                Port: "ea",
                                                Project: "ea",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "undefined",
                                                Kind: "sit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "animi",
                                                Port: "aperiam",
                                                Project: "omnis",
                                                Region: "necessitatibus",
                                            },
                                        },
                                    },
                                    Kind: "consectetur",
                                    Location: "repudiandae",
                                    Rrdatas: []string{
                                        "aut",
                                        "magni",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                        "sit",
                                    },
                                },
                            },
                            Kind: "expedita",
                        },
                        Kind: "sunt",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "culpa",
                                                    IPProtocol: "udp",
                                                    Kind: "architecto",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "rerum",
                                                    Port: "veniam",
                                                    Project: "quis",
                                                    Region: "aliquam",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quam",
                                                    IPProtocol: "tcp",
                                                    Kind: "sequi",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "et",
                                                    Port: "maiores",
                                                    Project: "ducimus",
                                                    Region: "distinctio",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "neque",
                                                    IPProtocol: "undefined",
                                                    Kind: "libero",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "et",
                                                    Port: "rerum",
                                                    Project: "accusamus",
                                                    Region: "reprehenderit",
                                                },
                                            },
                                        },
                                        Kind: "a",
                                        Location: "odio",
                                        Rrdatas: []string{
                                            "placeat",
                                            "consectetur",
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
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quis",
                                        IPProtocol: "undefined",
                                        Kind: "suscipit",
                                        LoadBalancerType: "none",
                                        NetworkURL: "et",
                                        Port: "quasi",
                                        Project: "at",
                                        Region: "non",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "atque",
                                        IPProtocol: "tcp",
                                        Kind: "rem",
                                        LoadBalancerType: "none",
                                        NetworkURL: "quisquam",
                                        Port: "nulla",
                                        Project: "enim",
                                        Region: "repellat",
                                    },
                                },
                            },
                            TrickleTraffic: 2.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
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
                                    Rrdatas: []string{
                                        "sit",
                                        "sapiente",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "itaque",
                                    },
                                    Weight: 17.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "tcp",
                                                Kind: "repellendus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "ea",
                                                Project: "maiores",
                                                Region: "blanditiis",
                                            },
                                        },
                                    },
                                    Kind: "qui",
                                    Rrdatas: []string{
                                        "distinctio",
                                        "necessitatibus",
                                        "nostrum",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "nihil",
                                    },
                                    Weight: 68.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "animi",
                                                IPProtocol: "undefined",
                                                Kind: "veritatis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "rerum",
                                                Port: "minus",
                                                Project: "ab",
                                                Region: "assumenda",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fuga",
                                                IPProtocol: "udp",
                                                Kind: "quam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "perspiciatis",
                                                Port: "porro",
                                                Project: "ut",
                                                Region: "aut",
                                            },
                                        },
                                    },
                                    Kind: "quas",
                                    Rrdatas: []string{
                                        "iusto",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestias",
                                    },
                                    Weight: 64.099998,
                                },
                            },
                            Kind: "hic",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aliquam",
                                                IPProtocol: "tcp",
                                                Kind: "ab",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ullam",
                                                Port: "dignissimos",
                                                Project: "earum",
                                                Region: "quas",
                                            },
                                        },
                                    },
                                    Kind: "dolor",
                                    Rrdatas: []string{
                                        "ducimus",
                                        "eaque",
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "corporis",
                                        "optio",
                                    },
                                    Weight: 70.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
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
                            },
                            Kind: "esse",
                        },
                    },
                    Rrdatas: []string{
                        "nihil",
                        "ea",
                        "doloremque",
                    },
                    SignatureRrdatas: []string{
                        "iusto",
                        "quia",
                        "molestiae",
                    },
                    TTL: 7416029011066324050,
                    Type: "sed",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "harum",
                    Name: "quasi",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "tcp",
                                                Kind: "provident",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "vero",
                                                Port: "repudiandae",
                                                Project: "sapiente",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "tcp",
                                                Kind: "sunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "incidunt",
                                                Port: "provident",
                                                Project: "voluptas",
                                                Region: "assumenda",
                                            },
                                        },
                                    },
                                    Kind: "sunt",
                                    Location: "nemo",
                                    Rrdatas: []string{
                                        "quia",
                                        "voluptatem",
                                        "culpa",
                                    },
                                    SignatureRrdatas: []string{
                                        "mollitia",
                                        "ex",
                                        "est",
                                    },
                                },
                            },
                            Kind: "molestiae",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "udp",
                                                Kind: "assumenda",
                                                LoadBalancerType: "none",
                                                NetworkURL: "enim",
                                                Port: "ipsam",
                                                Project: "id",
                                                Region: "autem",
                                            },
                                        },
                                    },
                                    Kind: "vitae",
                                    Location: "dolore",
                                    Rrdatas: []string{
                                        "et",
                                        "iusto",
                                        "deserunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "dolores",
                                    },
                                },
                            },
                            Kind: "architecto",
                        },
                        Kind: "recusandae",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ipsum",
                                                    IPProtocol: "udp",
                                                    Kind: "autem",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "ab",
                                                    Port: "impedit",
                                                    Project: "molestiae",
                                                    Region: "accusantium",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aut",
                                                    IPProtocol: "tcp",
                                                    Kind: "quo",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "tenetur",
                                                    Port: "assumenda",
                                                    Project: "voluptatum",
                                                    Region: "aut",
                                                },
                                            },
                                        },
                                        Kind: "possimus",
                                        Location: "maxime",
                                        Rrdatas: []string{
                                            "possimus",
                                            "ea",
                                        },
                                        SignatureRrdatas: []string{
                                            "perspiciatis",
                                            "natus",
                                            "saepe",
                                        },
                                    },
                                },
                                Kind: "natus",
                            },
                            Kind: "fugit",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "aut",
                                        IPProtocol: "udp",
                                        Kind: "ullam",
                                        LoadBalancerType: "none",
                                        NetworkURL: "porro",
                                        Port: "sit",
                                        Project: "modi",
                                        Region: "est",
                                    },
                                },
                            },
                            TrickleTraffic: 58.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "at",
                                                IPProtocol: "undefined",
                                                Kind: "fugiat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "soluta",
                                                Port: "exercitationem",
                                                Project: "repudiandae",
                                                Region: "possimus",
                                            },
                                        },
                                    },
                                    Kind: "rerum",
                                    Rrdatas: []string{
                                        "architecto",
                                    },
                                    SignatureRrdatas: []string{
                                        "debitis",
                                        "vel",
                                        "ullam",
                                    },
                                    Weight: 55.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "udp",
                                                Kind: "culpa",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "corrupti",
                                                Port: "aspernatur",
                                                Project: "hic",
                                                Region: "quasi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nesciunt",
                                                IPProtocol: "undefined",
                                                Kind: "odit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ipsam",
                                                Port: "minima",
                                                Project: "nostrum",
                                                Region: "voluptatem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sint",
                                                IPProtocol: "tcp",
                                                Kind: "quia",
                                                LoadBalancerType: "none",
                                                NetworkURL: "numquam",
                                                Port: "dolores",
                                                Project: "consequatur",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "exercitationem",
                                    Rrdatas: []string{
                                        "sunt",
                                        "qui",
                                        "esse",
                                    },
                                    SignatureRrdatas: []string{
                                        "repudiandae",
                                        "sequi",
                                    },
                                    Weight: 16.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "undefined",
                                                Kind: "a",
                                                LoadBalancerType: "none",
                                                NetworkURL: "velit",
                                                Port: "voluptatem",
                                                Project: "ab",
                                                Region: "ab",
                                            },
                                        },
                                    },
                                    Kind: "illo",
                                    Rrdatas: []string{
                                        "enim",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "commodi",
                                        "suscipit",
                                    },
                                    Weight: 62.200001,
                                },
                            },
                            Kind: "ea",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "undefined",
                                                Kind: "modi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "neque",
                                                Port: "itaque",
                                                Project: "nam",
                                                Region: "possimus",
                                            },
                                        },
                                    },
                                    Kind: "aspernatur",
                                    Rrdatas: []string{
                                        "magnam",
                                        "cum",
                                        "dolorum",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                        "dolor",
                                    },
                                    Weight: 71.099998,
                                },
                            },
                            Kind: "cum",
                        },
                    },
                    Rrdatas: []string{
                        "aut",
                    },
                    SignatureRrdatas: []string{
                        "dignissimos",
                        "et",
                    },
                    TTL: 8043746319935387722,
                    Type: "omnis",
                },
                shared.ResourceRecordSet{
                    Kind: "magni",
                    Name: "voluptas",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "optio",
                                                IPProtocol: "tcp",
                                                Kind: "debitis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dolorum",
                                                Port: "aperiam",
                                                Project: "velit",
                                                Region: "magni",
                                            },
                                        },
                                    },
                                    Kind: "facilis",
                                    Location: "dolorem",
                                    Rrdatas: []string{
                                        "alias",
                                        "non",
                                    },
                                    SignatureRrdatas: []string{
                                        "iusto",
                                        "optio",
                                        "eligendi",
                                    },
                                },
                            },
                            Kind: "in",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consequatur",
                                                IPProtocol: "tcp",
                                                Kind: "sequi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "pariatur",
                                                Port: "qui",
                                                Project: "aut",
                                                Region: "est",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nulla",
                                                IPProtocol: "undefined",
                                                Kind: "totam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "porro",
                                                Port: "repellendus",
                                                Project: "sit",
                                                Region: "necessitatibus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "undefined",
                                                Kind: "ratione",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sunt",
                                                Port: "quo",
                                                Project: "iste",
                                                Region: "commodi",
                                            },
                                        },
                                    },
                                    Kind: "aspernatur",
                                    Location: "expedita",
                                    Rrdatas: []string{
                                        "voluptatem",
                                    },
                                    SignatureRrdatas: []string{
                                        "minus",
                                        "nesciunt",
                                    },
                                },
                            },
                            Kind: "qui",
                        },
                        Kind: "ducimus",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
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
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "deserunt",
                                                    IPProtocol: "undefined",
                                                    Kind: "eligendi",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quasi",
                                                    Port: "sed",
                                                    Project: "fuga",
                                                    Region: "recusandae",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusamus",
                                                    IPProtocol: "undefined",
                                                    Kind: "cupiditate",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quam",
                                                    Port: "voluptas",
                                                    Project: "odit",
                                                    Region: "in",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "qui",
                                                    IPProtocol: "tcp",
                                                    Kind: "dicta",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "voluptatem",
                                                    Port: "et",
                                                    Project: "quibusdam",
                                                    Region: "blanditiis",
                                                },
                                            },
                                        },
                                        Kind: "neque",
                                        Location: "soluta",
                                        Rrdatas: []string{
                                            "minima",
                                        },
                                        SignatureRrdatas: []string{
                                            "et",
                                            "ratione",
                                            "veniam",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minima",
                                                    IPProtocol: "undefined",
                                                    Kind: "corporis",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quia",
                                                    Port: "tempore",
                                                    Project: "quo",
                                                    Region: "qui",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "laborum",
                                                    IPProtocol: "undefined",
                                                    Kind: "ex",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "perferendis",
                                                    Port: "dolores",
                                                    Project: "molestiae",
                                                    Region: "aperiam",
                                                },
                                            },
                                        },
                                        Kind: "maxime",
                                        Location: "amet",
                                        Rrdatas: []string{
                                            "quia",
                                        },
                                        SignatureRrdatas: []string{
                                            "cupiditate",
                                        },
                                    },
                                },
                                Kind: "excepturi",
                            },
                            Kind: "itaque",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolor",
                                        IPProtocol: "tcp",
                                        Kind: "excepturi",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "neque",
                                        Port: "dolores",
                                        Project: "reiciendis",
                                        Region: "et",
                                    },
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
                                },
                            },
                            TrickleTraffic: 23.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repellendus",
                                                IPProtocol: "udp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "neque",
                                                Port: "molestiae",
                                                Project: "tempora",
                                                Region: "praesentium",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "itaque",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aliquid",
                                                Port: "sit",
                                                Project: "aut",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "eos",
                                    Rrdatas: []string{
                                        "atque",
                                    },
                                    SignatureRrdatas: []string{
                                        "suscipit",
                                        "quis",
                                    },
                                    Weight: 25.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "udp",
                                                Kind: "illum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "repudiandae",
                                                Port: "et",
                                                Project: "dolorem",
                                                Region: "nesciunt",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "laborum",
                                                IPProtocol: "undefined",
                                                Kind: "dicta",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nisi",
                                                Port: "tempore",
                                                Project: "rerum",
                                                Region: "porro",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "architecto",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "veritatis",
                                                Port: "nihil",
                                                Project: "voluptas",
                                                Region: "molestias",
                                            },
                                        },
                                    },
                                    Kind: "enim",
                                    Rrdatas: []string{
                                        "in",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "qui",
                                    },
                                    Weight: 52.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloribus",
                                                IPProtocol: "udp",
                                                Kind: "repudiandae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "mollitia",
                                                Port: "aperiam",
                                                Project: "dignissimos",
                                                Region: "libero",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "tcp",
                                                Kind: "sed",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aliquid",
                                                Port: "dolorem",
                                                Project: "sint",
                                                Region: "ipsam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facilis",
                                                IPProtocol: "undefined",
                                                Kind: "perspiciatis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ad",
                                                Port: "necessitatibus",
                                                Project: "amet",
                                                Region: "sed",
                                            },
                                        },
                                    },
                                    Kind: "ad",
                                    Rrdatas: []string{
                                        "amet",
                                        "quos",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquam",
                                        "est",
                                        "consequatur",
                                    },
                                    Weight: 34.200001,
                                },
                            },
                            Kind: "laudantium",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "undefined",
                                                Kind: "sed",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "porro",
                                                Port: "aut",
                                                Project: "velit",
                                                Region: "officiis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "soluta",
                                                IPProtocol: "undefined",
                                                Kind: "ullam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aliquam",
                                                Port: "quod",
                                                Project: "velit",
                                                Region: "at",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Rrdatas: []string{
                                        "dolores",
                                        "natus",
                                    },
                                    SignatureRrdatas: []string{
                                        "incidunt",
                                    },
                                    Weight: 91.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "perspiciatis",
                                                IPProtocol: "undefined",
                                                Kind: "fugit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "reprehenderit",
                                                Port: "eos",
                                                Project: "eum",
                                                Region: "aliquid",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "id",
                                                IPProtocol: "udp",
                                                Kind: "eius",
                                                LoadBalancerType: "none",
                                                NetworkURL: "distinctio",
                                                Port: "numquam",
                                                Project: "consectetur",
                                                Region: "dolor",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "tcp",
                                                Kind: "eum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "unde",
                                                Port: "fugiat",
                                                Project: "minima",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Rrdatas: []string{
                                        "ut",
                                        "vel",
                                        "magni",
                                    },
                                    SignatureRrdatas: []string{
                                        "maiores",
                                        "et",
                                    },
                                    Weight: 94.099998,
                                },
                            },
                            Kind: "odit",
                        },
                    },
                    Rrdatas: []string{
                        "illum",
                        "delectus",
                        "neque",
                    },
                    SignatureRrdatas: []string{
                        "vero",
                        "expedita",
                        "qui",
                    },
                    TTL: 2540094642934769455,
                    Type: "cum",
                },
            },
            ID: "qui",
            IsServing: true,
            Kind: "ratione",
            StartTime: "aliquam",
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