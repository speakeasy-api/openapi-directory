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
            AccessToken: "rerum",
            Alt: "json",
            Callback: "fuga",
            Fields: "deleniti",
            Key: "et",
            OauthToken: "esse",
            PrettyPrint: true,
            QuotaUser: "eum",
            UploadType: "impedit",
            UploadProtocol: "non",
        },
        Request: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "possimus",
                        IgnoreCase: false,
                        Prefix: "eum",
                        Regex: "omnis",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 801344521399143500,
                            },
                            Regex: "officiis",
                        },
                        Suffix: "aut",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "qui",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 15.100000,
                                    Range: &shared.DoubleRange{
                                        End: 85.099998,
                                        Start: 65.199997,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "laudantium": "rerum",
                                    "et": "officiis",
                                    "ipsa": "voluptatem",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "est",
                                    IgnoreCase: true,
                                    Prefix: "illum",
                                    Regex: "quibusdam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 2297128530979691075,
                                        },
                                        Regex: "enim",
                                    },
                                    Suffix: "qui",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "ut",
                                },
                                shared.PathSegment{
                                    Key: "corporis",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 37.200001,
                                    Range: &shared.DoubleRange{
                                        End: 38.099998,
                                        Start: 44.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "velit": "quas",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "minima",
                                    IgnoreCase: false,
                                    Prefix: "quod",
                                    Regex: "saepe",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 5738798814881421699,
                                        },
                                        Regex: "qui",
                                    },
                                    Suffix: "ea",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "corrupti",
                                },
                                shared.PathSegment{
                                    Key: "sit",
                                },
                                shared.PathSegment{
                                    Key: "cumque",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 1.200000,
                                    Range: &shared.DoubleRange{
                                        End: 55.099998,
                                        Start: 77.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "sapiente": "odit",
                                    "est": "non",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "eum",
                                    IgnoreCase: false,
                                    Prefix: "sit",
                                    Regex: "accusantium",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 8481447222394835110,
                                        },
                                        Regex: "illum",
                                    },
                                    Suffix: "et",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "qui",
                        IgnoreCase: false,
                        Prefix: "et",
                        Regex: "sed",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 2385077128595817332,
                            },
                            Regex: "nesciunt",
                        },
                        Suffix: "facilis",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "nostrum",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 13.200000,
                                    Range: &shared.DoubleRange{
                                        End: 78.099998,
                                        Start: 22.200001,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "et": "maxime",
                                    "eos": "vero",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "magni",
                                    IgnoreCase: false,
                                    Prefix: "quis",
                                    Regex: "suscipit",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 2975408353815645467,
                                        },
                                        Regex: "omnis",
                                    },
                                    Suffix: "perferendis",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "molestias",
                                },
                                shared.PathSegment{
                                    Key: "soluta",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 82.099998,
                                    Range: &shared.DoubleRange{
                                        End: 16.200001,
                                        Start: 83.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "earum": "atque",
                                    "est": "at",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "quisquam",
                                    IgnoreCase: false,
                                    Prefix: "voluptatem",
                                    Regex: "quibusdam",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 2614919038132016322,
                                        },
                                        Regex: "est",
                                    },
                                    Suffix: "placeat",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "cupiditate",
                        IgnoreCase: false,
                        Prefix: "neque",
                        Regex: "occaecati",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 4601631252330064062,
                            },
                            Regex: "enim",
                        },
                        Suffix: "perspiciatis",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "distinctio",
                                },
                                shared.PathSegment{
                                    Key: "dolor",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 72.199997,
                                    Range: &shared.DoubleRange{
                                        End: 90.099998,
                                        Start: 75.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "voluptates": "et",
                                    "sed": "mollitia",
                                    "eum": "dolore",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "perspiciatis",
                                    IgnoreCase: false,
                                    Prefix: "omnis",
                                    Regex: "eligendi",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 3967219848098404836,
                                        },
                                        Regex: "officiis",
                                    },
                                    Suffix: "minima",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Discovery.TrafficdirectorDiscoveryClientStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientStatusResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->