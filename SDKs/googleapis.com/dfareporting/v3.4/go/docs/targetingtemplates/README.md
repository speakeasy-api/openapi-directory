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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("debitis"),
        ID: "b0090092-c228-4efe-9cfa-35316f54f2cf",
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iure",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("assumenda"),
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
            AccountID: sdk.String("labore"),
            AdvertiserID: sdk.String("non"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("est"),
                Etag: sdk.String("ullam"),
                ID: sdk.String("91688b88-142c-48c0-9cb6-c13d21d28cce"),
                Kind: sdk.String("laboriosam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("repudiandae"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                },
                HoursOfDay: []int{
                    968221,
                    419883,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("VI"),
                        CountryDartID: sdk.String("deleniti"),
                        DartID: sdk.String("in"),
                        Kind: sdk.String("magni"),
                        MetroCode: sdk.String("expedita"),
                        MetroDmaID: sdk.String("aspernatur"),
                        Name: sdk.String("Opal Denesik"),
                        RegionCode: sdk.String("minus"),
                        RegionDartID: sdk.String("voluptate"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("MG"),
                        DartID: sdk.String("temporibus"),
                        Kind: sdk.String("maxime"),
                        Name: sdk.String("Samantha MacGyver"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("LB"),
                        DartID: sdk.String("adipisci"),
                        Kind: sdk.String("ab"),
                        Name: sdk.String("Horace Powlowski"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("MQ"),
                        DartID: sdk.String("quos"),
                        Kind: sdk.String("officiis"),
                        Name: sdk.String("Esther Halvorson"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("MO"),
                        CountryDartID: sdk.String("atque"),
                        DartID: sdk.String("ut"),
                        DmaID: sdk.String("earum"),
                        Kind: sdk.String("praesentium"),
                        MetroCode: sdk.String("corporis"),
                        Name: sdk.String("Andrew Kessler"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("AE"),
                        CountryDartID: sdk.String("reprehenderit"),
                        DartID: sdk.String("possimus"),
                        DmaID: sdk.String("fugiat"),
                        Kind: sdk.String("doloribus"),
                        MetroCode: sdk.String("excepturi"),
                        Name: sdk.String("Johnathan Schimmel"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("BY"),
                        CountryDartID: sdk.String("sint"),
                        DartID: sdk.String("dolorem"),
                        DmaID: sdk.String("excepturi"),
                        Kind: sdk.String("facilis"),
                        MetroCode: sdk.String("ex"),
                        Name: sdk.String("Phillip Yost"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("pariatur"),
                        CountryCode: sdk.String("DJ"),
                        CountryDartID: sdk.String("cumque"),
                        ID: sdk.String("0f705b6b-971f-44a3-be8b-e28d97dc9be5"),
                        Kind: sdk.String("incidunt"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("HR"),
                        CountryDartID: sdk.String("unde"),
                        DartID: sdk.String("sunt"),
                        Kind: sdk.String("repudiandae"),
                        Name: sdk.String("Joyce McKenzie"),
                        RegionCode: sdk.String("nisi"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("CI"),
                        CountryDartID: sdk.String("odit"),
                        DartID: sdk.String("ab"),
                        Kind: sdk.String("labore"),
                        Name: sdk.String("Ms. Bonnie Klocko"),
                        RegionCode: sdk.String("voluptas"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("JE"),
                        CountryDartID: sdk.String("eaque"),
                        DartID: sdk.String("expedita"),
                        Kind: sdk.String("dolorum"),
                        Name: sdk.String("Billy Dibbert PhD"),
                        RegionCode: sdk.String("aliquid"),
                    },
                },
            },
            ID: sdk.String("itaque"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("cum"),
            },
            Kind: sdk.String("dicta"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("velit"),
                        Kind: sdk.String("nesciunt"),
                        LanguageCode: sdk.String("officiis"),
                        Name: sdk.String("Mrs. Jamie Borer"),
                    },
                    shared.Language{
                        ID: sdk.String("minima"),
                        Kind: sdk.String("nisi"),
                        LanguageCode: sdk.String("quas"),
                        Name: sdk.String("Susie Cummings"),
                    },
                    shared.Language{
                        ID: sdk.String("alias"),
                        Kind: sdk.String("laudantium"),
                        LanguageCode: sdk.String("cum"),
                        Name: sdk.String("Danny Murphy"),
                    },
                    shared.Language{
                        ID: sdk.String("debitis"),
                        Kind: sdk.String("ipsum"),
                        LanguageCode: sdk.String("ea"),
                        Name: sdk.String("George Gusikowski II"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("atque"),
            },
            Name: sdk.String("Leonard Heaney"),
            SubaccountID: sdk.String("itaque"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("sed"),
                        DartID: sdk.String("dolore"),
                        Kind: sdk.String("veniam"),
                        MajorVersion: sdk.String("aspernatur"),
                        MinorVersion: sdk.String("aperiam"),
                        Name: sdk.String("Mr. Tanya Sanford"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("fugit"),
                        DartID: sdk.String("omnis"),
                        Kind: sdk.String("provident"),
                        MajorVersion: sdk.String("ad"),
                        MinorVersion: sdk.String("explicabo"),
                        Name: sdk.String("Shirley Rohan"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("dolore"),
                        DartID: sdk.String("ad"),
                        Kind: sdk.String("ex"),
                        MajorVersion: sdk.String("officiis"),
                        MinorVersion: sdk.String("quidem"),
                        Name: sdk.String("Earnest Blick IV"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("quae"),
                        Kind: sdk.String("nemo"),
                        Name: sdk.String("Dr. Maria Breitenberg"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("dolore"),
                        Kind: sdk.String("facere"),
                        Name: sdk.String("Whitney Beer"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("numquam"),
                        Kind: sdk.String("deserunt"),
                        Name: sdk.String("Kurt Cummerata"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("aliquid"),
                        Kind: sdk.String("vero"),
                        Name: sdk.String("Neil Shields"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("CC"),
                        CountryDartID: sdk.String("possimus"),
                        ID: sdk.String("adipisci"),
                        Kind: sdk.String("iusto"),
                        Name: sdk.String("Bobbie Davis IV"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("AM"),
                        CountryDartID: sdk.String("maxime"),
                        ID: sdk.String("commodi"),
                        Kind: sdk.String("corrupti"),
                        Name: sdk.String("Dora Daniel"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("SB"),
                        CountryDartID: sdk.String("ducimus"),
                        ID: sdk.String("amet"),
                        Kind: sdk.String("architecto"),
                        Name: sdk.String("Gretchen Hackett IV"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("quibusdam"),
                        Kind: sdk.String("id"),
                        MajorVersion: sdk.String("doloribus"),
                        MinorVersion: sdk.String("quasi"),
                        Name: sdk.String("Sophie Price II"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("occaecati"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("perferendis"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Dave Hauck"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("maiores"),
                        Kind: sdk.String("ad"),
                        MajorVersion: sdk.String("delectus"),
                        MinorVersion: sdk.String("quaerat"),
                        Name: sdk.String("Sally Pfannerstill"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("natus"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("architecto"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Troy Schuppe"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("ad"),
                        Kind: sdk.String("natus"),
                        MajorVersion: sdk.String("modi"),
                        MinorVersion: sdk.String("quos"),
                        Name: sdk.String("Sonya Romaguera"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("delectus"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("esse"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Mr. Roxanne Cremin"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("natus"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("provident"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Dr. Thomas Daugherty III"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("aspernatur"),
                        Kind: sdk.String("quibusdam"),
                        Name: sdk.String("Alfonso Schaefer"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("soluta"),
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Harold Hilpert"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("perspiciatis"),
                        Kind: sdk.String("quidem"),
                        Name: sdk.String("Ms. Shane Towne"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("beatae"),
                        Kind: sdk.String("suscipit"),
                        Name: sdk.String("Miss Conrad Barrows"),
                    },
                },
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magnam",
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("optio"),
        AdvertiserID: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("autem"),
        Ids: []string{
            "magnam",
            "eveniet",
        },
        Key: sdk.String("impedit"),
        MaxResults: sdk.Int64(128783),
        OauthToken: sdk.String("repudiandae"),
        PageToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sit",
        QuotaUser: sdk.String("iusto"),
        SearchString: sdk.String("temporibus"),
        SortField: operations.DfareportingTargetingTemplatesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetingTemplatesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("id"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TargetingTemplate: &shared.TargetingTemplate{
            AccountID: sdk.String("animi"),
            AdvertiserID: sdk.String("doloremque"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("laborum"),
                Etag: sdk.String("quasi"),
                ID: sdk.String("b7e7446f-9970-46be-acb8-850bdd84ce76"),
                Kind: sdk.String("illum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("fugiat"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumThursday,
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                },
                HoursOfDay: []int{
                    360924,
                    791334,
                    828608,
                    120984,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("TZ"),
                        CountryDartID: sdk.String("hic"),
                        DartID: sdk.String("vero"),
                        Kind: sdk.String("veniam"),
                        MetroCode: sdk.String("similique"),
                        MetroDmaID: sdk.String("rerum"),
                        Name: sdk.String("Miss Danny Rutherford"),
                        RegionCode: sdk.String("accusamus"),
                        RegionDartID: sdk.String("repellat"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("WF"),
                        DartID: sdk.String("dolore"),
                        Kind: sdk.String("voluptatem"),
                        Name: sdk.String("Glenda Runte"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("BR"),
                        DartID: sdk.String("quidem"),
                        Kind: sdk.String("ipsam"),
                        Name: sdk.String("Troy Stroman"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("PL"),
                        CountryDartID: sdk.String("iure"),
                        DartID: sdk.String("voluptas"),
                        DmaID: sdk.String("dolore"),
                        Kind: sdk.String("ut"),
                        MetroCode: sdk.String("aut"),
                        Name: sdk.String("Ellis Jones"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("VN"),
                        CountryDartID: sdk.String("unde"),
                        DartID: sdk.String("tempore"),
                        DmaID: sdk.String("exercitationem"),
                        Kind: sdk.String("placeat"),
                        MetroCode: sdk.String("voluptas"),
                        Name: sdk.String("Mona Willms"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("aperiam"),
                        CountryCode: sdk.String("BA"),
                        CountryDartID: sdk.String("provident"),
                        ID: sdk.String("40235fb9-6c70-4779-a2c1-3f640c582ae0"),
                        Kind: sdk.String("eveniet"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("dolorum"),
                        CountryCode: sdk.String("YT"),
                        CountryDartID: sdk.String("quibusdam"),
                        ID: sdk.String("5c58b0b7-8488-4393-a7c0-5739a7144b60"),
                        Kind: sdk.String("illo"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("BH"),
                        CountryDartID: sdk.String("voluptas"),
                        DartID: sdk.String("corrupti"),
                        Kind: sdk.String("minima"),
                        Name: sdk.String("Tomas Tromp"),
                        RegionCode: sdk.String("vel"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("HR"),
                        CountryDartID: sdk.String("officia"),
                        DartID: sdk.String("natus"),
                        Kind: sdk.String("sed"),
                        Name: sdk.String("Paulette Borer"),
                        RegionCode: sdk.String("temporibus"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("NO"),
                        CountryDartID: sdk.String("adipisci"),
                        DartID: sdk.String("dicta"),
                        Kind: sdk.String("magnam"),
                        Name: sdk.String("Heidi Zieme"),
                        RegionCode: sdk.String("iure"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("RO"),
                        CountryDartID: sdk.String("minus"),
                        DartID: sdk.String("ipsa"),
                        Kind: sdk.String("tempore"),
                        Name: sdk.String("Brett Johnson"),
                        RegionCode: sdk.String("nesciunt"),
                    },
                },
            },
            ID: sdk.String("perferendis"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("labore"),
            },
            Kind: sdk.String("cumque"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("consequuntur"),
                        Kind: sdk.String("ipsa"),
                        LanguageCode: sdk.String("non"),
                        Name: sdk.String("Lola Stoltenberg"),
                    },
                    shared.Language{
                        ID: sdk.String("numquam"),
                        Kind: sdk.String("velit"),
                        LanguageCode: sdk.String("quibusdam"),
                        Name: sdk.String("Larry Treutel Sr."),
                    },
                    shared.Language{
                        ID: sdk.String("aspernatur"),
                        Kind: sdk.String("doloremque"),
                        LanguageCode: sdk.String("doloribus"),
                        Name: sdk.String("Dr. Max Wolf"),
                    },
                    shared.Language{
                        ID: sdk.String("id"),
                        Kind: sdk.String("mollitia"),
                        LanguageCode: sdk.String("adipisci"),
                        Name: sdk.String("Sheri Adams"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("laborum"),
            },
            Name: sdk.String("Lynne Wunsch"),
            SubaccountID: sdk.String("similique"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("nihil"),
                        DartID: sdk.String("debitis"),
                        Kind: sdk.String("rem"),
                        MajorVersion: sdk.String("impedit"),
                        MinorVersion: sdk.String("recusandae"),
                        Name: sdk.String("Emilio Kirlin"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("ullam"),
                        DartID: sdk.String("praesentium"),
                        Kind: sdk.String("corrupti"),
                        MajorVersion: sdk.String("quibusdam"),
                        MinorVersion: sdk.String("ab"),
                        Name: sdk.String("Travis Carroll"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("aperiam"),
                        DartID: sdk.String("minus"),
                        Kind: sdk.String("iste"),
                        MajorVersion: sdk.String("laborum"),
                        MinorVersion: sdk.String("occaecati"),
                        Name: sdk.String("Karen Ratke"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("ab"),
                        Kind: sdk.String("deleniti"),
                        Name: sdk.String("Sandra Turner"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("perferendis"),
                        Kind: sdk.String("maxime"),
                        Name: sdk.String("Johanna Frami III"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("laborum"),
                        Kind: sdk.String("amet"),
                        Name: sdk.String("Mary Franecki"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("TV"),
                        CountryDartID: sdk.String("itaque"),
                        ID: sdk.String("quos"),
                        Kind: sdk.String("quam"),
                        Name: sdk.String("Alice Langworth"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GU"),
                        CountryDartID: sdk.String("debitis"),
                        ID: sdk.String("eos"),
                        Kind: sdk.String("amet"),
                        Name: sdk.String("Louise Lynch"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("CW"),
                        CountryDartID: sdk.String("adipisci"),
                        ID: sdk.String("alias"),
                        Kind: sdk.String("voluptatum"),
                        Name: sdk.String("Kendra Tromp"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("repellendus"),
                        Kind: sdk.String("optio"),
                        MajorVersion: sdk.String("a"),
                        MinorVersion: sdk.String("ut"),
                        Name: sdk.String("Abraham Satterfield"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("perferendis"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("nostrum"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Rachel Feest"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("perferendis"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("ducimus"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Woodrow Dach"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("exercitationem"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("porro"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Shannon Ankunding"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("dolorum"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("possimus"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Dean Jast MD"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("alias"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("iure"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Anthony Lemke"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("distinctio"),
                        Kind: sdk.String("quam"),
                        Name: sdk.String("Tami Nolan"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("nostrum"),
                        Kind: sdk.String("officiis"),
                        Name: sdk.String("Carrie Morar"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("corporis"),
                        Kind: sdk.String("atque"),
                        Name: sdk.String("Dianne Kemmer"),
                    },
                },
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("recusandae"),
        ID: "ea05970a-d420-47b1-9a88-007c1807be9c",
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corrupti",
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dignissimos"),
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
            AccountID: sdk.String("ipsam"),
            AdvertiserID: sdk.String("laudantium"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("enim"),
                Etag: sdk.String("nam"),
                ID: sdk.String("4647998b-0342-45c1-886b-3213c752beb4"),
                Kind: sdk.String("dignissimos"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("molestiae"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumSaturday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumWednesday,
                },
                HoursOfDay: []int{
                    694555,
                    180251,
                    539971,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("ST"),
                        CountryDartID: sdk.String("numquam"),
                        DartID: sdk.String("eveniet"),
                        Kind: sdk.String("beatae"),
                        MetroCode: sdk.String("nobis"),
                        MetroDmaID: sdk.String("illum"),
                        Name: sdk.String("Lorraine Tillman"),
                        RegionCode: sdk.String("nam"),
                        RegionDartID: sdk.String("temporibus"),
                    },
                    shared.City{
                        CountryCode: sdk.String("MP"),
                        CountryDartID: sdk.String("quam"),
                        DartID: sdk.String("iste"),
                        Kind: sdk.String("rerum"),
                        MetroCode: sdk.String("laudantium"),
                        MetroDmaID: sdk.String("necessitatibus"),
                        Name: sdk.String("Katrina Bailey"),
                        RegionCode: sdk.String("neque"),
                        RegionDartID: sdk.String("corrupti"),
                    },
                    shared.City{
                        CountryCode: sdk.String("DK"),
                        CountryDartID: sdk.String("nam"),
                        DartID: sdk.String("fugit"),
                        Kind: sdk.String("velit"),
                        MetroCode: sdk.String("iste"),
                        MetroDmaID: sdk.String("esse"),
                        Name: sdk.String("Pam Steuber"),
                        RegionCode: sdk.String("rem"),
                        RegionDartID: sdk.String("laboriosam"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("GW"),
                        DartID: sdk.String("incidunt"),
                        Kind: sdk.String("eum"),
                        Name: sdk.String("Mae Kunze"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("NU"),
                        DartID: sdk.String("ab"),
                        Kind: sdk.String("sequi"),
                        Name: sdk.String("Ida Skiles"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("UY"),
                        DartID: sdk.String("dicta"),
                        Kind: sdk.String("recusandae"),
                        Name: sdk.String("Brett Collins"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("LV"),
                        CountryDartID: sdk.String("labore"),
                        DartID: sdk.String("dolorem"),
                        DmaID: sdk.String("repellendus"),
                        Kind: sdk.String("aspernatur"),
                        MetroCode: sdk.String("reiciendis"),
                        Name: sdk.String("Mrs. Carroll Casper"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("MD"),
                        CountryDartID: sdk.String("similique"),
                        DartID: sdk.String("rerum"),
                        DmaID: sdk.String("nihil"),
                        Kind: sdk.String("labore"),
                        MetroCode: sdk.String("repudiandae"),
                        Name: sdk.String("Isabel Muller"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("ipsa"),
                        CountryCode: sdk.String("TD"),
                        CountryDartID: sdk.String("quos"),
                        ID: sdk.String("e57c45b8-387f-4797-a669-2f70b58696cb"),
                        Kind: sdk.String("consequatur"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("aperiam"),
                        CountryCode: sdk.String("MC"),
                        CountryDartID: sdk.String("dolores"),
                        ID: sdk.String("b9f3dfc5-5f7e-4abf-afec-d9af7d885835"),
                        Kind: sdk.String("incidunt"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("veniam"),
                        CountryCode: sdk.String("AE"),
                        CountryDartID: sdk.String("minus"),
                        ID: sdk.String("b3371a5d-5ab3-4355-b877-097b1a9bd0da"),
                        Kind: sdk.String("earum"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("libero"),
                        CountryCode: sdk.String("WF"),
                        CountryDartID: sdk.String("ut"),
                        ID: sdk.String("08e080ca-6a1b-4878-9621-508021501bee"),
                        Kind: sdk.String("repellendus"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("CR"),
                        CountryDartID: sdk.String("vero"),
                        DartID: sdk.String("debitis"),
                        Kind: sdk.String("rem"),
                        Name: sdk.String("Joshua Bradtke"),
                        RegionCode: sdk.String("nihil"),
                    },
                },
            },
            ID: sdk.String("iste"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("sapiente"),
            },
            Kind: sdk.String("quas"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("temporibus"),
                        Kind: sdk.String("quis"),
                        LanguageCode: sdk.String("quae"),
                        Name: sdk.String("Sadie Auer"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("eos"),
            },
            Name: sdk.String("Cassandra Ledner"),
            SubaccountID: sdk.String("ut"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("quisquam"),
                        DartID: sdk.String("aperiam"),
                        Kind: sdk.String("commodi"),
                        MajorVersion: sdk.String("officia"),
                        MinorVersion: sdk.String("aliquid"),
                        Name: sdk.String("Joe McGlynn"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("corrupti"),
                        DartID: sdk.String("modi"),
                        Kind: sdk.String("nemo"),
                        MajorVersion: sdk.String("corporis"),
                        MinorVersion: sdk.String("dolores"),
                        Name: sdk.String("Dwight Shields I"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("voluptatum"),
                        Kind: sdk.String("harum"),
                        Name: sdk.String("Neal Senger"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GH"),
                        CountryDartID: sdk.String("molestias"),
                        ID: sdk.String("numquam"),
                        Kind: sdk.String("vero"),
                        Name: sdk.String("Mario Mueller"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("DO"),
                        CountryDartID: sdk.String("itaque"),
                        ID: sdk.String("illo"),
                        Kind: sdk.String("minima"),
                        Name: sdk.String("Andrea Auer"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("non"),
                        Kind: sdk.String("doloremque"),
                        MajorVersion: sdk.String("necessitatibus"),
                        MinorVersion: sdk.String("nam"),
                        Name: sdk.String("Bonnie Howell"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("occaecati"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("asperiores"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Beth Langosh"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("aut"),
                        Kind: sdk.String("quam"),
                        MajorVersion: sdk.String("atque"),
                        MinorVersion: sdk.String("corrupti"),
                        Name: sdk.String("Debra Franey"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("non"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("officiis"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Eula Balistreri"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("ullam"),
                        Kind: sdk.String("deleniti"),
                        MajorVersion: sdk.String("impedit"),
                        MinorVersion: sdk.String("magnam"),
                        Name: sdk.String("Charles Toy"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("possimus"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("aliquam"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Ivan Kshlerin"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("nesciunt"),
                        Kind: sdk.String("aspernatur"),
                        MajorVersion: sdk.String("tenetur"),
                        MinorVersion: sdk.String("tempora"),
                        Name: sdk.String("Felipe Ruecker"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("sit"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("pariatur"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Mrs. Mercedes Bradtke"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("illum"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("ipsum"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Percy Howell"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("quos"),
                        Kind: sdk.String("error"),
                        Name: sdk.String("Justin Wunsch IV"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("quisquam"),
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Kristi Hirthe"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("repellendus"),
                        Kind: sdk.String("neque"),
                        Name: sdk.String("Miss Lynette Ondricka MD"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("facere"),
                        Kind: sdk.String("praesentium"),
                        Name: sdk.String("Leonard Renner"),
                    },
                },
            },
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "explicabo",
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("recusandae"),
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
