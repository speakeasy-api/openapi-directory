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
            ManagedZone: "sit",
            Project: "voluptas",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "proto",
            Callback: "dolor",
            ClientOperationID: "expedita",
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "et",
                    Name: "ut",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "undefined",
                                                Kind: "totam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "illum",
                                                Port: "debitis",
                                                Project: "vel",
                                                Region: "odio",
                                            },
                                        },
                                    },
                                    Kind: "dolore",
                                    Location: "id",
                                    Rrdatas: []string{
                                        "accusantium",
                                    },
                                    SignatureRrdatas: []string{
                                        "commodi",
                                        "quis",
                                        "est",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "odit",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "illo",
                                                Project: "sed",
                                                Region: "officiis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "autem",
                                                IPProtocol: "undefined",
                                                Kind: "nobis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "qui",
                                                Port: "recusandae",
                                                Project: "at",
                                                Region: "ipsum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eveniet",
                                                IPProtocol: "tcp",
                                                Kind: "sint",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "exercitationem",
                                                Project: "aut",
                                                Region: "reprehenderit",
                                            },
                                        },
                                    },
                                    Kind: "tempore",
                                    Location: "maiores",
                                    Rrdatas: []string{
                                        "dolor",
                                        "beatae",
                                        "veritatis",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                        "omnis",
                                        "ipsum",
                                    },
                                },
                            },
                            Kind: "ex",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "tcp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "reprehenderit",
                                                Port: "qui",
                                                Project: "qui",
                                                Region: "unde",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "in",
                                                IPProtocol: "tcp",
                                                Kind: "qui",
                                                LoadBalancerType: "none",
                                                NetworkURL: "itaque",
                                                Port: "ab",
                                                Project: "neque",
                                                Region: "ullam",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Location: "accusantium",
                                    Rrdatas: []string{
                                        "architecto",
                                        "quam",
                                    },
                                    SignatureRrdatas: []string{
                                        "cumque",
                                    },
                                },
                            },
                            Kind: "soluta",
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
                                                    IPAddress: "optio",
                                                    IPProtocol: "undefined",
                                                    Kind: "earum",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "omnis",
                                                    Port: "ut",
                                                    Project: "consequatur",
                                                    Region: "dolor",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "commodi",
                                                    IPProtocol: "undefined",
                                                    Kind: "reprehenderit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "nostrum",
                                                    Port: "ut",
                                                    Project: "laboriosam",
                                                    Region: "sed",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "a",
                                                    IPProtocol: "undefined",
                                                    Kind: "aut",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "consequuntur",
                                                    Port: "laudantium",
                                                    Project: "autem",
                                                    Region: "ipsa",
                                                },
                                            },
                                        },
                                        Kind: "expedita",
                                        Location: "doloremque",
                                        Rrdatas: []string{
                                            "atque",
                                            "ratione",
                                        },
                                        SignatureRrdatas: []string{
                                            "explicabo",
                                            "ea",
                                            "maxime",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "perferendis",
                                                    IPProtocol: "undefined",
                                                    Kind: "rerum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quis",
                                                    Port: "cumque",
                                                    Project: "minima",
                                                    Region: "necessitatibus",
                                                },
                                            },
                                        },
                                        Kind: "est",
                                        Location: "quis",
                                        Rrdatas: []string{
                                            "labore",
                                        },
                                        SignatureRrdatas: []string{
                                            "impedit",
                                            "ad",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vel",
                                                    IPProtocol: "tcp",
                                                    Kind: "modi",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "tempora",
                                                    Port: "deserunt",
                                                    Project: "eaque",
                                                    Region: "sunt",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sit",
                                                    IPProtocol: "undefined",
                                                    Kind: "quis",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "vel",
                                                    Port: "placeat",
                                                    Project: "qui",
                                                    Region: "nisi",
                                                },
                                            },
                                        },
                                        Kind: "quis",
                                        Location: "adipisci",
                                        Rrdatas: []string{
                                            "rerum",
                                            "et",
                                            "accusamus",
                                        },
                                        SignatureRrdatas: []string{
                                            "laborum",
                                            "rerum",
                                        },
                                    },
                                },
                                Kind: "ut",
                            },
                            Kind: "laborum",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quis",
                                        IPProtocol: "tcp",
                                        Kind: "soluta",
                                        LoadBalancerType: "none",
                                        NetworkURL: "consequuntur",
                                        Port: "excepturi",
                                        Project: "mollitia",
                                        Region: "inventore",
                                    },
                                },
                            },
                            TrickleTraffic: 29.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "undefined",
                                                Kind: "fuga",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sed",
                                                Port: "et",
                                                Project: "consequuntur",
                                                Region: "non",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cupiditate",
                                                IPProtocol: "udp",
                                                Kind: "molestiae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quasi",
                                                Port: "corrupti",
                                                Project: "enim",
                                                Region: "qui",
                                            },
                                        },
                                    },
                                    Kind: "sit",
                                    Rrdatas: []string{
                                        "modi",
                                        "neque",
                                        "consequuntur",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                    },
                                    Weight: 28.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "udp",
                                                Kind: "temporibus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quae",
                                                Port: "est",
                                                Project: "ut",
                                                Region: "necessitatibus",
                                            },
                                        },
                                    },
                                    Kind: "in",
                                    Rrdatas: []string{
                                        "voluptatem",
                                        "dolorum",
                                        "doloribus",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                        "earum",
                                        "et",
                                    },
                                    Weight: 88.099998,
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
                                                IPAddress: "quam",
                                                IPProtocol: "undefined",
                                                Kind: "nihil",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "suscipit",
                                                Port: "impedit",
                                                Project: "non",
                                                Region: "magnam",
                                            },
                                        },
                                    },
                                    Kind: "ut",
                                    Rrdatas: []string{
                                        "illo",
                                        "qui",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "ducimus",
                                        "enim",
                                        "blanditiis",
                                    },
                                    Weight: 84.099998,
                                },
                            },
                            Kind: "rerum",
                        },
                    },
                    Rrdatas: []string{
                        "repellat",
                        "velit",
                    },
                    SignatureRrdatas: []string{
                        "modi",
                        "sunt",
                        "voluptas",
                    },
                    TTL: 4286316651252402687,
                    Type: "et",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "qui",
                    Name: "excepturi",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rem",
                                                IPProtocol: "undefined",
                                                Kind: "quae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "recusandae",
                                                Port: "qui",
                                                Project: "minus",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "tcp",
                                                Kind: "rem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "reiciendis",
                                                Project: "aspernatur",
                                                Region: "praesentium",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "undefined",
                                                Kind: "adipisci",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "illum",
                                                Port: "accusantium",
                                                Project: "atque",
                                                Region: "amet",
                                            },
                                        },
                                    },
                                    Kind: "nisi",
                                    Location: "quidem",
                                    Rrdatas: []string{
                                        "quo",
                                        "vero",
                                    },
                                    SignatureRrdatas: []string{
                                        "totam",
                                    },
                                },
                            },
                            Kind: "deserunt",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "udp",
                                                Kind: "aut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "magni",
                                                Port: "necessitatibus",
                                                Project: "et",
                                                Region: "culpa",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "repellendus",
                                                IPProtocol: "undefined",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "architecto",
                                                Port: "molestias",
                                                Project: "rerum",
                                                Region: "quo",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "udp",
                                                Kind: "commodi",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quibusdam",
                                                Port: "asperiores",
                                                Project: "quo",
                                                Region: "ea",
                                            },
                                        },
                                    },
                                    Kind: "soluta",
                                    Location: "tempora",
                                    Rrdatas: []string{
                                        "blanditiis",
                                        "facere",
                                    },
                                    SignatureRrdatas: []string{
                                        "et",
                                        "odit",
                                        "est",
                                    },
                                },
                            },
                            Kind: "id",
                        },
                        Kind: "ipsum",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "vero",
                                                    IPProtocol: "tcp",
                                                    Kind: "ex",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "vero",
                                                    Port: "distinctio",
                                                    Project: "cumque",
                                                    Region: "ea",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "non",
                                                    IPProtocol: "udp",
                                                    Kind: "nam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quae",
                                                    Port: "qui",
                                                    Project: "magni",
                                                    Region: "minus",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sit",
                                                    IPProtocol: "tcp",
                                                    Kind: "neque",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "quia",
                                                    Port: "repudiandae",
                                                    Project: "debitis",
                                                    Region: "autem",
                                                },
                                            },
                                        },
                                        Kind: "odit",
                                        Location: "enim",
                                        Rrdatas: []string{
                                            "non",
                                            "nihil",
                                            "laborum",
                                        },
                                        SignatureRrdatas: []string{
                                            "nihil",
                                            "exercitationem",
                                            "iste",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "id",
                                                    IPProtocol: "undefined",
                                                    Kind: "hic",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "omnis",
                                                    Port: "libero",
                                                    Project: "qui",
                                                    Region: "omnis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minus",
                                                    IPProtocol: "undefined",
                                                    Kind: "non",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "repellat",
                                                    Port: "quo",
                                                    Project: "dolorum",
                                                    Region: "laboriosam",
                                                },
                                            },
                                        },
                                        Kind: "velit",
                                        Location: "ea",
                                        Rrdatas: []string{
                                            "fugit",
                                            "aut",
                                            "tempora",
                                        },
                                        SignatureRrdatas: []string{
                                            "mollitia",
                                            "non",
                                            "magni",
                                        },
                                    },
                                },
                                Kind: "recusandae",
                            },
                            Kind: "illum",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "dolores",
                                        IPProtocol: "udp",
                                        Kind: "nihil",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "ex",
                                        Port: "iure",
                                        Project: "et",
                                        Region: "quos",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "et",
                                        IPProtocol: "udp",
                                        Kind: "necessitatibus",
                                        LoadBalancerType: "none",
                                        NetworkURL: "qui",
                                        Port: "in",
                                        Project: "odit",
                                        Region: "molestias",
                                    },
                                },
                            },
                            TrickleTraffic: 4.200000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "mollitia",
                                                IPProtocol: "tcp",
                                                Kind: "laboriosam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "maiores",
                                                Port: "totam",
                                                Project: "iusto",
                                                Region: "aperiam",
                                            },
                                        },
                                    },
                                    Kind: "repellendus",
                                    Rrdatas: []string{
                                        "eum",
                                        "earum",
                                    },
                                    SignatureRrdatas: []string{
                                        "officia",
                                    },
                                    Weight: 32.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quaerat",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "recusandae",
                                                Port: "qui",
                                                Project: "qui",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "explicabo",
                                                IPProtocol: "udp",
                                                Kind: "temporibus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sed",
                                                Port: "voluptatem",
                                                Project: "vel",
                                                Region: "fugiat",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nesciunt",
                                                IPProtocol: "udp",
                                                Kind: "qui",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eligendi",
                                                Port: "velit",
                                                Project: "fuga",
                                                Region: "aliquid",
                                            },
                                        },
                                    },
                                    Kind: "vero",
                                    Rrdatas: []string{
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "sunt",
                                        "quae",
                                    },
                                    Weight: 4.200000,
                                },
                            },
                            Kind: "rerum",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "tcp",
                                                Kind: "enim",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ipsa",
                                                Port: "cum",
                                                Project: "sint",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eaque",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "quam",
                                                Project: "sit",
                                                Region: "voluptate",
                                            },
                                        },
                                    },
                                    Kind: "eaque",
                                    Rrdatas: []string{
                                        "et",
                                        "amet",
                                        "distinctio",
                                    },
                                    SignatureRrdatas: []string{
                                        "consectetur",
                                        "minima",
                                        "sequi",
                                    },
                                    Weight: 28.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "udp",
                                                Kind: "quam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolores",
                                                Port: "nihil",
                                                Project: "ullam",
                                                Region: "architecto",
                                            },
                                        },
                                    },
                                    Kind: "architecto",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "veniam",
                                        "hic",
                                    },
                                    SignatureRrdatas: []string{
                                        "veritatis",
                                        "architecto",
                                        "voluptas",
                                    },
                                    Weight: 56.099998,
                                },
                            },
                            Kind: "consectetur",
                        },
                    },
                    Rrdatas: []string{
                        "eos",
                        "praesentium",
                    },
                    SignatureRrdatas: []string{
                        "ipsum",
                        "natus",
                        "quas",
                    },
                    TTL: 6342274082021276992,
                    Type: "nostrum",
                },
            },
            ID: "quod",
            IsServing: false,
            Kind: "eius",
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
