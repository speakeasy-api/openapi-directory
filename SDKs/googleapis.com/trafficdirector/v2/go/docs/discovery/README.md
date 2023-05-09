# Discovery

### Available Operations

* [TrafficdirectorDiscoveryClientStatus](#trafficdirectordiscoveryclientstatus)

## TrafficdirectorDiscoveryClientStatus

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Discovery.TrafficdirectorDiscoveryClientStatus(ctx, operations.TrafficdirectorDiscoveryClientStatusRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ClientStatusRequest: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: sdk.String("quidem"),
                        IgnoreCase: sdk.Bool(false),
                        Prefix: sdk.String("molestias"),
                        Regex: sdk.String("excepturi"),
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: sdk.Int64(865103),
                            },
                            Regex: sdk.String("modi"),
                        },
                        Suffix: sdk.String("praesentium"),
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("quasi"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("repudiandae"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("sint"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("veritatis"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(9292.97),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(2777.18),
                                        Start: sdk.Float64(3185.69),
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "est": "quibusdam",
                                },
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("explicabo"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("deserunt"),
                                    Regex: sdk.String("distinctio"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(841386),
                                        },
                                        Regex: sdk.String("labore"),
                                    },
                                    Suffix: sdk.String("modi"),
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("aliquid"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(5865.13),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(5528.22),
                                        Start: sdk.Float64(201.07),
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "assumenda": "ipsam",
                                },
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("alias"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("fugit"),
                                    Regex: sdk.String("dolorum"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(569618),
                                        },
                                        Regex: sdk.String("tempora"),
                                    },
                                    Suffix: sdk.String("facilis"),
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("labore"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("delectus"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("eum"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(2487.53),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(7561.07),
                                        Start: sdk.Float64(5761.57),
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "provident": "necessitatibus",
                                    "sint": "officia",
                                },
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("dolor"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("debitis"),
                                    Regex: sdk.String("a"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(680056),
                                        },
                                        Regex: sdk.String("in"),
                                    },
                                    Suffix: sdk.String("in"),
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("ea"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.TrafficdirectorDiscoveryClientStatusSecurity{
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
