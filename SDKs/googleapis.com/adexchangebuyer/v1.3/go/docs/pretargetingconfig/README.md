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
        AccountID: "nam",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "eaque",
        Fields: sdk.String("pariatur"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UserIP: sdk.String("fugiat"),
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
        AccountID: "amet",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "aut",
        Fields: sdk.String("cumque"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UserIP: sdk.String("nobis"),
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
            BillingID: sdk.String("dolores"),
            ConfigID: sdk.String("quis"),
            ConfigName: sdk.String("totam"),
            CreativeType: []string{
                "eaque",
                "quis",
            },
            Dimensions: []shared.PretargetingConfigDimensions{
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("eos"),
                    Width: sdk.String("perferendis"),
                },
            },
            ExcludedContentLabels: []string{
                "minus",
            },
            ExcludedGeoCriteriaIds: []string{
                "dolor",
                "vero",
            },
            ExcludedPlacements: []shared.PretargetingConfigExcludedPlacements{
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("hic"),
                    Type: sdk.String("recusandae"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("omnis"),
                    Type: sdk.String("facilis"),
                },
            },
            ExcludedUserLists: []string{
                "voluptatem",
                "porro",
                "consequuntur",
            },
            ExcludedVerticals: []string{
                "error",
                "eaque",
                "occaecati",
            },
            GeoCriteriaIds: []string{
                "adipisci",
                "asperiores",
                "earum",
            },
            IsActive: sdk.Bool(false),
            Kind: sdk.String("modi"),
            Languages: []string{
                "dolorum",
                "deleniti",
                "pariatur",
            },
            MaximumQPS: sdk.String("provident"),
            MobileCarriers: []string{
                "libero",
                "delectus",
                "quaerat",
                "quos",
            },
            MobileDevices: []string{
                "dolorem",
                "dolorem",
            },
            MobileOperatingSystemVersions: []string{
                "qui",
            },
            Placements: []shared.PretargetingConfigPlacements{
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("hic"),
                    Type: sdk.String("excepturi"),
                },
            },
            Platforms: []string{
                "voluptate",
                "dignissimos",
                "reiciendis",
            },
            SupportedCreativeAttributes: []string{
                "dolorum",
            },
            UserLists: []string{
                "veritatis",
                "ipsa",
            },
            VendorTypes: []string{
                "iure",
            },
            Verticals: []string{
                "quaerat",
                "accusamus",
            },
        },
        AccountID: "quidem",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UserIP: sdk.String("atque"),
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
        AccountID: "sit",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UserIP: sdk.String("iusto"),
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
            BillingID: sdk.String("voluptate"),
            ConfigID: sdk.String("dolorum"),
            ConfigName: sdk.String("deleniti"),
            CreativeType: []string{
                "necessitatibus",
                "distinctio",
                "asperiores",
            },
            Dimensions: []shared.PretargetingConfigDimensions{
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("ipsum"),
                    Width: sdk.String("voluptate"),
                },
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("id"),
                    Width: sdk.String("saepe"),
                },
            },
            ExcludedContentLabels: []string{
                "aspernatur",
                "perferendis",
            },
            ExcludedGeoCriteriaIds: []string{
                "optio",
            },
            ExcludedPlacements: []shared.PretargetingConfigExcludedPlacements{
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("ad"),
                    Type: sdk.String("saepe"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("suscipit"),
                    Type: sdk.String("deserunt"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("provident"),
                    Type: sdk.String("minima"),
                },
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("repellendus"),
                    Type: sdk.String("totam"),
                },
            },
            ExcludedUserLists: []string{
                "alias",
                "at",
                "quaerat",
            },
            ExcludedVerticals: []string{
                "vel",
                "quod",
            },
            GeoCriteriaIds: []string{
                "qui",
                "dolorum",
                "a",
                "esse",
            },
            IsActive: sdk.Bool(false),
            Kind: sdk.String("harum"),
            Languages: []string{
                "ipsum",
                "quisquam",
            },
            MaximumQPS: sdk.String("tenetur"),
            MobileCarriers: []string{
                "tempore",
            },
            MobileDevices: []string{
                "numquam",
                "enim",
                "dolorem",
                "sapiente",
            },
            MobileOperatingSystemVersions: []string{
                "nihil",
                "sit",
                "expedita",
            },
            Placements: []shared.PretargetingConfigPlacements{
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("sed"),
                    Type: sdk.String("vel"),
                },
            },
            Platforms: []string{
                "voluptas",
                "deserunt",
                "quam",
            },
            SupportedCreativeAttributes: []string{
                "incidunt",
            },
            UserLists: []string{
                "cupiditate",
            },
            VendorTypes: []string{
                "pariatur",
                "soluta",
                "dicta",
                "laborum",
            },
            Verticals: []string{
                "incidunt",
                "aspernatur",
                "dolores",
            },
        },
        AccountID: "distinctio",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "facilis",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("quam"),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UserIP: sdk.String("qui"),
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
            BillingID: sdk.String("neque"),
            ConfigID: sdk.String("fugit"),
            ConfigName: sdk.String("magni"),
            CreativeType: []string{
                "sunt",
                "ullam",
            },
            Dimensions: []shared.PretargetingConfigDimensions{
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("hic"),
                    Width: sdk.String("voluptatem"),
                },
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("cumque"),
                    Width: sdk.String("soluta"),
                },
                shared.PretargetingConfigDimensions{
                    Height: sdk.String("nobis"),
                    Width: sdk.String("et"),
                },
            },
            ExcludedContentLabels: []string{
                "ipsum",
                "veritatis",
                "nobis",
                "quos",
            },
            ExcludedGeoCriteriaIds: []string{
                "cupiditate",
                "aperiam",
                "delectus",
            },
            ExcludedPlacements: []shared.PretargetingConfigExcludedPlacements{
                shared.PretargetingConfigExcludedPlacements{
                    Token: sdk.String("dolore"),
                    Type: sdk.String("labore"),
                },
            },
            ExcludedUserLists: []string{
                "dolorum",
            },
            ExcludedVerticals: []string{
                "quae",
            },
            GeoCriteriaIds: []string{
                "quas",
            },
            IsActive: sdk.Bool(false),
            Kind: sdk.String("itaque"),
            Languages: []string{
                "est",
            },
            MaximumQPS: sdk.String("repellendus"),
            MobileCarriers: []string{
                "doloribus",
                "ut",
                "facilis",
                "cupiditate",
            },
            MobileDevices: []string{
                "quae",
            },
            MobileOperatingSystemVersions: []string{
                "odio",
                "occaecati",
                "voluptatibus",
            },
            Placements: []shared.PretargetingConfigPlacements{
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("vero"),
                    Type: sdk.String("omnis"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("quis"),
                    Type: sdk.String("ipsum"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("delectus"),
                    Type: sdk.String("voluptate"),
                },
                shared.PretargetingConfigPlacements{
                    Token: sdk.String("consectetur"),
                    Type: sdk.String("vero"),
                },
            },
            Platforms: []string{
                "dignissimos",
                "hic",
                "distinctio",
                "quod",
            },
            SupportedCreativeAttributes: []string{
                "similique",
                "facilis",
            },
            UserLists: []string{
                "ducimus",
                "dolore",
                "quibusdam",
                "illum",
            },
            VendorTypes: []string{
                "natus",
            },
            Verticals: []string{
                "aut",
                "voluptatibus",
                "exercitationem",
                "nulla",
            },
        },
        AccountID: "fugit",
        Alt: shared.AltEnumJSON.ToPointer(),
        ConfigID: "porro",
        Fields: sdk.String("maiores"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UserIP: sdk.String("ducimus"),
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
