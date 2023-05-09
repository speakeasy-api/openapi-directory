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
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("velit"),
        ID: "1a78c426-4cab-451b-ac0d-08c6b93203cd",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "in",
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("nihil"),
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
            AccountID: sdk.String("eum"),
            AdvertiserID: sdk.String("nihil"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptate"),
                Etag: sdk.String("eius"),
                ID: sdk.String("3837d1aa-ff2b-4ecc-b8ba-fd481abfcb61"),
                Kind: sdk.String("optio"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("magni"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumThursday,
                    shared.DayPartTargetingDaysOfWeekEnumWednesday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                },
                HoursOfDay: []int{
                    727326,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("GB"),
                        CountryDartID: sdk.String("velit"),
                        DartID: sdk.String("repudiandae"),
                        Kind: sdk.String("hic"),
                        MetroCode: sdk.String("qui"),
                        MetroDmaID: sdk.String("est"),
                        Name: sdk.String("Janice Bailey"),
                        RegionCode: sdk.String("placeat"),
                        RegionDartID: sdk.String("ratione"),
                    },
                    shared.City{
                        CountryCode: sdk.String("BN"),
                        CountryDartID: sdk.String("perspiciatis"),
                        DartID: sdk.String("consequatur"),
                        Kind: sdk.String("soluta"),
                        MetroCode: sdk.String("veritatis"),
                        MetroDmaID: sdk.String("incidunt"),
                        Name: sdk.String("Miss Kelly Hahn"),
                        RegionCode: sdk.String("in"),
                        RegionDartID: sdk.String("assumenda"),
                    },
                    shared.City{
                        CountryCode: sdk.String("AF"),
                        CountryDartID: sdk.String("eum"),
                        DartID: sdk.String("esse"),
                        Kind: sdk.String("sequi"),
                        MetroCode: sdk.String("distinctio"),
                        MetroDmaID: sdk.String("ut"),
                        Name: sdk.String("Annette Lesch"),
                        RegionCode: sdk.String("atque"),
                        RegionDartID: sdk.String("labore"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("BS"),
                        DartID: sdk.String("quo"),
                        Kind: sdk.String("dolore"),
                        Name: sdk.String("Jon Franecki"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("DJ"),
                        DartID: sdk.String("saepe"),
                        Kind: sdk.String("corporis"),
                        Name: sdk.String("Lionel Adams II"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("KR"),
                        DartID: sdk.String("quasi"),
                        Kind: sdk.String("temporibus"),
                        Name: sdk.String("Rolando Champlin"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("TW"),
                        CountryDartID: sdk.String("commodi"),
                        DartID: sdk.String("sint"),
                        DmaID: sdk.String("mollitia"),
                        Kind: sdk.String("illo"),
                        MetroCode: sdk.String("enim"),
                        Name: sdk.String("Lawrence Kertzmann"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("GB"),
                        CountryDartID: sdk.String("culpa"),
                        DartID: sdk.String("voluptatem"),
                        DmaID: sdk.String("qui"),
                        Kind: sdk.String("delectus"),
                        MetroCode: sdk.String("reiciendis"),
                        Name: sdk.String("Paula Boyle"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("LT"),
                        CountryDartID: sdk.String("illum"),
                        DartID: sdk.String("soluta"),
                        DmaID: sdk.String("magnam"),
                        Kind: sdk.String("corrupti"),
                        MetroCode: sdk.String("fuga"),
                        Name: sdk.String("Willie Buckridge"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("CZ"),
                        CountryDartID: sdk.String("doloribus"),
                        DartID: sdk.String("velit"),
                        DmaID: sdk.String("nihil"),
                        Kind: sdk.String("delectus"),
                        MetroCode: sdk.String("quam"),
                        Name: sdk.String("Donna Lubowitz"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("veniam"),
                        CountryCode: sdk.String("CH"),
                        CountryDartID: sdk.String("velit"),
                        ID: sdk.String("0c427a3f-cd36-42ad-94af-448118376526"),
                        Kind: sdk.String("consequuntur"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("optio"),
                        CountryCode: sdk.String("CK"),
                        CountryDartID: sdk.String("possimus"),
                        ID: sdk.String("81759af0-9933-4473-8cb7-911d2669ffa9"),
                        Kind: sdk.String("minus"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("praesentium"),
                        CountryCode: sdk.String("ZA"),
                        CountryDartID: sdk.String("eveniet"),
                        ID: sdk.String("1e77baca-8452-449e-88d2-ccb4e5f074ab"),
                        Kind: sdk.String("voluptatibus"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("temporibus"),
                        CountryCode: sdk.String("SZ"),
                        CountryDartID: sdk.String("itaque"),
                        ID: sdk.String("ab7fb200-0bc7-424c-b65f-a14804c10810"),
                        Kind: sdk.String("iure"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("MK"),
                        CountryDartID: sdk.String("voluptate"),
                        DartID: sdk.String("cupiditate"),
                        Kind: sdk.String("exercitationem"),
                        Name: sdk.String("Jody Funk"),
                        RegionCode: sdk.String("ad"),
                    },
                },
            },
            ID: sdk.String("assumenda"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("eveniet"),
            },
            Kind: sdk.String("neque"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("nisi"),
                        Kind: sdk.String("error"),
                        LanguageCode: sdk.String("nemo"),
                        Name: sdk.String("Marianne Bergnaum"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("necessitatibus"),
            },
            Name: sdk.String("Cary Jones"),
            SubaccountID: sdk.String("ullam"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("dolores"),
                        DartID: sdk.String("quisquam"),
                        Kind: sdk.String("adipisci"),
                        MajorVersion: sdk.String("blanditiis"),
                        MinorVersion: sdk.String("omnis"),
                        Name: sdk.String("Mae Fritsch"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("quas"),
                        DartID: sdk.String("illo"),
                        Kind: sdk.String("magnam"),
                        MajorVersion: sdk.String("provident"),
                        MinorVersion: sdk.String("deserunt"),
                        Name: sdk.String("Melody Kulas"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("saepe"),
                        DartID: sdk.String("sed"),
                        Kind: sdk.String("vitae"),
                        MajorVersion: sdk.String("doloribus"),
                        MinorVersion: sdk.String("labore"),
                        Name: sdk.String("Leslie Shanahan"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("impedit"),
                        DartID: sdk.String("optio"),
                        Kind: sdk.String("non"),
                        MajorVersion: sdk.String("laborum"),
                        MinorVersion: sdk.String("sequi"),
                        Name: sdk.String("Donnie Zulauf"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("laudantium"),
                        Kind: sdk.String("neque"),
                        Name: sdk.String("Sergio Rosenbaum"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("modi"),
                        Kind: sdk.String("amet"),
                        Name: sdk.String("Miss Tiffany Leannon"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("excepturi"),
                        Kind: sdk.String("exercitationem"),
                        Name: sdk.String("Earnest Kuphal"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("laborum"),
                        Kind: sdk.String("dolorum"),
                        Name: sdk.String("Terry Medhurst DDS"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("LV"),
                        CountryDartID: sdk.String("minus"),
                        ID: sdk.String("suscipit"),
                        Kind: sdk.String("commodi"),
                        Name: sdk.String("Dan Walker"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("SZ"),
                        CountryDartID: sdk.String("deleniti"),
                        ID: sdk.String("nihil"),
                        Kind: sdk.String("totam"),
                        Name: sdk.String("Boyd Mraz"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("IE"),
                        CountryDartID: sdk.String("magni"),
                        ID: sdk.String("molestiae"),
                        Kind: sdk.String("eius"),
                        Name: sdk.String("Betsy Bayer"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("sequi"),
                        Kind: sdk.String("similique"),
                        MajorVersion: sdk.String("error"),
                        MinorVersion: sdk.String("facilis"),
                        Name: sdk.String("Dr. Alexander Green"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("corporis"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("officia"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Leo Buckridge"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("officia"),
                        Kind: sdk.String("molestias"),
                        MajorVersion: sdk.String("asperiores"),
                        MinorVersion: sdk.String("blanditiis"),
                        Name: sdk.String("Pat Langosh"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("in"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("mollitia"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Irene Pagac"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("dignissimos"),
                        Kind: sdk.String("reprehenderit"),
                        MajorVersion: sdk.String("ducimus"),
                        MinorVersion: sdk.String("quisquam"),
                        Name: sdk.String("Olive Bahringer"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("id"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("voluptate"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Amy Sipes"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("vitae"),
                        Kind: sdk.String("nulla"),
                        MajorVersion: sdk.String("asperiores"),
                        MinorVersion: sdk.String("ullam"),
                        Name: sdk.String("Dr. Cody Hickle"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("architecto"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("officiis"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Chris Okuneva DVM"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("repellat"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("perspiciatis"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Sabrina Robel"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("animi"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("temporibus"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Nick Schuster V"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("molestias"),
                        Kind: sdk.String("eum"),
                        Name: sdk.String("Mario Bogisich"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("hic"),
                        Kind: sdk.String("iste"),
                        Name: sdk.String("Herbert Schumm"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("fuga"),
                        Kind: sdk.String("labore"),
                        Name: sdk.String("Nadine Stracke"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("velit"),
                        Kind: sdk.String("reiciendis"),
                        Name: sdk.String("Jake Turner"),
                    },
                },
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("quos"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "pariatur",
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("a"),
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
        AccessToken: sdk.String("corporis"),
        AdvertiserID: sdk.String("porro"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("quia"),
        Ids: []string{
            "culpa",
            "possimus",
            "eligendi",
        },
        Key: sdk.String("cum"),
        MaxResults: sdk.Int64(54726),
        OauthToken: sdk.String("suscipit"),
        PageToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        QuotaUser: sdk.String("porro"),
        SearchString: sdk.String("et"),
        SortField: operations.DfareportingTargetingTemplatesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetingTemplatesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("veniam"),
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
            AccountID: sdk.String("quibusdam"),
            AdvertiserID: sdk.String("vitae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quasi"),
                Etag: sdk.String("veniam"),
                ID: sdk.String("54d59103-a86f-4b6d-ab44-82dbadf2ffda"),
                Kind: sdk.String("doloremque"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("eligendi"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                },
                HoursOfDay: []int{
                    745815,
                    164098,
                    977455,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("CY"),
                        CountryDartID: sdk.String("harum"),
                        DartID: sdk.String("corporis"),
                        Kind: sdk.String("quis"),
                        MetroCode: sdk.String("quos"),
                        MetroDmaID: sdk.String("eum"),
                        Name: sdk.String("Ms. Kim Stracke"),
                        RegionCode: sdk.String("alias"),
                        RegionDartID: sdk.String("aliquid"),
                    },
                    shared.City{
                        CountryCode: sdk.String("TV"),
                        CountryDartID: sdk.String("deserunt"),
                        DartID: sdk.String("rem"),
                        Kind: sdk.String("incidunt"),
                        MetroCode: sdk.String("fuga"),
                        MetroDmaID: sdk.String("soluta"),
                        Name: sdk.String("Frank Morar"),
                        RegionCode: sdk.String("maxime"),
                        RegionDartID: sdk.String("reprehenderit"),
                    },
                    shared.City{
                        CountryCode: sdk.String("AD"),
                        CountryDartID: sdk.String("rerum"),
                        DartID: sdk.String("nesciunt"),
                        Kind: sdk.String("nulla"),
                        MetroCode: sdk.String("repudiandae"),
                        MetroDmaID: sdk.String("beatae"),
                        Name: sdk.String("Toni Brakus DVM"),
                        RegionCode: sdk.String("earum"),
                        RegionDartID: sdk.String("earum"),
                    },
                    shared.City{
                        CountryCode: sdk.String("FR"),
                        CountryDartID: sdk.String("qui"),
                        DartID: sdk.String("qui"),
                        Kind: sdk.String("quasi"),
                        MetroCode: sdk.String("deleniti"),
                        MetroDmaID: sdk.String("voluptate"),
                        Name: sdk.String("Thomas Williamson"),
                        RegionCode: sdk.String("cum"),
                        RegionDartID: sdk.String("ab"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("PW"),
                        DartID: sdk.String("delectus"),
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Kyle Volkman"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("EC"),
                        DartID: sdk.String("laboriosam"),
                        Kind: sdk.String("sint"),
                        Name: sdk.String("Vernon Konopelski"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("BZ"),
                        DartID: sdk.String("voluptate"),
                        Kind: sdk.String("doloremque"),
                        Name: sdk.String("Brandi Bogan"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("LK"),
                        DartID: sdk.String("sapiente"),
                        Kind: sdk.String("enim"),
                        Name: sdk.String("Forrest Wisozk"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("BM"),
                        CountryDartID: sdk.String("nesciunt"),
                        DartID: sdk.String("amet"),
                        DmaID: sdk.String("rerum"),
                        Kind: sdk.String("qui"),
                        MetroCode: sdk.String("expedita"),
                        Name: sdk.String("Penny Towne"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("TW"),
                        CountryDartID: sdk.String("voluptas"),
                        DartID: sdk.String("consequuntur"),
                        DmaID: sdk.String("et"),
                        Kind: sdk.String("ipsam"),
                        MetroCode: sdk.String("accusantium"),
                        Name: sdk.String("Essie Marks"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("IS"),
                        CountryDartID: sdk.String("ullam"),
                        DartID: sdk.String("magni"),
                        DmaID: sdk.String("totam"),
                        Kind: sdk.String("maiores"),
                        MetroCode: sdk.String("aperiam"),
                        Name: sdk.String("Karen Little DDS"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("FI"),
                        CountryDartID: sdk.String("ipsum"),
                        DartID: sdk.String("eius"),
                        DmaID: sdk.String("ipsam"),
                        Kind: sdk.String("odit"),
                        MetroCode: sdk.String("fugit"),
                        Name: sdk.String("Gregory Dickinson MD"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("et"),
                        CountryCode: sdk.String("UY"),
                        CountryDartID: sdk.String("earum"),
                        ID: sdk.String("b2d82712-db5a-45fb-9ca9-e1d5e0011bd4"),
                        Kind: sdk.String("pariatur"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("consequuntur"),
                        CountryCode: sdk.String("ZW"),
                        CountryDartID: sdk.String("maiores"),
                        ID: sdk.String("fd1a6552-4dde-4adf-8b1a-8ec2fde30306"),
                        Kind: sdk.String("similique"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("ex"),
                        CountryCode: sdk.String("BS"),
                        CountryDartID: sdk.String("dolorum"),
                        ID: sdk.String("900db365-cdbc-4778-813a-2a6dc053aa68"),
                        Kind: sdk.String("magnam"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("commodi"),
                        CountryCode: sdk.String("JP"),
                        CountryDartID: sdk.String("sit"),
                        ID: sdk.String("cd14c597-e813-477f-a338-81fc7de20984"),
                        Kind: sdk.String("alias"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("ES"),
                        CountryDartID: sdk.String("perspiciatis"),
                        DartID: sdk.String("voluptates"),
                        Kind: sdk.String("aliquam"),
                        Name: sdk.String("Tonya Kohler"),
                        RegionCode: sdk.String("iusto"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("PW"),
                        CountryDartID: sdk.String("sequi"),
                        DartID: sdk.String("aliquid"),
                        Kind: sdk.String("veniam"),
                        Name: sdk.String("Troy Bergnaum"),
                        RegionCode: sdk.String("porro"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("LU"),
                        CountryDartID: sdk.String("commodi"),
                        DartID: sdk.String("voluptatibus"),
                        Kind: sdk.String("omnis"),
                        Name: sdk.String("Mack Hegmann"),
                        RegionCode: sdk.String("ullam"),
                    },
                },
            },
            ID: sdk.String("id"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("cupiditate"),
            },
            Kind: sdk.String("esse"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("quos"),
                        Kind: sdk.String("vitae"),
                        LanguageCode: sdk.String("reiciendis"),
                        Name: sdk.String("Henry Wuckert MD"),
                    },
                    shared.Language{
                        ID: sdk.String("quaerat"),
                        Kind: sdk.String("ipsum"),
                        LanguageCode: sdk.String("nisi"),
                        Name: sdk.String("Freddie Ryan"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("perspiciatis"),
            },
            Name: sdk.String("Edmund Christiansen"),
            SubaccountID: sdk.String("debitis"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("cum"),
                        DartID: sdk.String("reprehenderit"),
                        Kind: sdk.String("quibusdam"),
                        MajorVersion: sdk.String("laudantium"),
                        MinorVersion: sdk.String("repellat"),
                        Name: sdk.String("Jacqueline Becker"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("dolore"),
                        DartID: sdk.String("veritatis"),
                        Kind: sdk.String("porro"),
                        MajorVersion: sdk.String("optio"),
                        MinorVersion: sdk.String("eligendi"),
                        Name: sdk.String("Betsy Jaskolski"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("maiores"),
                        DartID: sdk.String("animi"),
                        Kind: sdk.String("aliquid"),
                        MajorVersion: sdk.String("commodi"),
                        MinorVersion: sdk.String("delectus"),
                        Name: sdk.String("Bonnie Kub"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("autem"),
                        Kind: sdk.String("quibusdam"),
                        Name: sdk.String("Ms. Courtney Gorczany"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("EC"),
                        CountryDartID: sdk.String("debitis"),
                        ID: sdk.String("quos"),
                        Kind: sdk.String("inventore"),
                        Name: sdk.String("Trevor Lueilwitz"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("voluptate"),
                        Kind: sdk.String("voluptatem"),
                        MajorVersion: sdk.String("harum"),
                        MinorVersion: sdk.String("tempora"),
                        Name: sdk.String("Teresa Nikolaus"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("voluptate"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("deserunt"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Maureen Ryan"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("nam"),
                        Kind: sdk.String("aliquid"),
                        MajorVersion: sdk.String("libero"),
                        MinorVersion: sdk.String("magnam"),
                        Name: sdk.String("Clara Prohaska III"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("voluptates"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("laudantium"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Dr. Kristy Wilderman DDS"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("quia"),
                        Kind: sdk.String("esse"),
                        MajorVersion: sdk.String("quasi"),
                        MinorVersion: sdk.String("laudantium"),
                        Name: sdk.String("May Bartell"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("nesciunt"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("quod"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Nancy Marks"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("similique"),
                        Kind: sdk.String("totam"),
                        MajorVersion: sdk.String("sed"),
                        MinorVersion: sdk.String("perferendis"),
                        Name: sdk.String("Mabel Bergstrom"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("eius"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("deserunt"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Donnie Schulist"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("aperiam"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("commodi"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Ted Prosacco"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("dolorum"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("optio"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Vicky Runolfsson"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("provident"),
                        Kind: sdk.String("dolorum"),
                        Name: sdk.String("Elmer Hane"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("harum"),
                        Kind: sdk.String("architecto"),
                        Name: sdk.String("Dallas Sporer"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("saepe"),
                        Kind: sdk.String("veritatis"),
                        Name: sdk.String("Lora Stehr"),
                    },
                },
            },
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("nam"),
        ID: "e0fc4c2f-3647-4d6b-89db-dc08a19d97b9",
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "beatae",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("illum"),
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
            AccountID: sdk.String("perferendis"),
            AdvertiserID: sdk.String("aut"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("repellendus"),
                Etag: sdk.String("ad"),
                ID: sdk.String("a3a09d58-7bd3-441b-a5de-4290537fd8ba"),
                Kind: sdk.String("quis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("necessitatibus"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumWednesday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumSaturday,
                },
                HoursOfDay: []int{
                    789833,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("GS"),
                        CountryDartID: sdk.String("soluta"),
                        DartID: sdk.String("rem"),
                        Kind: sdk.String("incidunt"),
                        MetroCode: sdk.String("esse"),
                        MetroDmaID: sdk.String("modi"),
                        Name: sdk.String("Dennis Renner"),
                        RegionCode: sdk.String("culpa"),
                        RegionDartID: sdk.String("cupiditate"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("TR"),
                        DartID: sdk.String("ipsa"),
                        Kind: sdk.String("asperiores"),
                        Name: sdk.String("Priscilla Haag"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("MG"),
                        CountryDartID: sdk.String("libero"),
                        DartID: sdk.String("quasi"),
                        DmaID: sdk.String("deserunt"),
                        Kind: sdk.String("quasi"),
                        MetroCode: sdk.String("ipsa"),
                        Name: sdk.String("Philip Hirthe"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("DZ"),
                        CountryDartID: sdk.String("consequuntur"),
                        DartID: sdk.String("earum"),
                        DmaID: sdk.String("illum"),
                        Kind: sdk.String("est"),
                        MetroCode: sdk.String("qui"),
                        Name: sdk.String("Bertha Cummerata Jr."),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("FJ"),
                        CountryDartID: sdk.String("sint"),
                        DartID: sdk.String("quis"),
                        DmaID: sdk.String("eos"),
                        Kind: sdk.String("ut"),
                        MetroCode: sdk.String("temporibus"),
                        Name: sdk.String("Donnie Mante III"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("blanditiis"),
                        CountryCode: sdk.String("GD"),
                        CountryDartID: sdk.String("reiciendis"),
                        ID: sdk.String("bb792d2b-814f-461c-88de-8b02b13a185b"),
                        Kind: sdk.String("placeat"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("quos"),
                        CountryCode: sdk.String("PS"),
                        CountryDartID: sdk.String("doloribus"),
                        ID: sdk.String("ff44ec8c-4df6-41ea-a0b9-9b5e31a1e360"),
                        Kind: sdk.String("quasi"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("deserunt"),
                        CountryCode: sdk.String("FI"),
                        CountryDartID: sdk.String("pariatur"),
                        ID: sdk.String("6163ae1c-1e22-42a2-90a4-293f368d63af"),
                        Kind: sdk.String("perspiciatis"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("AS"),
                        CountryDartID: sdk.String("sit"),
                        DartID: sdk.String("fugiat"),
                        Kind: sdk.String("corporis"),
                        Name: sdk.String("Hugo Schulist"),
                        RegionCode: sdk.String("accusantium"),
                    },
                },
            },
            ID: sdk.String("voluptatem"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("temporibus"),
            },
            Kind: sdk.String("impedit"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("laboriosam"),
                        Kind: sdk.String("voluptas"),
                        LanguageCode: sdk.String("vitae"),
                        Name: sdk.String("Kristie Waters DDS"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("vero"),
            },
            Name: sdk.String("Anne Franey"),
            SubaccountID: sdk.String("dolor"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("odit"),
                        DartID: sdk.String("reprehenderit"),
                        Kind: sdk.String("fugit"),
                        MajorVersion: sdk.String("eius"),
                        MinorVersion: sdk.String("at"),
                        Name: sdk.String("Tonya Batz"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("velit"),
                        DartID: sdk.String("dolorum"),
                        Kind: sdk.String("saepe"),
                        MajorVersion: sdk.String("voluptatum"),
                        MinorVersion: sdk.String("cupiditate"),
                        Name: sdk.String("Audrey Jacobi"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("voluptates"),
                        DartID: sdk.String("praesentium"),
                        Kind: sdk.String("neque"),
                        MajorVersion: sdk.String("corrupti"),
                        MinorVersion: sdk.String("quae"),
                        Name: sdk.String("Otis Wisozk"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("esse"),
                        Kind: sdk.String("omnis"),
                        Name: sdk.String("Tamara Hettinger"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GR"),
                        CountryDartID: sdk.String("est"),
                        ID: sdk.String("natus"),
                        Kind: sdk.String("quidem"),
                        Name: sdk.String("Elaine Gislason"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GM"),
                        CountryDartID: sdk.String("modi"),
                        ID: sdk.String("recusandae"),
                        Kind: sdk.String("necessitatibus"),
                        Name: sdk.String("Sandra Marks"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("SN"),
                        CountryDartID: sdk.String("repellat"),
                        ID: sdk.String("ex"),
                        Kind: sdk.String("necessitatibus"),
                        Name: sdk.String("Ora Effertz"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("nemo"),
                        Kind: sdk.String("voluptate"),
                        MajorVersion: sdk.String("nam"),
                        MinorVersion: sdk.String("rerum"),
                        Name: sdk.String("Archie Leffler IV"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("veniam"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("quam"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Noel Bailey"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("dolorum"),
                        Kind: sdk.String("laborum"),
                        MajorVersion: sdk.String("possimus"),
                        MinorVersion: sdk.String("suscipit"),
                        Name: sdk.String("Jordan Hickle"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("distinctio"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("quam"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Darrin Herman"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("fuga"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("eveniet"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Dominic Sauer"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("vel"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("nesciunt"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Kenny Gerhold"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("voluptate"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("iusto"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Wade Lockman"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("iste"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("quibusdam"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Harriet Heidenreich"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("neque"),
                        Kind: sdk.String("ad"),
                        Name: sdk.String("Mr. Carrie Koch"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("vitae"),
                        Kind: sdk.String("quam"),
                        Name: sdk.String("Doyle Beahan"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("neque"),
                        Kind: sdk.String("nobis"),
                        Name: sdk.String("Camille Schinner"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("numquam"),
                        Kind: sdk.String("a"),
                        Name: sdk.String("Michael Considine"),
                    },
                },
            },
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("facere"),
        Fields: sdk.String("sed"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "accusamus",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("sapiente"),
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
