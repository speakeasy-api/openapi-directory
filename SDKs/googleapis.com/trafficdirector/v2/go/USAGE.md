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
        Security: operations.TrafficdirectorDiscoveryClientStatusSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.TrafficdirectorDiscoveryClientStatusQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "vel",
            UploadProtocol: "error",
        },
        Request: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "suscipit",
                        IgnoreCase: false,
                        Prefix: "iure",
                        Regex: "magnam",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 891773,
                            },
                            Regex: "ipsa",
                        },
                        Suffix: "delectus",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "molestiae",
                                },
                                shared.PathSegment{
                                    Key: "minus",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 8121.69,
                                    Range: &shared.DoubleRange{
                                        End: 5288.95,
                                        Start: 4799.77,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "nisi": "recusandae",
                                    "temporibus": "ab",
                                    "quis": "veritatis",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "deserunt",
                                    IgnoreCase: false,
                                    Prefix: "perferendis",
                                    Regex: "ipsam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 832620,
                                        },
                                        Regex: "sapiente",
                                    },
                                    Suffix: "quo",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "at",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 8700.88,
                                    Range: &shared.DoubleRange{
                                        End: 9786.19,
                                        Start: 4736.08,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "quod": "esse",
                                    "totam": "porro",
                                    "dolorum": "dicta",
                                    "nam": "officia",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "occaecati",
                                    IgnoreCase: false,
                                    Prefix: "fugit",
                                    Regex: "deleniti",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 944669,
                                        },
                                        Regex: "optio",
                                    },
                                    Suffix: "totam",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "beatae",
                        IgnoreCase: false,
                        Prefix: "commodi",
                        Regex: "molestiae",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 264555,
                            },
                            Regex: "qui",
                        },
                        Suffix: "impedit",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "ipsum",
                                },
                                shared.PathSegment{
                                    Key: "excepturi",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 1352.18,
                                    Range: &shared.DoubleRange{
                                        End: 187.89,
                                        Start: 3241.41,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "sed": "iste",
                                    "dolor": "natus",
                                    "laboriosam": "hic",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "saepe",
                                    IgnoreCase: false,
                                    Prefix: "fuga",
                                    Regex: "in",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 359508,
                                        },
                                        Regex: "iste",
                                    },
                                    Suffix: "iure",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "quidem",
                                },
                                shared.PathSegment{
                                    Key: "architecto",
                                },
                                shared.PathSegment{
                                    Key: "ipsa",
                                },
                                shared.PathSegment{
                                    Key: "reiciendis",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 6667.67,
                                    Range: &shared.DoubleRange{
                                        End: 6531.4,
                                        Start: 6706.38,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "dolorem": "corporis",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
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
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "accusantium",
                                },
                                shared.PathSegment{
                                    Key: "iure",
                                },
                                shared.PathSegment{
                                    Key: "culpa",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 9883.74,
                                    Range: &shared.DoubleRange{
                                        End: 9589.5,
                                        Start: 1020.44,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "dolorem": "culpa",
                                    "consequuntur": "repellat",
                                    "mollitia": "occaecati",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "numquam",
                                    IgnoreCase: false,
                                    Prefix: "commodi",
                                    Regex: "quam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 474697,
                                        },
                                        Regex: "velit",
                                    },
                                    Suffix: "error",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "quia",
                        IgnoreCase: false,
                        Prefix: "quis",
                        Regex: "vitae",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 674752,
                            },
                            Regex: "animi",
                        },
                        Suffix: "enim",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "sequi",
                                },
                                shared.PathSegment{
                                    Key: "tenetur",
                                },
                                shared.PathSegment{
                                    Key: "ipsam",
                                },
                                shared.PathSegment{
                                    Key: "id",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 8209.94,
                                    Range: &shared.DoubleRange{
                                        End: 135.71,
                                        Start: 971.01,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "temporibus": "laborum",
                                    "quasi": "reiciendis",
                                    "voluptatibus": "vero",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "nihil",
                                    IgnoreCase: false,
                                    Prefix: "praesentium",
                                    Regex: "voluptatibus",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 55714,
                                        },
                                        Regex: "omnis",
                                    },
                                    Suffix: "voluptate",
                                },
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Discovery.TrafficdirectorDiscoveryClientStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientStatusResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->