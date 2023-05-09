# GoogleLocations

### Available Operations

* [MybusinessGoogleLocationsReport](#mybusinessgooglelocationsreport) - Report a GoogleLocation.
* [MybusinessGoogleLocationsSearch](#mybusinessgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

## MybusinessGoogleLocationsReport

Report a GoogleLocation.

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
    res, err := s.GoogleLocations.MybusinessGoogleLocationsReport(ctx, operations.MybusinessGoogleLocationsReportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportGoogleLocationRequest: &shared.ReportGoogleLocationRequest{
            LocationGroupName: sdk.String("ipsum"),
            ReportReasonBadLocation: shared.ReportGoogleLocationRequestReportReasonBadLocationEnumSpam.ToPointer(),
            ReportReasonBadRecommendation: shared.ReportGoogleLocationRequestReportReasonBadRecommendationEnumIrrelevant.ToPointer(),
            ReportReasonElaboration: sdk.String("distinctio"),
            ReportReasonLanguageCode: sdk.String("maxime"),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("libero"),
        Name: "Alberta Rempel",
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessGoogleLocationsSearch

Search all of the possible locations that are a match to the specified request.

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
    res, err := s.GoogleLocations.MybusinessGoogleLocationsSearch(ctx, operations.MybusinessGoogleLocationsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchGoogleLocationsRequestInput: &shared.SearchGoogleLocationsRequestInput{
            Location: &shared.LocationInput{
                AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                    AdPhone: sdk.String("voluptates"),
                },
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        CategoryID: sdk.String("aperiam"),
                        DisplayName: sdk.String("totam"),
                    },
                },
                AdditionalPhones: []string{
                    "eligendi",
                    "distinctio",
                },
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "autem",
                    },
                    AdministrativeArea: sdk.String("esse"),
                    LanguageCode: sdk.String("dolores"),
                    Locality: sdk.String("assumenda"),
                    Organization: sdk.String("beatae"),
                    PostalCode: sdk.String("85458-8754"),
                    Recipients: []string{
                        "ipsam",
                        "rerum",
                    },
                    RegionCode: sdk.String("laudantium"),
                    Revision: sdk.Int(357207),
                    SortingCode: sdk.String("officiis"),
                    Sublocality: sdk.String("voluptatibus"),
                },
                Attributes: []shared.Attribute{
                    shared.Attribute{
                        AttributeID: sdk.String("at"),
                        RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                            SetValues: []string{
                                "quia",
                            },
                            UnsetValues: []string{
                                "fuga",
                                "repudiandae",
                                "accusantium",
                            },
                        },
                        URLValues: []shared.URLAttributeValue{
                            shared.URLAttributeValue{
                                URL: sdk.String("officiis"),
                            },
                            shared.URLAttributeValue{
                                URL: sdk.String("eos"),
                            },
                            shared.URLAttributeValue{
                                URL: sdk.String("quibusdam"),
                            },
                        },
                        ValueType: shared.AttributeValueTypeEnumEnum.ToPointer(),
                        Values: []interface{}{
                            "odit",
                            "explicabo",
                            "corporis",
                        },
                    },
                    shared.Attribute{
                        AttributeID: sdk.String("error"),
                        RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                            SetValues: []string{
                                "adipisci",
                                "recusandae",
                                "similique",
                                "ut",
                            },
                            UnsetValues: []string{
                                "quis",
                                "beatae",
                                "unde",
                            },
                        },
                        URLValues: []shared.URLAttributeValue{
                            shared.URLAttributeValue{
                                URL: sdk.String("delectus"),
                            },
                            shared.URLAttributeValue{
                                URL: sdk.String("cupiditate"),
                            },
                        },
                        ValueType: shared.AttributeValueTypeEnumAttributeValueTypeUnspecified.ToPointer(),
                        Values: []interface{}{
                            "numquam",
                            "nesciunt",
                        },
                    },
                    shared.Attribute{
                        AttributeID: sdk.String("at"),
                        RepeatedEnumValue: &shared.RepeatedEnumAttributeValue{
                            SetValues: []string{
                                "dignissimos",
                                "optio",
                                "necessitatibus",
                            },
                            UnsetValues: []string{
                                "qui",
                                "expedita",
                            },
                        },
                        URLValues: []shared.URLAttributeValue{
                            shared.URLAttributeValue{
                                URL: sdk.String("cupiditate"),
                            },
                            shared.URLAttributeValue{
                                URL: sdk.String("minima"),
                            },
                            shared.URLAttributeValue{
                                URL: sdk.String("placeat"),
                            },
                        },
                        ValueType: shared.AttributeValueTypeEnumBool.ToPointer(),
                        Values: []interface{}{
                            "in",
                        },
                    },
                },
                Labels: []string{
                    "eum",
                    "modi",
                    "corporis",
                    "magnam",
                },
                LanguageCode: sdk.String("voluptates"),
                Latlng: &shared.LatLng{
                    Latitude: sdk.Float64(9781.73),
                    Longitude: sdk.Float64(7317.44),
                },
                LocationKey: &shared.LocationKey{
                    ExplicitNoPlaceID: sdk.Bool(false),
                    PlaceID: sdk.String("aperiam"),
                    PlusPageID: sdk.String("libero"),
                    RequestID: sdk.String("ratione"),
                },
                LocationName: sdk.String("labore"),
                LocationState: &shared.LocationStateInput{
                    CanDelete: sdk.Bool(false),
                    CanUpdate: sdk.Bool(false),
                    HasPendingEdits: sdk.Bool(false),
                    HasPendingVerification: sdk.Bool(false),
                    IsDisabled: sdk.Bool(false),
                    IsDisconnected: sdk.Bool(false),
                    IsDuplicate: sdk.Bool(false),
                    IsGoogleUpdated: sdk.Bool(false),
                    IsLocalPostAPIDisabled: sdk.Bool(false),
                    IsPendingReview: sdk.Bool(false),
                    IsPublished: sdk.Bool(false),
                    IsSuspended: sdk.Bool(false),
                    IsVerified: sdk.Bool(false),
                    NeedsReverification: sdk.Bool(false),
                },
                Metadata: &shared.Metadata{
                    Duplicate: &shared.Duplicate{
                        Access: shared.DuplicateAccessEnumAllowed.ToPointer(),
                        LocationName: sdk.String("occaecati"),
                        PlaceID: sdk.String("voluptas"),
                    },
                    MapsURL: sdk.String("quo"),
                    NewReviewURL: sdk.String("velit"),
                },
                MoreHours: []shared.MoreHours{
                    shared.MoreHours{
                        HoursTypeID: sdk.String("fuga"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumFriday.ToPointer(),
                                CloseTime: sdk.String("impedit"),
                                OpenDay: shared.TimePeriodOpenDayEnumSunday.ToPointer(),
                                OpenTime: sdk.String("tempore"),
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumSunday.ToPointer(),
                                CloseTime: sdk.String("odit"),
                                OpenDay: shared.TimePeriodOpenDayEnumSunday.ToPointer(),
                                OpenTime: sdk.String("pariatur"),
                            },
                        },
                    },
                    shared.MoreHours{
                        HoursTypeID: sdk.String("nemo"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                                CloseTime: sdk.String("odio"),
                                OpenDay: shared.TimePeriodOpenDayEnumTuesday.ToPointer(),
                                OpenTime: sdk.String("in"),
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                                CloseTime: sdk.String("excepturi"),
                                OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                                OpenTime: sdk.String("error"),
                            },
                        },
                    },
                    shared.MoreHours{
                        HoursTypeID: sdk.String("veritatis"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                                CloseTime: sdk.String("pariatur"),
                                OpenDay: shared.TimePeriodOpenDayEnumSunday.ToPointer(),
                                OpenTime: sdk.String("similique"),
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumSaturday.ToPointer(),
                                CloseTime: sdk.String("ex"),
                                OpenDay: shared.TimePeriodOpenDayEnumTuesday.ToPointer(),
                                OpenTime: sdk.String("commodi"),
                            },
                        },
                    },
                    shared.MoreHours{
                        HoursTypeID: sdk.String("officiis"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumFriday.ToPointer(),
                                CloseTime: sdk.String("exercitationem"),
                                OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                                OpenTime: sdk.String("dolorem"),
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumTuesday.ToPointer(),
                                CloseTime: sdk.String("ipsa"),
                                OpenDay: shared.TimePeriodOpenDayEnumThursday.ToPointer(),
                                OpenTime: sdk.String("vero"),
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                                CloseTime: sdk.String("repudiandae"),
                                OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                                OpenTime: sdk.String("dicta"),
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumSunday.ToPointer(),
                                CloseTime: sdk.String("veniam"),
                                OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                                OpenTime: sdk.String("dolores"),
                            },
                        },
                    },
                },
                Name: sdk.String("Gerald Cruickshank"),
                OpenInfo: &shared.OpenInfo{
                    CanReopen: sdk.Bool(false),
                    OpeningDate: &shared.Date{
                        Day: sdk.Int(56877),
                        Month: sdk.Int(497357),
                        Year: sdk.Int(980486),
                    },
                    Status: shared.OpenInfoStatusEnumOpenForBusinessUnspecified.ToPointer(),
                },
                PriceLists: []shared.PriceList{
                    shared.PriceList{
                        Labels: []shared.Label{
                            shared.Label{
                                Description: sdk.String("pariatur"),
                                DisplayName: sdk.String("libero"),
                                LanguageCode: sdk.String("excepturi"),
                            },
                            shared.Label{
                                Description: sdk.String("occaecati"),
                                DisplayName: sdk.String("nemo"),
                                LanguageCode: sdk.String("aliquam"),
                            },
                        },
                        PriceListID: sdk.String("nostrum"),
                        Sections: []shared.Section{
                            shared.Section{
                                Items: []shared.Item{
                                    shared.Item{
                                        ItemID: sdk.String("sint"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("hic"),
                                                DisplayName: sdk.String("animi"),
                                                LanguageCode: sdk.String("quas"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("totam"),
                                                DisplayName: sdk.String("molestias"),
                                                LanguageCode: sdk.String("odio"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("eaque"),
                                            Nanos: sdk.Int(901163),
                                            Units: sdk.String("architecto"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("quos"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("assumenda"),
                                                DisplayName: sdk.String("tempore"),
                                                LanguageCode: sdk.String("libero"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("velit"),
                                                DisplayName: sdk.String("doloremque"),
                                                LanguageCode: sdk.String("delectus"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("impedit"),
                                                DisplayName: sdk.String("cum"),
                                                LanguageCode: sdk.String("ipsum"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("adipisci"),
                                            Nanos: sdk.Int(903150),
                                            Units: sdk.String("deserunt"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("doloremque"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("veniam"),
                                                DisplayName: sdk.String("libero"),
                                                LanguageCode: sdk.String("architecto"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("cupiditate"),
                                                DisplayName: sdk.String("molestiae"),
                                                LanguageCode: sdk.String("eligendi"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("possimus"),
                                            Nanos: sdk.Int(251464),
                                            Units: sdk.String("magnam"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("itaque"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("asperiores"),
                                                DisplayName: sdk.String("veniam"),
                                                LanguageCode: sdk.String("consequuntur"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("facere"),
                                            Nanos: sdk.Int(512905),
                                            Units: sdk.String("odit"),
                                        },
                                    },
                                },
                                Labels: []shared.Label{
                                    shared.Label{
                                        Description: sdk.String("amet"),
                                        DisplayName: sdk.String("exercitationem"),
                                        LanguageCode: sdk.String("ab"),
                                    },
                                    shared.Label{
                                        Description: sdk.String("velit"),
                                        DisplayName: sdk.String("facilis"),
                                        LanguageCode: sdk.String("tempore"),
                                    },
                                    shared.Label{
                                        Description: sdk.String("nisi"),
                                        DisplayName: sdk.String("voluptatibus"),
                                        LanguageCode: sdk.String("quaerat"),
                                    },
                                    shared.Label{
                                        Description: sdk.String("blanditiis"),
                                        DisplayName: sdk.String("distinctio"),
                                        LanguageCode: sdk.String("nisi"),
                                    },
                                },
                                SectionID: sdk.String("quis"),
                                SectionType: shared.SectionSectionTypeEnumFood.ToPointer(),
                            },
                            shared.Section{
                                Items: []shared.Item{
                                    shared.Item{
                                        ItemID: sdk.String("minus"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("facilis"),
                                                DisplayName: sdk.String("ipsum"),
                                                LanguageCode: sdk.String("ad"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("voluptatibus"),
                                                DisplayName: sdk.String("voluptatibus"),
                                                LanguageCode: sdk.String("consequuntur"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("debitis"),
                                                DisplayName: sdk.String("labore"),
                                                LanguageCode: sdk.String("rerum"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("eos"),
                                                DisplayName: sdk.String("reprehenderit"),
                                                LanguageCode: sdk.String("nostrum"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("neque"),
                                            Nanos: sdk.Int(480061),
                                            Units: sdk.String("est"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("rem"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("fugiat"),
                                                DisplayName: sdk.String("unde"),
                                                LanguageCode: sdk.String("officiis"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("ducimus"),
                                                DisplayName: sdk.String("dolor"),
                                                LanguageCode: sdk.String("dicta"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("error"),
                                                DisplayName: sdk.String("porro"),
                                                LanguageCode: sdk.String("vitae"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("dignissimos"),
                                                DisplayName: sdk.String("esse"),
                                                LanguageCode: sdk.String("fugiat"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("ad"),
                                            Nanos: sdk.Int(134818),
                                            Units: sdk.String("enim"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("delectus"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("dignissimos"),
                                                DisplayName: sdk.String("libero"),
                                                LanguageCode: sdk.String("illo"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("ab"),
                                                DisplayName: sdk.String("incidunt"),
                                                LanguageCode: sdk.String("accusamus"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("saepe"),
                                            Nanos: sdk.Int(734814),
                                            Units: sdk.String("veniam"),
                                        },
                                    },
                                },
                                Labels: []shared.Label{
                                    shared.Label{
                                        Description: sdk.String("reiciendis"),
                                        DisplayName: sdk.String("earum"),
                                        LanguageCode: sdk.String("reprehenderit"),
                                    },
                                },
                                SectionID: sdk.String("praesentium"),
                                SectionType: shared.SectionSectionTypeEnumFood.ToPointer(),
                            },
                            shared.Section{
                                Items: []shared.Item{
                                    shared.Item{
                                        ItemID: sdk.String("quisquam"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("nihil"),
                                                DisplayName: sdk.String("deleniti"),
                                                LanguageCode: sdk.String("illo"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("labore"),
                                            Nanos: sdk.Int(828841),
                                            Units: sdk.String("aliquam"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("quisquam"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("laudantium"),
                                                DisplayName: sdk.String("repudiandae"),
                                                LanguageCode: sdk.String("consequatur"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("maxime"),
                                                DisplayName: sdk.String("aspernatur"),
                                                LanguageCode: sdk.String("nam"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("expedita"),
                                                DisplayName: sdk.String("quas"),
                                                LanguageCode: sdk.String("provident"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("repudiandae"),
                                            Nanos: sdk.Int(700045),
                                            Units: sdk.String("dignissimos"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("corporis"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("similique"),
                                                DisplayName: sdk.String("repellendus"),
                                                LanguageCode: sdk.String("iure"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("dolorem"),
                                                DisplayName: sdk.String("commodi"),
                                                LanguageCode: sdk.String("impedit"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("commodi"),
                                                DisplayName: sdk.String("aut"),
                                                LanguageCode: sdk.String("voluptatem"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("ad"),
                                                DisplayName: sdk.String("quae"),
                                                LanguageCode: sdk.String("amet"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("illum"),
                                            Nanos: sdk.Int(506863),
                                            Units: sdk.String("quidem"),
                                        },
                                    },
                                    shared.Item{
                                        ItemID: sdk.String("cum"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("quasi"),
                                                DisplayName: sdk.String("dicta"),
                                                LanguageCode: sdk.String("laudantium"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("doloremque"),
                                            Nanos: sdk.Int(938412),
                                            Units: sdk.String("iusto"),
                                        },
                                    },
                                },
                                Labels: []shared.Label{
                                    shared.Label{
                                        Description: sdk.String("provident"),
                                        DisplayName: sdk.String("dolorum"),
                                        LanguageCode: sdk.String("necessitatibus"),
                                    },
                                },
                                SectionID: sdk.String("provident"),
                                SectionType: shared.SectionSectionTypeEnumServices.ToPointer(),
                            },
                            shared.Section{
                                Items: []shared.Item{
                                    shared.Item{
                                        ItemID: sdk.String("nemo"),
                                        Labels: []shared.Label{
                                            shared.Label{
                                                Description: sdk.String("itaque"),
                                                DisplayName: sdk.String("facilis"),
                                                LanguageCode: sdk.String("corrupti"),
                                            },
                                            shared.Label{
                                                Description: sdk.String("aperiam"),
                                                DisplayName: sdk.String("sint"),
                                                LanguageCode: sdk.String("accusamus"),
                                            },
                                        },
                                        Price: &shared.Money{
                                            CurrencyCode: sdk.String("eos"),
                                            Nanos: sdk.Int(520081),
                                            Units: sdk.String("dicta"),
                                        },
                                    },
                                },
                                Labels: []shared.Label{
                                    shared.Label{
                                        Description: sdk.String("velit"),
                                        DisplayName: sdk.String("dolor"),
                                        LanguageCode: sdk.String("sunt"),
                                    },
                                },
                                SectionID: sdk.String("a"),
                                SectionType: shared.SectionSectionTypeEnumSectionTypeUnspecified.ToPointer(),
                            },
                        },
                        SourceURL: sdk.String("occaecati"),
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    CategoryID: sdk.String("atque"),
                    DisplayName: sdk.String("beatae"),
                },
                PrimaryPhone: sdk.String("at"),
                Profile: &shared.Profile{
                    Description: sdk.String("labore"),
                },
                RegularHours: &shared.BusinessHours{
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                            CloseTime: sdk.String("voluptatem"),
                            OpenDay: shared.TimePeriodOpenDayEnumDayOfWeekUnspecified.ToPointer(),
                            OpenTime: sdk.String("rerum"),
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                            CloseTime: sdk.String("aperiam"),
                            OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                            OpenTime: sdk.String("repellat"),
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                            CloseTime: sdk.String("porro"),
                            OpenDay: shared.TimePeriodOpenDayEnumThursday.ToPointer(),
                            OpenTime: sdk.String("consectetur"),
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSaturday.ToPointer(),
                            CloseTime: sdk.String("dignissimos"),
                            OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                            OpenTime: sdk.String("soluta"),
                        },
                    },
                },
                RelationshipData: &shared.RelationshipData{
                    ParentChain: sdk.String("natus"),
                },
                ServiceArea: &shared.ServiceAreaBusiness{
                    BusinessType: shared.ServiceAreaBusinessBusinessTypeEnumCustomerAndBusinessLocation.ToPointer(),
                    Places: &shared.Places{
                        PlaceInfos: []shared.PlaceInfo{
                            shared.PlaceInfo{
                                Name: sdk.String("Mandy Collier"),
                                PlaceID: sdk.String("illum"),
                            },
                            shared.PlaceInfo{
                                Name: sdk.String("Cody Terry"),
                                PlaceID: sdk.String("repellat"),
                            },
                            shared.PlaceInfo{
                                Name: sdk.String("Rose Heller"),
                                PlaceID: sdk.String("ab"),
                            },
                        },
                    },
                    Radius: &shared.PointRadius{
                        Latlng: &shared.LatLng{
                            Latitude: sdk.Float64(727.54),
                            Longitude: sdk.Float64(9438.51),
                        },
                        RadiusKm: sdk.Float32(6444.79),
                    },
                },
                SpecialHours: &shared.SpecialHours{
                    SpecialHourPeriods: []shared.SpecialHourPeriod{
                        shared.SpecialHourPeriod{
                            CloseTime: sdk.String("non"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(719389),
                                Month: sdk.Int(450224),
                                Year: sdk.Int(349993),
                            },
                            IsClosed: sdk.Bool(false),
                            OpenTime: sdk.String("labore"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(254382),
                                Month: sdk.Int(921193),
                                Year: sdk.Int(265303),
                            },
                        },
                        shared.SpecialHourPeriod{
                            CloseTime: sdk.String("in"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(127294),
                                Month: sdk.Int(879857),
                                Year: sdk.Int(525809),
                            },
                            IsClosed: sdk.Bool(false),
                            OpenTime: sdk.String("aperiam"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(141817),
                                Month: sdk.Int(535802),
                                Year: sdk.Int(316730),
                            },
                        },
                        shared.SpecialHourPeriod{
                            CloseTime: sdk.String("voluptate"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(626707),
                                Month: sdk.Int(326118),
                                Year: sdk.Int(727544),
                            },
                            IsClosed: sdk.Bool(false),
                            OpenTime: sdk.String("magnam"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(24272),
                                Month: sdk.Int(266788),
                                Year: sdk.Int(430116),
                            },
                        },
                        shared.SpecialHourPeriod{
                            CloseTime: sdk.String("nesciunt"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(652125),
                                Month: sdk.Int(492632),
                                Year: sdk.Int(853246),
                            },
                            IsClosed: sdk.Bool(false),
                            OpenTime: sdk.String("nostrum"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(475325),
                                Month: sdk.Int(330600),
                                Year: sdk.Int(969206),
                            },
                        },
                    },
                },
                StoreCode: sdk.String("ab"),
                WebsiteURL: sdk.String("modi"),
            },
            Query: sdk.String("aut"),
            ResultCount: sdk.Int(13508),
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchGoogleLocationsResponse != nil {
        // handle response
    }
}
```
