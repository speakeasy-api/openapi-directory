# AchievementConfigurations

### Available Operations

* [GamesConfigurationAchievementConfigurationsDelete](#gamesconfigurationachievementconfigurationsdelete) - Delete the achievement configuration with the given ID.
* [GamesConfigurationAchievementConfigurationsGet](#gamesconfigurationachievementconfigurationsget) - Retrieves the metadata of the achievement configuration with the given ID.
* [GamesConfigurationAchievementConfigurationsInsert](#gamesconfigurationachievementconfigurationsinsert) - Insert a new achievement configuration in this application.
* [GamesConfigurationAchievementConfigurationsList](#gamesconfigurationachievementconfigurationslist) - Returns a list of the achievement configurations in this application.
* [GamesConfigurationAchievementConfigurationsUpdate](#gamesconfigurationachievementconfigurationsupdate) - Update the metadata of the achievement configuration with the given ID.

## GamesConfigurationAchievementConfigurationsDelete

Delete the achievement configuration with the given ID.

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
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsDelete(ctx, operations.GamesConfigurationAchievementConfigurationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        AchievementID: "magnam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.GamesConfigurationAchievementConfigurationsDeleteSecurity{
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

## GamesConfigurationAchievementConfigurationsGet

Retrieves the metadata of the achievement configuration with the given ID.

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
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsGet(ctx, operations.GamesConfigurationAchievementConfigurationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        AchievementID: "excepturi",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.GamesConfigurationAchievementConfigurationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementConfiguration != nil {
        // handle response
    }
}
```

## GamesConfigurationAchievementConfigurationsInsert

Insert a new achievement configuration in this application.

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
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsInsert(ctx, operations.GamesConfigurationAchievementConfigurationsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AchievementConfiguration: &shared.AchievementConfiguration{
            AchievementType: shared.AchievementConfigurationAchievementTypeEnumIncremental.ToPointer(),
            Draft: &shared.AchievementConfigurationDetail{
                Description: &shared.LocalizedStringBundle{
                    Kind: sdk.String("sapiente"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("odit"),
                            Locale: sdk.String("at"),
                            Value: sdk.String("at"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("maiores"),
                            Locale: sdk.String("molestiae"),
                            Value: sdk.String("quod"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("quod"),
                            Locale: sdk.String("esse"),
                            Value: sdk.String("totam"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("porro"),
                            Locale: sdk.String("dolorum"),
                            Value: sdk.String("dicta"),
                        },
                    },
                },
                IconURL: sdk.String("nam"),
                Kind: sdk.String("officia"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("occaecati"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("deleniti"),
                            Locale: sdk.String("hic"),
                            Value: sdk.String("optio"),
                        },
                    },
                },
                PointValue: sdk.Int(521848),
                SortRank: sdk.Int(105907),
            },
            ID: sdk.String("6742cb73-9205-4929-b96f-ea7596eb10fa"),
            InitialState: shared.AchievementConfigurationInitialStateEnumHidden.ToPointer(),
            Kind: sdk.String("laborum"),
            Published: &shared.AchievementConfigurationDetail{
                Description: &shared.LocalizedStringBundle{
                    Kind: sdk.String("dolores"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("corporis"),
                            Locale: sdk.String("explicabo"),
                            Value: sdk.String("nobis"),
                        },
                    },
                },
                IconURL: sdk.String("enim"),
                Kind: sdk.String("omnis"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("nemo"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("excepturi"),
                            Locale: sdk.String("accusantium"),
                            Value: sdk.String("iure"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("culpa"),
                            Locale: sdk.String("doloribus"),
                            Value: sdk.String("sapiente"),
                        },
                    },
                },
                PointValue: sdk.Int(102044),
                SortRank: sdk.Int(652790),
            },
            StepsToUnlock: sdk.Int(208876),
            Token: sdk.String("culpa"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        ApplicationID: "mollitia",
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
    }, operations.GamesConfigurationAchievementConfigurationsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementConfiguration != nil {
        // handle response
    }
}
```

## GamesConfigurationAchievementConfigurationsList

Returns a list of the achievement configurations in this application.

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
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsList(ctx, operations.GamesConfigurationAchievementConfigurationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        ApplicationID: "laborum",
        Callback: sdk.String("animi"),
        Fields: sdk.String("enim"),
        Key: sdk.String("odit"),
        MaxResults: sdk.Int64(778346),
        OauthToken: sdk.String("sequi"),
        PageToken: sdk.String("tenetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.GamesConfigurationAchievementConfigurationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementConfigurationListResponse != nil {
        // handle response
    }
}
```

## GamesConfigurationAchievementConfigurationsUpdate

Update the metadata of the achievement configuration with the given ID.

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
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsUpdate(ctx, operations.GamesConfigurationAchievementConfigurationsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AchievementConfiguration: &shared.AchievementConfiguration{
            AchievementType: shared.AchievementConfigurationAchievementTypeEnumAchievementTypeUnspecified.ToPointer(),
            Draft: &shared.AchievementConfigurationDetail{
                Description: &shared.LocalizedStringBundle{
                    Kind: sdk.String("error"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("laborum"),
                            Locale: sdk.String("quasi"),
                            Value: sdk.String("reiciendis"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("voluptatibus"),
                            Locale: sdk.String("vero"),
                            Value: sdk.String("nihil"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("praesentium"),
                            Locale: sdk.String("voluptatibus"),
                            Value: sdk.String("ipsa"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("omnis"),
                            Locale: sdk.String("voluptate"),
                            Value: sdk.String("cum"),
                        },
                    },
                },
                IconURL: sdk.String("perferendis"),
                Kind: sdk.String("doloremque"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("reprehenderit"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("maiores"),
                            Locale: sdk.String("dicta"),
                            Value: sdk.String("corporis"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("dolore"),
                            Locale: sdk.String("iusto"),
                            Value: sdk.String("dicta"),
                        },
                    },
                },
                PointValue: sdk.Int(688661),
                SortRank: sdk.Int(317983),
            },
            ID: sdk.String("e6e13b99-d488-4e1e-91e4-50ad2abd4426"),
            InitialState: shared.AchievementConfigurationInitialStateEnumHidden.ToPointer(),
            Kind: sdk.String("quos"),
            Published: &shared.AchievementConfigurationDetail{
                Description: &shared.LocalizedStringBundle{
                    Kind: sdk.String("perferendis"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("assumenda"),
                            Locale: sdk.String("ipsam"),
                            Value: sdk.String("alias"),
                        },
                    },
                },
                IconURL: sdk.String("fugit"),
                Kind: sdk.String("dolorum"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("excepturi"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("facilis"),
                            Locale: sdk.String("tempore"),
                            Value: sdk.String("labore"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("delectus"),
                            Locale: sdk.String("eum"),
                            Value: sdk.String("non"),
                        },
                    },
                },
                PointValue: sdk.Int(756107),
                SortRank: sdk.Int(576157),
            },
            StepsToUnlock: sdk.Int(396098),
            Token: sdk.String("provident"),
        },
        AccessToken: sdk.String("necessitatibus"),
        AchievementID: "sint",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("illum"),
    }, operations.GamesConfigurationAchievementConfigurationsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementConfiguration != nil {
        // handle response
    }
}
```
