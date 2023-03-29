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
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "eum",
                        IgnoreCase: false,
                        Prefix: "iusto",
                        Regex: "ullam",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 891773,
                            },
                            Regex: "inventore",
                        },
                        Suffix: "sapiente",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "voluptatum",
                                },
                                shared.PathSegment{
                                    Key: "autem",
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
                                    "reprehenderit": "molestiae",
                                    "quo": "quasi",
                                    "laboriosam": "dicta",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "est",
                                    IgnoreCase: false,
                                    Prefix: "voluptatem",
                                    Regex: "consequatur",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 832620,
                                        },
                                        Regex: "a",
                                    },
                                    Suffix: "omnis",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "accusamus",
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
                                    "et": "praesentium",
                                    "occaecati": "dolor",
                                    "soluta": "sed",
                                    "quisquam": "rerum",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "culpa",
                                    IgnoreCase: false,
                                    Prefix: "qui",
                                    Regex: "sed",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 944669,
                                        },
                                        Regex: "possimus",
                                    },
                                    Suffix: "occaecati",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "odit",
                        IgnoreCase: false,
                        Prefix: "esse",
                        Regex: "rem",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 264555,
                            },
                            Regex: "amet",
                        },
                        Suffix: "est",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "numquam",
                                },
                                shared.PathSegment{
                                    Key: "similique",
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
                                    "voluptatem": "laborum",
                                    "modi": "et",
                                    "iure": "earum",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "ut",
                                    IgnoreCase: false,
                                    Prefix: "soluta",
                                    Regex: "qui",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 359508,
                                        },
                                        Regex: "laborum",
                                    },
                                    Suffix: "iusto",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "optio",
                                },
                                shared.PathSegment{
                                    Key: "aspernatur",
                                },
                                shared.PathSegment{
                                    Key: "inventore",
                                },
                                shared.PathSegment{
                                    Key: "ut",
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
                                    "non": "ea",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "magni",
                                    IgnoreCase: false,
                                    Prefix: "placeat",
                                    Regex: "ipsam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 607831,
                                        },
                                        Regex: "commodi",
                                    },
                                    Suffix: "quia",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "eaque",
                                },
                                shared.PathSegment{
                                    Key: "odio",
                                },
                                shared.PathSegment{
                                    Key: "harum",
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
                                    "non": "quidem",
                                    "neque": "asperiores",
                                    "et": "culpa",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "aliquam",
                                    IgnoreCase: false,
                                    Prefix: "esse",
                                    Regex: "totam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 474697,
                                        },
                                        Regex: "et",
                                    },
                                    Suffix: "fuga",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "nesciunt",
                        IgnoreCase: false,
                        Prefix: "laboriosam",
                        Regex: "aut",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 674752,
                            },
                            Regex: "expedita",
                        },
                        Suffix: "ipsam",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "adipisci",
                                },
                                shared.PathSegment{
                                    Key: "hic",
                                },
                                shared.PathSegment{
                                    Key: "consequatur",
                                },
                                shared.PathSegment{
                                    Key: "distinctio",
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
                                    "quo": "tempore",
                                    "explicabo": "aut",
                                    "reiciendis": "debitis",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "totam",
                                    IgnoreCase: false,
                                    Prefix: "molestias",
                                    Regex: "reiciendis",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 55714,
                                        },
                                        Regex: "id",
                                    },
                                    Suffix: "qui",
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