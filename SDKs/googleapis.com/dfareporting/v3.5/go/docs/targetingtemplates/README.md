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
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("aspernatur"),
        ID: "0f98f0e5-aa32-4c0e-9a5c-fcdab7e8cecf",
        Key: sdk.String("in"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sed",
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("corrupti"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TargetingTemplate: &shared.TargetingTemplate{
            AccountID: sdk.String("ab"),
            AdvertiserID: sdk.String("itaque"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("adipisci"),
                Etag: sdk.String("dicta"),
                ID: sdk.String("d40c9a96-0b23-4918-90e8-c0c4f3e16a36"),
                Kind: sdk.String("alias"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("culpa"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumSunday,
                },
                HoursOfDay: []int{
                    550176,
                    464550,
                    253702,
                    100618,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("SO"),
                        CountryDartID: sdk.String("voluptas"),
                        DartID: sdk.String("ipsam"),
                        Kind: sdk.String("debitis"),
                        MetroCode: sdk.String("eos"),
                        MetroDmaID: sdk.String("amet"),
                        Name: sdk.String("Louise Lynch"),
                        RegionCode: sdk.String("dolorem"),
                        RegionDartID: sdk.String("adipisci"),
                    },
                    shared.City{
                        CountryCode: sdk.String("AD"),
                        CountryDartID: sdk.String("voluptatum"),
                        DartID: sdk.String("ducimus"),
                        Kind: sdk.String("maxime"),
                        MetroCode: sdk.String("necessitatibus"),
                        MetroDmaID: sdk.String("numquam"),
                        Name: sdk.String("Marilyn Skiles"),
                        RegionCode: sdk.String("ut"),
                        RegionDartID: sdk.String("nulla"),
                    },
                    shared.City{
                        CountryCode: sdk.String("PA"),
                        CountryDartID: sdk.String("quo"),
                        DartID: sdk.String("atque"),
                        Kind: sdk.String("labore"),
                        MetroCode: sdk.String("perferendis"),
                        MetroDmaID: sdk.String("nostrum"),
                        Name: sdk.String("Rachel Feest"),
                        RegionCode: sdk.String("assumenda"),
                        RegionDartID: sdk.String("perferendis"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("MF"),
                        DartID: sdk.String("possimus"),
                        Kind: sdk.String("dolores"),
                        Name: sdk.String("Nina Heidenreich I"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("AG"),
                        DartID: sdk.String("distinctio"),
                        Kind: sdk.String("ullam"),
                        Name: sdk.String("Woodrow Reinger"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("AO"),
                        CountryDartID: sdk.String("harum"),
                        DartID: sdk.String("alias"),
                        DmaID: sdk.String("iure"),
                        Kind: sdk.String("necessitatibus"),
                        MetroCode: sdk.String("doloremque"),
                        Name: sdk.String("Malcolm Hamill"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("KG"),
                        CountryDartID: sdk.String("doloremque"),
                        DartID: sdk.String("voluptatibus"),
                        DmaID: sdk.String("deserunt"),
                        Kind: sdk.String("nobis"),
                        MetroCode: sdk.String("voluptas"),
                        Name: sdk.String("Gretchen Heaney"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("GT"),
                        CountryDartID: sdk.String("quia"),
                        DartID: sdk.String("corporis"),
                        DmaID: sdk.String("atque"),
                        Kind: sdk.String("alias"),
                        MetroCode: sdk.String("quas"),
                        Name: sdk.String("Madeline Kuhic"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("NI"),
                        CountryDartID: sdk.String("recusandae"),
                        DartID: sdk.String("saepe"),
                        DmaID: sdk.String("animi"),
                        Kind: sdk.String("perferendis"),
                        MetroCode: sdk.String("ullam"),
                        Name: sdk.String("Christian Bartell"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("explicabo"),
                        CountryCode: sdk.String("AU"),
                        CountryDartID: sdk.String("dignissimos"),
                        ID: sdk.String("b1da8800-7c18-407b-a9c4-d83a7b585b46"),
                        Kind: sdk.String("ut"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("nihil"),
                        CountryCode: sdk.String("MS"),
                        CountryDartID: sdk.String("molestias"),
                        ID: sdk.String("8b03425c-1486-4b32-93c7-52beb47c78c9"),
                        Kind: sdk.String("commodi"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("PA"),
                        CountryDartID: sdk.String("eos"),
                        DartID: sdk.String("atque"),
                        Kind: sdk.String("voluptatum"),
                        Name: sdk.String("Miss Francis Veum"),
                        RegionCode: sdk.String("neque"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("GI"),
                        CountryDartID: sdk.String("accusamus"),
                        DartID: sdk.String("cumque"),
                        Kind: sdk.String("harum"),
                        Name: sdk.String("Gustavo Mertz"),
                        RegionCode: sdk.String("rerum"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("LI"),
                        CountryDartID: sdk.String("necessitatibus"),
                        DartID: sdk.String("ex"),
                        Kind: sdk.String("perspiciatis"),
                        Name: sdk.String("Jodi Mertz"),
                        RegionCode: sdk.String("adipisci"),
                    },
                },
            },
            ID: sdk.String("nam"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("fugit"),
            },
            Kind: sdk.String("velit"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("esse"),
                        Kind: sdk.String("perferendis"),
                        LanguageCode: sdk.String("libero"),
                        Name: sdk.String("Clint Moore"),
                    },
                    shared.Language{
                        ID: sdk.String("iste"),
                        Kind: sdk.String("ipsam"),
                        LanguageCode: sdk.String("incidunt"),
                        Name: sdk.String("Colleen McDermott"),
                    },
                    shared.Language{
                        ID: sdk.String("fugit"),
                        Kind: sdk.String("dolorum"),
                        LanguageCode: sdk.String("ab"),
                        Name: sdk.String("Phyllis Hilll"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("iusto"),
            },
            Name: sdk.String("Samuel Walker"),
            SubaccountID: sdk.String("aspernatur"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("occaecati"),
                        DartID: sdk.String("nemo"),
                        Kind: sdk.String("atque"),
                        MajorVersion: sdk.String("labore"),
                        MinorVersion: sdk.String("dolorem"),
                        Name: sdk.String("Bruce Witting"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("alias"),
                        Kind: sdk.String("dolore"),
                        Name: sdk.String("Morris Murphy"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("UA"),
                        CountryDartID: sdk.String("accusantium"),
                        ID: sdk.String("error"),
                        Kind: sdk.String("error"),
                        Name: sdk.String("Dr. Ivan Schoen"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("TM"),
                        CountryDartID: sdk.String("minima"),
                        ID: sdk.String("voluptate"),
                        Kind: sdk.String("placeat"),
                        Name: sdk.String("Marion Predovic"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("dignissimos"),
                        Kind: sdk.String("hic"),
                        MajorVersion: sdk.String("reprehenderit"),
                        MinorVersion: sdk.String("provident"),
                        Name: sdk.String("Eunice Jacobi"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("aspernatur"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("repellat"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Mary Reilly"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("vel"),
                        Kind: sdk.String("omnis"),
                        MajorVersion: sdk.String("vel"),
                        MinorVersion: sdk.String("quod"),
                        Name: sdk.String("William Bayer"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("distinctio"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("molestias"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Alfred Stamm"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("quis"),
                        Kind: sdk.String("veniam"),
                        MajorVersion: sdk.String("sapiente"),
                        MinorVersion: sdk.String("dignissimos"),
                        Name: sdk.String("Luke Reichert"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("asperiores"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("itaque"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Marcos Moen"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("temporibus"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("quas"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Derrick Lehner"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("incidunt"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("veniam"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Sadie Robel"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("beatae"),
                        Kind: sdk.String("id"),
                        Name: sdk.String("Meredith Hessel"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("amet"),
                        Kind: sdk.String("ipsum"),
                        Name: sdk.String("Erin Ferry"),
                    },
                },
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "culpa",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("facere"),
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
        AccessToken: sdk.String("pariatur"),
        AdvertiserID: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("voluptatibus"),
        Ids: []string{
            "aperiam",
            "quos",
        },
        Key: sdk.String("saepe"),
        MaxResults: sdk.Int64(5969),
        OauthToken: sdk.String("atque"),
        PageToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "placeat",
        QuotaUser: sdk.String("culpa"),
        SearchString: sdk.String("vel"),
        SortField: operations.DfareportingTargetingTemplatesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetingTemplatesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("laudantium"),
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
            AccountID: sdk.String("rem"),
            AdvertiserID: sdk.String("perspiciatis"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("iure"),
                Etag: sdk.String("fugit"),
                ID: sdk.String("15080215-01be-4ed3-bee8-811dc79f80d5"),
                Kind: sdk.String("quae"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("quod"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                },
                HoursOfDay: []int{
                    181079,
                    496702,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("LR"),
                        CountryDartID: sdk.String("vero"),
                        DartID: sdk.String("quo"),
                        Kind: sdk.String("ut"),
                        MetroCode: sdk.String("ad"),
                        MetroDmaID: sdk.String("quisquam"),
                        Name: sdk.String("Lucy Nienow"),
                        RegionCode: sdk.String("architecto"),
                        RegionDartID: sdk.String("cupiditate"),
                    },
                    shared.City{
                        CountryCode: sdk.String("SX"),
                        CountryDartID: sdk.String("adipisci"),
                        DartID: sdk.String("corrupti"),
                        Kind: sdk.String("modi"),
                        MetroCode: sdk.String("nemo"),
                        MetroDmaID: sdk.String("corporis"),
                        Name: sdk.String("Teri Langworth"),
                        RegionCode: sdk.String("veritatis"),
                        RegionDartID: sdk.String("nesciunt"),
                    },
                    shared.City{
                        CountryCode: sdk.String("BY"),
                        CountryDartID: sdk.String("voluptatum"),
                        DartID: sdk.String("harum"),
                        Kind: sdk.String("pariatur"),
                        MetroCode: sdk.String("laborum"),
                        MetroDmaID: sdk.String("possimus"),
                        Name: sdk.String("Evan Koepp"),
                        RegionCode: sdk.String("numquam"),
                        RegionDartID: sdk.String("vero"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("FJ"),
                        DartID: sdk.String("error"),
                        Kind: sdk.String("soluta"),
                        Name: sdk.String("Mrs. Jacob Watsica"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("CF"),
                        DartID: sdk.String("perferendis"),
                        Kind: sdk.String("reiciendis"),
                        Name: sdk.String("Dr. Taylor Franey"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("AM"),
                        DartID: sdk.String("dolores"),
                        Kind: sdk.String("laboriosam"),
                        Name: sdk.String("Terri Mayert"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("LC"),
                        CountryDartID: sdk.String("harum"),
                        DartID: sdk.String("quia"),
                        DmaID: sdk.String("aut"),
                        Kind: sdk.String("quam"),
                        MetroCode: sdk.String("atque"),
                        Name: sdk.String("Edgar Blick"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("KW"),
                        CountryDartID: sdk.String("non"),
                        DartID: sdk.String("officiis"),
                        DmaID: sdk.String("suscipit"),
                        Kind: sdk.String("vero"),
                        MetroCode: sdk.String("sit"),
                        Name: sdk.String("Guillermo Herman"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("impedit"),
                        CountryCode: sdk.String("AG"),
                        CountryDartID: sdk.String("debitis"),
                        ID: sdk.String("4ed4a879-232f-44bb-8870-d7d116d2d3de"),
                        Kind: sdk.String("laboriosam"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("libero"),
                        CountryCode: sdk.String("MM"),
                        CountryDartID: sdk.String("quod"),
                        ID: sdk.String("8ac1fd07-c26a-4629-933d-a0c1ad8b3be6"),
                        Kind: sdk.String("et"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("KM"),
                        CountryDartID: sdk.String("aliquam"),
                        DartID: sdk.String("fuga"),
                        Kind: sdk.String("porro"),
                        Name: sdk.String("Nicole Harber"),
                        RegionCode: sdk.String("nulla"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("GL"),
                        CountryDartID: sdk.String("alias"),
                        DartID: sdk.String("numquam"),
                        Kind: sdk.String("laboriosam"),
                        Name: sdk.String("Troy Emmerich"),
                        RegionCode: sdk.String("eos"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("TR"),
                        CountryDartID: sdk.String("incidunt"),
                        DartID: sdk.String("voluptatibus"),
                        Kind: sdk.String("quae"),
                        Name: sdk.String("Frederick Abernathy"),
                        RegionCode: sdk.String("itaque"),
                    },
                },
            },
            ID: sdk.String("error"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("maxime"),
            },
            Kind: sdk.String("excepturi"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("rem"),
                        Kind: sdk.String("modi"),
                        LanguageCode: sdk.String("omnis"),
                        Name: sdk.String("Debra Marks"),
                    },
                    shared.Language{
                        ID: sdk.String("saepe"),
                        Kind: sdk.String("earum"),
                        LanguageCode: sdk.String("reprehenderit"),
                        Name: sdk.String("Clifton Franecki"),
                    },
                    shared.Language{
                        ID: sdk.String("tempora"),
                        Kind: sdk.String("suscipit"),
                        LanguageCode: sdk.String("sint"),
                        Name: sdk.String("Carole Heidenreich"),
                    },
                    shared.Language{
                        ID: sdk.String("hic"),
                        Kind: sdk.String("iusto"),
                        LanguageCode: sdk.String("expedita"),
                        Name: sdk.String("Ellen Erdman"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("vel"),
            },
            Name: sdk.String("Dr. Lorraine Lehner"),
            SubaccountID: sdk.String("optio"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("nobis"),
                        DartID: sdk.String("consequatur"),
                        Kind: sdk.String("libero"),
                        MajorVersion: sdk.String("culpa"),
                        MinorVersion: sdk.String("a"),
                        Name: sdk.String("Alexis Buckridge"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("qui"),
                        DartID: sdk.String("qui"),
                        Kind: sdk.String("dolor"),
                        MajorVersion: sdk.String("suscipit"),
                        MinorVersion: sdk.String("recusandae"),
                        Name: sdk.String("Tabitha Feeney"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("magnam"),
                        DartID: sdk.String("et"),
                        Kind: sdk.String("eaque"),
                        MajorVersion: sdk.String("magnam"),
                        MinorVersion: sdk.String("provident"),
                        Name: sdk.String("Sophia Miller"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("quasi"),
                        Kind: sdk.String("modi"),
                        Name: sdk.String("Jennifer Beatty"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("expedita"),
                        Kind: sdk.String("id"),
                        Name: sdk.String("Monica Rutherford"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("expedita"),
                        Kind: sdk.String("debitis"),
                        Name: sdk.String("Dr. Sheri Waelchi"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("CF"),
                        CountryDartID: sdk.String("modi"),
                        ID: sdk.String("molestias"),
                        Kind: sdk.String("cum"),
                        Name: sdk.String("Elias Greenholt"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("MW"),
                        CountryDartID: sdk.String("explicabo"),
                        ID: sdk.String("excepturi"),
                        Kind: sdk.String("facere"),
                        Name: sdk.String("Jody Glover"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("BV"),
                        CountryDartID: sdk.String("voluptates"),
                        ID: sdk.String("id"),
                        Kind: sdk.String("illo"),
                        Name: sdk.String("Ms. Carla Littel"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("omnis"),
                        Kind: sdk.String("doloremque"),
                        MajorVersion: sdk.String("distinctio"),
                        MinorVersion: sdk.String("consequuntur"),
                        Name: sdk.String("Andre Lueilwitz"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("perferendis"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("iste"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Marty Doyle Sr."),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("quidem"),
                        Kind: sdk.String("repellat"),
                        MajorVersion: sdk.String("magni"),
                        MinorVersion: sdk.String("illum"),
                        Name: sdk.String("Kathy Beier"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("fugit"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("totam"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Jimmie Crooks"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("facilis"),
                        Kind: sdk.String("quod"),
                        MajorVersion: sdk.String("ea"),
                        MinorVersion: sdk.String("dignissimos"),
                        Name: sdk.String("Sherry King"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("at"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("porro"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Sheri Feeney"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("dolore"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("perferendis"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Ernesto Stehr DDS"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("exercitationem"),
                        Kind: sdk.String("molestias"),
                        Name: sdk.String("Mary Kreiger"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("accusantium"),
                        Kind: sdk.String("esse"),
                        Name: sdk.String("Rachael Corkery"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("officiis"),
                        Kind: sdk.String("repudiandae"),
                        Name: sdk.String("Sidney Wolf"),
                    },
                },
            },
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("veniam"),
        ID: "c8d48131-15a0-42ee-8863-f1b94694866d",
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nulla",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("harum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TargetingTemplate: &shared.TargetingTemplate{
            AccountID: sdk.String("hic"),
            AdvertiserID: sdk.String("amet"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sapiente"),
                Etag: sdk.String("veniam"),
                ID: sdk.String("359390c0-a968-4bbc-933f-80cc0595a91e"),
                Kind: sdk.String("enim"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("eos"),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                },
                HoursOfDay: []int{
                    718961,
                    838298,
                    734344,
                    161999,
                },
                UserLocalTime: sdk.Bool(false),
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("OM"),
                        CountryDartID: sdk.String("facere"),
                        DartID: sdk.String("similique"),
                        Kind: sdk.String("eum"),
                        MetroCode: sdk.String("amet"),
                        MetroDmaID: sdk.String("est"),
                        Name: sdk.String("Leslie Mertz MD"),
                        RegionCode: sdk.String("labore"),
                        RegionDartID: sdk.String("qui"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("BS"),
                        DartID: sdk.String("ab"),
                        Kind: sdk.String("nam"),
                        Name: sdk.String("Woodrow Rice"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("TF"),
                        DartID: sdk.String("atque"),
                        Kind: sdk.String("minus"),
                        Name: sdk.String("Santos Schamberger IV"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("LC"),
                        DartID: sdk.String("ratione"),
                        Kind: sdk.String("quae"),
                        Name: sdk.String("Pete Schumm"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("KI"),
                        CountryDartID: sdk.String("hic"),
                        DartID: sdk.String("ratione"),
                        DmaID: sdk.String("in"),
                        Kind: sdk.String("laborum"),
                        MetroCode: sdk.String("ad"),
                        Name: sdk.String("Ricardo Conroy"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("MK"),
                        CountryDartID: sdk.String("enim"),
                        DartID: sdk.String("maiores"),
                        DmaID: sdk.String("repudiandae"),
                        Kind: sdk.String("a"),
                        MetroCode: sdk.String("consequuntur"),
                        Name: sdk.String("Erik Hickle"),
                    },
                    shared.Metro{
                        CountryCode: sdk.String("BF"),
                        CountryDartID: sdk.String("in"),
                        DartID: sdk.String("iure"),
                        DmaID: sdk.String("distinctio"),
                        Kind: sdk.String("enim"),
                        MetroCode: sdk.String("nihil"),
                        Name: sdk.String("Henry McGlynn"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("ullam"),
                        CountryCode: sdk.String("LB"),
                        CountryDartID: sdk.String("facilis"),
                        ID: sdk.String("a1fc2c46-78df-402c-a9be-22cdbc3c5f27"),
                        Kind: sdk.String("hic"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("OM"),
                        CountryDartID: sdk.String("culpa"),
                        DartID: sdk.String("adipisci"),
                        Kind: sdk.String("beatae"),
                        Name: sdk.String("Sonya Boehm"),
                        RegionCode: sdk.String("autem"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("LA"),
                        CountryDartID: sdk.String("ipsum"),
                        DartID: sdk.String("perferendis"),
                        Kind: sdk.String("vero"),
                        Name: sdk.String("Mrs. Jonathan MacGyver"),
                        RegionCode: sdk.String("consequatur"),
                    },
                },
            },
            ID: sdk.String("eum"),
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("voluptate"),
            },
            Kind: sdk.String("omnis"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("a"),
                        Kind: sdk.String("hic"),
                        LanguageCode: sdk.String("iusto"),
                        Name: sdk.String("Hattie Marvin"),
                    },
                    shared.Language{
                        ID: sdk.String("hic"),
                        Kind: sdk.String("dicta"),
                        LanguageCode: sdk.String("eligendi"),
                        Name: sdk.String("Julie Legros I"),
                    },
                    shared.Language{
                        ID: sdk.String("soluta"),
                        Kind: sdk.String("voluptatem"),
                        LanguageCode: sdk.String("sapiente"),
                        Name: sdk.String("Clayton Blanda"),
                    },
                },
            },
            ListTargetingExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("minima"),
            },
            Name: sdk.String("Ricardo Koepp"),
            SubaccountID: sdk.String("nostrum"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("quis"),
                        DartID: sdk.String("et"),
                        Kind: sdk.String("eaque"),
                        MajorVersion: sdk.String("dolore"),
                        MinorVersion: sdk.String("quas"),
                        Name: sdk.String("Thomas Dietrich"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("modi"),
                        DartID: sdk.String("asperiores"),
                        Kind: sdk.String("tempore"),
                        MajorVersion: sdk.String("ea"),
                        MinorVersion: sdk.String("accusantium"),
                        Name: sdk.String("Stella Jast"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("aspernatur"),
                        DartID: sdk.String("deleniti"),
                        Kind: sdk.String("officiis"),
                        MajorVersion: sdk.String("facere"),
                        MinorVersion: sdk.String("odio"),
                        Name: sdk.String("Marty Hilll"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("ex"),
                        DartID: sdk.String("et"),
                        Kind: sdk.String("quia"),
                        MajorVersion: sdk.String("ea"),
                        MinorVersion: sdk.String("atque"),
                        Name: sdk.String("Tom Harris"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("iure"),
                        Kind: sdk.String("iure"),
                        Name: sdk.String("Ira Lebsack"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("molestias"),
                        Kind: sdk.String("sit"),
                        Name: sdk.String("Monica Willms"),
                    },
                    shared.ConnectionType{
                        ID: sdk.String("eius"),
                        Kind: sdk.String("ex"),
                        Name: sdk.String("Willie Breitenberg"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("NF"),
                        CountryDartID: sdk.String("eveniet"),
                        ID: sdk.String("voluptatibus"),
                        Kind: sdk.String("iure"),
                        Name: sdk.String("Luke Schinner I"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("BM"),
                        CountryDartID: sdk.String("et"),
                        ID: sdk.String("quidem"),
                        Kind: sdk.String("ullam"),
                        Name: sdk.String("Wilfred Rolfson"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("CK"),
                        CountryDartID: sdk.String("ducimus"),
                        ID: sdk.String("excepturi"),
                        Kind: sdk.String("tempora"),
                        Name: sdk.String("Rhonda Moen"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("CU"),
                        CountryDartID: sdk.String("inventore"),
                        ID: sdk.String("aspernatur"),
                        Kind: sdk.String("odit"),
                        Name: sdk.String("Ora Tillman"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("quibusdam"),
                        Kind: sdk.String("inventore"),
                        MajorVersion: sdk.String("voluptatum"),
                        MinorVersion: sdk.String("quis"),
                        Name: sdk.String("Marsha Glover"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("qui"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("magni"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("May Leffler"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("quidem"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("nesciunt"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Kate Paucek"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("voluptates"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("aliquid"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Roy Dickens"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("quaerat"),
                        Kind: sdk.String("similique"),
                        Name: sdk.String("Marcella Denesik"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("reprehenderit"),
                        Kind: sdk.String("ab"),
                        Name: sdk.String("Antonio Lynch"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("soluta"),
                        Kind: sdk.String("expedita"),
                        Name: sdk.String("Jamie Jacobson"),
                    },
                },
            },
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("quis"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eius",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("porro"),
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
