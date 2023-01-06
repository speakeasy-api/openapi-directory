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
            AccessToken: "ipsa",
            Alt: "proto",
            Callback: "et",
            Fields: "accusamus",
            Key: "explicabo",
            OauthToken: "a",
            PrettyPrint: false,
            QuotaUser: "qui",
            UploadType: "ea",
            UploadProtocol: "consequatur",
        },
        Request: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: "facilis",
                        IgnoreCase: false,
                        Prefix: "enim",
                        Regex: "totam",
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: 6601151378819358293,
                            },
                            Regex: "qui",
                        },
                        Suffix: "distinctio",
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "est",
                                },
                                shared.PathSegment{
                                    Key: "ea",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 95.199997,
                                    Range: &shared.DoubleRange{
                                        End: 1.100000,
                                        Start: 97.199997,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "non": "natus",
                                },
                                PresentMatch: true,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "eaque",
                                    IgnoreCase: false,
                                    Prefix: "voluptatum",
                                    Regex: "omnis",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 8485313326292589126,
                                        },
                                        Regex: "non",
                                    },
                                    Suffix: "laudantium",
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: "deserunt",
                                },
                                shared.PathSegment{
                                    Key: "ut",
                                },
                                shared.PathSegment{
                                    Key: "ut",
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: false,
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: 11.200000,
                                    Range: &shared.DoubleRange{
                                        End: 2.200000,
                                        Start: 83.099998,
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{
                                    
                                    },
                                },
                                NullMatch: map[string]interface{}{
                                    "dolorum": "ut",
                                    "velit": "dignissimos",
                                },
                                PresentMatch: false,
                                StringMatch: &shared.StringMatcher{
                                    Exact: "in",
                                    IgnoreCase: false,
                                    Prefix: "consequatur",
                                    Regex: "nesciunt",
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: 3171180908382275538,
                                        },
                                        Regex: "labore",
                                    },
                                    Suffix: "sed",
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