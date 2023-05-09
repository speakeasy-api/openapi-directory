# PretargetingConfig

### Available Operations

* [AdexchangebuyerPretargetingConfigDelete](#adexchangebuyerpretargetingconfigdelete) - Deletes an existing pretargeting config.
* [AdexchangebuyerPretargetingConfigGet](#adexchangebuyerpretargetingconfigget) - Gets a specific pretargeting configuration
* [AdexchangebuyerPretargetingConfigInsert](#adexchangebuyerpretargetingconfiginsert) - Inserts a new pretargeting configuration.
* [AdexchangebuyerPretargetingConfigList](#adexchangebuyerpretargetingconfiglist) - Retrieves a list of the authenticated user's pretargeting configurations.
* [AdexchangebuyerPretargetingConfigPatch](#adexchangebuyerpretargetingconfigpatch) - Updates an existing pretargeting config. This method supports patch semantics.
* [AdexchangebuyerPretargetingConfigUpdate](#adexchangebuyerpretargetingconfigupdate) - Updates an existing pretargeting config.

## AdexchangebuyerPretargetingConfigDelete

Deletes an existing pretargeting config.

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
    res, err := s.PretargetingConfig.AdexchangebuyerPretargetingConfigDelete(ctx, operations.AdexchangebuyerPretargetingConfigDeleteRequest{
        AccountID: "sapiente",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "quis",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UserIP: sdk.String("architecto"),
    }, operations.AdexchangebuyerPretargetingConfigDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AdexchangebuyerPretargetingConfigGet

Gets a specific pretargeting configuration

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
    res, err := s.PretargetingConfig.AdexchangebuyerPretargetingConfigGet(ctx, operations.AdexchangebuyerPretargetingConfigGetRequest{
        AccountID: "sint",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "possimus",
        Fields: sdk.String("tempore"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UserIP: sdk.String("nemo"),
    }, operations.AdexchangebuyerPretargetingConfigGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## AdexchangebuyerPretargetingConfigInsert

Inserts a new pretargeting configuration.

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
    res, err := s.PretargetingConfig.AdexchangebuyerPretargetingConfigInsert(ctx, operations.AdexchangebuyerPretargetingConfigInsertRequest{
        PretargetingConfig: &shared.PretargetingConfig{
            BillingID: sdk.String("nobis"),
            ConfigID: sdk.String("debitis"),
            ConfigName: sdk.String("labore"),
            CreativeType: []string{
                "minima",
            },
            Dimensions: []shared.PretargetingConfigDimensions{
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("itaque"),
                    Width: sdk.String("error"),
                },
            },
            ExcludedContentLabels: []string{
                "error",
                "placeat",
                "temporibus",
            },
            ExcludedGeoCriteriaIds: []string{
                "earum",
                "minima",
            },
            ExcludedPlacements: []shared.PretargetingConfigExcludedPlacements{
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("odit"),
                    Type: sdk.String("eius"),
                },
            },
            ExcludedUserLists: []string{
                "vel",
                "dolorum",
                "alias",
            },
            ExcludedVerticals: []string{
                "ab",
                "sunt",
                "amet",
                "cum",
            },
            GeoCriteriaIds: []string{
                "corrupti",
                "non",
            },
            IsActive: sdk.Bool(false),
            Kind: sdk.String("esse"),
            Languages: []string{
                "eligendi",
                "minima",
                "omnis",
                "recusandae",
            },
            MaximumQPS: sdk.String("architecto"),
            MinimumViewabilityDecile: sdk.Int(974788),
            MobileCarriers: []string{
                "in",
                "repellat",
            },
            MobileDevices: []string{
                "cumque",
            },
            MobileOperatingSystemVersions: []string{
                "optio",
                "quo",
            },
            Placements: []shared.PretargetingConfigPlacements{
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("tempora"),
                    Type: sdk.String("libero"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("suscipit"),
                    Type: sdk.String("illum"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("iusto"),
                    Type: sdk.String("aliquid"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("sint"),
                    Type: sdk.String("aliquid"),
                },
            },
            Platforms: []string{
                "sapiente",
                "consectetur",
                "eligendi",
                "ullam",
            },
            SupportedCreativeAttributes: []string{
                "eius",
                "dignissimos",
            },
            UserIdentifierDataRequired: []string{
                "perferendis",
                "architecto",
            },
            UserLists: []string{
                "corporis",
            },
            VendorTypes: []string{
                "officiis",
                "dolore",
            },
            Verticals: []string{
                "maiores",
                "ipsam",
            },
            VideoPlayerSizes: []shared.PretargetingConfigVideoPlayerSizes{
                shared.PretargetingConfigVideoPlayerSizes{
                    AspectRatio: sdk.String("hic"),
                    MinHeight: sdk.String("praesentium"),
                    MinWidth: sdk.String("libero"),
                },
            },
        },
        AccountID: "consequatur",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("totam"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UserIP: sdk.String("sunt"),
    }, operations.AdexchangebuyerPretargetingConfigInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## AdexchangebuyerPretargetingConfigList

Retrieves a list of the authenticated user's pretargeting configurations.

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
    res, err := s.PretargetingConfig.AdexchangebuyerPretargetingConfigList(ctx, operations.AdexchangebuyerPretargetingConfigListRequest{
        AccountID: "omnis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quam"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UserIP: sdk.String("consectetur"),
    }, operations.AdexchangebuyerPretargetingConfigListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfigList != nil {
        // handle response
    }
}
```

## AdexchangebuyerPretargetingConfigPatch

Updates an existing pretargeting config. This method supports patch semantics.

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
    res, err := s.PretargetingConfig.AdexchangebuyerPretargetingConfigPatch(ctx, operations.AdexchangebuyerPretargetingConfigPatchRequest{
        PretargetingConfig: &shared.PretargetingConfig{
            BillingID: sdk.String("deserunt"),
            ConfigID: sdk.String("odit"),
            ConfigName: sdk.String("incidunt"),
            CreativeType: []string{
                "quaerat",
                "suscipit",
            },
            Dimensions: []shared.PretargetingConfigDimensions{
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("tenetur"),
                    Width: sdk.String("excepturi"),
                },
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("modi"),
                    Width: sdk.String("corrupti"),
                },
            },
            ExcludedContentLabels: []string{
                "eius",
                "placeat",
            },
            ExcludedGeoCriteriaIds: []string{
                "facere",
            },
            ExcludedPlacements: []shared.PretargetingConfigExcludedPlacements{
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("nobis"),
                    Type: sdk.String("porro"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("labore"),
                    Type: sdk.String("perspiciatis"),
                },
            },
            ExcludedUserLists: []string{
                "qui",
                "qui",
            },
            ExcludedVerticals: []string{
                "ratione",
            },
            GeoCriteriaIds: []string{
                "iure",
                "aliquid",
                "cum",
                "fugiat",
            },
            IsActive: sdk.Bool(false),
            Kind: sdk.String("rem"),
            Languages: []string{
                "officiis",
                "corporis",
                "repellendus",
                "aut",
            },
            MaximumQPS: sdk.String("voluptatem"),
            MinimumViewabilityDecile: sdk.Int(727789),
            MobileCarriers: []string{
                "odio",
                "omnis",
                "officiis",
            },
            MobileDevices: []string{
                "magni",
                "sit",
                "velit",
                "voluptatum",
            },
            MobileOperatingSystemVersions: []string{
                "neque",
                "aspernatur",
            },
            Placements: []shared.PretargetingConfigPlacements{
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("corporis"),
                    Type: sdk.String("cupiditate"),
                },
            },
            Platforms: []string{
                "impedit",
            },
            SupportedCreativeAttributes: []string{
                "quo",
                "architecto",
                "voluptatem",
                "perspiciatis",
            },
            UserIdentifierDataRequired: []string{
                "eius",
                "aperiam",
            },
            UserLists: []string{
                "non",
            },
            VendorTypes: []string{
                "sequi",
            },
            Verticals: []string{
                "ipsum",
                "debitis",
                "quis",
            },
            VideoPlayerSizes: []shared.PretargetingConfigVideoPlayerSizes{
                shared.PretargetingConfigVideoPlayerSizes{
                    AspectRatio: sdk.String("incidunt"),
                    MinHeight: sdk.String("ut"),
                    MinWidth: sdk.String("delectus"),
                },
            },
        },
        AccountID: "aliquid",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "ullam",
        Fields: sdk.String("maiores"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UserIP: sdk.String("assumenda"),
    }, operations.AdexchangebuyerPretargetingConfigPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```

## AdexchangebuyerPretargetingConfigUpdate

Updates an existing pretargeting config.

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
    res, err := s.PretargetingConfig.AdexchangebuyerPretargetingConfigUpdate(ctx, operations.AdexchangebuyerPretargetingConfigUpdateRequest{
        PretargetingConfig: &shared.PretargetingConfig{
            BillingID: sdk.String("cumque"),
            ConfigID: sdk.String("ut"),
            ConfigName: sdk.String("quae"),
            CreativeType: []string{
                "quam",
                "assumenda",
            },
            Dimensions: []shared.PretargetingConfigDimensions{
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("cumque"),
                    Width: sdk.String("placeat"),
                },
            },
            ExcludedContentLabels: []string{
                "tenetur",
            },
            ExcludedGeoCriteriaIds: []string{
                "accusantium",
                "corrupti",
            },
            ExcludedPlacements: []shared.PretargetingConfigExcludedPlacements{
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("earum"),
                    Type: sdk.String("impedit"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("dicta"),
                    Type: sdk.String("corporis"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("impedit"),
                    Type: sdk.String("eveniet"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("cum"),
                    Type: sdk.String("dolore"),
                },
            },
            ExcludedUserLists: []string{
                "ea",
                "officiis",
                "quasi",
                "accusamus",
            },
            ExcludedVerticals: []string{
                "necessitatibus",
                "voluptatem",
                "maiores",
            },
            GeoCriteriaIds: []string{
                "veniam",
                "fuga",
            },
            IsActive: sdk.Bool(false),
            Kind: sdk.String("itaque"),
            Languages: []string{
                "tenetur",
                "sed",
                "deserunt",
                "eligendi",
            },
            MaximumQPS: sdk.String("id"),
            MinimumViewabilityDecile: sdk.Int(719077),
            MobileCarriers: []string{
                "quas",
                "soluta",
            },
            MobileDevices: []string{
                "unde",
                "et",
                "quisquam",
            },
            MobileOperatingSystemVersions: []string{
                "sed",
                "suscipit",
                "facere",
            },
            Placements: []shared.PretargetingConfigPlacements{
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("nam"),
                    Type: sdk.String("quaerat"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("corrupti"),
                    Type: sdk.String("sint"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("eius"),
                    Type: sdk.String("vel"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("quasi"),
                    Type: sdk.String("vero"),
                },
            },
            Platforms: []string{
                "numquam",
                "fugit",
            },
            SupportedCreativeAttributes: []string{
                "optio",
            },
            UserIdentifierDataRequired: []string{
                "recusandae",
                "commodi",
                "possimus",
            },
            UserLists: []string{
                "veniam",
                "sit",
                "fugit",
            },
            VendorTypes: []string{
                "consequatur",
                "vero",
                "id",
                "error",
            },
            Verticals: []string{
                "perferendis",
            },
            VideoPlayerSizes: []shared.PretargetingConfigVideoPlayerSizes{
                shared.PretargetingConfigVideoPlayerSizes{
                    AspectRatio: sdk.String("voluptas"),
                    MinHeight: sdk.String("sint"),
                    MinWidth: sdk.String("maiores"),
                },
                shared.PretargetingConfigVideoPlayerSizes{
                    AspectRatio: sdk.String("nihil"),
                    MinHeight: sdk.String("fuga"),
                    MinWidth: sdk.String("cumque"),
                },
                shared.PretargetingConfigVideoPlayerSizes{
                    AspectRatio: sdk.String("consequuntur"),
                    MinHeight: sdk.String("maiores"),
                    MinWidth: sdk.String("esse"),
                },
            },
        },
        AccountID: "explicabo",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "delectus",
        Fields: sdk.String("quos"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UserIP: sdk.String("voluptatem"),
    }, operations.AdexchangebuyerPretargetingConfigUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PretargetingConfig != nil {
        // handle response
    }
}
```
