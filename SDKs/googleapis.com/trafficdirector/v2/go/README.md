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
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UploadType: "et",
            UploadProtocol: "nihil",
        },
        Request: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "dicta",
                        IgnoreCase: true,
                        Prefix: "voluptatum",
                        Regex: "et",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 7144924247938981575,
                            },
                            Regex: "dolorem",
                        },
                        Suffix: "et",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "vitae",
                                },
                                shared.PathSegment{
                                    Key: "totam",
                                },
                                shared.PathSegment{
                                    Key: "dolores",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 86.099998,
                                    Range: &shared.DoubleRange{
                                        End: 20.200001,
                                        Start: 12.200000,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "totam": "commodi",
                                    "quis": "est",
                                    "aut": "odit",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "voluptas",
                                    IgnoreCase: true,
                                    Prefix: "aut",
                                    Regex: "illo",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 5558237345453186302,
                                        },
                                        Regex: "officiis",
                                    },
                                    Suffix: "autem",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "consectetur",
                        IgnoreCase: false,
                        Prefix: "odio",
                        Regex: "qui",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 388440063886460141,
                            },
                            Regex: "at",
                        },
                        Suffix: "ipsum",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "sint",
                                },
                                shared.PathSegment{
                                    Key: "inventore",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 56.099998,
                                    Range: &shared.DoubleRange{
                                        End: 30.200001,
                                        Start: 97.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "beatae": "veritatis",
                                    "in": "et",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "ipsum",
                                    IgnoreCase: true,
                                    Prefix: "dolores",
                                    Regex: "placeat",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 2118716725206170867,
                                        },
                                        Regex: "rerum",
                                    },
                                    Suffix: "mollitia",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "quam",
                                },
                                shared.PathSegment{
                                    Key: "reprehenderit",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 78.099998,
                                    Range: &shared.DoubleRange{
                                        End: 31.100000,
                                        Start: 13.100000,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "ab": "neque",
                                    "ullam": "et",
                                    "accusantium": "esse",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "quam",
                                    IgnoreCase: false,
                                    Prefix: "cumque",
                                    Regex: "soluta",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 759605945513541974,
                                        },
                                        Regex: "voluptates",
                                    },
                                    Suffix: "magni",
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "et",
                        IgnoreCase: true,
                        Prefix: "qui",
                        Regex: "earum",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 4391202566038595699,
                            },
                            Regex: "omnis",
                        },
                        Suffix: "ut",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "commodi",
                                },
                                shared.PathSegment{
                                    Key: "error",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 3.200000,
                                    Range: &shared.DoubleRange{
                                        End: 19.100000,
                                        Start: 80.199997,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "aut": "quas",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "laudantium",
                                    IgnoreCase: true,
                                    Prefix: "ipsa",
                                    Regex: "expedita",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 8204648627352676445,
                                        },
                                        Regex: "perferendis",
                                    },
                                    Suffix: "atque",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "quisquam",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 42.099998,
                                    Range: &shared.DoubleRange{
                                        End: 15.200000,
                                        Start: 66.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "quis": "cumque",
                                    "minima": "necessitatibus",
                                    "est": "quis",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "labore",
                                    IgnoreCase: false,
                                    Prefix: "impedit",
                                    Regex: "ad",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 8953538234431013647,
                                        },
                                        Regex: "vel",
                                    },
                                    Suffix: "qui",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "nihil",
                                },
                                shared.PathSegment{
                                    Key: "tempora",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: true,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 59.099998,
                                    Range: &shared.DoubleRange{
                                        End: 68.099998,
                                        Start: 66.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "placeat": "qui",
                                    "nisi": "quis",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "porro",
                                    IgnoreCase: true,
                                    Prefix: "et",
                                    Regex: "accusamus",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 7953274849279451463,
                                        },
                                        Regex: "laborum",
                                    },
                                    Suffix: "rerum",
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### discovery

* `TrafficdirectorDiscoveryClientStatus`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
