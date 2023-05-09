# Shippingsettings

### Available Operations

* [ContentShippingsettingsCustombatch](#contentshippingsettingscustombatch) - Retrieves and updates the shipping settings of multiple accounts in a single request.
* [ContentShippingsettingsGet](#contentshippingsettingsget) - Retrieves the shipping settings of the account.
* [ContentShippingsettingsGetsupportedcarriers](#contentshippingsettingsgetsupportedcarriers) - Retrieves supported carriers and carrier services for an account.
* [ContentShippingsettingsGetsupportedholidays](#contentshippingsettingsgetsupportedholidays) - Retrieves supported holidays for an account.
* [ContentShippingsettingsGetsupportedpickupservices](#contentshippingsettingsgetsupportedpickupservices) - Retrieves supported pickup services for an account.
* [ContentShippingsettingsList](#contentshippingsettingslist) - Lists the shipping settings of the sub-accounts in your Merchant Center account.
* [ContentShippingsettingsUpdate](#contentshippingsettingsupdate) - Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

## ContentShippingsettingsCustombatch

Retrieves and updates the shipping settings of multiple accounts in a single request.

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
    res, err := s.Shippingsettings.ContentShippingsettingsCustombatch(ctx, operations.ContentShippingsettingsCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ShippingsettingsCustomBatchRequest: &shared.ShippingsettingsCustomBatchRequest{
            Entries: []shared.ShippingsettingsCustomBatchRequestEntry{
                shared.ShippingsettingsCustomBatchRequestEntry{
                    AccountID: sdk.String("harum"),
                    BatchID: sdk.Int64(764355),
                    MerchantID: sdk.String("ab"),
                    Method: sdk.String("ex"),
                    ShippingSettings: &shared.ShippingSettings{
                        AccountID: sdk.String("dolor"),
                        PostalCodeGroups: []shared.PostalCodeGroup{
                            shared.PostalCodeGroup{
                                Country: sdk.String("Cameroon"),
                                Name: sdk.String("Lindsey Pfeffer"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("blanditiis"),
                                        PostalCodeRangeEnd: sdk.String("aliquam"),
                                    },
                                },
                            },
                            shared.PostalCodeGroup{
                                Country: sdk.String("Tajikistan"),
                                Name: sdk.String("Alejandro Mayert"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("repellendus"),
                                        PostalCodeRangeEnd: sdk.String("eaque"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("incidunt"),
                                        PostalCodeRangeEnd: sdk.String("asperiores"),
                                    },
                                },
                            },
                            shared.PostalCodeGroup{
                                Country: sdk.String("Equatorial Guinea"),
                                Name: sdk.String("Tracey Gorczany"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("numquam"),
                                        PostalCodeRangeEnd: sdk.String("quia"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("repellendus"),
                                        PostalCodeRangeEnd: sdk.String("blanditiis"),
                                    },
                                },
                            },
                            shared.PostalCodeGroup{
                                Country: sdk.String("Fiji"),
                                Name: sdk.String("Mae Huel"),
                                PostalCodeRanges: []shared.PostalCodeRange{
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("earum"),
                                        PostalCodeRangeEnd: sdk.String("debitis"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("impedit"),
                                        PostalCodeRangeEnd: sdk.String("reiciendis"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("ex"),
                                        PostalCodeRangeEnd: sdk.String("tempore"),
                                    },
                                    shared.PostalCodeRange{
                                        PostalCodeRangeBegin: sdk.String("provident"),
                                        PostalCodeRangeEnd: sdk.String("provident"),
                                    },
                                },
                            },
                        },
                        Services: []shared.Service{
                            shared.Service{
                                Active: sdk.Bool(false),
                                Currency: sdk.String("maxime"),
                                DeliveryCountry: sdk.String("commodi"),
                                DeliveryTime: &shared.DeliveryTime{
                                    CutoffTime: &shared.CutoffTime{
                                        Hour: sdk.Int64(233644),
                                        Minute: sdk.Int64(360248),
                                        Timezone: sdk.String("nisi"),
                                    },
                                    HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "eveniet",
                                        },
                                    },
                                    HolidayCutoffs: []shared.HolidayCutoff{
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("asperiores"),
                                            DeadlineHour: sdk.Int64(838509),
                                            DeadlineTimezone: sdk.String("delectus"),
                                            HolidayID: sdk.String("enim"),
                                            VisibleFromDate: sdk.String("ipsam"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("porro"),
                                            DeadlineHour: sdk.Int64(174897),
                                            DeadlineTimezone: sdk.String("iste"),
                                            HolidayID: sdk.String("labore"),
                                            VisibleFromDate: sdk.String("porro"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("eaque"),
                                            DeadlineHour: sdk.Int64(411337),
                                            DeadlineTimezone: sdk.String("consequatur"),
                                            HolidayID: sdk.String("nobis"),
                                            VisibleFromDate: sdk.String("accusantium"),
                                        },
                                    },
                                    MaxHandlingTimeInDays: sdk.Int64(408509),
                                    MaxTransitTimeInDays: sdk.Int64(671504),
                                    MinHandlingTimeInDays: sdk.Int64(88758),
                                    MinTransitTimeInDays: sdk.Int64(144856),
                                    TransitBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "molestiae",
                                            "voluptate",
                                            "autem",
                                        },
                                    },
                                    TransitTimeTable: &shared.TransitTable{
                                        PostalCodeGroupNames: []string{
                                            "voluptates",
                                            "debitis",
                                        },
                                        Rows: []shared.TransitTableTransitTimeRow{
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(826332),
                                                        MinTransitTimeInDays: sdk.Int64(39126),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(781916),
                                                        MinTransitTimeInDays: sdk.Int64(382136),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(424510),
                                                        MinTransitTimeInDays: sdk.Int64(930105),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(861638),
                                                        MinTransitTimeInDays: sdk.Int64(566213),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(799184),
                                                        MinTransitTimeInDays: sdk.Int64(447610),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(199966),
                                                        MinTransitTimeInDays: sdk.Int64(836479),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(433798),
                                                        MinTransitTimeInDays: sdk.Int64(247927),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(285544),
                                                        MinTransitTimeInDays: sdk.Int64(341934),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(492227),
                                                        MinTransitTimeInDays: sdk.Int64(76818),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(361331),
                                                        MinTransitTimeInDays: sdk.Int64(55356),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(680860),
                                                        MinTransitTimeInDays: sdk.Int64(501076),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(923342),
                                                        MinTransitTimeInDays: sdk.Int64(533563),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(493017),
                                                        MinTransitTimeInDays: sdk.Int64(41508),
                                                    },
                                                },
                                            },
                                        },
                                        TransitTimeLabels: []string{
                                            "adipisci",
                                            "minus",
                                            "veniam",
                                            "id",
                                        },
                                    },
                                    WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("maiores"),
                                            CarrierService: sdk.String("perspiciatis"),
                                            OriginAdministrativeArea: sdk.String("quod"),
                                            OriginCity: sdk.String("magni"),
                                            OriginCountry: sdk.String("incidunt"),
                                            OriginPostalCode: sdk.String("fugit"),
                                            OriginStreetAddress: sdk.String("quisquam"),
                                            WarehouseName: sdk.String("odio"),
                                        },
                                    },
                                },
                                Eligibility: sdk.String("quidem"),
                                MinimumOrderValue: &shared.Price{
                                    Currency: sdk.String("iure"),
                                    Value: sdk.String("aliquid"),
                                },
                                MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                                    StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "reiciendis",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("ipsum"),
                                                Value: sdk.String("doloremque"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "dignissimos",
                                                "non",
                                                "facere",
                                                "repellat",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("exercitationem"),
                                                Value: sdk.String("quidem"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "molestiae",
                                                "vitae",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("excepturi"),
                                                Value: sdk.String("voluptatum"),
                                            },
                                        },
                                    },
                                },
                                Name: sdk.String("Gary Wisozk"),
                                PickupService: &shared.PickupCarrierService{
                                    CarrierName: sdk.String("est"),
                                    ServiceName: sdk.String("tempora"),
                                },
                                RateGroups: []shared.RateGroup{
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "modi",
                                            "adipisci",
                                            "atque",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("rem"),
                                                CarrierService: sdk.String("exercitationem"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("tempore"),
                                                    Value: sdk.String("eos"),
                                                },
                                                Name: sdk.String("Kimberly Hansen PhD"),
                                                OriginPostalCode: sdk.String("reprehenderit"),
                                                PercentageAdjustment: sdk.String("tempora"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("ad"),
                                                CarrierService: sdk.String("voluptates"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("sequi"),
                                                    Value: sdk.String("eligendi"),
                                                },
                                                Name: sdk.String("Brenda Harris"),
                                                OriginPostalCode: sdk.String("excepturi"),
                                                PercentageAdjustment: sdk.String("porro"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("nesciunt"),
                                                CarrierService: sdk.String("maiores"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("veniam"),
                                                    Value: sdk.String("autem"),
                                                },
                                                Name: sdk.String("Gretchen Beahan"),
                                                OriginPostalCode: sdk.String("corporis"),
                                                PercentageAdjustment: sdk.String("consequuntur"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("odio"),
                                                CarrierService: sdk.String("suscipit"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("quis"),
                                                    Value: sdk.String("nobis"),
                                                },
                                                Name: sdk.String("Kari Jacobson"),
                                                OriginPostalCode: sdk.String("nobis"),
                                                PercentageAdjustment: sdk.String("possimus"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "debitis",
                                                            "architecto",
                                                            "reiciendis",
                                                            "consequatur",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "odit",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "laboriosam",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "repudiandae",
                                                    "consequuntur",
                                                    "aspernatur",
                                                    "sequi",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "accusamus",
                                                    "deleniti",
                                                    "earum",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("enim"),
                                                        Value: sdk.String("minus"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("accusantium"),
                                                        Value: sdk.String("nulla"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("inventore"),
                                                        Value: sdk.String("omnis"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("quibusdam"),
                                                        Value: sdk.String("excepturi"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("nostrum"),
                                                        Value: sdk.String("sint"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Oscar Feil"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "eos",
                                                            "nisi",
                                                            "commodi",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "facilis",
                                                    "temporibus",
                                                    "error",
                                                    "quaerat",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "molestiae",
                                                    "deserunt",
                                                    "laborum",
                                                    "odit",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("consequuntur"),
                                                        Value: sdk.String("magnam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("et"),
                                                        Value: sdk.String("et"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("ratione"),
                                                        Value: sdk.String("nisi"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("nostrum"),
                                                        Value: sdk.String("temporibus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("et"),
                                                        Value: sdk.String("debitis"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("nisi"),
                                                        Value: sdk.String("aliquid"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("repellat"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("placeat"),
                                                                Value: sdk.String("eligendi"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("quaerat"),
                                                            SubtableName: sdk.String("veniam"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("perspiciatis"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("commodi"),
                                                                Value: sdk.String("dolores"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("dicta"),
                                                            SubtableName: sdk.String("molestiae"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("maxime"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("dolores"),
                                                                Value: sdk.String("molestias"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("quam"),
                                                            SubtableName: sdk.String("molestiae"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("voluptate"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("eum"),
                                                                Value: sdk.String("consectetur"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("velit"),
                                                            SubtableName: sdk.String("tempora"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("aspernatur"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("ad"),
                                                                Value: sdk.String("incidunt"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("alias"),
                                                            SubtableName: sdk.String("adipisci"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("tempore"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("asperiores"),
                                                                Value: sdk.String("distinctio"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("minima"),
                                                            SubtableName: sdk.String("cupiditate"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("molestiae"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("et"),
                                                                Value: sdk.String("accusamus"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("excepturi"),
                                                            SubtableName: sdk.String("deleniti"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("inventore"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("perspiciatis"),
                                                                Value: sdk.String("perferendis"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("corporis"),
                                                            SubtableName: sdk.String("ullam"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Josephine Leannon"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("itaque"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("at"),
                                                Value: sdk.String("nam"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("id"),
                                            SubtableName: sdk.String("cumque"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "culpa",
                                                                "dolor",
                                                                "occaecati",
                                                                "exercitationem",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "labore",
                                                                "pariatur",
                                                                "vel",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "soluta",
                                                                "minus",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "mollitia",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "aliquam",
                                                        "quas",
                                                        "aut",
                                                        "autem",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "explicabo",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("iste"),
                                                            Value: sdk.String("occaecati"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("enim"),
                                                            Value: sdk.String("tempora"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("libero"),
                                                            Value: sdk.String("iure"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("id"),
                                                            Value: sdk.String("qui"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("explicabo"),
                                                            Value: sdk.String("accusantium"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("eum"),
                                                            Value: sdk.String("nesciunt"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("commodi"),
                                                            Value: sdk.String("molestias"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Benjamin Lebsack"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "libero",
                                                                "ab",
                                                                "alias",
                                                                "accusantium",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "autem",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "necessitatibus",
                                                        "reiciendis",
                                                        "incidunt",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("dolores"),
                                                            Value: sdk.String("illo"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("recusandae"),
                                                            Value: sdk.String("quod"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("magni"),
                                                            Value: sdk.String("sit"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("nesciunt"),
                                                            Value: sdk.String("libero"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("molestiae"),
                                                            Value: sdk.String("eius"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ex"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("aliquid"),
                                                                    Value: sdk.String("officia"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quisquam"),
                                                                SubtableName: sdk.String("rem"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("eveniet"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("voluptatem"),
                                                                    Value: sdk.String("repellat"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("magni"),
                                                                SubtableName: sdk.String("libero"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sapiente"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("veritatis"),
                                                                    Value: sdk.String("provident"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("veniam"),
                                                                SubtableName: sdk.String("quos"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("totam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("facere"),
                                                                    Value: sdk.String("eius"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("doloremque"),
                                                                SubtableName: sdk.String("vero"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("aut"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sequi"),
                                                                    Value: sdk.String("reiciendis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("neque"),
                                                                SubtableName: sdk.String("assumenda"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nobis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("est"),
                                                                    Value: sdk.String("quia"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("natus"),
                                                                SubtableName: sdk.String("molestiae"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("facilis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("earum"),
                                                                    Value: sdk.String("ipsum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("itaque"),
                                                                SubtableName: sdk.String("cupiditate"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("consequatur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("harum"),
                                                                    Value: sdk.String("nobis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("numquam"),
                                                                SubtableName: sdk.String("consequatur"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("temporibus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("doloribus"),
                                                                    Value: sdk.String("quos"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("commodi"),
                                                                SubtableName: sdk.String("blanditiis"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nemo",
                                                                "ratione",
                                                                "dolore",
                                                                "perferendis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "impedit",
                                                                "libero",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nesciunt",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "pariatur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "provident",
                                                        "quia",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "modi",
                                                        "doloribus",
                                                        "et",
                                                        "qui",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("a"),
                                                            Value: sdk.String("quidem"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("aperiam"),
                                                            Value: sdk.String("saepe"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("soluta"),
                                                            Value: sdk.String("hic"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Lucia Leuschke III"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "voluptatum",
                                                                "nulla",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "similique",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "impedit",
                                                                "officia",
                                                                "odio",
                                                                "voluptate",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "repudiandae",
                                                        "tempore",
                                                        "voluptate",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "esse",
                                                        "alias",
                                                        "consequuntur",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("est"),
                                                            Value: sdk.String("nemo"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quae"),
                                                            Value: sdk.String("quaerat"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("laboriosam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("aliquam"),
                                                                    Value: sdk.String("repudiandae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("unde"),
                                                                SubtableName: sdk.String("excepturi"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("voluptatibus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("facilis"),
                                                                    Value: sdk.String("doloremque"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("officiis"),
                                                                SubtableName: sdk.String("nisi"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("reprehenderit"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("necessitatibus"),
                                                                    Value: sdk.String("alias"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("provident"),
                                                                SubtableName: sdk.String("ut"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("facere"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("tenetur"),
                                                                    Value: sdk.String("saepe"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("assumenda"),
                                                                SubtableName: sdk.String("exercitationem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("exercitationem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("dolore"),
                                                                    Value: sdk.String("sit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("recusandae"),
                                                                SubtableName: sdk.String("a"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("exercitationem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("neque"),
                                                                    Value: sdk.String("mollitia"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("velit"),
                                                                SubtableName: sdk.String("ut"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("est"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quasi"),
                                                                    Value: sdk.String("rerum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("blanditiis"),
                                                                SubtableName: sdk.String("sapiente"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "perspiciatis",
                                            "natus",
                                            "reprehenderit",
                                            "dolorem",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("fuga"),
                                                CarrierService: sdk.String("nulla"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("cumque"),
                                                    Value: sdk.String("aperiam"),
                                                },
                                                Name: sdk.String("Hope Macejkovic"),
                                                OriginPostalCode: sdk.String("eveniet"),
                                                PercentageAdjustment: sdk.String("consequuntur"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "rerum",
                                                            "voluptate",
                                                            "perferendis",
                                                            "maiores",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "ratione",
                                                            "molestias",
                                                            "odio",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "magni",
                                                            "sint",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "illum",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "dolorem",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "quis",
                                                    "eum",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("officiis"),
                                                        Value: sdk.String("quo"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("architecto"),
                                                        Value: sdk.String("iure"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("eveniet"),
                                                        Value: sdk.String("doloribus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("praesentium"),
                                                        Value: sdk.String("iste"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Lauren Bernier"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "accusamus",
                                                            "officiis",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "nam",
                                                            "nemo",
                                                            "veritatis",
                                                            "molestias",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "modi",
                                                    "possimus",
                                                    "similique",
                                                    "architecto",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "est",
                                                    "repellendus",
                                                    "dolor",
                                                    "nemo",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("quasi"),
                                                        Value: sdk.String("odit"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("doloremque"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("nulla"),
                                                        Value: sdk.String("dolore"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("itaque"),
                                                        Value: sdk.String("enim"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("consequuntur"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("sapiente"),
                                                                Value: sdk.String("alias"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("doloribus"),
                                                            SubtableName: sdk.String("nemo"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("dolore"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("corrupti"),
                                                                Value: sdk.String("exercitationem"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("commodi"),
                                                            SubtableName: sdk.String("laudantium"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("consequatur"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("incidunt"),
                                                                Value: sdk.String("dolores"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("labore"),
                                                            SubtableName: sdk.String("earum"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("consequatur"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("voluptatem"),
                                                                Value: sdk.String("officia"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("architecto"),
                                                            SubtableName: sdk.String("quibusdam"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("autem"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("voluptates"),
                                                                Value: sdk.String("tempore"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("cupiditate"),
                                                            SubtableName: sdk.String("modi"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("aliquam"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("ea"),
                                                                Value: sdk.String("aliquam"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("corporis"),
                                                            SubtableName: sdk.String("at"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Grace Ankunding"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("repellat"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("expedita"),
                                                Value: sdk.String("libero"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("mollitia"),
                                            SubtableName: sdk.String("quis"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "a",
                                                                "tenetur",
                                                                "ipsam",
                                                                "quod",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "doloremque",
                                                                "illo",
                                                                "reiciendis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "enim",
                                                                "quasi",
                                                                "accusamus",
                                                                "ipsam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "atque",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "eius",
                                                        "ad",
                                                        "mollitia",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "quos",
                                                        "explicabo",
                                                        "distinctio",
                                                        "praesentium",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("maiores"),
                                                            Value: sdk.String("corrupti"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("libero"),
                                                            Value: sdk.String("placeat"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("placeat"),
                                                            Value: sdk.String("animi"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Cameron Littel"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "fugit",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "illum",
                                                                "nulla",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "omnis",
                                                        "iure",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "sapiente",
                                                        "eius",
                                                        "esse",
                                                        "quasi",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("similique"),
                                                            Value: sdk.String("id"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("distinctio"),
                                                            Value: sdk.String("porro"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("rerum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("atque"),
                                                                    Value: sdk.String("aliquid"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("placeat"),
                                                                SubtableName: sdk.String("necessitatibus"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quisquam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("impedit"),
                                                                    Value: sdk.String("ducimus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("incidunt"),
                                                                SubtableName: sdk.String("voluptatibus"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ducimus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("nam"),
                                                                    Value: sdk.String("incidunt"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("deleniti"),
                                                                SubtableName: sdk.String("aliquam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("totam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("soluta"),
                                                                    Value: sdk.String("quibusdam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iure"),
                                                                SubtableName: sdk.String("mollitia"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "perferendis",
                                                                "tempora",
                                                                "aliquam",
                                                                "architecto",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "qui",
                                                                "maxime",
                                                                "ratione",
                                                                "soluta",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "sit",
                                                        "laudantium",
                                                        "sit",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "quaerat",
                                                        "nesciunt",
                                                        "molestiae",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("eveniet"),
                                                            Value: sdk.String("ipsa"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("sit"),
                                                            Value: sdk.String("labore"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ullam"),
                                                            Value: sdk.String("excepturi"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Noah Prohaska"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "qui",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "sunt",
                                                                "quis",
                                                                "corrupti",
                                                                "iure",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quod",
                                                                "a",
                                                                "et",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "eos",
                                                                "exercitationem",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "laudantium",
                                                        "quibusdam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "fuga",
                                                        "excepturi",
                                                        "corporis",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("itaque"),
                                                            Value: sdk.String("suscipit"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("porro"),
                                                            Value: sdk.String("nulla"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("consequatur"),
                                                            Value: sdk.String("qui"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("enim"),
                                                            Value: sdk.String("vel"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("impedit"),
                                                            Value: sdk.String("consectetur"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("est"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("fuga"),
                                                                    Value: sdk.String("labore"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("adipisci"),
                                                                SubtableName: sdk.String("ratione"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("cum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("magnam"),
                                                                    Value: sdk.String("nihil"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("officiis"),
                                                                SubtableName: sdk.String("inventore"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ex"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("amet"),
                                                                    Value: sdk.String("minus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ad"),
                                                                SubtableName: sdk.String("explicabo"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("alias"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("blanditiis"),
                                                                    Value: sdk.String("eligendi"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("qui"),
                                                                SubtableName: sdk.String("amet"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "corrupti",
                                                                "sit",
                                                                "magni",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quas",
                                                                "ratione",
                                                                "sapiente",
                                                                "alias",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "magnam",
                                                                "quis",
                                                                "repudiandae",
                                                                "soluta",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "fuga",
                                                                "blanditiis",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "ea",
                                                        "iusto",
                                                        "dolore",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "recusandae",
                                                        "ipsam",
                                                        "quisquam",
                                                        "delectus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("sunt"),
                                                            Value: sdk.String("rem"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("itaque"),
                                                            Value: sdk.String("assumenda"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("optio"),
                                                            Value: sdk.String("esse"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("a"),
                                                            Value: sdk.String("quam"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("dignissimos"),
                                                            Value: sdk.String("earum"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("adipisci"),
                                                            Value: sdk.String("magni"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("recusandae"),
                                                            Value: sdk.String("voluptatem"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Susie Donnelly"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quae",
                                                                "cumque",
                                                                "ullam",
                                                                "vel",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aut",
                                                                "recusandae",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dolore",
                                                                "aspernatur",
                                                                "harum",
                                                                "illum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "porro",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "earum",
                                                        "vitae",
                                                        "impedit",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "veniam",
                                                        "aperiam",
                                                        "consectetur",
                                                        "repellat",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("quod"),
                                                            Value: sdk.String("nesciunt"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("iste"),
                                                            Value: sdk.String("distinctio"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("assumenda"),
                                                            Value: sdk.String("alias"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("deserunt"),
                                                            Value: sdk.String("vel"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("qui"),
                                                            Value: sdk.String("perspiciatis"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("accusantium"),
                                                            Value: sdk.String("voluptatibus"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("reiciendis"),
                                                                    Value: sdk.String("nesciunt"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("laudantium"),
                                                                SubtableName: sdk.String("nemo"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ab"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("atque"),
                                                                    Value: sdk.String("natus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("culpa"),
                                                                SubtableName: sdk.String("possimus"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("officiis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("reiciendis"),
                                                                    Value: sdk.String("voluptatum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("aperiam"),
                                                                SubtableName: sdk.String("reprehenderit"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("animi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("officia"),
                                                                    Value: sdk.String("eveniet"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quae"),
                                                                SubtableName: sdk.String("adipisci"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dolorem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("adipisci"),
                                                                    Value: sdk.String("optio"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("similique"),
                                                                SubtableName: sdk.String("odio"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("unde"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("asperiores"),
                                                                    Value: sdk.String("nam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("provident"),
                                                                SubtableName: sdk.String("fugiat"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("recusandae"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("non"),
                                                                    Value: sdk.String("aut"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("neque"),
                                                                SubtableName: sdk.String("quia"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("soluta"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("fuga"),
                                                                    Value: sdk.String("qui"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("commodi"),
                                                                SubtableName: sdk.String("a"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "eum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "expedita",
                                                                "animi",
                                                                "excepturi",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dicta",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "distinctio",
                                                                "quo",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "magnam",
                                                        "dicta",
                                                        "nostrum",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "neque",
                                                        "quis",
                                                        "optio",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("adipisci"),
                                                            Value: sdk.String("autem"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("tempora"),
                                                            Value: sdk.String("beatae"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quia"),
                                                            Value: sdk.String("ratione"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("veritatis"),
                                                            Value: sdk.String("amet"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Kate Stehr I"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quod",
                                                                "nemo",
                                                                "architecto",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "amet",
                                                                "facilis",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "maxime",
                                                        "deserunt",
                                                        "eius",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "dolores",
                                                        "dolores",
                                                        "reprehenderit",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("non"),
                                                            Value: sdk.String("odit"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("maxime"),
                                                            Value: sdk.String("aspernatur"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("magni"),
                                                            Value: sdk.String("minus"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("minima"),
                                                            Value: sdk.String("ipsam"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quaerat"),
                                                            Value: sdk.String("accusantium"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("minima"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quo"),
                                                                    Value: sdk.String("quis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("facere"),
                                                                SubtableName: sdk.String("quidem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("harum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("adipisci"),
                                                                    Value: sdk.String("optio"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("minima"),
                                                                SubtableName: sdk.String("reprehenderit"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quo"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("vitae"),
                                                                    Value: sdk.String("voluptates"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("tempora"),
                                                                SubtableName: sdk.String("iste"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("beatae"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("itaque"),
                                                                    Value: sdk.String("atque"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("dolorum"),
                                                                SubtableName: sdk.String("similique"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("qui"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("enim"),
                                                                    Value: sdk.String("quam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("assumenda"),
                                                                SubtableName: sdk.String("temporibus"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("porro"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quasi"),
                                                                    Value: sdk.String("sint"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("inventore"),
                                                                SubtableName: sdk.String("fugit"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "quidem",
                                            "at",
                                            "debitis",
                                            "eum",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("nam"),
                                                CarrierService: sdk.String("sapiente"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("porro"),
                                                    Value: sdk.String("impedit"),
                                                },
                                                Name: sdk.String("Megan Kertzmann"),
                                                OriginPostalCode: sdk.String("quaerat"),
                                                PercentageAdjustment: sdk.String("aut"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("architecto"),
                                                CarrierService: sdk.String("quis"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("possimus"),
                                                    Value: sdk.String("reiciendis"),
                                                },
                                                Name: sdk.String("Claude Morar"),
                                                OriginPostalCode: sdk.String("voluptatem"),
                                                PercentageAdjustment: sdk.String("voluptas"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "hic",
                                                            "consequuntur",
                                                            "quidem",
                                                            "aperiam",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "ratione",
                                                            "itaque",
                                                            "non",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "porro",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "deserunt",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "perferendis",
                                                    "illo",
                                                    "perferendis",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("excepturi"),
                                                        Value: sdk.String("fuga"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("culpa"),
                                                        Value: sdk.String("quo"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("sunt"),
                                                        Value: sdk.String("necessitatibus"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("iste"),
                                                        Value: sdk.String("veritatis"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("quis"),
                                                        Value: sdk.String("quis"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Ms. Angel Stehr"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "sint",
                                                            "reprehenderit",
                                                            "est",
                                                            "numquam",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "sapiente",
                                                            "fuga",
                                                            "facere",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "nam",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "quam",
                                                    "fugiat",
                                                    "ea",
                                                    "molestiae",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "deserunt",
                                                    "totam",
                                                    "modi",
                                                    "id",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("excepturi"),
                                                        Value: sdk.String("unde"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("expedita"),
                                                        Value: sdk.String("eius"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("quasi"),
                                                        Value: sdk.String("quibusdam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("voluptas"),
                                                        Value: sdk.String("quasi"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("numquam"),
                                                        Value: sdk.String("velit"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("sunt"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("blanditiis"),
                                                                Value: sdk.String("quam"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("perferendis"),
                                                            SubtableName: sdk.String("cumque"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("ea"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("totam"),
                                                                Value: sdk.String("quidem"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("eaque"),
                                                            SubtableName: sdk.String("sequi"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("fuga"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("assumenda"),
                                                                Value: sdk.String("modi"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("dolores"),
                                                            SubtableName: sdk.String("beatae"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("rerum"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("repellendus"),
                                                                Value: sdk.String("ut"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("nesciunt"),
                                                            SubtableName: sdk.String("facere"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("beatae"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("delectus"),
                                                                Value: sdk.String("ipsa"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("quo"),
                                                            SubtableName: sdk.String("libero"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Mr. Inez Batz"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("earum"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("facilis"),
                                                Value: sdk.String("eos"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("sed"),
                                            SubtableName: sdk.String("fugiat"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dolorum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aperiam",
                                                                "pariatur",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aliquam",
                                                                "voluptatibus",
                                                                "fuga",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "iure",
                                                        "labore",
                                                        "quasi",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "corporis",
                                                        "odio",
                                                        "quibusdam",
                                                        "dicta",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("vero"),
                                                            Value: sdk.String("quibusdam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("maxime"),
                                                            Value: sdk.String("consequuntur"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("sit"),
                                                            Value: sdk.String("nostrum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("doloremque"),
                                                            Value: sdk.String("repellendus"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quos"),
                                                            Value: sdk.String("pariatur"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Earl Sanford IV"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "iusto",
                                                                "sunt",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "occaecati",
                                                                "necessitatibus",
                                                                "necessitatibus",
                                                                "autem",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "quasi",
                                                        "iure",
                                                        "ex",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "deleniti",
                                                        "tempore",
                                                        "saepe",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("dolore"),
                                                            Value: sdk.String("tempora"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("debitis"),
                                                            Value: sdk.String("similique"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("porro"),
                                                            Value: sdk.String("blanditiis"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("laborum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("fugit"),
                                                                    Value: sdk.String("totam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("dignissimos"),
                                                                SubtableName: sdk.String("corporis"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nisi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quo"),
                                                                    Value: sdk.String("inventore"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("voluptatibus"),
                                                                SubtableName: sdk.String("officiis"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("suscipit"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("perferendis"),
                                                                    Value: sdk.String("nisi"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quibusdam"),
                                                                SubtableName: sdk.String("alias"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("voluptate"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("repellendus"),
                                                                    Value: sdk.String("qui"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("deserunt"),
                                                                SubtableName: sdk.String("error"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("impedit"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("laudantium"),
                                                                    Value: sdk.String("nihil"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("officia"),
                                                                SubtableName: sdk.String("repudiandae"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("voluptatem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quod"),
                                                                    Value: sdk.String("vitae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("vel"),
                                                                SubtableName: sdk.String("voluptas"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("laboriosam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("veritatis"),
                                                                    Value: sdk.String("similique"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("veritatis"),
                                                                SubtableName: sdk.String("temporibus"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ipsum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "similique",
                                                                "molestiae",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "voluptatum",
                                                                "possimus",
                                                                "minima",
                                                                "non",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "et",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "tenetur",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("asperiores"),
                                                            Value: sdk.String("commodi"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("quos"),
                                                            Value: sdk.String("esse"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("veniam"),
                                                            Value: sdk.String("fugit"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Rudolph Kreiger"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "occaecati",
                                                                "asperiores",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "id",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ea",
                                                                "placeat",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "harum",
                                                                "cumque",
                                                                "culpa",
                                                                "pariatur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "consequuntur",
                                                        "omnis",
                                                        "maxime",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "iusto",
                                                        "natus",
                                                        "ab",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("et"),
                                                            Value: sdk.String("eligendi"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("sint"),
                                                            Value: sdk.String("ipsam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("laboriosam"),
                                                            Value: sdk.String("molestiae"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("ex"),
                                                            Value: sdk.String("iure"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ad"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("ipsum"),
                                                                    Value: sdk.String("ipsa"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nam"),
                                                                SubtableName: sdk.String("minima"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("vel"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("nisi"),
                                                                    Value: sdk.String("minima"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("et"),
                                                                SubtableName: sdk.String("autem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dolor"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("culpa"),
                                                                    Value: sdk.String("non"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("suscipit"),
                                                                SubtableName: sdk.String("amet"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("deleniti"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("exercitationem"),
                                                                    Value: sdk.String("illo"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("fugit"),
                                                                SubtableName: sdk.String("id"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nostrum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "sunt",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "perspiciatis",
                                                                "asperiores",
                                                                "eos",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "ipsa",
                                                        "esse",
                                                        "consequuntur",
                                                        "aliquam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "reprehenderit",
                                                        "quidem",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("officia"),
                                                            Value: sdk.String("modi"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("alias"),
                                                            Value: sdk.String("nam"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("minus"),
                                                            Value: sdk.String("sit"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("hic"),
                                                            Value: sdk.String("dolorum"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("libero"),
                                                            Value: sdk.String("voluptatem"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Dr. Charlie Hayes"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "eos",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "sint",
                                                                "incidunt",
                                                                "pariatur",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aperiam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quo",
                                                                "perspiciatis",
                                                                "accusantium",
                                                                "debitis",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "aliquam",
                                                        "quasi",
                                                        "repellendus",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "hic",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("nisi"),
                                                            Value: sdk.String("voluptas"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("saepe"),
                                                            Value: sdk.String("praesentium"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("ab"),
                                                            Value: sdk.String("minima"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("nisi"),
                                                            Value: sdk.String("repellat"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("molestiae"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("amet"),
                                                                    Value: sdk.String("voluptatibus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("temporibus"),
                                                                SubtableName: sdk.String("tenetur"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("nostrum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("tempora"),
                                                                    Value: sdk.String("maiores"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("facere"),
                                                                SubtableName: sdk.String("illum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("exercitationem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("saepe"),
                                                                    Value: sdk.String("deserunt"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("sint"),
                                                                SubtableName: sdk.String("minima"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dolore"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sequi"),
                                                                    Value: sdk.String("sequi"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("occaecati"),
                                                                SubtableName: sdk.String("voluptatum"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("laborum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sapiente"),
                                                                    Value: sdk.String("soluta"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("eius"),
                                                                SubtableName: sdk.String("dolores"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("dolorum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("deleniti"),
                                                                    Value: sdk.String("assumenda"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iure"),
                                                                SubtableName: sdk.String("dolorem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("neque"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("laudantium"),
                                                                    Value: sdk.String("quos"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("saepe"),
                                                                SubtableName: sdk.String("incidunt"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("pariatur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("deleniti"),
                                                                    Value: sdk.String("aut"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nesciunt"),
                                                                SubtableName: sdk.String("error"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("culpa"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quis"),
                                                                    Value: sdk.String("asperiores"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iste"),
                                                                SubtableName: sdk.String("harum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("atque"),
                                                                    Value: sdk.String("similique"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("qui"),
                                                                SubtableName: sdk.String("tempora"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("modi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sapiente"),
                                                                    Value: sdk.String("possimus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nisi"),
                                                                SubtableName: sdk.String("ab"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("omnis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("aut"),
                                                                    Value: sdk.String("ipsum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iste"),
                                                                SubtableName: sdk.String("nulla"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("maxime"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("assumenda"),
                                                                    Value: sdk.String("velit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("voluptatum"),
                                                                SubtableName: sdk.String("eveniet"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quibusdam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("doloremque"),
                                                                    Value: sdk.String("assumenda"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nobis"),
                                                                SubtableName: sdk.String("laboriosam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("esse"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("et"),
                                                                    Value: sdk.String("temporibus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("optio"),
                                                                SubtableName: sdk.String("quam"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                ShipmentType: sdk.String("delectus"),
                                StoreConfig: &shared.ServiceStoreConfig{
                                    CutoffConfig: &shared.ServiceStoreConfigCutoffConfig{
                                        LocalCutoffTime: &shared.ServiceStoreConfigCutoffConfigLocalCutoffTime{
                                            Hour: sdk.String("quae"),
                                            Minute: sdk.String("vero"),
                                        },
                                        StoreCloseOffsetHours: sdk.String("amet"),
                                    },
                                    ServiceRadius: &shared.Distance{
                                        Unit: sdk.String("culpa"),
                                        Value: sdk.String("asperiores"),
                                    },
                                    StoreCodes: []string{
                                        "veniam",
                                    },
                                    StoreServiceType: sdk.String("provident"),
                                },
                            },
                            shared.Service{
                                Active: sdk.Bool(false),
                                Currency: sdk.String("consequuntur"),
                                DeliveryCountry: sdk.String("aut"),
                                DeliveryTime: &shared.DeliveryTime{
                                    CutoffTime: &shared.CutoffTime{
                                        Hour: sdk.Int64(805831),
                                        Minute: sdk.Int64(591977),
                                        Timezone: sdk.String("aperiam"),
                                    },
                                    HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "ab",
                                            "cum",
                                            "magnam",
                                            "natus",
                                        },
                                    },
                                    HolidayCutoffs: []shared.HolidayCutoff{
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("dicta"),
                                            DeadlineHour: sdk.Int64(995713),
                                            DeadlineTimezone: sdk.String("dolores"),
                                            HolidayID: sdk.String("harum"),
                                            VisibleFromDate: sdk.String("quibusdam"),
                                        },
                                    },
                                    MaxHandlingTimeInDays: sdk.Int64(519586),
                                    MaxTransitTimeInDays: sdk.Int64(591481),
                                    MinHandlingTimeInDays: sdk.Int64(805167),
                                    MinTransitTimeInDays: sdk.Int64(521892),
                                    TransitBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "neque",
                                            "dolores",
                                            "vel",
                                        },
                                    },
                                    TransitTimeTable: &shared.TransitTable{
                                        PostalCodeGroupNames: []string{
                                            "occaecati",
                                        },
                                        Rows: []shared.TransitTableTransitTimeRow{
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(336961),
                                                        MinTransitTimeInDays: sdk.Int64(703448),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(447640),
                                                        MinTransitTimeInDays: sdk.Int64(748253),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(391136),
                                                        MinTransitTimeInDays: sdk.Int64(620858),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(155584),
                                                        MinTransitTimeInDays: sdk.Int64(704574),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(540074),
                                                        MinTransitTimeInDays: sdk.Int64(74814),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(676140),
                                                        MinTransitTimeInDays: sdk.Int64(590800),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(278231),
                                                        MinTransitTimeInDays: sdk.Int64(979407),
                                                    },
                                                },
                                            },
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(267247),
                                                        MinTransitTimeInDays: sdk.Int64(192649),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(391841),
                                                        MinTransitTimeInDays: sdk.Int64(419683),
                                                    },
                                                },
                                            },
                                        },
                                        TransitTimeLabels: []string{
                                            "mollitia",
                                            "quas",
                                        },
                                    },
                                    WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("doloremque"),
                                            CarrierService: sdk.String("id"),
                                            OriginAdministrativeArea: sdk.String("asperiores"),
                                            OriginCity: sdk.String("rem"),
                                            OriginCountry: sdk.String("quod"),
                                            OriginPostalCode: sdk.String("commodi"),
                                            OriginStreetAddress: sdk.String("natus"),
                                            WarehouseName: sdk.String("beatae"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("placeat"),
                                            CarrierService: sdk.String("molestiae"),
                                            OriginAdministrativeArea: sdk.String("dolor"),
                                            OriginCity: sdk.String("quia"),
                                            OriginCountry: sdk.String("nulla"),
                                            OriginPostalCode: sdk.String("occaecati"),
                                            OriginStreetAddress: sdk.String("doloribus"),
                                            WarehouseName: sdk.String("libero"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("culpa"),
                                            CarrierService: sdk.String("tenetur"),
                                            OriginAdministrativeArea: sdk.String("molestias"),
                                            OriginCity: sdk.String("magnam"),
                                            OriginCountry: sdk.String("voluptate"),
                                            OriginPostalCode: sdk.String("aliquid"),
                                            OriginStreetAddress: sdk.String("officia"),
                                            WarehouseName: sdk.String("qui"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("animi"),
                                            CarrierService: sdk.String("vero"),
                                            OriginAdministrativeArea: sdk.String("quas"),
                                            OriginCity: sdk.String("possimus"),
                                            OriginCountry: sdk.String("optio"),
                                            OriginPostalCode: sdk.String("quo"),
                                            OriginStreetAddress: sdk.String("ullam"),
                                            WarehouseName: sdk.String("ipsa"),
                                        },
                                    },
                                },
                                Eligibility: sdk.String("placeat"),
                                MinimumOrderValue: &shared.Price{
                                    Currency: sdk.String("quas"),
                                    Value: sdk.String("culpa"),
                                },
                                MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                                    StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "dicta",
                                                "eos",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("porro"),
                                                Value: sdk.String("iusto"),
                                            },
                                        },
                                    },
                                },
                                Name: sdk.String("Allison Kutch"),
                                PickupService: &shared.PickupCarrierService{
                                    CarrierName: sdk.String("provident"),
                                    ServiceName: sdk.String("dolorem"),
                                },
                                RateGroups: []shared.RateGroup{
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "minima",
                                            "eaque",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("alias"),
                                                CarrierService: sdk.String("sit"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("accusamus"),
                                                    Value: sdk.String("sint"),
                                                },
                                                Name: sdk.String("Loretta Upton"),
                                                OriginPostalCode: sdk.String("dolorem"),
                                                PercentageAdjustment: sdk.String("eum"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("possimus"),
                                                CarrierService: sdk.String("dolore"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("neque"),
                                                    Value: sdk.String("inventore"),
                                                },
                                                Name: sdk.String("Calvin Donnelly"),
                                                OriginPostalCode: sdk.String("optio"),
                                                PercentageAdjustment: sdk.String("molestiae"),
                                            },
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("atque"),
                                                CarrierService: sdk.String("dolor"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("optio"),
                                                    Value: sdk.String("cupiditate"),
                                                },
                                                Name: sdk.String("Carmen McCullough"),
                                                OriginPostalCode: sdk.String("fugiat"),
                                                PercentageAdjustment: sdk.String("ipsum"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "deserunt",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "quam",
                                                            "placeat",
                                                            "est",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "placeat",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "minus",
                                                            "similique",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "aliquid",
                                                    "aliquam",
                                                    "error",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "ducimus",
                                                    "perferendis",
                                                    "impedit",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("quibusdam"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("pariatur"),
                                                        Value: sdk.String("commodi"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("iste"),
                                                        Value: sdk.String("corrupti"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("iste"),
                                                        Value: sdk.String("distinctio"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("consequuntur"),
                                                        Value: sdk.String("voluptatem"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("voluptas"),
                                                        Value: sdk.String("magnam"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Amy Bednar"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "perspiciatis",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "laborum",
                                                            "voluptatum",
                                                            "ratione",
                                                            "facere",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "perspiciatis",
                                                            "consequuntur",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "quibusdam",
                                                            "inventore",
                                                            "ut",
                                                            "tempore",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "fuga",
                                                    "odit",
                                                    "minus",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "sint",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("magnam"),
                                                        Value: sdk.String("veniam"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("quaerat"),
                                                        Value: sdk.String("minima"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("unde"),
                                                        Value: sdk.String("ullam"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("enim"),
                                                        Value: sdk.String("facere"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("cumque"),
                                                        Value: sdk.String("cumque"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("et"),
                                                        Value: sdk.String("praesentium"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("est"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("magnam"),
                                                                Value: sdk.String("unde"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("consequatur"),
                                                            SubtableName: sdk.String("dicta"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("eligendi"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("iure"),
                                                                Value: sdk.String("cumque"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("quaerat"),
                                                            SubtableName: sdk.String("sequi"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("culpa"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("facere"),
                                                                Value: sdk.String("explicabo"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("nulla"),
                                                            SubtableName: sdk.String("laborum"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("animi"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("quam"),
                                                                Value: sdk.String("totam"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("incidunt"),
                                                            SubtableName: sdk.String("similique"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("culpa"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("ratione"),
                                                                Value: sdk.String("illum"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("sed"),
                                                            SubtableName: sdk.String("amet"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("aut"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("voluptates"),
                                                                Value: sdk.String("nulla"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("tenetur"),
                                                            SubtableName: sdk.String("dignissimos"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("dolor"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("totam"),
                                                                Value: sdk.String("beatae"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("vitae"),
                                                            SubtableName: sdk.String("laborum"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Evelyn Hartmann"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("consequuntur"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("rerum"),
                                                Value: sdk.String("nulla"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("ducimus"),
                                            SubtableName: sdk.String("eveniet"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "veniam",
                                                                "voluptatem",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "vel",
                                                                "aspernatur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "porro",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "deleniti",
                                                        "doloribus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("nulla"),
                                                            Value: sdk.String("iusto"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("adipisci"),
                                                            Value: sdk.String("provident"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("nostrum"),
                                                            Value: sdk.String("eum"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("modi"),
                                                            Value: sdk.String("cumque"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Ms. Donna Parker Jr."),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "commodi",
                                                                "dicta",
                                                                "illum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "ut",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "dignissimos",
                                                                "nulla",
                                                                "facilis",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "corrupti",
                                                        "doloribus",
                                                        "enim",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "sed",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("atque"),
                                                            Value: sdk.String("perspiciatis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("odit"),
                                                            Value: sdk.String("eligendi"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("earum"),
                                                            Value: sdk.String("iusto"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("atque"),
                                                            Value: sdk.String("sunt"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("placeat"),
                                                            Value: sdk.String("nam"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("consequuntur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("impedit"),
                                                                    Value: sdk.String("deleniti"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("esse"),
                                                                SubtableName: sdk.String("voluptatum"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("eius"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("accusantium"),
                                                                    Value: sdk.String("nobis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("asperiores"),
                                                                SubtableName: sdk.String("corporis"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "a",
                                                                "corrupti",
                                                                "blanditiis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "blanditiis",
                                                                "maiores",
                                                                "et",
                                                                "harum",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "alias",
                                                        "tempore",
                                                        "quod",
                                                        "totam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "dicta",
                                                        "maiores",
                                                        "dolores",
                                                        "perferendis",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("nulla"),
                                                            Value: sdk.String("corporis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("pariatur"),
                                                            Value: sdk.String("quas"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("illo"),
                                                            Value: sdk.String("temporibus"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Mr. Kimberly Langosh"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "voluptas",
                                                                "nihil",
                                                                "quae",
                                                                "voluptas",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "ducimus",
                                                        "adipisci",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "ratione",
                                                        "id",
                                                        "ex",
                                                        "quos",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("minus"),
                                                            Value: sdk.String("exercitationem"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("iure"),
                                                            Value: sdk.String("blanditiis"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("repellendus"),
                                                            Value: sdk.String("impedit"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quaerat"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("explicabo"),
                                                                    Value: sdk.String("dolore"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("accusantium"),
                                                                SubtableName: sdk.String("excepturi"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("deserunt"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("odit"),
                                                                    Value: sdk.String("beatae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("exercitationem"),
                                                                SubtableName: sdk.String("officiis"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("blanditiis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("voluptas"),
                                                                    Value: sdk.String("aut"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("vitae"),
                                                                SubtableName: sdk.String("tempora"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("cupiditate"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("officia"),
                                                                    Value: sdk.String("minima"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("doloribus"),
                                                                SubtableName: sdk.String("suscipit"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sequi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("debitis"),
                                                                    Value: sdk.String("neque"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("mollitia"),
                                                                SubtableName: sdk.String("tenetur"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("non"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("pariatur"),
                                                                    Value: sdk.String("vero"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("natus"),
                                                                SubtableName: sdk.String("quibusdam"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("officia"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("dolorem"),
                                                                    Value: sdk.String("velit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("vero"),
                                                                SubtableName: sdk.String("placeat"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("pariatur"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("vel"),
                                                                    Value: sdk.String("non"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("incidunt"),
                                                                SubtableName: sdk.String("praesentium"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ipsum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("itaque"),
                                                                    Value: sdk.String("non"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("dolorum"),
                                                                SubtableName: sdk.String("esse"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("id"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("natus"),
                                                                    Value: sdk.String("quas"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("saepe"),
                                                                SubtableName: sdk.String("modi"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "neque",
                                                                "in",
                                                                "debitis",
                                                                "quaerat",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "libero",
                                                                "totam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "veniam",
                                                                "nostrum",
                                                                "facere",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "vitae",
                                                                "ipsum",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "inventore",
                                                        "ipsum",
                                                        "error",
                                                        "numquam",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "dolores",
                                                        "consectetur",
                                                        "dicta",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("occaecati"),
                                                            Value: sdk.String("perferendis"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("cum"),
                                                            Value: sdk.String("facere"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ratione"),
                                                            Value: sdk.String("quis"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Johnnie Ankunding"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nihil",
                                                                "velit",
                                                                "incidunt",
                                                                "a",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "consequuntur",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "numquam",
                                                                "excepturi",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "voluptatum",
                                                        "vel",
                                                        "delectus",
                                                        "modi",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "quidem",
                                                        "consequuntur",
                                                        "eaque",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("debitis"),
                                                            Value: sdk.String("nostrum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("quibusdam"),
                                                            Value: sdk.String("provident"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("veritatis"),
                                                            Value: sdk.String("sunt"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("quod"),
                                                            Value: sdk.String("expedita"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("itaque"),
                                                            Value: sdk.String("dignissimos"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("magnam"),
                                                            Value: sdk.String("excepturi"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("placeat"),
                                                            Value: sdk.String("dolorum"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptatibus"),
                                                            Value: sdk.String("modi"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sed"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("molestiae"),
                                                                    Value: sdk.String("delectus"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ex"),
                                                                SubtableName: sdk.String("error"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("saepe"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("consequuntur"),
                                                                    Value: sdk.String("quod"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("occaecati"),
                                                                SubtableName: sdk.String("earum"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("eum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("temporibus"),
                                                                    Value: sdk.String("quae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("doloremque"),
                                                                SubtableName: sdk.String("debitis"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("temporibus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quidem"),
                                                                    Value: sdk.String("neque"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("est"),
                                                                SubtableName: sdk.String("repellendus"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("tempora"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quisquam"),
                                                                    Value: sdk.String("vel"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("cum"),
                                                                SubtableName: sdk.String("doloremque"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("adipisci"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quasi"),
                                                                    Value: sdk.String("accusantium"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("molestias"),
                                                                SubtableName: sdk.String("facere"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nesciunt",
                                                                "sequi",
                                                                "in",
                                                                "modi",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "velit",
                                                                "aut",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "odit",
                                                                "libero",
                                                                "error",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "asperiores",
                                                        "eos",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "distinctio",
                                                        "dicta",
                                                        "earum",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("nemo"),
                                                            Value: sdk.String("eum"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("iusto"),
                                                            Value: sdk.String("veritatis"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("voluptates"),
                                                            Value: sdk.String("unde"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("impedit"),
                                                            Value: sdk.String("amet"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("commodi"),
                                                            Value: sdk.String("neque"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Shirley Nolan"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aliquam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nihil",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "natus",
                                                        "quisquam",
                                                        "itaque",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "recusandae",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("error"),
                                                            Value: sdk.String("dicta"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("nemo"),
                                                            Value: sdk.String("unde"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("numquam"),
                                                            Value: sdk.String("temporibus"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("amet"),
                                                            Value: sdk.String("deserunt"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("ducimus"),
                                                            Value: sdk.String("modi"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("impedit"),
                                                            Value: sdk.String("ipsa"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("sed"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("a"),
                                                                    Value: sdk.String("saepe"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("dolor"),
                                                                SubtableName: sdk.String("quidem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("quaerat"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("cum"),
                                                                    Value: sdk.String("dolore"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quibusdam"),
                                                                SubtableName: sdk.String("rerum"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                ShipmentType: sdk.String("atque"),
                                StoreConfig: &shared.ServiceStoreConfig{
                                    CutoffConfig: &shared.ServiceStoreConfigCutoffConfig{
                                        LocalCutoffTime: &shared.ServiceStoreConfigCutoffConfigLocalCutoffTime{
                                            Hour: sdk.String("tempore"),
                                            Minute: sdk.String("odio"),
                                        },
                                        StoreCloseOffsetHours: sdk.String("reprehenderit"),
                                    },
                                    ServiceRadius: &shared.Distance{
                                        Unit: sdk.String("quas"),
                                        Value: sdk.String("voluptates"),
                                    },
                                    StoreCodes: []string{
                                        "nam",
                                        "nisi",
                                        "officiis",
                                    },
                                    StoreServiceType: sdk.String("quasi"),
                                },
                            },
                            shared.Service{
                                Active: sdk.Bool(false),
                                Currency: sdk.String("fugiat"),
                                DeliveryCountry: sdk.String("aspernatur"),
                                DeliveryTime: &shared.DeliveryTime{
                                    CutoffTime: &shared.CutoffTime{
                                        Hour: sdk.Int64(772593),
                                        Minute: sdk.Int64(973903),
                                        Timezone: sdk.String("ad"),
                                    },
                                    HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "aspernatur",
                                        },
                                    },
                                    HolidayCutoffs: []shared.HolidayCutoff{
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("laborum"),
                                            DeadlineHour: sdk.Int64(943682),
                                            DeadlineTimezone: sdk.String("rerum"),
                                            HolidayID: sdk.String("explicabo"),
                                            VisibleFromDate: sdk.String("eligendi"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("nam"),
                                            DeadlineHour: sdk.Int64(810640),
                                            DeadlineTimezone: sdk.String("aliquam"),
                                            HolidayID: sdk.String("aliquid"),
                                            VisibleFromDate: sdk.String("adipisci"),
                                        },
                                        shared.HolidayCutoff{
                                            DeadlineDate: sdk.String("ipsam"),
                                            DeadlineHour: sdk.Int64(852623),
                                            DeadlineTimezone: sdk.String("enim"),
                                            HolidayID: sdk.String("eveniet"),
                                            VisibleFromDate: sdk.String("eum"),
                                        },
                                    },
                                    MaxHandlingTimeInDays: sdk.Int64(347050),
                                    MaxTransitTimeInDays: sdk.Int64(871888),
                                    MinHandlingTimeInDays: sdk.Int64(632648),
                                    MinTransitTimeInDays: sdk.Int64(1914),
                                    TransitBusinessDayConfig: &shared.BusinessDayConfig{
                                        BusinessDays: []string{
                                            "quos",
                                        },
                                    },
                                    TransitTimeTable: &shared.TransitTable{
                                        PostalCodeGroupNames: []string{
                                            "dolor",
                                            "accusamus",
                                            "sint",
                                            "enim",
                                        },
                                        Rows: []shared.TransitTableTransitTimeRow{
                                            shared.TransitTableTransitTimeRow{
                                                Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(84708),
                                                        MinTransitTimeInDays: sdk.Int64(876418),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(189986),
                                                        MinTransitTimeInDays: sdk.Int64(15374),
                                                    },
                                                    shared.TransitTableTransitTimeRowTransitTimeValue{
                                                        MaxTransitTimeInDays: sdk.Int64(985056),
                                                        MinTransitTimeInDays: sdk.Int64(855736),
                                                    },
                                                },
                                            },
                                        },
                                        TransitTimeLabels: []string{
                                            "sint",
                                            "eum",
                                            "commodi",
                                        },
                                    },
                                    WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("rem"),
                                            CarrierService: sdk.String("occaecati"),
                                            OriginAdministrativeArea: sdk.String("possimus"),
                                            OriginCity: sdk.String("voluptate"),
                                            OriginCountry: sdk.String("nam"),
                                            OriginPostalCode: sdk.String("quam"),
                                            OriginStreetAddress: sdk.String("blanditiis"),
                                            WarehouseName: sdk.String("laboriosam"),
                                        },
                                        shared.WarehouseBasedDeliveryTime{
                                            Carrier: sdk.String("odio"),
                                            CarrierService: sdk.String("adipisci"),
                                            OriginAdministrativeArea: sdk.String("necessitatibus"),
                                            OriginCity: sdk.String("veritatis"),
                                            OriginCountry: sdk.String("consectetur"),
                                            OriginPostalCode: sdk.String("fuga"),
                                            OriginStreetAddress: sdk.String("quasi"),
                                            WarehouseName: sdk.String("eos"),
                                        },
                                    },
                                },
                                Eligibility: sdk.String("dolorum"),
                                MinimumOrderValue: &shared.Price{
                                    Currency: sdk.String("vel"),
                                    Value: sdk.String("rerum"),
                                },
                                MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                                    StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "fugit",
                                                "eius",
                                                "perspiciatis",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("dolore"),
                                                Value: sdk.String("corporis"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "numquam",
                                                "tempora",
                                                "corrupti",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("ducimus"),
                                                Value: sdk.String("asperiores"),
                                            },
                                        },
                                        shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                            StoreCodes: []string{
                                                "cumque",
                                                "praesentium",
                                            },
                                            Value: &shared.Price{
                                                Currency: sdk.String("ut"),
                                                Value: sdk.String("amet"),
                                            },
                                        },
                                    },
                                },
                                Name: sdk.String("Antonio Jaskolski"),
                                PickupService: &shared.PickupCarrierService{
                                    CarrierName: sdk.String("laboriosam"),
                                    ServiceName: sdk.String("harum"),
                                },
                                RateGroups: []shared.RateGroup{
                                    shared.RateGroup{
                                        ApplicableShippingLabels: []string{
                                            "nulla",
                                            "a",
                                            "ex",
                                            "dolore",
                                        },
                                        CarrierRates: []shared.CarrierRate{
                                            shared.CarrierRate{
                                                CarrierName: sdk.String("minima"),
                                                CarrierService: sdk.String("facilis"),
                                                FlatAdjustment: &shared.Price{
                                                    Currency: sdk.String("sit"),
                                                    Value: sdk.String("incidunt"),
                                                },
                                                Name: sdk.String("Felicia Weissnat"),
                                                OriginPostalCode: sdk.String("delectus"),
                                                PercentageAdjustment: sdk.String("dicta"),
                                            },
                                        },
                                        MainTable: &shared.Table{
                                            ColumnHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "ut",
                                                            "officiis",
                                                            "itaque",
                                                            "nulla",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "recusandae",
                                                    "in",
                                                    "deleniti",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "reiciendis",
                                                    "commodi",
                                                    "sit",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("molestias"),
                                                        Value: sdk.String("quia"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("ipsam"),
                                                        Value: sdk.String("rem"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("eius"),
                                                        Value: sdk.String("necessitatibus"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("culpa"),
                                                        Value: sdk.String("in"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("aliquid"),
                                                        Value: sdk.String("amet"),
                                                    },
                                                },
                                            },
                                            Name: sdk.String("Lewis Russel"),
                                            RowHeaders: &shared.Headers{
                                                Locations: []shared.LocationIDSet{
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "quis",
                                                            "expedita",
                                                            "quam",
                                                        },
                                                    },
                                                    shared.LocationIDSet{
                                                        LocationIds: []string{
                                                            "exercitationem",
                                                            "vitae",
                                                            "magnam",
                                                        },
                                                    },
                                                },
                                                NumberOfItems: []string{
                                                    "nulla",
                                                    "eum",
                                                    "quibusdam",
                                                },
                                                PostalCodeGroupNames: []string{
                                                    "ut",
                                                    "cupiditate",
                                                },
                                                Prices: []shared.Price{
                                                    shared.Price{
                                                        Currency: sdk.String("minima"),
                                                        Value: sdk.String("vel"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("consectetur"),
                                                        Value: sdk.String("nostrum"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("tempore"),
                                                        Value: sdk.String("ipsum"),
                                                    },
                                                    shared.Price{
                                                        Currency: sdk.String("dolorem"),
                                                        Value: sdk.String("expedita"),
                                                    },
                                                },
                                                Weights: []shared.Weight{
                                                    shared.Weight{
                                                        Unit: sdk.String("voluptatem"),
                                                        Value: sdk.String("maiores"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("unde"),
                                                        Value: sdk.String("reprehenderit"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("voluptatem"),
                                                        Value: sdk.String("placeat"),
                                                    },
                                                    shared.Weight{
                                                        Unit: sdk.String("dolore"),
                                                        Value: sdk.String("magni"),
                                                    },
                                                },
                                            },
                                            Rows: []shared.Row{
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("provident"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("delectus"),
                                                                Value: sdk.String("dolore"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("totam"),
                                                            SubtableName: sdk.String("labore"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("numquam"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("sunt"),
                                                                Value: sdk.String("consequuntur"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("veniam"),
                                                            SubtableName: sdk.String("voluptates"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("in"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("minima"),
                                                                Value: sdk.String("expedita"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("ducimus"),
                                                            SubtableName: sdk.String("excepturi"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("eum"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("doloremque"),
                                                                Value: sdk.String("iure"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("nostrum"),
                                                            SubtableName: sdk.String("cumque"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("earum"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("earum"),
                                                                Value: sdk.String("culpa"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("vel"),
                                                            SubtableName: sdk.String("sapiente"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("ratione"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("libero"),
                                                                Value: sdk.String("molestias"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("alias"),
                                                            SubtableName: sdk.String("fuga"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("beatae"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("distinctio"),
                                                                Value: sdk.String("deleniti"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("eligendi"),
                                                            SubtableName: sdk.String("unde"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("veniam"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("nam"),
                                                                Value: sdk.String("accusamus"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("vitae"),
                                                            SubtableName: sdk.String("explicabo"),
                                                        },
                                                    },
                                                },
                                                shared.Row{
                                                    Cells: []shared.Value{
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("incidunt"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("soluta"),
                                                                Value: sdk.String("nihil"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("adipisci"),
                                                            SubtableName: sdk.String("provident"),
                                                        },
                                                        shared.Value{
                                                            CarrierRateName: sdk.String("reiciendis"),
                                                            FlatRate: &shared.Price{
                                                                Currency: sdk.String("dolore"),
                                                                Value: sdk.String("voluptatibus"),
                                                            },
                                                            NoShipping: sdk.Bool(false),
                                                            PricePercentage: sdk.String("eveniet"),
                                                            SubtableName: sdk.String("odio"),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        Name: sdk.String("Dr. Janice Bradtke DVM"),
                                        SingleValue: &shared.Value{
                                            CarrierRateName: sdk.String("voluptas"),
                                            FlatRate: &shared.Price{
                                                Currency: sdk.String("exercitationem"),
                                                Value: sdk.String("quis"),
                                            },
                                            NoShipping: sdk.Bool(false),
                                            PricePercentage: sdk.String("quos"),
                                            SubtableName: sdk.String("impedit"),
                                        },
                                        Subtables: []shared.Table{
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "iure",
                                                                "sed",
                                                                "odit",
                                                                "quibusdam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nam",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "accusantium",
                                                                "earum",
                                                                "excepturi",
                                                                "numquam",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "voluptatum",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "possimus",
                                                        "unde",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("culpa"),
                                                            Value: sdk.String("deserunt"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("recusandae"),
                                                            Value: sdk.String("doloremque"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("magnam"),
                                                            Value: sdk.String("quia"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("quibusdam"),
                                                            Value: sdk.String("temporibus"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("placeat"),
                                                            Value: sdk.String("est"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("est"),
                                                            Value: sdk.String("placeat"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Marco Gleichner"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quod",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "eveniet",
                                                                "sint",
                                                                "saepe",
                                                                "illo",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "nulla",
                                                                "reiciendis",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "ipsa",
                                                        "amet",
                                                        "natus",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "ducimus",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("amet"),
                                                            Value: sdk.String("ducimus"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("deleniti"),
                                                            Value: sdk.String("dolor"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("ab"),
                                                            Value: sdk.String("sint"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("quos"),
                                                            Value: sdk.String("sequi"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("eius"),
                                                            Value: sdk.String("odit"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("recusandae"),
                                                            Value: sdk.String("minima"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("aliquam"),
                                                            Value: sdk.String("similique"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("voluptatum"),
                                                            Value: sdk.String("corporis"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("commodi"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quis"),
                                                                    Value: sdk.String("provident"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("iusto"),
                                                                SubtableName: sdk.String("optio"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("ipsam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("consequatur"),
                                                                    Value: sdk.String("fugit"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("dolorem"),
                                                                SubtableName: sdk.String("nesciunt"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("inventore"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("modi"),
                                                                    Value: sdk.String("nihil"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("vitae"),
                                                                SubtableName: sdk.String("quibusdam"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("veniam"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("et"),
                                                                    Value: sdk.String("dolorum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("animi"),
                                                                SubtableName: sdk.String("mollitia"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("autem"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("illum"),
                                                                    Value: sdk.String("at"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("hic"),
                                                                SubtableName: sdk.String("nemo"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("laborum"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quidem"),
                                                                    Value: sdk.String("nulla"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("aliquid"),
                                                                SubtableName: sdk.String("eius"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "quo",
                                                                "enim",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "impedit",
                                                                "aspernatur",
                                                                "nobis",
                                                                "voluptatum",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aspernatur",
                                                                "est",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "aut",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "saepe",
                                                        "maiores",
                                                        "autem",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("saepe"),
                                                            Value: sdk.String("illo"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("aperiam"),
                                                            Value: sdk.String("quae"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("veritatis"),
                                                            Value: sdk.String("enim"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("suscipit"),
                                                            Value: sdk.String("dolor"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("alias"),
                                                            Value: sdk.String("libero"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Blake Koss"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "illum",
                                                                "blanditiis",
                                                                "tempora",
                                                                "similique",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "enim",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "aliquam",
                                                                "beatae",
                                                                "explicabo",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "corrupti",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "inventore",
                                                        "officia",
                                                        "in",
                                                        "sequi",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "fuga",
                                                        "quisquam",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("suscipit"),
                                                            Value: sdk.String("officia"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("ipsum"),
                                                            Value: sdk.String("ratione"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("expedita"),
                                                            Value: sdk.String("itaque"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("maiores"),
                                                            Value: sdk.String("provident"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("dignissimos"),
                                                            Value: sdk.String("dicta"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("repellat"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("modi"),
                                                                    Value: sdk.String("ex"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nobis"),
                                                                SubtableName: sdk.String("placeat"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("mollitia"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("architecto"),
                                                                    Value: sdk.String("quae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("aut"),
                                                                SubtableName: sdk.String("commodi"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("delectus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("officiis"),
                                                                    Value: sdk.String("omnis"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ea"),
                                                                SubtableName: sdk.String("ipsam"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("esse"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("vitae"),
                                                                    Value: sdk.String("beatae"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("pariatur"),
                                                                SubtableName: sdk.String("voluptatem"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("blanditiis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("eligendi"),
                                                                    Value: sdk.String("tenetur"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("deleniti"),
                                                                SubtableName: sdk.String("deleniti"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("necessitatibus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("cumque"),
                                                                    Value: sdk.String("iste"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("reiciendis"),
                                                                SubtableName: sdk.String("nihil"),
                                                            },
                                                        },
                                                    },
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("perspiciatis"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("occaecati"),
                                                                    Value: sdk.String("officia"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("nemo"),
                                                                SubtableName: sdk.String("quis"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("doloremque"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("similique"),
                                                                    Value: sdk.String("eum"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("quis"),
                                                                SubtableName: sdk.String("commodi"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("eveniet"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("possimus"),
                                                                    Value: sdk.String("dolor"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("ratione"),
                                                                SubtableName: sdk.String("velit"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            shared.Table{
                                                ColumnHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "accusantium",
                                                                "quo",
                                                                "officiis",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "est",
                                                                "fuga",
                                                                "autem",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "modi",
                                                                "consectetur",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "officia",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "rem",
                                                        "ea",
                                                        "debitis",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("odio"),
                                                            Value: sdk.String("eveniet"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("beatae"),
                                                            Value: sdk.String("dolore"),
                                                        },
                                                        shared.Price{
                                                            Currency: sdk.String("quisquam"),
                                                            Value: sdk.String("mollitia"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("autem"),
                                                            Value: sdk.String("non"),
                                                        },
                                                        shared.Weight{
                                                            Unit: sdk.String("doloremque"),
                                                            Value: sdk.String("atque"),
                                                        },
                                                    },
                                                },
                                                Name: sdk.String("Mr. Jack Hickle"),
                                                RowHeaders: &shared.Headers{
                                                    Locations: []shared.LocationIDSet{
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "et",
                                                            },
                                                        },
                                                        shared.LocationIDSet{
                                                            LocationIds: []string{
                                                                "similique",
                                                                "eius",
                                                                "rem",
                                                            },
                                                        },
                                                    },
                                                    NumberOfItems: []string{
                                                        "blanditiis",
                                                        "laudantium",
                                                        "earum",
                                                        "impedit",
                                                    },
                                                    PostalCodeGroupNames: []string{
                                                        "reprehenderit",
                                                        "expedita",
                                                        "hic",
                                                        "occaecati",
                                                    },
                                                    Prices: []shared.Price{
                                                        shared.Price{
                                                            Currency: sdk.String("non"),
                                                            Value: sdk.String("saepe"),
                                                        },
                                                    },
                                                    Weights: []shared.Weight{
                                                        shared.Weight{
                                                            Unit: sdk.String("architecto"),
                                                            Value: sdk.String("dicta"),
                                                        },
                                                    },
                                                },
                                                Rows: []shared.Row{
                                                    shared.Row{
                                                        Cells: []shared.Value{
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("temporibus"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("sequi"),
                                                                    Value: sdk.String("laudantium"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("excepturi"),
                                                                SubtableName: sdk.String("alias"),
                                                            },
                                                            shared.Value{
                                                                CarrierRateName: sdk.String("deleniti"),
                                                                FlatRate: &shared.Price{
                                                                    Currency: sdk.String("quasi"),
                                                                    Value: sdk.String("laboriosam"),
                                                                },
                                                                NoShipping: sdk.Bool(false),
                                                                PricePercentage: sdk.String("aspernatur"),
                                                                SubtableName: sdk.String("quod"),
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                ShipmentType: sdk.String("suscipit"),
                                StoreConfig: &shared.ServiceStoreConfig{
                                    CutoffConfig: &shared.ServiceStoreConfigCutoffConfig{
                                        LocalCutoffTime: &shared.ServiceStoreConfigCutoffConfigLocalCutoffTime{
                                            Hour: sdk.String("tempore"),
                                            Minute: sdk.String("recusandae"),
                                        },
                                        StoreCloseOffsetHours: sdk.String("harum"),
                                    },
                                    ServiceRadius: &shared.Distance{
                                        Unit: sdk.String("nisi"),
                                        Value: sdk.String("blanditiis"),
                                    },
                                    StoreCodes: []string{
                                        "doloremque",
                                        "doloribus",
                                        "vel",
                                    },
                                    StoreServiceType: sdk.String("enim"),
                                },
                            },
                        },
                        Warehouses: []shared.Warehouse{
                            shared.Warehouse{
                                BusinessDayConfig: &shared.BusinessDayConfig{
                                    BusinessDays: []string{
                                        "in",
                                        "at",
                                        "alias",
                                    },
                                },
                                CutoffTime: &shared.WarehouseCutoffTime{
                                    Hour: sdk.Int(230897),
                                    Minute: sdk.Int(652429),
                                },
                                HandlingDays: sdk.String("beatae"),
                                Name: sdk.String("Irma Bayer"),
                                ShippingAddress: &shared.Address{
                                    AdministrativeArea: sdk.String("at"),
                                    City: sdk.String("Cupertino"),
                                    Country: sdk.String("Antarctica (the territory South of 60 deg S)"),
                                    PostalCode: sdk.String("04585-1041"),
                                    StreetAddress: sdk.String("atque"),
                                },
                            },
                            shared.Warehouse{
                                BusinessDayConfig: &shared.BusinessDayConfig{
                                    BusinessDays: []string{
                                        "unde",
                                        "voluptate",
                                        "debitis",
                                        "sunt",
                                    },
                                },
                                CutoffTime: &shared.WarehouseCutoffTime{
                                    Hour: sdk.Int(320689),
                                    Minute: sdk.Int(155920),
                                },
                                HandlingDays: sdk.String("aspernatur"),
                                Name: sdk.String("Mr. Javier Harber"),
                                ShippingAddress: &shared.Address{
                                    AdministrativeArea: sdk.String("culpa"),
                                    City: sdk.String("Alexandroburgh"),
                                    Country: sdk.String("Bosnia and Herzegovina"),
                                    PostalCode: sdk.String("15177"),
                                    StreetAddress: sdk.String("laboriosam"),
                                },
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.ContentShippingsettingsCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingsettingsCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentShippingsettingsGet

Retrieves the shipping settings of the account.

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
    res, err := s.Shippingsettings.ContentShippingsettingsGet(ctx, operations.ContentShippingsettingsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odio"),
        AccountID: "repudiandae",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("dolores"),
        MerchantID: "fugiat",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.ContentShippingsettingsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingSettings != nil {
        // handle response
    }
}
```

## ContentShippingsettingsGetsupportedcarriers

Retrieves supported carriers and carrier services for an account.

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
    res, err := s.Shippingsettings.ContentShippingsettingsGetsupportedcarriers(ctx, operations.ContentShippingsettingsGetsupportedcarriersRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("sit"),
        MerchantID: "quasi",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.ContentShippingsettingsGetsupportedcarriersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingsettingsGetSupportedCarriersResponse != nil {
        // handle response
    }
}
```

## ContentShippingsettingsGetsupportedholidays

Retrieves supported holidays for an account.

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
    res, err := s.Shippingsettings.ContentShippingsettingsGetsupportedholidays(ctx, operations.ContentShippingsettingsGetsupportedholidaysRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("ut"),
        Key: sdk.String("veniam"),
        MerchantID: "eius",
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("quod"),
    }, operations.ContentShippingsettingsGetsupportedholidaysSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingsettingsGetSupportedHolidaysResponse != nil {
        // handle response
    }
}
```

## ContentShippingsettingsGetsupportedpickupservices

Retrieves supported pickup services for an account.

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
    res, err := s.Shippingsettings.ContentShippingsettingsGetsupportedpickupservices(ctx, operations.ContentShippingsettingsGetsupportedpickupservicesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("a"),
        MerchantID: "vitae",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.ContentShippingsettingsGetsupportedpickupservicesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingsettingsGetSupportedPickupServicesResponse != nil {
        // handle response
    }
}
```

## ContentShippingsettingsList

Lists the shipping settings of the sub-accounts in your Merchant Center account.

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
    res, err := s.Shippingsettings.ContentShippingsettingsList(ctx, operations.ContentShippingsettingsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("itaque"),
        MaxResults: sdk.Int64(324151),
        MerchantID: "voluptates",
        OauthToken: sdk.String("harum"),
        PageToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("porro"),
    }, operations.ContentShippingsettingsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingsettingsListResponse != nil {
        // handle response
    }
}
```

## ContentShippingsettingsUpdate

Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

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
    res, err := s.Shippingsettings.ContentShippingsettingsUpdate(ctx, operations.ContentShippingsettingsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ShippingSettings: &shared.ShippingSettings{
            AccountID: sdk.String("molestias"),
            PostalCodeGroups: []shared.PostalCodeGroup{
                shared.PostalCodeGroup{
                    Country: sdk.String("Saint Barthelemy"),
                    Name: sdk.String("Jackie Graham"),
                    PostalCodeRanges: []shared.PostalCodeRange{
                        shared.PostalCodeRange{
                            PostalCodeRangeBegin: sdk.String("rem"),
                            PostalCodeRangeEnd: sdk.String("dolorum"),
                        },
                    },
                },
            },
            Services: []shared.Service{
                shared.Service{
                    Active: sdk.Bool(false),
                    Currency: sdk.String("odit"),
                    DeliveryCountry: sdk.String("laboriosam"),
                    DeliveryTime: &shared.DeliveryTime{
                        CutoffTime: &shared.CutoffTime{
                            Hour: sdk.Int64(459348),
                            Minute: sdk.Int64(665948),
                            Timezone: sdk.String("est"),
                        },
                        HandlingBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "debitis",
                                "esse",
                                "omnis",
                                "repudiandae",
                            },
                        },
                        HolidayCutoffs: []shared.HolidayCutoff{
                            shared.HolidayCutoff{
                                DeadlineDate: sdk.String("minus"),
                                DeadlineHour: sdk.Int64(474056),
                                DeadlineTimezone: sdk.String("illo"),
                                HolidayID: sdk.String("est"),
                                VisibleFromDate: sdk.String("placeat"),
                            },
                        },
                        MaxHandlingTimeInDays: sdk.Int64(195317),
                        MaxTransitTimeInDays: sdk.Int64(91510),
                        MinHandlingTimeInDays: sdk.Int64(732172),
                        MinTransitTimeInDays: sdk.Int64(915217),
                        TransitBusinessDayConfig: &shared.BusinessDayConfig{
                            BusinessDays: []string{
                                "distinctio",
                                "rem",
                                "consectetur",
                                "nulla",
                            },
                        },
                        TransitTimeTable: &shared.TransitTable{
                            PostalCodeGroupNames: []string{
                                "dolor",
                            },
                            Rows: []shared.TransitTableTransitTimeRow{
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(649690),
                                            MinTransitTimeInDays: sdk.Int64(894165),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(203585),
                                            MinTransitTimeInDays: sdk.Int64(704152),
                                        },
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(957111),
                                            MinTransitTimeInDays: sdk.Int64(806875),
                                        },
                                    },
                                },
                                shared.TransitTableTransitTimeRow{
                                    Values: []shared.TransitTableTransitTimeRowTransitTimeValue{
                                        shared.TransitTableTransitTimeRowTransitTimeValue{
                                            MaxTransitTimeInDays: sdk.Int64(222093),
                                            MinTransitTimeInDays: sdk.Int64(860021),
                                        },
                                    },
                                },
                            },
                            TransitTimeLabels: []string{
                                "eius",
                                "ad",
                                "aperiam",
                            },
                        },
                        WarehouseBasedDeliveryTimes: []shared.WarehouseBasedDeliveryTime{
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("unde"),
                                CarrierService: sdk.String("rem"),
                                OriginAdministrativeArea: sdk.String("iure"),
                                OriginCity: sdk.String("error"),
                                OriginCountry: sdk.String("aliquam"),
                                OriginPostalCode: sdk.String("natus"),
                                OriginStreetAddress: sdk.String("ad"),
                                WarehouseName: sdk.String("cum"),
                            },
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("dolorum"),
                                CarrierService: sdk.String("quod"),
                                OriginAdministrativeArea: sdk.String("nihil"),
                                OriginCity: sdk.String("quae"),
                                OriginCountry: sdk.String("ducimus"),
                                OriginPostalCode: sdk.String("tenetur"),
                                OriginStreetAddress: sdk.String("eaque"),
                                WarehouseName: sdk.String("ex"),
                            },
                            shared.WarehouseBasedDeliveryTime{
                                Carrier: sdk.String("rerum"),
                                CarrierService: sdk.String("magni"),
                                OriginAdministrativeArea: sdk.String("laudantium"),
                                OriginCity: sdk.String("repudiandae"),
                                OriginCountry: sdk.String("minus"),
                                OriginPostalCode: sdk.String("porro"),
                                OriginStreetAddress: sdk.String("atque"),
                                WarehouseName: sdk.String("autem"),
                            },
                        },
                    },
                    Eligibility: sdk.String("eius"),
                    MinimumOrderValue: &shared.Price{
                        Currency: sdk.String("unde"),
                        Value: sdk.String("sunt"),
                    },
                    MinimumOrderValueTable: &shared.MinimumOrderValueTable{
                        StoreCodeSetWithMovs: []shared.MinimumOrderValueTableStoreCodeSetWithMov{
                            shared.MinimumOrderValueTableStoreCodeSetWithMov{
                                StoreCodes: []string{
                                    "commodi",
                                    "a",
                                    "aliquid",
                                },
                                Value: &shared.Price{
                                    Currency: sdk.String("qui"),
                                    Value: sdk.String("eligendi"),
                                },
                            },
                        },
                    },
                    Name: sdk.String("Franklin Mayer"),
                    PickupService: &shared.PickupCarrierService{
                        CarrierName: sdk.String("quisquam"),
                        ServiceName: sdk.String("quod"),
                    },
                    RateGroups: []shared.RateGroup{
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "reprehenderit",
                                "praesentium",
                                "totam",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("alias"),
                                    CarrierService: sdk.String("deserunt"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("sequi"),
                                        Value: sdk.String("sapiente"),
                                    },
                                    Name: sdk.String("Bryan Rowe PhD"),
                                    OriginPostalCode: sdk.String("culpa"),
                                    PercentageAdjustment: sdk.String("dicta"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("perferendis"),
                                    CarrierService: sdk.String("asperiores"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("deleniti"),
                                        Value: sdk.String("optio"),
                                    },
                                    Name: sdk.String("Ethel Stehr"),
                                    OriginPostalCode: sdk.String("amet"),
                                    PercentageAdjustment: sdk.String("quae"),
                                },
                                shared.CarrierRate{
                                    CarrierName: sdk.String("pariatur"),
                                    CarrierService: sdk.String("officia"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("velit"),
                                        Value: sdk.String("debitis"),
                                    },
                                    Name: sdk.String("Dr. Garry Hansen"),
                                    OriginPostalCode: sdk.String("facere"),
                                    PercentageAdjustment: sdk.String("iste"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "optio",
                                                "minus",
                                                "sint",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "consectetur",
                                                "ullam",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "nesciunt",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "esse",
                                        "magni",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("quibusdam"),
                                            Value: sdk.String("veritatis"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("ad"),
                                            Value: sdk.String("velit"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("dicta"),
                                            Value: sdk.String("nam"),
                                        },
                                    },
                                },
                                Name: sdk.String("Jacob Dibbert"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "laboriosam",
                                                "sint",
                                                "architecto",
                                                "totam",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "hic",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "iure",
                                        "consequatur",
                                        "accusamus",
                                        "cum",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "fuga",
                                        "ex",
                                        "autem",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("atque"),
                                            Value: sdk.String("saepe"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("eum"),
                                            Value: sdk.String("molestias"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("non"),
                                            Value: sdk.String("nam"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("totam"),
                                            Value: sdk.String("ut"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("non"),
                                            Value: sdk.String("illum"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("explicabo"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("quibusdam"),
                                                    Value: sdk.String("harum"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("itaque"),
                                                SubtableName: sdk.String("porro"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("ducimus"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("ad"),
                                                    Value: sdk.String("optio"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("ea"),
                                                SubtableName: sdk.String("corrupti"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("minus"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("autem"),
                                                    Value: sdk.String("aut"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("nisi"),
                                                SubtableName: sdk.String("veniam"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Tom Homenick"),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("debitis"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("neque"),
                                    Value: sdk.String("doloremque"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("tempora"),
                                SubtableName: sdk.String("quibusdam"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "cupiditate",
                                                    "expedita",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "deleniti",
                                                    "explicabo",
                                                    "veritatis",
                                                    "incidunt",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "amet",
                                                    "ipsum",
                                                    "nihil",
                                                    "hic",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "iure",
                                            "libero",
                                            "cum",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "porro",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("omnis"),
                                                Value: sdk.String("recusandae"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("adipisci"),
                                                Value: sdk.String("quam"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("facere"),
                                                Value: sdk.String("libero"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Ethel Greenfelder"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "doloribus",
                                                    "reprehenderit",
                                                    "rem",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quis",
                                                    "impedit",
                                                    "accusantium",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "facere",
                                                    "reprehenderit",
                                                    "laborum",
                                                    "officia",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "suscipit",
                                            "explicabo",
                                            "recusandae",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "iusto",
                                            "aspernatur",
                                            "ea",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("earum"),
                                                Value: sdk.String("cum"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("quod"),
                                                Value: sdk.String("veniam"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("odit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("voluptate"),
                                                        Value: sdk.String("nobis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("exercitationem"),
                                                    SubtableName: sdk.String("beatae"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("cupiditate"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("cupiditate"),
                                                        Value: sdk.String("ex"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tempore"),
                                                    SubtableName: sdk.String("minima"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("expedita"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("modi"),
                                                        Value: sdk.String("expedita"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quaerat"),
                                                    SubtableName: sdk.String("accusantium"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("recusandae"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("saepe"),
                                                        Value: sdk.String("sapiente"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("iusto"),
                                                    SubtableName: sdk.String("quasi"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("tempore"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ducimus"),
                                                        Value: sdk.String("animi"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ducimus"),
                                                    SubtableName: sdk.String("similique"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptatem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("adipisci"),
                                                        Value: sdk.String("tempora"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("modi"),
                                                    SubtableName: sdk.String("soluta"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("inventore"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ducimus"),
                                                        Value: sdk.String("vitae"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("sit"),
                                                    SubtableName: sdk.String("autem"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("rem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("deleniti"),
                                                        Value: sdk.String("illum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("necessitatibus"),
                                                    SubtableName: sdk.String("vero"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "asperiores",
                                                    "rem",
                                                    "perspiciatis",
                                                    "quam",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "velit",
                                                    "fugiat",
                                                    "pariatur",
                                                    "voluptatem",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "minus",
                                                    "pariatur",
                                                    "dolor",
                                                    "amet",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "quasi",
                                            "dicta",
                                            "rerum",
                                            "neque",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "aliquam",
                                            "voluptates",
                                            "alias",
                                            "voluptatum",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("officia"),
                                                Value: sdk.String("officia"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("ipsa"),
                                                Value: sdk.String("incidunt"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Cassandra Kerluke"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "provident",
                                                    "officiis",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "eos",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "dolor",
                                            "dignissimos",
                                            "doloremque",
                                            "consequuntur",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "quis",
                                            "cumque",
                                            "laudantium",
                                            "recusandae",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("fugiat"),
                                                Value: sdk.String("sequi"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("voluptates"),
                                                Value: sdk.String("culpa"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("sunt"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ipsa"),
                                                        Value: sdk.String("incidunt"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("maiores"),
                                                    SubtableName: sdk.String("culpa"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("eius"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("iure"),
                                                        Value: sdk.String("alias"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("molestiae"),
                                                    SubtableName: sdk.String("rerum"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptatibus"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("sequi"),
                                                        Value: sdk.String("ducimus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("minima"),
                                                    SubtableName: sdk.String("libero"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("tempora"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("sed"),
                                                        Value: sdk.String("quas"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("aspernatur"),
                                                    SubtableName: sdk.String("laudantium"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("fugit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("et"),
                                                        Value: sdk.String("reiciendis"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nulla"),
                                                    SubtableName: sdk.String("libero"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("hic"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("eum"),
                                                        Value: sdk.String("sint"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("eveniet"),
                                                    SubtableName: sdk.String("veniam"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "laboriosam",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quisquam",
                                                    "dignissimos",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "quo",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "voluptatum",
                                            "pariatur",
                                            "sequi",
                                            "quo",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "labore",
                                            "fugit",
                                            "quis",
                                            "voluptatum",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("doloremque"),
                                                Value: sdk.String("amet"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("ipsam"),
                                                Value: sdk.String("deleniti"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("laborum"),
                                                Value: sdk.String("quas"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("odit"),
                                                Value: sdk.String("placeat"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("aut"),
                                                Value: sdk.String("atque"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("repellat"),
                                                Value: sdk.String("eveniet"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("odit"),
                                                Value: sdk.String("quam"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Amanda Osinski II"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "aut",
                                                    "numquam",
                                                    "numquam",
                                                    "omnis",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "inventore",
                                                    "quaerat",
                                                    "nesciunt",
                                                    "hic",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "laboriosam",
                                            "quasi",
                                            "excepturi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "cum",
                                            "in",
                                            "repellendus",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("aperiam"),
                                                Value: sdk.String("vero"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("corporis"),
                                                Value: sdk.String("laborum"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("quae"),
                                                Value: sdk.String("voluptatibus"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nesciunt"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("autem"),
                                                        Value: sdk.String("repudiandae"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("commodi"),
                                                    SubtableName: sdk.String("sed"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("exercitationem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("natus"),
                                                        Value: sdk.String("explicabo"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("velit"),
                                                    SubtableName: sdk.String("adipisci"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("natus"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("minima"),
                                                        Value: sdk.String("minus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("provident"),
                                                    SubtableName: sdk.String("quibusdam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("explicabo"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("adipisci"),
                                                        Value: sdk.String("iusto"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ratione"),
                                                    SubtableName: sdk.String("omnis"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("impedit"),
                                                        Value: sdk.String("iusto"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quas"),
                                                    SubtableName: sdk.String("nemo"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("facilis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("exercitationem"),
                                                        Value: sdk.String("nulla"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tempore"),
                                                    SubtableName: sdk.String("magnam"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("aut"),
                                                        Value: sdk.String("voluptatem"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("vitae"),
                                                    SubtableName: sdk.String("quos"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("adipisci"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("reiciendis"),
                                                        Value: sdk.String("accusamus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tempore"),
                                                    SubtableName: sdk.String("vero"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("asperiores"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ea"),
                                                        Value: sdk.String("voluptate"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("aliquid"),
                                                    SubtableName: sdk.String("nobis"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("reprehenderit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("consequuntur"),
                                                        Value: sdk.String("accusantium"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("autem"),
                                                    SubtableName: sdk.String("pariatur"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        shared.RateGroup{
                            ApplicableShippingLabels: []string{
                                "facilis",
                                "in",
                                "ad",
                            },
                            CarrierRates: []shared.CarrierRate{
                                shared.CarrierRate{
                                    CarrierName: sdk.String("sit"),
                                    CarrierService: sdk.String("enim"),
                                    FlatAdjustment: &shared.Price{
                                        Currency: sdk.String("qui"),
                                        Value: sdk.String("dolorum"),
                                    },
                                    Name: sdk.String("Elsie Gulgowski"),
                                    OriginPostalCode: sdk.String("fugiat"),
                                    PercentageAdjustment: sdk.String("minus"),
                                },
                            },
                            MainTable: &shared.Table{
                                ColumnHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "natus",
                                            },
                                        },
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "quibusdam",
                                                "corrupti",
                                                "maxime",
                                                "aliquam",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "explicabo",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "hic",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("quae"),
                                            Value: sdk.String("eos"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("eius"),
                                            Value: sdk.String("voluptatem"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("aliquam"),
                                            Value: sdk.String("incidunt"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("totam"),
                                            Value: sdk.String("iusto"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("mollitia"),
                                            Value: sdk.String("porro"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("voluptas"),
                                            Value: sdk.String("provident"),
                                        },
                                    },
                                },
                                Name: sdk.String("Lula Marks"),
                                RowHeaders: &shared.Headers{
                                    Locations: []shared.LocationIDSet{
                                        shared.LocationIDSet{
                                            LocationIds: []string{
                                                "unde",
                                                "fugiat",
                                                "magni",
                                            },
                                        },
                                    },
                                    NumberOfItems: []string{
                                        "atque",
                                        "blanditiis",
                                    },
                                    PostalCodeGroupNames: []string{
                                        "odio",
                                        "unde",
                                        "ad",
                                        "officia",
                                    },
                                    Prices: []shared.Price{
                                        shared.Price{
                                            Currency: sdk.String("incidunt"),
                                            Value: sdk.String("aspernatur"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("asperiores"),
                                            Value: sdk.String("maxime"),
                                        },
                                        shared.Price{
                                            Currency: sdk.String("dolore"),
                                            Value: sdk.String("accusantium"),
                                        },
                                    },
                                    Weights: []shared.Weight{
                                        shared.Weight{
                                            Unit: sdk.String("laboriosam"),
                                            Value: sdk.String("laboriosam"),
                                        },
                                        shared.Weight{
                                            Unit: sdk.String("omnis"),
                                            Value: sdk.String("tenetur"),
                                        },
                                    },
                                },
                                Rows: []shared.Row{
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("animi"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("quae"),
                                                    Value: sdk.String("doloremque"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("voluptas"),
                                                SubtableName: sdk.String("pariatur"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("fugit"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("inventore"),
                                                    Value: sdk.String("odit"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("labore"),
                                                SubtableName: sdk.String("perspiciatis"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("dolore"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("ullam"),
                                                    Value: sdk.String("aut"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("atque"),
                                                SubtableName: sdk.String("quasi"),
                                            },
                                        },
                                    },
                                    shared.Row{
                                        Cells: []shared.Value{
                                            shared.Value{
                                                CarrierRateName: sdk.String("fugiat"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("odio"),
                                                    Value: sdk.String("quo"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("ipsum"),
                                                SubtableName: sdk.String("cum"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("et"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("harum"),
                                                    Value: sdk.String("magnam"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("illo"),
                                                SubtableName: sdk.String("atque"),
                                            },
                                            shared.Value{
                                                CarrierRateName: sdk.String("magnam"),
                                                FlatRate: &shared.Price{
                                                    Currency: sdk.String("incidunt"),
                                                    Value: sdk.String("consequatur"),
                                                },
                                                NoShipping: sdk.Bool(false),
                                                PricePercentage: sdk.String("nisi"),
                                                SubtableName: sdk.String("quae"),
                                            },
                                        },
                                    },
                                },
                            },
                            Name: sdk.String("Edward Balistreri Jr."),
                            SingleValue: &shared.Value{
                                CarrierRateName: sdk.String("possimus"),
                                FlatRate: &shared.Price{
                                    Currency: sdk.String("perferendis"),
                                    Value: sdk.String("qui"),
                                },
                                NoShipping: sdk.Bool(false),
                                PricePercentage: sdk.String("velit"),
                                SubtableName: sdk.String("repellendus"),
                            },
                            Subtables: []shared.Table{
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "beatae",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "veniam",
                                                    "animi",
                                                    "delectus",
                                                    "pariatur",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "id",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "quo",
                                            "aliquam",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "praesentium",
                                            "numquam",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("id"),
                                                Value: sdk.String("itaque"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("molestias"),
                                                Value: sdk.String("assumenda"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("occaecati"),
                                                Value: sdk.String("eos"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("veniam"),
                                                Value: sdk.String("amet"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("nobis"),
                                                Value: sdk.String("quos"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Angel Crooks"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "eum",
                                                    "rerum",
                                                    "a",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "et",
                                                    "eveniet",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "ea",
                                                    "exercitationem",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "fugiat",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "cumque",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("aliquam"),
                                                Value: sdk.String("consectetur"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("suscipit"),
                                                Value: sdk.String("quae"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("quam"),
                                                Value: sdk.String("dignissimos"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("atque"),
                                                Value: sdk.String("animi"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("earum"),
                                                Value: sdk.String("quaerat"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("eos"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("numquam"),
                                                        Value: sdk.String("voluptate"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("odio"),
                                                    SubtableName: sdk.String("magni"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("eveniet"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("commodi"),
                                                        Value: sdk.String("magni"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("et"),
                                                    SubtableName: sdk.String("iste"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("aut"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("occaecati"),
                                                        Value: sdk.String("vero"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("error"),
                                                    SubtableName: sdk.String("inventore"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dolore"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("labore"),
                                                        Value: sdk.String("id"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ullam"),
                                                    SubtableName: sdk.String("quibusdam"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "omnis",
                                                    "mollitia",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "nihil",
                                                    "ducimus",
                                                    "eaque",
                                                    "aliquid",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "odio",
                                                    "voluptatem",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "delectus",
                                                    "et",
                                                    "optio",
                                                    "a",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "unde",
                                            "consectetur",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "aliquid",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("enim"),
                                                Value: sdk.String("explicabo"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("beatae"),
                                                Value: sdk.String("repudiandae"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("ex"),
                                                Value: sdk.String("ex"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Bennie Friesen"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "dignissimos",
                                                    "facere",
                                                    "provident",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "dolorum",
                                                    "qui",
                                                    "nulla",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "amet",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "suscipit",
                                            "odio",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "accusamus",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("velit"),
                                                Value: sdk.String("earum"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("recusandae"),
                                                Value: sdk.String("aliquid"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("impedit"),
                                                Value: sdk.String("reiciendis"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("perspiciatis"),
                                                Value: sdk.String("delectus"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("dolorem"),
                                                Value: sdk.String("ipsam"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("officia"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("earum"),
                                                        Value: sdk.String("est"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("quisquam"),
                                                    SubtableName: sdk.String("officia"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("officiis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ratione"),
                                                        Value: sdk.String("consequuntur"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("neque"),
                                                    SubtableName: sdk.String("deserunt"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("adipisci"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("inventore"),
                                                        Value: sdk.String("tempore"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("maiores"),
                                                    SubtableName: sdk.String("ducimus"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("laborum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("architecto"),
                                                        Value: sdk.String("quod"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("minus"),
                                                    SubtableName: sdk.String("molestias"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("quam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("nihil"),
                                                        Value: sdk.String("inventore"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("ex"),
                                                    SubtableName: sdk.String("maxime"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("deleniti"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("accusantium"),
                                                        Value: sdk.String("sed"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("minus"),
                                                    SubtableName: sdk.String("quisquam"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptates"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("alias"),
                                                        Value: sdk.String("placeat"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("in"),
                                                    SubtableName: sdk.String("possimus"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("iste"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("assumenda"),
                                                        Value: sdk.String("neque"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("dolores"),
                                                    SubtableName: sdk.String("consectetur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("repellat"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quae"),
                                                        Value: sdk.String("animi"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("est"),
                                                    SubtableName: sdk.String("autem"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "nulla",
                                                    "occaecati",
                                                    "optio",
                                                    "asperiores",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "nobis",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "nemo",
                                            "commodi",
                                            "soluta",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("libero"),
                                                Value: sdk.String("id"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("quaerat"),
                                                Value: sdk.String("inventore"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("accusamus"),
                                                Value: sdk.String("maiores"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("odit"),
                                                Value: sdk.String("numquam"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("numquam"),
                                                Value: sdk.String("culpa"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("aliquam"),
                                                Value: sdk.String("iusto"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Omar Schneider Jr."),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "fugiat",
                                                    "facere",
                                                    "exercitationem",
                                                    "ut",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "numquam",
                                                    "officia",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "nemo",
                                            "nisi",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "praesentium",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("dolorem"),
                                                Value: sdk.String("placeat"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("dignissimos"),
                                                Value: sdk.String("quibusdam"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("natus"),
                                                Value: sdk.String("accusamus"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("repellat"),
                                                Value: sdk.String("est"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("doloribus"),
                                                Value: sdk.String("labore"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("adipisci"),
                                                Value: sdk.String("at"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("qui"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("consectetur"),
                                                        Value: sdk.String("ea"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("aspernatur"),
                                                    SubtableName: sdk.String("consequatur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("delectus"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("nesciunt"),
                                                        Value: sdk.String("et"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("dolor"),
                                                    SubtableName: sdk.String("voluptatum"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nesciunt"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("doloremque"),
                                                        Value: sdk.String("at"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("tenetur"),
                                                    SubtableName: sdk.String("sequi"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("temporibus"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("cum"),
                                                        Value: sdk.String("sit"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("magni"),
                                                    SubtableName: sdk.String("aspernatur"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("earum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("similique"),
                                                        Value: sdk.String("id"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("exercitationem"),
                                                    SubtableName: sdk.String("commodi"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("nostrum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("delectus"),
                                                        Value: sdk.String("quidem"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("rem"),
                                                    SubtableName: sdk.String("repellat"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("veniam"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("consequuntur"),
                                                        Value: sdk.String("repudiandae"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("nam"),
                                                    SubtableName: sdk.String("libero"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("perspiciatis"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("illum"),
                                                        Value: sdk.String("dolor"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("praesentium"),
                                                    SubtableName: sdk.String("non"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("dolor"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("corrupti"),
                                                        Value: sdk.String("ducimus"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("molestias"),
                                                    SubtableName: sdk.String("aperiam"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("fugit"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("labore"),
                                                        Value: sdk.String("neque"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("cum"),
                                                    SubtableName: sdk.String("sed"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("error"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("ratione"),
                                                        Value: sdk.String("facere"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("est"),
                                                    SubtableName: sdk.String("soluta"),
                                                },
                                            },
                                        },
                                    },
                                },
                                shared.Table{
                                    ColumnHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "vero",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "dicta",
                                            "iure",
                                            "doloribus",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "alias",
                                            "asperiores",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("animi"),
                                                Value: sdk.String("alias"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("non"),
                                                Value: sdk.String("porro"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("voluptatum"),
                                                Value: sdk.String("libero"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("quasi"),
                                                Value: sdk.String("quidem"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("exercitationem"),
                                                Value: sdk.String("exercitationem"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("similique"),
                                                Value: sdk.String("magni"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("unde"),
                                                Value: sdk.String("consequuntur"),
                                            },
                                        },
                                    },
                                    Name: sdk.String("Charles Quitzon"),
                                    RowHeaders: &shared.Headers{
                                        Locations: []shared.LocationIDSet{
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "odio",
                                                    "quaerat",
                                                    "aliquam",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "nisi",
                                                    "labore",
                                                },
                                            },
                                            shared.LocationIDSet{
                                                LocationIds: []string{
                                                    "cum",
                                                    "sunt",
                                                    "repellendus",
                                                    "voluptatem",
                                                },
                                            },
                                        },
                                        NumberOfItems: []string{
                                            "ipsum",
                                        },
                                        PostalCodeGroupNames: []string{
                                            "totam",
                                            "facilis",
                                            "consequatur",
                                        },
                                        Prices: []shared.Price{
                                            shared.Price{
                                                Currency: sdk.String("architecto"),
                                                Value: sdk.String("libero"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("rerum"),
                                                Value: sdk.String("architecto"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("in"),
                                                Value: sdk.String("fuga"),
                                            },
                                            shared.Price{
                                                Currency: sdk.String("tenetur"),
                                                Value: sdk.String("saepe"),
                                            },
                                        },
                                        Weights: []shared.Weight{
                                            shared.Weight{
                                                Unit: sdk.String("reprehenderit"),
                                                Value: sdk.String("incidunt"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("soluta"),
                                                Value: sdk.String("voluptas"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("delectus"),
                                                Value: sdk.String("repudiandae"),
                                            },
                                            shared.Weight{
                                                Unit: sdk.String("quidem"),
                                                Value: sdk.String("occaecati"),
                                            },
                                        },
                                    },
                                    Rows: []shared.Row{
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("voluptate"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("quod"),
                                                        Value: sdk.String("nihil"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("recusandae"),
                                                    SubtableName: sdk.String("illum"),
                                                },
                                                shared.Value{
                                                    CarrierRateName: sdk.String("laborum"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("reiciendis"),
                                                        Value: sdk.String("consectetur"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("provident"),
                                                    SubtableName: sdk.String("possimus"),
                                                },
                                            },
                                        },
                                        shared.Row{
                                            Cells: []shared.Value{
                                                shared.Value{
                                                    CarrierRateName: sdk.String("autem"),
                                                    FlatRate: &shared.Price{
                                                        Currency: sdk.String("tenetur"),
                                                        Value: sdk.String("rerum"),
                                                    },
                                                    NoShipping: sdk.Bool(false),
                                                    PricePercentage: sdk.String("asperiores"),
                                                    SubtableName: sdk.String("odio"),
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    ShipmentType: sdk.String("nisi"),
                    StoreConfig: &shared.ServiceStoreConfig{
                        CutoffConfig: &shared.ServiceStoreConfigCutoffConfig{
                            LocalCutoffTime: &shared.ServiceStoreConfigCutoffConfigLocalCutoffTime{
                                Hour: sdk.String("hic"),
                                Minute: sdk.String("assumenda"),
                            },
                            StoreCloseOffsetHours: sdk.String("ab"),
                        },
                        ServiceRadius: &shared.Distance{
                            Unit: sdk.String("eum"),
                            Value: sdk.String("quia"),
                        },
                        StoreCodes: []string{
                            "sequi",
                            "doloremque",
                            "dolor",
                        },
                        StoreServiceType: sdk.String("debitis"),
                    },
                },
            },
            Warehouses: []shared.Warehouse{
                shared.Warehouse{
                    BusinessDayConfig: &shared.BusinessDayConfig{
                        BusinessDays: []string{
                            "sed",
                        },
                    },
                    CutoffTime: &shared.WarehouseCutoffTime{
                        Hour: sdk.Int(220071),
                        Minute: sdk.Int(692918),
                    },
                    HandlingDays: sdk.String("excepturi"),
                    Name: sdk.String("Eloise Feil"),
                    ShippingAddress: &shared.Address{
                        AdministrativeArea: sdk.String("et"),
                        City: sdk.String("Port Verona"),
                        Country: sdk.String("Guernsey"),
                        PostalCode: sdk.String("72102"),
                        StreetAddress: sdk.String("ullam"),
                    },
                },
            },
        },
        AccessToken: sdk.String("ullam"),
        AccountID: "consectetur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("earum"),
        Key: sdk.String("vitae"),
        MerchantID: "quisquam",
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ContentShippingsettingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingSettings != nil {
        // handle response
    }
}
```
