# TargetingTemplates

### Available Operations

* [DfareportingTargetingTemplatesGet](#dfareportingtargetingtemplatesget) - Gets one targeting template by ID.
* [DfareportingTargetingTemplatesInsert](#dfareportingtargetingtemplatesinsert) - Inserts a new targeting template.
* [DfareportingTargetingTemplatesList](#dfareportingtargetingtemplateslist) - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* [DfareportingTargetingTemplatesPatch](#dfareportingtargetingtemplatespatch) - Updates an existing targeting template. This method supports patch semantics.
* [DfareportingTargetingTemplatesUpdate](#dfareportingtargetingtemplatesupdate) - Updates an existing targeting template.

## DfareportingTargetingTemplatesGet

Gets one targeting template by ID.

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
    res, err := s.TargetingTemplates.DfareportingTargetingTemplatesGet(ctx, operations.DfareportingTargetingTemplatesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("sapiente"),
        ID: "c2c4678d-f02c-429b-a22c-dbc3c5f27f6b",
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "beatae",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.DfareportingTargetingTemplatesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetingTemplate != nil {
        // handle response
    }
}
```

## DfareportingTargetingTemplatesInsert

Inserts a new targeting template.

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
    res, err := s.TargetingTemplates.DfareportingTargetingTemplatesInsert(ctx, operations.DfareportingTargetingTemplatesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TargetingTemplate: &shared.TargetingTemplate{
            AccountID: sdk.String("eius"),
            AdvertiserID: sdk.String("autem"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("blanditiis"),
                Etag: sdk.String("ipsum"),
                ID: sdk.String("0e81803f-0679-48ff-b0a9-dff1c518503b"),
                Kind: sdk.String("voluptatem"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("fugiat"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                },
                HoursOfDay: []int{
                    919454,
                    380963,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("KP"),
                        CountryDartID: sdk.String("illum"),
                        DartID: sdk.String("nostrum"),
                        Kind: sdk.String("necessitatibus"),
                        MetroCode: sdk.String("quis"),
                        MetroDmaID: sdk.String("et"),
                        Name: sdk.String("Eleanor Luettgen I"),
                        RegionCode: sdk.String("fugiat"),
                        RegionDartID: sdk.String("vel"),
                    },
                    shared.City{
                        CountryCode: sdk.String("ER"),
                        CountryDartID: sdk.String("asperiores"),
                        DartID: sdk.String("tempore"),
                        Kind: sdk.String("ea"),
                        MetroCode: sdk.String("accusantium"),
                        MetroDmaID: sdk.String("eum"),
                        Name: sdk.String("Eileen Raynor"),
                        RegionCode: sdk.String("deleniti"),
                        RegionDartID: sdk.String("officiis"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("KP"),
                        DartID: sdk.String("repudiandae"),
                        Kind: sdk.String("quibusdam"),
                        Name: sdk.String("Andrea Herzog Sr."),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("IL"),
                        DartID: sdk.String("atque"),
                        Kind: sdk.String("delectus"),
                        Name: sdk.String("Lynn Kshlerin"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("IS"),
                        DartID: sdk.String("iure"),
                        Kind: sdk.String("officiis"),
                        Name: sdk.String("Everett Koelpin"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("AM"),
                        DartID: sdk.String("dolor"),
                        Kind: sdk.String("eius"),
                        Name: sdk.String("Ross Haag"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("IS"),
                        CountryDartID: sdk.String("beatae"),
                        DartID: sdk.String("nulla"),
                        DmaID: sdk.String("ullam"),
                        Kind: sdk.String("maiores"),
                        MetroCode: sdk.String("mollitia"),
                        Name: sdk.String("Boyd Kerluke"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("molestiae"),
                        CountryCode: sdk.String("AM"),
                        CountryDartID: sdk.String("qui"),
                        ID: sdk.String("11b58dc8-4279-4464-9b93-1221fe6d1d18"),
                        Kind: sdk.String("quis"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("eaque"),
                        CountryCode: sdk.String("LC"),
                        CountryDartID: sdk.String("modi"),
                        ID: sdk.String("c2222f8c-25b3-42ea-9fe6-b23f484a7d2b"),
                        Kind: sdk.String("dolores"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("reprehenderit"),
                        CountryCode: sdk.String("BB"),
                        CountryDartID: sdk.String("laudantium"),
                        ID: sdk.String("3857bb97-63b4-43d5-a847-bc03cd9d466d"),
                        Kind: sdk.String("cupiditate"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("culpa"),
                        CountryCode: sdk.String("JO"),
                        CountryDartID: sdk.String("quos"),
                        ID: sdk.String("e9f84a06-3713-458a-8d59-1898fa43e80b"),
                        Kind: sdk.String("iure"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("TD"),
                        CountryDartID: sdk.String("error"),
                        DartID: sdk.String("magnam"),
                        Kind: sdk.String("hic"),
                        Name: sdk.String("Nancy Okuneva"),
                        RegionCode: sdk.String("iusto"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("MX"),
                        CountryDartID: sdk.String("delectus"),
                        DartID: sdk.String("et"),
                        Kind: sdk.String("ad"),
                        Name: sdk.String("Jan Abshire"),
                        RegionCode: sdk.String("est"),
                    },
                },
            },
            ID: sdk.String("illum"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("id"),
            },
            Kind: sdk.String("eum"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("ipsum"),
                        Kind: sdk.String("necessitatibus"),
                        LanguageCode: sdk.String("vero"),
                        Name: sdk.String("Randy Quigley"),
                    },
                    shared.Language{
                        ID: sdk.String("esse"),
                        Kind: sdk.String("nam"),
                        LanguageCode: sdk.String("voluptatem"),
                        Name: sdk.String("Ian Windler"),
                    },
                    shared.Language{
                        ID: sdk.String("commodi"),
                        Kind: sdk.String("ducimus"),
                        LanguageCode: sdk.String("accusantium"),
                        Name: sdk.String("Justin Towne"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("vel"),
            },
            Name: sdk.String("Pat Schulist"),
            SubaccountID: sdk.String("nam"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("iste"),
                        DartID: sdk.String("sunt"),
                        Kind: sdk.String("doloremque"),
                        MajorVersion: sdk.String("quidem"),
                        MinorVersion: sdk.String("esse"),
                        Name: sdk.String("Neal Hilpert"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("tempore"),
                        DartID: sdk.String("molestiae"),
                        Kind: sdk.String("earum"),
                        MajorVersion: sdk.String("cumque"),
                        MinorVersion: sdk.String("tempora"),
                        Name: sdk.String("Ms. Shelly Bechtelar"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("culpa"),
                        DartID: sdk.String("laudantium"),
                        Kind: sdk.String("illo"),
                        MajorVersion: sdk.String("suscipit"),
                        MinorVersion: sdk.String("distinctio"),
                        Name: sdk.String("Luke Weissnat"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("voluptatum"),
                        Kind: sdk.String("fuga"),
                        Name: sdk.String("Jennie Lemke"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("aliquid"),
                        Kind: sdk.String("nesciunt"),
                        Name: sdk.String("Matthew Hartmann"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("nesciunt"),
                        Kind: sdk.String("officiis"),
                        Name: sdk.String("Melinda Walsh"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GI"),
                        CountryDartID: sdk.String("accusamus"),
                        ID: sdk.String("saepe"),
                        Kind: sdk.String("accusamus"),
                        Name: sdk.String("Keith Wuckert"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("TD"),
                        CountryDartID: sdk.String("totam"),
                        ID: sdk.String("voluptas"),
                        Kind: sdk.String("hic"),
                        Name: sdk.String("Tomas Zboncak"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GP"),
                        CountryDartID: sdk.String("voluptate"),
                        ID: sdk.String("iure"),
                        Kind: sdk.String("totam"),
                        Name: sdk.String("Jesse Murazik II"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("distinctio"),
                        Kind: sdk.String("voluptatum"),
                        MajorVersion: sdk.String("vitae"),
                        MinorVersion: sdk.String("aliquid"),
                        Name: sdk.String("Dr. Guillermo Botsford"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("esse"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("molestias"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Micheal Hackett"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("earum"),
                        Kind: sdk.String("sint"),
                        MajorVersion: sdk.String("similique"),
                        MinorVersion: sdk.String("porro"),
                        Name: sdk.String("Percy Walsh"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("blanditiis"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("explicabo"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Doreen Rolfson"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("consectetur"),
                        Kind: sdk.String("ipsum"),
                        MajorVersion: sdk.String("neque"),
                        MinorVersion: sdk.String("nihil"),
                        Name: sdk.String("Earnest Gusikowski"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("alias"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("esse"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Mrs. Jeffery Streich DDS"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("corporis"),
                        Kind: sdk.String("commodi"),
                        MajorVersion: sdk.String("accusamus"),
                        MinorVersion: sdk.String("unde"),
                        Name: sdk.String("Tina Collier"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("voluptatem"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("fuga"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Edgar Lindgren PhD"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("eos"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("dolores"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Jeremiah Robel"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("ea"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("dolorem"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Tamara Abbott"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("non"),
                        Kind: sdk.String("laudantium"),
                        Name: sdk.String("Omar Emard"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("amet"),
                        Kind: sdk.String("mollitia"),
                        Name: sdk.String("Marie D'Amore"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("fuga"),
                        Kind: sdk.String("ad"),
                        Name: sdk.String("Antonia Maggio"),
                    },
                },
            },
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("esse"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officiis",
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("quo"),
    }, operations.DfareportingTargetingTemplatesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetingTemplate != nil {
        // handle response
    }
}
```

## DfareportingTargetingTemplatesList

Retrieves a list of targeting templates, optionally filtered. This method supports paging.

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
    res, err := s.TargetingTemplates.DfareportingTargetingTemplatesList(ctx, operations.DfareportingTargetingTemplatesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        AdvertiserID: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("est"),
        Ids: []string{
            "vel",
            "accusantium",
        },
        Key: sdk.String("totam"),
        MaxResults: sdk.Int64(960434),
        OauthToken: sdk.String("quidem"),
        PageToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsa",
        QuotaUser: sdk.String("esse"),
        SearchString: sdk.String("quis"),
        SortField: operations.DfareportingTargetingTemplatesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetingTemplatesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DfareportingTargetingTemplatesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetingTemplatesListResponse != nil {
        // handle response
    }
}
```

## DfareportingTargetingTemplatesPatch

Updates an existing targeting template. This method supports patch semantics.

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
    res, err := s.TargetingTemplates.DfareportingTargetingTemplatesPatch(ctx, operations.DfareportingTargetingTemplatesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TargetingTemplate: &shared.TargetingTemplate{
            AccountID: sdk.String("ab"),
            AdvertiserID: sdk.String("veritatis"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("odit"),
                Etag: sdk.String("earum"),
                ID: sdk.String("60289abe-6bd6-4c09-8acb-facc795b268f"),
                Kind: sdk.String("vel"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("fuga"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumSaturday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                },
                HoursOfDay: []int{
                    248275,
                    593817,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("BS"),
                        CountryDartID: sdk.String("amet"),
                        DartID: sdk.String("voluptates"),
                        Kind: sdk.String("nesciunt"),
                        MetroCode: sdk.String("quibusdam"),
                        MetroDmaID: sdk.String("ipsa"),
                        Name: sdk.String("Melissa Mante"),
                        RegionCode: sdk.String("odio"),
                        RegionDartID: sdk.String("accusamus"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("EG"),
                        DartID: sdk.String("vero"),
                        Kind: sdk.String("commodi"),
                        Name: sdk.String("Ms. Joanne Hirthe"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("SH"),
                        DartID: sdk.String("atque"),
                        Kind: sdk.String("itaque"),
                        Name: sdk.String("Patti Sauer"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("KE"),
                        CountryDartID: sdk.String("exercitationem"),
                        DartID: sdk.String("fugit"),
                        DmaID: sdk.String("eius"),
                        Kind: sdk.String("laboriosam"),
                        MetroCode: sdk.String("nulla"),
                        Name: sdk.String("Marshall Dicki"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("PA"),
                        CountryDartID: sdk.String("quaerat"),
                        DartID: sdk.String("at"),
                        DmaID: sdk.String("aperiam"),
                        Kind: sdk.String("vel"),
                        MetroCode: sdk.String("ex"),
                        Name: sdk.String("Garry Luettgen"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("FR"),
                        CountryDartID: sdk.String("odio"),
                        DartID: sdk.String("dolorum"),
                        DmaID: sdk.String("nostrum"),
                        Kind: sdk.String("adipisci"),
                        MetroCode: sdk.String("consequuntur"),
                        Name: sdk.String("Glen Casper"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("optio"),
                        CountryCode: sdk.String("BM"),
                        CountryDartID: sdk.String("minus"),
                        ID: sdk.String("aecca0b6-c4e6-41b9-92c3-8030e0f6219d"),
                        Kind: sdk.String("illo"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("saepe"),
                        CountryCode: sdk.String("GQ"),
                        CountryDartID: sdk.String("magnam"),
                        ID: sdk.String("35e687bf-6472-4600-8fd7-457d776020ab"),
                        Kind: sdk.String("praesentium"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("ipsa"),
                        CountryCode: sdk.String("CI"),
                        CountryDartID: sdk.String("consequuntur"),
                        ID: sdk.String("cac0331c-df84-44e3-8085-a4f28719a08a"),
                        Kind: sdk.String("tempora"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("necessitatibus"),
                        CountryCode: sdk.String("MF"),
                        CountryDartID: sdk.String("ad"),
                        ID: sdk.String("a3a1c5da-91cc-4caf-ab27-6a7f2442060e"),
                        Kind: sdk.String("quidem"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("MK"),
                        CountryDartID: sdk.String("corrupti"),
                        DartID: sdk.String("tempore"),
                        Kind: sdk.String("in"),
                        Name: sdk.String("Christina Mills"),
                        RegionCode: sdk.String("neque"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("BL"),
                        CountryDartID: sdk.String("accusamus"),
                        DartID: sdk.String("nam"),
                        Kind: sdk.String("rerum"),
                        Name: sdk.String("Omar Cummerata"),
                        RegionCode: sdk.String("quibusdam"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("AS"),
                        CountryDartID: sdk.String("quasi"),
                        DartID: sdk.String("non"),
                        Kind: sdk.String("nam"),
                        Name: sdk.String("Kevin Von"),
                        RegionCode: sdk.String("totam"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("AL"),
                        CountryDartID: sdk.String("amet"),
                        DartID: sdk.String("porro"),
                        Kind: sdk.String("officia"),
                        Name: sdk.String("Chelsea Kerluke"),
                        RegionCode: sdk.String("nemo"),
                    },
                },
            },
            ID: sdk.String("in"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("non"),
            },
            Kind: sdk.String("doloremque"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("recusandae"),
                        Kind: sdk.String("architecto"),
                        LanguageCode: sdk.String("voluptatem"),
                        Name: sdk.String("Glenn Ortiz"),
                    },
                    shared.Language{
                        ID: sdk.String("hic"),
                        Kind: sdk.String("beatae"),
                        LanguageCode: sdk.String("iusto"),
                        Name: sdk.String("Manuel Denesik"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("omnis"),
            },
            Name: sdk.String("Jasmine Dietrich"),
            SubaccountID: sdk.String("quis"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("ducimus"),
                        DartID: sdk.String("quis"),
                        Kind: sdk.String("voluptatum"),
                        MajorVersion: sdk.String("doloribus"),
                        MinorVersion: sdk.String("numquam"),
                        Name: sdk.String("Mrs. Kelli Becker"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("laudantium"),
                        Kind: sdk.String("consectetur"),
                        Name: sdk.String("Johnnie Keeling III"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("deserunt"),
                        Kind: sdk.String("vel"),
                        Name: sdk.String("Hazel Champlin"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("perferendis"),
                        Kind: sdk.String("dolorum"),
                        Name: sdk.String("Amelia Gerlach"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("WS"),
                        CountryDartID: sdk.String("suscipit"),
                        ID: sdk.String("laboriosam"),
                        Kind: sdk.String("in"),
                        Name: sdk.String("Marvin Gerlach"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("AQ"),
                        CountryDartID: sdk.String("minus"),
                        ID: sdk.String("nam"),
                        Kind: sdk.String("beatae"),
                        Name: sdk.String("Mr. Joseph Schoen"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("LV"),
                        CountryDartID: sdk.String("tempore"),
                        ID: sdk.String("ut"),
                        Kind: sdk.String("qui"),
                        Name: sdk.String("Billie Funk"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("enim"),
                        Kind: sdk.String("explicabo"),
                        MajorVersion: sdk.String("ullam"),
                        MinorVersion: sdk.String("temporibus"),
                        Name: sdk.String("Natasha Williamson"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("quia"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("consequatur"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Hugo Douglas"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("consequuntur"),
                        Kind: sdk.String("similique"),
                        MajorVersion: sdk.String("blanditiis"),
                        MinorVersion: sdk.String("doloremque"),
                        Name: sdk.String("Mr. Cindy Skiles"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("consectetur"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("velit"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Kim Hayes"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("odit"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("molestiae"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Richard Crist"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("distinctio"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("maiores"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Karla Stracke"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("assumenda"),
                        Kind: sdk.String("perspiciatis"),
                        Name: sdk.String("Margaret Effertz"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("provident"),
                        Kind: sdk.String("laboriosam"),
                        Name: sdk.String("Ms. Hubert Shields DVM"),
                    },
                },
            },
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("ut"),
        ID: "400c428c-b9d7-4a7b-9232-a0d735102232",
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "numquam",
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("qui"),
    }, operations.DfareportingTargetingTemplatesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetingTemplate != nil {
        // handle response
    }
}
```

## DfareportingTargetingTemplatesUpdate

Updates an existing targeting template.

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
    res, err := s.TargetingTemplates.DfareportingTargetingTemplatesUpdate(ctx, operations.DfareportingTargetingTemplatesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TargetingTemplate: &shared.TargetingTemplate{
            AccountID: sdk.String("repudiandae"),
            AdvertiserID: sdk.String("maxime"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eveniet"),
                Etag: sdk.String("esse"),
                ID: sdk.String("25261950-6468-45d2-93fa-437e16c2c7e0"),
                Kind: sdk.String("iste"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("recusandae"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumSaturday,
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                    shared.DayPartTargetingDaysOfWeekEnumWednesday,
                },
                HoursOfDay: []int{
                    913493,
                    418160,
                    291665,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("JM"),
                        CountryDartID: sdk.String("earum"),
                        DartID: sdk.String("possimus"),
                        Kind: sdk.String("recusandae"),
                        MetroCode: sdk.String("iste"),
                        MetroDmaID: sdk.String("laudantium"),
                        Name: sdk.String("Olive Tremblay DVM"),
                        RegionCode: sdk.String("illum"),
                        RegionDartID: sdk.String("dicta"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("NR"),
                        DartID: sdk.String("doloribus"),
                        Kind: sdk.String("vero"),
                        Name: sdk.String("Betsy Corkery"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("BT"),
                        CountryDartID: sdk.String("unde"),
                        DartID: sdk.String("magnam"),
                        DmaID: sdk.String("rem"),
                        Kind: sdk.String("cupiditate"),
                        MetroCode: sdk.String("adipisci"),
                        Name: sdk.String("Dolores Purdy"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("est"),
                        CountryCode: sdk.String("ML"),
                        CountryDartID: sdk.String("aliquid"),
                        ID: sdk.String("08128d6b-9393-4834-a480-3b752c9715dd"),
                        Kind: sdk.String("nostrum"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("qui"),
                        CountryCode: sdk.String("BJ"),
                        CountryDartID: sdk.String("blanditiis"),
                        ID: sdk.String("79e28a94-ba06-4d50-a131-9f38907ecf7f"),
                        Kind: sdk.String("dolor"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("nisi"),
                        CountryCode: sdk.String("RW"),
                        CountryDartID: sdk.String("ad"),
                        ID: sdk.String("fa654861-b44e-4c0a-8624-d489f68d4f2c"),
                        Kind: sdk.String("aut"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("sunt"),
                        CountryCode: sdk.String("KI"),
                        CountryDartID: sdk.String("tempora"),
                        ID: sdk.String("9f2c5465-549b-4838-b43c-3f3cd18f0a11"),
                        Kind: sdk.String("doloremque"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("MA"),
                        CountryDartID: sdk.String("natus"),
                        DartID: sdk.String("quis"),
                        Kind: sdk.String("sit"),
                        Name: sdk.String("Norman Gusikowski DVM"),
                        RegionCode: sdk.String("sapiente"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("AU"),
                        CountryDartID: sdk.String("cum"),
                        DartID: sdk.String("voluptate"),
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Ora Jerde"),
                        RegionCode: sdk.String("ratione"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("SR"),
                        CountryDartID: sdk.String("cum"),
                        DartID: sdk.String("quaerat"),
                        Kind: sdk.String("odio"),
                        Name: sdk.String("Forrest Bruen"),
                        RegionCode: sdk.String("ullam"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("ME"),
                        CountryDartID: sdk.String("soluta"),
                        DartID: sdk.String("adipisci"),
                        Kind: sdk.String("unde"),
                        Name: sdk.String("Dwayne Mayert"),
                        RegionCode: sdk.String("nihil"),
                    },
                },
            },
            ID: sdk.String("id"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("iste"),
            },
            Kind: sdk.String("culpa"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("delectus"),
                        Kind: sdk.String("libero"),
                        LanguageCode: sdk.String("distinctio"),
                        Name: sdk.String("Rex Pacocha"),
                    },
                    shared.Language{
                        ID: sdk.String("quo"),
                        Kind: sdk.String("molestiae"),
                        LanguageCode: sdk.String("veritatis"),
                        Name: sdk.String("Cheryl Simonis"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("omnis"),
            },
            Name: sdk.String("Mrs. Chris Carroll"),
            SubaccountID: sdk.String("nemo"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("commodi"),
                        DartID: sdk.String("officia"),
                        Kind: sdk.String("eligendi"),
                        MajorVersion: sdk.String("iusto"),
                        MinorVersion: sdk.String("suscipit"),
                        Name: sdk.String("Morris Bailey"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("ex"),
                        DartID: sdk.String("molestiae"),
                        Kind: sdk.String("quasi"),
                        MajorVersion: sdk.String("laborum"),
                        MinorVersion: sdk.String("magnam"),
                        Name: sdk.String("Mrs. Frederick Williamson"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("autem"),
                        Kind: sdk.String("minus"),
                        Name: sdk.String("Ian Dare"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("exercitationem"),
                        Kind: sdk.String("deleniti"),
                        Name: sdk.String("Harriet Brekke"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("temporibus"),
                        Kind: sdk.String("ab"),
                        Name: sdk.String("Maureen Feil"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("NZ"),
                        CountryDartID: sdk.String("pariatur"),
                        ID: sdk.String("eum"),
                        Kind: sdk.String("nesciunt"),
                        Name: sdk.String("Ricardo Lemke"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("KR"),
                        CountryDartID: sdk.String("distinctio"),
                        ID: sdk.String("nihil"),
                        Kind: sdk.String("deserunt"),
                        Name: sdk.String("Kelli Yundt DDS"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GQ"),
                        CountryDartID: sdk.String("magnam"),
                        ID: sdk.String("animi"),
                        Kind: sdk.String("minima"),
                        Name: sdk.String("Mr. Myra Raynor"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("pariatur"),
                        Kind: sdk.String("est"),
                        MajorVersion: sdk.String("ullam"),
                        MinorVersion: sdk.String("dicta"),
                        Name: sdk.String("Phil Harber"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("vero"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("soluta"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Jeffery Daniel"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("accusamus"),
                        Kind: sdk.String("enim"),
                        MajorVersion: sdk.String("quidem"),
                        MinorVersion: sdk.String("dignissimos"),
                        Name: sdk.String("Beulah Bartell"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("enim"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("earum"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Joseph Corkery"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("quod"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("rerum"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Tonya Green"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("ad"),
                        Kind: sdk.String("ducimus"),
                        Name: sdk.String("Doyle Okuneva"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("nemo"),
                        Kind: sdk.String("ut"),
                        Name: sdk.String("Gerard Daugherty"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("sit"),
                        Kind: sdk.String("saepe"),
                        Name: sdk.String("Jeffery Kuhn"),
                    },
                },
            },
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("porro"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corrupti",
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DfareportingTargetingTemplatesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetingTemplate != nil {
        // handle response
    }
}
```
