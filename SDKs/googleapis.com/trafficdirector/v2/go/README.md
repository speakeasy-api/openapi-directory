# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/trafficdirector/v2/go
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

    req := operations.TrafficdirectorDiscoveryClientStatusRequest{
        DollarXgafv: "2",
        ClientStatusRequest: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "distinctio",
                        IgnoreCase: false,
                        Prefix: "quibusdam",
                        Regex: "unde",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 857946,
                            },
                            Regex: "corrupti",
                        },
                        Suffix: "illum",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "deserunt",
                                },
                                shared.PathSegment{
                                    Key: "suscipit",
                                },
                                shared.PathSegment{
                                    Key: "iure",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 2975.34,
                                    Range: &shared.DoubleRange{
                                        End: 8917.73,
                                        Start: 567.13,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "tempora": "suscipit",
                                    "molestiae": "minus",
                                    "placeat": "voluptatum",
                                    "iusto": "excepturi",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "nisi",
                                    IgnoreCase: false,
                                    Prefix: "recusandae",
                                    Regex: "temporibus",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 71036,
                                        },
                                        Regex: "quis",
                                    },
                                    Suffix: "veritatis",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "perferendis",
                                },
                                shared.PathSegment{
                                    Key: "ipsam",
                                },
                                shared.PathSegment{
                                    Key: "repellendus",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 9571.56,
                                    Range: &shared.DoubleRange{
                                        End: 7781.57,
                                        Start: 1403.5,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "at": "maiores",
                                    "molestiae": "quod",
                                    "quod": "esse",
                                    "totam": "porro",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "dolorum",
                                    IgnoreCase: false,
                                    Prefix: "dicta",
                                    Regex: "nam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 639921,
                                        },
                                        Regex: "occaecati",
                                    },
                                    Suffix: "fugit",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "deleniti",
                        IgnoreCase: false,
                        Prefix: "hic",
                        Regex: "optio",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 521848,
                            },
                            Regex: "beatae",
                        },
                        Suffix: "commodi",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "qui",
                                },
                                shared.PathSegment{
                                    Key: "impedit",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 7369.18,
                                    Range: &shared.DoubleRange{
                                        End: 4561.5,
                                        Start: 2165.5,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "aspernatur": "perferendis",
                                    "ad": "natus",
                                    "sed": "iste",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "dolor",
                                    IgnoreCase: false,
                                    Prefix: "natus",
                                    Regex: "laboriosam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 943749,
                                        },
                                        Regex: "saepe",
                                    },
                                    Suffix: "fuga",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "corporis",
                                },
                                shared.PathSegment{
                                    Key: "iste",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 4370.32,
                                    Range: &shared.DoubleRange{
                                        End: 9023.49,
                                        Start: 6976.31,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "ipsa": "reiciendis",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "est",
                                    IgnoreCase: false,
                                    Prefix: "mollitia",
                                    Regex: "laborum",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 170909,
                                        },
                                        Regex: "dolorem",
                                    },
                                    Suffix: "corporis",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "explicabo",
                        IgnoreCase: false,
                        Prefix: "nobis",
                        Regex: "enim",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 607831,
                            },
                            Regex: "nemo",
                        },
                        Suffix: "minima",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "iure",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 6342.74,
                                    Range: &shared.DoubleRange{
                                        End: 9883.74,
                                        Start: 9589.5,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "mollitia": "dolorem",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "culpa",
                                    IgnoreCase: false,
                                    Prefix: "consequuntur",
                                    Regex: "repellat",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 653108,
                                        },
                                        Regex: "occaecati",
                                    },
                                    Suffix: "numquam",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "quam",
                                },
                                shared.PathSegment{
                                    Key: "molestiae",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 2444.25,
                                    Range: &shared.DoubleRange{
                                        End: 6235.1,
                                        Start: 1589.69,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "vitae": "laborum",
                                    "animi": "enim",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "odit",
                                    IgnoreCase: false,
                                    Prefix: "quo",
                                    Regex: "sequi",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 949572,
                                        },
                                        Regex: "ipsam",
                                    },
                                    Suffix: "id",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "aut",
                                },
                                shared.PathSegment{
                                    Key: "quasi",
                                },
                                shared.PathSegment{
                                    Key: "error",
                                },
                                shared.PathSegment{
                                    Key: "temporibus",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 6736.6,
                                    Range: &shared.DoubleRange{
                                        End: 960.98,
                                        Start: 9719.45,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "vero": "nihil",
                                    "praesentium": "voluptatibus",
                                    "ipsa": "omnis",
                                    "voluptate": "cum",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "perferendis",
                                    IgnoreCase: false,
                                    Prefix: "doloremque",
                                    Regex: "reprehenderit",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 282807,
                                        },
                                        Regex: "maiores",
                                    },
                                    Suffix: "dicta",
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: "corporis",
        Alt: "json",
        Callback: "iusto",
        Fields: "dicta",
        Key: "harum",
        OauthToken: "enim",
        PrettyPrint: false,
        QuotaUser: "accusamus",
        UploadType: "commodi",
        UploadProtocol: "repudiandae",
    }

    ctx := context.Background()
    res, err := s.Discovery.TrafficdirectorDiscoveryClientStatus(ctx, req, operations.TrafficdirectorDiscoveryClientStatusSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientStatusResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Discovery

* `TrafficdirectorDiscoveryClientStatus`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
