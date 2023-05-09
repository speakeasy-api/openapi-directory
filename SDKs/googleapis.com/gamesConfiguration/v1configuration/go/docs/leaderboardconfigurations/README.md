# LeaderboardConfigurations

### Available Operations

* [GamesConfigurationLeaderboardConfigurationsDelete](#gamesconfigurationleaderboardconfigurationsdelete) - Delete the leaderboard configuration with the given ID.
* [GamesConfigurationLeaderboardConfigurationsGet](#gamesconfigurationleaderboardconfigurationsget) - Retrieves the metadata of the leaderboard configuration with the given ID.
* [GamesConfigurationLeaderboardConfigurationsInsert](#gamesconfigurationleaderboardconfigurationsinsert) - Insert a new leaderboard configuration in this application.
* [GamesConfigurationLeaderboardConfigurationsList](#gamesconfigurationleaderboardconfigurationslist) - Returns a list of the leaderboard configurations in this application.
* [GamesConfigurationLeaderboardConfigurationsUpdate](#gamesconfigurationleaderboardconfigurationsupdate) - Update the metadata of the leaderboard configuration with the given ID.

## GamesConfigurationLeaderboardConfigurationsDelete

Delete the leaderboard configuration with the given ID.

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
    res, err := s.LeaderboardConfigurations.GamesConfigurationLeaderboardConfigurationsDelete(ctx, operations.GamesConfigurationLeaderboardConfigurationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("facere"),
        LeaderboardID: "ea",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("non"),
    }, operations.GamesConfigurationLeaderboardConfigurationsDeleteSecurity{
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

## GamesConfigurationLeaderboardConfigurationsGet

Retrieves the metadata of the leaderboard configuration with the given ID.

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
    res, err := s.LeaderboardConfigurations.GamesConfigurationLeaderboardConfigurationsGet(ctx, operations.GamesConfigurationLeaderboardConfigurationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("provident"),
        LeaderboardID: "nam",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.GamesConfigurationLeaderboardConfigurationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardConfiguration != nil {
        // handle response
    }
}
```

## GamesConfigurationLeaderboardConfigurationsInsert

Insert a new leaderboard configuration in this application.

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
    res, err := s.LeaderboardConfigurations.GamesConfigurationLeaderboardConfigurationsInsert(ctx, operations.GamesConfigurationLeaderboardConfigurationsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LeaderboardConfiguration: &shared.LeaderboardConfiguration{
            Draft: &shared.LeaderboardConfigurationDetail{
                IconURL: sdk.String("deserunt"),
                Kind: sdk.String("nisi"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("vel"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("omnis"),
                            Locale: sdk.String("molestiae"),
                            Value: sdk.String("perferendis"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("nihil"),
                            Locale: sdk.String("magnam"),
                            Value: sdk.String("distinctio"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("id"),
                            Locale: sdk.String("labore"),
                            Value: sdk.String("labore"),
                        },
                    },
                },
                ScoreFormat: &shared.GamesNumberFormatConfiguration{
                    CurrencyCode: sdk.String("suscipit"),
                    NumDecimalPlaces: sdk.Int(618016),
                    NumberFormatType: shared.GamesNumberFormatConfigurationNumberFormatTypeEnumTimeDuration.ToPointer(),
                    Suffix: &shared.GamesNumberAffixConfiguration{
                        Few: &shared.LocalizedStringBundle{
                            Kind: sdk.String("eum"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("aspernatur"),
                                    Locale: sdk.String("architecto"),
                                    Value: sdk.String("magnam"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("et"),
                                    Locale: sdk.String("excepturi"),
                                    Value: sdk.String("ullam"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("provident"),
                                    Locale: sdk.String("quos"),
                                    Value: sdk.String("sint"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("accusantium"),
                                    Locale: sdk.String("mollitia"),
                                    Value: sdk.String("reiciendis"),
                                },
                            },
                        },
                        Many: &shared.LocalizedStringBundle{
                            Kind: sdk.String("mollitia"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("eum"),
                                    Locale: sdk.String("dolor"),
                                    Value: sdk.String("necessitatibus"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("odit"),
                                    Locale: sdk.String("nemo"),
                                    Value: sdk.String("quasi"),
                                },
                            },
                        },
                        One: &shared.LocalizedStringBundle{
                            Kind: sdk.String("iure"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("debitis"),
                                    Locale: sdk.String("eius"),
                                    Value: sdk.String("maxime"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("deleniti"),
                                    Locale: sdk.String("facilis"),
                                    Value: sdk.String("in"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("architecto"),
                                    Locale: sdk.String("architecto"),
                                    Value: sdk.String("repudiandae"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("ullam"),
                                    Locale: sdk.String("expedita"),
                                    Value: sdk.String("nihil"),
                                },
                            },
                        },
                        Other: &shared.LocalizedStringBundle{
                            Kind: sdk.String("repellat"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("sed"),
                                    Locale: sdk.String("saepe"),
                                    Value: sdk.String("pariatur"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("accusantium"),
                                    Locale: sdk.String("consequuntur"),
                                    Value: sdk.String("praesentium"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("natus"),
                                    Locale: sdk.String("magni"),
                                    Value: sdk.String("sunt"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("quo"),
                                    Locale: sdk.String("illum"),
                                    Value: sdk.String("pariatur"),
                                },
                            },
                        },
                        Two: &shared.LocalizedStringBundle{
                            Kind: sdk.String("maxime"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("excepturi"),
                                    Locale: sdk.String("odit"),
                                    Value: sdk.String("ea"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("accusantium"),
                                    Locale: sdk.String("ab"),
                                    Value: sdk.String("maiores"),
                                },
                            },
                        },
                        Zero: &shared.LocalizedStringBundle{
                            Kind: sdk.String("quidem"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("voluptate"),
                                    Locale: sdk.String("autem"),
                                    Value: sdk.String("nam"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("eaque"),
                                    Locale: sdk.String("pariatur"),
                                    Value: sdk.String("nemo"),
                                },
                            },
                        },
                    },
                },
                SortRank: sdk.Int(975522),
            },
            ID: sdk.String("0d30c5fb-b258-4705-b202-c73d5fe9b90c"),
            Kind: sdk.String("consequuntur"),
            Published: &shared.LeaderboardConfigurationDetail{
                IconURL: sdk.String("blanditiis"),
                Kind: sdk.String("error"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("eaque"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("rerum"),
                            Locale: sdk.String("adipisci"),
                            Value: sdk.String("asperiores"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("earum"),
                            Locale: sdk.String("modi"),
                            Value: sdk.String("iste"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("dolorum"),
                            Locale: sdk.String("deleniti"),
                            Value: sdk.String("pariatur"),
                        },
                    },
                },
                ScoreFormat: &shared.GamesNumberFormatConfiguration{
                    CurrencyCode: sdk.String("provident"),
                    NumDecimalPlaces: sdk.Int(750844),
                    NumberFormatType: shared.GamesNumberFormatConfigurationNumberFormatTypeEnumTimeDuration.ToPointer(),
                    Suffix: &shared.GamesNumberAffixConfiguration{
                        Few: &shared.LocalizedStringBundle{
                            Kind: sdk.String("delectus"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("quos"),
                                    Locale: sdk.String("aliquid"),
                                    Value: sdk.String("dolorem"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("dolorem"),
                                    Locale: sdk.String("dolor"),
                                    Value: sdk.String("qui"),
                                },
                            },
                        },
                        Many: &shared.LocalizedStringBundle{
                            Kind: sdk.String("ipsum"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("excepturi"),
                                    Locale: sdk.String("cum"),
                                    Value: sdk.String("voluptate"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("dignissimos"),
                                    Locale: sdk.String("reiciendis"),
                                    Value: sdk.String("amet"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("dolorum"),
                                    Locale: sdk.String("numquam"),
                                    Value: sdk.String("veritatis"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("ipsa"),
                                    Locale: sdk.String("ipsa"),
                                    Value: sdk.String("iure"),
                                },
                            },
                        },
                        One: &shared.LocalizedStringBundle{
                            Kind: sdk.String("odio"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("accusamus"),
                                    Locale: sdk.String("quidem"),
                                    Value: sdk.String("voluptatibus"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("voluptas"),
                                    Locale: sdk.String("natus"),
                                    Value: sdk.String("eos"),
                                },
                            },
                        },
                        Other: &shared.LocalizedStringBundle{
                            Kind: sdk.String("atque"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("fugiat"),
                                    Locale: sdk.String("ab"),
                                    Value: sdk.String("soluta"),
                                },
                            },
                        },
                        Two: &shared.LocalizedStringBundle{
                            Kind: sdk.String("dolorum"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("voluptate"),
                                    Locale: sdk.String("dolorum"),
                                    Value: sdk.String("deleniti"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("omnis"),
                                    Locale: sdk.String("necessitatibus"),
                                    Value: sdk.String("distinctio"),
                                },
                            },
                        },
                        Zero: &shared.LocalizedStringBundle{
                            Kind: sdk.String("asperiores"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("ipsum"),
                                    Locale: sdk.String("voluptate"),
                                    Value: sdk.String("id"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("saepe"),
                                    Locale: sdk.String("eius"),
                                    Value: sdk.String("aspernatur"),
                                },
                            },
                        },
                    },
                },
                SortRank: sdk.Int(20651),
            },
            ScoreMax: sdk.String("amet"),
            ScoreMin: sdk.String("optio"),
            ScoreOrder: shared.LeaderboardConfigurationScoreOrderEnumSmallerIsBetter.ToPointer(),
            Token: sdk.String("ad"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        ApplicationID: "deserunt",
        Callback: sdk.String("provident"),
        Fields: sdk.String("minima"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("at"),
    }, operations.GamesConfigurationLeaderboardConfigurationsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardConfiguration != nil {
        // handle response
    }
}
```

## GamesConfigurationLeaderboardConfigurationsList

Returns a list of the leaderboard configurations in this application.

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
    res, err := s.LeaderboardConfigurations.GamesConfigurationLeaderboardConfigurationsList(ctx, operations.GamesConfigurationLeaderboardConfigurationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        ApplicationID: "quod",
        Callback: sdk.String("officiis"),
        Fields: sdk.String("qui"),
        Key: sdk.String("dolorum"),
        MaxResults: sdk.Int64(952792),
        OauthToken: sdk.String("esse"),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.GamesConfigurationLeaderboardConfigurationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardConfigurationListResponse != nil {
        // handle response
    }
}
```

## GamesConfigurationLeaderboardConfigurationsUpdate

Update the metadata of the leaderboard configuration with the given ID.

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
    res, err := s.LeaderboardConfigurations.GamesConfigurationLeaderboardConfigurationsUpdate(ctx, operations.GamesConfigurationLeaderboardConfigurationsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LeaderboardConfiguration: &shared.LeaderboardConfiguration{
            Draft: &shared.LeaderboardConfigurationDetail{
                IconURL: sdk.String("amet"),
                Kind: sdk.String("tempore"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("accusamus"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("enim"),
                            Locale: sdk.String("dolorem"),
                            Value: sdk.String("sapiente"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("totam"),
                            Locale: sdk.String("nihil"),
                            Value: sdk.String("sit"),
                        },
                    },
                },
                ScoreFormat: &shared.GamesNumberFormatConfiguration{
                    CurrencyCode: sdk.String("expedita"),
                    NumDecimalPlaces: sdk.Int(207470),
                    NumberFormatType: shared.GamesNumberFormatConfigurationNumberFormatTypeEnumNumberFormatTypeUnspecified.ToPointer(),
                    Suffix: &shared.GamesNumberAffixConfiguration{
                        Few: &shared.LocalizedStringBundle{
                            Kind: sdk.String("vel"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("voluptas"),
                                    Locale: sdk.String("deserunt"),
                                    Value: sdk.String("quam"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("ipsum"),
                                    Locale: sdk.String("incidunt"),
                                    Value: sdk.String("qui"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("cupiditate"),
                                    Locale: sdk.String("maxime"),
                                    Value: sdk.String("pariatur"),
                                },
                            },
                        },
                        Many: &shared.LocalizedStringBundle{
                            Kind: sdk.String("soluta"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("laborum"),
                                    Locale: sdk.String("totam"),
                                    Value: sdk.String("incidunt"),
                                },
                            },
                        },
                        One: &shared.LocalizedStringBundle{
                            Kind: sdk.String("aspernatur"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("distinctio"),
                                    Locale: sdk.String("facilis"),
                                    Value: sdk.String("aliquid"),
                                },
                            },
                        },
                        Other: &shared.LocalizedStringBundle{
                            Kind: sdk.String("quam"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("temporibus"),
                                    Locale: sdk.String("qui"),
                                    Value: sdk.String("neque"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("fugit"),
                                    Locale: sdk.String("magni"),
                                    Value: sdk.String("odio"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("sunt"),
                                    Locale: sdk.String("ullam"),
                                    Value: sdk.String("nam"),
                                },
                            },
                        },
                        Two: &shared.LocalizedStringBundle{
                            Kind: sdk.String("hic"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("cumque"),
                                    Locale: sdk.String("soluta"),
                                    Value: sdk.String("nobis"),
                                },
                            },
                        },
                        Zero: &shared.LocalizedStringBundle{
                            Kind: sdk.String("et"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("ipsum"),
                                    Locale: sdk.String("veritatis"),
                                    Value: sdk.String("nobis"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("quos"),
                                    Locale: sdk.String("tempore"),
                                    Value: sdk.String("cupiditate"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("aperiam"),
                                    Locale: sdk.String("delectus"),
                                    Value: sdk.String("dolorem"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("dolore"),
                                    Locale: sdk.String("labore"),
                                    Value: sdk.String("adipisci"),
                                },
                            },
                        },
                    },
                },
                SortRank: sdk.Int(677263),
            },
            ID: sdk.String("1108e0ad-cf4b-4921-879f-ce953f73ef7f"),
            Kind: sdk.String("distinctio"),
            Published: &shared.LeaderboardConfigurationDetail{
                IconURL: sdk.String("quod"),
                Kind: sdk.String("odio"),
                Name: &shared.LocalizedStringBundle{
                    Kind: sdk.String("similique"),
                    Translations: []shared.LocalizedString{
                        shared.LocalizedString{
                            Kind: sdk.String("vero"),
                            Locale: sdk.String("ducimus"),
                            Value: sdk.String("dolore"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("quibusdam"),
                            Locale: sdk.String("illum"),
                            Value: sdk.String("sequi"),
                        },
                        shared.LocalizedString{
                            Kind: sdk.String("natus"),
                            Locale: sdk.String("impedit"),
                            Value: sdk.String("aut"),
                        },
                    },
                },
                ScoreFormat: &shared.GamesNumberFormatConfiguration{
                    CurrencyCode: sdk.String("voluptatibus"),
                    NumDecimalPlaces: sdk.Int(347233),
                    NumberFormatType: shared.GamesNumberFormatConfigurationNumberFormatTypeEnumCurrency.ToPointer(),
                    Suffix: &shared.GamesNumberAffixConfiguration{
                        Few: &shared.LocalizedStringBundle{
                            Kind: sdk.String("fugit"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("maiores"),
                                    Locale: sdk.String("doloribus"),
                                    Value: sdk.String("iusto"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("eligendi"),
                                    Locale: sdk.String("ducimus"),
                                    Value: sdk.String("alias"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("officia"),
                                    Locale: sdk.String("tempora"),
                                    Value: sdk.String("ipsam"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("ea"),
                                    Locale: sdk.String("aspernatur"),
                                    Value: sdk.String("vel"),
                                },
                            },
                        },
                        Many: &shared.LocalizedStringBundle{
                            Kind: sdk.String("possimus"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("ratione"),
                                    Locale: sdk.String("ex"),
                                    Value: sdk.String("laudantium"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("dicta"),
                                    Locale: sdk.String("dolor"),
                                    Value: sdk.String("maiores"),
                                },
                            },
                        },
                        One: &shared.LocalizedStringBundle{
                            Kind: sdk.String("quasi"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("nulla"),
                                    Locale: sdk.String("excepturi"),
                                    Value: sdk.String("voluptatibus"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("nostrum"),
                                    Locale: sdk.String("sapiente"),
                                    Value: sdk.String("quisquam"),
                                },
                            },
                        },
                        Other: &shared.LocalizedStringBundle{
                            Kind: sdk.String("saepe"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("impedit"),
                                    Locale: sdk.String("corporis"),
                                    Value: sdk.String("veniam"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("aliquid"),
                                    Locale: sdk.String("inventore"),
                                    Value: sdk.String("magnam"),
                                },
                            },
                        },
                        Two: &shared.LocalizedStringBundle{
                            Kind: sdk.String("ea"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("consectetur"),
                                    Locale: sdk.String("recusandae"),
                                    Value: sdk.String("aspernatur"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("minima"),
                                    Locale: sdk.String("eaque"),
                                    Value: sdk.String("a"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("libero"),
                                    Locale: sdk.String("aut"),
                                    Value: sdk.String("aut"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("deleniti"),
                                    Locale: sdk.String("impedit"),
                                    Value: sdk.String("aliquam"),
                                },
                            },
                        },
                        Zero: &shared.LocalizedStringBundle{
                            Kind: sdk.String("fugit"),
                            Translations: []shared.LocalizedString{
                                shared.LocalizedString{
                                    Kind: sdk.String("inventore"),
                                    Locale: sdk.String("non"),
                                    Value: sdk.String("et"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("dolorum"),
                                    Locale: sdk.String("laborum"),
                                    Value: sdk.String("placeat"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("velit"),
                                    Locale: sdk.String("eum"),
                                    Value: sdk.String("autem"),
                                },
                                shared.LocalizedString{
                                    Kind: sdk.String("nobis"),
                                    Locale: sdk.String("quas"),
                                    Value: sdk.String("assumenda"),
                                },
                            },
                        },
                    },
                },
                SortRank: sdk.Int(860552),
            },
            ScoreMax: sdk.String("voluptas"),
            ScoreMin: sdk.String("libero"),
            ScoreOrder: shared.LeaderboardConfigurationScoreOrderEnumScoreOrderUnspecified.ToPointer(),
            Token: sdk.String("tempora"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("molestiae"),
        LeaderboardID: "magnam",
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("esse"),
    }, operations.GamesConfigurationLeaderboardConfigurationsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardConfiguration != nil {
        // handle response
    }
}
```
