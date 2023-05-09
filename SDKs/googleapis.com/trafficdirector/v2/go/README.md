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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClientStatusRequest: &shared.ClientStatusRequest{
            NodeMatchers: []shared.NodeMatcher{
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: sdk.String("distinctio"),
                        IgnoreCase: sdk.Bool(false),
                        Prefix: sdk.String("quibusdam"),
                        Regex: sdk.String("unde"),
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: sdk.Int64(857946),
                            },
                            Regex: sdk.String("corrupti"),
                        },
                        Suffix: sdk.String("illum"),
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("deserunt"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("suscipit"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("iure"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(2975.34),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(8917.73),
                                        Start: sdk.Float64(567.13),
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
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("nisi"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("recusandae"),
                                    Regex: sdk.String("temporibus"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(71036),
                                        },
                                        Regex: sdk.String("quis"),
                                    },
                                    Suffix: sdk.String("veritatis"),
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("perferendis"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("ipsam"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("repellendus"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(9571.56),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(7781.57),
                                        Start: sdk.Float64(1403.5),
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
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("dolorum"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("dicta"),
                                    Regex: sdk.String("nam"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(639921),
                                        },
                                        Regex: sdk.String("occaecati"),
                                    },
                                    Suffix: sdk.String("fugit"),
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: sdk.String("deleniti"),
                        IgnoreCase: sdk.Bool(false),
                        Prefix: sdk.String("hic"),
                        Regex: sdk.String("optio"),
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: sdk.Int64(521848),
                            },
                            Regex: sdk.String("beatae"),
                        },
                        Suffix: sdk.String("commodi"),
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("qui"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("impedit"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(7369.18),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(4561.5),
                                        Start: sdk.Float64(2165.5),
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
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("dolor"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("natus"),
                                    Regex: sdk.String("laboriosam"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(943749),
                                        },
                                        Regex: sdk.String("saepe"),
                                    },
                                    Suffix: sdk.String("fuga"),
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("corporis"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("iste"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(4370.32),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(9023.49),
                                        Start: sdk.Float64(6976.31),
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "ipsa": "reiciendis",
                                },
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("est"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("mollitia"),
                                    Regex: sdk.String("laborum"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(170909),
                                        },
                                        Regex: sdk.String("dolorem"),
                                    },
                                    Suffix: sdk.String("corporis"),
                                },
                            },
                        },
                    },
                },
                shared.NodeMatcher{
                    NodeID: &shared.StringMatcher{
                        Exact: sdk.String("explicabo"),
                        IgnoreCase: sdk.Bool(false),
                        Prefix: sdk.String("nobis"),
                        Regex: sdk.String("enim"),
                        SafeRegex: &shared.RegexMatcher{
                            GoogleRe2: &shared.GoogleRe2{
                                MaxProgramSize: sdk.Int64(607831),
                            },
                            Regex: sdk.String("nemo"),
                        },
                        Suffix: sdk.String("minima"),
                    },
                    NodeMetadatas: []shared.StructMatcher{
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("iure"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(6342.74),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(9883.74),
                                        Start: sdk.Float64(9589.5),
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "mollitia": "dolorem",
                                },
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("culpa"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("consequuntur"),
                                    Regex: sdk.String("repellat"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(653108),
                                        },
                                        Regex: sdk.String("occaecati"),
                                    },
                                    Suffix: sdk.String("numquam"),
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("quam"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("molestiae"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(2444.25),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(6235.1),
                                        Start: sdk.Float64(1589.69),
                                    },
                                },
                                ListMatch: &shared.ListMatcher{
                                    OneOf: &shared.ValueMatcher{},
                                },
                                NullMatch: map[string]interface{}{
                                    "vitae": "laborum",
                                    "animi": "enim",
                                },
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("odit"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("quo"),
                                    Regex: sdk.String("sequi"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(949572),
                                        },
                                        Regex: sdk.String("ipsam"),
                                    },
                                    Suffix: sdk.String("id"),
                                },
                            },
                        },
                        shared.StructMatcher{
                            Path: []shared.PathSegment{
                                shared.PathSegment{
                                    Key: sdk.String("aut"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("quasi"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("error"),
                                },
                                shared.PathSegment{
                                    Key: sdk.String("temporibus"),
                                },
                            },
                            Value: &shared.ValueMatcher{
                                BoolMatch: sdk.Bool(false),
                                DoubleMatch: &shared.DoubleMatcher{
                                    Exact: sdk.Float64(6736.6),
                                    Range: &shared.DoubleRange{
                                        End: sdk.Float64(960.98),
                                        Start: sdk.Float64(9719.45),
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
                                PresentMatch: sdk.Bool(false),
                                StringMatch: &shared.StringMatcher{
                                    Exact: sdk.String("perferendis"),
                                    IgnoreCase: sdk.Bool(false),
                                    Prefix: sdk.String("doloremque"),
                                    Regex: sdk.String("reprehenderit"),
                                    SafeRegex: &shared.RegexMatcher{
                                        GoogleRe2: &shared.GoogleRe2{
                                            MaxProgramSize: sdk.Int64(282807),
                                        },
                                        Regex: sdk.String("maiores"),
                                    },
                                    Suffix: sdk.String("dicta"),
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("repudiandae"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Discovery](docs/discovery/README.md)

* [TrafficdirectorDiscoveryClientStatus](docs/discovery/README.md#trafficdirectordiscoveryclientstatus)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
